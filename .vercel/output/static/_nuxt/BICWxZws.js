import{r as Ut,a as Nt,b as Rt,G as ut,c as mt,j as Mt,d as jt,e as Dt,f as Et,g as Ft,h as Vt,i as zt,k as qt,l as Bt,m as Ht,y as Gt}from"./C3J8Nv10.js";import{d as P,c as m,o as n,a as e,b as h,u as t,e as k,w,f as T,n as F,T as Z,F as N,r as j,g as pt,t as g,h as C,i as ae,j as I,k as $,v as U,l as Q,m as ne,p as Wt,q as L,s as we,x as ot,y as Se,z as Be,A as ke,B as He,C as S,_ as Ce,D as Kt,E as Ge,G as nt,H as Qt,I as We,J as Yt,K as Oe,L as Jt,M as De,N as _t,O as Xt,P as Zt,Q as es,R as Le}from"./CLICgETl.js";import{_ as D,u as xe,a as ft,b as Ie,c as H,d as Ee,p as ts,e as Te,f as ht,H as ss,T as os,M as ns,L as as,G as ls,g as at,h as Ke}from"./Dz7oOF7a.js";import{u as le,a as ge,b as Qe,c as Ue,d as ie,e as yt,f as bt,g as rs,h as pe,i as Ye,j as is}from"./B2ZyxqsB.js";const cs="modulepreload",ds=function(o,d){return new URL(o,d).href},gt={},vt=function(d,s,l){let c=Promise.resolve();if(s&&s.length>0){let i=function(f){return Promise.all(f.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const u=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),p=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=i(s.map(f=>{if(f=ds(f,l),f in gt)return;gt[f]=!0;const _=f.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(!!l)for(let x=u.length-1;x>=0;x--){const A=u[x];if(A.href===f&&(!_||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${v}`))return;const b=document.createElement("link");if(b.rel=_?"stylesheet":cs,_||(b.as="script"),b.crossOrigin="",b.href=f,p&&b.setAttribute("nonce",p),document.head.appendChild(b),_)return new Promise((x,A)=>{b.addEventListener("load",x),b.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(i){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=i,window.dispatchEvent(u),!u.defaultPrevented)throw i}return c.then(i=>{for(const u of i||[])u.status==="rejected"&&r(u.reason);return d().catch(r)})},us={class:"w-full bg-gray-800 text-gray-700 border-b border-gray-200 hidden lg:block"},ms={class:"mx-auto px-4"},ps={class:"flex h-8 items-center justify-between"},gs={class:"flex items-center"},_s={class:"flex items-center text-sm font-medium"},fs={class:"flex items-center text-sm font-medium"},hs={class:"flex items-center"},ys={class:"flex items-center text-sm font-medium"},bs=P({__name:"InfoTopBar",setup(o){return(d,s)=>(n(),m("div",us,[e("div",ms,[e("div",ps,[e("div",gs,[e("div",_s,[h(t(Ut),{class:"mr-1.5 h-4 w-4 text-white"}),s[0]||(s[0]=e("a",{href:"mailto:info@example.bg",class:"text-white hover:text-white transition-colors"}," info@example.bg ",-1))]),s[2]||(s[2]=e("div",{class:"h-3.5 mx-4 w-px bg-white"},null,-1)),e("div",fs,[h(t(Nt),{class:"mr-1.5 h-4 w-4 text-white"}),s[1]||(s[1]=e("a",{href:"tel:+359888123456",class:"text-white hover:text-white transition-colors"}," +359 888 123 456 ",-1))])]),e("div",hs,[e("div",ys,[h(t(Rt),{class:"mr-1.5 h-4 w-4 text-white"}),s[3]||(s[3]=e("span",{class:"text-white"},"гр. София, ул. Примерна 123",-1))]),s[4]||(s[4]=e("div",{class:"h-3.5 mx-4 w-px bg-white"},null,-1)),s[5]||(s[5]=e("a",{href:"https://www.instagram.com/",class:"flex items-center text-sm font-medium text-white hover:text-white transition-colors",target:"_blank",rel:"noopener noreferrer"},[e("svg",{fill:"currentColor",viewBox:"0 0 24 24",class:"h-4 w-4 mr-1.5"},[e("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})]),e("span",null,"Instagram")],-1))])])])]))}}),vs=Object.assign(bs,{__name:"InfoTopBar"}),$s=P({__name:"MenuTrigger",setup(o){const{toggleMobileMenu:d}=le();return(s,l)=>{const c=D;return n(),m("div",null,[h(c,{name:"ion:menu-outline",size:"26",class:"mr-4 cursor-pointer",onClick:t(d)},null,8,["onClick"])])}}}),xs=Object.assign($s,{__name:"MenuTrigger"}),ws=["src"],ks={key:1,class:"flex items-center gap-2 text-lg font-bold"},Cs="/next-level-logo.png",Is=P({__name:"Logo",setup(o){var r,i;const{siteName:d}=xe(),s=Ie(),l=ft(),c=(r=s==null?void 0:s.public)!=null&&r.LOGO?l((i=s==null?void 0:s.public)==null?void 0:i.LOGO):null;return(u,a)=>{const p=H;return n(),k(p,{to:"/",class:"inline-flex items-center gap-2"},{default:w(()=>[t(c)?(n(),m("img",{key:0,src:t(c),alt:"Logo",class:"object-contain h-10"},null,8,ws)):(n(),m("div",ks,[e("img",{src:Cs,alt:"Logo",width:"180",height:"40"})]))]),_:1})}}}),Je=Object.assign(Is,{__name:"Logo"}),E=(o,d)=>{const s=o.__vccOpts||o;for(const[l,c]of d)s[l]=c;return s},Ps={class:"mx-auto w-full px-4 sm:px-6 lg:px-8"},Ss={class:"grid grid-cols-1 lg:grid-cols-2 gap-y-10 py-8"},Ts={class:"grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8"},As={class:"mt-5"},Ls={class:"space-y-3"},Os=["href"],Us={class:"mt-5"},Ns={class:"space-y-3"},Rs=["href"],Ms={class:"grid grid-cols-1 sm:grid-cols-2 gap-6"},js={class:"relative flex-shrink-0"},Ds=["src"],Es={class:"flex flex-1 flex-col justify-between p-4"},Fs={class:"flex items-center gap-x-2 text-sm"},Vs=["datetime"],zs={class:"relative z-10 rounded-full bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600"},qs={class:"mt-2 text-base font-semibold text-gray-900"},Bs=["href"],Hs={class:"lg:hidden border-t border-gray-200 py-3 px-4 text-center"},Gs={__name:"MegaMenu",setup(o){const d=[{name:"За нас",href:"#",icon:jt},{name:"Клиенти",href:"#",icon:Dt},{name:"Медия",href:"#",icon:Et},{name:"Кариери",href:"#",icon:Ft},{name:"Поверителност",href:"#",icon:Vt}],s=[{name:"Общност",href:"#",icon:zt},{name:"Партньори",href:"#",icon:qt},{name:"Наръчници",href:"#",icon:Bt},{name:"Уебинари",href:"#",icon:Ht}],l=[{id:1,title:"Увеличете процента на конверсия",href:"#",date:"16 Март, 2023",datetime:"2023-03-16",category:{title:"Маркетинг",href:"#"},imageUrl:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",description:"Достигнете до повече потенциални клиенти и увеличете продажбите си с нашите съвети."},{id:2,title:"Как да използвате SEO за увеличаване на продажбите",href:"#",date:"10 Март, 2023",datetime:"2023-03-10",category:{title:"Продажби",href:"#"},imageUrl:"https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",description:"Оптимизирайте сайта си за по-добро класиране в търсачките и повече потенциални клиенти."}];return(c,r)=>(n(),k(t(Gt),{class:"static lg:relative isolate z-50"},{default:w(({open:i})=>[h(t(ut),{class:"inline-flex items-center gap-x-1 text-base font-semibold text-gray-500 hover:text-primary focus:outline-none"},{default:w(()=>[r[0]||(r[0]=T(" Магазин ")),h(t(mt),{class:F(["h-6 w-6 transition-transform duration-300",i?"rotate-180 transform":""]),"aria-hidden":"true"},null,8,["class"])]),_:2},1024),h(Z,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[h(t(Mt),{class:"mega-menu-panel"},{default:w(()=>[e("div",Ps,[e("div",Ss,[e("div",Ts,[e("div",null,[r[1]||(r[1]=e("h3",{class:"text-base font-medium text-gray-500"},"Ангажиране",-1)),e("div",As,[e("div",Ls,[(n(),m(N,null,j(d,u=>e("a",{key:u.name,href:u.href,class:"flex items-center gap-x-3 py-1 text-base font-semibold text-gray-900 hover:text-primary transition"},[(n(),k(pt(u.icon),{class:"h-6 w-6 flex-none text-gray-400","aria-hidden":"true"})),T(" "+g(u.name),1)],8,Os)),64))])])]),e("div",null,[r[2]||(r[2]=e("h3",{class:"text-base font-medium text-gray-500"},"Ресурси",-1)),e("div",Us,[e("div",Ns,[(n(),m(N,null,j(s,u=>e("a",{key:u.name,href:u.href,class:"flex items-center gap-x-3 py-1 text-base font-semibold text-gray-900 hover:text-primary transition"},[(n(),k(pt(u.icon),{class:"h-6 w-6 flex-none text-gray-400","aria-hidden":"true"})),T(" "+g(u.name),1)],8,Rs)),64))])])])]),e("div",Ms,[r[5]||(r[5]=e("h3",{class:"sr-only"},"Последни публикации",-1)),(n(),m(N,null,j(l,u=>e("article",{key:u.id,class:"relative flex flex-col overflow-hidden rounded-lg"},[e("div",js,[e("img",{class:"h-40 w-full object-cover",src:u.imageUrl,alt:""},null,8,Ds),r[3]||(r[3]=e("div",{class:"absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset"},null,-1))]),e("div",Es,[e("div",Fs,[e("time",{datetime:u.datetime,class:"text-gray-500"},g(u.date),9,Vs),e("span",zs,g(u.category.title),1)]),e("h4",qs,[e("a",{href:u.href},[r[4]||(r[4]=e("span",{class:"absolute inset-0"},null,-1)),T(" "+g(u.title),1)],8,Bs)])])])),64))])]),e("div",Hs,[h(t(ut),{class:"inline-block rounded-md py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none"},{default:w(()=>[r[6]||(r[6]=T(" Затвори ")),h(t(mt),{class:"inline-block h-5 w-5 rotate-180 transform","aria-hidden":"true"})]),_:1})])])]),_:1})]),_:1})]),_:1}))}},Ws=E(Gs,[["__scopeId","data-v-102de188"]]),Ks=P({__name:"MainMenu",setup(o){const{wishlistLink:d}=ge();return(s,l)=>{const c=H;return n(),m("nav",null,[h(c,{class:"text-base",to:"/"},{default:w(()=>[T(g(s.$t("messages.general.home")),1)]),_:1}),h(c,{class:"text-base",to:"/products"},{default:w(()=>[T(g(s.$t("messages.general.allProducts")),1)]),_:1}),h(c,{class:"text-base",to:"/categories"},{default:w(()=>[T(g(s.$t("messages.shop.category",2)),1)]),_:1}),h(c,{class:"text-base",to:"/blog"},{default:w(()=>l[0]||(l[0]=[T("Блог")])),_:1}),h(Ws),h(c,{class:"text-base",to:"/contact"},{default:w(()=>[T(g(s.$t("messages.general.contact")),1)]),_:1}),h(c,{class:"lg:hidden text-base",to:t(d),prefetch:!1},{default:w(()=>l[1]||(l[1]=[T("Wishlist")])),_:1},8,["to"]),h(c,{class:"lg:hidden text-base",to:"/my-account",prefetch:!1},{default:w(()=>l[2]||(l[2]=[T("My Account")])),_:1})])}}}),$t=Object.assign(E(Ks,[["__scopeId","data-v-47a065db"]]),{__name:"MainMenu"}),Qs=["placeholder"],Ys={__name:"ProductSearch",setup(o){const{getSearchQuery:d,setSearchQuery:s,clearSearchQuery:l}=Qe(),c=C(d()),r=()=>{l(),c.value=""};return ae(d,i=>{i||r()}),(i,u)=>{const a=D;return n(),m("form",{class:"relative items-center flex-1 -space-x-px rounded-md shadow-sm",onSubmit:u[1]||(u[1]=ne(p=>t(s)(t(c)),["prevent"]))},[h(a,{name:"ion:search-outline",size:"20",class:"absolute z-10 opacity-50 pointer-events-none left-2"}),I(e("input",{id:"product-search-input","onUpdate:modelValue":u[0]||(u[0]=p=>Q(c)?c.value=p:null),type:"text",placeholder:i.$t("messages.shop.searchProducts"),class:"z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-md shadow-inner outline-none bg-gray-50 shadow-gray-200"},null,8,Qs),[[U,t(c)]]),t(c)?(n(),m("span",{key:0,class:"absolute z-10 flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer bg-primary bg-opacity-10 hover:bg-opacity-20 text-primary right-2",onClick:r},[e("span",null,g(i.$t("messages.general.clear")),1),h(a,{name:"ion:close-outline",size:"18"})])):$("",!0)],32)}}},Js=P({__name:"SearchTrigger",setup(o){const{toggleSearch:d}=Qe();return(s,l)=>{const c=D;return n(),m("div",{class:"relative cursor-pointer inline-flex sm:hidden",title:"Cart",onClick:l[0]||(l[0]=(...r)=>t(d)&&t(d)(...r))},[h(c,{name:"ion:search-outline",size:"20",class:"mr-1 md:mr-0"})])}}}),Xs=Object.assign(Js,{__name:"SearchTrigger"}),Zs=["width","height"],eo=["id"],to=["stop-color"],so=["stop-color"],oo=["stop-color"],no={fill:"none","fill-rule":"evenodd"},ao={transform:"translate(1 1)"},lo=["stroke","stroke-width"],ro=["dur"],io={fill:"#fff",cx:"36",cy:"18",r:"1"},co=["dur"],uo=P({__name:"LoadingIcon",props:{size:{default:"20",type:String||Number},color:{default:"#4B5563",type:String},speed:{default:"250ms",type:String},stroke:{default:"2.5",type:String||Number}},setup(o){const d=Wt();return(s,l)=>(n(),m("svg",{width:o.size,height:o.size,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},[e("defs",null,[e("linearGradient",{id:t(d),x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%"},[e("stop",{"stop-color":o.color,"stop-opacity":"0",offset:"0%"},null,8,to),e("stop",{"stop-color":o.color,"stop-opacity":".631",offset:"63.146%"},null,8,so),e("stop",{"stop-color":o.color,offset:"100%"},null,8,oo)],8,eo)]),e("g",no,[e("g",ao,[e("path",{id:"Oval-2",d:"M36 18c0-9.94-8.06-18-18-18",stroke:`url(#${t(d)})`,"stroke-width":o.stroke},[e("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:o.speed,repeatCount:"indefinite"},null,8,ro)],8,lo),e("circle",io,[e("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:o.speed,repeatCount:"indefinite"},null,8,co)])])])],8,Zs))}}),re=Object.assign(uo,{__name:"LoadingIcon"}),mo={key:0,class:"relative avatar"},po=["src","alt"],go={class:"account-dropdown"},_o=P({__name:"SignInLink",setup(o){const{viewer:d,avatar:s,logoutUser:l,isPending:c,wishlistLink:r}=ge(),i=L(()=>{var u;return((u=d.value)==null?void 0:u.username)||"Sign In"});return(u,a)=>{const p=D,f=H,_=re;return n(),k(f,{to:"/my-account",title:t(i),class:"hidden sm:inline-flex aspect-square items-center"},{default:w(()=>[h(Z,{name:"pop-in",mode:"out-in"},{default:w(()=>[t(s)?(n(),m("span",mo,[e("img",{src:t(s),class:"rounded-full transform scale-125 shadow-md overflow-hidden border border-white my-auto",width:"22",height:"22",alt:t(i)},null,8,po),e("div",go,[h(f,{to:t(r),class:"hover:bg-gray-100"},{default:w(()=>[h(p,{name:"ion:heart-outline",size:"16"}),a[1]||(a[1]=e("span",null,"Wishlist",-1))]),_:1},8,["to"]),h(f,{to:"/my-account",class:"hover:bg-gray-100"},{default:w(()=>[h(p,{name:"ion:person-outline",size:"16"}),a[2]||(a[2]=e("span",null,"My Account",-1))]),_:1}),e("button",{class:"text-red-600 hover:bg-red-50",onClick:a[0]||(a[0]=ne((...v)=>t(l)&&t(l)(...v),["prevent"]))},[t(c)?(n(),k(_,{key:0,size:"16"})):(n(),k(p,{key:1,name:"ion:log-out-outline",size:"16"})),a[3]||(a[3]=e("span",null,"Logout",-1))])])])):(n(),k(p,{key:1,name:"ion:person-outline",size:"22",class:"border border-transparent"}))]),_:1})]),_:1},8,["title"])}}}),fo=Object.assign(E(_o,[["__scopeId","data-v-f06c06bb"]]),{__name:"SignInLink"}),ho={key:0,class:"bg-primary rounded-full text-white leading-none min-w-[16px] p-[3px] -top-1 -right-1 md:-right-2 text-[10px] absolute inline-flex justify-center items-center"},yo={__name:"WishlistTrigger",setup(o){const{theList:d}=Ue();return(s,l)=>{const c=D,r=Ee,i=H;return n(),k(i,{to:"/wishlist",class:"relative cursor-pointer inline-flex",title:"Wishlist"},{default:w(()=>[h(c,{name:"ion:heart-outline",size:"22",class:"mr-1 md:mr-0"}),h(r,null,{default:w(()=>[h(Z,{name:"popIn",mode:"out-in"},{default:w(()=>[t(d).length>0?(n(),m("span",ho,g(t(d).length),1)):$("",!0)]),_:1})]),_:1})]),_:1})}}},bo={key:0,class:"bg-primary rounded-full text-white leading-none min-w-[16px] p-[3px] -top-1 -right-1 md:-right-2 text-[10px] absolute inline-flex justify-center items-center"},vo={__name:"CartTrigger",setup(o){const{toggleCart:d,cart:s}=ie();return(l,c)=>{const r=D,i=Ee;return n(),m("div",{class:"relative cursor-pointer inline-flex",title:"Cart",onClick:c[0]||(c[0]=(...u)=>t(d)&&t(d)(...u))},[h(r,{name:"ion:cart-outline",size:"22",class:"mr-1 md:mr-0"}),h(i,null,{default:w(()=>[h(Z,{name:"popIn",mode:"out-in"},{default:w(()=>{var u,a,p,f;return[((a=(u=t(s))==null?void 0:u.contents)==null?void 0:a.itemCount)>0?(n(),m("span",bo,g((f=(p=t(s))==null?void 0:p.contents)==null?void 0:f.itemCount),1)):$("",!0)]}),_:1})]),_:1})])}}},$o={class:"sticky top-0 z-50 bg-white shadow-sm shadow-light-500"},xo={class:"flex w-full items-center justify-between py-4 px-4"},wo={class:"flex items-center"},ko={class:"flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6"},Co={class:"flex gap-4 items-center"},Io={key:0,class:"container mb-3 -mt-1 sm:hidden"},Po=P({__name:"AppHeader",setup(o){const{isShowingSearch:d}=Qe();return(s,l)=>{const c=vs,r=xs,i=Je,u=$t,a=Ys,p=Xs,f=fo,_=yo,v=vo;return n(),m(N,null,[h(c),e("header",$o,[e("div",xo,[e("div",wo,[h(r,{class:"lg:hidden"}),h(i,{class:"w-[140px] md:w-[160px]"})]),h(u,{class:"items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-14"}),e("div",ko,[h(a,{class:"hidden sm:inline-flex max-w-[320px] w-[60%]"}),h(p),e("div",Co,[h(f),h(_),h(v)])])]),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(d)?(n(),m("div",Io,[h(a,{class:"flex w-full"})])):$("",!0)]),_:1})])],64)}}}),Fg=Object.assign(Po,{__name:"AppHeader"}),So=P({__name:"BackToTop",setup(o){const d=C(!1),s=()=>{d.value=window.scrollY>300},l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return we(()=>{window.addEventListener("scroll",s)}),ot(()=>{window.removeEventListener("scroll",s)}),(c,r)=>(n(),k(Z,{name:"fade"},{default:w(()=>[d.value?(n(),m("button",{key:0,onClick:l,"aria-label":"Връщане към началото",class:"fixed bottom-20 sm:bottom-6 right-6 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg z-50 transition-all duration-300 hover:scale-110"},r[0]||(r[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)]))):$("",!0)]),_:1}))}}),Vg=Object.assign(So,{__name:"BackToTop"}),To=ts("/images/placeholder.jpg"),Ao={class:"relative overflow-hidden bg-gray-800"},Lo={class:"pt-16 pb-20 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48"},Oo={class:"relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"},Uo={class:"mt-10"},No={"aria-hidden":"false",class:"pointer-events-auto lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"},Ro={class:"absolute hidden lg:block transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2"},Mo={class:"flex items-center space-x-6 lg:space-x-8"},jo=["src","alt"],Do=["alt"],Eo={class:"absolute inset-0 flex items-end justify-center"},Fo={class:"w-full p-3 bg-gradient-to-t from-black/80 to-transparent transform transition-all duration-300 translate-y-full group-hover:translate-y-0"},Vo={class:"text-sm font-medium text-white truncate opacity-0 group-hover:opacity-100 transition-opacity duration-300"},zo={key:0,class:"text-xs text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"},qo={__name:"PromoSection",async setup(o){var u,a;let d,s;const l=[99172,8732,7767,77264,64073,86187,73116],{data:c}=([d,s]=Se(()=>Be("getProductsByIds",{ids:l})),d=await d,s(),d),r=((a=(u=c.value)==null?void 0:u.products)==null?void 0:a.nodes)||[],i=[r.slice(0,2),r.slice(2,5),r.slice(5,7)];return(p,f)=>{const _=H;return n(),m("div",Ao,[e("div",Lo,[e("div",Oo,[f[1]||(f[1]=e("div",{class:"sm:max-w-lg"},[e("h1",{class:"text-4xl font-bold tracking-tight text-white sm:text-6xl"},"Lorem ipsum"),e("p",{class:"mt-4 text-xl text-white"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1)),e("div",null,[e("div",Uo,[e("div",No,[e("div",Ro,[e("div",Mo,[(n(),m(N,null,j(i,(v,y)=>e("div",{key:`column-${y}`,class:"grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"},[(n(!0),m(N,null,j(v,b=>(n(),m("div",{key:b.databaseId,class:"h-64 w-44 overflow-hidden rounded-lg relative group shadow-lg"},[h(_,{to:`/produkt/${b.slug}`,class:"block h-full w-full"},{default:w(()=>[b.image?(n(),m("img",{key:0,src:b.image.producCardSourceUrl,alt:b.name,class:"size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"},null,8,jo)):(n(),m("img",{key:1,src:To,alt:b.name,class:"size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"},null,8,Do)),e("div",Eo,[e("div",Fo,[e("h3",Vo,g(b.name),1),b.price?(n(),m("div",zo,g(b.price),1)):$("",!0)])])]),_:2},1032,["to"])]))),128))])),64))])])]),h(_,{to:"/products",class:"inline-block relative z-10 cursor-pointer rounded-md border border-transparent bg-[#129160] px-8 py-3 text-center font-medium text-white hover:text-black hover:bg-[#ebedeb] transition-colors duration-300"},{default:w(()=>f[0]||(f[0]=[T(" Разгледайте колекцията ")])),_:1})])])])])])}}},zg=E(qo,[["__scopeId","data-v-fae32727"]]),Bo={key:0,class:"red-badge"},Ho=P({__name:"SaleBadge",props:{node:{type:Object,required:!0}},setup(o){const{t:d}=ke(),{storeSettings:s}=xe(),l=L(()=>{var a,p,f,_;if(!((a=o.node)!=null&&a.salePrice)||!((p=o.node)!=null&&p.regularPrice))return"";const i=parseFloat((f=o.node)==null?void 0:f.salePrice),u=parseFloat((_=o.node)==null?void 0:_.regularPrice);return Math.round((u-i)/u*100)+" %"}),c=L(()=>o.node.salePrice&&s.saleBadge!=="hidden"),r=L(()=>(s==null?void 0:s.saleBadge)==="percent"?l.value:d("messages.shop.onSale")?d("messages.shop.onSale"):"Sale");return(i,u)=>t(c)?(n(),m("span",Bo,g(t(r)),1)):$("",!0)}}),xt=Object.assign(E(Ho,[["__scopeId","data-v-69615c4f"]]),{__name:"SaleBadge"}),Go=["title"],Wo=P({__name:"ProductWishlistButton",props:{product:{}},setup(o){const{addToWishlist:d,removeFromWishlist:s,isInList:l}=Ue(),c=o,r=L(()=>c.product.databaseId?l(c.product.databaseId):!1),i=u=>{u.preventDefault(),u.stopPropagation(),r.value&&c.product.databaseId?s(c.product.databaseId):d(c.product)};return(u,a)=>{const p=D;return n(),m("button",{type:"button",class:"absolute top-2 left-2 z-40 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200 wishlist-btn",onClick:i,title:t(r)?u.$t("messages.shop.wishlistRemove"):u.$t("messages.shop.wishlistAdd")},[t(r)?(n(),k(p,{key:0,name:"ion:heart",size:"24",class:"text-red-500 md:w-6 md:h-6 w-5 h-5"})):(n(),k(p,{key:1,name:"ion:heart-outline",size:"24",class:"text-gray-600 md:w-6 md:h-6 w-5 h-5"}))],8,Go)}}}),Ko=Object.assign(E(Wo,[["__scopeId","data-v-097c071d"]]),{__name:"ProductWishlistButton"}),Qo={class:"inline-flex items-center"},Yo={key:0,class:"text-xs ml-1 text-gray-500"},Jo=P({__name:"StarRating",props:{rating:{type:Number,default:0},count:{type:Number,default:null},hideCount:{type:Boolean,default:!1},size:{type:Number,default:14}},setup(o){return(d,s)=>{const l=D;return n(),m("div",Qo,[(n(),m(N,null,j(5,c=>h(l,{key:c,name:"ion:star",size:o.size+"",class:"mr-[2px]",style:He({color:o.rating<c?"#ccc":"#FBBE24"})},null,8,["size","style"])),64)),o.count!==null&&!o.hideCount?(n(),m("span",Yo,"("+g(o.count)+")",1)):$("",!0)])}}}),Xe=Object.assign(Jo,{__name:"StarRating"}),Xo={key:0,class:"flex font-semibold"},Zo=["innerHTML"],en=["innerHTML"],tn=P({__name:"ProductPrice",props:{regularPrice:{},salePrice:{}},setup(o){return(d,s)=>d.regularPrice?(n(),m("div",Xo,[e("span",{class:F({"text-gray-400 line-through font-normal":d.salePrice}),innerHTML:d.regularPrice},null,10,Zo),d.salePrice?(n(),m("span",{key:0,class:"ml-2",innerHTML:d.salePrice},null,8,en)):$("",!0)])):$("",!0)}}),lt=Object.assign(tn,{__name:"ProductPrice"});var wt=(o=>(o.FACEBOOK="FACEBOOK",o.GITHUB="GITHUB",o.GOOGLE="GOOGLE",o.INSTAGRAM="INSTAGRAM",o.LINKEDIN="LINKEDIN",o.OAUTH2_GENERIC="OAUTH2_GENERIC",o.PASSWORD="PASSWORD",o.SITETOKEN="SITETOKEN",o))(wt||{}),sn=(o=>(o.CANCELLED="CANCELLED",o.CHECKOUT_DRAFT="CHECKOUT_DRAFT",o.COMPLETED="COMPLETED",o.FAILED="FAILED",o.ON_HOLD="ON_HOLD",o.PENDING="PENDING",o.PROCESSING="PROCESSING",o.REFUNDED="REFUNDED",o))(sn||{}),st=(o=>(o.EXTERNAL="EXTERNAL",o.GROUPED="GROUPED",o.SIMPLE="SIMPLE",o.VARIABLE="VARIABLE",o.VARIATION="VARIATION",o))(st||{}),kt=(o=>(o.DATE="DATE",o.IN="IN",o.MENU_ORDER="MENU_ORDER",o.MODIFIED="MODIFIED",o.NAME="NAME",o.NAME_IN="NAME_IN",o.ON_SALE_FROM="ON_SALE_FROM",o.ON_SALE_TO="ON_SALE_TO",o.PARENT="PARENT",o.POPULARITY="POPULARITY",o.PRICE="PRICE",o.RATING="RATING",o.REGULAR_PRICE="REGULAR_PRICE",o.REVIEW_COUNT="REVIEW_COUNT",o.SALE_PRICE="SALE_PRICE",o.SLUG="SLUG",o.TOTAL_SALES="TOTAL_SALES",o))(kt||{}),Pe=(o=>(o.IN_STOCK="IN_STOCK",o.ON_BACKORDER="ON_BACKORDER",o.OUT_OF_STOCK="OUT_OF_STOCK",o))(Pe||{}),Ct=(o=>(o.CATEGORY="CATEGORY",o.PA="PA",o.PABRANDS="PABRANDS",o.PAPREORDER="PAPREORDER",o.PASOONAVAILABLE="PASOONAVAILABLE",o.POSTFORMAT="POSTFORMAT",o.PRODUCTCATEGORY="PRODUCTCATEGORY",o.PRODUCTTAG="PRODUCTTAG",o.PRODUCTTYPE="PRODUCTTYPE",o.SHIPPINGCLASS="SHIPPINGCLASS",o.TAG="TAG",o.VISIBLEPRODUCT="VISIBLEPRODUCT",o))(Ct||{});const de=S`
    fragment Image on MediaItem {
  sourceUrl
  altText
  title
  databaseId
}
    `,ye=S`
    fragment SimpleProduct on SimpleProduct {
  databaseId
  name
  slug
  type
  price
  rawPrice: price(format: RAW)
  date
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  stockQuantity
  lowStockAmount
  averageRating
  weight
  length
  width
  height
  reviewCount
  onSale
  virtual
  image {
    ...Image
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
  }
  galleryImages(first: 20) {
    nodes {
      ...Image
      databaseId
    }
  }
}
    `,be=S`
    fragment VariationAttribute on VariationAttribute {
  name
  attributeId
  value
  label
}
    `,ve=S`
    fragment VariableProduct on VariableProduct {
  databaseId
  name
  slug
  type
  price
  rawPrice: price(format: RAW)
  date
  weight
  length
  width
  height
  image {
    ...Image
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
  }
  averageRating
  reviewCount
  onSale
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  totalSales
  stockQuantity
  lowStockAmount
  defaultAttributes {
    nodes {
      ...VariationAttribute
    }
  }
  variations(first: 100) {
    nodes {
      name
      databaseId
      price
      regularPrice
      salePrice
      rawSalePrice: salePrice(format: RAW)
      slug
      stockQuantity
      stockStatus
      hasAttributes
      image {
        ...Image
        cartSourceUrl: sourceUrl(size: THUMBNAIL)
        producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
      }
      attributes {
        nodes {
          ...VariationAttribute
        }
      }
    }
  }
  galleryImages(first: 20) {
    nodes {
      ...Image
      databaseId
    }
  }
}
    `,$e=S`
    fragment ExternalProduct on ExternalProduct {
  databaseId
  externalUrl
  buttonText
}
    `,Ae=S`
    fragment Cart on Cart {
  total
  rawTotal: total(format: RAW)
  subtotal
  totalTax
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  shippingTotal
  chosenShippingMethods
  availableShippingMethods {
    rates {
      cost
      id
      label
    }
  }
  appliedCoupons {
    description
    discountTax
    discountAmount
    code
  }
  isEmpty
  contents(first: 100) {
    itemCount
    productCount
    nodes {
      quantity
      key
      product {
        node {
          name
          slug
          sku
          databaseId
          type
          ...SimpleProduct
          ...VariableProduct
          ...ExternalProduct
        }
      }
      variation {
        node {
          name
          slug
          price
          stockStatus
          regularPrice
          rawRegularPrice: regularPrice(format: RAW)
          salePrice
          rawSalePrice: salePrice(format: RAW)
          image {
            sourceUrl(size: THUMBNAIL)
            cartSourceUrl: sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
}
    `,Ze=S`
    fragment DownloadableItem on DownloadableItem {
  id
  name
  product {
    name
    slug
  }
  url
  accessExpires
  downloadsRemaining
}
    `,et=S`
    fragment Address on CustomerAddress {
  address1
  address2
  city
  country
  email
  firstName
  lastName
  phone
  postcode
  company
  state
}
    `,tt=S`
    fragment Customer on Customer {
  lastName
  email
  firstName
  username
  databaseId
  sessionToken
  isPayingCustomer
  billing {
    ...Address
  }
  shipping {
    ...Address
  }
}
    `,It=S`
    fragment OrderFragment on Order {
  orderNumber
  date
  status
  needsPayment
  needsProcessing
  databaseId
  orderKey
  total
  subtotal
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  totalTax
  shippingTotal
  paymentMethodTitle
  paymentMethod
  customer {
    email
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
  downloadableItems(first: 100) {
    nodes {
      ...DownloadableItem
    }
  }
  lineItems {
    nodes {
      quantity
      total
      id
      product {
        node {
          name
          slug
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
      variation {
        node {
          name
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
  customer {
    ...Customer
  }
}
    `;S`
    fragment PostSeoFragment on Post {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `;const Pt=S`
    fragment ProductCategories on Product {
  productCategories {
    nodes {
      databaseId
      slug
      name
      count
    }
  }
}
    `,on=S`
    fragment SeoCategoryFragment on ProductCategory {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `,St=S`
    fragment SeoFragment on Page {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `,nn=S`
    fragment SeoProductFragment on Product {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `,Tt=S`
    fragment Terms on Product {
  terms(first: 100) {
    nodes {
      taxonomyName
      slug
    }
  }
}
    `,an=S`
    fragment Viewer on User {
  lastName
  email
  databaseId
  id
  firstName
  username
  nicename
  wooSessionToken
  avatar {
    url
  }
}
    `,ln=S`
    fragment PaymentGateway on PaymentGateway {
  title
  id
  description
}
    `,rn=S`
    fragment LoginClient on LoginClient {
  name
  provider
  isEnabled
  authorizationUrl
}
    `,cn=S`
    fragment ProductAttribute on ProductAttribute {
  variation
  name
  id
  options
  label
  scope
  ... on GlobalProductAttribute {
    terms {
      nodes {
        name
        slug
        taxonomyName
        databaseId
      }
    }
  }
}
    `,dn=S`
    fragment ProductWithAttributes on ProductWithAttributes {
  attributes {
    nodes {
      ...ProductAttribute
    }
  }
}
    `,un=S`
    fragment Comment on Comment {
  content
  id
  date
  author {
    node {
      name
      avatar {
        url
      }
    }
  }
}
    `;S`
    fragment ProductCategory on ProductCategory {
  count
  databaseId
  id
  name
  slug
  image {
    sourceUrl(size: MEDIUM_LARGE)
    altText
    title
  }
}
    `;S`
    query GetBlogPage {
  pageBy(uri: "blog") {
    title
    content
    seo {
      title
      metaDesc
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
        altText
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
        altText
      }
      canonical
      schema {
        raw
      }
    }
  }
}
    `;S`
    query GetBlogPost($id: ID!) {
  post(id: $id) {
    id
    databaseId
    title
    slug
    date
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
}
    `;S`
    query GetBlogPosts($first: Int) {
  posts(first: $first) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      databaseId
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
    `;S`
    mutation addToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    cart {
      ...Cart
    }
  }
}
    ${Ae}
${ye}
${de}
${ve}
${be}
${$e}`;S`
    mutation applyCoupon($code: String!) {
  applyCoupon(input: {code: $code}) {
    applied {
      code
      description
      discountTax
      discountAmount
    }
    cart {
      ...Cart
    }
  }
}
    ${Ae}
${ye}
${de}
${ve}
${be}
${$e}`;S`
    mutation ChangeShippingCounty($shippingState: String!, $shippingCountry: CountriesEnum!, $billingState: String!, $billingCountry: CountriesEnum!) {
  updateCustomer(
    input: {shipping: {state: $shippingState, country: $shippingCountry}, billing: {state: $billingState, country: $billingCountry}}
  ) {
    customer {
      calculatedShipping
      hasCalculatedShipping
    }
  }
}
    `;S`
    mutation ChangeShippingMethod($shippingMethods: [String] = "") {
  updateShippingMethod(input: {shippingMethods: $shippingMethods}) {
    cart {
      ...Cart
    }
  }
}
    ${Ae}
${ye}
${de}
${ve}
${be}
${$e}`;S`
    mutation Checkout($billing: CustomerAddressInput = {}, $metaData: [MetaDataInput] = {key: "", value: ""}, $paymentMethod: String = "stripe", $shipping: CustomerAddressInput = {}, $customerNote: String = "", $shipToDifferentAddress: Boolean = false, $account: CreateAccountInput = {username: "", password: ""}, $transactionId: String = "", $isPaid: Boolean = false) {
  checkout(
    input: {paymentMethod: $paymentMethod, billing: $billing, metaData: $metaData, shipping: $shipping, customerNote: $customerNote, shipToDifferentAddress: $shipToDifferentAddress, account: $account, transactionId: $transactionId, isPaid: $isPaid}
  ) {
    result
    redirect
    order {
      needsPayment
      needsProcessing
      status
      databaseId
      orderKey
      subtotal
      total
      subtotal
      totalTax
      shippingTotal
      paymentMethodTitle
      paymentMethod
      date
      subtotal
      customer {
        email
      }
      lineItems {
        nodes {
          quantity
          total
          product {
            node {
              name
              image {
                ...Image
              }
            }
          }
          variation {
            node {
              name
              image {
                ...Image
              }
            }
          }
        }
      }
    }
  }
}
    ${de}`;S`
    mutation EmptyCart {
  emptyCart(input: {clearPersistentCart: true}) {
    cart {
      ...Cart
    }
  }
}
    ${Ae}
${ye}
${de}
${ve}
${be}
${$e}`;S`
    query getAllTerms($hideEmpty: Boolean = true, $taxonomies: [TaxonomyEnum]!, $first: Int = 100) {
  terms(where: {taxonomies: $taxonomies, hideEmpty: $hideEmpty}, first: $first) {
    nodes {
      taxonomyName
      name
      slug
      count
    }
  }
}
    `;S`
    query getAllowedCountries {
  allowedCountries
}
    `;S`
    query getCart {
  cart {
    ...Cart
  }
  customer {
    ...Customer
  }
  viewer {
    ...Viewer
  }
  paymentGateways {
    nodes {
      ...PaymentGateway
    }
  }
  loginClients {
    ...LoginClient
  }
}
    ${Ae}
${ye}
${de}
${ve}
${be}
${$e}
${tt}
${et}
${an}
${ln}
${rn}`;S`
    query getCategoriesPage {
  page(id: "produkt-kategoriya", idType: URI) {
    id
    title
    uri
    slug
    ...SeoFragment
  }
}
    ${St}`;S`
    query getDownloads {
  customer {
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
}
    ${Ze}`;S`
    query getHomeSeo {
  page(id: "/", idType: URI) {
    id
    title
    uri
    slug
    ...SeoFragment
  }
}
    ${St}`;S`
    query getOrder($id: ID!) {
  order(id: $id, idType: DATABASE_ID) {
    ...OrderFragment
  }
}
    ${It}
${Ze}
${tt}
${et}`;S`
    query getOrders {
  customer {
    orders(first: 100) {
      nodes {
        ...OrderFragment
      }
    }
  }
}
    ${It}
${Ze}
${tt}
${et}`;S`
    query GetPost($id: ID!) {
  post(id: $id, idType: SLUG) {
    id
    databaseId
    title
    slug
    date
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}
    `;S`
    query GetPosts($first: Int) {
  posts(first: $first, where: {status: PUBLISH}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      databaseId
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}
    `;S`
    query getProduct($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    name
    type
    databaseId
    id
    metaData {
      id
      key
      value
    }
    slug
    sku
    description
    rawDescription: description(format: RAW)
    shortDescription
    ...ProductWithAttributes
    ...ProductCategories
    ...Terms
    ...SimpleProduct
    ...VariableProduct
    ...ExternalProduct
    ...SeoProductFragment
    related(first: 5) {
      nodes {
        ...SimpleProduct
        ...VariableProduct
        ...ExternalProduct
      }
    }
    reviews {
      averageRating
      edges {
        rating
        node {
          ...Comment
        }
      }
    }
  }
}
    ${dn}
${cn}
${Pt}
${Tt}
${ye}
${de}
${ve}
${be}
${$e}
${nn}
${un}`;S`
    query getProductCategories($first: Int, $after: String, $slug: [String]) {
  productCategories(
    first: $first
    after: $after
    where: {hideEmpty: true, slug: $slug}
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      slug
      name
      databaseId
      id
      description
      count
      uri
      image {
        ...Image
      }
      children {
        nodes {
          slug
          name
          databaseId
          description
          count
          image {
            ...Image
          }
        }
      }
      ...SeoCategoryFragment
    }
  }
}
    ${de}
${on}`;S`
    query getProducts($after: String, $before: String, $slug: [String], $first: Int = 12, $last: Int, $search: String, $priceMin: Float, $priceMax: Float, $onSale: Boolean, $orderby: ProductsOrderByEnum = DATE, $order: OrderEnum = DESC, $rating: [Int]) {
  products(
    first: $first
    last: $last
    after: $after
    before: $before
    where: {categoryIn: $slug, search: $search, minPrice: $priceMin, maxPrice: $priceMax, onSale: $onSale, rating: $rating, visibility: VISIBLE, status: "publish", orderby: {field: $orderby, order: $order}}
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        name
        slug
        type
        databaseId
        id
        averageRating
        reviewCount
        ...Terms
        ...ProductCategories
        ...SimpleProduct
        ...VariableProduct
        ...ExternalProduct
      }
    }
    nodes {
      name
      slug
      type
      databaseId
      id
      averageRating
      reviewCount
      ...Terms
      ...ProductCategories
      ...SimpleProduct
      ...VariableProduct
      ...ExternalProduct
    }
  }
}
    ${Tt}
${Pt}
${ye}
${de}
${ve}
${be}
${$e}`;S`
    query getProductsByIds($ids: [Int]) {
  products(where: {include: $ids}, first: 10) {
    nodes {
      databaseId
      name
      slug
      shortDescription
      ...SimpleProduct
      ...VariableProduct
      ...ExternalProduct
    }
  }
}
    ${ye}
${de}
${ve}
${be}
${$e}`;S`
    query getProductsCount($slug: [String], $search: String, $priceMin: Float, $priceMax: Float, $onSale: Boolean, $orderby: ProductsOrderByEnum = DATE, $order: OrderEnum = DESC, $rating: [Int]) {
  products(
    first: 9999
    where: {categoryIn: $slug, search: $search, minPrice: $priceMin, maxPrice: $priceMax, onSale: $onSale, rating: $rating, visibility: VISIBLE, status: "publish", orderby: {field: $orderby, order: $order}}
  ) {
    edges {
      node {
        databaseId
      }
    }
  }
}
    `;S`
    query getShopPage {
  page(id: 8, idType: DATABASE_ID) {
    id
    databaseId
    title
    uri
    slug
    content
    seo {
      title
      metaDesc
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
        altText
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
        altText
      }
      canonical
      schema {
        raw
      }
    }
  }
}
    `;S`
    query getStates($country: CountriesEnum!) {
  countryStates(country: $country) {
    code
    name
  }
}
    `;S`
    query getStockStatus($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    ... on SimpleProduct {
      stockStatus
    }
    ... on VariableProduct {
      stockStatus
      variations {
        nodes {
          stockStatus
        }
      }
    }
  }
}
    `;S`
    query getStripePaymentIntent {
  stripePaymentIntent {
    amount
    clientSecret
    error
    id
    currency
  }
}
    `;S`
    mutation login($username: String!, $password: String!) {
  login(
    input: {provider: PASSWORD, credentials: {username: $username, password: $password}}
  ) {
    authToken
    authTokenExpiration
    refreshToken
    refreshTokenExpiration
    user {
      name
      username
    }
    sessionToken
    customer {
      databaseId
      username
      firstName
      lastName
    }
  }
}
    `;S`
    mutation loginWithProvider($input: LoginInput!) {
  login(input: $input) {
    authToken
    refreshToken
    authTokenExpiration
  }
}
    `;S`
    mutation Logout {
  logout(input: {clientMutationId: ""}) {
    success
  }
}
    `;S`
    mutation registerCustomer($input: RegisterCustomerInput!) {
  registerCustomer(input: $input) {
    customer {
      ...Customer
    }
  }
}
    ${tt}
${et}`;S`
    mutation removeCoupons($codes: [String]!) {
  removeCoupons(input: {codes: $codes}) {
    cart {
      ...Cart
    }
  }
}
    ${Ae}
${ye}
${de}
${ve}
${be}
${$e}`;S`
    mutation ResetPasswordEmail($username: String!) {
  sendPasswordResetEmail(input: {username: $username}) {
    success
  }
}
    `;S`
    mutation ResetPasswordKey($key: String!, $login: String!, $password: String!) {
  resetUserPassword(input: {key: $key, login: $login, password: $password}) {
    user {
      id
    }
  }
}
    `;S`
    mutation UpDateCartQuantity($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    cart {
      ...Cart
    }
  }
}
    ${Ae}
${ye}
${de}
${ve}
${be}
${$e}`;S`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    customer {
      downloadableItems(first: 100) {
        nodes {
          ...DownloadableItem
        }
      }
    }
  }
}
    ${Ze}`;S`
    mutation updatePassword($id: ID!, $password: String!) {
  updateUser(input: {id: $id, password: $password}) {
    user {
      id
    }
  }
}
    `;S`
    mutation WriteReview($author: String!, $commentOn: Int!, $content: String!, $rating: Int!, $authorEmail: String!) {
  writeReview(
    input: {rating: $rating, author: $author, content: $content, commentOn: $commentOn, authorEmail: $authorEmail}
  ) {
    rating
  }
}
    `;const mn={class:"relative group"},pn={class:"mb-2 font-light leading-tight group-hover:text-primary"},gn={class:"flex flex-col items-start sm:flex-row sm:items-center sm:justify-between mb-3 min-h-[26px]"},_n={key:0,class:"flex w-full mt-2 sm:mt-0 sm:justify-end sm:w-[100px]"},fn=["value","selected"],hn={key:2,class:"text-red-500 text-xs -mt-2 mb-3"},yn={key:3},bn={class:"flex items-center justify-between space-x-2"},vn={class:"flex items-center h-8 bg-white border border-gray-300 rounded-md"},$n=["disabled"],xn=["disabled"],Ve=280,wn=P({__name:"ProductCardDetailed",props:{node:{type:Object,required:!0},index:{type:Number,default:1}},setup(o){var ue,se,W,Ne;const d=Te(),{storeSettings:s}=xe(),{addToCart:l,cart:c}=ie(),{t:r}=ke(),i=o,u=Math.round(Ve*1.125),a=C((ue=d.query)==null?void 0:ue.filter),p=C(((Ne=(W=(se=a.value)==null?void 0:se.split("pa_color[")[1])==null?void 0:W.split("]")[0])==null?void 0:Ne.split(","))||[]);ae(()=>d.query,()=>{var z,V,Y;a.value=d.query.filter,p.value=((Y=(V=(z=a.value)==null?void 0:z.split("pa_color[")[1])==null?void 0:V.split("]")[0])==null?void 0:Y.split(","))||[]});const f=L(()=>{var z,V,Y,oe;return((V=(z=i.node)==null?void 0:z.image)==null?void 0:V.producCardSourceUrl)||((oe=(Y=i.node)==null?void 0:Y.image)==null?void 0:oe.sourceUrl)||"/images/placeholder.jpg"}),_=L(()=>{var z,V,Y,oe,ee,ce;if(p.value.length){const fe=(V=(z=i.node)==null?void 0:z.variations)==null?void 0:V.nodes.filter(X=>{var G;const Re=(G=X.attributes)==null?void 0:G.nodes.some(he=>p.value.some(K=>{var me;return(me=he==null?void 0:he.value)==null?void 0:me.includes(K)})),Me=p.value.some(he=>{var K;return(K=X.slug)==null?void 0:K.includes(he)});return Re||Me});if(fe!=null&&fe.length)return((oe=(Y=fe[0])==null?void 0:Y.image)==null?void 0:oe.producCardSourceUrl)||((ce=(ee=fe[0])==null?void 0:ee.image)==null?void 0:ce.sourceUrl)||f.value}return f.value}),v=C(!1),y=C(1),b=C(""),x=C(null),A=L(()=>{var z;return((z=i.node)==null?void 0:z.type)===st.VARIABLE}),R=L(()=>{var z;return((z=i.node)==null?void 0:z.type)===st.SIMPLE}),B=L(()=>{var z,V;return A.value&&((V=(z=i.node)==null?void 0:z.variations)==null?void 0:V.nodes)!==void 0&&i.node.variations.nodes.length>0}),O=L(()=>A.value||R.value),te=L(()=>v.value||B.value&&!x.value),q=()=>y.value++,M=()=>{y.value>1&&y.value--},J=z=>{var Y,oe,ee;if(x.value=z,!((ee=(oe=(Y=i.node)==null?void 0:Y.variations)==null?void 0:oe.nodes)==null?void 0:ee.find(ce=>ce.databaseId===z))){b.value="Invalid variation selected";return}},_e=async()=>{var z;if((z=i.node)!=null&&z.databaseId){if(B.value&&!x.value){b.value="Моля, изберете вариация";return}v.value=!0,b.value="";try{const V={productId:i.node.databaseId,quantity:y.value,variationId:x.value};await l(V)}catch(V){console.error("Грешка при добавяне в количката:",V),b.value="Възникна грешка при добавяне в количката"}finally{setTimeout(()=>{v.value=!1},500)}}};return ae(c,()=>{setTimeout(()=>{v.value=!1,b.value=""},300)}),L(()=>{var z,V,Y,oe;if(x.value&&((V=(z=i.node)==null?void 0:z.variations)!=null&&V.nodes)){const ee=i.node.variations.nodes.find(ce=>ce.databaseId===x.value);return(ee==null?void 0:ee.salePrice)!==null&&(ee==null?void 0:ee.salePrice)!==void 0}return((Y=i.node)==null?void 0:Y.salePrice)!==null&&((oe=i.node)==null?void 0:oe.salePrice)!==void 0}),(z,V)=>{var G,he;const Y=xt,oe=Ko,ee=Ce,ce=H,fe=Xe,X=lt,Re=D,Me=re;return n(),m("div",mn,[o.node.slug?(n(),k(ce,{key:0,to:`/produkt/${decodeURIComponent(o.node.slug)}`,title:o.node.name},{default:w(()=>{var K,me;return[h(Y,{node:o.node,class:"absolute top-2 right-2"},null,8,["node"]),h(oe,{product:o.node},null,8,["product"]),t(_)?(n(),k(ee,{key:0,width:Ve,height:t(u),src:t(_),alt:((K=o.node.image)==null?void 0:K.altText)||o.node.name||"Product image",title:((me=o.node.image)==null?void 0:me.title)||o.node.name,loading:o.index<=3?"eager":"lazy",sizes:`sm:${Ve/2}px md:${Ve}px`,class:"rounded-lg object-top object-cover w-full aspect-9/8",placeholder:"","placeholder-class":"blur-xl"},null,8,["height","src","alt","title","loading","sizes"])):$("",!0)]}),_:1},8,["to","title"])):$("",!0),e("div",null,[t(s).showReviews?(n(),k(fe,{key:0,rating:o.node.averageRating||0,count:o.node.reviewCount||0},null,8,["rating","count"])):$("",!0),o.node.slug?(n(),k(ce,{key:1,to:`/produkt/${decodeURIComponent(o.node.slug)}`,title:o.node.name},{default:w(()=>[e("h2",pn,g(o.node.name),1)]),_:1},8,["to","title"])):$("",!0),e("div",gn,[h(X,{class:"text-sm","sale-price":o.node.salePrice,"regular-price":o.node.regularPrice},null,8,["sale-price","regular-price"]),t(B)?(n(),m("div",_n,[e("select",{class:"text-xs py-1 px-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 bg-white w-full sm:max-w-[160px]",onChange:V[0]||(V[0]=K=>J(Number(K.target.value)))},[V[2]||(V[2]=e("option",{value:"",disabled:"",selected:""},"Вариации",-1)),(n(!0),m(N,null,j((he=(G=o.node)==null?void 0:G.variations)==null?void 0:he.nodes,K=>{var me,je;return n(),m("option",{key:K.databaseId,value:K.databaseId,selected:t(x)===K.databaseId},[(je=(me=K.attributes)==null?void 0:me.nodes)!=null&&je.length?(n(),m(N,{key:0},[T(g(K.attributes.nodes.map(Fe=>Fe.value).filter(Boolean).join(" / ")),1)],64)):(n(),m(N,{key:1},[T(g(K.name),1)],64))],8,fn)}),128))],32)])):$("",!0)]),t(b)?(n(),m("div",hn,g(t(b)),1)):$("",!0),t(O)?(n(),m("div",yn,[e("div",bn,[e("div",vn,[e("button",{onClick:ne(M,["prevent"]),type:"button",class:"flex items-center justify-center w-6 h-full text-xs text-gray-500 transition-colors border-r border-gray-300 hover:bg-gray-50",disabled:t(y)<=1},[h(Re,{name:"ion:remove",size:"14"})],8,$n),I(e("input",{"onUpdate:modelValue":V[1]||(V[1]=K=>Q(y)?y.value=K:null),type:"number",min:"1",class:"w-8 h-full text-xs text-center bg-transparent focus:outline-none"},null,512),[[U,t(y),void 0,{number:!0}]]),e("button",{onClick:ne(q,["prevent"]),type:"button",class:"flex items-center justify-center w-6 h-full text-xs text-gray-500 transition-colors border-l border-gray-300 hover:bg-gray-50"},[h(Re,{name:"ion:add",size:"14"})])]),e("button",{onClick:ne(_e,["prevent"]),type:"button",disabled:t(te),class:"flex items-center justify-center flex-1 h-8 px-3 text-xs font-medium text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed"},[V[3]||(V[3]=e("span",null,"Купи",-1)),t(v)?(n(),k(Me,{key:0,stroke:"3",size:"10",color:"#fff",class:"ml-1"})):$("",!0)],8,xn)])])):$("",!0)])])}}}),At=Object.assign(E(wn,[["__scopeId","data-v-aaa5f5f1"]]),{__name:"ProductCardDetailed"}),kn={key:0,class:"my-4"},Cn={class:"flex items-end justify-between mb-8"},In={class:"text-2xl font-semibold md:text-3xl px-4"},Pn={class:"carousel-wrapper"},Sn={class:"relative carousel-outer-container"},Tn={class:"carousel-container"},An={class:"product-card rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-white p-2 w-full"},Ln=P({__name:"NewProductsCarousel",async setup(o){let d,s;const{data:l}=([d,s]=Se(()=>Be("getProducts",{first:12,orderby:kt.DATE})),d=await d,s(),d),c=L(()=>{var u,a;return((a=(u=l.value)==null?void 0:u.products)==null?void 0:a.nodes)||[]}),r=C(null);let i=null;return we(()=>{Kt(()=>{typeof window<"u"&&window.tns&&r.value&&(i=window.tns({container:r.value,items:1,slideBy:"page",gutter:20,mouseDrag:!0,swipeAngle:!1,speed:400,controlsText:["",""],controlsContainer:".slider-controls",navPosition:"bottom",loop:!1,responsive:{640:{items:1},768:{items:2},1024:{items:3},1280:{items:4},1536:{items:6}}}))})}),ot(()=>{i&&(i.destroy(),i=null)}),(u,a)=>{const p=H,f=At,_=Ee;return c.value.length?(n(),m("section",kn,[e("div",Cn,[e("h2",In,g(u.$t("messages.shop.newArrivals")),1),h(p,{class:"text-primary px-4",to:"/products"},{default:w(()=>[T(g(u.$t("messages.general.viewAll")),1)]),_:1})]),h(_,null,{default:w(()=>[e("div",Pn,[e("div",Sn,[a[0]||(a[0]=e("div",{class:"slider-controls"},[e("button",{class:"custom-prev-button"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})])]),e("button",{class:"custom-next-button"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])])],-1)),e("div",Tn,[e("div",{ref_key:"sliderContainerRef",ref:r,class:"tiny-slider"},[(n(!0),m(N,null,j(c.value,(v,y)=>(n(),m("div",{class:"carousel-slide",key:v.id},[e("div",An,[h(f,{node:v,index:y},null,8,["node","index"])])]))),128))],512)])])])]),_:1})])):$("",!0)}}}),qg=Object.assign(E(Ln,[["__scopeId","data-v-fa33ad40"]]),{__name:"NewProductsCarousel"}),On={key:0,class:"my-16"},Un={class:"container mx-auto w-full lg:w-4/5"},Nn={class:"flex flex-col md:flex-row rounded-xl overflow-hidden mb-8 relative category-banner"},Rn={class:"bg-gray-800 text-white p-6 flex items-center md:w-1/2 h-[120px] black-bg"},Mn={class:"md:w-1/2 h-[120px] overflow-hidden"},jn={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},Dn={class:"text-center text-lg font-semibold"},En={class:"text-sm text-gray-500"},Fn=P({__name:"BestProductCategory",props:{categoryId:{type:Number,default:21}},async setup(o){var _,v,y;let d,s;const{FALLBACK_IMG:l}=le(),c=Ie(),r=o,{data:i}=([d,s]=Se(()=>Be("getProductCategories")),d=await d,s(),d),u=((v=(_=i.value)==null?void 0:_.productCategories)==null?void 0:v.nodes)||[],a=L(()=>u.find(b=>b.databaseId===r.categoryId)),p=L(()=>{var b,x;return((x=(b=a.value)==null?void 0:b.children)==null?void 0:x.nodes)||[]});(y=c==null?void 0:c.public)!=null&&y.PRODUCT_CATEGORY_PERMALINK;const f=b=>b?decodeURIComponent(b):"";return(b,x)=>{var B;const A=H,R=Ce;return t(a)?(n(),m("section",On,[e("div",Un,[e("div",Nn,[e("div",Rn,[h(A,{to:`/produkt-kategoriya/${f(t(a).slug)}`,class:"text-2xl md:text-3xl lg:text-4xl font-bold hover:text-primary transition-colors"},{default:w(()=>[T(g(t(a).name),1)]),_:1},8,["to"])]),e("div",Mn,[h(R,{class:"w-full h-full object-cover",src:((B=t(a).image)==null?void 0:B.sourceUrl)||t(l),alt:t(a).name||"",sizes:"sm:100vw md:50vw",placeholder:"","placeholder-class":"blur-xl"},null,8,["src","alt"])])]),e("div",jn,[(n(!0),m(N,null,j(t(p),O=>(n(),k(A,{key:O.databaseId,to:`/produkt-kategoriya/${f(O.slug)}`,class:"flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"},{default:w(()=>[e("span",Dn,g(O.name),1),e("span",En,"("+g(O.count)+" продукта)",1)]),_:2},1032,["to"]))),128))])])])):$("",!0)}}}),Bg=Object.assign(E(Fn,[["__scopeId","data-v-d4af53cd"]]),{__name:"BestProductCategory"}),Vn=["innerHTML"],ze=220,zn=P({__name:"CategoryCard",props:{node:{type:Object,required:!0},imageLoading:{type:String,default:"lazy"}},setup(o){var r;const{FALLBACK_IMG:d}=le(),s=Ie(),l=Math.round(ze*1.125),c=((r=s==null?void 0:s.public)==null?void 0:r.PRODUCT_CATEGORY_PERMALINK)||"/produkt-kategoriya/";return(i,u)=>{const a=Ce,p=H;return o.node?(n(),k(p,{key:0,to:`${t(c)}${decodeURIComponent(o.node.slug)}`,class:"relative flex justify-center overflow-hidden border border-white rounded-xl item snap-mandatory snap-x"},{default:w(()=>{var f,_,v;return[h(a,{width:ze,height:t(l),class:"absolute inset-0 object-cover w-full h-full",src:((f=o.node.image)==null?void 0:f.sourceUrl)||t(d),alt:((_=o.node.image)==null?void 0:_.altText)||o.node.name,title:((v=o.node.image)==null?void 0:v.title)||o.node.name,loading:o.imageLoading,sizes:`sm:${ze/2}px md:${ze}px`,placeholder:"","placeholder-class":"blur-xl"},null,8,["height","src","alt","title","loading","sizes"]),u[0]||(u[0]=e("div",{class:"absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2"},null,-1)),e("span",{class:"relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4",innerHTML:o.node.name},null,8,Vn)]}),_:1},8,["to"])):$("",!0)}}}),Hg=Object.assign(E(zn,[["__scopeId","data-v-9326d576"]]),{__name:"CategoryCard"}),qn={class:"bg-gray-800 py-12 sm:py-12 overflow-hidden"},Bn={class:"relative isolate"},Hn={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},Gn={class:"mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-12 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-12 xl:gap-x-20 xl:px-20"},Wn={class:"relative h-96 w-full flex-none rounded-2xl shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"},Kn={class:"w-full flex-auto"},Qn={role:"list",class:"mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2"},Yn={class:"mt-10 flex"},Gg={__name:"CtaBullets",setup(o){const d=["Competitive salaries","Flexible work hours","30 days of paid vacation","Annual team retreats","Benefits for you and your family","A great work environment"];return(s,l)=>{const c=Ce,r=H;return n(),m("div",qn,[e("div",Bn,[e("div",Hn,[e("div",Gn,[e("div",Wn,[h(c,{alt:"Asian SPA продукти",src:"https://nardis.bg/wp-content/uploads/webimage-60C17F8B-F56E-4A71-96CDAA4CBEBA9F9F.png",class:"absolute inset-0 w-full h-full object-cover rounded-2xl",sizes:"sm:100vw lg:400px",width:"400",height:"400"})]),e("div",Kn,[l[2]||(l[2]=e("h2",{class:"text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl"},"Lorem ipsum",-1)),l[3]||(l[3]=e("p",{class:"mt-6 text-lg/8 text-pretty text-gray-300"}," Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam. ",-1)),e("ul",Qn,[(n(),m(N,null,j(d,i=>e("li",{key:i,class:"flex gap-x-3"},[l[0]||(l[0]=e("span",{class:"h-7 w-5 flex-none text-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",class:"h-7 w-5"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"})])],-1)),T(" "+g(i),1)])),64))]),e("div",Yn,[h(r,{to:"#",class:"text-sm/6 font-normal text-[#ffffff] hover:text-black"},{default:w(()=>l[1]||(l[1]=[T(" Вижте всички продукти от Lorem ipsum "),e("span",{"aria-hidden":"true"},"→",-1)])),_:1})])])])]),l[4]||(l[4]=e("div",{"aria-hidden":"true",class:"absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl",style:{transform:"translateX(-950px)"}},[e("div",{style:{"clip-path":`polygon(\r
              73.6% 51.7%,\r
              91.7% 11.8%,\r
              100% 46.4%,\r
              97.4% 82.2%,\r
              92.5% 84.9%,\r
              75.7% 64%,\r
              55.3% 47.5%,\r
              46.5% 49.4%,\r
              45% 62.9%,\r
              50.3% 87.2%,\r
              21.3% 64.1%,\r
              0.1% 100%,\r
              5.4% 51.1%,\r
              21.4% 63.9%,\r
              58.9% 0.2%,\r
              73.6% 51.7%\r
            )`},class:"aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#129160] to-[#129160] opacity-60"})],-1))])])}}},Jn={class:"relative isolate overflow-hidden bg-gray-800"},Xn={class:"px-6 py-12 sm:px-6 sm:py-12 lg:px-8"},Zn={class:"mx-auto max-w-2xl text-center"},ea={class:"mt-10 flex items-center justify-center gap-x-6"},Wg={__name:"CtaQuality",setup(o){return(d,s)=>{const l=H;return n(),m("div",Jn,[e("div",Xn,[e("div",Zn,[s[2]||(s[2]=e("h2",{class:"text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"},"Качествени продукти от Example.bg",-1)),s[3]||(s[3]=e("p",{class:"mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300"},"Вече над 20 години доставя качествени продукти на потребителите в България.",-1)),e("div",ea,[h(l,{to:"#",class:"rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"},{default:w(()=>s[0]||(s[0]=[T(" Вижте повече ")])),_:1}),h(l,{to:"#",class:"text-sm/6 font-semibold text-white"},{default:w(()=>s[1]||(s[1]=[T(" Контакти "),e("span",{"aria-hidden":"true"},"→",-1)])),_:1})])])]),s[4]||(s[4]=Ge('<svg viewBox="0 0 1024 1024" aria-hidden="true" class="absolute -top-1/4 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"><circle r="512" cx="512" cy="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.9"></circle><defs><radialGradient id="8d958450-c69f-4251-94bc-4e091a323369"><stop stop-color="#129160"></stop><stop offset="1" stop-color="#129160"></stop></radialGradient></defs></svg>',1))])}}},ta={class:"relative bg-gray-800"},sa={class:"relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"},oa={class:"relative mx-auto max-w-7xl py-12 sm:py-12 lg:px-8 lg:py-12"},na={class:"pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32"},aa={class:"mt-8"},Kg={__name:"CtaImage",setup(o){return(d,s)=>{const l=Ce,c=H;return n(),m("div",ta,[e("div",sa,[h(l,{alt:"Nardis маркова козметика",src:"https://nextlevel-shop.admin-panels.com/wp-content/uploads/2025/04/cta-image-bg.jpg",class:"absolute inset-0 h-full w-full object-cover",sizes:"(max-width: 768px) 100vw, 50vw",width:"800",height:"600"}),s[0]||(s[0]=Ge('<svg viewBox="0 0 926 676" aria-hidden="true" class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"><path d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4"></path><defs><linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse"><stop stop-color="#776FFF"></stop><stop offset="1" stop-color="#FF4694"></stop></linearGradient></defs></svg>',1))]),e("div",oa,[e("div",na,[s[2]||(s[2]=e("h2",{class:"text-xl font-semibold text-[#129160]"},"Example.bg",-1)),s[3]||(s[3]=e("p",{class:"mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl"},"Lorem ipsum",-1)),s[4]||(s[4]=e("p",{class:"mt-6 text-base/7 text-gray-300"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),e("div",aa,[h(c,{to:"#",class:"inline-flex rounded-md bg-[#129160] px-3.5 py-2.5 text-sm font-semibold text-white hover:text-black shadow-xs hover:bg-[#ebedeb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"},{default:w(()=>s[1]||(s[1]=[T(" Купете онлайн ")])),_:1})])])])])}}},la=["selected"],ra=["value","selected"],rt={__name:"StateSelect",props:{modelValue:{type:String,default:""},countryCode:{type:String,default:""}},emits:["update:modelValue"],setup(o,{emit:d}){const s=o,{getStatesForCountry:l,countryStatesDict:c}=yt(),r=d;function i(a){r("update:modelValue",a.target.value)}async function u(){s.countryCode&&s.countryCode.length>0&&await l(s.countryCode)}return we(()=>{u()}),ae(()=>s.countryCode,()=>{u()}),(a,p)=>{var f;return(f=t(c)[s.countryCode])!=null&&f.length?(n(),m("select",{key:0,onChange:i,class:"h-[42px]"},[e("option",{value:"",selected:!s.modelValue},"Select a state",8,la),(n(!0),m(N,null,j(t(c)[s.countryCode],_=>(n(),m("option",{key:_.code,value:_.code,selected:_.code===s.modelValue},g(_.name),9,ra))),128))],32)):(n(),m("input",{key:1,type:"text",onChange:i,placeholder:"State"},null,32))}}},ia=["value"],ca=["value"],it={__name:"CountrySelect",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(o,{emit:d}){const{getAllowedCountries:s,countriesToShow:l}=yt(),c=d;we(()=>{s()});function r(i){c("update:modelValue",i.target.value)}return(i,u)=>(n(),m("select",{value:o.modelValue,onChange:r,required:"",class:"h-[42px]"},[u[0]||(u[0]=e("option",{value:"",disabled:""},"Select a country",-1)),(n(!0),m(N,null,j(t(l),a=>(n(),m("option",{key:a.code,value:a.code},g(a.name),9,ca))),128))],40,ia))}},da={class:"grid w-full gap-4 lg:grid-cols-2"},ua={class:"w-full"},ma={for:"first-name"},pa={class:"w-full"},ga={for:"last-name"},_a={key:0,class:"w-full col-span-full"},fa={for:"address1"},ha={key:1,class:"w-full col-span-full"},ya={for:"address2"},ba={key:2,class:"w-full"},va={for:"city"},$a={key:3,class:"w-full"},xa={for:"state"},wa={key:4,class:"w-full"},ka={for:"country"},Ca={key:5,class:"w-full"},Ia={for:"zip"},Pa={key:6,class:"w-full col-span-full"},Sa={for:"phone"},Ta=P({__name:"BillingDetails",props:{modelValue:{type:Object,required:!0}},setup(o){const{updateShippingLocation:d}=bt(),{isBillingAddressEnabled:s}=ie(),c=nt(o,"modelValue");return(r,i)=>{const u=rt,a=it;return n(),m("div",da,[e("div",ua,[e("label",ma,g(r.$t("messages.billing.firstName")),1),I(e("input",{id:"first-name","onUpdate:modelValue":i[0]||(i[0]=p=>t(c).firstName=p),placeholder:"John",autocomplete:"given-name",type:"text",required:""},null,512),[[U,t(c).firstName]])]),e("div",pa,[e("label",ga,g(r.$t("messages.billing.lastName")),1),I(e("input",{id:"last-name","onUpdate:modelValue":i[1]||(i[1]=p=>t(c).lastName=p),placeholder:"Doe",autocomplete:"family-name",type:"text",required:""},null,512),[[U,t(c).lastName]])]),t(s)?(n(),m("div",_a,[e("label",fa,g(r.$t("messages.billing.address1")),1),I(e("input",{id:"address1","onUpdate:modelValue":i[2]||(i[2]=p=>t(c).address1=p),placeholder:"O'Connell Street 47",autocomplete:"street-address",type:"text",required:""},null,512),[[U,t(c).address1]])])):$("",!0),t(s)?(n(),m("div",ha,[e("label",ya,g(r.$t("messages.billing.address2"))+" ("+g(r.$t("messages.general.optional"))+")",1),I(e("input",{id:"address2","onUpdate:modelValue":i[3]||(i[3]=p=>t(c).address2=p),placeholder:"Apartment, studio, or floor",autocomplete:"address-line2",type:"text"},null,512),[[U,t(c).address2]])])):$("",!0),t(s)?(n(),m("div",ba,[e("label",va,g(r.$t("messages.billing.city")),1),I(e("input",{id:"city","onUpdate:modelValue":i[4]||(i[4]=p=>t(c).city=p),placeholder:"New York",autocomplete:"locality",type:"text",required:""},null,512),[[U,t(c).city]])])):$("",!0),t(s)?(n(),m("div",$a,[e("label",xa,g(r.$t("messages.billing.state"))+" ("+g(r.$t("messages.general.optional"))+")",1),h(u,{id:"state",modelValue:t(c).state,"onUpdate:modelValue":i[5]||(i[5]=p=>t(c).state=p),"default-value":t(c).state,"country-code":t(c).country,onChange:t(d),autocomplete:"address-level1"},null,8,["modelValue","default-value","country-code","onChange"])])):$("",!0),t(s)?(n(),m("div",wa,[e("label",ka,g(r.$t("messages.billing.country")),1),h(a,{id:"country",modelValue:t(c).country,"onUpdate:modelValue":i[6]||(i[6]=p=>t(c).country=p),"default-value":t(c).country,onChange:t(d),autocomplete:"country"},null,8,["modelValue","default-value","onChange"])])):$("",!0),t(s)?(n(),m("div",Ca,[e("label",Ia,g(r.$t("messages.billing.zip")),1),I(e("input",{id:"zip","onUpdate:modelValue":i[7]||(i[7]=p=>t(c).postcode=p),placeholder:"10001",autocomplete:"postal-code",type:"text",required:""},null,512),[[U,t(c).postcode]])])):$("",!0),t(s)?(n(),m("div",Pa,[e("label",Sa,g(r.$t("messages.billing.phone"))+" ("+g(r.$t("messages.general.optional"))+")",1),I(e("input",{id:"phone","onUpdate:modelValue":i[8]||(i[8]=p=>t(c).phone=p),placeholder:"+1 234 567 8901",autocomplete:"tel",type:"tel"},null,512),[[U,t(c).phone]])])):$("",!0)])}}}),Qg=Object.assign(Ta,{__name:"BillingDetails"}),Aa={class:"grid w-full gap-4 lg:grid-cols-2"},La={class:"w-full"},Oa={for:"first-name"},Ua={class:"w-full"},Na={for:"last-name"},Ra={class:"w-full col-span-full"},Ma={for:"address1"},ja={class:"w-full col-span-full"},Da={for:"address2"},Ea={class:"w-full"},Fa={for:"city"},Va={class:"w-full"},za={for:"state"},qa={class:"w-full"},Ba={for:"country"},Ha={class:"w-full"},Ga={for:"zip"},Wa={class:"w-full col-span-full"},Ka={for:"phone"},Qa=P({__name:"ShippingDetails",props:{modelValue:{type:Object,required:!0}},setup(o){const{updateShippingLocation:d}=bt(),l=nt(o,"modelValue");return(c,r)=>{const i=rt,u=it;return n(),m("div",Aa,[e("div",La,[e("label",Oa,g(c.$t("messages.billing.firstName")),1),I(e("input",{id:"first-name","onUpdate:modelValue":r[0]||(r[0]=a=>t(l).firstName=a),placeholder:"John",autocomplete:"given-name",type:"text",required:""},null,512),[[U,t(l).firstName]])]),e("div",Ua,[e("label",Na,g(c.$t("messages.billing.lastName")),1),I(e("input",{id:"last-name","onUpdate:modelValue":r[1]||(r[1]=a=>t(l).lastName=a),placeholder:"Doe",autocomplete:"family-name",type:"text",required:""},null,512),[[U,t(l).lastName]])]),e("div",Ra,[e("label",Ma,g(c.$t("messages.billing.address1")),1),I(e("input",{id:"address1","onUpdate:modelValue":r[2]||(r[2]=a=>t(l).address1=a),placeholder:"O'Connell Street 47",autocomplete:"street-address",type:"text",required:""},null,512),[[U,t(l).address1]])]),e("div",ja,[e("label",Da,g(c.$t("messages.billing.address2"))+" ("+g(c.$t("messages.general.optional"))+")",1),I(e("input",{id:"address2","onUpdate:modelValue":r[3]||(r[3]=a=>t(l).address2=a),placeholder:"Apartment, studio, or floor",autocomplete:"address-line2",type:"text"},null,512),[[U,t(l).address2]])]),e("div",Ea,[e("label",Fa,g(c.$t("messages.billing.city")),1),I(e("input",{id:"city","onUpdate:modelValue":r[4]||(r[4]=a=>t(l).city=a),placeholder:"New York",autocomplete:"locality",type:"text",required:""},null,512),[[U,t(l).city]])]),e("div",Va,[e("label",za,g(c.$t("messages.billing.state"))+" ("+g(c.$t("messages.general.optional"))+")",1),h(i,{id:"state",modelValue:t(l).state,"onUpdate:modelValue":r[5]||(r[5]=a=>t(l).state=a),"default-value":t(l).state,"country-code":t(l).country,onChange:t(d)},null,8,["modelValue","default-value","country-code","onChange"])]),e("div",qa,[e("label",Ba,g(c.$t("messages.billing.country")),1),h(u,{id:"country",modelValue:t(l).country,"onUpdate:modelValue":r[6]||(r[6]=a=>t(l).country=a),"default-value":t(l).country,onChange:t(d)},null,8,["modelValue","default-value","onChange"])]),e("div",Ha,[e("label",Ga,g(c.$t("messages.billing.zip")),1),I(e("input",{id:"zip","onUpdate:modelValue":r[7]||(r[7]=a=>t(l).postcode=a),placeholder:"10001",autocomplete:"postal-code",type:"text",required:""},null,512),[[U,t(l).postcode]])]),e("div",Wa,[e("label",Ka,g(c.$t("messages.billing.phone"))+" ("+g(c.$t("messages.general.optional"))+")",1),I(e("input",{id:"phone","onUpdate:modelValue":r[8]||(r[8]=a=>t(l).phone=a),placeholder:"+1 234 567 8901",autocomplete:"tel",type:"tel"},null,512),[[U,t(l).phone]])])])}}}),Yg=Object.assign(Qa,{__name:"ShippingDetails"}),Ya={class:"grid gap-4 shipping-options"},Ja=["onClick"],Xa=["innerHTML"],Za={class:"font-semibold text-gray-600"},el={__name:"ShippingOptions",props:{options:{type:Array,required:!0},activeOption:{type:String,required:!0}},setup(o){var r;const{updateShippingMethod:d}=ie(),s=Ie(),l=((r=s==null?void 0:s.public)==null?void 0:r.CURRENCY_SYMBOL)||"$",c=async i=>{await d(i)};return(i,u)=>{const a=D;return n(),m("div",Ya,[(n(!0),m(N,null,j(o.options,p=>(n(),m("div",{key:p.id,class:F(["flex items-center justify-between option",{"active-option":p.id===o.activeOption}]),onClick:f=>c(p.id)},[e("div",null,[e("div",{class:"text-sm leading-tight text-gray-500",innerHTML:p.label},null,8,Xa),e("div",Za,g(t(l))+g(p.cost),1)]),h(a,{name:"ion:checkmark-circle",size:"20",class:"ml-auto text-primary checkmark opacity-0"})],10,Ja))),128))])}}},Jg=E(el,[["__scopeId","data-v-f391d757"]]),tl={class:"flex gap-4 leading-tight flex-wrap"},sl=["onClick","title"],ol=["innerHTML"],nl={key:0,class:"prose block w-full"},al=["innerHTML"],ll=P({__name:"PaymentOptions",props:{modelValue:{},paymentGateways:{}},emits:["update:modelValue"],setup(o,{emit:d}){const s=o,l=nt(s,"modelValue"),c=L(()=>l.value),r=d,i=u=>{r("update:modelValue",u)};return we(()=>{var u,a;(u=s.paymentGateways)!=null&&u.nodes.length&&i((a=s.paymentGateways)==null?void 0:a.nodes[0])}),(u,a)=>{var f;const p=D;return n(),m("div",tl,[(n(!0),m(N,null,j((f=u.paymentGateways)==null?void 0:f.nodes,_=>(n(),m("div",{key:_.id,class:F(["option",{"active-option":_.id===t(c).id}]),onClick:v=>i(_),title:(_==null?void 0:_.description)||(_==null?void 0:_.title)||"Payment Method"},[_.id==="stripe"?(n(),k(p,{key:0,name:"ion:card-outline",size:"20"})):_.id==="paypal"?(n(),k(p,{key:1,name:"ion:logo-paypal",size:"20"})):(n(),k(p,{key:2,name:"ion:cash-outline",size:"20"})),e("span",{class:"whitespace-nowrap",innerHTML:_.title},null,8,ol),h(p,{name:"ion:checkmark-circle",size:"20",class:"ml-auto text-primary checkmark opacity-0"})],10,sl))),128)),t(c).description?(n(),m("div",nl,[e("p",{class:"text-sm text-gray-500",innerHTML:t(c).description},null,8,al)])):$("",!0)])}}}),Xg=Object.assign(E(ll,[["__scopeId","data-v-baca1106"]]),{__name:"PaymentOptions"}),rl={id:"card-element"},il=P({__name:"StripeElement",props:["stripe"],emits:["updateElement"],setup(o,{emit:d}){const{cart:s}=ie(),l=L(()=>s.value&&parseFloat(s.value.rawTotal)*100),c=d;let r=null;const i={mode:"payment",currency:"eur",amount:l.value},u=async()=>{r=o.stripe.elements(i),r.create("card",{hidePostalCode:!0}).mount("#card-element"),c("updateElement",r)};return we(()=>{u()}),(a,p)=>(n(),m("div",rl))}}),Zg=Object.assign(il,{__name:"StripeElement"}),cl={class:"flex rounded bg-white text-sm leading-none shadow-sm shadow-gray-200 isolate"},dl=["disabled"],ul=["max"],ml=["disabled"],pl=P({__name:"QuantityInput",props:{item:{type:Object,required:!0}},setup(o){const{updateItemQuantity:d,isUpdatingCart:s,cart:l}=ie(),{debounce:c}=le(),r=L(()=>{var _,v;return o.item.variation?(_=o.item.variation)==null?void 0:_.node:(v=o.item.product)==null?void 0:v.node}),i=C(o.item.quantity),u=L(()=>r.value.stockQuantity?r.value.stockQuantity<=i.value:!1),a=()=>i.value++,p=()=>i.value--;ae(i,c(()=>{i.value!==""&&d(o.item.key,i.value)},250));const f=()=>{var _,v,y;if(i.value===""){const b=(y=(v=(_=l.value)==null?void 0:_.contents)==null?void 0:v.nodes)==null?void 0:y.find(x=>x.key===o.item.key);b&&(i.value=b.quantity)}};return(_,v)=>{const y=D;return n(),m("div",cl,[e("button",{title:"Decrease Quantity","aria-label":"Decrease Quantity",onClick:p,type:"button",class:"focus:outline-none border-r w-6 h-6 border rounded-l border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed",disabled:t(s)||t(i)<=0},[h(y,{name:"ion:remove",size:"14"})],8,dl),I(e("input",{"onUpdate:modelValue":v[0]||(v[0]=b=>Q(i)?i.value=b:null),type:"number",min:"0",max:t(r).stockQuantity,"aria-label":"Quantity",onFocusout:f,class:"flex items-center justify-center w-8 px-2 text-right text-xs focus:outline-none border-y border-gray-300"},null,40,ul),[[U,t(i),void 0,{number:!0}]]),e("button",{title:"Increase Quantity","aria-label":"Increase Quantity",onClick:a,type:"button",class:"focus:outline-none border-l w-6 h-6 border rounded-r hover:bg-gray-50 border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-100",disabled:t(s)||t(u)},[h(y,{name:"ion:add",size:"14"})],8,ml)])}}}),gl=Object.assign(E(pl,[["__scopeId","data-v-7c0d03fb"]]),{__name:"QuantityInput"}),_l={},fl={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 512 512"};function hl(o,d){return n(),m("svg",fl,d[0]||(d[0]=[e("path",{d:"M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 112h352"},null,-1),e("path",{d:"M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}const Lt=Object.assign(E(_l,[["render",hl]]),{__name:"TrashIcon"}),yl={key:0,class:"rounded-lg flex h-16 w-full overflow-hidden relative items-center"},bl={__name:"SwipeCard",emits:["remove"],setup(o,{emit:d}){const s=d,l=C(!0),c=C(null),{isSwiping:r,lengthX:i}=Qt(c,{passive:!0,onSwipeEnd(){i.value>80&&(l.value=!1,s("remove"))}});return(u,a)=>{const p=Lt;return t(l)?(n(),m("div",yl,[h(p,{class:F(["transform transition-all right-0 w-6 scale-0 absolute",{"scale-100":t(i)>40,"delete-ready":t(i)>80}])},null,8,["class"]),e("div",{class:F(["rounded-lg inset-0 absolute",{"transition-all":!t(r)}]),ref_key:"el",ref:c,style:He({transform:t(r)?`translateX(-${t(i)}px)`:"none"})},[We(u.$slots,"default")],6)])):$("",!0)}}},vl={key:0,class:"flex items-center gap-3 group"},$l={class:"flex-1 min-w-0"},xl={class:"flex flex-wrap gap-x-2 gap-y-1 items-center"},wl={key:0,class:"text-[10px] border-green-200 leading-none bg-green-100 inline-block p-0.5 rounded text-green-600 border"},kl={key:1,class:"text-[10px] border-yellow-200 leading-none bg-yellow-100 inline-block p-0.5 rounded text-orange-500 border"},Cl={class:"inline-flex gap-2 flex-col items-end shrink-0"},Il={class:"text-xs text-gray-400 group-hover:text-gray-700 flex leading-none items-center"},Ot={__name:"CartCard",props:{item:{type:Object,required:!0}},setup(o){const{updateItemQuantity:d}=ie(),{addToWishlist:s}=Ue(),{FALLBACK_IMG:l}=le(),{storeSettings:c}=xe(),r=L(()=>{var b,x;return o.item.variation?(b=o.item.variation)==null?void 0:b.node:(x=o.item.product)==null?void 0:x.node}),i=L(()=>`/produkt/${decodeURIComponent(o.item.product.node.slug)}`),u=L(()=>r.value.stockQuantity?r.value.lowStockAmount>=r.value.stockQuantity:!1),a=L(()=>{var b,x,A;return((b=r.value.image)==null?void 0:b.cartSourceUrl)||((x=r.value.image)==null?void 0:x.sourceUrl)||((A=o.item.product.image)==null?void 0:A.sourceUrl)||l}),p=L(()=>parseFloat(r.value.rawRegularPrice)),f=L(()=>parseFloat(r.value.rawSalePrice)),_=L(()=>Math.round((p.value-f.value)/p.value*100)+"%"),v=()=>{d(o.item.key,0)},y=()=>{s(o.item.product.node),v()};return(b,x)=>{const A=Ce,R=H,B=lt,O=gl,te=D,q=bl;return n(),k(q,{onRemove:v},{default:w(()=>[t(r)?(n(),m("div",vl,[h(R,{to:t(i)},{default:w(()=>{var M,J;return[h(A,{width:"64",height:"64",class:"w-16 h-16 rounded-md skeleton",src:t(a),alt:((M=t(r).image)==null?void 0:M.altText)||t(r).name,title:((J=t(r).image)==null?void 0:J.title)||t(r).name,loading:"lazy"},null,8,["src","alt","title"])]}),_:1},8,["to"]),e("div",$l,[e("div",xl,[h(R,{class:"leading-tight truncate max-w-full block",to:t(i)},{default:w(()=>[T(g(t(r).name),1)]),_:1},8,["to"]),t(r).salePrice?(n(),m("span",wl," Save "+g(t(_)),1)):$("",!0),t(u)?(n(),m("span",kl," Low Stock ")):$("",!0)]),h(B,{class:"mt-1 text-xs","sale-price":t(r).salePrice,"regular-price":t(r).regularPrice},null,8,["sale-price","regular-price"])]),e("div",Cl,[h(O,{item:o.item},null,8,["item"]),e("div",Il,[t(c).showMoveToWishlist?(n(),m("button",{key:0,class:"mr-2 pr-2 border-r",onClick:y,type:"button"},"Move to Wishlist")):$("",!0),e("button",{title:"Remove Item","aria-label":"Remove Item",onClick:v,type:"button",class:"flex items-center gap-1 hover:text-red-500 cursor-pointer"},[h(te,{name:"ion:trash",class:"md:inline-block",size:"12"})])])])])):$("",!0)]),_:1})}}},Pl=["placeholder"],Sl=["disabled"],Tl={key:1},Al=["innerHTML"],Ll={key:0,class:"text-xs font-semibold uppercase flex flex-wrap gap-2"},Ol={key:0,class:"bg-primary border-primary border rounded-md flex bg-opacity-5 border-opacity-10 text-primary leading-none p-1.5 gap-1 items-center"},Ul=["innerHTML"],Nl=P({__name:"AddCoupon",setup(o){const{cart:d,isUpdatingCoupon:s,applyCoupon:l,removeCoupon:c}=ie(),r=C(""),i=C("");async function u(){const{message:a}=await l(r.value);a?i.value=a:(r.value="",i.value="")}return(a,p)=>{const f=re,_=D;return n(),m("div",null,[e("form",{class:"flex gap-1",onSubmit:ne(u,["prevent"])},[I(e("input",{id:"couponCode","onUpdate:modelValue":p[0]||(p[0]=v=>Q(r)?r.value=v:null),type:"text",placeholder:a.$t("messages.shop.couponCode"),class:"w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm outline-none",required:""},null,8,Pl),[[U,t(r)]]),e("button",{class:"flex items-center justify-center px-4 py-2 text-white bg-gray-800 border rounded-md shadow-sm outline-none min-w-20",disabled:t(s)},[t(s)?(n(),k(f,{key:0,color:"#fff",size:"16"})):(n(),m("span",Tl,g(a.$t("messages.general.apply")),1))],8,Sl)],32),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(i)?(n(),m("div",{key:0,class:"mt-2 text-xs text-red-600",innerHTML:t(i)},null,8,Al)):$("",!0)]),_:1}),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(d)&&t(d).appliedCoupons?(n(),m("div",Ll,[(n(!0),m(N,null,j(t(d).appliedCoupons,(v,y)=>(n(),m("div",{key:(v==null?void 0:v.code)||y,class:"flex flex-wrap mt-2 flex-2"},[v!=null&&v.code?(n(),m("div",Ol,[e("span",{innerHTML:v.code},null,8,Ul),h(_,{name:"ion:close",class:"rounded-full cursor-pointer hover:bg-primary hover:text-white",onClick:b=>t(c)(v.code)},null,8,["onClick"])])):$("",!0)]))),128))])):$("",!0)]),_:1})])}}}),Rl=Object.assign(Nl,{__name:"AddCoupon"}),Ml={key:0,class:"bg-white rounded-lg shadow-lg mb-8 w-full min-h-[280px] p-4 sm:p-8 relative md:max-w-md md:top-32 md:sticky"},jl={class:"mb-6 text-xl font-semibold leading-none"},Dl={class:"flex flex-col gap-4 overflow-y-auto"},El={class:"grid gap-1 text-sm font-semibold text-gray-500"},Fl={class:"flex justify-between"},Vl=["innerHTML"],zl={class:"flex justify-between"},ql={class:"text-gray-700 tabular-nums"},Bl={key:0,class:"flex justify-between"},Hl={class:"text-primary tabular-nums"},Gl=["innerHTML"],Wl={class:"flex justify-between mt-4"},Kl=["innerHTML"],Ql={key:0,class:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-50"},e_={__name:"OrderSummary",setup(o){const{cart:d,isUpdatingCart:s}=ie();return(l,c)=>{const r=Ot,i=Rl,u=re;return t(d)?(n(),m("aside",Ml,[e("h2",jl,g(l.$t("messages.shop.orderSummary")),1),e("ul",Dl,[(n(!0),m(N,null,j(t(d).contents.nodes,a=>(n(),k(r,{key:a.key,item:a},null,8,["item"]))),128))]),h(i,{class:"my-8"}),e("div",El,[e("div",Fl,[e("span",null,g(l.$t("messages.shop.subtotal")),1),e("span",{class:"text-gray-700 tabular-nums",innerHTML:t(d).subtotal},null,8,Vl)]),e("div",zl,[e("span",null,g(l.$t("messages.general.shipping")),1),e("span",ql,g(parseFloat(t(d).shippingTotal)>0?"+":"")+" "+g(t(d).shippingTotal),1)]),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(d)&&t(d).appliedCoupons?(n(),m("div",Bl,[e("span",null,g(l.$t("messages.shop.discount")),1),e("span",Hl,[c[0]||(c[0]=T("- ")),e("span",{innerHTML:t(d).discountTotal},null,8,Gl)])])):$("",!0)]),_:1}),e("div",Wl,[e("span",null,g(l.$t("messages.shop.total")),1),e("span",{class:"text-lg font-bold text-gray-700 tabular-nums",innerHTML:t(d).total},null,8,Kl)])]),We(l.$slots,"default"),t(s)?(n(),m("div",Ql,[h(u)])):$("",!0)])):$("",!0)}}},Yl={class:"inline-flex ml-auto -space-x-px shadow-sm rounded-m isolate"},Jl={value:"date"},Xl={value:"alphabetically"},Zl={value:"price"},er={key:0,value:"rating"},tr={value:"discount"},sr={__name:"OrderByDropdown",async setup(o){let d,s;const{getOrderQuery:l,setOrderQuery:c}=([d,s]=Se(()=>rs()),d=await d,s(),d),{storeSettings:r}=xe(),i=C(l()),a=C((_=>({DATE:"date",TITLE:"alphabetically",PRICE:"price",RATING:"rating"})[_]||"date")(i.value.orderBy)),p=C(i.value.order||"DESC"),f=_=>({date:"DATE",alphabetically:"TITLE",price:"PRICE",rating:"RATING",discount:"DATE"})[_]||"DATE";return ae([a,p],()=>{const _=f(a.value);c(_,p.value)}),(_,v)=>{const y=D;return n(),m("div",Yl,[e("button",{class:"relative inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20","aria-label":"Sort",onClick:v[0]||(v[0]=b=>p.value=t(p)==="ASC"?"DESC":"ASC")},[h(y,{name:"ion:filter-outline",size:"18",class:F([t(p)==="ASC"?"rotate-180":"","transition-transform transform transform-origin-center"])},null,8,["class"])]),I(e("select",{id:"orderby-dropdown","onUpdate:modelValue":v[1]||(v[1]=b=>Q(a)?a.value=b:null),class:"bg-white rounded-l-none","aria-label":"Order by"},[e("option",Jl,g(_.$t("messages.general.latest")),1),e("option",Xl,g(_.$t("messages.general.alphabetically")),1),e("option",Zl,g(_.$t("messages.shop.price")),1),t(r).showReviews?(n(),m("option",er,g(_.$t("messages.shop.rating")),1)):$("",!0),e("option",tr,g(_.$t("messages.shop.discount")),1)],512),[[Yt,t(a)]])])}}},or={class:"mt-3 grid gap-4 grid-cols-2"},nr={class:"flex relative items-center"},ar=["innerHTML"],lr={class:"flex relative items-center"},rr=["innerHTML"],ir={class:"mx-1 mt-1 col-span-full"},cr={__name:"PriceFilter",setup(o){var v,y;const{getFilter:d,setFilter:s,isFiltersActive:l}=pe(),c=Ie(),r=((v=c==null?void 0:c.public)==null?void 0:v.MAX_PRICE)||1e3,i=((y=c==null?void 0:c.public)==null?void 0:y.CURRENCY_SYMBOL)||"$",u=C(d("price")),a=u.value.length?C(u.value):C([0,r]),p=C(!0),f=()=>{a.value=[0,r]},_=()=>{s("price",a.value)};return ae(l,()=>{l.value||f()}),(b,x)=>{const A=D;return n(),m("div",null,[e("div",{class:"cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center",onClick:x[0]||(x[0]=R=>p.value=!t(p))},[e("span",null,g(b.$t("messages.shop.price")),1),h(A,{name:"ion:chevron-down-outline",class:F(["transform",t(p)?"rotate-180":""])},null,8,["class"])]),I(e("div",or,[e("div",nr,[I(e("input",{id:"price-from","onUpdate:modelValue":x[1]||(x[1]=R=>t(a)[0]=R),class:"bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm",type:"number",placeholder:"From",min:"0"},null,512),[[U,t(a)[0]]]),e("label",{for:"price-from",class:"leading-none px-2 text-gray-400 absolute",innerHTML:t(i)},null,8,ar)]),e("div",lr,[I(e("input",{id:"price-to","onUpdate:modelValue":x[2]||(x[2]=R=>t(a)[1]=R),class:"bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm",type:"number",placeholder:"Up to",min:"1"},null,512),[[U,t(a)[1]]]),e("label",{for:"price-to",class:"leading-none px-2 text-gray-400 absolute",innerHTML:t(i)},null,8,rr)]),e("div",ir,[h(t(Jt),{modelValue:t(a),"onUpdate:modelValue":x[3]||(x[3]=R=>Q(a)?a.value=R:null),tooltips:!1,min:0,max:t(r),ariaLabelledby:"price-from price-to",onUpdate:_},null,8,["modelValue","max"])])],512),[[Oe,t(p)]])])}}},dr={key:0},ur={class:"mt-3 mr-1 max-h-[240px] grid gap-1.5 overflow-auto custom-scrollbar"},mr=["id","value"],pr=["for"],gr=["innerHTML"],_r={key:0,class:"ml-1 text-gray-400 tabular-nums","aria-hidden":"true"},fr={__name:"CategoryFilter",props:{terms:{type:Array,required:!0},label:{type:String,default:""},openByDefault:{type:Boolean,default:!0},showCount:{type:Boolean,default:!1}},setup(o){const{getFilter:d,setFilter:s,isFiltersActive:l}=pe(),r=C(o.openByDefault),i=C(d("category")||[]),a=Te().params.categorySlug;a&&(i.value=[a]),ae(l,()=>{l.value||(i.value=[])});const p=()=>{s("category",i.value)};return(f,_)=>{const v=D;return o.terms.length?(n(),m("div",dr,[e("div",{class:"cursor-pointer flex font-semibold mt-8 justify-between items-center",onClick:_[0]||(_[0]=y=>r.value=!t(r))},[e("span",null,g(o.label||f.$t("messages.shop.category",2)),1),h(v,{name:"ion:chevron-down-outline",class:F(["transform",t(r)?"rotate-180":""])},null,8,["class"])]),I(e("div",ur,[(n(!0),m(N,null,j(o.terms,y=>(n(),m("div",{key:y.slug,class:"flex gap-2 items-start"},[I(e("input",{id:y.slug,"onUpdate:modelValue":_[1]||(_[1]=b=>Q(i)?i.value=b:null),type:"checkbox",value:y.slug,onChange:p},null,40,mr),[[De,t(i)]]),e("label",{for:y.slug,class:"cursor-pointer m-0 text-sm flex-1 leading-tight"},[e("span",{innerHTML:y.name},null,8,gr),o.showCount?(n(),m("small",_r,"("+g(y.count||0)+")",1)):$("",!0)],8,pr)]))),128))],512),[[Oe,t(r)]])])):$("",!0)}}},hr={class:"mt-3 mr-6 max-h-[240px] grid gap-1.5 swatches overflow-auto custom-scrollbar"},yr=["title"],br=["id","value"],vr=["for"],$r=P({__name:"ColorFilter",props:{attribute:{type:Object,required:!0}},setup(o){const{getFilter:d,setFilter:s,isFiltersActive:l}=pe(),c=C(d(o.attribute.slug)||[]),r=C(o.attribute.label||o.attribute.slug),i=C(o.attribute.openByDefault);ae(l,()=>{l.value||(c.value=[])});const u=()=>{s(o.attribute.slug,c.value)};return(a,p)=>{const f=D;return n(),m(N,null,[e("div",{class:"cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center",onClick:p[0]||(p[0]=_=>i.value=!t(i))},[e("span",null,g(t(r)),1),h(f,{name:"ion:chevron-down-outline",class:F(["transform",t(i)?"rotate-180":""])},null,8,["class"])]),I(e("div",hr,[(n(!0),m(N,null,j(o.attribute.terms,_=>(n(),m("div",{key:_.slug,style:He({"--color":_.slug}),title:_.name},[I(e("input",{id:_.slug,"onUpdate:modelValue":p[1]||(p[1]=v=>Q(c)?c.value=v:null),class:"hidden",type:"checkbox",value:_.slug,onChange:u},null,40,br),[[De,t(c)]]),e("label",{for:_.slug,class:"cursor-pointer m-0"},null,8,vr)],12,yr))),128))],512),[[Oe,t(i)]])],64)}}}),xr=Object.assign(E($r,[["__scopeId","data-v-e011c69d"]]),{__name:"ColorFilter"}),wr={class:"mt-3 mr-1 max-h-[240px] grid gap-1 overflow-auto custom-scrollbar"},kr=["id","value"],Cr=["for"],Ir=["innerHTML"],Pr={key:0,class:"ml-1 text-gray-400 tabular-nums","aria-hidden":"true"},Sr=P({__name:"GlobalFilter",props:{attribute:{type:Object,required:!0}},setup(o){const{getFilter:d,setFilter:s,isFiltersActive:l}=pe(),c=C(d(o.attribute.slug)||[]),r=C(o.attribute.label||o.attribute.slug),i=C(o.attribute.openByDefault);ae(l,()=>{l.value||(c.value=[])});const u=()=>{s(o.attribute.slug,c.value)};return(a,p)=>{const f=D;return n(),m(N,null,[e("div",{class:"cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center",onClick:p[0]||(p[0]=_=>i.value=!t(i))},[e("span",null,g(t(r)),1),h(f,{name:"ion:chevron-down-outline",class:F(["transform",t(i)?"rotate-180":""])},null,8,["class"])]),I(e("div",wr,[(n(!0),m(N,null,j(o.attribute.terms,_=>(n(),m("div",{key:_.slug,class:"flex gap-2 items-center"},[I(e("input",{id:_.slug,"onUpdate:modelValue":p[1]||(p[1]=v=>Q(c)?c.value=v:null),type:"checkbox",value:_.slug,onChange:u},null,40,kr),[[De,t(c)]]),e("label",{for:_.slug,class:"cursor-pointer m-0 text-sm flex items-center flex-wrap"},[e("span",{innerHTML:_.name},null,8,Ir),o.attribute.showCount?(n(),m("small",Pr,"("+g(_.count||0)+")",1)):$("",!0)],8,Cr)]))),128))],512),[[Oe,t(i)]])],64)}}}),Tr=Object.assign(Sr,{__name:"GlobalFilter"}),Ar={key:0,class:"mt-3 mr-1 max-h-[240px] grid gap-1 overflow-auto custom-scrollbar"},Lr={class:"flex gap-2 items-center"},Or={__name:"OnSaleFilter",setup(o){const{getFilter:d,setFilter:s,isFiltersActive:l}=pe(),c=C(d("sale")||[]),r=C(!0);ae(l,()=>{l.value||(c.value=[])});const i=u=>{c.value.length===0?(c.value=["true"],s("sale",["true"])):(c.value=[],s("sale",[]))};return(u,a)=>{const p=D;return n(),m("div",null,[e("div",{class:"cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center",onClick:a[0]||(a[0]=f=>r.value=!t(r))},[a[2]||(a[2]=e("span",null,"Sale Products Only",-1)),h(p,{name:"ion:chevron-down-outline",class:F(["transform",t(r)?"rotate-180":""])},null,8,["class"])]),t(r)?(n(),m("div",Ar,[e("div",Lr,[a[3]||(a[3]=e("label",{for:"sale-true",class:"cursor-pointer m-0 text-sm sr-only","aria-label":"Only show products on sale"}," Only show products on sale",-1)),I(e("input",{id:"sale-true","onUpdate:modelValue":a[1]||(a[1]=f=>Q(c)?c.value=f:null),type:"checkbox",value:"true","aria-label":"Sale Products Only",onClick:i},null,512),[[De,t(c)]])])])):$("",!0)])}}},Ur=_t(()=>vt(()=>Promise.resolve().then(()=>ig),void 0,import.meta.url).then(o=>o.default||o)),Nr=_t(()=>vt(()=>Promise.resolve().then(()=>dg),void 0,import.meta.url).then(o=>o.default||o)),Rr={id:"filters"},Mr={class:"relative z-30 grid mb-12 space-y-8 divide-y"},jr=P({__name:"Filters",props:{hideCategories:{type:Boolean,default:!1}},async setup(o){var y,b,x;let d,s;const{isFiltersActive:l}=pe(),{removeBodyClass:c}=le(),r=Ie(),{storeSettings:i}=xe(),u=((y=r==null?void 0:r.public)==null?void 0:y.GLOBAL_PRODUCT_ATTRIBUTES)||[],a=u.map(A=>{var R;return(R=A==null?void 0:A.slug)==null?void 0:R.toUpperCase().replace("_","")}),{data:p}=([d,s]=Se(()=>Be("getAllTerms",{taxonomies:[...a,Ct.PRODUCTCATEGORY]})),d=await d,s(),d),f=(x=(b=p.value)==null?void 0:b.terms)==null?void 0:x.nodes,_=f==null?void 0:f.filter(A=>A.taxonomyName==="product_cat"),v=u.map(A=>({...A,terms:f==null?void 0:f.filter(R=>R.taxonomyName===A.slug)}));return(A,R)=>{const B=sr,O=cr,te=fr,q=xr,M=Tr,J=Or,_e=Ur,ue=Nr;return n(),m(N,null,[e("aside",Rr,[h(B,{class:"block w-full md:hidden"}),e("div",Mr,[h(O),o.hideCategories?$("",!0):(n(),k(te,{key:0,terms:t(_)},null,8,["terms"])),(n(!0),m(N,null,j(t(v),se=>(n(),m("div",{key:se.slug},[se.slug=="pa_color"||se.slug=="pa_colour"?(n(),k(q,{key:0,attribute:se},null,8,["attribute"])):(n(),k(M,{key:1,attribute:se},null,8,["attribute"]))]))),128)),h(J),t(i).showReviews?(n(),k(_e,{key:1})):$("",!0),t(l)?(n(),k(ue,{key:2})):$("",!0)])]),e("div",{class:"fixed inset-0 z-50 hidden bg-black opacity-25 filter-overlay",onClick:R[0]||(R[0]=se=>t(c)("show-filters"))})],64)}}}),t_=Object.assign(jr,{__name:"Filters"}),Dr={key:0,class:"text-sm font-light"},Er={class:"font-normal"},Fr=P({__name:"ProductResultCount",setup(o){const{products:d,currentPage:s,totalProducts:l}=Ye(),c=L(()=>d.value.length),r=L(()=>{var a;return(a=s.value)==null?void 0:a.pageInfo.hasNextPage}),i=L(()=>{var a;return(a=s.value)==null?void 0:a.pageInfo.hasPreviousPage}),u=L(()=>l.value>0?` от общо ${l.value}`:r.value&&i.value?" (има още страници)":r.value?" (има още продукти)":i.value?" (последна страница)":"");return(a,p)=>t(d).length!==0?(n(),m("div",Dr,[p[0]||(p[0]=e("span",null,"Показани ",-1)),e("span",Er,g(t(c)),1),p[1]||(p[1]=e("span",null," продукта",-1)),e("span",null,g(t(u)),1)])):$("",!0)}}),s_=Object.assign(Fr,{__name:"ProductResultCount"}),Vr={class:"relative inline-flex -space-x-px shadow-sm rounded-m isolate"},zr={key:0,class:"absolute z-20 w-2.5 h-2.5 rounded-full bg-primary -top-1 -right-1"},o_={__name:"ShowFilterTrigger",async setup(o){let d,s;const{toggleBodyClass:l,removeBodyClass:c}=le(),{isFiltersActive:r}=([d,s]=Se(()=>pe()),d=await d,s(),d);return Xt(()=>{c("show-filters")}),(i,u)=>{const a=D;return n(),m("div",Vr,[e("button",{class:"relative inline-flex items-center p-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:z-20","aria-label":"Show filters",onClick:u[0]||(u[0]=ne(p=>t(l)("show-filters"),["prevent"])),title:"Show filters"},[h(a,{name:"ion:funnel-outline",size:"18",class:"transition-transform transform transform-origin-center"})]),t(r)?(n(),m("span",zr)):$("",!0)])}}},qr={},Br={class:"product-skeleton"};function Hr(o,d){return n(),m("div",Br,d[0]||(d[0]=[Ge('<div class="relative aspect-square bg-gray-200 rounded-lg animate-pulse" data-v-7884c902><div class="w-full h-full flex items-center justify-center" data-v-7884c902><svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7884c902><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-7884c902></path></svg></div></div><div class="mt-4 space-y-3" data-v-7884c902><div class="h-4 bg-gray-200 rounded animate-pulse" data-v-7884c902></div><div class="h-4 bg-gray-200 rounded animate-pulse w-5/6" data-v-7884c902></div></div><div class="mt-4 flex items-center space-x-2" data-v-7884c902><div class="h-5 bg-gray-200 rounded animate-pulse w-20" data-v-7884c902></div><div class="h-5 bg-gray-200 rounded animate-pulse w-16" data-v-7884c902></div></div>',3)]))}const Gr=Object.assign(E(qr,[["render",Hr],["__scopeId","data-v-7884c902"]]),{__name:"ProductSkeleton"}),Wr={class:"flex justify-center items-center mt-8 mb-16 gap-4"},Kr=["disabled"],Qr={class:"flex items-center px-4 py-2 text-sm text-gray-700 bg-gray-50 border-t border-b border-gray-300"},Yr={key:1},Jr=["disabled"],Xr=P({__name:"CursorPagination",setup(o){const{isLoading:d,totalProducts:s,getCurrentPageFromRoute:l,navigateToPage:c}=Ye(),r=L(()=>l()),i=L(()=>s.value>0?Math.ceil(s.value/12):1),u=L(()=>{const v=r.value,y=i.value;return y>1?`Страница ${v} от ${y}`:`Страница ${v}`}),a=L(()=>r.value>1),p=L(()=>r.value<i.value),f=async()=>{!d.value&&a.value&&await c(r.value-1)},_=async()=>{!d.value&&p.value&&await c(r.value+1)};return(v,y)=>{const b=D;return n(),m("div",Wr,[e("button",{onClick:f,disabled:!t(a)||t(d),class:F([{"cursor-not-allowed opacity-50":!t(a)||t(d),"hover:bg-gray-50":t(a)&&!t(d)},"flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md focus:z-10 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"]),"aria-label":"Предишна страница"},[h(b,{name:"ion:chevron-back-outline",size:"20",class:"w-5 h-5 mr-2"}),y[0]||(y[0]=T(" Предишна страница "))],10,Kr),e("div",Qr,[t(d)?(n(),k(b,{key:0,name:"ion:refresh-outline",size:"16",class:"w-4 h-4 mr-2 animate-spin"})):(n(),m("span",Yr,g(t(u)),1))]),e("button",{onClick:_,disabled:!t(p)||t(d),class:F([{"cursor-not-allowed opacity-50":!t(p)||t(d),"hover:bg-gray-50":t(p)&&!t(d)},"flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md focus:z-10 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"]),"aria-label":"Следваща страница"},[y[1]||(y[1]=T(" Следваща страница ")),h(b,{name:"ion:chevron-forward-outline",size:"20",class:"w-5 h-5 ml-2"})],10,Jr)])}}}),Zr=Object.assign(E(Xr,[["__scopeId","data-v-45ef4190"]]),{__name:"CursorPagination"}),ei={class:"w-full my-16 lg:my-24"},ti={class:"flex flex-col items-center justify-center w-full text-center text-pretty"},si={class:"text-2xl font-bold"},oi={class:"mt-4 max-w-md"},ni=["title"],ai=P({__name:"NoProductsFound",setup(o){Ye();const{resetFilter:d}=pe(),{isFiltersActive:s}=pe(),{isSearchActive:l}=Qe(),c=()=>{d()},r=L(()=>s.value||l.value);return(i,u)=>{const a=D;return n(),m("div",ei,[e("div",ti,[h(a,{name:"ion:sad-outline",size:"156",class:"opacity-25 mb-10"}),e("h2",si,g(i.$t("messages.shop.noProductsFound.title")),1),e("p",oi,[We(i.$slots,"default",{},()=>[T(g(i.$t("messages.shop.noProductsFound.subText")),1)])]),e("div",null,[t(r)?(n(),m("button",{key:0,class:"bg-primary rounded-lg font-bold mt-8 text-center text-white text-sm w-full p-2 px-3 inline-block hover:bg-primary-dark",title:i.$t("messages.shop.noProductsFound.clearFiltersAndSearch"),"aria-label":"Clear all filters and search",onClick:c},g(i.$t("messages.shop.noProductsFound.clearFiltersAndSearch")),9,ni)):$("",!0)])])])}}}),li=Object.assign(ai,{__name:"NoProductsFound"}),ri={key:0,class:"product-grid"},ii={key:1,class:"relative w-full"},ci=P({__name:"ProductGrid",setup(o){const{products:d,isLoading:s,loadProducts:l,currentPage:c}=Ye(),r=Te(),i=C(!1),u=C(!0);ae(s,f=>{!f&&u.value&&(u.value=!1)});const a=C(null),p=C(null);return we(()=>{p.value=new IntersectionObserver(Zt(async f=>{var v;const _=f[0];if(_&&_.isIntersecting&&!i.value&&(v=c.value)!=null&&v.pageInfo.hasNextPage){i.value=!0;try{await l({search:r.query.search,categoryIn:r.query.category?[r.query.category]:void 0,priceMin:r.query.priceMin?parseFloat(r.query.priceMin):void 0,priceMax:r.query.priceMax?parseFloat(r.query.priceMax):void 0,onSale:r.query.sale==="true"?!0:void 0,orderby:r.query.orderby||"DATE"},"next",!0)}catch(y){console.error("Error prefetching next page:",y)}finally{i.value=!1}}},1e3),{rootMargin:"400px",threshold:.1}),a.value&&p.value.observe(a.value)}),ot(()=>{p.value&&p.value.disconnect()}),(f,_)=>{const v=Gr,y=At,b=Zr,x=li;return n(),k(Z,{name:"fade",mode:"out-in"},{default:w(()=>[t(s)||t(u)?(n(),m("div",ri,[(n(),m(N,null,j(12,A=>h(v,{key:A})),64))])):t(d).length?(n(),m("section",ii,[h(es,{name:"shrink",tag:"div",mode:"in-out",class:"product-grid"},{default:w(()=>[(n(!0),m(N,null,j(t(d),(A,R)=>(n(),m("div",{key:A.id||R,class:"product-card rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-white p-2 w-full"},[h(y,{node:A,index:R},null,8,["node","index"])]))),128))]),_:1}),e("div",{ref_key:"observerTarget",ref:a,class:"h-px w-full"},null,512),h(b)])):(n(),k(x,{key:2},{default:w(()=>_[0]||(_[0]=[T(" Could not fetch products from your store. Please check your configuration. ")])),_:1}))]),_:1})}}}),n_=Object.assign(E(ci,[["__scopeId","data-v-c116b7d7"]]),{__name:"ProductGrid"}),di={class:"flex py-4 gap-4 items-center"},ui=["src","alt","title"],mi={class:"ml-auto"},pi=P({__name:"WishListItem",props:{product:{}},setup(o){const{removeFromWishlist:d}=Ue();return(s,l)=>{const c=H,r=lt;return n(),m("li",di,[s.product.slug?(n(),k(c,{key:0,to:`/produkt/${decodeURIComponent(s.product.slug)}`},{default:w(()=>{var i,u,a,p,f,_;return[(u=(i=s.product)==null?void 0:i.image)!=null&&u.cartSourceUrl?(n(),m("img",{key:0,class:"rounded-lg object-cover h-16 w-16",src:((a=s.product.image)==null?void 0:a.cartSourceUrl)||((p=s.product.image)==null?void 0:p.sourceUrl)||"/images/placeholder.jpg",alt:((f=s.product.image)==null?void 0:f.altText)||s.product.name||"Product image",title:((_=s.product.image)==null?void 0:_.altText)||s.product.name||"Product image",width:"100",height:"120",loading:"lazy"},null,8,ui)):$("",!0)]}),_:1},8,["to"])):$("",!0),e("div",null,[s.product.slug?(n(),k(c,{key:0,class:"text-lg leading-tight",to:`/produkt/${decodeURIComponent(s.product.slug)}`},{default:w(()=>[T(g(s.product.name),1)]),_:1},8,["to"])):$("",!0),h(r,{"sale-price":s.product.salePrice,"regular-price":s.product.regularPrice,class:"ml-auto"},null,8,["sale-price","regular-price"])]),e("div",mi,[s.product.databaseId?(n(),m("button",{key:0,title:"Remove Item",onClick:l[0]||(l[0]=i=>t(d)(s.product.databaseId))},l[1]||(l[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24",height:"24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144M368 144L144 368"})],-1)]))):$("",!0)])])}}}),gi=Object.assign(pi,{__name:"WishListItem"}),_i={class:"bg-white rounded-lg shadow min-h-[400px] w-full p-4 md:p-12 justify-center items-start"},fi={class:"container"},hi={class:"flex justify-between items-center mb-4"},yi={class:"text-xl font-semibold"},bi={class:"text-gray-400"},vi={key:0,class:"grid divide-y divide-gray-100"},$i={key:1,class:"flex text-center min-h-[600px] text-gray-500 items-center justify-center"},xi=P({__name:"WishList",setup(o){const{theList:d}=Ue();return(s,l)=>{const c=gi,r=Ee;return n(),m("div",_i,[e("div",fi,[e("div",hi,[e("h1",yi,g(s.$t("messages.shop.wishlist")),1),e("span",bi,"Items: "+g(t(d).length),1)]),h(r,null,{default:w(()=>[t(d).length?(n(),m("ul",vi,[(n(!0),m(N,null,j(t(d),i=>(n(),k(c,{key:i.databaseId,product:i},null,8,["product"]))),128))])):(n(),m("div",$i,[e("p",null,g(s.$t("messages.shop.wishlistNoItems")),1)]))]),_:1})])])}}}),a_=Object.assign(xi,{__name:"WishList"}),wi={class:"flex flex-col overflow-hidden rounded-lg shadow transition-all hover:shadow-lg"},ki={class:"aspect-w-16 aspect-h-9 w-full relative"},Ci=["src","alt"],Ii={key:1,class:"h-48 w-full bg-gray-200 flex items-center justify-center"},Pi={class:"flex-1 bg-white p-6 flex flex-col justify-between"},Si={class:"flex-1"},Ti={class:"flex items-center gap-2 text-sm text-gray-500 mb-2"},Ai=["datetime"],Li={key:1,class:"inline-flex"},Oi={class:"text-xl font-semibold text-gray-900 hover:text-primary-600"},Ui={key:0,class:"mt-3 text-gray-600"},Ni={class:"mt-4"},Ri={key:0,class:"flex items-center"},Mi={key:0,class:"flex-shrink-0 mr-2"},ji=["src","alt"],Di={key:1,class:"text-sm font-medium text-gray-900"},Ei=P({__name:"BlogPostCard",props:{post:{type:Object,required:!0}},setup(o){const d=l=>{if(!l)return"";const c=new Date(l);return new Intl.DateTimeFormat("bg-BG",{year:"numeric",month:"long",day:"numeric"}).format(c)},s=l=>{if(!l)return"";const r=l.replace(/<\/?[^>]+(>|$)/g,"").replace(/\[&hellip;\]|\[…\]/g,"...");return r.length>150?r.slice(0,150)+"...":r};return(l,c)=>{const r=H;return n(),m("article",wi,[h(r,{to:`/blog/${o.post.slug}`,class:"block overflow-hidden"},{default:w(()=>{var i,u,a,p,f,_;return[e("div",ki,[(u=(i=o.post.featuredImage)==null?void 0:i.node)!=null&&u.sourceUrl?(n(),m("img",{key:0,src:o.post.featuredImage.node.sourceUrl,alt:o.post.featuredImage.node.altText||o.post.title,class:"h-48 w-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"},null,8,Ci)):(n(),m("div",Ii,c[0]||(c[0]=[e("span",{class:"text-gray-400"},"Няма изображение",-1)])))]),e("div",Pi,[e("div",Si,[e("div",Ti,[o.post.date?(n(),m("time",{key:0,datetime:o.post.date},g(d(o.post.date)),9,Ai)):$("",!0),(p=(a=o.post.categories)==null?void 0:a.nodes)!=null&&p.length?(n(),m("span",Li,[c[1]||(c[1]=T(" • ")),(n(!0),m(N,null,j(o.post.categories.nodes,(v,y)=>(n(),m("span",{key:v.slug,class:"ml-1"},g(v.name)+g(y<o.post.categories.nodes.length-1?", ":""),1))),128))])):$("",!0)]),e("h3",Oi,g(o.post.title),1),o.post.excerpt?(n(),m("div",Ui,g(s(o.post.excerpt)),1)):$("",!0)]),e("div",Ni,[(f=o.post.author)!=null&&f.node?(n(),m("div",Ri,[(_=o.post.author.node.avatar)!=null&&_.url?(n(),m("div",Mi,[e("img",{class:"h-8 w-8 rounded-full",src:o.post.author.node.avatar.url,alt:o.post.author.node.name},null,8,ji)])):$("",!0),o.post.author.node.name?(n(),m("p",Di,g(o.post.author.node.name),1)):$("",!0)])):$("",!0)])])]}),_:1},8,["to"])])}}}),l_=Object.assign(E(Ei,[["__scopeId","data-v-c2845411"]]),{__name:"BlogPostCard"}),Fi={key:0,class:"w-full mt-8 flex justify-center"},Vi=["disabled"],zi={key:0},qi={key:1},Bi=P({__name:"BlogPagination",setup(o){const{loadMorePosts:d,loading:s,pageInfo:l}=is();return(c,r)=>t(l).hasNextPage?(n(),m("div",Fi,[e("button",{onClick:r[0]||(r[0]=(...i)=>t(d)&&t(d)(...i)),disabled:t(s),class:"rounded-lg px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"},[t(s)?(n(),m("span",zi,"Зареждане...")):(n(),m("span",qi,"Зареди още"))],8,Vi)])):$("",!0)}}),r_=Object.assign(Bi,{__name:"BlogPagination"}),Hi=P({__name:"OrderStatusLabel",props:{order:{}},setup(o){const d=o,s=L(()=>{var l,c;return((c=(l=d.order)==null?void 0:l.status)==null?void 0:c.replace(/_/g," "))||""});return(l,c)=>{var r;return n(),m("span",{class:F([`order-${(r=l.order)==null?void 0:r.status}`,"order-status"])},g(t(s)),3)}}}),Gi=Object.assign(E(Hi,[["__scopeId","data-v-afa657cd"]]),{__name:"OrderStatusLabel"}),Wi={class:"w-full text-left table-auto","aria-label":"Download List"},Ki={class:"rounded-l-lg"},Qi={key:0},Yi=["href","download"],Ji=P({__name:"DownloadableItems",props:{downloadableItems:{type:Object,default:[]}},setup(o){const{formatDate:d}=le(),s=o;return(l,c)=>{const r=H;return n(),m("table",Wi,[e("thead",null,[e("tr",null,[e("th",null,g(l.$t("messages.general.product")),1),e("th",null,g(l.$t("messages.shop.downloadsRemaining")),1),e("th",null,g(l.$t("messages.shop.expires")),1),e("th",null,g(l.$t("messages.general.download")),1)])]),e("tbody",null,[(n(!0),m(N,null,j(s.downloadableItems,i=>(n(),m("tr",{key:i.id},[e("td",Ki,[i.product?(n(),k(r,{key:0,to:`/produkt/${i.product.slug}`,class:"hover:underline"},{default:w(()=>[T(g(i.product.name),1)]),_:2},1032,["to"])):$("",!0)]),e("td",null,g(i.downloadsRemaining||"∞"),1),e("td",null,g(i.accessExpires?t(d)(i.accessExpires):"Never"),1),i.url?(n(),m("td",Qi,[e("a",{href:i.url,download:i.name,class:"text-primary hover:text-primary-dark hover:underline"},g(i.name),9,Yi)])):$("",!0)]))),128))])])}}}),Xi=Object.assign(E(Ji,[["__scopeId","data-v-10e941fd"]]),{__name:"DownloadableItems"});var Zi={};const ec=P({__name:"SEOHead",props:{info:{type:Object,required:!0}},setup(o){var M,J,_e,ue,se,W,Ne,z,V,Y,oe,ee,ce,fe;const{frontEndUrl:d,wooNuxtSEO:s,stripHtml:l}=le(),{path:c}=Te(),r=((M=o.info.seo)==null?void 0:M.title)||o.info.name,i=((J=o.info.seo)==null?void 0:J.metaDesc)||(o.info.shortDescription||o.info.description?l(o.info.shortDescription||""):l(o.info.description||"")),u=((_e=o.info.seo)==null?void 0:_e.canonical)||`${d}${c}`,a=Zi.SITE_TITLE??"WooNuxt",p=ft();let f="";(se=(ue=o.info.seo)==null?void 0:ue.opengraphImage)!=null&&se.sourceUrl?f=o.info.seo.opengraphImage.sourceUrl:f=((W=o.info.image)==null?void 0:W.sourceUrl)??"/images/placeholder.jpg";const _=p.getSizes(f,{width:1200,height:630}).src,v=(z=(Ne=o.info.seo)==null?void 0:Ne.twitterImage)!=null&&z.sourceUrl?o.info.seo.twitterImage.sourceUrl:p.getSizes(f,{width:1600,height:900}).src,y=X=>X?X.startsWith("http")?X:`${d}${X}`:"",b=y(_),x=y(v),A=((V=o.info.seo)==null?void 0:V.opengraphTitle)||r,R=((Y=o.info.seo)==null?void 0:Y.opengraphDescription)||i,B=((oe=o.info.seo)==null?void 0:oe.twitterTitle)||r,O=((ee=o.info.seo)==null?void 0:ee.twitterDescription)||i,te=(s==null?void 0:s.find(X=>(X==null?void 0:X.provider)==="facebook"))??null,q=(s==null?void 0:s.find(X=>(X==null?void 0:X.provider)==="twitter"))??null;return(fe=(ce=o.info.seo)==null?void 0:ce.schema)!=null&&fe.raw&&ht({script:[{type:"application/ld+json",innerHTML:o.info.seo.schema.raw}]}),(X,Re)=>{const Me=os,G=ns,he=as,K=ss;return n(),k(K,null,{default:w(()=>{var me,je,Fe,dt;return[h(Me,null,{default:w(()=>[T(g(t(r)),1)]),_:1}),t(i)?(n(),k(G,{key:0,name:"description",hid:"description",content:t(i)},null,8,["content"])):$("",!0),h(G,{name:"image",hid:"image",content:t(b)},null,8,["content"]),h(G,{property:"og:site_name",hid:"og:site_name",content:t(a)},null,8,["content"]),h(G,{property:"og:url",hid:"og:url",content:t(u)},null,8,["content"]),h(G,{property:"og:title",hid:"og:title",content:t(A)||""},null,8,["content"]),t(R)?(n(),k(G,{key:1,property:"og:description",hid:"og:description",content:t(R)},null,8,["content"])):$("",!0),h(G,{property:"og:image",hid:"og:image",content:t(b)},null,8,["content"]),(me=t(te))!=null&&me.url?(n(),k(G,{key:2,property:"article:publisher",hid:"article:publisher",content:t(te).url},null,8,["content"])):$("",!0),h(G,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),(je=t(q))!=null&&je.handle?(n(),k(G,{key:3,name:"twitter:site",hid:"twitter:site",content:t(q).handle},null,8,["content"])):$("",!0),h(G,{name:"twitter:title",hid:"twitter:title",content:t(B)||""},null,8,["content"]),t(O)?(n(),k(G,{key:4,name:"twitter:description",hid:"twitter:description",content:t(O)},null,8,["content"])):$("",!0),h(G,{name:"twitter:image",hid:"twitter:image",content:t(x)},null,8,["content"]),h(G,{name:"twitter:url",hid:"twitter:url",content:t(u)},null,8,["content"]),h(he,{rel:"canonical",hid:"canonical",href:t(u)},null,8,["href"]),(Fe=o.info.seo)!=null&&Fe.metaRobotsNoindex?(n(),k(G,{key:5,name:"robots",content:"noindex"})):$("",!0),(dt=o.info.seo)!=null&&dt.metaRobotsNofollow?(n(),k(G,{key:6,name:"robots",content:"nofollow"})):$("",!0)]}),_:1})}}}),i_=Object.assign(ec,{__name:"SEOHead"}),tc={class:"flex text-sm leading-none text-gray-400 gap-1 items-center"},sc={key:1,class:"text-gray-800"},oc={key:2},nc=P({__name:"Breadcrumb",props:{product:{}},setup(o){var r;const d=Ie(),s=((r=d==null?void 0:d.public)==null?void 0:r.PRODUCT_CATEGORY_PERMALINK)||"/produkt-kategoriya/",l=L(()=>{var i;return(i=o.product.productCategories)==null?void 0:i.nodes[0]}),c=L(()=>{var i,u;return[{name:"Products",slug:"/products"},{name:(i=l.value)==null?void 0:i.name,slug:`${String(s)}${(u=l.value)==null?void 0:u.slug}`},{name:o.product.name}]});return(i,u)=>{const a=H;return n(),m("div",tc,[e("span",null,[h(a,{to:"/",class:"hover:text-primary"},{default:w(()=>[T(g(i.$t("messages.general.home")),1)]),_:1}),u[0]||(u[0]=e("span",null," /",-1))]),(n(!0),m(N,null,j(t(c),(p,f)=>(n(),m("span",{key:p.name||f},[p.slug?(n(),k(a,{key:0,to:decodeURIComponent(p.slug),class:"hover:text-primary"},{default:w(()=>[T(g(p.name),1)]),_:2},1032,["to"])):(n(),m("span",sc,g(p.name),1)),f+1<t(c).length?(n(),m("span",oc," /")):$("",!0)]))),128))])}}}),c_=Object.assign(nc,{__name:"Breadcrumb"}),ac={key:0,class:"my-4 gallery-images"},qe=640,lc=P({__name:"ProductImageGallery",props:{mainImage:{type:Object,required:!0},gallery:{type:Object,required:!0},node:{type:Object,required:!0},activeVariation:{type:Object,required:!1}},setup(o){const{FALLBACK_IMG:d}=le(),s=o,l=L(()=>({sourceUrl:s.mainImage.sourceUrl||d,title:s.mainImage.title,altText:s.mainImage.altText,databaseId:s.mainImage.databaseId})),c=C(l.value),r=L(()=>[l.value,...s.gallery.nodes].filter((u,a,p)=>a===p.findIndex(f=>(f==null?void 0:f.databaseId)===(u==null?void 0:u.databaseId)))),i=u=>{u&&(c.value=u)};return ae(()=>s.activeVariation,u=>{if(u!=null&&u.image){const a=r.value.find(p=>{var f;return p.databaseId===((f=u.image)==null?void 0:f.databaseId)});a&&(c.value=a)}}),(u,a)=>{const p=xt,f=Ce;return n(),m("div",null,[h(p,{node:o.node,class:"absolute text-base top-4 right-4"},null,8,["node"]),h(f,{class:"rounded-xl object-contain w-full min-w-[350px]",width:qe,height:qe,alt:t(c).altText||o.node.name,title:t(c).title||o.node.name,src:t(c).sourceUrl||t(d),fetchpriority:"high",placeholder:"","placeholder-class":"blur-xl"},null,8,["alt","title","src"]),o.gallery.nodes.length?(n(),m("div",ac,[(n(!0),m(N,null,j(t(r),_=>(n(),k(f,{key:_.databaseId,class:"cursor-pointer rounded-xl",width:qe,height:qe,src:_.sourceUrl,alt:_.altText||o.node.name,title:_.title||o.node.name,placeholder:"","placeholder-class":"blur-xl",loading:"lazy",onClick:v=>i(_)},null,8,["src","alt","title","onClick"]))),128))])):$("",!0)])}}}),d_=Object.assign(E(lc,[["__scopeId","data-v-a881f432"]]),{__name:"ProductImageGallery"}),rc={key:0,class:"text-green-600"},ic={key:1,class:"text-red-600"},cc={key:2,class:"text-yellow-600"},dc={key:3,class:"text-gray-600"},uc=P({__name:"StockStatus",props:{stockStatus:{type:String,required:!1}},setup(o){return(d,s)=>o.stockStatus===t(Pe).IN_STOCK?(n(),m("span",rc,g(d.$t("messages.shop.inStock")),1)):o.stockStatus===t(Pe).OUT_OF_STOCK?(n(),m("span",ic,g(d.$t("messages.shop.outOfStock")),1)):o.stockStatus===t(Pe).ON_BACKORDER?(n(),m("span",cc,g(d.$t("messages.shop.onBackorder")),1)):(n(),m("span",dc,"Loading"))}}),u_=Object.assign(uc,{__name:"StockStatus"}),mc={class:"relative inline-block group"},pc={class:"absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 text-white text-sm rounded px-2 py-2 transition-opacity duration-300 whitespace-nowrap"},gc=P({__name:"Tooltip",props:{text:{type:String,required:!0}},setup(o){return(d,s)=>(n(),m("div",mc,[We(d.$slots,"default"),e("div",pc,[T(g(o.text)+" ",1),s[0]||(s[0]=e("div",{class:"absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-8 border-transparent border-t-black border-t-opacity-80"},null,-1))])]))}}),_c=Object.assign(gc,{__name:"Tooltip"}),fc={key:0,class:"flex flex-col gap-1 justify-between"},hc={key:0,class:"grid gap-2"},yc={class:"text-sm"},bc={key:0,class:"text-gray-400"},vc={class:"flex gap-2"},$c=["for"],xc=["id","checked","name","value"],wc=["title"],kc={key:1,class:"grid gap-2"},Cc={class:"text-sm"},Ic={key:0,class:"text-gray-400"},Pc={class:"flex gap-2"},Sc=["for"],Tc=["id","checked","name","value"],Ac=["title"],Lc={key:2,class:"grid gap-2"},Oc={class:"text-sm"},Uc={key:0,class:"text-gray-400"},Nc=["id","name"],Rc={disabled:"",hidden:""},Mc=["value","innerHTML","selected"],jc={key:3,class:"grid gap-2"},Dc={class:"text-sm"},Ec={key:0,class:"text-gray-400"},Fc={class:"flex gap-2"},Vc=["for"],zc=["id","checked","name","value"],qc=["title"],Bc=P({__name:"AttributeSelections",props:{attributes:{},defaultAttributes:{}},emits:["attrs-changed"],setup(o,{emit:d}){const s=d,l=C([]),c=(a,p)=>{var f,_;return(f=a==null?void 0:a.terms)!=null&&f.nodes&&p?(_=a.terms.nodes.find(v=>v.slug===p.value))==null?void 0:_.name:(p==null?void 0:p.value)||""},r=()=>{const a=o.attributes.map(p=>{const f=document.querySelector(`.name-${p.name.toLowerCase()}:checked`),_=document.querySelector(`#${p.name}`),v=p.name.charAt(0).toLowerCase()+p.name.slice(1),y=(f==null?void 0:f.value)??(_==null?void 0:_.value)??"";return{name:v,value:y}});l.value=a,s("attrs-changed",a)},i=()=>{var a,p;(a=o.defaultAttributes)!=null&&a.nodes&&((p=o.defaultAttributes)==null||p.nodes.forEach(f=>{var y;const _=document.querySelector(`.name-${(y=f.name)==null?void 0:y.toLowerCase()}[value="${f.value}"]`);_&&(_.checked=!0);const v=document.querySelector(`#${f.name}`);v&&(v.value=f.value||"")}))},u=a=>`name-${a.toLowerCase()}`;return we(()=>{i(),r()}),(a,p)=>{const f=_c;return a.attributes?(n(),m("div",fc,[(n(!0),m(N,null,j(a.attributes,(_,v)=>{var y;return n(),m("div",{key:v,class:"flex flex-wrap py-2 relative justify-between"},[_.scope=="LOCAL"?(n(),m("div",hc,[e("div",yc,[T(g(_.label)+" ",1),t(l).length&&t(l)[v]?(n(),m("span",bc,": "+g(c(_,t(l)[v])),1)):$("",!0)]),e("div",vc,[(n(!0),m(N,null,j(_.options,(b,x)=>(n(),m("span",{key:x},[e("label",{for:`${b}_${x}`},[e("input",{id:`${b}_${x}`,ref_for:!0,ref:_.name,class:F(["hidden",`name-${_.name.toLowerCase()}`]),checked:x==0,type:"radio",name:_.name,value:b,onChange:r},null,42,xc),e("span",{class:F(["radio-button",`picker-${b}`]),title:`${_.name}: ${b}`},g(b),11,wc)],8,$c)]))),128))])])):_.name=="pa_color"||_.name=="color"?(n(),m("div",kc,[e("div",Cc,[T(g(a.$t("messages.general.color"))+" ",1),t(l).length?(n(),m("span",Ic,g(c(_,t(l)[v])),1)):$("",!0)]),e("div",Pc,[(n(!0),m(N,null,j(_.terms.nodes,(b,x)=>(n(),m("span",{key:x},[h(f,{text:b.name},{default:w(()=>[e("label",{for:`${b.slug}_${x}`},[e("input",{id:`${b.slug}_${x}`,ref_for:!0,ref:_.name,class:F(["hidden",u(_.name)]),checked:x==0,type:"radio",name:_.name,value:b.slug,onChange:r},null,42,Tc),e("span",{class:F(["color-button",`color-${b.slug}`]),title:`${_.name}: ${b}`},null,10,Ac)],8,Sc)]),_:2},1032,["text"])]))),128))])])):_.terms.nodes&&((y=_.terms.nodes)==null?void 0:y.length)>8?(n(),m("div",Lc,[e("div",Oc,[T(g(_.label)+" ",1),t(l).length?(n(),m("span",Uc,g(c(_,t(l)[v])),1)):$("",!0)]),e("select",{id:_.name,ref_for:!0,ref:_.name,name:_.name,required:"",class:"border-white shadow",onChange:r},[e("option",Rc,g(a.$t("messages.general.choose"))+" "+g(decodeURIComponent(_.label)),1),(n(!0),m(N,null,j(_.terms.nodes,(b,x)=>(n(),m("option",{key:x,value:b.slug,innerHTML:b.name,selected:x==0},null,8,Mc))),128))],40,Nc)])):(n(),m("div",jc,[e("div",Dc,[T(g(_.label)+" ",1),t(l).length?(n(),m("span",Ec,": "+g(c(_,t(l)[v])),1)):$("",!0)]),e("div",Fc,[(n(!0),m(N,null,j(_.terms.nodes,(b,x)=>(n(),m("span",{key:x},[e("label",{for:`${b.slug}_${x}`},[e("input",{id:`${b.slug}_${x}`,ref_for:!0,ref:_.name,class:F(["hidden",u(_.name)]),checked:x==0,type:"radio",name:_.name,value:b.slug,onChange:r},null,42,zc),e("span",{class:F(["radio-button",`picker-${b.slug}`]),title:`${_.name}: ${b.slug}`},g(b.name),11,qc)],8,Vc)]))),128))])]))])}),128))])):$("",!0)}}}),m_=Object.assign(Bc,{__name:"AttributeSelections"}),Hc=["disabled"],Gc={__name:"AddToCartButton",props:{disabled:{type:Boolean,default:!1}},setup(o){const{cart:d}=ie(),s=C(!1),{t:l}=ke(),c=L(()=>s.value?l("messages.shop.adding"):l("messages.shop.addToCart"));return ae(d,r=>{s.value=!1}),(r,i)=>{const u=re;return n(),m("button",{type:"submit",class:F(["rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none",{disabled:o.disabled}]),disabled:o.disabled,onClick:i[0]||(i[0]=a=>s.value=!0)},[e("span",null,g(t(c)),1),t(s)?(n(),k(u,{key:0,stroke:"4",size:"12",color:"#fff"})):$("",!0)],10,Hc)}}},p_=E(Gc,[["__scopeId","data-v-1610c882"]]),Wc=P({__name:"WishlistButton",props:{product:{}},setup(o){const{addToWishlist:d,removeFromWishlist:s,isInList:l}=Ue(),c=L(()=>o.product.databaseId?l(o.product.databaseId):!1),r=()=>c.value&&o.product.databaseId?s(o.product.databaseId):d(o.product);return(i,u)=>{const a=D;return n(),m("button",{type:"button",class:"cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center",onClick:r},[t(c)?(n(),k(a,{key:0,name:"ion:heart",size:"18",class:"text-red-400"})):(n(),k(a,{key:1,name:"ion:heart-outline",size:"18"})),e("span",null,g(t(c)?i.$t("messages.shop.wishlistRemove"):i.$t("messages.shop.wishlistAdd")),1)])}}}),g_=Object.assign(Wc,{__name:"WishlistButton"}),Kc={key:1,class:"flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer"},Qc=["href"],Yc=["href"],Jc=["href"],Xc=P({__name:"ShareButton",props:{product:{type:Object,required:!0}},setup(o){const d=o,s=C(!1),l=L(()=>`https://twitter.com/intent/tweet?text=${d.product.name}&url=${window.location.href}`),c=L(()=>`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`),r=L(()=>`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${d.product.image.sourceUrl}&description=${d.product.name}`),i=()=>{s.value=!0};return(u,a)=>(n(),k(Z,{name:"fade",mode:"out-in"},{default:w(()=>[t(s)?(n(),m("div",Kc,[e("a",{href:t(l),target:"_blank",title:"Share on Twitter"},a[1]||(a[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[e("path",{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})],-1)]),8,Qc),e("a",{href:t(c),target:"_blank",title:"Share on Facebook"},a[2]||(a[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[e("path",{d:"M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z","fill-rule":"evenodd"})],-1)]),8,Yc),e("a",{href:t(r),target:"_blank",title:"Share on Pinterest"},a[3]||(a[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[e("path",{d:"M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0063.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z"})],-1)]),8,Jc)])):(n(),m("button",{key:0,type:"button",class:"flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer",onClick:i},[a[0]||(a[0]=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"},[e("circle",{cx:"128",cy:"256",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),e("circle",{cx:"384",cy:"112",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),e("circle",{cx:"384",cy:"400",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"})],-1)),e("span",null,g(u.$t("messages.general.share")),1)]))]),_:1}))}}),__=Object.assign(Xc,{__name:"ShareButton"}),Zc={key:0,class:"font-semibold text-2xl text-gray-900"},ed={key:1,class:"font-semibold text-2xl text-gray-900"},td={key:2,class:"my-2"},sd={class:"text-sm"},od={class:"my-4 bars"},nd={class:"flex text-sm gap-1 items-center"},ad={class:"flex-1 relative"},ld={class:"w-full text-gray-500"},rd={class:"p-5 mt-3 grid gap-2 border rounded-lg"},id={class:"block text-center mb-1.5"},cd={class:"text-center text-sm block relative m-auto"},dd={class:"gap-1 flex justify-center mt-2 relative"},ud=["onMouseover"],md=["value"],pd={class:"w-full col-span-full"},gd={for:"content",class:"text-sm mb-0.5"},_d={class:"w-full col-span-full"},fd={for:"author",class:"text-sm mb-0.5"},hd=["innerHTML"],yd=["innerHTML"],bd={class:"w-full col-span-full text-center mt-3"},vd={class:"flex gap-4 justify-center items-center transition font-semibold rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400",type:"submit"},$d={__name:"ReviewsScore",props:{reviews:{type:Object,default:null},productId:{type:Number,default:null},size:{type:Number,default:21}},setup(o){const d=o,s=L(()=>{const b=[0,0,0,0,0];d.reviews.edges.forEach(A=>{b[A.rating-1]+=1});const x=b.reduce((A,R)=>A+R,0);return b.map((A,R)=>{const B=A/x*100;return{count:A,percentage:B,rating:R+1}}).reverse()}),l=C(!1),c=C(0),r=C(null),i=C(null),u=C(null),a=C(""),p=C(""),f=C(!1);function _(b){c.value=b}function v(){c.value=0}async function y(){var x;const b={commentOn:d.productId,author:u.value.split("@")[0],content:i.value,rating:r.value,authorEmail:u.value};try{f.value=!0,await ls(b),p.value="Your review is awaiting approval",setTimeout(()=>{p.value="",l.value=!1},4e3)}catch(A){a.value=(x=A==null?void 0:A.gqlErrors)==null?void 0:x[0].message,setTimeout(()=>{a.value=""},5e3)}finally{f.value=!1}}return(b,x)=>{const A=Xe,R=D,B=re;return n(),m("div",null,[o.reviews.edges.length?(n(),m("h4",Zc,g(b.$t("messages.shop.customerReviews")),1)):(n(),m("h4",ed,g(b.$t("messages.shop.noReviews")),1)),o.reviews.edges.length?(n(),m("div",td,[h(A,{rating:o.reviews.averageRating,"hide-count":!0,class:"text-sm mr-2"},null,8,["rating"]),e("span",sd,g(b.$t("messages.general.basedOn"))+" "+g(o.reviews.edges.length)+" "+g(b.$t("messages.shop.reviews")),1)])):$("",!0),e("div",od,[(n(!0),m(N,null,j(t(s),O=>(n(),m("div",{key:O,class:"flex gap-4 items-center"},[e("div",nd,[T(g(O.rating)+" ",1),h(R,{class:"text-yellow-400",name:"ion:star"})]),e("div",ad,[x[4]||(x[4]=e("div",{class:"rounded-full bg-gray-200 h-2.5 w-full"},null,-1)),e("div",{class:"rounded-full bg-yellow-400 h-2.5 top-0 left-0 absolute",style:He({width:O.percentage+"%"})},null,4)])]))),128))]),x[8]||(x[8]=e("div",{class:"mt-10 text-xl mb-2 text-gray-900"},"Share your thoughts",-1)),x[9]||(x[9]=e("div",{class:"text-sm mb-4"},"If you have used this product, we would love to hear about your experience.",-1)),e("button",{onClick:x[0]||(x[0]=O=>l.value=!t(l)),class:"border rounded-lg text-center w-full p-2"},g(t(l)?b.$t("messages.shop.close"):b.$t("messages.shop.writeReview")),1),h(Z,{class:"ease-in-out transform transition-all",name:"scale-y"},{default:w(()=>[t(l)?(n(),m("form",{key:0,onSubmit:ne(y,["prevent"]),class:"writeReview"},[e("div",ld,[e("div",rd,[e("div",id,[e("label",cd,[T(g(b.$t("messages.shop.rateReview"))+" ",1),x[5]||(x[5]=e("span",{class:"text-red-500"},"*",-1))]),e("div",dd,[(n(),m(N,null,j(5,O=>e("label",{key:O,class:F(["grid p-1 rounded",t(r)<O&&O>t(c)?"disable-star":"checked-star"]),onMouseover:te=>_(O),onMouseout:v},[I(e("input",{type:"radio",class:"overflow-hidden appearance-none opacity-0 absolute",name:"rating",value:O,"onUpdate:modelValue":x[1]||(x[1]=te=>Q(r)?r.value=te:null),required:""},null,8,md),[[Le,t(r)]]),h(R,{name:"ion:star",size:o.size+""},null,8,["size"])],42,ud)),64))])]),e("div",pd,[e("label",gd,[T(g(b.$t("messages.shop.rateContent"))+" ",1),x[6]||(x[6]=e("span",{class:"text-red-500"},"*",-1))]),I(e("textarea",{class:"w-full",id:"content",placeholder:"Great Quality","onUpdate:modelValue":x[2]||(x[2]=O=>Q(i)?i.value=O:null),required:""},null,512),[[U,t(i)]])]),e("div",_d,[e("label",fd,[T(g(b.$t("messages.shop.rateEmail"))+" ",1),x[7]||(x[7]=e("span",{class:"text-red-500"},"*",-1))]),I(e("input",{class:"w-full",id:"author",placeholder:"example@example.com",type:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","onUpdate:modelValue":x[3]||(x[3]=O=>Q(u)?u.value=O:null),required:""},null,512),[[U,t(u)]])]),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(a)?(n(),m("div",{key:0,class:"my-4 text-sm text-red-500",innerHTML:t(a)},null,8,hd)):$("",!0)]),_:1}),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(p)?(n(),m("div",{key:0,class:"my-4 text-sm text-green-500",innerHTML:t(p)},null,8,yd)):$("",!0)]),_:1}),e("div",bd,[e("button",vd,[t(f)?(n(),k(B,{key:0,stroke:"4",size:"16",color:"#78350F"})):$("",!0),e("span",null,g(b.$t("messages.shop.submit")),1)])])])])],32)):$("",!0)]),_:1})])}}},xd=E($d,[["__scopeId","data-v-876a0470"]]),wd={class:"flex flex-wrap gap-32 items-start"},kd={class:"flex max-w-sm gap-4 prose"},Cd={key:0,class:"divide-y flex-1"},Id={class:"flex gap-4 items-center"},Pd=["src"],Sd={class:"grid gap-1"},Td={class:"text-sm"},Ad={class:"font-semibold"},Ld={class:"italic text-gray-400"},Od=["innerHTML"],Ud={__name:"ProductReviews",props:{product:{type:Object,default:null}},setup(o){return(d,s)=>{var r;const l=xd,c=Xe;return n(),m("div",wd,[e("div",kd,[o.product.reviews?(n(),k(l,{key:0,reviews:o.product.reviews,productId:o.product.databaseId},null,8,["reviews","productId"])):$("",!0)]),(r=o.product.reviews)!=null&&r.edges&&o.product.reviews.edges.length?(n(),m("div",Cd,[(n(!0),m(N,null,j(o.product.reviews.edges,i=>(n(),m("div",{key:i.id,class:"my-2 py-8"},[e("div",Id,[i.node.author.node.avatar?(n(),m("img",{key:0,src:i.node.author.node.avatar.url,class:"rounded-full h-12 w-12"},null,8,Pd)):$("",!0),e("div",Sd,[e("div",Td,[e("span",Ad,g(i.node.author.node.name),1),e("span",Ld," – "+g(new Date(i.node.date).toLocaleString(d.$t("messages.general.langCode"),{month:"long",day:"numeric",year:"numeric"})),1)]),h(c,{rating:i.rating,"hide-count":!0,class:"text-sm"},null,8,["rating"])])]),e("div",{class:"mt-4 text-gray-700 italic prose-sm",innerHTML:i.node.content},null,8,Od)]))),128))])):$("",!0)])}}},Nd={class:"border-b flex gap-8 tabs"},Rd={class:"tab-contents"},Md=["innerHTML"],jd=P({__name:"ProductTabs",props:{product:{type:Object,required:!0}},setup(o){const{storeSettings:d}=xe(),s=o.product.description?0:1,l=C(s);return(c,r)=>{const i=Ud;return n(),m("div",null,[e("nav",Nd,[o.product.description?(n(),m("button",{key:0,type:"button",class:F(t(l)===0?"active":""),onClick:r[0]||(r[0]=ne(u=>l.value=0,["prevent"]))},g(c.$t("messages.shop.productDescription")),3)):$("",!0),t(d).showReviews?(n(),m("button",{key:1,type:"button",class:F(t(l)===1?"active":""),onClick:r[1]||(r[1]=ne(u=>l.value=1,["prevent"]))},g(c.$t("messages.shop.reviews"))+" ("+g(o.product.reviewCount)+")",3)):$("",!0)]),e("div",Rd,[t(l)===0&&o.product.description?(n(),m("div",{key:0,class:"font-light mt-8 prose",innerHTML:o.product.description},null,8,Md)):$("",!0),t(l)===1?(n(),k(i,{key:1,product:o.product},null,8,["product"])):$("",!0)])])}}}),f_=Object.assign(E(jd,[["__scopeId","data-v-09548903"]]),{__name:"ProductTabs"}),Dd={class:"relative aspect-square overflow-hidden bg-gray-100"},Ed={key:1,class:"w-full h-full bg-gray-200 flex items-center justify-center"},Fd={key:2,class:"absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium"},Vd={class:"p-4"},zd={class:"text-lg font-medium text-gray-900 line-clamp-2"},qd={class:"mt-2 flex items-center justify-between"},Bd={class:"flex items-center space-x-2"},Hd={key:0,class:"text-lg font-bold text-red-500"},Gd={class:"flex items-center"},Wd={key:1,class:"ml-1 text-sm text-gray-600"},Kd={class:"mt-2"},Qd=P({__name:"ProductCard",props:{node:{},index:{}},setup(o){const d=l=>l?new Intl.NumberFormat("bg-BG",{style:"currency",currency:"BGN"}).format(parseFloat(l)):"0.00 лв.",s=l=>{if(!l)return"Неизвестен статус";switch(l){case Pe.IN_STOCK:return"В наличност";case Pe.OUT_OF_STOCK:return"Изчерпан";case Pe.ON_BACKORDER:return"Очаква се";default:return l}};return(l,c)=>{const r=Ce,i=D,u=H;return n(),k(u,{to:`/produkt/${l.node.slug}`,class:"product-card-link block"},{default:w(()=>{var a,p;return[e("div",Dd,[(a=l.node.image)!=null&&a.sourceUrl?(n(),k(r,{key:0,src:l.node.image.sourceUrl,alt:((p=l.node.image)==null?void 0:p.altText)||l.node.name||"",loading:"lazy",format:"webp",quality:"85",modifiers:{format:"webp",quality:85},sizes:"(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw",class:"product-image w-full h-full object-cover transition-transform duration-300 hover:scale-105",placeholder:""},null,8,["src","alt"])):(n(),m("div",Ed,[h(i,{name:"heroicons:photo",class:"w-12 h-12 text-gray-400"})])),l.node.onSale?(n(),m("div",Fd," Sale ")):$("",!0)]),e("div",Vd,[e("h3",zd,g(l.node.name),1),e("div",qd,[e("div",Bd,[l.node.onSale?(n(),m("span",Hd,g(d(l.node.price)),1)):$("",!0),e("span",{class:F(["text-lg",l.node.onSale?"text-gray-500 line-through":"text-gray-900 font-bold"])},g(d(l.node.regularPrice)),3)]),e("div",Gd,[l.node.averageRating?(n(),k(i,{key:0,name:"heroicons:star",class:"w-5 h-5 text-yellow-400"})):$("",!0),l.node.averageRating?(n(),m("span",Wd,g(l.node.averageRating),1)):$("",!0)])]),e("div",Kd,[e("span",{class:F(["text-sm",l.node.stockStatus==="IN_STOCK"?"text-green-600":l.node.stockStatus==="OUT_OF_STOCK"?"text-red-600":"text-orange-600"])},g(s(l.node.stockStatus)),3)])])]}),_:1},8,["to"])}}}),h_=Object.assign(E(Qd,[["__scopeId","data-v-717387a0"]]),{__name:"ProductCard"}),Yd={class:"grid gap-6 p-8 md:grid-cols-2"},Jd={class:"text-xl font-semibold col-span-full"},Xd={class:"w-full"},Zd={for:"first-name"},eu={class:"w-full"},tu={for:"last-name"},su={class:"w-full"},ou={for:"username"},nu={class:"w-full"},au={for:"email"},lu={class:"bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg"},ru=["disabled"],iu=P({__name:"PersonalInformation",setup(o){const{viewer:d,customer:s}=ge(),{t:l}=ke(),c=C(!1),r=C({text:l("messages.account.updateDetails"),color:"bg-primary hover:bg-primary-dark"});async function i(){c.value=!0,r.value.text=l("messages.account.updating");const u=s.value.firstName,a=s.value.lastName;try{const{updateCustomer:p}=await at({input:{id:d.value.id,firstName:u,lastName:a}});p&&(r.value={text:l("messages.account.updateSuccess"),color:"bg-green-500"})}catch{r.value={text:l("messages.account.failed"),color:"bg-red-500"}}c.value=!1,setTimeout(()=>{r.value={text:l("messages.account.updateDetails"),color:"bg-primary hover:bg-primary-dark"}},2e3)}return(u,a)=>{const p=re;return t(s)?(n(),m("form",{key:0,class:"bg-white rounded-lg shadow",onSubmit:ne(i,["prevent"])},[e("div",Yd,[e("h3",Jd,g(u.$t("messages.account.personalInfo")),1),e("div",Xd,[e("label",Zd,g(u.$t("messages.billing.firstName")),1),I(e("input",{id:"first-name","onUpdate:modelValue":a[0]||(a[0]=f=>t(s).firstName=f),placeholder:"John",autocomplete:"given-name",type:"text"},null,512),[[U,t(s).firstName]])]),e("div",eu,[e("label",tu,g(u.$t("messages.billing.lastName")),1),I(e("input",{id:"last-name","onUpdate:modelValue":a[1]||(a[1]=f=>t(s).lastName=f),placeholder:"Doe",autocomplete:"family-name",type:"text"},null,512),[[U,t(s).lastName]])]),e("div",su,[e("label",ou,g(u.$t("messages.account.username"))+" ("+g(u.$t("messages.general.readOnly"))+")",1),I(e("input",{id:"username","onUpdate:modelValue":a[2]||(a[2]=f=>t(s).username=f),placeholder:"johndoe",autocomplete:"username",type:"text",readonly:""},null,512),[[U,t(s).username]])]),e("div",nu,[e("label",au,g(u.$t("messages.billing.email")),1),I(e("input",{id:"email","onUpdate:modelValue":a[3]||(a[3]=f=>t(s).email=f),placeholder:"johndoe@email.com",autocomplete:"email",type:"email"},null,512),[[U,t(s).email]])])]),e("div",lu,[e("button",{class:F(["rounded-md flex font-semibold ml-auto text-white py-2 px-4 gap-4 items-center disabled:bg-gray-400 disabled:cursor-not-allowed",t(r).color]),disabled:t(c)},[t(c)?(n(),k(p,{key:0,color:"#fff",size:"20"})):$("",!0),e("span",null,g(t(r).text),1)],10,ru)])],32)):$("",!0)}}}),cu=Object.assign(iu,{__name:"PersonalInformation"}),du={class:"grid p-8 gap-6 md:grid-cols-2"},uu={class:"font-semibold text-xl col-span-full"},mu={class:"w-full"},pu={for:"billing-first-name"},gu={class:"w-full"},_u={for:"billing-last-name"},fu={class:"w-full"},hu={for:"billing-phone"},yu={class:"w-full"},bu={for:"billing-company"},vu={class:"w-full"},$u={for:"billing-address"},xu={class:"w-full"},wu={for:"billing-address-2"},ku={class:"w-full"},Cu={for:"billing-city"},Iu={class:"w-full"},Pu={for:"billing-state"},Su={class:"w-full"},Tu={for:"billing-country"},Au={class:"w-full"},Lu={for:"billing-zip"},Ou={class:"w-full col-span-full"},Uu={for:"billing-email"},Nu={class:"grid p-8 gap-6 md:grid-cols-2"},Ru={class:"font-semibold text-xl col-span-full"},Mu={class:"w-full"},ju={for:"shipping-first-name"},Du={class:"w-full"},Eu={for:"shipping-last-name"},Fu={class:"w-full"},Vu={for:"shipping-phone"},zu={class:"w-full"},qu={for:"shipping-company"},Bu={class:"w-full"},Hu={for:"shipping-address"},Gu={class:"w-full"},Wu={for:"shipping-address-2"},Ku={class:"w-full"},Qu={for:"shipping-city"},Yu={class:"w-full"},Ju={for:"shipping-state"},Xu={class:"w-full"},Zu={for:"shipping-country"},em={class:"w-full"},tm={for:"shipping-zip"},sm={class:"bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg"},om=["disabled"],nm=P({__name:"BillingAndShipping",setup(o){const{viewer:d,customer:s}=ge(),{t:l}=ke(),c=C(!1),r=C({text:l("messages.account.updateDetails"),color:"bg-primary hover:bg-primary-dark"});async function i(){c.value=!0,r.value.text=l("messages.account.updating");const u=s.value.shipping,a=s.value.billing;try{const{updateCustomer:p}=await at({input:{id:d.value.id,shipping:u,billing:a}});p&&(r.value={text:l("messages.account.updateSuccess"),color:"bg-green-500"})}catch{r.value={text:l("messages.account.failed"),color:"bg-red-500"}}c.value=!1,setTimeout(()=>{r.value={text:l("messages.account.updateDetails"),color:"bg-primary hover:bg-primary-dark"}},2e3)}return(u,a)=>{var v;const p=rt,f=it,_=re;return n(),m("form",{class:"bg-white rounded-lg shadow",onSubmit:ne(i,["prevent"])},[e("div",du,[e("h3",uu,g(u.$t("messages.billing.billing")),1),e("div",mu,[e("label",pu,g(u.$t("messages.billing.firstName")),1),I(e("input",{id:"billing-first-name","onUpdate:modelValue":a[0]||(a[0]=y=>t(s).billing.firstName=y),placeholder:"John",autocomplete:"given-name",type:"text",required:""},null,512),[[U,t(s).billing.firstName]])]),e("div",gu,[e("label",_u,g(u.$t("messages.billing.lastName")),1),I(e("input",{id:"billing-last-name","onUpdate:modelValue":a[1]||(a[1]=y=>t(s).billing.lastName=y),placeholder:"Doe",autocomplete:"family-name",type:"text",required:""},null,512),[[U,t(s).billing.lastName]])]),e("div",fu,[e("label",hu,g(u.$t("messages.billing.phone")),1),I(e("input",{id:"billing-phone","onUpdate:modelValue":a[2]||(a[2]=y=>t(s).billing.phone=y),placeholder:"+1 234 567 8901",autocomplete:"tel",type:"tel"},null,512),[[U,t(s).billing.phone]])]),e("div",yu,[e("label",bu,"Company ("+g(u.$t("messages.general.optional"))+")",1),I(e("input",{id:"billing-company","onUpdate:modelValue":a[3]||(a[3]=y=>t(s).billing.company=y),placeholder:"Company Name",autocomplete:"organization",type:"text"},null,512),[[U,t(s).billing.company]])]),e("div",vu,[e("label",$u,g(u.$t("messages.billing.address1")),1),I(e("input",{id:"billing-address","onUpdate:modelValue":a[4]||(a[4]=y=>t(s).billing.address1=y),placeholder:"123 Main St",autocomplete:"address-line1",type:"text"},null,512),[[U,t(s).billing.address1]])]),e("div",xu,[e("label",wu,g(u.$t("messages.billing.address2"))+" ("+g(u.$t("messages.general.optional"))+")",1),I(e("input",{id:"billing-address-2","onUpdate:modelValue":a[5]||(a[5]=y=>t(s).billing.address2=y),placeholder:"Apartment, studio, or floor",autocomplete:"address-line2",type:"text"},null,512),[[U,t(s).billing.address2]])]),e("div",ku,[e("label",Cu,g(u.$t("messages.billing.city")),1),I(e("input",{id:"billing-city","onUpdate:modelValue":a[6]||(a[6]=y=>t(s).billing.city=y),placeholder:"New York",autocomplete:"address-level2",type:"text"},null,512),[[U,t(s).billing.city]])]),e("div",Iu,[e("label",Pu,g(u.$t("messages.billing.state"))+" ("+g(u.$t("messages.general.optional"))+")",1),h(p,{id:"billing-state",modelValue:t(s).billing.state,"onUpdate:modelValue":a[7]||(a[7]=y=>t(s).billing.state=y),"default-value":t(s).billing.state,"country-code":t(s).billing.country},null,8,["modelValue","default-value","country-code"])]),e("div",Su,[e("label",Tu,g(u.$t("messages.billing.country")),1),h(f,{id:"billing-country",modelValue:t(s).billing.country,"onUpdate:modelValue":a[8]||(a[8]=y=>t(s).billing.country=y),"default-value":t(s).billing.country},null,8,["modelValue","default-value"])]),e("div",Au,[e("label",Lu,g(u.$t("messages.billing.zip")),1),I(e("input",{id:"billing-zip","onUpdate:modelValue":a[9]||(a[9]=y=>t(s).billing.postcode=y),placeholder:"10001",autocomplete:"postal-code",type:"text"},null,512),[[U,t(s).billing.postcode]])]),e("div",Ou,[e("label",Uu,g(u.$t("messages.billing.email")),1),I(e("input",{id:"billing-email","onUpdate:modelValue":a[10]||(a[10]=y=>t(s).billing.email=y),placeholder:"johndoe@email.com",autocomplete:"email",type:"email",required:""},null,512),[[U,t(s).billing.email]])])]),e("div",Nu,[e("h3",Ru,g(u.$t("messages.general.shipping")),1),e("div",Mu,[e("label",ju,g(u.$t("messages.billing.firstName")),1),I(e("input",{id:"shipping-first-name","onUpdate:modelValue":a[11]||(a[11]=y=>t(s).shipping.firstName=y),placeholder:"John",autocomplete:"given-name",type:"text",required:""},null,512),[[U,t(s).shipping.firstName]])]),e("div",Du,[e("label",Eu,g(u.$t("messages.billing.lastName")),1),I(e("input",{id:"shipping-last-name","onUpdate:modelValue":a[12]||(a[12]=y=>t(s).shipping.lastName=y),placeholder:"Doe",autocomplete:"family-name",type:"text",required:""},null,512),[[U,t(s).shipping.lastName]])]),e("div",Fu,[e("label",Vu,g(u.$t("messages.billing.phone")),1),I(e("input",{id:"shipping-phone","onUpdate:modelValue":a[13]||(a[13]=y=>t(s).shipping.phone=y),placeholder:"+1 234 567 8901",autocomplete:"tel",type:"tel"},null,512),[[U,t(s).shipping.phone]])]),e("div",zu,[e("label",qu,"Company ("+g(u.$t("messages.general.optional"))+")",1),I(e("input",{id:"shipping-company","onUpdate:modelValue":a[14]||(a[14]=y=>t(s).shipping.company=y),placeholder:"Company Name",autocomplete:"organization",type:"text"},null,512),[[U,t(s).shipping.company]])]),e("div",Bu,[e("label",Hu,g(u.$t("messages.billing.address1")),1),I(e("input",{id:"shipping-address","onUpdate:modelValue":a[15]||(a[15]=y=>t(s).shipping.address1=y),placeholder:"O'Connell Street 47",autocomplete:"address-line1",type:"text"},null,512),[[U,t(s).shipping.address1]])]),e("div",Gu,[e("label",Wu,g(u.$t("messages.billing.address2"))+" ("+g(u.$t("messages.general.optional"))+")",1),I(e("input",{id:"shipping-address-2","onUpdate:modelValue":a[16]||(a[16]=y=>t(s).shipping.address2=y),placeholder:"Apartment, studio, or floor",autocomplete:"address-line2",type:"text"},null,512),[[U,t(s).shipping.address2]])]),e("div",Ku,[e("label",Qu,g(u.$t("messages.billing.city")),1),I(e("input",{id:"shipping-city","onUpdate:modelValue":a[17]||(a[17]=y=>t(s).shipping.city=y),placeholder:"New York",autocomplete:"address-level2",type:"text"},null,512),[[U,t(s).shipping.city]])]),e("div",Yu,[e("label",Ju,g(u.$t("messages.billing.state"))+" ("+g(u.$t("messages.general.optional"))+")",1),h(p,{id:"shipping-state",modelValue:t(s).shipping.state,"onUpdate:modelValue":a[18]||(a[18]=y=>t(s).shipping.state=y),"default-value":t(s).shipping.state,"country-code":t(s).shipping.country},null,8,["modelValue","default-value","country-code"])]),e("div",Xu,[e("label",Zu,g(u.$t("messages.billing.country")),1),h(f,{id:"shipping-country",modelValue:t(s).shipping.country,"onUpdate:modelValue":a[19]||(a[19]=y=>t(s).shipping.country=y),"default-value":(v=t(s).shipping)==null?void 0:v.country},null,8,["modelValue","default-value"])]),e("div",em,[e("label",tm,g(u.$t("messages.billing.zip")),1),I(e("input",{id:"shipping-zip","onUpdate:modelValue":a[20]||(a[20]=y=>t(s).shipping.postcode=y),placeholder:"10001",autocomplete:"postal-code",type:"text"},null,512),[[U,t(s).shipping.postcode]])])]),e("div",sm,[e("button",{class:F(["rounded-md flex font-semibold ml-auto text-white py-2 px-4 gap-4 items-center disabled:bg-gray-400 disabled:cursor-not-allowed",t(r).color]),disabled:t(c)},[t(c)?(n(),k(_,{key:0,color:"#fff",size:"20"})):$("",!0),e("span",null,g(t(r).text),1)],10,om)])],32)}}}),am=Object.assign(nm,{__name:"BillingAndShipping"}),lm={class:"relative flex items-center w-full"},rm=["type","value","placeholder","autocomplete","required"],im=P({__name:"PasswordInput",props:{modelValue:{type:String,required:!0},className:{type:String,default:""},placeholder:{type:String,default:""},autocomplete:{type:String,default:"new-password"},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:d}){const s=C(!1),l=d,c=r=>{const i=r.target;l("update:modelValue",i.value)};return(r,i)=>{const u=D;return n(),m("div",lm,[e("input",{type:t(s)?"text":"password",class:F(["flex items-center flex-1",o.className]),value:o.modelValue,onInput:c,placeholder:o.placeholder,autocomplete:o.autocomplete,required:o.required},null,42,rm),t(s)?(n(),k(u,{key:0,name:"ion:eye-outline",size:"20",class:"absolute cursor-pointer right-4",onClick:i[0]||(i[0]=a=>s.value=!t(s))})):(n(),k(u,{key:1,name:"ion:eye-off-outline",size:"20",class:"absolute cursor-pointer right-4",onClick:i[1]||(i[1]=a=>s.value=!t(s))}))])}}}),ct=Object.assign(im,{__name:"PasswordInput"}),cm={class:"grid p-8 gap-6 md:grid-cols-2"},dm={class:"font-semibold text-xl col-span-full"},um={class:"w-full"},mm={for:"new-password"},pm={class:"w-full"},gm={for:"new-password-confirm"},_m=["innerHTML"],fm={class:"bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg"},hm=["disabled"],ym=P({__name:"ChangePassword",setup(o){const{viewer:d,loginUser:s}=ge(),{t:l}=ke(),c=C({new:"",confirm:""}),r=C(!1),i=C({text:l("messages.account.updatePassword"),color:"bg-primary hover:bg-primary-dark"}),u=C(""),a=async()=>{var p,f;if(u.value="",c.value.new!==c.value.confirm){u.value=l("messages.error.passwordMismatch");return}try{r.value=!0;const{updateCustomer:_}=await at({input:{id:d.value.id,password:c.value.new}});if(_){i.value={text:l("messages.account.updateSuccess"),color:"bg-green-500"};const{success:v,error:y}=await s({username:d.value.username,password:c.value.new});y&&(u.value=y,i.value={text:l("messages.account.failed"),color:"bg-red-500"}),v&&(c.value={new:"",confirm:""})}}catch(_){console.error(_);const v=(f=(p=_==null?void 0:_.gqlErrors)==null?void 0:p[0])==null?void 0:f.message;u.value=v||"An error occurred. Please try again.",i.value={text:l("messages.account.failed"),color:"bg-red-500"}}r.value=!1,setTimeout(()=>{i.value={text:l("messages.account.updatePassword"),color:"bg-primary hover:bg-primary-dark"}},2e3)};return(p,f)=>{const _=ct,v=re;return n(),m("form",{class:"bg-white rounded-lg shadow mt-4",onSubmit:ne(a,["prevent"])},[e("div",cm,[e("h3",dm,g(p.$t("messages.account.changePassword")),1),I(e("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=y=>t(d).username=y),name:"username",autocomplete:"username",style:{display:"none"}},null,512),[[U,t(d).username]]),e("div",um,[e("label",mm,g(p.$t("messages.account.newPassword")),1),h(_,{id:"new-password",modelValue:t(c).new,"onUpdate:modelValue":f[1]||(f[1]=y=>t(c).new=y),placeholder:"••••••••••",type:"text",required:""},null,8,["modelValue"])]),e("div",pm,[e("label",gm,g(p.$t("messages.account.confirmNewPassword")),1),h(_,{id:"new-password-confirm",modelValue:t(c).confirm,"onUpdate:modelValue":f[2]||(f[2]=y=>t(c).confirm=y),placeholder:"••••••••••",type:"text",required:""},null,8,["modelValue"])]),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(u)?(n(),m("div",{key:0,class:"w-full text-sm text-red-500",innerHTML:t(u)},null,8,_m)):$("",!0)]),_:1})]),e("div",fm,[e("button",{class:F(["rounded-md flex font-semibold ml-auto text-white py-2 px-4 gap-4 items-center disabled:bg-gray-400 disabled:cursor-not-allowed",t(i).color]),disabled:t(r)},[t(r)?(n(),k(v,{key:0,color:"#fff",size:"20"})):$("",!0),e("span",null,g(t(i).text),1)],10,hm)])],32)}}}),bm=Object.assign(ym,{__name:"ChangePassword"}),vm={},$m={class:"grid gap-8 account-form"};function xm(o,d){const s=cu,l=am,c=bm;return n(),m("div",$m,[h(s),h(l),h(c)])}const y_=Object.assign(E(vm,[["render",xm]]),{__name:"AccountMyDetails"}),wm={class:"bg-white rounded-lg flex shadow min-h-[250px] p-4 md:p-12 justify-center items-center"},km={key:0,class:"w-full"},Cm={class:"w-full text-left table-auto","aria-label":"Order List"},Im={class:"text-right"},Pm=["onClick"],Sm={class:"rounded-l-lg"},Tm={class:"text-right rounded-r-lg"},Am={class:"text-center flex justify-center w-full mt-8"},Lm={key:1,class:"min-h-[250px] flex items-center justify-center text-gray-500 text-lg"},Om=P({__name:"OrderList",setup(o){const d=Ke(),{formatDate:s,scrollToTop:l}=le(),{getOrders:c,orders:r}=ge();r.value===null&&c();const i=()=>{r.value=null,l(),c()},u=a=>{d.push(`/order-summary/${a}`)};return(a,p)=>{const f=Gi,_=D,v=re;return n(),m("div",wm,[t(r)&&t(r).length?(n(),m("div",km,[e("table",Cm,[e("thead",null,[e("tr",null,[e("th",null,g(a.$t("messages.shop.order")),1),e("th",null,g(a.$t("messages.general.date")),1),e("th",null,g(a.$t("messages.general.status")),1),e("th",Im,g(a.$t("messages.shop.total")),1)])]),e("tbody",null,[(n(!0),m(N,null,j(t(r),y=>(n(),m("tr",{key:y.orderNumber,class:"cursor-pointer hover:underline",onClick:b=>u(y.orderNumber)},[e("td",Sm,g(y.orderNumber),1),e("td",null,g(t(s)(y.date)),1),e("td",null,[y.status?(n(),k(f,{key:0,order:y},null,8,["order"])):$("",!0)]),e("td",Tm,g(y.total),1)],8,Pm))),128))])]),e("div",Am,[e("button",{type:"button",onClick:i,class:"flex items-center gap-1 text-sm leading-none hover:bg-gray-50 p-2 rounded"},[p[0]||(p[0]=e("span",null,"Reresh list",-1)),h(_,{name:"ion:refresh-outline"})])])])):t(r)&&t(r).length===0?(n(),m("div",Lm,"No orders found.")):(n(),k(v,{key:2,size:"24",stroke:"2"}))])}}}),b_=Object.assign(E(Om,[["__scopeId","data-v-a02a7c56"]]),{__name:"OrderList"}),Um={class:"bg-white rounded-lg flex shadow min-h-[250px] p-4 md:p-12 justify-center items-center"},Nm={key:0,class:"w-full"},Rm={class:"text-center flex justify-center w-full mt-8"},Mm={key:1,class:"min-h-[250px] flex items-center justify-center text-gray-500 text-lg"},jm=P({__name:"DownloadList",setup(o){const{scrollToTop:d}=le(),{getDownloads:s,downloads:l}=ge();l.value===null&&s();const c=()=>{l.value=null,d(),s()};return(r,i)=>{const u=Xi,a=D,p=re;return n(),m("div",Um,[t(l)&&t(l).length?(n(),m("div",Nm,[h(u,{downloadableItems:t(l)},null,8,["downloadableItems"]),e("div",Rm,[e("button",{type:"button",onClick:c,class:"flex items-center gap-1 text-sm leading-none hover:bg-gray-50 p-2 rounded"},[i[0]||(i[0]=e("span",null,"Refresh list",-1)),h(a,{name:"ion:refresh-outline"})])])])):t(l)&&t(l).length===0?(n(),m("div",Mm,"No downloads found.")):(n(),k(p,{key:2,size:"24",stroke:"2"}))])}}}),v_=Object.assign(jm,{__name:"DownloadList"}),Dm={class:"max-w-lg mx-auto my-16 min-h-[600px] lg:my-24"},Em={class:"flex flex-col items-center"},Fm={class:"text-xl font-semibold lg:text-3xl"},Vm={for:"password",class:"mb-4"},zm={for:"confirmPassword",class:"mb-4"},qm={key:0,class:"text-sm mb-4"},Bm=["innerHTML"],Hm={class:"flex items-center justify-center gap-4 mt-4 text-lg"},Gm={class:"my-8 text-center cursor-pointer"},Wm=P({__name:"ResetPassword",setup(o){const{t:d}=ke(),s=Ke(),l=Te(),{viewer:c,resetPasswordWithKey:r,loginUser:i}=ge(),u=C(""),a=C(""),p=C(""),f=C(!1),_=C(!1);!l.query.key&&!l.query.login&&s.push("/my-account?action=forgotPassword");const v=async()=>{try{if(p.value="",_.value=!1,f.value=!0,u.value!==a.value)throw new Error(d("messages.error.passwordMismatch"));const y={key:l.query.key,login:l.query.login,password:u.value};if(!y.key||!y.login)throw _.value=!0,new Error(d("messages.error.invalidPasswordResetLink"));const b=await r(y);if(!b.success)throw _.value=!0,new Error(b.error);if(c.value){const x=await i({username:y.login,password:y.password});if(!x.success)throw new Error(x.error)}s.push("/my-account")}catch(y){p.value=y.message||d("messages.error.general")}finally{f.value=!1}};return ht({title:d("messages.account.resetPassword")}),(y,b)=>{const x=Je,A=ct,R=H,B=re;return n(),m("div",Dm,[e("div",Em,[h(x,{class:"mb-6 scale-125"}),e("h1",Fm,g(y.$t("messages.account.resetPassword")),1)]),e("form",{class:"mt-6 flex flex-col",onSubmit:ne(v,["prevent"])},[e("label",Vm,[T(g(y.$t("messages.account.newPassword"))+" ",1),b[2]||(b[2]=e("span",{class:"text-red-500"},"*",-1)),b[3]||(b[3]=e("br",null,null,-1)),h(A,{id:"password",className:" border rounded-lg w-full p-3 px-4 bg-white",modelValue:t(u),"onUpdate:modelValue":b[0]||(b[0]=O=>Q(u)?u.value=O:null),placeholder:"New Password",required:!0},null,8,["modelValue"])]),e("label",zm,[T(g(y.$t("messages.account.confirmNewPassword"))+" ",1),b[4]||(b[4]=e("span",{class:"text-red-500"},"*",-1)),b[5]||(b[5]=e("br",null,null,-1)),h(A,{id:"confirmPassword",className:"border rounded-lg w-full p-3 px-4 bg-white",modelValue:t(a),"onUpdate:modelValue":b[1]||(b[1]=O=>Q(a)?a.value=O:null),placeholder:"Confirm Password",required:!0},null,8,["modelValue"])]),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(p)?(n(),m("div",qm,[e("span",{class:"text-red-500",innerHTML:t(p)},null,8,Bm),t(_)?(n(),k(R,{key:0,class:"underline cursor-pointer pl-1",to:"/my-account?action=forgotPassword"},{default:w(()=>[T(g(y.$t("messages.account.requestNewLink")),1)]),_:1})):$("",!0)])):$("",!0)]),_:1}),e("button",Hm,[t(f)?(n(),k(B,{key:0,stroke:"4",size:"16",color:"#fff"})):$("",!0),e("span",null,g(y.$t("messages.account.resetPassword")),1)])],32),e("div",Gm,[h(R,{to:"/my-account"},{default:w(()=>[T(g(y.$t("messages.account.backToLogin")),1)]),_:1})])])}}}),$_=Object.assign(E(Wm,[["__scopeId","data-v-80e2df9f"]]),{__name:"ResetPassword"}),Km=P({__name:"EmptyCart",setup(o){const{emptyCart:d}=ie();return(s,l)=>{const c=Lt;return n(),m("button",{class:"cursor-pointer top-6 right-6 md:right-8 absolute",title:"Empty Cart",onClick:l[0]||(l[0]=(...r)=>t(d)&&t(d)(...r))},[h(c)])}}}),Qm=Object.assign(Km,{__name:"EmptyCart"}),Ym={class:"flex flex-col items-center justify-center flex-1 mb-20 text-gray-400"},Jm={class:"mb-2 text-xl font-semibold"},Xm={class:"mb-8"},Zm=P({__name:"EmptyCartMessage",setup(o){const{toggleCart:d}=ie();return(s,l)=>{const c=D,r=H;return n(),m("div",Ym,[h(c,{name:"ion:cart-outline",size:"96",class:"opacity-75 mb-5"}),e("div",Jm,g(s.$t("messages.shop.cartEmpty")),1),e("span",Xm,g(s.$t("messages.shop.addProductsInYourCart")),1),h(r,{to:"/products",onClick:l[0]||(l[0]=i=>t(d)(!1)),class:"flex items-center justify-center gap-3 p-2 px-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark"},{default:w(()=>[T(g(s.$t("messages.shop.browseOurProducts")),1)]),_:1})])}}}),ep=Object.assign(Zm,{__name:"EmptyCartMessage"}),tp={class:"fixed top-0 bottom-0 right-0 z-[100] flex flex-col w-11/12 max-w-lg bg-white shadow-lg"},sp={class:"mt-8 text-center"},op={key:0},np={class:"flex-1 overflow-auto"},ap={class:"flex flex-col gap-4 p-6 md:p-8"},lp={class:"px-8 py-4 mt-auto border-t border-gray-100 bg-white"},rp={class:"mx-2"},ip=["innerHTML"],cp={key:2,class:"flex flex-col items-center justify-center flex-1 mb-20"},dp={key:1,class:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-25"},up=P({__name:"Cart",setup(o){const{cart:d,toggleCart:s,isUpdatingCart:l}=ie();return(c,r)=>{var y,b,x,A;const i=D,u=Qm,a=Ot,p=H,f=ep,_=re,v=Ee;return n(),m("div",tp,[h(i,{name:"ion:close-outline",class:"absolute p-1 rounded-lg shadow-lg top-6 left-6 md:left-8 cursor-pointer",size:"34",onClick:r[0]||(r[0]=R=>t(s)(!1))}),t(d)&&!t(d).isEmpty?(n(),k(u,{key:0,class:"rounded-lg shadow-lg p-1.5 hover:bg-red-400 hover:text-white"})):$("",!0),e("div",sp,[T(g(c.$t("messages.shop.cart"))+" ",1),(b=(y=t(d))==null?void 0:y.contents)!=null&&b.productCount?(n(),m("span",op," ("+g((A=(x=t(d))==null?void 0:x.contents)==null?void 0:A.productCount)+") ",1)):$("",!0)]),h(v,null,{default:w(()=>{var R;return[t(d)&&!t(d).isEmpty?(n(),m(N,{key:0},[e("div",np,[e("ul",ap,[(n(!0),m(N,null,j((R=t(d).contents)==null?void 0:R.nodes,B=>(n(),k(a,{key:B.key,item:B},null,8,["item"]))),128))])]),e("div",lp,[h(p,{class:"block p-3 text-lg text-center text-white bg-gray-800 rounded-lg shadow-md justify-evenly hover:bg-gray-900",to:"/checkout",onClick:r[1]||(r[1]=ne(B=>t(s)(),["prevent"]))},{default:w(()=>[e("span",rp,g(c.$t("messages.shop.checkout")),1),e("span",{innerHTML:t(d).total},null,8,ip)]),_:1})])],64)):t(d)&&t(d).isEmpty?(n(),k(f,{key:1})):(n(),m("div",cp,[h(_)]))]}),_:1}),t(l)?(n(),m("div",dp,[h(_)])):$("",!0)])}}}),mp=Object.assign(up,{__name:"Cart"}),x_=Object.freeze(Object.defineProperty({__proto__:null,default:mp},Symbol.toStringTag,{value:"Module"})),pp={},gp={class:"cursor-pointer top-6 left-8 absolute",xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 512 512"};function _p(o,d){return n(),m("svg",gp,d[0]||(d[0]=[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144M368 144L144 368"},null,-1)]))}const fp=Object.assign(E(pp,[["render",_p]]),{__name:"CloseIcon"}),hp={class:"bg-white flex flex-col max-w-lg shadow-lg top-0 bottom-0 left-0 w-11/12 z-50 fixed overflow-x-hidden"},yp={class:"mt-8 text-center"},bp={class:"mt-auto text-center p-8 text-[10px] text-gray-400"},vp=["title"],$p=P({__name:"MobileMenu",setup(o){const{toggleMobileMenu:d,wooNuxtVersionInfo:s}=le();return(l,c)=>{const r=fp,i=$t;return n(),m("div",hp,[h(r,{class:"bg-white rounded-xl shadow-xl p-1.5",onClick:c[0]||(c[0]=u=>t(d)(!1))}),e("div",yp,g(l.$t("messages.general.menu")),1),h(i,{class:"m-4 grid p-4 text-gray-500 gap-6"}),e("div",bp,[e("a",{href:"/",title:t(s)},"WooNuxt v"+g(t(s)),9,vp)])])}}}),xp=Object.assign($p,{__name:"MobileMenu"}),w_=Object.freeze(Object.defineProperty({__proto__:null,default:xp},Symbol.toStringTag,{value:"Module"})),wp={class:"mt-4 text-sm text-gray-700 xl:max-w-md"},kp=P({__name:"WebsiteShortDescription",setup(o){const{description:d}=xe();return(s,l)=>(n(),m("p",wp,g(t(d)),1))}}),Cp=Object.assign(kp,{__name:"WebsiteShortDescription"}),Ip={key:0,class:"flex gap-4 text-xl"},Pp=["href","aria-label"],Sp=P({__name:"SocialIcons",setup(o){const{wooNuxtSEO:d}=le();return(s,l)=>{var r;const c=D;return(r=t(d))!=null&&r.length?(n(),m("div",Ip,[(n(!0),m(N,null,j(t(d),i=>(n(),m("a",{key:i.provider,href:i.url,target:"_blank",rel:"noreferrer","aria-label":i.provider},[h(c,{class:"text-gray-700 hover:text-gray-900",name:`ion:logo-${i.provider}`},null,8,["name"])],8,Pp))),128))])):$("",!0)}}}),Tp=Object.assign(Sp,{__name:"SocialIcons"}),Ap={class:"bg-white order-last"},Lp={class:"container flex flex-wrap justify-between gap-12 my-24 md:gap-24"},Op={class:"mr-auto"},Up={class:"w-3/7 lg:w-auto"},Np={class:"text-sm"},Rp={href:"/",class:"py-1.5 block"},Mp={class:"w-3/7 lg:w-auto"},jp={class:"mb-1 font-semibold"},Dp={class:"text-sm"},Ep={class:"w-3/7 lg:w-auto"},Fp={class:"mb-1 font-semibold"},Vp={class:"text-sm"},zp={href:"/",class:"py-1.5 block"},qp={class:"container border-t flex items-center justify-center mb-4"},Bp={class:"copywrite"},Hp={class:"py-4 text-xs text-center"},Gp=["title"],Wp=P({__name:"AppFooter",setup(o){const{wooNuxtVersionInfo:d}=le(),{wishlistLink:s}=ge();return(l,c)=>{const r=Je,i=Cp,u=H,a=Tp;return n(),m("footer",Ap,[e("div",Lp,[e("div",Op,[h(r),h(i)]),c[7]||(c[7]=Ge('<div class="w-3/7 lg:w-auto" data-v-5110c824><div class="mb-1 font-semibold" data-v-5110c824>Information</div><div class="text-sm" data-v-5110c824><a class="py-1.5 block" href="https://github.com/scottyzen/woonuxt?tab=readme-ov-file#next-generation-front-end-for-woocommerce" target="_blank" data-v-5110c824>About</a><a href="/" class="py-1.5 block" data-v-5110c824>Careers</a><a href="/" class="py-1.5 block" data-v-5110c824>Press</a><a href="https://woonuxt.com/faq" class="py-1.5 block" rel="noreferrer" target="_blank" data-v-5110c824>FAQ&#39;s</a></div></div>',1)),e("div",Up,[c[2]||(c[2]=e("div",{class:"mb-1 font-semibold"},"Products",-1)),e("div",Np,[h(u,{to:"/products",class:"py-1.5 block"},{default:w(()=>[T(g(l.$t("messages.shop.newArrivals")),1)]),_:1}),h(u,{to:"/products?filter=sale[true]",class:"py-1.5 block"},{default:w(()=>c[0]||(c[0]=[T("On sale")])),_:1}),h(u,{to:"/products?orderby=rating&order=ASC&filter=rating[1]",class:"py-1.5 block"},{default:w(()=>c[1]||(c[1]=[T("Top rated")])),_:1}),e("a",Rp,g(l.$t("messages.shop.giftCards")),1)])]),e("div",Mp,[e("div",jp,g(l.$t("messages.general.customerService")),1),e("div",Dp,[h(u,{to:"/contact",class:"py-1.5 block"},{default:w(()=>c[3]||(c[3]=[T("Contact Us")])),_:1}),c[4]||(c[4]=e("a",{href:"/",class:"py-1.5 block"},"Shipping & Returns",-1)),c[5]||(c[5]=e("a",{href:"/",class:"py-1.5 block"},"Privacy Policy",-1)),c[6]||(c[6]=e("a",{href:"/",class:"py-1.5 block"},"Terms & Conditions",-1))])]),e("div",Ep,[e("div",Fp,g(l.$t("messages.account.myAccount")),1),e("div",Vp,[h(u,{to:"/my-account/",class:"py-1.5 block"},{default:w(()=>[T(g(l.$t("messages.account.myAccount")),1)]),_:1}),h(u,{to:"/my-account/?tab=orders",class:"py-1.5 block"},{default:w(()=>[T(g(l.$t("messages.shop.orderHistory")),1)]),_:1}),h(u,{to:t(s),class:"py-1.5 block"},{default:w(()=>[T(g(l.$t("messages.shop.wishlist")),1)]),_:1},8,["to"]),e("a",zp,g(l.$t("messages.general.newsletter")),1)])])]),e("div",qp,[e("div",Bp,[e("p",Hp,[e("a",{href:"https://woonuxt.com",title:`WooNuxt v${t(d)}`},g(`WooNuxt v${t(d)}`),9,Gp),c[8]||(c[8]=T(" - by ")),c[9]||(c[9]=e("a",{href:"https://scottyzen.com",title:"Scott Kennedy - Web Developer",target:"_blank"},"Scott Kennedy",-1))])]),h(a,{class:"ml-auto"})])])}}}),Kp=Object.assign(E(Wp,[["__scopeId","data-v-5110c824"]]),{__name:"AppFooter"}),k_=Object.freeze(Object.defineProperty({__proto__:null,default:Kp},Symbol.toStringTag,{value:"Module"})),Qp={key:0,class:"mt-3 text-sm grid text-gray-500 gap-3"},Yp={class:"cursor-pointer flex gap-2 items-center"},Jp={class:"flex items-center",for:"star-five"},Xp={class:"cursor-pointer flex gap-2 items-center"},Zp={class:"flex items-center",for:"star-four"},eg={class:"cursor-pointer flex gap-2 items-center"},tg={class:"flex items-center",for:"star-three"},sg={class:"cursor-pointer flex gap-2 items-center"},og={class:"flex items-center",for:"star-two"},ng={class:"cursor-pointer flex gap-2 items-center"},ag={class:"flex items-center",for:"star-one"},lg=P({__name:"StarRatingFilter",async setup(o){let d,s;const{getFilter:l,setFilter:c,isFiltersActive:r}=([d,s]=Se(()=>pe()),d=await d,s(),d),i=C(l("rating")),u=C(!0);ae(r,()=>{r.value||(i.value=[])});const a=p=>{c("rating",i.value.includes(p)?[]:[p])};return(p,f)=>{const _=D,v=Xe;return n(),m("div",null,[e("div",{class:"cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center",onClick:f[0]||(f[0]=y=>u.value=!t(u))},[e("span",null,g(p.$t("messages.shop.rating")),1),I(h(_,{name:"ion:chevron-up-outline"},null,512),[[Oe,t(u)]]),I(h(_,{name:"ion:chevron-down-outline"},null,512),[[Oe,!t(u)]])]),t(u)?(n(),m("div",Qp,[e("div",Yp,[I(e("input",{id:"star-five","onUpdate:modelValue":f[1]||(f[1]=y=>Q(i)?i.value=y:null),type:"radio",value:"5","aria-label":"5 stars exactly",onClick:f[2]||(f[2]=y=>a("5"))},null,512),[[Le,t(i)]]),e("label",Jp,[h(v,{rating:5,size:16})])]),e("div",Xp,[I(e("input",{id:"star-four","onUpdate:modelValue":f[3]||(f[3]=y=>Q(i)?i.value=y:null),type:"radio",value:"4","aria-label":"4 stars exactly",onClick:f[4]||(f[4]=y=>a("4"))},null,512),[[Le,t(i)]]),e("label",Zp,[h(v,{rating:4,size:16})])]),e("div",eg,[I(e("input",{id:"star-three","onUpdate:modelValue":f[5]||(f[5]=y=>Q(i)?i.value=y:null),type:"radio",value:"3","aria-label":"3 stars exactly",onClick:f[6]||(f[6]=y=>a("3"))},null,512),[[Le,t(i)]]),e("label",tg,[h(v,{rating:3,size:16})])]),e("div",sg,[I(e("input",{id:"star-two","onUpdate:modelValue":f[7]||(f[7]=y=>Q(i)?i.value=y:null),type:"radio",value:"2","aria-label":"2 stars exactly",onClick:f[8]||(f[8]=y=>a("2"))},null,512),[[Le,t(i)]]),e("label",og,[h(v,{rating:2,size:16})])]),e("div",ng,[I(e("input",{id:"star-one","onUpdate:modelValue":f[9]||(f[9]=y=>Q(i)?i.value=y:null),type:"radio",value:"1","aria-label":"1 star exactly",onClick:f[10]||(f[10]=y=>a("1"))},null,512),[[Le,t(i)]]),e("label",ag,[h(v,{rating:1,size:16})])])])):$("",!0)])}}}),rg=Object.assign(lg,{__name:"StarRatingFilter"}),ig=Object.freeze(Object.defineProperty({__proto__:null,default:rg},Symbol.toStringTag,{value:"Module"})),cg={__name:"ResetFiltersButton",setup(o){const{resetFilter:d}=pe();return(s,l)=>(n(),m("button",{class:"bg-primary rounded-lg font-bold mt-8 text-center text-white text-sm w-full p-2",onClick:l[0]||(l[0]=(...c)=>t(d)&&t(d)(...c))},g(s.$t("messages.general.clearFilters")),1))}},dg=Object.freeze(Object.defineProperty({__proto__:null,default:cg},Symbol.toStringTag,{value:"Module"})),ug=P({__name:"WPAdminLink",props:{link:{}},setup(o){var r,i,u,a;const d=Ie(),s=(u=(i=(r=d==null?void 0:d.public)==null?void 0:r["graphql-client"])==null?void 0:i.clients)==null?void 0:u.default,l=(s==null?void 0:s.host)??null;return((l==null?void 0:l.replace("/graphql",""))??null)+o.link,(a=o.link)!=null&&a.startsWith("/wp-admin"),(p,f)=>null}}),mg=Object.assign(E(ug,[["__scopeId","data-v-e1c6731d"]]),{__name:"WPAdminLink"}),C_=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),pg={key:0},gg={key:2},_g={class:"flex items-center justify-center gap-4 my-8 leading-none"},fg={class:"text-gray-400"},hg=P({__name:"LoginProviders",setup(o){const{loginClients:d,loginWithProvider:s}=ge(),l=Te(),c=Ke(),{storeSettings:r}=xe(),{provider:i,code:u,state:a}=l.query;u&&a&&i&&s(a,u,i.toUpperCase()).then(()=>{c.replace({query:{}})}).catch(y=>{console.error("Login failed:",y)});const p={FACEBOOK:"ion:logo-facebook",GITHUB:"ion:logo-github",GOOGLE:"ion:logo-google",INSTAGRAM:"ion:logo-instagram",LINKEDIN:"ion:logo-linkedin"},f=(r==null?void 0:r.socialLoginsDisplay)||"buttons",_=L(()=>{var y;return((y=d.value)==null?void 0:y.filter(b=>(b==null?void 0:b.provider)!==wt.PASSWORD))||[]}),v=y=>y?`Login with ${y.charAt(0).toUpperCase()+y.slice(1).toLowerCase()}`:"Login";return(y,b)=>{var B;const x=D,A=D,R=H;return(B=t(_))!=null&&B.length?(n(),m("div",pg,[e("div",{class:F(["gap-4",t(f)==="buttons"?"grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-center":" flex gap-4 flex-wrap justify-center"])},[(n(!0),m(N,null,j(t(_),(O,te)=>(n(),m("div",{key:te},[O&&(O!=null&&O.authorizationUrl)?(n(),k(R,{key:0,to:O==null?void 0:O.authorizationUrl,class:"flex items-center justify-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow transition duration-100 ease-in-out"},{default:w(()=>[O.provider?(n(),k(x,{key:0,name:p[O.provider],size:"20"},null,8,["name"])):(n(),k(A,{key:1,name:"ion:log-in",size:"20"})),t(f)==="buttons"?(n(),m("span",gg,g(O.name||v(O.provider)),1)):$("",!0)]),_:2},1032,["to"])):$("",!0)]))),128))],2),e("div",_g,[b[0]||(b[0]=e("div",{class:"border-b w-1/3 flex-1"},null,-1)),e("div",fg,g(y.$t("messages.account.orContinueWithEmail")),1),b[1]||(b[1]=e("div",{class:"border-b w-1/3 flex-1"},null,-1))])])):$("",!0)}}}),yg=Object.assign(hg,{__name:"LoginProviders"}),bg={class:"max-w-lg mx-auto my-16 min-h-[600px] text-center"},vg={class:"flex flex-col my-2"},$g={class:"text-xl font-semibold lg:text-3xl"},xg={key:0,for:"email"},wg=["placeholder"],kg={key:1,class:"text-sm text-gray-500"},Cg={key:2},Ig=["placeholder"],Pg=["innerHTML"],Sg=["innerHTML"],Tg={class:"flex items-center justify-between mt-4"},Ag={class:"flex items-center gap-2"},Lg={class:"flex items-center justify-center gap-4 my-6 text-lg"},Og={key:1,class:"my-6 text-center"},Ug={key:2,class:"my-2 text-center justify-center"},Ng=P({__name:"LoginAndRegister",setup(o){const{t:d}=ke(),s=Te(),l=Ke(),{loginUser:c,isPending:r,registerUser:i,sendResetPasswordEmail:u}=ge(),a=C({email:"",password:"",username:"",rememberMe:!1}),p=C("login"),f=C(""),_=C("");ae(s,()=>{s.query.action==="forgotPassword"?p.value="forgotPassword":s.query.action==="register"?p.value="register":p.value="login"},{immediate:!0});const y=async q=>{const{success:M,error:J}=await c(q);switch(J){case"invalid_username":_.value=d("messages.error.invalidUsername");break;case"incorrect_password":_.value=d("messages.error.incorrectPassword");break;default:_.value=J;break}M&&(_.value="",f.value=d("messages.account.loggingIn"))},b=async q=>{if(p.value==="register"){const{email:M,password:J,username:_e}=q,ue={email:M,password:J,username:_e},{success:se,error:W}=await i(ue);se?(_.value="",f.value=d("messages.account.accountCreated")+" "+d("messages.account.loggingIn"),setTimeout(()=>{y(q)},2e3)):_.value=W}else p.value==="forgotPassword"?x(q):y(q)},x=async q=>{const{success:M,error:J}=await u({username:q.email});M?(_.value="",f.value=d("messages.account.ifRegistered")):_.value=J},A=q=>{p.value=q,q==="forgotPassword"?l.push({query:{action:"forgotPassword"}}):q==="register"?l.push({query:{action:"register"}}):l.push({query:{}})},R=L(()=>{if(p.value==="login")return d("messages.account.loginToAccount");if(p.value==="register")return d("messages.account.accountRegister");if(p.value==="forgotPassword")return d("messages.account.forgotPassword")}),B=L(()=>{if(p.value==="login")return d("messages.account.login");if(p.value==="register")return d("messages.account.register");if(p.value==="forgotPassword")return d("messages.account.sendPasswordResetEmail")});L(()=>p.value==="register"?d("messages.billing.email"):d("messages.account.emailOrUsername")),L(()=>p.value==="login"?d("messages.account.emailOrUsername"):d("messages.account.username"));const O=L(()=>d("messages.account.password")),te=L(()=>({email:"johndoe@email.com",username:p.value==="login"?"johndoe@email.com":"johndoe",password:"********"}));return(q,M)=>{const J=Je,_e=yg,ue=ct,se=re;return n(),m("div",bg,[h(J),e("div",vg,[e("h1",$g,g(t(R)),1),M[9]||(M[9]=e("p",{class:"text-gray-500 mt-2"},"Welcome back! Select method to login.",-1))]),t(p)==="login"||t(p)==="register"?(n(),k(_e,{key:0,class:"my-8"})):$("",!0),e("form",{class:"mt-6",onSubmit:M[5]||(M[5]=ne(W=>b(t(a)),["prevent"]))},[t(p)==="register"||t(p)==="forgotPassword"?(n(),m("div",xg,[I(e("input",{id:"email","onUpdate:modelValue":M[0]||(M[0]=W=>t(a).email=W),placeholder:t(te).email,autocomplete:"email",type:"text",required:""},null,8,wg),[[U,t(a).email]])])):$("",!0),t(p)==="forgotPassword"?(n(),m("p",kg,g(q.$t("messages.account.enterEmailOrUsernameForReset")),1)):$("",!0),t(p)!=="forgotPassword"?(n(),m("div",Cg,[I(e("input",{class:"mt-1","onUpdate:modelValue":M[1]||(M[1]=W=>t(a).username=W),placeholder:t(te).username,autocomplete:"username",type:"text",required:""},null,8,Ig),[[U,t(a).username]]),h(ue,{className:"border rounded-lg w-full p-3 px-4 bg-white mt-1",modelValue:t(a).password,"onUpdate:modelValue":M[2]||(M[2]=W=>t(a).password=W),placeholder:t(O),autocomplete:t(p)==="login"?"current-password":"new-password",required:!0},null,8,["modelValue","placeholder","autocomplete"])])):$("",!0),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(f)?(n(),m("div",{key:0,class:"my-4 text-sm text-green-500",innerHTML:t(f)},null,8,Pg)):$("",!0)]),_:1}),h(Z,{name:"scale-y",mode:"out-in"},{default:w(()=>[t(_)?(n(),m("div",{key:0,class:"my-4 text-sm text-red-500",innerHTML:t(_)},null,8,Sg)):$("",!0)]),_:1}),e("div",Tg,[e("label",Ag,[I(e("input",{"onUpdate:modelValue":M[3]||(M[3]=W=>t(a).rememberMe=W),type:"checkbox"},null,512),[[De,t(a).rememberMe]]),M[10]||(M[10]=T("Remember me "))]),t(p)==="login"?(n(),m("div",{key:0,class:"font-semibold cursor-pointer text-sm text-primary hover:text-primary",onClick:M[4]||(M[4]=W=>A("forgotPassword"))}," Forgot password? ")):$("",!0)]),e("button",Lg,[t(r)?(n(),k(se,{key:0,stroke:"4",size:"16",color:"#fff"})):$("",!0),e("span",null,g(t(B)),1)])],32),t(p)==="login"?(n(),m("div",Og,[T(g(q.$t("messages.account.noAccount"))+" ",1),e("a",{class:"font-semibold cursor-pointer text-primary",onClick:M[6]||(M[6]=W=>A("register"))},g(q.$t("messages.account.accountRegister")),1),M[11]||(M[11]=T(". "))])):$("",!0),t(p)==="register"?(n(),m("div",Ug,[T(g(q.$t("messages.account.hasAccount"))+" ",1),e("a",{class:"font-semibold cursor-pointer text-primary",onClick:M[7]||(M[7]=W=>A("login"))},g(q.$t("messages.general.please"))+" "+g(q.$t("messages.account.accountLogin")),1)])):$("",!0),t(p)==="forgotPassword"?(n(),m("div",{key:3,class:"my-8 text-center cursor-pointer",onClick:M[8]||(M[8]=W=>A("login"))},g(q.$t("messages.account.backToLogin")),1)):$("",!0)])}}}),Rg=Object.assign(E(Ng,[["__scopeId","data-v-48dd173d"]]),{__name:"LoginAndRegister"}),I_=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"}));export{C_ as $,c_ as A,d_ as B,Xe as C,lt as D,u_ as E,m_ as F,p_ as G,g_ as H,__ as I,f_ as J,vt as K,st as L,h_ as M,At as N,sn as O,kt as P,y_ as Q,b_ as R,Pe as S,v_ as T,$_ as U,Fg as V,Vg as W,x_ as X,w_ as Y,k_ as Z,zg as _,qg as a,I_ as a0,Bg as b,Gg as c,Wg as d,Kg as e,Hg as f,E as g,Qg as h,Jg as i,Xg as j,Zg as k,e_ as l,Yg as m,re as n,li as o,s_ as p,n_ as q,t_ as r,sr as s,o_ as t,a_ as u,l_ as v,r_ as w,Gi as x,Xi as y,i_ as z};
