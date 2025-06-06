import{e as N,i as G,b as V,h as R,j as ie,k as ue,l as le,m as de,n as me,o as ge,q as pe,r as ye,s as he,u as re,t as fe,v as ve,w as Se,x as Ce,y as te,z as we,A as Pe,B as se,C as Me,D as be,g as Ie,E as Te,F as $e}from"./Dz7oOF7a.js";import{q as x,S as Ee,U as ne,i as Ge,z as W,s as Ae,h as H,V as qe}from"./CLICgETl.js";const Le="4.4.9",ke={version:Le};function K(){var l,E,L,b,B;const r=N(),h=V(),f=G("isShowingMobileMenu",()=>!1),s=ke.version,P=((l=h.public)==null?void 0:l.PRODUCTS_PER_PAGE)||24,M=Array.isArray((E=h.public)==null?void 0:E.WOO_NUXT_SEO)?(L=h.public)==null?void 0:L.WOO_NUXT_SEO:[],n=((B=(b=h.public)==null?void 0:b.FRONT_END_URL)==null?void 0:B.replace(/\/$/,""))||null,d=!1,w="/images/placeholder.jpg";function y(i=void 0){f.value=i??!f.value}const c=i=>i.map(m=>({name:m.name.replace(/[-\s]/g,""),value:m.value.replace(/[-\s]/g,"")})),g=(i,m)=>JSON.stringify(c(i))===JSON.stringify(c(m)),v=i=>i.map(m=>{let q=m.name.toLowerCase();q=q.startsWith("pa_")?q.replace("pa_",""):q;const k=m.value.toLowerCase();return{name:q,value:k}});function T(){const i=document.cookie.split(";");for(const m of i){const q=m.indexOf("="),k=q>-1?m.substring(0,q):m;document.cookie=k+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}function $(){localStorage.clear()}function A(i,m,q){const k=new RegExp("([?;&])"+i+"[^&;]*[;&]?"),F=q.replace(k,"$1").replace(/&$/,"");return(F.length>2?F+"&":"?")+(m?i+"="+m:"")}function U(i){const m=document.querySelector("body");m==null||m.classList.remove(i)}function O(i){const m=document.querySelector("body");m==null||m.classList.add(i)}function D(i){const m=document.querySelector("body");m!=null&&m.classList.contains(i)?m.classList.remove(i):m==null||m.classList.add(i)}const t=i=>{var k,F,Z,j;const m=((F=(k=i==null?void 0:i.attributes)==null?void 0:k.nodes)==null?void 0:F.length)??0;let q=[];for(let Q=0;Q<m;Q++){const Y=[];(j=(Z=i==null?void 0:i.variations)==null?void 0:Z.nodes)==null||j.forEach(ce=>{var ee,ae;const X=(ae=(ee=ce.attributes)==null?void 0:ee.nodes[Q])==null?void 0:ae.value;typeof X=="string"&&Y.push(X)}),Y.some(Boolean)||q.push(Q)}return q},S=x(()=>Object.keys(r.query).length===0);return{isShowingMobileMenu:f,wooNuxtVersionInfo:s,productsPerPage:P,isQueryEmpty:S,wooNuxtSEO:M,frontEndUrl:n,isDev:d,FALLBACK_IMG:w,formatArray:v,arraysEqual:g,clearAllCookies:T,clearAllLocalStorage:$,replaceQueryParam:A,addBodyClass:O,removeBodyClass:U,toggleBodyClass:D,toggleMobileMenu:y,checkForVariationTypeOfAny:t,formatDate:i=>i?new Date(i).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"",formatPrice:i=>parseFloat(i).toLocaleString("en-US",{style:"currency",currency:"EUR"}),scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})},stripHtml:(i="")=>i===null?"":i.replace(/(<([^>]+)>)/gi,""),debounce:(i,m=100)=>{let q;return function(...k){clearTimeout(q),q=setTimeout(()=>i.apply(this,k),m)}},logGQLError:i=>{var q,k;if(!r.query.debug)return;const m=(k=(q=i==null?void 0:i.gqlErrors)==null?void 0:q[0])==null?void 0:k.message;m&&console.error(m)},getDomain:i=>{const m=i.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);return m!==null&&m.length>2&&typeof m[2]=="string"&&m[2].length>0?m[2]:""}}}const _=()=>{const{refreshCart:r}=z(),{logGQLError:h,clearAllCookies:f}=K(),s=R(),P=G("customer",()=>({billing:{},shipping:{}})),M=G("viewer",()=>null),n=G("isPending",()=>!1),d=G("orders",()=>null),w=G("downloads",()=>null),y=G("loginClients",()=>null),c=async a=>{var u,o;n.value=!0;try{const{login:e}=await he(a);return e!=null&&e.user&&(e!=null&&e.authToken)&&(ne(e.authToken),await r()),n.value=!1,{success:!0,error:null}}catch(e){return h(e),n.value=!1,{success:!1,error:(o=(u=e==null?void 0:e.gqlErrors)==null?void 0:u[0])==null?void 0:o.message}}},g=async(a,u,o)=>{var e,I,l;n.value=!0;try{const L=await ye({input:{oauthResponse:{state:a,code:u},provider:o}});return(e=L.login)!=null&&e.authToken&&(ne(L.login.authToken),await r(),M.value===null)?{success:!1,error:"Your credentials are correct, but there was an error logging in. This is most likely due to an SSL error. Please try again later. If the problem persists, please contact support."}:{success:!0,error:null}}catch(E){return h(E),{success:!1,error:(l=(I=E==null?void 0:E.gqlErrors)==null?void 0:I[0])==null?void 0:l.message}}finally{n.value=!1}},v=async()=>{n.value=!0;try{const{logout:a}=await ge();return a&&(await r(),f(),P.value={billing:{},shipping:{}}),{success:!0,error:null}}catch(a){return h(a),{success:!1,error:a}}finally{A(null),s.currentRoute.value.path==="/my-account"&&M.value===null?s.push("/my-account"):s.push("/")}},T=async a=>{var u;n.value=!0;try{return await me({input:a}),{success:!0,error:null}}catch(o){h(o);const e=(u=o==null?void 0:o.gqlErrors)==null?void 0:u[0];return n.value=!1,{success:!1,error:e==null?void 0:e.message}}},$=a=>{const u=a==null?void 0:a.sessionToken;if(u){Ee({"woocommerce-session":`Session ${u}`});const o=pe("woocommerce-session");o.value=u}P.value=a,n.value=!1},A=a=>{M.value=a,n.value=!1},U=async({username:a})=>{var u;try{n.value=!0;const{sendPasswordResetEmail:o}=await de({username:a});return o!=null&&o.success?(n.value=!1,{success:!0,error:null}):{success:!1,error:"There was an error sending the reset password email. Please try again later."}}catch(o){h(o),n.value=!1;const e=(u=o==null?void 0:o.gqlErrors)==null?void 0:u[0];return{success:!1,error:e==null?void 0:e.message}}},O=async({key:a,login:u,password:o})=>{var e,I;try{n.value=!0;const{resetUserPassword:l}=await le({key:a,login:u,password:o});return(e=l==null?void 0:l.user)!=null&&e.id?(n.value=!1,{success:!0,error:null}):{success:!1,error:"There was an error resetting the password. Please try again later."}}catch(l){n.value=!1;const E=(I=l==null?void 0:l.gqlErrors)==null?void 0:I[0];return{success:!1,error:E==null?void 0:E.message}}},D=async()=>{var a,u;try{const{customer:o}=await ue();return o?(d.value=((a=o.orders)==null?void 0:a.nodes)??[],{success:!0,error:null}):{success:!1,error:"There was an error getting your orders. Please try again later."}}catch(o){h(o);const e=(u=o==null?void 0:o.gqlErrors)==null?void 0:u[0];return{success:!1,error:e==null?void 0:e.message}}},t=async()=>{var a,u;try{const{customer:o}=await ie();return o?(w.value=((a=o.downloadableItems)==null?void 0:a.nodes)??[],{success:!0,error:null}):{success:!1,error:"There was an error getting your downloads. Please try again later."}}catch(o){h(o);const e=(u=o==null?void 0:o.gqlErrors)==null?void 0:u[0];return{success:!1,error:e==null?void 0:e.message}}},S=a=>{y.value=a},C=x(()=>{var a,u;return((u=(a=M.value)==null?void 0:a.avatar)==null?void 0:u.url)??null}),p=x(()=>M.value?"/my-account?tab=wishlist":"/wishlist");return{viewer:M,customer:P,isPending:n,orders:d,downloads:w,avatar:C,wishlistLink:p,loginUser:c,loginClients:y,loginWithProvider:g,updateCustomer:$,updateViewer:A,logoutUser:v,registerUser:T,sendResetPasswordEmail:U,resetPasswordWithKey:O,getOrders:D,getDownloads:t,updateLoginClients:S}};function z(){const{storeSettings:r}=re(),h=G("cart",()=>null),f=G("isShowingCart",()=>!1),s=G("isUpdatingCart",()=>!1),P=G("isUpdatingCoupon",()=>!1),M=G("paymentGateways",()=>null),{logGQLError:n,clearAllCookies:d}=K();async function w(){try{const{cart:p,customer:a,viewer:u,paymentGateways:o,loginClients:e}=await Pe(),{updateCustomer:I,updateViewer:l,updateLoginClients:E}=_();return p&&c(p),a&&I(a),u&&l(u),o&&g(o),e&&E(e.filter(L=>L!==null)),!0}catch(p){return n(p),d(),y(),!1}finally{s.value=!1}}function y(){h.value=null,M.value=null}function c(p){h.value=p||null}function g(p){M.value=p}function v(p=void 0){f.value=p??!f.value}async function T(p){s.value=!0;try{const{addToCart:a}=await we({input:p});a!=null&&a.cart&&(h.value=a.cart);const{storeSettings:u}=re();u.autoOpenCart&&!f.value&&v(!0)}catch(a){n(a)}}async function $(p){s.value=!0;const{updateItemQuantities:a}=await te({key:p,quantity:0});c(a==null?void 0:a.cart)}async function A(p,a){s.value=!0;try{const{updateItemQuantities:u}=await te({key:p,quantity:a});c(u==null?void 0:u.cart)}catch(u){n(u)}}async function U(){try{s.value=!0;const{emptyCart:p}=await Ce();c(p==null?void 0:p.cart)}catch(p){n(p)}}async function O(p){s.value=!0;const{updateShippingMethod:a}=await Se({shippingMethods:p});c(a==null?void 0:a.cart)}async function D(p){try{P.value=!0;const{applyCoupon:a}=await ve({code:p});c(a==null?void 0:a.cart),P.value=!1}catch(a){P.value=!1,n(a)}return{message:null}}async function t(p){try{s.value=!0;const{removeCoupons:a}=await fe({codes:[p]});c(a==null?void 0:a.cart)}catch(a){n(a),s.value=!1}}Ge(h,p=>{s.value=!1});const S=x(()=>{var a,u;const p=((u=(a=h.value)==null?void 0:a.contents)==null?void 0:u.nodes)||[];return p.length===0?!1:p.every(o=>{var e,I;return((I=(e=o.product)==null?void 0:e.node)==null?void 0:I.virtual)===!0})}),C=x(()=>r.hideBillingAddressForVirtualProducts?!S.value:!0);return{cart:h,isShowingCart:f,isUpdatingCart:s,isUpdatingCoupon:P,paymentGateways:M,isBillingAddressEnabled:C,updateCart:c,refreshCart:w,toggleCart:v,addToCart:T,removeItem:$,updateItemQuantity:A,emptyCart:U,updateShippingMethod:O,applyCoupon:D,removeCoupon:t}}function Be(){const r="graphql_cache",h={ttl:3e5,maxSize:50},f=()=>{{const g=localStorage.getItem(r);return g?JSON.parse(g):{}}},s=g=>{localStorage.setItem(r,JSON.stringify(g))},P=g=>{const v=Date.now();Object.entries(g).forEach(([T,$])=>{v-$.timestamp>h.ttl&&delete g[T]})},M=g=>{const v=Object.entries(g);if(v.length>h.maxSize){v.sort(($,A)=>$[1].timestamp-A[1].timestamp);const T=v.length-h.maxSize;v.slice(0,T).forEach(([$])=>{delete g[$]})}},n=(g,v)=>`${g}:${JSON.stringify(v)}`;return{setCacheEntry:(g,v,T)=>{{const $=f(),A=n(g,v);$[A]={data:T,timestamp:Date.now()},P($),M($),s($)}},getCacheEntry:(g,v)=>{{const T=f(),$=n(g,v),A=T[$];if(A&&Date.now()-A.timestamp<=h.ttl)return A.data;A&&(delete T[$],s(T))}return null},clearCache:()=>{localStorage.removeItem(r)},invalidateCacheEntry:(g,v)=>{{const T=f(),$=n(g,v);delete T[$],s(T)}}}}function Oe(){const r=N(),h=R(),{updateProductList:f}=J(),s=G("filter",()=>"");s.value=r.query.filter;function P(y){var c,g,v;return((v=(g=(c=s.value)==null?void 0:c.split(`${y}[`)[1])==null?void 0:g.split("]")[0])==null?void 0:v.split(","))||[]}function M(y,c){var A;let g=s.value||"";(A=s.value)!=null&&A.includes(y)?g=c.length?s.value.replace(`${y}[${P(y)}]`,`${y}[${c}]`):s.value.replace(`${y}[${P(y)}]`,""):g=s.value?`${s.value},${y}[${c}]`:`${y}[${c}]`,g=g.replace(/^,/,"").replace(/,$/,""),g=g.replace(/,{2,}/g,","),s.value=g;const v=r.path.includes("/page/")?r.path.split("/page/")[0]:r.path,T={...r.query};g?T.filter=g:delete T.filter;const $=Object.keys(T).length>0?`${v}?${new URLSearchParams(T).toString()}`:v;se($)}function n(){const{scrollToTop:y}=K();s.value="";const c=G("searchQuery",()=>"");c.value="";const g=r.path.includes("/page/")?r.path.split("/page/")[0]:r.path;h.push({path:g,query:{}}),setTimeout(()=>{f(),y()},50)}const d=x(()=>{const y=N();return!!(s.value||y.query.search||y.query.priceMin||y.query.priceMax||y.query.sale||y.query.rating||y.query.category||y.query.orderby||y.query.order)});function w(y){return y}return{getFilter:P,setFilter:M,resetFilter:n,isFiltersActive:d,filterProducts:w}}function J(){const{setCacheEntry:r,getCacheEntry:h}=Be(),f=G("products",()=>[]),s=G("currentPage",()=>null),P=G("productsLoading",()=>!1),M=G("totalProducts",()=>0),n=G("currentCursor",()=>null),d=G("previousCursors",()=>[]);async function w(t,S={}){var C,p,a,u;P.value=!0;try{const o=N(),e={...S};let I;if(o.name==="produkt-kategoriya-slug"||o.name==="produkt-kategoriya-page-pager"?I=o.params.categorySlug||o.params.slug:(o.name==="product-category-slug"||o.name==="product-category-page-pager")&&(I=o.params.slug),I)e.categoryIn=[I];else if(o.query.filter){const b=o.query.filter;if(b.startsWith("category[")){const i=(((C=b.match(/category\[(.*?)\]/))==null?void 0:C[1])||"").split(",").filter(Boolean);i.length>0&&(e.categoryIn=i)}}if(t===1){try{const b={first:12,after:null,orderby:"DATE",order:"DESC"};e.categoryIn&&e.categoryIn.length>0&&(b.slug=e.categoryIn,console.log("Server-side category filter:",e.categoryIn)),e.search&&(b.search=e.search),e.priceMin&&(b.priceMin=e.priceMin),e.priceMax&&(b.priceMax=e.priceMax),e.onSale&&(b.onSale=e.onSale),e.rating&&(b.rating=e.rating),e.orderby&&(b.orderby=e.orderby),e.order&&(b.order=e.order.toUpperCase()),console.log("Server-side query variables:",JSON.stringify(b,null,2));const B=h("getProducts",b);if(B!=null&&B.products)console.log("Using cached products data"),s.value=B.products,f.value=B.products.nodes||[],n.value=B.products.pageInfo.endCursor||null;else{console.log("Fetching fresh products data");const{data:i}=await W("getProducts",b);(p=i.value)!=null&&p.products?(console.log("Server-side products received:",(a=i.value.products.nodes)==null?void 0:a.length),s.value=i.value.products,f.value=i.value.products.nodes||[],n.value=i.value.products.pageInfo.endCursor||null,r("getProducts",b,i.value)):(console.error("No products data received from GraphQL"),f.value=[],s.value=null,n.value=null)}await c(e)}catch(b){console.error("Error during server-side products fetch:",b),f.value=[],s.value=null,n.value=null}return}const l={first:12,orderby:"DATE",order:"DESC",slug:e.categoryIn||null};e.search&&(l.search=e.search),e.priceMin&&(l.priceMin=e.priceMin),e.priceMax&&(l.priceMax=e.priceMax),e.onSale&&(l.onSale=e.onSale),e.rating&&(l.rating=e.rating),e.orderby&&(l.orderby=e.orderby),e.order&&(l.order=e.order.toUpperCase());let E=null,L=null;for(let b=1;b<=t;b++){const B={...l,after:b===1?null:L},m=V().public.GQL_HOST;if(!m)throw new Error("GraphQL host is not configured");const q=h("getProducts",B);if(q!=null&&q.products)console.log("Using cached products data for page",b),E=q.products;else{const k=await $fetch(m,{method:"POST",body:{query:`
                query getProducts(
                  $after: String
                  $first: Int = 12
                  $search: String
                  $slug: [String]
                  $priceMin: Float
                  $priceMax: Float
                  $onSale: Boolean
                  $orderby: ProductsOrderByEnum = DATE
                  $order: OrderEnum = DESC
                  $rating: [Int]
                ) {
                  products(
                    first: $first
                    after: $after
                    where: {
                      categoryIn: $slug
                      search: $search
                      minPrice: $priceMin
                      maxPrice: $priceMax
                      onSale: $onSale
                      rating: $rating
                      visibility: VISIBLE
                      status: "publish"
                      orderby: { field: $orderby, order: $order }
                    }
                  ) {
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                      startCursor
                      endCursor
                    }
                    nodes {
                      name
                      slug
                      type
                      databaseId
                      id
                      averageRating
                      reviewCount
                      ... on SimpleProduct {
                        price
                        regularPrice
                        salePrice
                        stockStatus
                        stockQuantity
                        image {
                          sourceUrl
                          altText
                        }
                      }
                      ... on VariableProduct {
                        price
                        regularPrice
                        salePrice
                        stockStatus
                        stockQuantity
                        image {
                          sourceUrl
                          altText
                        }
                        variations {
                          nodes {
                            databaseId
                            name
                            price
                            regularPrice
                            salePrice
                            stockStatus
                            stockQuantity
                            attributes {
                              nodes {
                                name
                                value
                              }
                            }
                            image {
                              sourceUrl
                              altText
                            }
                          }
                        }
                      }
                    }
                  }
                }
              `,variables:B}});(u=k.data)!=null&&u.products&&(E=k.data.products,r("getProducts",B,k.data))}E&&(b<t?(L=E.pageInfo.endCursor||null,L&&!d.value.includes(L)&&d.value.push(L)):(s.value=E,f.value=E.nodes||[],n.value=E.pageInfo.endCursor||null))}await c(e)}catch(o){console.error("Error loading products for page:",o)}finally{P.value=!1}}async function y(t={},S="first",C=!1){var e,I,l,E;`${S}${JSON.stringify(t)}`;const p=t.orderby||"DATE",a=t.order?t.order.toUpperCase():"DESC",u={first:S==="prev"?void 0:12,last:S==="prev"?12:void 0,before:S==="prev"?d.value[d.value.length-2]||null:void 0,after:S==="next"?n.value:void 0,search:t.search||void 0,slug:(e=t.categoryIn)!=null&&e.length?t.categoryIn:void 0,priceMin:t.priceMin||void 0,priceMax:t.priceMax||void 0,onSale:t.onSale||void 0,orderby:p,order:a,rating:(I=t.rating)!=null&&I.length?t.rating:void 0},o=h("getProducts",u);if(!C&&(o!=null&&o.products)){s.value=o.products,f.value=o.products.nodes||[];return}C||(P.value=!0);try{const L=`
        query getProducts(
          $after: String
          $before: String
          $slug: [String]
          $first: Int = 12
          $last: Int
          $search: String
          $priceMin: Float
          $priceMax: Float
          $onSale: Boolean
          $orderby: ProductsOrderByEnum = DATE
          $order: OrderEnum = DESC
          $rating: [Int]
        ) {
          products(
            first: $first
            last: $last
            after: $after
            before: $before
            where: {
              categoryIn: $slug
              search: $search
              minPrice: $priceMin
              maxPrice: $priceMax
              onSale: $onSale
              rating: $rating
              visibility: VISIBLE
              status: "publish"
              orderby: { field: $orderby, order: $order }
            }
          ) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            nodes {
              name
              slug
              type
              databaseId
              id
              averageRating
              reviewCount
              ... on SimpleProduct {
                price
                regularPrice
                salePrice
                stockStatus
                stockQuantity
                image {
                  sourceUrl
                  altText
                }
              }
              ... on VariableProduct {
                price
                regularPrice
                salePrice
                stockStatus
                stockQuantity
                image {
                  sourceUrl
                  altText
                }
                variations {
                  nodes {
                    databaseId
                    name
                    price
                    regularPrice
                    salePrice
                    stockStatus
                    stockQuantity
                    attributes {
                      nodes {
                        name
                        value
                      }
                    }
                    image {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `;let b=null;{const i=V().public.GQL_HOST||"https://leaderfitness.admin-panels.com/graphql",m=await $fetch(i,{method:"POST",body:{query:L,variables:u}});(l=m.data)!=null&&l.products&&(b=m.data.products),b&&(C?r("getProducts",u,b):(s.value=b,f.value=b.nodes||[],await c(t)))}C||(S==="next"&&n.value?d.value.push(n.value):S==="prev"?d.value.pop():S==="first"&&(d.value=[]),n.value=((E=s.value)==null?void 0:E.pageInfo.endCursor)||null,S==="first"&&await c(t))}catch(L){console.error("Грешка при зареждане на продукти:",L)}finally{C||(P.value=!1)}}async function c(t={}){var S,C,p,a;try{const u={search:t.search||void 0,slug:(S=t.categoryIn)!=null&&S.length?t.categoryIn:void 0,priceMin:t.priceMin||void 0,priceMax:t.priceMax||void 0,onSale:t.onSale||void 0,orderby:t.orderby||"DATE",order:t.order?t.order.toUpperCase():"DESC",rating:(C=t.rating)!=null&&C.length?t.rating:void 0},o=`
        query getProductsCount(
          $slug: [String]
          $search: String
          $priceMin: Float
          $priceMax: Float
          $onSale: Boolean
          $orderby: ProductsOrderByEnum = DATE
          $order: OrderEnum = DESC
          $rating: [Int]
        ) {
          products(
            first: 9999
            where: {
              categoryIn: $slug
              search: $search
              minPrice: $priceMin
              maxPrice: $priceMax
              onSale: $onSale
              rating: $rating
              visibility: VISIBLE
              status: "publish"
              orderby: { field: $orderby, order: $order }
            }
          ) {
            edges {
              node {
                databaseId
              }
            }
          }
        }
      `;{const I=V().public.GQL_HOST||"https://leaderfitness.admin-panels.com/graphql",l=await $fetch(I,{method:"POST",body:{query:o,variables:u}});(a=(p=l.data)==null?void 0:p.products)!=null&&a.edges&&(M.value=l.data.products.edges.length)}}catch(u){console.error("Грешка при зареждане на общ брой продукти:",u),M.value=0}}async function g(t={}){var S;(S=s.value)!=null&&S.pageInfo.hasNextPage&&await y(t,"next")}async function v(t={}){var S;(S=s.value)!=null&&S.pageInfo.hasPreviousPage&&await y(t,"prev")}async function T(t={}){n.value=null,d.value=[],await y(t,"first")}function $(t){if(!Array.isArray(t))throw new Error("Products must be an array.");f.value=[...t]}const A=async()=>{const t=N(),{scrollToTop:S}=K(),{getFilter:C}=Oe();let p;t.name==="produkt-kategoriya-slug"||t.name==="produkt-kategoriya-page-pager"?p=t.params.categorySlug||t.params.slug:(t.name==="product-category-slug"||t.name==="product-category-page-pager")&&(p=t.params.slug);const a={search:t.query.search,categoryIn:p?[p]:t.query.category?[t.query.category]:C("category").length>0?C("category"):void 0,priceMin:t.query.priceMin?parseFloat(t.query.priceMin):void 0,priceMax:t.query.priceMax?parseFloat(t.query.priceMax):void 0,onSale:C("sale").includes("true")?!0:void 0,orderby:t.query.orderby||"DATE",order:t.query.order||"DESC",rating:C("rating").length>0?C("rating").map(e=>parseInt(e,10)):void 0},u=C("price");if(u.length===2&&u[0]&&u[1]){const e=parseFloat(u[0]),I=parseFloat(u[1]);isNaN(e)||(a.priceMin=e),isNaN(I)||(a.priceMax=I)}const o=U();t.params.pageNumber||(n.value=null,d.value=[]),await w(o,a),S()};function U(){const S=N().params.pageNumber;if(S&&typeof S=="string"){const C=parseInt(S,10);return C>0?C:1}return 1}function O(t){const S=N(),C={...S.query};if(S.name==="produkt-kategoriya-slug"||S.name==="produkt-kategoriya-page-pager"){const p=S.params.categorySlug||S.params.slug;return t===1?`/produkt-kategoriya/${p}${Object.keys(C).length?"?"+new URLSearchParams(C).toString():""}`:`/produkt-kategoriya/${p}/page/${t}${Object.keys(C).length?"?"+new URLSearchParams(C).toString():""}`}return t===1?`/products${Object.keys(C).length?"?"+new URLSearchParams(C).toString():""}`:`/products/page/${t}${Object.keys(C).length?"?"+new URLSearchParams(C).toString():""}`}async function D(t){const C={...N().query};delete C.page;const p={path:O(t),query:C};await se(p)}return{products:f,currentPage:s,isLoading:P,totalProducts:M,previousCursors:d,loadProducts:y,loadProductsForPage:w,nextPage:g,prevPage:v,refreshProducts:T,setProducts:$,updateProductList:A,getCurrentPageFromRoute:U,getPageUrl:O,navigateToPage:D}}function De(){const r=N(),h=R(),f=G("isShowingSearch",()=>!1),s=G("searchQuery",()=>""),P=x(()=>!!(s.value||r.query.search));s.value=r.query.search;function M(){return r.query.search}function n(c){const{updateProductList:g}=J();s.value=c;const v=r.path.includes("/page/")?r.path.split("/page/")[0]:r.path;h.push({path:v,query:{...r.query,search:c||void 0}}),setTimeout(()=>{g()},50)}function d(){const{updateProductList:c}=J();s.value="";const g=r.path.includes("/page/")?r.path.split("/page/")[0]:r.path;h.push({path:g,query:{...r.query,search:void 0}}),setTimeout(()=>{c()},50)}const w=()=>{f.value=!f.value};function y(c){return c}return{getSearchQuery:M,setSearchQuery:n,clearSearchQuery:d,searchProducts:y,isSearchActive:P,isShowingSearch:f,toggleSearch:w}}function xe(){const r=G("wishlist",()=>[]);function h(d){d.databaseId&&!s(d.databaseId)&&(r.value.push(d),localStorage.setItem("wishlist",JSON.stringify(r.value)))}function f(d){r.value=r.value.filter(w=>w.databaseId!==d),localStorage.setItem("wishlist",JSON.stringify(r.value))}const s=d=>d?r.value.some(w=>w.databaseId===d):!1,P=x(()=>r.value.length===0);function M(){const d=localStorage.getItem("wishlist");d&&(r.value=JSON.parse(d))}function n(){r.value=[],localStorage.removeItem("wishlist")}return Ae(()=>{M()}),{theList:r,addToWishlist:h,removeFromWishlist:f,isInList:s,isEmpty:P,clearWishlist:n}}const oe=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belau",code:"PW"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bonaire, Saint Eustatius and Saba",code:"BQ"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"British Virgin Islands",code:"VG"},{name:"Brunei",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo (Brazzaville)",code:"CG"},{name:"Congo (Kinshasa)",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"CuraÇao",code:"CW"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and McDonald Islands",code:"HM"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Republic of Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Ivory Coast",code:"CI"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Laos",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao S.A.R., China",code:"MO"},{name:"Macedonia",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia",code:"FM"},{name:"Moldova",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montenegro",code:"ME"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"North Korea",code:"KP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palestinian Territory",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russia",code:"RU"},{name:"Rwanda",code:"RW"},{name:"Saint Barthélemy",code:"BL"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Martin (French part)",code:"MF"},{name:"Saint Martin (Dutch part)",code:"SX"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"San Marino",code:"SM"},{name:"São Tomé and Príncipe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia",code:"RS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia/Sandwich Islands",code:"GS"},{name:"South Korea",code:"KR"},{name:"South Sudan",code:"SS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syria",code:"SY"},{name:"Taiwan",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom (UK)",code:"GB"},{name:"United States (US)",code:"US"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Vatican",code:"VA"},{name:"Venezuela",code:"VE"},{name:"Vietnam",code:"VN"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Western Samoa",code:"WS"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],Fe=()=>{const r=G("allowedCountries",()=>null),h=G("isLoadingAllowedCountries",()=>!1),f=G("countriesToShow",()=>oe),s=G("countryStatesDict",()=>({})),P=G("isLoadingCountryStates",()=>({}));async function M(){if(!(r.value||h.value)){h.value=!0;try{const d=await be();d.allowedCountries&&(r.value=d.allowedCountries.filter(w=>w!==null),f.value=oe.filter(w=>{var y;return(y=r.value)==null?void 0:y.includes(w.code)}))}catch(d){console.error("Failed to retrieve allowed countries",d)}finally{h.value=!1}}}async function n(d){if(!(s.value[d]||P.value[d])){P.value[d]=!0;try{const{countryStates:w}=await Me({country:d});w&&(s.value[d]=w)}catch(w){console.error(`Failed to retrieve states for country ${d}`,w)}finally{P.value[d]=!1}}}return{getAllowedCountries:M,countriesToShow:f,getStatesForCountry:n,countryStatesDict:s}};function Re(){const r=G("orderInput",()=>({customerNote:"",paymentMethod:"",shipToDifferentAddress:!1,metaData:[{key:"order_via",value:"WooNuxt"}]})),h=G("isProcessingOrder",()=>!1);async function f(){var y;const{customer:M,viewer:n}=_(),{isUpdatingCart:d,refreshCart:w}=z();d.value=!0;try{if(!((y=n==null?void 0:n.value)!=null&&y.id))throw new Error("Viewer ID is missing.");const{updateCustomer:c}=await Ie({input:{id:n.value.id,shipping:r.value.shipToDifferentAddress?M.value.shipping:M.value.billing,billing:M.value.billing}});c&&await w()}catch(c){console.error("Error updating shipping location:",c)}finally{d.value=!1}}async function s(M){return new Promise(n=>{const y=window.innerWidth/2-375,c=window.innerHeight/2-750/2+80,g=window.open(M,"",`width=750,height=750,top=${c},left=${y}`),v=$e(()=>{g&&g.closed&&(clearInterval(v),n(!0))},500)})}return{orderInput:r,isProcessingOrder:h,processCheckout:async(M=!1)=>{var t,S,C,p,a,u,o,e;const{customer:n,loginUser:d}=_(),w=R(),{replaceQueryParam:y}=K(),{cart:c,emptyCart:g,refreshCart:v}=z();h.value=!0;const{username:T,password:$,shipToDifferentAddress:A}=r.value,U=(t=n.value)==null?void 0:t.billing,O=A?(S=n.value)==null?void 0:S.shipping:U,D=(C=c.value)==null?void 0:C.chosenShippingMethods;try{let I={billing:U,shipping:O,shippingMethod:D,metaData:r.value.metaData,paymentMethod:r.value.paymentMethod.id,customerNote:r.value.customerNote,shipToDifferentAddress:A,transactionId:r.value.transactionId,isPaid:M};r.value.createAccount?I.account={username:T,password:$}:I.account=null;const{checkout:l}=await Te(I);r.value.createAccount&&await d({username:T,password:$});const E=(p=l==null?void 0:l.order)==null?void 0:p.databaseId,L=(a=l==null?void 0:l.order)==null?void 0:a.orderKey,b=r.value.paymentMethod.id,B=b==="paypal"||b==="ppcp-gateway";if(l!=null&&l.order)try{localStorage.setItem("lastOrder",JSON.stringify({id:E,key:L,total:l.order.total,status:l.order.status,date:l.order.date,paymentMethod:l.order.paymentMethod,paymentMethodTitle:l.order.paymentMethodTitle}))}catch(i){console.error("Не може да се запише поръчката в localStorage",i)}if(await(l==null?void 0:l.redirect)&&B){const i=window.location.origin;let m=(l==null?void 0:l.redirect)??"";const q=`${i}/checkout/order-received/${E}/?key=${L}&from_paypal=true`,k=`${i}/checkout/?cancel_order=true&from_paypal=true`;m=y("return",q,m),m=y("cancel_return",k,m),m=y("bn","WooNuxt_Cart",m),await s(m)&&((u=n.value)!=null&&u.email&&n.value.email!=="guest"?w.push(`/checkout/order-received/${E}/?key=${L}&fetch_delay=true`):w.push("/thank-you"))}else(o=n.value)!=null&&o.email&&n.value.email!=="guest"?w.push(`/checkout/order-received/${E}/?key=${L}`):w.push("/thank-you");if(await(l==null?void 0:l.result)!=="success")return alert("There was an error processing your order. Please try again."),window.location.reload(),l;await g(),await v()}catch(I){const l=(e=I==null?void 0:I.gqlErrors)==null?void 0:e[0].message;return l!=null&&l.includes("An account is already registered with your email address")?(alert("An account is already registered with your email address"),null):(alert(l),null)}finally{h.value=!1}},updateShippingLocation:f}}function Ke(){const r=N(),h=R(),{updateProductList:f}=J(),s=G("order",()=>"");s.value=r.query.orderby;function P(){return{orderBy:r.query.orderby,order:r.query.order}}function M(w,y){const c=r.path.includes("/page/")?r.path.split("/page/")[0]:r.path;h.push({path:c,query:{...r.query,orderby:w??void 0,order:y??void 0}}),setTimeout(()=>{f()},100)}const n=x(()=>!!s.value);function d(w){return w}return{getOrderQuery:P,setOrderQuery:M,isSortingActive:n,orderQuery:s,sortProducts:d}}const Qe=()=>{const r=H([]),h=H(null),f=H(!1),s=H(null),P=qe({hasNextPage:!1,endCursor:null}),M=c=>{c&&c.length>0&&(r.value=c)},n=c=>{c&&c.length>0&&(r.value=[...r.value,...c])},d=c=>{h.value=c};return{posts:r,currentPost:h,loading:f,error:s,pageInfo:P,setPosts:M,addPosts:n,setCurrentPost:d,loadMorePosts:async()=>{var c,g;if(P.hasNextPage){f.value=!0,s.value=null;try{const{data:v}=await W("GetBlogPosts",{first:12,after:P.endCursor});(g=(c=v.value)==null?void 0:c.posts)!=null&&g.nodes&&(n(v.value.posts.nodes),P.hasNextPage=v.value.posts.pageInfo.hasNextPage,P.endCursor=v.value.posts.pageInfo.endCursor)}catch(v){s.value=v.message||"Грешка при зареждане на публикации"}finally{f.value=!1}}},loadPostBySlug:async c=>{var g,v,T,$;f.value=!0,s.value=null;try{const{data:A}=await W("GetBlogPosts",{first:100}),U=(T=(v=(g=A.value)==null?void 0:g.posts)==null?void 0:v.nodes)==null?void 0:T.find(O=>O.slug===c);if(U){const{data:O}=await W("GetBlogPost",{id:U.id});if(($=O.value)!=null&&$.post)return d(O.value.post),O.value.post}return null}catch(A){return s.value=A.message||"Грешка при зареждане на публикацията",null}finally{f.value=!1}}}};export{_ as a,De as b,xe as c,z as d,Fe as e,Re as f,Ke as g,Oe as h,J as i,Qe as j,K as u};
