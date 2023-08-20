(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7882,4654],{27801:function(e,t,r){"use strict";var n=r(59499),i=r(78980),o=r(44554),a=r(94633),s=(r(67294),r(17141)),l=r(41626),c=r(56785),d=r(85893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const h=e=>{let{header:t,items:r,footer:n,className:i=""}=e;return(0,d.jsxs)("div",{className:(0,o.AK)(i,"flex flex-col"),children:[t&&(0,d.jsx)("div",{className:"overflow-hidden border rounded-t border-dark-700",children:t}),r&&(0,d.jsx)("div",{className:(0,o.AK)(t?"":"border-t rounded-t",n?"bg-dark-800":"border-b rounded-b bg-dark-900","border-l border-r border-dark-700 divide-y divide-dark-700 overflow-hidden"),children:r}),n&&(0,d.jsx)("div",{className:"overflow-hidden border rounded-b bg-dark-900 border-dark-700",children:n})]})},v=e=>{let{left:t,right:r,className:n}=e;return(0,d.jsxs)("div",{className:(0,o.AK)(n,"flex grid items-center grid-cols-2 gap-2 px-3 py-3 lg:px-4 border-dark-700"),children:[t,r]})};h.Header=e=>{let{title:t,value:r,subValue:n,className:i="",id:a}=e;return(0,d.jsxs)("div",{id:a,className:(0,o.AK)(i,"flex flex-row justify-between px-4 py-[10px] items-center"),children:[(0,d.jsx)(c.Z,{variant:"lg",className:"text-high-emphesis",weight:700,children:t}),(r||n)&&(0,d.jsxs)("div",{className:"flex flex-col text-right",children:[r&&(0,d.jsx)(c.Z,{className:"text-high-emphesis",weight:700,children:r}),n&&(0,d.jsx)(c.Z,{className:"text-secondary",variant:"xxs",weight:700,children:n})]})]})},v.Left=e=>{let{amount:t,size:r,hideCurrencyLogo:n,startAdornment:o}=e;return(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 lg:gap-3 items-center",children:[o&&o,!n&&(0,d.jsx)(l.X,{currency:null===t||void 0===t?void 0:t.currency,size:20,className:"rounded-full"}),(0,d.jsxs)(c.Z,{variant:r||"sm",className:"text-high-emphesis",weight:700,children:[null!==t&&void 0!==t&&t.greaterThan(i.xE)?null===t||void 0===t?void 0:t.toSignificant(6):"0.00"," ",null===t||void 0===t?void 0:t.currency.symbol]})]})},v.Right=e=>{let{children:t}=e;return(0,d.jsx)(c.Z,{variant:"xs",weight:400,className:"text-right",children:t})},h.Item=v,h.CurrencyAmountItem=e=>{let{amount:t,weight:r,displayTokenAmount:n=!1,id:u="",hideIfZero:v=!0,hideCurrencyLogo:p,hideUSDC:x=!1,size:f,className:g}=e;const j=(0,a.or)(x?void 0:null!==t&&void 0!==t&&t.equalTo(i.xE)?i.ih.fromRawAmount(null===t||void 0===t?void 0:t.currency,"1"):t);return n?(0,d.jsxs)("div",{id:u,className:(0,o.AK)(v&&null!==t&&void 0!==t&&t.equalTo(i.xE)?"hidden":"","flex grid items-center grid-cols-3 gap-2 px-3 py-3 lg:px-4 border-dark-700",g),children:[(0,d.jsxs)("div",{className:"flex items-center gap-3 -ml-1",children:[!p&&(0,d.jsx)(l.X,{currency:null===t||void 0===t?void 0:t.currency,size:30,className:"rounded-full"}),(0,d.jsx)(c.Z,{className:"text-high-emphesis",weight:700,variant:f||"base",children:null===t||void 0===t?void 0:t.currency.symbol})]}),(0,d.jsx)(c.Z,{className:"text-right text-high-emphesis",weight:700,children:(0,o.uf)(null===t||void 0===t?void 0:t.toSignificant(6))}),!x&&(0,d.jsx)(c.Z,{className:"text-right",variant:"sm",children:(0,o.uf)(null===j||void 0===j?void 0:j.toSignificant(6),!0,!1,6)})]}):(0,d.jsx)("div",{id:"".concat(u),className:v&&null!==t&&void 0!==t&&t.equalTo(i.xE)?"hidden":"",children:(0,d.jsx)(h.Item,{className:g,left:(0,d.jsx)(h.Item.Left,m({size:f,hideCurrencyLogo:p,amount:t},r&&{startAdornment:(0,d.jsx)(s.Z,{color:"default",label:r,size:"sm"})})),right:!x&&(0,d.jsxs)(h.Item.Right,{children:["$",j?null===j||void 0===j?void 0:j.toFixed(2):"0.00"]})},0)})},h.Footer=e=>{let{title:t,value:r}=e;return(0,d.jsxs)("div",{className:"flex flex-row items-center justify-between px-4 py-2",children:[(0,d.jsx)(c.Z,{variant:"xs",weight:400,className:"text-high-emphesis",children:t}),r&&(0,d.jsx)(c.Z,{className:"text-high-emphesis",variant:"sm",weight:700,children:r})]})},t.Z=h},64958:function(e,t,r){"use strict";var n=r(59499),i=r(4730),o=r(41664),a=r.n(o),s=r(11163),l=r(67294),c=r(85893);const d=["children","exact","activeClassName"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=e=>{let{children:t,exact:r=!1,activeClassName:n="text-high-emphesis"}=e,o=(0,i.Z)(e,d);const{asPath:u,pathname:h,route:v,query:p,basePath:x}=(0,s.useRouter)(),f=l.Children.only(t),g=f.props.className||"",j=(r?(o.as||o.href.pathname||o.href)===u:u.startsWith(o.as||o.href.pathname||o.href))?"".concat(g," ").concat(n).trim():g;return(0,c.jsx)(a(),m(m({href:o.href},o),{},{children:l.cloneElement(f,{className:j||null})}))}},90560:function(e,t,r){"use strict";var n=r(49501),i=r(97448),o=r(71862),a=r(46430),s=r(56785),l=r(38239),c=r(25183),d=r(44554),u=r(69137),m=r(12614),h=r(49552),v=r.n(h),p=r(67294),x=r(85893);t.Z=()=>{const{i18n:e}=(0,n.mV)(),{chainId:t}=(0,m.aQ)(),{pending:r}=(0,c.Z)(),{approve:h,approvalState:f}=(0,u.ZP)(t?i.A2[t]:void 0,{}),{0:g,1:j}=(0,p.useState)(),y=r.totalOrders>0&&f===u.kG.NOT_APPROVED&&!v().get("disableLimitOrderGuard")&&"undefined"!==typeof g&&!g;return t&&!(0,d.vR)(l.L.LIMIT_ORDERS,t)?(0,x.jsx)(x.Fragment,{}):(0,x.jsx)(a.Z.Controlled,{isOpen:y,onDismiss:()=>j(!0),maxWidth:"sm",children:(0,x.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,x.jsx)(a.Z.Header,{header:e._(e._("Approve Master Contract")),onClose:()=>j(!0)}),(0,x.jsx)(a.Z.BorderedContent,{className:"bg-dark-1000/40",children:(0,x.jsx)(s.Z,{variant:"sm",children:e._(e._("It seems like you have open orders while the limit order master contract is not approved. Please make\nsure you approved the limit order master contract or the order will not execute"))})}),(0,x.jsxs)("div",{className:"flex justify-end gap-6",children:[(0,x.jsx)(o.ZP,{color:"blue",size:"sm",variant:"empty",onClick:()=>v().set("disableLimitOrderGuard",!0),children:e._(e._("Do not show again"))}),(0,x.jsx)(o.ZP,{loading:f===u.kG.PENDING,color:"blue",size:"sm",onClick:h,children:e._(e._("Approve"))})]})]})})}},87433:function(e,t,r){"use strict";var n=r(49501),i=r(78980),o=r(46430),a=r(64958),s=r(56785),l=r(87269),c=r(10552),d=r(90662),u=r(12614),m=r(49552),h=r.n(m),v=r(25675),p=r.n(v),x=r(67294),f=r(85893);const g=e=>{var t;let{children:r,feature:m,asModal:v=!0}=e;const{i18n:g}=(0,n.mV)(),{chainId:j,library:y,account:w}=(0,u.aQ)(),b=(0,f.jsx)(a.Z,{href:"/swap",children:(0,f.jsx)("a",{className:"text-blue focus:outline-none",children:g._(g._("home page"))})}),N=Object.entries(l.Z).reduce(((e,t)=>{let[r,n]=t;return n.includes(m)&&e.push(r),e}),[]),O=(0,f.jsx)("div",{className:"flex justify-center lg:mt-[200px]",children:(0,f.jsxs)("div",{className:"flex flex-col gap-5 justify-center p-4 mt-10 lg:mt-0",children:[(0,f.jsx)(s.Z,{variant:"h1",className:"max-w-2xl text-white text-center",weight:700,children:g._(g._("This feature is not yet supported on the {0} network",{0:c.z[j]}))}),(0,f.jsxs)(s.Z,{className:"text-center max-w-[248px] mx-auto",children:[(0,f.jsx)(n.cC,{id:"Either return to the {link}",values:{link:b},components:x.Fragment})," ",g._(g._("or change to an available network"))]}),(0,f.jsx)(s.Z,{variant:"sm",className:"uppercase text-center tracking-[.2rem] mt-10 mb-5",weight:700,children:g._(g._("Available Networks"))}),(0,f.jsx)("div",{className:"grid grid-cols-[repeat(2,_100px)] md:grid-cols-[repeat(4,_100px)] gap-y-10 justify-center",children:N.map(((e,t)=>(0,f.jsxs)("button",{className:"text-primary hover:text-white flex items-center flex-col gap-2 justify-center",onClick:()=>{const t=d.b[e];h().set("chainId",e),e===i.a_.ETHEREUM.toString()?null===y||void 0===y||y.send("wallet_switchEthereumChain",[{chainId:"0x1"},w]):e===i.a_.KOVAN.toString()?null===y||void 0===y||y.send("wallet_switchEthereumChain",[{chainId:"0x2A"},w]):null===y||void 0===y||y.send("wallet_addEthereumChain",[t,w])},children:[(0,f.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,f.jsx)(p(),{src:c.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,f.jsx)(s.Z,{variant:"sm",weight:700,className:"text-white",children:c.z[e]})]},t)))})]})});return v?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z.Controlled,{isOpen:!!w&&!(null!==(t=l.Z[j])&&void 0!==t&&t.includes(m)),onDismiss:()=>null,transparent:!0,children:O}),r]}):w&&!l.Z[j].includes(m)?O:(0,f.jsx)(f.Fragment,{children:r})};t.Z=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?t=>{let{children:r}=t;return(0,f.jsx)(g,{feature:e,children:r})}:t=>{let{children:r}=t;return(0,f.jsx)(g,{feature:e,asModal:!1,children:r})}}},46472:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(84853),i=r(30526),o=r(29325);function a(e){const t=(0,n.UJ)(e),r=(0,o.Z)(t||void 0),a=(0,i.Z)(e);return{loading:r.loading||a.loading,address:t||a.address,name:r.ENSName?r.ENSName:!t&&a.address&&e||null}}},30526:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(84706),i=r(2886),o=r(67294),a=r(44554),s=r(54907),l=r(96107);function c(e){var t,r,c;const d=(0,l.Z)(e,200),u=(0,o.useMemo)((()=>{if(!d)return[void 0];try{return d?[(0,n.VM)(d)]:[void 0]}catch(e){return[void 0]}}),[d]),m=(0,s.zb)(!1),h=(0,i.Wk)(m,"resolver",u),v=null===(t=h.result)||void 0===t?void 0:t[0],p=(0,s.uU)(v&&!(0,a.Fr)(v)?v:void 0,!1),x=(0,i.Wk)(p,"addr",u),f=d!==e;return{address:f?null:null!==(r=null===(c=x.result)||void 0===c?void 0:c[0])&&void 0!==r?r:null,loading:f||h.loading||x.loading}}},9557:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(80129),i=r(67294);function o(){const e=location.search;return(0,i.useMemo)((()=>e&&e.length>1?(0,n.parse)(e,{parseArrays:!1,ignoreQueryPrefix:!0}):{}),[e])}},94633:function(e,t,r){"use strict";r.d(t,{Gj:function(){return d},SA:function(){return s},ZP:function(){return l},or:function(){return c}});var n=r(78980),i=r(84329),o=r(12614),a=r(67294);function s(e){const{chainId:t}=(0,o.aQ)(),r=t&&n.qY[t]?n.ih.fromRawAmount(n.qY[t],0).currency:void 0,{data:s}=(0,i.k$)({chainId:t}),l=(0,i.rU)({chainId:t,variables:{where:{id_in:null===e||void 0===e?void 0:e.map((e=>e.wrapped.address.toLowerCase()))}},shouldFetch:e&&(null===e||void 0===e?void 0:e.length)>0}),{data:c}=(0,i.EO)({chainId:t,variables:{where:{id_in:null===e||void 0===e?void 0:e.map((e=>e.wrapped.address.toLowerCase()))}},shouldFetch:e&&(null===e||void 0===e?void 0:e.length)>0});return(0,a.useMemo)((()=>{if(!e||0===e.length||!r||!l&&!c)return;const t={};return e.map((e=>{let i;const o=null===l||void 0===l?void 0:l.find((t=>t.id===e.wrapped.address.toLowerCase())),a=null===c||void 0===c?void 0:c.find((t=>t.id===e.wrapped.address.toLowerCase()));if(null!==e&&void 0!==e&&e.wrapped.equals(r))t[e.wrapped.address]=new n.tA(r,r,"1","1");else if(o&&a?i=o.liquidity>a.kpi.liquidity?s*o.derivedETH:a.price.derivedUSD:s&&o?i=s*o.derivedETH:a&&(i=a.price.derivedUSD),void 0!==i&&0!==i){var d,u,m;const o=10**(null!==(d=null===(u=String(i).split("."))||void 0===u||null===(m=u[1])||void 0===m?void 0:m.length)&&void 0!==d?d:0),a=Math.floor(i*o);try{t[e.wrapped.address]=new n.tA(e,r,o*10**e.decimals/10**r.decimals,a)}catch{}}})),t}),[e,r,l,c,s])}function l(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=s(e?[e]:void 0,t);return r?Object.values(r)[0]:void 0}function c(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=l(null===e||void 0===e?void 0:e.currency,t);return(0,a.useMemo)((()=>{if(!r||!e)return null;try{return r.quote(e)}catch(t){return null}}),[e,r])}function d(e){const t=l(null===e||void 0===e?void 0:e.currency);return(0,a.useMemo)((()=>{if(!t||!e)return{value:void 0,loading:!1};try{return{value:t.quote(e),loading:!1}}catch(r){return{value:void 0,loading:!1}}}),[e,t])}},7582:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(10915);function i(){return!(0,n.Z)()}},80759:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ce}});var n=r(59499),i=r(67484),o=r(49501),a=r(78980),s=r(99140),l=r(15205),c=r(56785),d=r(38239),u=r(90560),m=r(97448),h=r(71862),v=r(25183),p=r(44554),x=r(53389),f=r(61647),g=r(12614),j=r(90849),y=r(16339),w=r(60118),b=r(8694),N=r(62483),O=r(15423),_=r(46472),Z=(r(9557),r(56388)),P=r(627),C=r(67294),k=r(25617),A=r(73165);function S(){return(0,k.v9)(A.SX)}const T=()=>{var e,t;const{chainId:r}=(0,g.aQ)(),{inputCurrencyId:n,outputCurrencyId:i}=S(),o=null!==(e=(0,N.U8)("SUSHI"===n?a.He[r||1]:n))&&void 0!==e?e:void 0,s=null!==(t=(0,N.U8)("SUSHI"===i?a.He[r||1]:i))&&void 0!==t?t:void 0;return(0,C.useMemo)((()=>({inputCurrency:o,outputCurrency:s})),[o,s])},E=()=>{const{limitPrice:e,invertRate:t}=S(),{inputCurrency:r,outputCurrency:n}=T();return(0,C.useMemo)((()=>{const i=(0,p.eo)(t?e:"1",r),o=(0,p.eo)(t?"1":e,n);return i&&o&&r&&n?new a.tA({baseAmount:i,quoteAmount:o}):void 0}),[r,t,e,n])},I=()=>{const{typedField:e}=S(),{inputCurrency:t,outputCurrency:r}=T(),n=(()=>{const{inputCurrency:e,outputCurrency:t}=T(),{typedField:r,typedValue:n}=S();return(0,C.useMemo)((()=>{var i;const o=r===w.gN.INPUT;return(0,p.eo)(n,null!==(i=o?e:t)&&void 0!==i?i:void 0)}),[e,t,r,n])})(),[i]=(0,P.RO)(),o=e===w.gN.INPUT,s=t?n||a.ih.fromRawAmount(t,a.QA.exponentiate(a.QA.BigInt(10),a.QA.BigInt(t.decimals))):void 0,l=(0,Z.w)(o?s:void 0,null!==r&&void 0!==r?r:void 0,{maxHops:i?1:void 0}),c=(0,Z.k)(null!==t&&void 0!==t?t:void 0,o?void 0:s,{maxHops:i?1:void 0});return(0,C.useMemo)((()=>{var e;return null!==(e=o?l:c)&&void 0!==e?e:void 0}),[l,c,o])};var D=T,M=r(68411),R=r(2593);var U=()=>{const{account:e,chainId:t,library:r}=(0,g.aQ)(),{inputCurrency:n}=T(),{rebase:i}=(0,f.C)(n),o=(0,y.T)(),a=(0,x.rO)(),s=(0,x.wq)(),l=(0,M.h7)(),c=t?m.A2[t]:void 0,d=(0,j.i$)(),{mutate:u}=(0,v.Z)(),{deposit:h}=(0,x.x7)(c),b=(0,C.useCallback)((async t=>{let{inputAmount:r,bentoPermit:n}=t;const{v:i,r:a,s:d}=n,u=r.quotient.toString();try{const t=await(null===s||void 0===s?void 0:s.estimateGas.depositAndApprove(e,c,!0,i,a,d,{value:u}));if(t){o((0,w.fM)(!0));const n=await(null===s||void 0===s?void 0:s.depositAndApprove(e,c,!0,i,a,d,{value:u,gasLimit:(0,p.Wt)(t)}));return await n.wait(),l(n,{summary:"Approve limit orders and Deposit ".concat(r.currency.symbol," into BentoBox")}),o((0,w.fM)(!1)),o((0,w.Oi)(void 0)),n}}catch(m){o((0,w.fM)(!1)),console.error(m)}}),[e,l,o,c,s]);return{deposit:(0,C.useCallback)((async e=>{let{inputAmount:t,bentoPermit:r,fromBentoBalance:n}=e;if(!a||!c||!t)throw new Error("Dependencies unavailable");const s=R.O$.from(t.quotient.toString());if(t.currency.isNative&&r)return b({inputAmount:t,bentoPermit:r});if(!n)try{if(!i)return void console.error("Dependencies unavailable");o((0,w.fM)(!0));const e=await h(t.currency,i,s,r);return o((0,w.fM)(!1)),o((0,w.Oi)(void 0)),e}catch(l){o((0,w.fM)(!1))}}),[h,a,b,o,c,i]),execute:(0,C.useCallback)((async n=>{let{orderExpiration:i,inputAmount:a,outputAmount:s,recipient:l}=n;if(!a||!s||!e||!r)throw new Error("Dependencies unavailable");const c=(e=>{switch(e){case A.FJ.hour:return Math.floor((new Date).getTime()/1e3)+3600;case A.FJ.day:return Math.floor((new Date).getTime()/1e3)+86400;case A.FJ.week:return Math.floor((new Date).getTime()/1e3)+604800;case A.FJ.never:default:return Number.MAX_SAFE_INTEGER}})(i),h=new m.eN(e,a.wrapped,s.wrapped,l||e,Math.floor((new Date).getTime()/1e3).toString(),c.toString());try{o((0,w.fM)(!0)),await(null===h||void 0===h?void 0:h.signOrderWithProvider(t||1,r));(await(null===h||void 0===h?void 0:h.send())).success&&(d({txn:{hash:"",summary:"Limit order created",success:!0}}),await u(),o((0,w.ZH)())),o((0,w.fM)(!1))}catch(x){var v,p;o((0,w.fM)(!1)),d({txn:{hash:"",summary:"Error: ".concat(null===x||void 0===x||null===(v=x.response)||void 0===v||null===(p=v.data)||void 0===p?void 0:p.data),success:!1}})}}),[e,d,t,o,r,u])}},B=r(49932),F=r(85893);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=e=>{let{trade:t,parsedAmounts:r}=e;const{i18n:n}=(0,o.mV)(),{chainId:i}=(0,g.aQ)(),s=(0,y.T)(),{fromBentoBalance:l,bentoPermit:d,attemptingTxn:u,recipient:v}=S(),{address:f}=(0,_.Z)(v),j=(e=>{let{trade:t}=e;const{recipient:r,orderExpiration:n,fromBentoBalance:i,limitPrice:o,typedValue:s}=S(),{account:l}=(0,g.aQ)(),{inputCurrency:c,outputCurrency:d}=T(),u=(0,_.Z)(r),m=r?u.address:l,h=E(),v=(0,O.C)(null!==l&&void 0!==l?l:void 0,c,!i),[x]=(0,P.DG)();return(0,C.useMemo)((()=>l?null!==t&&void 0!==t&&t.inputAmount.greaterThan(a.xE)&&s?c&&d?m&&(0,p.UJ)(m)?o!==w.gx.CURRENT&&null!==h&&void 0!==h&&h.equalTo(a.xE)?b.ag._(b.ag._("Select a rate")):n?v?!x&&v&&null!==t&&void 0!==t&&t.inputAmount&&v.lessThan(t.inputAmount)?b.ag._(b.ag._("Insufficient Balance")):"":b.ag._(b.ag._("Loading balance")):b.ag._(b.ag._("Select an order expiration")):b.ag._(b.ag._("Enter a valid recipient address")):b.ag._(b.ag._("Select a token")):b.ag._(b.ag._("Enter an amount")):"Connect Wallet"),[l,v,x,c,o,n,d,h,m,null===t||void 0===t?void 0:t.inputAmount,s])})({trade:t}),{deposit:N}=U(),Z=(0,x.rO)(),k=i?m.A2[i]:void 0,{0:A,1:I}=(0,C.useState)(!1),D=(0,C.useCallback)((async e=>{const t=await N(e);null!==t&&void 0!==t&&t.hash&&s((0,w.vV)(!0))}),[N,s]),M=(0,C.useCallback)((async()=>{null!==r&&void 0!==r&&r.inputAmount&&(l?s((0,w.nO)(!0)):await D({inputAmount:null===r||void 0===r?void 0:r.inputAmount,bentoPermit:d,fromBentoBalance:l}))}),[D,d,s,l,null===r||void 0===r?void 0:r.inputAmount]);return(0,F.jsxs)(F.Fragment,{children:[A&&(0,F.jsx)(c.Z,{variant:"sm",className:"p-4 text-center border rounded border-yellow/40 text-yellow",children:n._(n._("Something went wrong during signing of the approval. This is expected for hardware wallets, such as Trezor and Ledger. Click 'Approve BentoBox' again for approving using the fallback method"))}),(0,F.jsx)(B.Z,H(H({inputAmounts:[null===t||void 0===t?void 0:t.inputAmount],tokenApproveOn:null===Z||void 0===Z?void 0:Z.address,masterContractAddress:k},l?{withPermit:!1}:{withPermit:!0,permit:d,onPermit:e=>s((0,w.Oi)(e)),onPermitError:()=>I(!0)}),{},{children:e=>{let{approved:t,loading:r}=e;const i=!!j||!t||r||u||Boolean(v&&!f&&j);return(0,F.jsx)(h.ZP,{loading:r||u,color:"gradient",disabled:i,onClick:M,className:"rounded-2xl md:rounded",children:j||(l?n._(n._("Review Limit Order")):n._(n._("Confirm Deposit")))})}}))]})},V=r(52358),z=r(27801),G=r(70028),J=r(15503);var Q=e=>{let{parsedAmounts:t,trade:r,limitPrice:n}=e;const{0:i,1:s}=(0,C.useState)(!1),{showReview:l,orderExpiration:d,recipient:u,attemptingTxn:m}=S(),v=(0,y.T)(),{i18n:x}=(0,o.mV)(),{execute:f}=U(),g=(0,C.useCallback)((()=>{null!==t&&void 0!==t&&t.inputAmount&&null!==t&&void 0!==t&&t.outputAmount&&f({orderExpiration:d.value,recipient:u,outputAmount:t.outputAmount,inputAmount:t.inputAmount})}),[f,d.value,t.inputAmount,t.outputAmount,u]),j=(0,C.useMemo)((()=>{if(n&&r){const{numerator:e,denominator:t}=n.subtract(r.executionPrice).divide(r.executionPrice);return new a.gG(e,t)}}),[n,r]);return(0,F.jsx)(G.S.Controlled,{isOpen:l,onDismiss:()=>v((0,w.nO)(!1)),maxWidth:"sm",children:(0,F.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,F.jsx)(G.S.Header,{header:x._(x._("Confirm order")),onClose:()=>v((0,w.nO)(!1))}),(0,F.jsxs)(G.S.BorderedContent,{className:"flex flex-col gap-2 bg-dark-1000/40",children:[(0,F.jsx)(c.Z,{weight:700,variant:"sm",className:"text-secondary",children:x._(x._("You'll pay"))}),(0,F.jsx)(z.Z,{items:[(0,F.jsx)(z.Z.CurrencyAmountItem,{amount:null===t||void 0===t?void 0:t.inputAmount},0)]}),(0,F.jsx)("div",{className:"flex justify-center mt-2 -mb-2",children:(0,F.jsx)(V.Z,{width:14,className:"text-secondary"})}),(0,F.jsx)(c.Z,{weight:700,variant:"sm",className:"justify-end text-secondary",children:x._(x._("You'll receive"))}),(0,F.jsx)(z.Z,{items:[(0,F.jsx)(z.Z.CurrencyAmountItem,{amount:null===t||void 0===t?void 0:t.outputAmount},0)]})]}),(0,F.jsxs)(G.S.BorderedContent,{className:"flex flex-col gap-1 !py-1 bg-dark-1000/40 divide-y divide-dark-900",children:[u&&(0,F.jsxs)("div",{className:"flex justify-between py-2",children:[(0,F.jsx)(c.Z,{variant:"sm",weight:700,children:x._(x._("Recipient"))}),(0,F.jsx)(c.Z,{variant:"sm",weight:700,children:(0,p.UJ)(u)&&(0,p.Xn)(u)})]}),(0,F.jsxs)("div",{className:"flex justify-between py-2",children:[(0,F.jsx)(c.Z,{variant:"sm",weight:700,children:x._(x._("Expiration"))}),(0,F.jsx)(c.Z,{variant:"sm",weight:700,children:d.label})]}),(0,F.jsxs)("div",{className:"flex flex-col gap-1 py-2",children:[(0,F.jsxs)("div",{className:"flex justify-between",children:[(0,F.jsx)(c.Z,{variant:"sm",weight:700,children:x._(x._("Rate"))}),(0,F.jsx)(J.Z,{price:n,showInverted:i,setShowInverted:s,className:"justify-end text-primary"})]}),j&&(0,F.jsx)("div",{className:"flex justify-end",children:(0,F.jsxs)(c.Z,{variant:"xs",weight:700,className:null!==j&&void 0!==j&&j.greaterThan(a.xE)?"text-green":"text-red",children:[j.toSignificant(2),"% ",null!==j&&void 0!==j&&j.greaterThan(a.xE)?"above":"below"," market rate"]})})]})]}),(0,F.jsx)(c.Z,{variant:"xs",className:"text-center text-secondary",children:x._(x._("Please note that after order execution, your tokens will be received in your BentoBox"))}),(0,F.jsx)(h.ZP,{loading:m,color:"gradient",disabled:m,onClick:g,children:x._(x._("Create Limit Order"))})]})})},W=r(39281);var K=e=>{let{trade:t,limitPrice:r}=e;const{i18n:n}=(0,o.mV)(),i=(0,y.T)(),{limitPrice:a,invertRate:s}=S(),{inputCurrency:l,outputCurrency:d}=D(),u=!l||!d;return(0,F.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,F.jsx)(c.Z,{variant:"sm",className:"px-2",children:n._(n._("Rate"))}),(0,F.jsxs)("div",{className:"flex justify-between items-baseline bg-dark-900 rounded px-4 py-1.5 border border-dark-700 hover:border-dark-600",children:[(0,F.jsx)(c.Z,{weight:700,variant:"lg",className:"relative flex items-baseline flex-grow gap-3 overflow-hidden",children:(0,F.jsx)(W.Z.Numeric,{disabled:u,className:"leading-[32px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed",placeholder:t?t.executionPrice.toSignificant(6):"0.0",id:"limit-price-input",value:(a===w.gx.CURRENT?null===t||void 0===t?void 0:t.executionPrice.toSignificant(6):a)||"",onUserInput:e=>i((0,w.GJ)(e))})}),(0,F.jsx)(c.Z,{variant:"sm",onClick:()=>i((0,w.We)({invertRate:!s,limitPrice:r?s?null===r||void 0===r?void 0:r.toSignificant(6):null===r||void 0===r?void 0:r.invert().toSignificant(6):""})),children:s?null===l||void 0===l?void 0:l.symbol:null===d||void 0===d?void 0:d.symbol})]})]})},X=r(56727),Y=r(13342),$=r(54962);var ee=()=>{const{i18n:e}=(0,o.mV)(),t=(0,y.T)(),{orderExpiration:r}=S(),n=(0,C.useMemo)((()=>({[A.FJ.never]:e._(e._("Never")),[A.FJ.hour]:e._(e._("1 Hour")),[A.FJ.day]:e._(e._("24 Hours")),[A.FJ.week]:e._(e._("1 Week")),[A.FJ.month]:e._(e._("30 Days"))})),[e]),i=(0,C.useCallback)(((e,r)=>{t((0,w.tn)({label:n[r],value:r}))}),[t,n]);return(0,F.jsxs)("div",{className:"flex flex-col flex-grow gap-1",children:[(0,F.jsxs)(c.Z,{variant:"sm",className:"flex items-center px-2",children:[e._(e._("Expires in")),(0,F.jsx)($.Z,{text:e._(e._("Expiration is the time at which the order will become invalid"))})]}),(0,F.jsx)("div",{className:"flex items-center justify-between h-full px-4 py-2 border rounded bg-dark-900 border-dark-700 hover:border-dark-600",children:(0,F.jsxs)(X.v2,{as:"div",className:"relative inline-block w-full text-left",children:[(0,F.jsx)(X.v2.Button,{className:"w-full",children:(0,F.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,F.jsx)(c.Z,{weight:700,variant:"sm",children:r.label}),(0,F.jsx)(Y.Z,{className:"w-5 h-5 ml-2 -mr-1","aria-hidden":"true"})]})}),(0,F.jsx)(X.uT,{as:C.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,F.jsx)(X.v2.Items,{static:!0,className:"absolute z-10 w-full mt-2 overflow-auto border rounded shadow-lg bg-dark-900 border-dark-700 hover:border-dark-600",children:Object.entries(n).map((e=>{let[t,r]=e;return(0,F.jsx)(X.v2.Item,{onClick:e=>i(e,t),children:e=>{let{active:t}=e;return(0,F.jsx)(c.Z,{variant:"sm",weight:700,className:(0,p.AK)(t?"text-white":"text-primary","px-3 py-2 cursor-pointer hover:bg-dark-900/40"),children:r})}},t)}))})})]})})]})},te=r(59497),re=r(92088),ne=r(87433),ie=r(73179),oe=r(2962);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const le=()=>{var e,t;const{i18n:r}=(0,o.mV)(),n=(0,y.T)(),{chainId:m}=(0,g.aQ)(),[h]=(0,P.DG)(),{typedField:v,typedValue:x,fromBentoBalance:f,recipient:j}=S(),{inputCurrency:b,outputCurrency:N}=D(),O=I(),_=E(),Z=(e=>{let{rate:t,trade:r}=e;const{inputCurrency:n,outputCurrency:i}=T(),{typedField:o,typedValue:a}=S();return(0,C.useMemo)((()=>{const e=t||(null===r||void 0===r?void 0:r.executionPrice),s=o===w.gN.INPUT,l=s?n:i,c=(0,p.eo)(a,null!==l&&void 0!==l?l:void 0),d=n&&i&&e&&c?s?e.quote(c):e.invert().quote(c):void 0;return{inputAmount:s?c:d,outputAmount:s?d:c}}),[n,i,t,null===r||void 0===r?void 0:r.executionPrice,o,a])})({rate:_,trade:O}),{onSwitchTokens:k,onCurrencySelection:A,onUserInput:M}=function(){const e=(0,y.T)(),t=(0,C.useCallback)(((t,r)=>{e((0,w.j)({field:t,currencyId:r.isToken?r.address:r.isNative?"ETH":""}))}),[e]),r=(0,C.useCallback)((()=>{e((0,w.KS)())}),[e]),n=(0,C.useCallback)(((t,r)=>{e((0,w.LC)({field:t,typedValue:r}))}),[e]),i=(0,C.useCallback)((t=>{e((0,w.He)(t))}),[e]);return(0,C.useMemo)((()=>({onSwitchTokens:r,onCurrencySelection:t,onUserInput:n,onChangeRecipient:i})),[i,t,r,n])}(),R=(0,C.useMemo)((()=>(s.X[m||1]||[]).map((e=>{let[t,r]=e;return[t.address,r.address]}))),[m]),U=(0,C.useMemo)((()=>{if(_&&O){const{numerator:e,denominator:t}=_.subtract(O.executionPrice).divide(O.executionPrice).multiply(-1);return new a.gG(e,t)}}),[_,O]),B=(0,C.useMemo)((()=>0===R.length?[]:R.reduce(((e,t)=>{let[r,n]=t;return e.push(r),e.push(n),e}),[])),[R]),L=(0,C.useMemo)((()=>0===R.length?[]:b?R.reduce(((e,t)=>{let[r,n]=t;return b.wrapped.address===r&&e.push(n),b.wrapped.address===n&&e.push(r),e}),[]):R.reduce(((e,t)=>{let[r,n]=t;return e.push(r),e.push(n),e}),[])),[b,R]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(oe.PB,{title:"Limit Order"}),(0,F.jsxs)(ie.yz,{children:[(0,F.jsx)(u.Z,{}),(0,F.jsx)("div",{className:"px-2",children:m&&(0,F.jsx)(te.Z,{inputCurrency:b,outputCurrency:N,trident:(0,p.vR)(d.L.TRIDENT,m)})}),(0,F.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,F.jsx)(re.Z,{error:!1,header:re.Z.Header,walletToggle:e=>(0,F.jsx)(re.Z.Switch,se(se({id:"switch-classic-withdraw-from-0}"},e),{},{label:r._(r._("Pay from")),onChange:()=>n((0,w.vV)(!f))})),selected:!0,spendFromWallet:!f,currency:b,value:(v===w.gN.INPUT?x:null===Z||void 0===Z||null===(e=Z.inputAmount)||void 0===e?void 0:e.toSignificant(6))||"",onChange:e=>M(w.gN.INPUT,e||""),onSelect:e=>A(w.gN.INPUT,e),currencies:B}),(0,F.jsxs)("div",{className:"flex gap-3",children:[(0,F.jsx)("div",{className:"flex flex-1",children:(0,F.jsx)(K,{trade:O,limitPrice:_||(null===O||void 0===O?void 0:O.executionPrice)})}),(0,F.jsx)(i.Z,{width:18,className:"mt-6 cursor-pointer text-secondary hover:text-white",onClick:k}),(0,F.jsx)("div",{className:"flex flex-1",children:(0,F.jsx)(ee,{})})]}),(0,F.jsx)(re.Z,{error:!1,header:re.Z.Header,selected:!0,currency:N,value:(v===w.gN.OUTPUT?x:null===Z||void 0===Z||null===(t=Z.outputAmount)||void 0===t?void 0:t.toSignificant(6))||"",onChange:e=>M(w.gN.OUTPUT,e||""),onSelect:e=>A(w.gN.OUTPUT,e),currencies:L,priceImpact:U,priceImpactCss:null!==U&&void 0!==U&&U.greaterThan(a.xE)?"text-green":"text-red"})]}),h&&(0,F.jsx)(l.Z,{recipient:j,action:w.He}),(0,F.jsx)(q,{trade:O,parsedAmounts:Z}),(0,F.jsx)(Q,{parsedAmounts:Z,trade:O,limitPrice:_||(null===O||void 0===O?void 0:O.executionPrice)})]}),(0,F.jsx)(c.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:r._(r._("Limit orders use funds from BentoBox, to create a limit order depositing into BentoBox is required."))}),(0,F.jsxs)(c.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:[(0,F.jsx)(c.Z,{variant:"xs",weight:700,component:"span",children:"Tip"}),":"," ",r._(r._("When expert mode is enabled, balance isn't checked when creating orders. You can use this to chain limit\norders."))]})]})};le.Guard=(0,ne.Z)(d.L.LIMIT_ORDERS),le.Layout=(0,ie.Pf)("limit-order-page");var ce=le},29343:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/limit-order/[[...tokens]]",function(){return r(80759)}])},24654:function(){}},function(e){e.O(0,[8529,2749,8193,6761,129,5719,2892,7032,2144,9658,9469,2392,702,9774,2888,179],(function(){return t=29343,e(e.s=t);var t}));var t=e.O();_N_E=t}]);