"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1365],{93688:function(e,t,r){var n,s=r(13752),a=r(44554),i=r(85893);!function(e){e[e.REPEAT=0]="REPEAT",e[e.SINGLE=1]="SINGLE"}(n||(n={}));const l={"bg-bars":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:n.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};t.Z=e=>{let{variant:t}=e;if(!t)return(0,i.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});const{type:r,url:o}=l[t];return r===n.REPEAT?(0,i.jsx)("div",{className:(0,a.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,i.jsx)("div",{className:(0,a.AK)("absolute inset-0 w-full h-full z-0 opacity-10",t)})}):(0,i.jsx)(s.Z,{alt:"background image",src:o,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},64958:function(e,t,r){var n=r(59499),s=r(4730),a=r(41664),i=r.n(a),l=r(11163),o=r(67294),c=r(85893);const u=["children","exact","activeClassName"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=e=>{let{children:t,exact:r=!1,activeClassName:n="text-high-emphesis"}=e,a=(0,s.Z)(e,u);const{asPath:d,pathname:h,route:m,query:f,basePath:x}=(0,l.useRouter)(),g=o.Children.only(t),v=g.props.className||"",w=(r?(a.as||a.href.pathname||a.href)===d:d.startsWith(a.as||a.href.pathname||a.href))?"".concat(v," ").concat(n).trim():v;return(0,c.jsx)(i(),p(p({href:a.href},a),{},{children:o.cloneElement(g,{className:w||null})}))}},67347:function(e,t,r){r.d(t,{CG:function(){return l},H7:function(){return i},Il:function(){return u},VU:function(){return p},Wb:function(){return o},gc:function(){return c},uE:function(){return d},x:function(){return a}});var n=r(84243),s=r(78980);const a=e=>{let{contract:t,fn:r,args:n}=e;return t.interface.encodeFunctionData(r,n)},i=e=>{let{contract:t,actions:r=[]}=e;const n=r.filter(Boolean);if(0===n.length)throw new Error("No valid actions");return 1===n.length?n[0]:n.length>1?t.interface.encodeFunctionData("multicall",[n]):void 0},l=e=>{let{router:t,address:r,amount:s,recipient:a,receiveToWallet:i,liquidityOutput:l}=e;return t.interface.encodeFunctionData("burnLiquidity",[r,s,n.$.encode(["address","bool"],[a,i]),l])},o=e=>{let{router:t,token:r,address:s,amount:a,recipient:i,receiveToWallet:l,minWithdrawal:o}=e;return t.interface.encodeFunctionData("burnLiquiditySingle",[s,a,n.$.encode(["address","address","bool"],[r,i,l]),o])},c=e=>{let{chainId:t,router:r,recipient:n,amountMinimum:a}=e;return t===s.a_.MATIC?r.interface.encodeFunctionData("unwrapWETH",[a,n]):r.interface.encodeFunctionData("unwrapWETH",[n])},u=e=>{let{router:t,token:r,amount:n,recipient:s}=e;return t.interface.encodeFunctionData("sweepNativeToken",[r,n,s])},d=e=>{let{router:t,signature:r}=e;if(!r)return;const{v:n,r:s,s:a}=r;return t.interface.encodeFunctionData("approveMasterContract",[n,s,a])},p=e=>{let{router:t,signatureData:r}=e;if(!r)return;const{tokenAddress:n,amount:s,deadline:a,v:i,r:l,s:o}=r;return t.interface.encodeFunctionData("selfPermit",[n,s,a,i,l,o])}},87433:function(e,t,r){var n=r(49501),s=r(78980),a=r(46430),i=r(64958),l=r(56785),o=r(87269),c=r(10552),u=r(90662),d=r(12614),p=r(49552),h=r.n(p),m=r(25675),f=r.n(m),x=r(67294),g=r(85893);const v=e=>{var t;let{children:r,feature:p,asModal:m=!0}=e;const{i18n:v}=(0,n.mV)(),{chainId:w,library:b,account:j}=(0,d.aQ)(),y=(0,g.jsx)(i.Z,{href:"/swap",children:(0,g.jsx)("a",{className:"text-blue focus:outline-none",children:v._(v._("home page"))})}),E=Object.entries(o.Z).reduce(((e,t)=>{let[r,n]=t;return n.includes(p)&&e.push(r),e}),[]),N=(0,g.jsx)("div",{className:"flex justify-center lg:mt-[200px]",children:(0,g.jsxs)("div",{className:"flex flex-col gap-5 justify-center p-4 mt-10 lg:mt-0",children:[(0,g.jsx)(l.Z,{variant:"h1",className:"max-w-2xl text-white text-center",weight:700,children:v._(v._("This feature is not yet supported on the {0} network",{0:c.z[w]}))}),(0,g.jsxs)(l.Z,{className:"text-center max-w-[248px] mx-auto",children:[(0,g.jsx)(n.cC,{id:"Either return to the {link}",values:{link:y},components:x.Fragment})," ",v._(v._("or change to an available network"))]}),(0,g.jsx)(l.Z,{variant:"sm",className:"uppercase text-center tracking-[.2rem] mt-10 mb-5",weight:700,children:v._(v._("Available Networks"))}),(0,g.jsx)("div",{className:"grid grid-cols-[repeat(2,_100px)] md:grid-cols-[repeat(4,_100px)] gap-y-10 justify-center",children:E.map(((e,t)=>(0,g.jsxs)("button",{className:"text-primary hover:text-white flex items-center flex-col gap-2 justify-center",onClick:()=>{const t=u.b[e];h().set("chainId",e),e===s.a_.ETHEREUM.toString()?null===b||void 0===b||b.send("wallet_switchEthereumChain",[{chainId:"0x1"},j]):e===s.a_.KOVAN.toString()?null===b||void 0===b||b.send("wallet_switchEthereumChain",[{chainId:"0x2A"},j]):null===b||void 0===b||b.send("wallet_addEthereumChain",[t,j])},children:[(0,g.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,g.jsx)(f(),{src:c.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,g.jsx)(l.Z,{variant:"sm",weight:700,className:"text-white",children:c.z[e]})]},t)))})]})});return m?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Z.Controlled,{isOpen:!!j&&!(null!==(t=o.Z[w])&&void 0!==t&&t.includes(p)),onDismiss:()=>null,transparent:!0,children:N}),r]}):j&&!o.Z[w].includes(p)?N:(0,g.jsx)(g.Fragment,{children:r})};t.Z=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?t=>{let{children:r}=t;return(0,g.jsx)(v,{feature:e,children:r})}:t=>{let{children:r}=t;return(0,g.jsx)(v,{feature:e,asModal:!1,children:r})}}},20290:function(e,t,r){r.d(t,{$k:function(){return d},TD:function(){return p},Z8:function(){return h}});var n=r(8198),s=r(78980),a=r(2187),i=r(38264),l=r(54907),o=r(2886),c=r(67294);const u=new n.vU(a.abi);function d(e){const t=(0,c.useMemo)((()=>{const t=new Map;return e.map((e=>{let[r,n]=e;if(r&&n){let e=r.address,s=n.address;void 0!==e&&void 0!==s&&(e<s?t.set(e+s,[r,n]):t.set(s+e,[n,r]))}})),[...t.values()]}),[e]),r=(0,c.useMemo)((()=>t.map((e=>{let[t,r]=e;return[t.address,r.address]}))),[t]),n=(0,l.mX)(),a=(0,o.es)(n,"poolsCount",r),d=(0,c.useMemo)((()=>a.map(((e,t)=>[t,e.result?parseInt(e.result.count.toString()):0])).filter((e=>{let[t,r]=e;return r})).map((e=>{let[t,n]=e;return[r[t][0],r[t][1],0,n]}))),[a,r]),p=(0,c.useMemo)((()=>a.map(((e,t)=>[t,e.result?parseInt(e.result.count.toString()):0])).filter((e=>{let[t,r]=e;return r})).map((e=>{let[r,n]=e;return[t[r][0],t[r][1]]}))),[a,t]),h=(0,o.es)(n,"getPools",d),m=(0,c.useMemo)((()=>{const e=[];return h.forEach(((t,r)=>{void 0!==t.result&&t.result.pairPools.forEach((t=>e.push({address:t,token0:p[r][0],token1:p[r][1]})))})),e}),[h,p]),f=(0,c.useMemo)((()=>m.map((e=>e.address))),[m]),x=(0,o._Y)(f,u,"getReserves"),g=(0,o._Y)(f,u,"swapFee");return(0,c.useMemo)((()=>m.map(((e,t)=>x[t].valid&&x[t].result&&g[t].valid&&g[t].result?{state:i.tK.EXISTS,pool:new i.Pg(s.ih.fromRawAmount(e.token0,x[t].result._reserve0.toString()),s.ih.fromRawAmount(e.token1,x[t].result._reserve1.toString()),parseInt(g[t].result[0].toString()),0!==x[t].result._blockTimestampLast)}:{state:i.tK.LOADING}))),[m,x,g])}function p(e){const t=(0,l.mX)(),r=(0,c.useMemo)((()=>e.reduce(((e,r)=>{let[n,s,a,l]=r;const o=n&&s&&a&&void 0!==l&&n.chainId===s.chainId&&!n.equals(s)&&null!==t&&void 0!==t&&t.address?(0,i.we)({factoryAddress:t.address,tokenA:n.wrapped,tokenB:s.wrapped,fee:a,twap:l}):void 0;return e.push(o&&!e.includes(o)?o:void 0),e}),[])),[null===t||void 0===t?void 0:t.address,e]),n=(0,o._Y)(r,u,"getReserves");return(0,c.useMemo)((()=>n.map(((t,r)=>{var n,a,l,o;const{result:c,loading:u}=t,d=null===(n=e[r][0])||void 0===n?void 0:n.wrapped,p=null===(a=e[r][1])||void 0===a?void 0:a.wrapped,h=null===(l=e[r])||void 0===l?void 0:l[2],m=null===(o=e[r])||void 0===o?void 0:o[3];if(u)return{state:i.tK.LOADING};if(!c)return{state:i.tK.NOT_EXISTS};if(!d||!p||d.equals(p))return{state:i.tK.INVALID};const{_reserve0:f,_reserve1:x}=c,[g,v]=d.sortsBefore(p)?[d,p]:[p,d];return{state:i.tK.EXISTS,pool:new i.Pg(s.ih.fromRawAmount(g,f.toString()),s.ih.fromRawAmount(v,x.toString()),h,m)}}))),[n,e])}function h(e,t,r,n){return p((0,c.useMemo)((()=>[[e,t,r,n]]),[e,t,r,n]))[0]}},22680:function(e,t,r){r.d(t,{A9:function(){return p},CV:function(){return d}});var n=r(93688),s=r(72457),a=r(8578),i=r(23573),l=r(52907),o=r(76844),c=r(44554),u=(r(67294),r(85893));const d=e=>{let{children:t,className:r,pattern:a,maxWidth:i="7xl",condensed:l}=e;return(0,u.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,u.jsx)(n.Z,{variant:a}),(0,u.jsx)(s.Z,{maxWidth:i,className:(0,c.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",l&&"py-5",r),children:t})]})},p=e=>{let{children:t,className:r,maxWidth:n="7xl"}=e;return(0,u.jsx)(l.Z,{children:(0,u.jsx)(s.Z,{maxWidth:n,className:(0,c.AK)("flex flex-col gap-10 z-[1] p-6 lg:py-10 mx-auto",r),children:t})})};t.ZP=e=>{let{children:t=[]}=e;return(0,u.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,u.jsx)(i.Z,{}),(0,u.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,u.jsx)("div",{className:"flex flex-col flex-grow w-full",children:t}),(0,u.jsx)(o.Z,{})]}),(0,u.jsx)(a.Z,{})]})}},58057:function(e,t,r){var n=r(67294);const s=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=s},94323:function(e,t,r){var n=r(67294);const s=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=s}}]);