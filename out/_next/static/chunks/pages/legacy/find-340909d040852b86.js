(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6809],{98332:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(13902),s=n(68163),i=n(67294),o=n(44554),l=n(56785),a=n(85893);const c={information:{text:"text-high-emphesis",color:"bg-purple bg-opacity-20 text-high-emphesis",icon:(0,a.jsx)("svg",{className:"h-5 w-5 text-purple",viewBox:"0 0 33 33",xmlns:"http://www.w3.org/2000/svg",path:"currentColor",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M16.5 0C7.40184 0 0 7.40184 0 16.5C0 25.5982 7.40184 33 16.5 33C25.5982 33 33 25.5982 33 16.5C33 7.40184 25.5982 0 16.5 0ZM16.5 25.9909C15.5747 25.9909 14.8245 25.2407 14.8245 24.3154C14.8245 23.39 15.5747 22.6398 16.5 22.6398C17.4253 22.6398 18.1755 23.39 18.1755 24.3154C18.1755 25.2407 17.4253 25.9909 16.5 25.9909ZM18.1755 17.3898C18.1755 18.3152 17.4253 19.0654 16.5 19.0654C15.5747 19.0654 14.8245 18.3152 14.8245 17.3898V8.56534C14.8245 7.63999 15.5747 6.8898 16.5 6.8898C17.4253 6.8898 18.1755 7.63999 18.1755 8.56534V17.3898Z",fill:"currentColor"})})},warning:{text:"text-high-emphesis",color:"bg-yellow bg-opacity-25 text-high-emphesis",icon:(0,a.jsx)("svg",{className:"w-5 h-5 text-yellow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})},error:{text:"text-red",color:"bg-red bg-opacity-25 text-high-emphesis",icon:(0,a.jsx)(r.Z,{className:"h-5 w-5 text-red"})}};function d(e){let{title:t,message:n,type:r="warning",className:d="",showIcon:u=!1,dismissable:h=!0}=e;const{0:x,1:p}=(0,i.useState)(!0),{color:m,icon:f,text:j}=c[r];return n&&x?(0,a.jsxs)("div",{className:(0,o.AK)("flex flex-row rounded p-4 gap-3",m,d),children:[u&&(0,a.jsx)("div",{children:f}),(0,a.jsxs)("div",{className:"flex flex-col gap-1.5 justify-center",children:[t&&(0,a.jsx)(l.Z,{weight:700,className:(0,o.AK)(j,"text-left inline leading-6"),children:t}),(0,a.jsx)(l.Z,{variant:"sm",weight:700,className:(0,o.AK)(j,"text-left"),children:n})]}),h&&(0,a.jsxs)("button",{type:"button",onClick:()=>p(!x),className:"inline-flex opacity-80 hover:opacity-100 focused:opacity-100 rounded text-primary hover:text-high-emphesis focus:text-high-emphesis focus:outline-none focus:ring focus:ring-offset focus:ring-offset-purple focus:ring-purple",children:[(0,a.jsx)("span",{className:"sr-only",children:"Dismiss"}),(0,a.jsx)(s.Z,{className:"w-5 h-5","aria-hidden":"true"})]})]}):null}},60972:function(e,t,n){"use strict";var r=n(49501),s=n(11163),i=n(85893);t.Z=()=>{const{i18n:e}=(0,r.mV)(),t=(0,s.useRouter)();return(0,i.jsx)("div",{children:(0,i.jsxs)("a",{onClick:t.back,className:"flex items-center space-x-2 text-base text-center cursor-pointer font text-secondary hover:text-high-emphesis",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})}),(0,i.jsx)("span",{children:e._(e._("Go Back"))})]})})}},79345:function(e,t,n){"use strict";n.d(t,{W:function(){return b}});var r=n(56727),s=n(61782),i=n(25159),o=n(49501),l=n(78980),a=n(27801),c=n(56785),d=n(16682),u=n(44554),h=n(66529),x=n(62603),p=n(12614),m=n(22986),f=n(11163),j=n(67294),y=n(71862),g=n(41626),v=n(85893);const b=e=>{let{pair:t}=e;const{i18n:n}=(0,o.mV)(),{account:r}=(0,p.aQ)(),s=(0,m.mM)(null!==r&&void 0!==r?r:void 0,t.liquidityToken),i=(0,x.A)(t.liquidityToken),d=s&&i&&l.QA.greaterThanOrEqual(i.quotient,s.quotient)?new l.gG(s.quotient,i.quotient):void 0,[u,h]=t&&i&&s&&l.QA.greaterThanOrEqual(i.quotient,s.quotient)?[t.getLiquidityValue(t.token0,i,s,!1),t.getLiquidityValue(t.token1,i,s,!1)]:[void 0,void 0];return(0,v.jsx)("div",{children:s&&l.QA.greaterThan(s.quotient,l.QA.BigInt(0))&&(0,v.jsx)(a.Z,{header:(0,v.jsx)("div",{className:"overflow-hidden px-4 py-2 bg-dark-900",children:(0,v.jsx)(c.Z,{variant:"xs",className:"text-secondary",children:n._(n._("My Position"))})}),items:[u,h].map(((e,t)=>(0,v.jsx)(a.Z.CurrencyAmountItem,{amount:e,size:"xs"},t))),footer:(0,v.jsxs)("div",{className:"flex overflow-hidden px-4 py-2 justify-between",children:[(0,v.jsx)(c.Z,{variant:"xs",className:"text-secondary",children:n._(n._("Pool Share"))}),(0,v.jsx)(c.Z,{variant:"xs",children:d?d.toFixed(6)+"%":"-"})]})})})};t.Z=e=>{let{pair:t,stakedBalance:n}=e;const{i18n:b}=(0,o.mV)(),w=(0,f.useRouter)(),{account:N}=(0,p.aQ)(),k=(0,h.Bv)(t.token0),_=(0,h.Bv)(t.token1),O=(0,m.mM)(null!==N&&void 0!==N?N:void 0,t.liquidityToken),C=(0,x.A)(t.liquidityToken),Z=n?null===O||void 0===O?void 0:O.add(n):O,q=Z&&C&&l.QA.greaterThanOrEqual(C.quotient,Z.quotient)?new l.gG(Z.quotient,C.quotient):void 0,[E,T]=t&&C&&Z&&l.QA.greaterThanOrEqual(C.quotient,Z.quotient)?[t.getLiquidityValue(t.token0,C,Z,!1),t.getLiquidityValue(t.token1,C,Z,!1)]:[void 0,void 0];return(0,v.jsx)(r.pJ,{as:"div",className:"py-2",children:e=>{let{open:t}=e;return(0,v.jsxs)("div",{className:(0,u.AK)(t?"bg-dark-900":"hover:bg-dark-800","shadow-inner flex flex-col rounded-2xl gap-2 py-2 pl-1 pr-2 transition"),children:[(0,v.jsx)(r.pJ.Button,{as:j.Fragment,children:(0,v.jsxs)("div",{className:"flex justify-between gap-2 items-center pl-2 cursor-pointer",children:[(0,v.jsxs)("div",{className:"flex items-center gap-2",children:[(0,v.jsx)(g.B,{currencies:[k,_],dense:!0}),(0,v.jsxs)(c.Z,{variant:"sm",weight:700,className:"text-white",children:[k.symbol,"-",_.symbol]})]}),(0,v.jsx)("div",{className:"flex gap-2 flex-grow items-center justify-end p-1 rounded",children:(0,v.jsx)(s.Z,{width:20,className:(0,u.AK)(t?"transform rotate-180":"","transition hover:text-white")})})]})}),(0,v.jsx)(r.uT,{show:t,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",unmount:!1,children:(0,v.jsx)(r.pJ.Panel,{static:!0,children:(0,v.jsxs)("div",{className:"border border-dark-800 rounded p-3",children:[[E,T].map(((e,t)=>(0,v.jsx)(a.Z.CurrencyAmountItem,{amount:e,size:"xs",className:"!px-0 !py-1"},t))),O&&l.QA.greaterThan(O.quotient,d.iV)&&(0,v.jsxs)("div",{className:"flex justify-between border-t border-dark-800 pt-3 mt-3",children:[(0,v.jsx)("div",{className:"flex items-center mb-1",children:(0,v.jsxs)(c.Z,{variant:"xs",className:"text-low-emphesis",children:[b._(b._("Pool share"))," ",q?("0.00"===q.toFixed(2)?"<0.01":q.toFixed(2))+"%":"-"]})}),(0,v.jsxs)("div",{className:"flex gap-4",children:[(0,v.jsx)(y.ZP,{size:"xs",variant:"empty",color:"blue",onClick:()=>{w.push("/remove/".concat((0,h.Hh)(k),"/").concat((0,h.Hh)(_)))},children:b._(b._("Remove"))}),(0,v.jsx)(y.ZP,{startIcon:(0,v.jsx)(i.Z,{width:14,height:14}),size:"xs",color:"blue",onClick:()=>{w.push("/add/".concat((0,h.Hh)(k),"/").concat((0,h.Hh)(_)))},children:b._(b._("Add"))})]})]})]})})})]})}})}},95793:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(49501),s=n(78980),i=n(98332),o=n(60972),l=n(71862),a=n(59499),c=n(4730),d=n(67294),u=n(44554),h=n(85893);const x=["children","className","gap","justify","style"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const f=e=>{let{children:t,className:n,gap:r,justify:s,style:i}=e,o=(0,c.Z)(e,x);return(0,h.jsx)("div",m(m({className:(0,u.AK)("grid",n),style:m({gridRowGap:("sm"===r?"8px":"md"===r&&"12px")||"lg"===r&&"24px"||r,justifyItems:s&&s},i)},o),{},{children:t}))};var j=n(72457),y=n(61782),g=n(134),v=n(86047),b=n(69260),w=n.n(b),N=n(41626);function k(e){let{onClick:t,onCurrencySelect:n,currency:s,disableCurrencySelect:i=!1,otherCurrency:o,id:l,showCommonBases:a}=e;const{i18n:c}=(0,r.mV)(),{0:u,1:x}=(0,d.useState)(!1),p=(0,d.useCallback)((()=>{x(!1)}),[x]);return(0,h.jsxs)("div",{id:l,className:"p-5 rounded bg-dark-800",children:[(0,h.jsx)("div",{className:"flex flex-col justify-between space-y-3 sm:space-y-0 sm:flex-row",children:(0,h.jsx)("div",{className:"w-full",onClick:t,children:(0,h.jsx)("div",{className:"items-center h-full text-xl font-medium border-none outline-none cursor-pointer select-none",onClick:()=>{i||x(!0)},children:(0,h.jsxs)("div",{className:"flex",children:[s?(0,h.jsx)(N.X,{currency:s,size:"54px"}):(0,h.jsx)("div",{className:"rounded bg-dark-700",style:{maxWidth:54,maxHeight:54},children:(0,h.jsx)("div",{style:{width:54,height:54},children:(0,h.jsx)(w(),{animationData:g,autoplay:!0,loop:!0})})}),(0,h.jsx)("div",{className:"flex flex-col items-start justify-center mx-3.5",children:(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)("div",{className:"mr-1 text-lg font-bold md:text-2xl",children:(s&&s.symbol&&s.symbol.length>20?s.symbol.slice(0,4)+"..."+s.symbol.slice(s.symbol.length-5,s.symbol.length):null===s||void 0===s?void 0:s.symbol)||(0,h.jsx)("div",{className:"px-2 py-1 mt-1 text-xs font-medium bg-transparent border rounded-full hover:bg-primary border-low-emphesis text-secondary whitespace-nowrap",children:c._(c._("Select a token"))})}),!i&&s&&(0,h.jsx)(y.Z,{className:"".concat(s?"text-primary":"text-high-emphesis"," stroke-current"),width:16,height:16})]})})]})})})}),!i&&n&&(0,h.jsx)(v.Z.Controlled,{open:u,onDismiss:p,onCurrencySelect:n,selectedCurrency:null!==s&&void 0!==s?s:void 0,otherSelectedCurrency:null!==o&&void 0!==o?o:void 0,showCommonBases:a})]})}var _=n(15097),O=n(79345);const C=["children","gap","justify","style"];function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const E=e=>{let{children:t,className:n,width:r,align:s,justify:i,padding:o,border:l,borderRadius:a,style:c}=e;return(0,h.jsx)("div",{className:(0,u.AK)("w-full flex p-0",n),style:q({width:r,alignItems:s,justifyContent:i,padding:o,border:l,borderRadius:a},c),children:t})},T=e=>{let{children:t,gap:n,justify:r,style:s}=e,i=(0,c.Z)(e,C);return(0,h.jsx)(E,q(q({className:"flex-wrap",style:q({justifyContent:r&&r,margin:n&&"-".concat(n)},s)},i),{},{children:d.Children.map(t,(e=>(0,d.cloneElement)(e,{style:{margin:n}})))}))};var A,P=n(56785),S=n(63192),B=n(66529),I=n(97503),Q=n(12614),K=n(627),V=n(22986),M=n(41664),z=n.n(M),D=n(11163),R=n(2962),H=n(61896);function L(){const{i18n:e}=(0,r.mV)(),{account:t,chainId:n}=(0,Q.aQ)(),a=(0,D.useRouter)(),{0:c,1:u}=(0,d.useState)(A.TOKEN1),{0:x,1:p}=(0,d.useState)((()=>n?s.B5[n]:null)),{0:m,1:y}=(0,d.useState)(null),[g,v]=(0,I.Oo)(null!==x&&void 0!==x?x:void 0,null!==m&&void 0!==m?m:void 0),b=(0,K.uB)();(0,d.useEffect)((()=>{v&&b(v)}),[v,b]);const w=g===I._G.NOT_EXISTS||Boolean(g===I._G.EXISTS&&v&&s.QA.equal(v.reserve0.quotient,s.QA.BigInt(0))&&s.QA.equal(v.reserve1.quotient,s.QA.BigInt(0))),N=(0,V.mM)(null!==t&&void 0!==t?t:void 0,null===v||void 0===v?void 0:v.liquidityToken),C=Boolean(N&&s.QA.greaterThan(N.quotient,s.QA.BigInt(0))),Z=(0,d.useCallback)((e=>{c===A.TOKEN0?p(e):y(e)}),[c]),q=(0,h.jsx)("div",{className:"p-5 text-center rounded bg-dark-800",children:e._(e._("Select a token to find your liquidity"))});return(0,h.jsxs)(j.Z,{id:"find-pool-page",className:"py-4 mx-auto space-y-6 md:py-8 lg:py-12",maxWidth:"2xl",children:[(0,h.jsx)(R.PB,{title:"Find Pool"}),(0,h.jsxs)("div",{className:"p-4 mb-3 space-y-3",children:[(0,h.jsx)(o.Z,{}),(0,h.jsx)(P.Z,{component:"h1",variant:"h2",children:e._(e._("Import Pool"))})]}),(0,h.jsx)(i.Z,{message:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("b",{children:e._(e._("Tip:"))})," ",e._(e._("Use this tool to find pairs that don't automatically appear in the interface"))]}),type:"information"}),(0,h.jsxs)("div",{className:"relative p-4 space-y-4 rounded bg-dark-900 shadow-liquidity",children:[(0,h.jsxs)(f,{gap:"md",children:[(0,h.jsx)(k,{currency:x,onClick:()=>u(A.TOKEN0),onCurrencySelect:Z,otherCurrency:m,id:"pool-currency-input"}),(0,h.jsx)(f,{justify:"space-between",children:(0,h.jsx)(T,{justify:"flex-start",style:{padding:"0 1rem"},children:(0,h.jsx)("button",{className:"z-10 -mt-6 -mb-6 rounded-full bg-dark-900 p-3px",children:(0,h.jsx)("div",{className:"p-3 rounded-full bg-dark-800 hover:bg-dark-700",children:(0,h.jsx)(H.Z,{size:"32"})})})})}),(0,h.jsx)(k,{currency:m,onClick:()=>u(A.TOKEN1),onCurrencySelect:Z,otherCurrency:x,id:"pool-currency-output"})]}),x&&m?g===I._G.EXISTS?C&&v?(0,h.jsx)(O.W,{pair:v}):(0,h.jsx)("div",{className:"p-5 rounded bg-dark-800",children:(0,h.jsxs)(f,{gap:"sm",justify:"center",children:[e._(e._("You don\u2019t have liquidity in this pool yet")),(0,h.jsx)(z(),{href:"/add/".concat((0,B.Hh)(x),"/").concat((0,B.Hh)(m)),children:(0,h.jsx)("a",{className:"text-center text-blue text-opacity-80 hover:text-opacity-100",children:e._(e._("Add liquidity"))})})]})}):w?(0,h.jsx)("div",{className:"p-5 rounded bg-dark-800",children:(0,h.jsxs)(f,{gap:"sm",justify:"center",children:[e._(e._("No pool found")),(0,h.jsx)(z(),{href:"/add/".concat((0,B.Hh)(x),"/").concat((0,B.Hh)(m)),children:(0,h.jsx)("a",{className:"text-center",children:e._(e._("Create pool"))})})]})}):g===I._G.INVALID?(0,h.jsx)("div",{className:"p-5 text-center rounded bg-dark-800",children:e._(e._("Invalid pair"))}):g===I._G.LOADING?(0,h.jsx)("div",{className:"p-5 text-center rounded bg-dark-800",children:(0,h.jsx)(_.Z,{children:e._(e._("Loading"))})}):null:t?q:(0,h.jsx)(S.Z,{className:"w-full",size:"lg",color:"blue"}),C&&(0,h.jsx)("div",{className:"rounded bg-dark-800",children:(0,h.jsx)(f,{gap:"sm",justify:"center",children:(0,h.jsx)(l.ZP,{color:"blue",fullWidth:!0,onClick:()=>{a.push("/pool")},children:e._(e._("Manage this pool"))})})})]})]})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(A||(A={}))},98075:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legacy/find",function(){return n(95793)}])},13902:function(e,t,n){"use strict";var r=n(67294);const s=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}));t.Z=s},25159:function(e,t,n){"use strict";var r=n(67294);const s=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}))}));t.Z=s}},function(e){e.O(0,[8529,8193,6761,7032,9658,134,9009,9774,2888,179],(function(){return t=98075,e(e.s=t);var t}));var t=e.O();_N_E=t}]);