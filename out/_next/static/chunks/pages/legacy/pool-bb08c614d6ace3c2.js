(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4159],{278:function(e){e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},17141:function(e,t,r){"use strict";var n=r(68163),i=r(44554),o=r(85893);const a={default:"h-[24px]",sm:"h-5 text-[10px]",lg:"h-12 text-[14px]"},s={filled:{default:"bg-gray-700 text-white",white:"bg-high-emphesis text-dark-700",purple:"bg-purple bg-opacity-25 text-purple",yellow:"bg-yellow bg-opacity-[0.35] text-yellow",blue:"bg-blue bg-opacity-[0.35] text-blue",green:"bg-green bg-opacity-25 text-green",pink:"bg-pink bg-opacity-25 text-pink",red:"bg-red bg-opacity-25 text-red"}};t.Z=e=>{let{label:t,color:r="default",variant:l="filled",size:d="default",className:c="",onClick:u,icon:h,endIcon:m=(0,o.jsx)(n.Z,{width:12,height:12,strokeWidth:5}),id:f=""}=e;return(0,o.jsxs)("div",{id:f,className:(0,i.AK)(s[l][r],a[d],u?"pr-1":"pr-3","whitespace-nowrap inline-flex rounded-[12px] py-0.5 pl-3 font-bold text-xs leading-5 gap-2 items-center justify-center",c),children:[h&&(0,o.jsx)("div",{className:"rounded",onClick:u,children:h}),t,u&&(0,o.jsx)("div",{className:"rounded bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.24)] cursor-pointer p-0.5",onClick:u,children:m})]})}},3382:function(e,t,r){"use strict";var n=r(44554),i=r(76866),o=(r(67294),r(85893));t.Z=e=>{let{children:t,className:r}=e;return(0,i.Z)()?(0,o.jsxs)("div",{className:(0,n.AK)(r,"relative w-full max-w-2xl"),children:[(0,o.jsx)("div",{className:(0,n.AK)("from-pink/5 to-blue/5 fixed inset-0 bg-gradient-radial z-0 pointer-events-none")}),(0,o.jsx)("div",{className:"relative filter z-10",children:t})]}):(0,o.jsx)(o.Fragment,{children:t})}},13752:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(59499),i=r(4730),o=r(44554),a=r(25675),s=r.n(a);var l=r(85893);const d=["src","width","height","layout"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=e=>{let{src:t,width:r,height:n,layout:a}=e,c=(0,i.Z)(e,d);const h=parseInt(String(n),10)>=40&&parseInt(String(r),10)>=40,m="string"===typeof t&&t.includes("http")?o.HT:void 0;return(0,l.jsx)("div",{style:{width:r,height:n},className:"overflow-hidden rounded",children:h?(0,l.jsx)(s(),u({loader:m,src:t,width:r,height:n,layout:a,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((v=r,x=n,f='\n<svg width="'.concat(v,'" height="').concat(x,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(v,'" height="').concat(x,'" fill="#333" />\n  <rect id="r" width="').concat(v,'" height="').concat(x,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(v,'" to="').concat(v,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(f)))},c)):(0,l.jsx)(s(),u({loader:m,src:t,width:r,height:n,layout:a,placeholder:"empty"},c))});var f,v,x}},27801:function(e,t,r){"use strict";var n=r(59499),i=r(78980),o=r(44554),a=r(94633),s=(r(67294),r(17141)),l=r(41626),d=r(56785),c=r(85893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const m=e=>{let{header:t,items:r,footer:n,className:i=""}=e;return(0,c.jsxs)("div",{className:(0,o.AK)(i,"flex flex-col"),children:[t&&(0,c.jsx)("div",{className:"overflow-hidden border rounded-t border-dark-700",children:t}),r&&(0,c.jsx)("div",{className:(0,o.AK)(t?"":"border-t rounded-t",n?"bg-dark-800":"border-b rounded-b bg-dark-900","border-l border-r border-dark-700 divide-y divide-dark-700 overflow-hidden"),children:r}),n&&(0,c.jsx)("div",{className:"overflow-hidden border rounded-b bg-dark-900 border-dark-700",children:n})]})},f=e=>{let{left:t,right:r,className:n}=e;return(0,c.jsxs)("div",{className:(0,o.AK)(n,"flex grid items-center grid-cols-2 gap-2 px-3 py-3 lg:px-4 border-dark-700"),children:[t,r]})};m.Header=e=>{let{title:t,value:r,subValue:n,className:i="",id:a}=e;return(0,c.jsxs)("div",{id:a,className:(0,o.AK)(i,"flex flex-row justify-between px-4 py-[10px] items-center"),children:[(0,c.jsx)(d.Z,{variant:"lg",className:"text-high-emphesis",weight:700,children:t}),(r||n)&&(0,c.jsxs)("div",{className:"flex flex-col text-right",children:[r&&(0,c.jsx)(d.Z,{className:"text-high-emphesis",weight:700,children:r}),n&&(0,c.jsx)(d.Z,{className:"text-secondary",variant:"xxs",weight:700,children:n})]})]})},f.Left=e=>{let{amount:t,size:r,hideCurrencyLogo:n,startAdornment:o}=e;return(0,c.jsxs)("div",{className:"flex flex-row gap-1.5 lg:gap-3 items-center",children:[o&&o,!n&&(0,c.jsx)(l.X,{currency:null===t||void 0===t?void 0:t.currency,size:20,className:"rounded-full"}),(0,c.jsxs)(d.Z,{variant:r||"sm",className:"text-high-emphesis",weight:700,children:[null!==t&&void 0!==t&&t.greaterThan(i.xE)?null===t||void 0===t?void 0:t.toSignificant(6):"0.00"," ",null===t||void 0===t?void 0:t.currency.symbol]})]})},f.Right=e=>{let{children:t}=e;return(0,c.jsx)(d.Z,{variant:"xs",weight:400,className:"text-right",children:t})},m.Item=f,m.CurrencyAmountItem=e=>{let{amount:t,weight:r,displayTokenAmount:n=!1,id:u="",hideIfZero:f=!0,hideCurrencyLogo:v,hideUSDC:x=!1,size:p,className:g}=e;const w=(0,a.or)(x?void 0:null!==t&&void 0!==t&&t.equalTo(i.xE)?i.ih.fromRawAmount(null===t||void 0===t?void 0:t.currency,"1"):t);return n?(0,c.jsxs)("div",{id:u,className:(0,o.AK)(f&&null!==t&&void 0!==t&&t.equalTo(i.xE)?"hidden":"","flex grid items-center grid-cols-3 gap-2 px-3 py-3 lg:px-4 border-dark-700",g),children:[(0,c.jsxs)("div",{className:"flex items-center gap-3 -ml-1",children:[!v&&(0,c.jsx)(l.X,{currency:null===t||void 0===t?void 0:t.currency,size:30,className:"rounded-full"}),(0,c.jsx)(d.Z,{className:"text-high-emphesis",weight:700,variant:p||"base",children:null===t||void 0===t?void 0:t.currency.symbol})]}),(0,c.jsx)(d.Z,{className:"text-right text-high-emphesis",weight:700,children:(0,o.uf)(null===t||void 0===t?void 0:t.toSignificant(6))}),!x&&(0,c.jsx)(d.Z,{className:"text-right",variant:"sm",children:(0,o.uf)(null===w||void 0===w?void 0:w.toSignificant(6),!0,!1,6)})]}):(0,c.jsx)("div",{id:"".concat(u),className:f&&null!==t&&void 0!==t&&t.equalTo(i.xE)?"hidden":"",children:(0,c.jsx)(m.Item,{className:g,left:(0,c.jsx)(m.Item.Left,h({size:p,hideCurrencyLogo:v,amount:t},r&&{startAdornment:(0,c.jsx)(s.Z,{color:"default",label:r,size:"sm"})})),right:!x&&(0,c.jsxs)(m.Item.Right,{children:["$",w?null===w||void 0===w?void 0:w.toFixed(2):"0.00"]})},0)})},m.Footer=e=>{let{title:t,value:r}=e;return(0,c.jsxs)("div",{className:"flex flex-row items-center justify-between px-4 py-2",children:[(0,c.jsx)(d.Z,{variant:"xs",weight:400,className:"text-high-emphesis",children:t}),r&&(0,c.jsx)(d.Z,{className:"text-high-emphesis",variant:"sm",weight:700,children:r})]})},t.Z=m},79345:function(e,t,r){"use strict";r.d(t,{W:function(){return y}});var n=r(56727),i=r(61782),o=r(25159),a=r(49501),s=r(78980),l=r(27801),d=r(56785),c=r(16682),u=r(44554),h=r(66529),m=r(62603),f=r(12614),v=r(22986),x=r(11163),p=r(67294),g=r(71862),w=r(41626),j=r(85893);const y=e=>{let{pair:t}=e;const{i18n:r}=(0,a.mV)(),{account:n}=(0,f.aQ)(),i=(0,v.mM)(null!==n&&void 0!==n?n:void 0,t.liquidityToken),o=(0,m.A)(t.liquidityToken),c=i&&o&&s.QA.greaterThanOrEqual(o.quotient,i.quotient)?new s.gG(i.quotient,o.quotient):void 0,[u,h]=t&&o&&i&&s.QA.greaterThanOrEqual(o.quotient,i.quotient)?[t.getLiquidityValue(t.token0,o,i,!1),t.getLiquidityValue(t.token1,o,i,!1)]:[void 0,void 0];return(0,j.jsx)("div",{children:i&&s.QA.greaterThan(i.quotient,s.QA.BigInt(0))&&(0,j.jsx)(l.Z,{header:(0,j.jsx)("div",{className:"overflow-hidden px-4 py-2 bg-dark-900",children:(0,j.jsx)(d.Z,{variant:"xs",className:"text-secondary",children:r._(r._("My Position"))})}),items:[u,h].map(((e,t)=>(0,j.jsx)(l.Z.CurrencyAmountItem,{amount:e,size:"xs"},t))),footer:(0,j.jsxs)("div",{className:"flex overflow-hidden px-4 py-2 justify-between",children:[(0,j.jsx)(d.Z,{variant:"xs",className:"text-secondary",children:r._(r._("Pool Share"))}),(0,j.jsx)(d.Z,{variant:"xs",children:c?c.toFixed(6)+"%":"-"})]})})})};t.Z=e=>{let{pair:t,stakedBalance:r}=e;const{i18n:y}=(0,a.mV)(),b=(0,x.useRouter)(),{account:N}=(0,f.aQ)(),O=(0,h.Bv)(t.token0),A=(0,h.Bv)(t.token1),k=(0,v.mM)(null!==N&&void 0!==N?N:void 0,t.liquidityToken),_=(0,m.A)(t.liquidityToken),E=r?null===k||void 0===k?void 0:k.add(r):k,q=E&&_&&s.QA.greaterThanOrEqual(_.quotient,E.quotient)?new s.gG(E.quotient,_.quotient):void 0,[R,T]=t&&_&&E&&s.QA.greaterThanOrEqual(_.quotient,E.quotient)?[t.getLiquidityValue(t.token0,_,E,!1),t.getLiquidityValue(t.token1,_,E,!1)]:[void 0,void 0];return(0,j.jsx)(n.pJ,{as:"div",className:"py-2",children:e=>{let{open:t}=e;return(0,j.jsxs)("div",{className:(0,u.AK)(t?"bg-dark-900":"hover:bg-dark-800","shadow-inner flex flex-col rounded-2xl gap-2 py-2 pl-1 pr-2 transition"),children:[(0,j.jsx)(n.pJ.Button,{as:p.Fragment,children:(0,j.jsxs)("div",{className:"flex justify-between gap-2 items-center pl-2 cursor-pointer",children:[(0,j.jsxs)("div",{className:"flex items-center gap-2",children:[(0,j.jsx)(w.B,{currencies:[O,A],dense:!0}),(0,j.jsxs)(d.Z,{variant:"sm",weight:700,className:"text-white",children:[O.symbol,"-",A.symbol]})]}),(0,j.jsx)("div",{className:"flex gap-2 flex-grow items-center justify-end p-1 rounded",children:(0,j.jsx)(i.Z,{width:20,className:(0,u.AK)(t?"transform rotate-180":"","transition hover:text-white")})})]})}),(0,j.jsx)(n.uT,{show:t,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",unmount:!1,children:(0,j.jsx)(n.pJ.Panel,{static:!0,children:(0,j.jsxs)("div",{className:"border border-dark-800 rounded p-3",children:[[R,T].map(((e,t)=>(0,j.jsx)(l.Z.CurrencyAmountItem,{amount:e,size:"xs",className:"!px-0 !py-1"},t))),k&&s.QA.greaterThan(k.quotient,c.iV)&&(0,j.jsxs)("div",{className:"flex justify-between border-t border-dark-800 pt-3 mt-3",children:[(0,j.jsx)("div",{className:"flex items-center mb-1",children:(0,j.jsxs)(d.Z,{variant:"xs",className:"text-low-emphesis",children:[y._(y._("Pool share"))," ",q?("0.00"===q.toFixed(2)?"<0.01":q.toFixed(2))+"%":"-"]})}),(0,j.jsxs)("div",{className:"flex gap-4",children:[(0,j.jsx)(g.ZP,{size:"xs",variant:"empty",color:"blue",onClick:()=>{b.push("/remove/".concat((0,h.Hh)(O),"/").concat((0,h.Hh)(A)))},children:y._(y._("Remove"))}),(0,j.jsx)(g.ZP,{startIcon:(0,j.jsx)(o.Z,{width:14,height:14}),size:"xs",color:"blue",onClick:()=>{b.push("/add/".concat((0,h.Hh)(O),"/").concat((0,h.Hh)(A)))},children:y._(y._("Add"))})]})]})]})})})]})}})}},71195:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var n=r(12614),i=r(94654),o=r.n(i),a=r(67294),s=r(86612);function l(e,t){const{chainId:r}=(0,n.aQ)(),[i,l]=r?[null===e||void 0===e?void 0:e.wrapped,null===t||void 0===t?void 0:t.wrapped]:[void 0,void 0],d=(0,a.useMemo)((()=>{var e,t,n,o,a;if(!r)return[];return[...null!==(e=s.lM[r])&&void 0!==e?e:[],...i&&null!==(t=null===(n=s.ck[r])||void 0===n?void 0:n[i.address])&&void 0!==t?t:[],...l&&null!==(o=null===(a=s.ck[r])||void 0===a?void 0:a[l.address])&&void 0!==o?o:[]]}),[r,i,l]),c=(0,a.useMemo)((()=>o()(d,(e=>d.map((t=>[e,t]))))),[d]);return(0,a.useMemo)((()=>i&&l?[[i,l],...d.map((e=>[i,e])),...d.map((e=>[l,e])),...c].filter((e=>Boolean(e[0]&&e[1]))).filter((e=>{let[t,r]=e;return t.address!==r.address})).filter((e=>{let[t,n]=e;if(!r)return!0;const i=s.IP[r],o=null===i||void 0===i?void 0:i[t.address],a=null===i||void 0===i?void 0:i[n.address];return!o&&!a||!(o&&!o.find((e=>n.equals(e))))&&!(a&&!a.find((e=>t.equals(e))))})):[]),[i,l,d,c,r])}},90573:function(e,t,r){"use strict";r.d(t,{Fm:function(){return c},NF:function(){return d},ZP:function(){return l},mJ:function(){return u}});var n=r(78980),i=r(67294),o=r(12614),a=r(56388);const s={[n.a_.ETHEREUM]:n.ih.fromRawAmount(n.qY[n.a_.ETHEREUM],1e11),[n.a_.ROPSTEN]:n.ih.fromRawAmount(n.qY[n.a_.ROPSTEN],1e11),[n.a_.KOVAN]:n.ih.fromRawAmount(n.qY[n.a_.KOVAN],1e6),[n.a_.MATIC]:n.ih.fromRawAmount(n.qY[n.a_.MATIC],1e11),[n.a_.FANTOM]:n.ih.fromRawAmount(n.qY[n.a_.FANTOM],1e11),[n.a_.BSC]:n.ih.fromRawAmount(n.qY[n.a_.BSC],1e23),[n.a_.HARMONY]:n.ih.fromRawAmount(n.qY[n.a_.HARMONY],1e11),[n.a_.HECO]:n.ih.fromRawAmount(n.qY[n.a_.HECO],1e11),[n.a_.OKEX]:n.ih.fromRawAmount(n.qY[n.a_.OKEX],1e23),[n.a_.XDAI]:n.ih.fromRawAmount(n.qY[n.a_.XDAI],1e11),[n.a_.ARBITRUM]:n.ih.fromRawAmount(n.qY[n.a_.ARBITRUM],1e11),[n.a_.CELO]:n.ih.fromRawAmount(n.qY[n.a_.CELO],1e23),[n.a_.MOONRIVER]:n.ih.fromRawAmount(n.qY[n.a_.MOONRIVER],1e11),[n.a_.FUSE]:n.ih.fromRawAmount(n.qY[n.a_.FUSE],1e11),[n.a_.TELOS]:n.ih.fromRawAmount(n.qY[n.a_.TELOS],1e11),[n.a_.AVALANCHE]:n.ih.fromRawAmount(n.qY[n.a_.AVALANCHE],1e11),[n.a_.MOONBEAM]:n.ih.fromRawAmount(n.qY[n.a_.MOONBEAM],1e11)};function l(e){const{chainId:t}=(0,o.aQ)(),r=t?s[t]:void 0,l=null===r||void 0===r?void 0:r.currency,d=(0,a.k)(e,r,{maxHops:2});return(0,i.useMemo)((()=>{if(e&&l){if(null!==e&&void 0!==e&&e.wrapped.equals(l))return new n.tA(l,l,"1","1");if(d){const{numerator:t,denominator:r}=d.route.midPrice;return new n.tA(e,l,r,t)}}}),[e,l,d])}function d(e){const t=l(null===e||void 0===e?void 0:e.currency);return(0,i.useMemo)((()=>{if(!t||!e)return null;try{return t.quote(e)}catch(r){return null}}),[e,t])}function c(e){const t=l(e);return(0,i.useMemo)((()=>{if(!t||!e)return{price:void 0,loading:!1};try{return{price:t,loading:!1}}catch(r){return{price:void 0,loading:!1}}}),[e,t])}function u(e){const t=l(null===e||void 0===e?void 0:e.currency);return(0,i.useMemo)((()=>{if(!t||!e)return{value:void 0,loading:!1};try{return{value:t.quote(e),loading:!1}}catch(r){return{value:void 0,loading:!1}}}),[e,t])}},97503:function(e,t,r){"use strict";r.d(t,{OY:function(){return u},Oo:function(){return h},_G:function(){return c}});var n=r(8198),i=r(69587),o=r(78980),a=r(2886),s=r(67294),l=r(627);const d=new n.vU(i);let c;function u(e){const t=(0,s.useMemo)((()=>e.map((e=>{let[t,r]=e;return[null===t||void 0===t?void 0:t.wrapped,null===r||void 0===r?void 0:r.wrapped]}))),[e]),r=(0,s.useMemo)((()=>t.reduce(((e,t)=>{let[r,n]=t;const i=r&&n&&r.chainId===n.chainId&&!r.equals(n)&&o.F1[r.chainId]?(0,l.f7)({factoryAddress:204==r.chainId?"0xa7408904620F14C4FEB898c8c20c2189636d4009":o.F1[r.chainId],tokenA:r,tokenB:n}):void 0;return e.push(i&&!e.includes(i)?i:void 0),e}),[])),[t]),n=(0,a._Y)(r,d,"getReserves");return(0,s.useMemo)((()=>n.map(((e,r)=>{const{result:n,loading:i}=e,a=t[r][0],s=t[r][1];if(i)return[c.LOADING,null];if(!a||!s||a.equals(s))return[c.INVALID,null];if(!n)return[c.NOT_EXISTS,null];const{reserve0:l,reserve1:d}=n,[u,h]=a.sortsBefore(s)?[a,s]:[s,a];return[c.EXISTS,new o.qA(o.ih.fromRawAmount(u,l.toString()),o.ih.fromRawAmount(h,d.toString()))]}))),[n,t])}function h(e,t){return u((0,s.useMemo)((()=>[[e,t]]),[e,t]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(c||(c={}))},56388:function(e,t,r){"use strict";r.d(t,{k:function(){return h},w:function(){return u}});var n=r(78980),i=r(16682),o=r(92659),a=r(67294),s=r(71195),l=r(97503);function d(e,t){const r=(0,s.V)(e,t),n=(0,l.OY)(r);return(0,a.useMemo)((()=>Object.values(n.filter((e=>Boolean(e[0]===l._G.EXISTS&&e[1]))).reduce(((e,t)=>{var r;let[,n]=t;return e[n.liquidityToken.address]=null!==(r=e[n.liquidityToken.address])&&void 0!==r?r:n,e}),{}))),[n])}const c=3;function u(e,t){let{maxHops:r=c}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=d(null===e||void 0===e?void 0:e.currency,t);return(0,a.useMemo)((()=>{if(e&&t&&s.length>0){var a;if(1===r)return null!==(a=n.ho.bestTradeExactIn(s,e,t,{maxHops:1,maxNumResults:1})[0])&&void 0!==a?a:null;let d=null;for(let a=1;a<=r;a++){var l;const r=null!==(l=n.ho.bestTradeExactIn(s,e,t,{maxHops:a,maxNumResults:1})[0])&&void 0!==l?l:null;(0,o._B)(d,r,i.Ru)&&(d=r)}return d}return null}),[s,e,t,r])}function h(e,t){let{maxHops:r=c}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=d(e,null===t||void 0===t?void 0:t.currency);return(0,a.useMemo)((()=>{if(e&&t&&s.length>0){var a;if(1===r)return null!==(a=n.ho.bestTradeExactOut(s,e,t,{maxHops:1,maxNumResults:1})[0])&&void 0!==a?a:null;let d=null;for(let a=1;a<=r;a++){var l;const r=null!==(l=n.ho.bestTradeExactOut(s,e,t,{maxHops:a,maxNumResults:1})[0])&&void 0!==l?l:null;(0,o._B)(d,r,i.Ru)&&(d=r)}return d}return null}),[e,t,s,r])}},73179:function(e,t,r){"use strict";r.d(t,{Pf:function(){return h},yz:function(){return c}});var n=r(59499),i=r(72457),o=r(3382),a=r(44554),s=(r(67294),r(76138)),l=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const c=e=>{let{children:t,className:r}=e;return(0,l.jsx)("div",{className:(0,a.AK)("flex flex-col gap-3 p-2 md:p-4 pt-4 rounded-[24px] bg-dark-800 shadow-md shadow-dark-1000",r),children:t})},u=e=>{let{children:t,id:r}=e;return(0,l.jsx)(s.Z,{children:(0,l.jsx)(i.Z,{id:r,className:"py-4 md:py-12 lg:py-[120px] px-2 mx-auto",maxWidth:"md",children:(0,l.jsx)(o.Z,{children:t})})})},h=e=>t=>(0,l.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:e},t))},96341:function(e,t,r){"use strict";r.r(t);var n=r(76763),i=r(49501),o=r(78980),a=r(71862),s=r(38212),l=r(79345),d=r(56785),c=r(63192),u=r(22641),h=r(73179),m=r(12614),f=r(41664),v=r.n(f),x=r(2962),p=(r(67294),r(85893));const g=()=>{const{i18n:e}=(0,i.mV)(),{account:t}=(0,m.aQ)(),{loading:r,pairs:f}=(0,u.m)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.PB,{title:"Pool"}),(0,p.jsxs)("div",{className:"flex items-center justify-between",children:[(0,p.jsx)(d.Z,{variant:"lg",className:"py-6",children:"Position Overview"}),(0,p.jsx)(v(),{href:"/add",passHref:!0,children:(0,p.jsx)(a.ZP,{size:"sm",startIcon:(0,p.jsx)(n.Z,{width:14,height:14}),children:"New Position"})})]}),(0,p.jsx)(h.yz,{className:"!bg-dark-900 border border-dark-800 !p-0 overflow-hidden",children:t?(0,p.jsx)("div",{className:"px-2 space-y-4 rounded bg-dark-900",children:(0,p.jsx)("div",{className:"grid grid-flow-row divide-y divide-dark-800",children:r?(0,p.jsx)("div",{className:"flex items-center justify-center h-40",children:(0,p.jsx)(s.Z,{})}):(null===f||void 0===f?void 0:f.length)>0?f.map((e=>(0,p.jsx)(l.Z,{pair:e,stakedBalance:o.ih.fromRawAmount(e.liquidityToken,"0")},e.liquidityToken.address))):(0,p.jsx)("div",{className:"flex items-center justify-center h-40",children:(0,p.jsx)(d.Z,{variant:"xs",children:e._(e._("No positions found"))})})})}):(0,p.jsx)(c.Z,{className:"w-full !bg-dark-900 bg-gradient-to-r from-pink/80 hover:from-pink to-purple/80 hover:to-purple text-white h-[38px]"})}),(0,p.jsx)(d.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:e._(e._("Liquidity providers earn a 0.25% fee on all trades proportional to their share of\nthe pool. Fees are added to the pool, accrue in real time and can be claimed by\nwithdrawing your liquidity"))})]})};g.Layout=(0,h.Pf)("pool-page"),t.default=g},12263:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legacy/pool",function(){return r(96341)}])},76763:function(e,t,r){"use strict";var n=r(67294);const i=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"}))}));t.Z=i},25159:function(e,t,r){"use strict";var n=r(67294);const i=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}))}));t.Z=i},68163:function(e,t,r){"use strict";var n=r(67294);const i=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=i}},function(e){e.O(0,[8529,8193,7032,3882,9774,2888,179],(function(){return t=12263,e(e.s=t);var t}));var t=e.O();_N_E=t}]);