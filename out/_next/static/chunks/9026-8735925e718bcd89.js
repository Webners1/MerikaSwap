"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9026],{93688:function(e,t,s){var r,n=s(13752),a=s(44554),i=s(85893);!function(e){e[e.REPEAT=0]="REPEAT",e[e.SINGLE=1]="SINGLE"}(r||(r={}));const o={"bg-bars":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:r.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};t.Z=e=>{let{variant:t}=e;if(!t)return(0,i.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});const{type:s,url:l}=o[t];return s===r.REPEAT?(0,i.jsx)("div",{className:(0,a.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,i.jsx)("div",{className:(0,a.AK)("absolute inset-0 w-full h-full z-0 opacity-10",t)})}):(0,i.jsx)(n.Z,{alt:"background image",src:l,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},35908:function(e,t,s){s.d(t,{N:function(){return u}});var r=s(78980),n=s(45369),a=s(90102),i=s(67294),o=s(65297),l=s(85893);const c={[r.a_.ETHEREUM]:"ethereum",[r.a_.BSC]:"bsc",[r.a_.OPBNB]:"opBNB",[r.a_.CELO]:"celo",[r.a_.FANTOM]:"fantom",[r.a_.AVALANCHE_TESTNET]:"fuji",[r.a_.FUSE]:"fuse",[r.a_.HARMONY]:"harmony",[r.a_.HECO]:"heco",[r.a_.MATIC]:"matic",[r.a_.MOONRIVER]:"moonriver",[r.a_.OKEX]:"okex",[r.a_.PALM]:"palm",[r.a_.TELOS]:"telos",[r.a_.XDAI]:"xdai",[r.a_.ARBITRUM]:"arbitrum",[r.a_.AVALANCHE]:"avalanche",[r.a_.MOONBEAM]:"moonbeam",[r.a_.KAVA]:"kava",[r.a_.METIS]:"metis",[r.a_.ARBITRUM_NOVA]:"arbitrum-nova",[r.a_.HARDHAT]:"hardhat"},u=e=>{const t=[];return e.chainId in c&&(t.push("https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/".concat(c[e.chainId],"/").concat(e.wrapped.address,".jpg")),t.push("https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/".concat(c[e.chainId],"/assets/").concat(e.wrapped.address,"/logo.png")),t.push("https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/".concat(c[e.chainId],"/assets/").concat(e.wrapped.address,"/logo.png"))),t},d="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/avax.svg",m="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/bnb.svg",p="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ethereum.svg",h="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ftm.svg",g="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/one.svg",f="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ht.svg",b="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/matic.svg",x="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/okt.svg",v="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/palm.svg",w="https://cryptologos.cc/logos/bnb-bnb-logo.png",y={[r.a_.ETHEREUM]:p,[r.a_.KOVAN]:p,[r.a_.RINKEBY]:p,[r.a_.OPBNB]:w,[r.a_.ROPSTEN]:p,[r.a_["G\xd6RLI"]]:p,[r.a_.FANTOM]:h,[r.a_.FANTOM_TESTNET]:h,[r.a_.MATIC]:b,[r.a_.MATIC_TESTNET]:b,[r.a_.XDAI]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/xdai.svg",[r.a_.BSC]:m,[r.a_.BSC_TESTNET]:m,[r.a_.AVALANCHE]:d,[r.a_.AVALANCHE_TESTNET]:d,[r.a_.HECO]:f,[r.a_.HECO_TESTNET]:f,[r.a_.HARMONY]:g,[r.a_.HARMONY_TESTNET]:g,[r.a_.OKEX]:x,[r.a_.OKEX_TESTNET]:x,[r.a_.ARBITRUM]:p,[r.a_.ARBITRUM_TESTNET]:p,[r.a_.CELO]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/celo.svg",[r.a_.PALM]:v,[r.a_.PALM_TESTNET]:v,[r.a_.MOONRIVER]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/movr.svg",[r.a_.FUSE]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/fuse.svg",[r.a_.TELOS]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/telos.svg",[r.a_.HARDHAT]:p,[r.a_.MOONBEAM]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/glmr.svg",[r.a_.OPTIMISM]:p,[r.a_.KAVA]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/kava.svg",[r.a_.ARBITRUM_NOVA]:p,[r.a_.METIS]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/metis.svg",[r.a_.BOBA_AVAX]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/boba.svg"};t.Z=e=>{let{currency:t,size:s="24px",className:c,style:d}=e;const m=(0,n.Z)(t instanceof a.D?t.logoURI||t.tokenInfo.logoURI:void 0),p=(0,i.useMemo)((()=>{if(null!==t&&void 0!==t&&t.isNative||null!==t&&void 0!==t&&t.equals(r.FX[t.chainId]))return[y[t.chainId],o.R];if(null!==t&&void 0!==t&&t.isToken){const e=[...u(t)];return"WBNB"==(null===t||void 0===t?void 0:t.symbol)?[w]:"MRK"==(null===t||void 0===t?void 0:t.symbol)?["https://i.ibb.co/gJ9Y4xm/logo.png"]:e}return[o.R]}),[t,m]);return(0,l.jsx)(o.Z,{srcs:p,width:s,height:s,alt:null===t||void 0===t?void 0:t.symbol,className:c,style:d})}},41626:function(e,t,s){s.d(t,{X:function(){return r.Z},B:function(){return d}});var r=s(35908),n=s(59499),a=s(4730),i=(s(67294),s(56785)),o=s(85893);const l=["currencies","dense","maxLogos","size"];function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var d=e=>{let{currencies:t,dense:s=!1,maxLogos:n=3,size:c=24}=e,d=(0,a.Z)(e,l);const m=t.length<=n?t:t.slice(0,Math.max(0,Math.min(t.length,n)-1)),p=t.length-m.length;return(0,o.jsxs)("div",{className:"flex",children:[m.map(((e,t)=>(0,o.jsx)("div",{className:"overflow-hidden rounded-full",style:{marginLeft:n>1?0===t?"":s?-Math.floor(c/2-4):-6:0,filter:"drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))"},children:(0,o.jsx)(r.Z,u({currency:e,size:c},d))},t)),[]),p>0&&(0,o.jsx)("div",{className:"rounded-full overflow-hidden flex items-center justify-center z-[1]",style:{marginLeft:n>1?s?-Math.floor(c/2+2):-6:0,width:c,height:c,background:"radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #DBDBDB 100%)",filter:"drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))"},children:(0,o.jsxs)(i.Z,{weight:700,className:"text-low-emphesis",variant:"sm",children:["+",t.length-n+1]})})]})}},65297:function(e,t,s){s.d(t,{R:function(){return u}});var r=s(59499),n=s(44554),a=s(67294),i=s(13752),o=s(85893);function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){(0,r.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const u="https://raw.githubusercontent.com/sushiswap/icons/master/token/unknown.png",d={};t.Z=e=>{let{srcs:t,width:s,height:r,alt:l="",className:m,style:p}=e;const{1:h}=(0,a.useState)(0),g=t.find((e=>!d[e])),f=(0,a.useCallback)((()=>{g&&(d[g]=!0),h((e=>e+1))}),[g]);return(0,o.jsx)("div",{className:"rounded-full",style:c({width:s,height:r},p),children:(0,o.jsx)(i.Z,{src:g||u,onErrorCapture:f,width:s,height:r,alt:l,layout:"fixed",className:(0,n.AK)("rounded-full",m)})})}},64958:function(e,t,s){var r=s(59499),n=s(4730),a=s(41664),i=s.n(a),o=s(11163),l=s(67294),c=s(85893);const u=["children","exact","activeClassName"];function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){(0,r.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t.Z=e=>{let{children:t,exact:s=!1,activeClassName:r="text-high-emphesis"}=e,a=(0,n.Z)(e,u);const{asPath:d,pathname:p,route:h,query:g,basePath:f}=(0,o.useRouter)(),b=l.Children.only(t),x=b.props.className||"",v=(s?(a.as||a.href.pathname||a.href)===d:d.startsWith(a.as||a.href.pathname||a.href))?"".concat(x," ").concat(r).trim():x;return(0,c.jsx)(i(),m(m({href:a.href},a),{},{children:l.cloneElement(b,{className:v||null})}))}},34483:function(e,t,s){s.d(t,{Z:function(){return p}});var r=s(67294);var n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"}))}));var a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7 16l-4-4m0 0l4-4m-4 4h18"}))}));var i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))})),o=s(49501),l=s(44554),c=s(85893);const u="LEFT",d="RIGHT",m=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=e;const n=[];for(;r<=t;)n.push(r),r+=s;return n};var p=e=>{let{totalPages:t,onChange:s,currentPage:p,pageNeighbours:h,canNextPage:g,canPreviousPage:f}=e;const{i18n:b}=(0,o.mV)(),x=(0,r.useCallback)((()=>{const e=2*h+3;if(t>e+2){const s=Math.max(2,p-h),r=Math.min(t-1,p+h);let n=m(s,r);const a=s>2,i=t-r>1,o=e-(n.length+1);switch(!0){case a&&!i:{const e=m(s-o,s-1);n=[u,...e,...n];break}case!a&&i:{const e=m(r+1,r+o);n=[...n,...e,d];break}default:n=[u,...n,d]}return[1,...n,t]}return m(1,t)}),[p,h,t]),v=x().reduce(((e,t,r)=>(t===u?e.push((0,c.jsx)("div",{className:"flex justify-center items-center w-10 h-10",children:(0,c.jsx)(n,{width:12,className:"text-low-emphesis w"})},r)):t===d?e.push((0,c.jsx)("div",{className:"flex justify-center items-center w-10 h-10",children:(0,c.jsx)(n,{width:12,className:"text-low-emphesis"})},r)):e.push((0,c.jsx)("button",{onClick:()=>s(t-1),className:(0,l.AK)(t===p+1?"text-transparent bg-gradient-to-r from-pink to-pink-red bg-clip-text border-pink":"text-secondary border-transparent","border-t-2 w-10 h-10 cursor-pointer border-transparent px-4 inline-flex items-center text-sm font-bold hover:text-opacity-100 text-opacity-80"),children:t},r)),e)),[]);return t>1?(0,c.jsxs)("nav",{className:"flex items-center justify-between sm:px-0",children:[(0,c.jsx)("div",{className:"-mt-px w-0 flex-1 flex border-t-2 border-transparent",children:f&&(0,c.jsxs)("button",{onClick:()=>s(p-1),className:(0,l.AK)("text-transparent bg-gradient-to-r from-pink to-pink-red bg-clip-text cursor-pointer inline-flex items-center text-sm font-bold"),children:[(0,c.jsx)("span",{className:"text-pink",children:(0,c.jsx)(a,{className:"mr-3 h-5 w-5","aria-hidden":"true"})}),b._(b._("Previous"))]})}),(0,c.jsx)("div",{className:"md:-mt-px md:flex",children:v}),(0,c.jsx)("div",{className:"-mt-px w-0 flex-1 flex justify-end items-center border-t-2 border-transparent",children:g&&(0,c.jsxs)("button",{onClick:()=>s(p+1),className:(0,l.AK)("text-transparent bg-gradient-to-r from-pink to-pink-red bg-clip-text cursor-pointer inline-flex items-center text-sm font-bold"),children:[b._(b._("Next")),(0,c.jsx)("span",{className:"text-pink-red",children:(0,c.jsx)(i,{className:"ml-3 h-5 w-5","aria-hidden":"true"})})]})})]}):(0,c.jsx)(c.Fragment,{})}},27979:function(e,t,s){var r=s(49501),n=s(71862),a=s(56785),i=s(22680),o=s(41664),l=s.n(o),c=(s(67294),s(85893));t.Z=()=>{const{i18n:e}=(0,r.mV)();return(0,c.jsxs)(i.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-chevron",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(a.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("Limit Orders"))}),(0,c.jsx)(a.Z,{variant:"sm",weight:400,children:e._(e._("Place a limit order or check the status of your past orders"))})]}),(0,c.jsx)("div",{className:"flex gap-3",children:(0,c.jsx)(l(),{href:"/limit-order",passHref:!0,children:(0,c.jsx)(n.ZP,{size:"sm",color:"blue",children:e._(e._("Create Order"))})})})]})}},90560:function(e,t,s){var r=s(49501),n=s(97448),a=s(71862),i=s(46430),o=s(56785),l=s(38239),c=s(25183),u=s(44554),d=s(69137),m=s(12614),p=s(49552),h=s.n(p),g=s(67294),f=s(85893);t.Z=()=>{const{i18n:e}=(0,r.mV)(),{chainId:t}=(0,m.aQ)(),{pending:s}=(0,c.Z)(),{approve:p,approvalState:b}=(0,d.ZP)(t?n.A2[t]:void 0,{}),{0:x,1:v}=(0,g.useState)(),w=s.totalOrders>0&&b===d.kG.NOT_APPROVED&&!h().get("disableLimitOrderGuard")&&"undefined"!==typeof x&&!x;return t&&!(0,u.vR)(l.L.LIMIT_ORDERS,t)?(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(i.Z.Controlled,{isOpen:w,onDismiss:()=>v(!0),maxWidth:"sm",children:(0,f.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,f.jsx)(i.Z.Header,{header:e._(e._("Approve Master Contract")),onClose:()=>v(!0)}),(0,f.jsx)(i.Z.BorderedContent,{className:"bg-dark-1000/40",children:(0,f.jsx)(o.Z,{variant:"sm",children:e._(e._("It seems like you have open orders while the limit order master contract is not approved. Please make\nsure you approved the limit order master contract or the order will not execute"))})}),(0,f.jsxs)("div",{className:"flex justify-end gap-6",children:[(0,f.jsx)(a.ZP,{color:"blue",size:"sm",variant:"empty",onClick:()=>h().set("disableLimitOrderGuard",!0),children:e._(e._("Do not show again"))}),(0,f.jsx)(a.ZP,{loading:b===d.kG.PENDING,color:"blue",size:"sm",onClick:p,children:e._(e._("Approve"))})]})]})})}},97627:function(e,t,s){var r=s(49501),n=s(56785),a=s(44554),i=s(41664),o=s.n(i),l=s(11163),c=s(67294),u=s(85893);t.Z=()=>{const{i18n:e}=(0,r.mV)(),{asPath:t}=(0,l.useRouter)(),s=(0,c.useMemo)((()=>[{key:"open",label:e._(e._("Orders")),link:"/limit-order/open"},{key:"history",label:e._(e._("History")),link:"/limit-order/history"}]),[e]);return(0,u.jsx)("div",{className:"flex gap-8",children:s.map(((e,s)=>{let{label:r,link:i,key:l}=e;return(0,u.jsx)(o(),{href:i,passHref:!0,replace:!0,children:(0,u.jsxs)("a",{className:"h-full space-y-2 cursor-pointer",children:[(0,u.jsx)(n.Z,{weight:700,className:(0,a.AK)(t.includes("/limit-order/".concat(l))?"bg-gradient-to-r from-blue to-pink bg-clip-text text-transparent":"","font-bold text-sm text-high-emphesis"),children:r}),(0,u.jsx)("div",{className:(0,a.AK)(t.includes("/limit-order/".concat(l))?"relative bg-gradient-to-r from-blue to-pink h-[3px] w-full":"")})]})},s)}))})}},25183:function(e,t,s){var r=s(59499),n=s(78980),a=s(97448),i=s(53389),o=s(62483),l=s(12614),c=s(67294),u=s(8100);function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){(0,r.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const p="".concat(a.Zu,"/orders/view"),h=(e,t,s,r,n)=>fetch(e,{method:"POST",body:JSON.stringify({address:t,chainId:s,page:n,pendingPage:r}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.data));t.Z=()=>{const{account:e,chainId:t}=(0,l.aQ)(),s=(0,i.JY)(),r=(0,o.e_)(),{0:d,1:g}=(0,c.useState)({pending:{page:1,maxPages:0,data:[],loading:!0,totalOrders:0},completed:{page:1,maxPages:0,data:[],loading:!0,totalOrders:0}}),f=(0,c.useMemo)((()=>p&&e&&t?[p,e,t,d.pending.page,d.completed.page]:null),[e,t,d.completed.page,d.pending.page]),{data:b,mutate:x}=(0,u.ZP)(f,h),v=(0,c.useCallback)((e=>{g((t=>m(m({},t),{},{pending:m(m({},t.pending),{},{page:e,loading:!0})})))}),[]),w=(0,c.useCallback)((e=>{g((t=>m(m({},t),{},{completed:m(m({},t.completed),{},{page:e,loading:!0})})))}),[]);return(0,c.useEffect)((()=>{if(!e||!t||!b||!b.pendingOrders||!b.otherOrders||!Array.isArray(b.pendingOrders.orders)||!Array.isArray(b.otherOrders.orders))return;const s=async e=>{const s=a.eN.getLimitOrder(m(m({},e),{},{stopPrice:"0",chainId:+e.chainId,tokenInDecimals:+e.tokenInDecimals,tokenOutDecimals:+e.tokenOutDecimals})),i=s.amountIn.currency,o=s.amountOut.currency,l=e.filledAmount?n.ih.fromRawAmount(i,e.filledAmount):void 0;return{id:e._id,tokenIn:r[i.address]||new n.WU(t,i.address.toLowerCase(),i.decimals,i.symbol),tokenOut:r[o.address]||new n.WU(t,o.address.toLowerCase(),o.decimals,o.symbol),limitOrder:s,filledPercent:e.status===a.iF.FILLED?"100":l?new n.gG(l.quotient,s.amountIn.quotient).toSignificant(2):"0.00",status:e.status,rate:new n.tA({baseAmount:s.amountIn,quoteAmount:s.amountOut})}};(async()=>{const e=await Promise.all(b.pendingOrders.orders.map(((e,t)=>s(m(m({},e),{},{filledAmount:b.pendingOrders.filledAmounts[t]}))))),t=await Promise.all(b.otherOrders.orders.map((e=>s(e))));g((s=>({pending:m(m({},s.pending),{},{data:e,maxPages:b.pendingOrders.pendingOrderMaxPage,loading:!1,totalOrders:b.pendingOrders.totalPendingOrders}),completed:m(m({},s.completed),{},{data:t,maxPages:b.otherOrders.maxPage,loading:!1,totalOrders:b.otherOrders.totalOrders})})))})()}),[e,t,b,s,v,w]),(0,c.useMemo)((()=>m(m({},d),{},{pending:m(m({},d.pending),{},{setPage:v}),completed:m(m({},d.completed),{},{setPage:w}),mutate:x})),[x,w,v,d])}},89046:function(e,t,s){s.d(t,{G0:function(){return o},RR:function(){return i},_O:function(){return a},k9:function(){return n},vu:function(){return l},zm:function(){return c}});var r=s(44554);const n={ConstantProduct:{label:"Classic",label_long:"Classic Pool",color:"default",description:"Most common, traditional 50/50 value split between assets",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:121,height:95}},Weighted:{label:"Index",label_long:"Index Pool",color:"yellow",description:"Two asset pools, with the value split skewed higher towards one.",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/index-pool-scale.png",width:151,height:95}},ConcentratedLiquidity:{label:"Concentrated",label_long:"Concentrated Range",color:"purple",description:"Same value makeup of a classic pool, but for a specific price range",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:151,height:95}},Hybrid:{label:"Stable",label_long:"Stable Pool",color:"blue",description:"3 to 32 assets, with tokens deposited in equal values",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:121,height:95}}},a="overflow-x-auto border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",i="w-full border-collapse",o=(e,t)=>(0,r.AK)("text-secondary text-sm py-3",0===e?"pl-4 text-left":"text-right",e===t-1?"pr-4":""),l="hover:bg-dark-900/40 hover:cursor-pointer",c=(e,t)=>(0,r.AK)("py-3 border-t border-dark-900 flex items-center",0===e?"pl-4 justify-start":"justify-end",e===t-1?"pr-4":"")},87433:function(e,t,s){var r=s(49501),n=s(78980),a=s(46430),i=s(64958),o=s(56785),l=s(87269),c=s(10552),u=s(90662),d=s(12614),m=s(49552),p=s.n(m),h=s(25675),g=s.n(h),f=s(67294),b=s(85893);const x=e=>{var t;let{children:s,feature:m,asModal:h=!0}=e;const{i18n:x}=(0,r.mV)(),{chainId:v,library:w,account:y}=(0,d.aQ)(),j=(0,b.jsx)(i.Z,{href:"/swap",children:(0,b.jsx)("a",{className:"text-blue focus:outline-none",children:x._(x._("home page"))})}),O=Object.entries(l.Z).reduce(((e,t)=>{let[s,r]=t;return r.includes(m)&&e.push(s),e}),[]),_=(0,b.jsx)("div",{className:"flex justify-center lg:mt-[200px]",children:(0,b.jsxs)("div",{className:"flex flex-col gap-5 justify-center p-4 mt-10 lg:mt-0",children:[(0,b.jsx)(o.Z,{variant:"h1",className:"max-w-2xl text-white text-center",weight:700,children:x._(x._("This feature is not yet supported on the {0} network",{0:c.z[v]}))}),(0,b.jsxs)(o.Z,{className:"text-center max-w-[248px] mx-auto",children:[(0,b.jsx)(r.cC,{id:"Either return to the {link}",values:{link:j},components:f.Fragment})," ",x._(x._("or change to an available network"))]}),(0,b.jsx)(o.Z,{variant:"sm",className:"uppercase text-center tracking-[.2rem] mt-10 mb-5",weight:700,children:x._(x._("Available Networks"))}),(0,b.jsx)("div",{className:"grid grid-cols-[repeat(2,_100px)] md:grid-cols-[repeat(4,_100px)] gap-y-10 justify-center",children:O.map(((e,t)=>(0,b.jsxs)("button",{className:"text-primary hover:text-white flex items-center flex-col gap-2 justify-center",onClick:()=>{const t=u.b[e];p().set("chainId",e),e===n.a_.ETHEREUM.toString()?null===w||void 0===w||w.send("wallet_switchEthereumChain",[{chainId:"0x1"},y]):e===n.a_.KOVAN.toString()?null===w||void 0===w||w.send("wallet_switchEthereumChain",[{chainId:"0x2A"},y]):null===w||void 0===w||w.send("wallet_addEthereumChain",[t,y])},children:[(0,b.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,b.jsx)(g(),{src:c.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,b.jsx)(o.Z,{variant:"sm",weight:700,className:"text-white",children:c.z[e]})]},t)))})]})});return h?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.Z.Controlled,{isOpen:!!y&&!(null!==(t=l.Z[v])&&void 0!==t&&t.includes(m)),onDismiss:()=>null,transparent:!0,children:_}),s]}):y&&!l.Z[v].includes(m)?_:(0,b.jsx)(b.Fragment,{children:s})};t.Z=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?t=>{let{children:s}=t;return(0,b.jsx)(x,{feature:e,children:s})}:t=>{let{children:s}=t;return(0,b.jsx)(x,{feature:e,asModal:!1,children:s})}}},45369:function(e,t,s){s.d(t,{Z:function(){return u}});var r=s(67294),n=s(980),a=s(1901),i=s(84706),o=s(2886),l=s(44554),c=s(54907);function u(e){const t=(0,r.useMemo)((()=>e?(0,a.y)(e):void 0),[e]),s=function(e){var t,s,n;const a=(0,r.useMemo)((()=>{if(!e)return[void 0];try{return e?[(0,i.VM)(e)]:[void 0]}catch(t){return[void 0]}}),[e]),u=(0,c.zb)(!1),d=(0,o.Wk)(u,"resolver",a),m=null===(t=d.result)||void 0===t?void 0:t[0],p=(0,c.uU)(m&&(0,l.Fr)(m)?void 0:m,!1),h=(0,o.Wk)(p,"contenthash",a);return{contenthash:null!==(s=null===(n=h.result)||void 0===n?void 0:n[0])&&void 0!==s?s:null,loading:d.loading||h.loading}}(null===t||void 0===t?void 0:t.ensName);return(0,r.useMemo)((()=>t?s.contenthash?(0,n.ie)((0,n.il)(s.contenthash)):[]:e?(0,n.ie)(e):[]),[t,s.contenthash,e])}},22680:function(e,t,s){s.d(t,{A9:function(){return m},CV:function(){return d}});var r=s(93688),n=s(72457),a=s(8578),i=s(23573),o=s(52907),l=s(76844),c=s(44554),u=(s(67294),s(85893));const d=e=>{let{children:t,className:s,pattern:a,maxWidth:i="7xl",condensed:o}=e;return(0,u.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,u.jsx)(r.Z,{variant:a}),(0,u.jsx)(n.Z,{maxWidth:i,className:(0,c.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",o&&"py-5",s),children:t})]})},m=e=>{let{children:t,className:s,maxWidth:r="7xl"}=e;return(0,u.jsx)(o.Z,{children:(0,u.jsx)(n.Z,{maxWidth:r,className:(0,c.AK)("flex flex-col gap-10 z-[1] p-6 lg:py-10 mx-auto",s),children:t})})};t.ZP=e=>{let{children:t=[]}=e;return(0,u.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,u.jsx)(i.Z,{}),(0,u.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,u.jsx)("div",{className:"flex flex-col flex-grow w-full",children:t}),(0,u.jsx)(l.Z,{})]}),(0,u.jsx)(a.Z,{})]})}},40169:function(e,t,s){var r=s(67294);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}))}));t.Z=n}}]);