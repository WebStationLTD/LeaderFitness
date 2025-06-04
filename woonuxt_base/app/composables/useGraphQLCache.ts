interface CacheEntry {
  data: any;
  timestamp: number;
}

interface CacheConfig {
  ttl: number; // Time to live in milliseconds
  maxSize: number; // Максимален брой записи в кеша
}

export function useGraphQLCache() {
  const CACHE_KEY = 'graphql_cache';
  const defaultConfig: CacheConfig = {
    ttl: 5 * 60 * 1000, // 5 минути
    maxSize: 50, // Максимум 50 записа
  };

  // Зареждаме кеша от localStorage
  const loadCache = (): { [key: string]: CacheEntry } => {
    if (process.client) {
      const cached = localStorage.getItem(CACHE_KEY);
      return cached ? JSON.parse(cached) : {};
    }
    return {};
  };

  // Запазваме кеша в localStorage
  const saveCache = (cache: { [key: string]: CacheEntry }): void => {
    if (process.client) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    }
  };

  // Изчистваме изтеклите записи
  const clearExpiredEntries = (cache: { [key: string]: CacheEntry }): void => {
    const now = Date.now();
    Object.entries(cache).forEach(([key, entry]) => {
      if (now - entry.timestamp > defaultConfig.ttl) {
        delete cache[key];
      }
    });
  };

  // Ограничаваме размера на кеша
  const limitCacheSize = (cache: { [key: string]: CacheEntry }): void => {
    const entries = Object.entries(cache);
    if (entries.length > defaultConfig.maxSize) {
      // Сортираме по timestamp и премахваме най-старите
      entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
      const entriesToRemove = entries.length - defaultConfig.maxSize;
      entries.slice(0, entriesToRemove).forEach(([key]) => {
        delete cache[key];
      });
    }
  };

  // Генерираме ключ за кеша базиран на заявката и променливите
  const generateCacheKey = (query: string, variables: any): string => {
    return `${query}:${JSON.stringify(variables)}`;
  };

  // Запазваме резултат в кеша
  const setCacheEntry = (query: string, variables: any, data: any): void => {
    if (process.client) {
      const cache = loadCache();
      const key = generateCacheKey(query, variables);
      
      cache[key] = {
        data,
        timestamp: Date.now(),
      };

      clearExpiredEntries(cache);
      limitCacheSize(cache);
      saveCache(cache);
    }
  };

  // Взимаме резултат от кеша
  const getCacheEntry = (query: string, variables: any): any | null => {
    if (process.client) {
      const cache = loadCache();
      const key = generateCacheKey(query, variables);
      const entry = cache[key];

      if (entry && Date.now() - entry.timestamp <= defaultConfig.ttl) {
        return entry.data;
      }

      // Ако записът е изтекъл, го изтриваме
      if (entry) {
        delete cache[key];
        saveCache(cache);
      }
    }
    return null;
  };

  // Изчистваме целия кеш
  const clearCache = (): void => {
    if (process.client) {
      localStorage.removeItem(CACHE_KEY);
    }
  };

  // Изчистваме конкретен запис от кеша
  const invalidateCacheEntry = (query: string, variables: any): void => {
    if (process.client) {
      const cache = loadCache();
      const key = generateCacheKey(query, variables);
      delete cache[key];
      saveCache(cache);
    }
  };

  return {
    setCacheEntry,
    getCacheEntry,
    clearCache,
    invalidateCacheEntry,
  };
} 