"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2392],{48410:function(e,t,s){var r=s(59499),n=s(4730),a=s(44554),l=s(67294),i=s(85893);const o=["value","onUserInput","placeholder","className","min"];function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){(0,r.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const p=RegExp("^\\d*(?:\\\\[.])?\\d*$"),h="w-0 p-0 text-2xl bg-transparent",u=(0,l.forwardRef)(((e,t)=>{let{value:s,onUserInput:r,placeholder:l,className:c=h,min:u}=e,x=(0,n.Z)(e,o);return(0,i.jsx)("input",d(d({},x),{},{ref:t,value:s,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,"."))||p.test((0,a.hr)(t)))&&r(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:l||"0.0",min:u||0,minLength:1,maxLength:79,spellCheck:"false",className:(0,a.AK)("relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary",c)}))}));u.displayName="NumericalInput",t.Z=u},42802:function(e,t,s){var r=s(2905),n=s(49501),a=s(42144),l=s(13752),i=s(46430),o=s(573),c=s(56785),d=s(44554),p=s(67294),h=s(85893);t.Z=()=>{const{i18n:e}=(0,n.mV)(),{0:t,1:s}=(0,p.useState)(!1);return(0,h.jsx)(i.Z,{trigger:(0,h.jsx)("div",{className:"flex items-center justify-center rounded cursor-pointer lg:w-4 lg:h-4",children:(0,h.jsx)(r.Z,{className:"w-4 h-4 text-high-emphesis"})}),children:r=>{let{setOpen:n}=r;return(0,h.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,h.jsx)(i.Z.Header,{header:e._(e._("Bentobox")),onClose:()=>n(!1)}),(0,h.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,h.jsx)("div",{className:"relative shadow-pink-glow",children:(0,h.jsx)(l.Z,{src:"https://app.sushi.com/images/bentobox/logo.png",width:160,height:120,alt:"BentoBox Logo"})}),(0,h.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,h.jsx)(c.Z,{variant:"lg",weight:700,className:"text-center text-high-emphesis",children:e._(e._("Sushi utilizes a token vault called BentoBox that has balances separate from your wallet."))}),(0,h.jsx)(c.Z,{variant:"sm",className:"text-center text-secondary",children:e._(e._('You can think of this as having "account balances" for each asset within sushi.com'))})]})]}),(0,h.jsxs)(i.Z.BorderedContent,{className:"flex flex-col",children:[(0,h.jsxs)("div",{className:"grid grid-cols-2 gap-10 flex-grow min-h-[160px]",children:[(0,h.jsxs)("div",{className:"flex flex-col justify-center gap-3",children:[(0,h.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,h.jsxs)("div",{className:(0,d.AK)("flex flex-col gap-1",t?"text-low-emphesis":"text-high-emphesis"),children:[(0,h.jsx)(a.OP,{width:48}),(0,h.jsx)(c.Z,{variant:"xs",className:"text-secondary",children:e._(e._("Bentobox"))})]}),(0,h.jsxs)("div",{className:(0,d.AK)("flex flex-col gap-1",t?"text-high-emphesis":"text-low-emphesis"),children:[(0,h.jsx)(a.o,{width:48}),(0,h.jsx)(c.Z,{variant:"xs",className:"text-secondary",children:e._(e._("Wallet"))})]})]}),(0,h.jsx)(c.Z,{weight:700,variant:"sm",className:"text-center text-high-emphesis",children:e._(e._("You\u2019ll see these icons next to your balance in various input fields."))})]}),(0,h.jsx)("div",{className:"h-full bg-right bg-no-repeat bg-contain",style:{backgroundImage:"url('/images/trident/AssetInputScreenshot.png')"}})]}),(0,h.jsx)("div",{className:"flex flex-col flex-grow min-h-[160px]",children:(0,h.jsxs)("div",{className:"grid flex-grow grid-cols-2",children:[(0,h.jsx)("div",{className:"h-full bg-no-repeat bg-contain",style:{backgroundImage:"url('/images/trident/AssetInputScreenshot2.png')"}}),(0,h.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2 p-3 px-8",children:[(0,h.jsx)(o.Z,{checked:t,onChange:s}),(0,h.jsx)(c.Z,{weight:700,variant:"sm",className:"text-center text-high-emphesis",children:e._(e._("Use the toggle to switch between balances when interacting with our platform."))})]})]})}),(0,h.jsxs)(c.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:[(0,h.jsx)(c.Z,{variant:"xs",weight:700,component:"span",children:"Tip"}),": ",e._(e._("BentoBox to BentoBox swaps are up to 50% cheaper than normal swaps"))]})]})]})}})}},92088:function(e,t,s){var r=s(13342),n=s(49501),a=s(78980),l=s(71862),i=s(41626),o=s(48410),c=s(54962),d=s(56785),p=s(44554),h=s(15423),u=s(90573),x=s(86047),m=s(12614),g=s(67294),f=s(42802),v=s(85893);const j=(0,g.forwardRef)(((e,t)=>{let{error:s,header:r,walletToggle:n,currency:a,value:l,onChange:i,selected:o,onSelect:c,spendFromWallet:d,priceImpact:h,priceImpactCss:u,disabled:x,inputDisabled:m,currencies:g,balancePanel:f,hideInput:j}=e;return(0,v.jsxs)("div",{className:(0,p.AK)(x?"pointer-events-none opacity-40":"",s?"border-red-800 hover:border-red-500":"border-dark-700 hover:border-dark-600","rounded-[14px] border bg-dark-900 p-3 flex flex-col gap-4"),children:[r({disabled:x,onChange:i,value:l,currency:a,currencies:g,onSelect:c,walletToggle:n,spendFromWallet:d}),!j&&(0,v.jsxs)("div",{className:"flex gap-1 justify-between items-baseline px-1.5",children:[(0,v.jsx)(b,{ref:t,selected:o,error:s,currency:a,currencies:g,value:l,onChange:i,inputDisabled:m,onSelect:c,priceImpact:h,priceImpactCss:u,spendFromWallet:d}),f?f({disabled:x,currency:a,onChange:i,spendFromWallet:d}):(0,v.jsx)(w,{disabled:x,currency:a,onChange:i,spendFromWallet:d})]})]})})),b=(0,g.forwardRef)(((e,t)=>{var s;let{currency:r,value:n,onChange:l,inputDisabled:i,priceImpact:c,priceImpactCss:h}=e;const x=(0,u.NF)((0,p.eo)(n||"1",r)),m=(0,g.useRef)(null),{0:f,1:j}=(0,g.useState)(0),b=(0,g.useMemo)((()=>{if(!c)return;if(c.lessThan("0"))return"text-green";const e=(0,p.oX)(c);return e<1?"text-primary":e<3?"text-yellow":"text-red"}),[c]);return(0,g.useEffect)((()=>{var e;m.current&&j(n?(null===m||void 0===m||null===(e=m.current)||void 0===e?void 0:e.clientWidth)+8:60)}),[n]),(0,v.jsxs)(d.Z,{weight:700,variant:"h3",className:"relative flex items-baseline flex-grow gap-3 overflow-hidden",children:[(0,v.jsx)(o.Z,{ref:t,disabled:i,value:n||"",onUserInput:l,placeholder:"0.00",className:"leading-[36px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed",autoFocus:!0}),!t&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(d.Z,{variant:"xs",className:"text-secondary absolute bottom-1.5 pointer-events-none",component:"span",style:{left:f},children:[(null===x||void 0===x?void 0:x.greaterThan(a.xE))&&(0,v.jsxs)(v.Fragment,{children:["~",(0,p.uf)(null===x||void 0===x?void 0:x.toFixed(),!0,!0,2)," "]}),c&&(0,v.jsxs)("span",{className:b,children:["(",null===c||void 0===c||null===(s=c.multiply(-1))||void 0===s?void 0:s.toSignificant(2),"%)"]})]}),(0,v.jsx)(d.Z,{variant:"h3",weight:700,className:"relative flex flex-row items-baseline",children:(0,v.jsx)("span",{ref:m,className:"opacity-0 absolute pointer-events-none tracking-[0]",children:"".concat(n||"0.00")})})]})]})})),w=e=>{let{disabled:t,currency:s,onChange:r,spendFromWallet:a}=e;const{i18n:l}=(0,n.mV)(),{account:i}=(0,m.aQ)(),o=(0,h.C)(i||void 0,s,a),c=(0,g.useCallback)((()=>{var e;!t&&o&&r&&r(null===(e=(0,p.iN)(o))||void 0===e?void 0:e.toExact())}),[o,t,r]);return(0,v.jsxs)(d.Z,{role:"button",onClick:c,variant:"sm",className:"flex text-secondary whitespace-nowrap",children:[l._(l._("Balance:"))," ",o?o.toSignificant(6):"0.00"]})};t.Z=Object.assign(j,{Header:e=>{let{label:t,selectLabel:s,walletToggle:a,currency:o,onSelect:c,spendFromWallet:h,id:u,currencies:m,hideSearchModal:g}=e;const{i18n:f}=(0,n.mV)(),j=o?(0,v.jsxs)("div",{id:u,className:(0,p.AK)(g?"":"bg-dark-800 hover:bg-dark-700 cursor-pointer","flex items-center gap-2 px-2 py-1 rounded-full shadow-md text-high-emphesis"),children:[(0,v.jsx)(i.X,{currency:o,className:"!rounded-full overflow-hidden",size:20}),t&&(0,v.jsx)(d.Z,{variant:"sm",className:"!text-xl",weight:700,children:t}),(0,v.jsx)(d.Z,{variant:"sm",className:"!text-xl",weight:700,children:h?o.symbol:o.wrapped.symbol}),!g&&(0,v.jsx)(r.Z,{width:18})]}):(0,v.jsxs)(l.ZP,{color:"blue",variant:"filled",size:"sm",id:u,className:"!rounded-full !px-2 !py-0 !h-[32px] !pl-3",children:[s||f._(f._("Select a Token")),(0,v.jsx)(r.Z,{width:18})]});return(0,v.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,v.jsx)("div",{className:"flex items-center",children:g?j:(0,v.jsx)(x.Z,{selectedCurrency:o,onCurrencySelect:e=>c&&c(e),trigger:j,currencyList:m})}),a&&a({spendFromWallet:h})]})},Switch:e=>{let{label:t,onChange:s,id:r,spendFromWallet:a,disabled:l}=e;const{i18n:i}=(0,n.mV)(),o=(0,v.jsxs)(d.Z,{variant:"xs",weight:700,component:"span",className:(0,p.AK)(l?"pointer-events-none opacity-40":"","flex items-center gap-2 !justify-end"),children:[t,(0,v.jsx)(d.Z,{id:r,role:"button",onClick:()=>s(!a),variant:"sm",weight:700,component:"span",className:"flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer text-high-emphesis hover:text-white hover:shadow bg-dark-800 hover:bg-dark-700",children:a?i._(i._("Wallet")):i._(i._("BentoBox"))}),(0,v.jsx)(f.Z,{})]});return l?(0,v.jsx)(c.Z,{text:i._(i._("Not available for legacy route")),children:o}):o}})},15423:function(e,t,s){s.d(t,{C:function(){return o},L:function(){return i}});var r=s(78980),n=s(15393),a=s(22986),l=s(67294);const i=(e,t,s)=>{const i=(0,l.useMemo)((()=>t.every((e=>e))?t.map((e=>e.wrapped.address)):void 0),[t]),o=(0,a.K5)(e,t),{data:c}=(0,n.wu)(i);return(0,l.useMemo)((()=>t.every((e=>!!e))&&c?t.map(((e,t)=>{if(!e)return;let n;return n=!1===(null===s||void 0===s?void 0:s[t])?c.find((t=>(null===t||void 0===t?void 0:t.currency.wrapped.address)===e.wrapped.address)):o.find((t=>(null===t||void 0===t?void 0:t.currency.wrapped.address)===e.wrapped.address)),n||(n=r.ih.fromRawAmount(e.wrapped,"0")),n}),[]):[]),[t,c,s,o])},o=(e,t,s)=>{const r=(0,l.useMemo)((()=>[t]),[t]),n=(0,l.useMemo)((()=>[s]),[s]),a=i(e,r,n);return(0,l.useMemo)((()=>a?a[0]:void 0),[a])}}}]);