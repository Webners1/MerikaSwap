"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5562],{98332:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(13902),s=r(68163),i=r(67294),a=r(44554),l=r(56785),o=r(85893);const c={information:{text:"text-high-emphesis",color:"bg-purple bg-opacity-20 text-high-emphesis",icon:(0,o.jsx)("svg",{className:"h-5 w-5 text-purple",viewBox:"0 0 33 33",xmlns:"http://www.w3.org/2000/svg",path:"currentColor",fill:"currentColor","aria-hidden":"true",children:(0,o.jsx)("path",{d:"M16.5 0C7.40184 0 0 7.40184 0 16.5C0 25.5982 7.40184 33 16.5 33C25.5982 33 33 25.5982 33 16.5C33 7.40184 25.5982 0 16.5 0ZM16.5 25.9909C15.5747 25.9909 14.8245 25.2407 14.8245 24.3154C14.8245 23.39 15.5747 22.6398 16.5 22.6398C17.4253 22.6398 18.1755 23.39 18.1755 24.3154C18.1755 25.2407 17.4253 25.9909 16.5 25.9909ZM18.1755 17.3898C18.1755 18.3152 17.4253 19.0654 16.5 19.0654C15.5747 19.0654 14.8245 18.3152 14.8245 17.3898V8.56534C14.8245 7.63999 15.5747 6.8898 16.5 6.8898C17.4253 6.8898 18.1755 7.63999 18.1755 8.56534V17.3898Z",fill:"currentColor"})})},warning:{text:"text-high-emphesis",color:"bg-yellow bg-opacity-25 text-high-emphesis",icon:(0,o.jsx)("svg",{className:"w-5 h-5 text-yellow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})},error:{text:"text-red",color:"bg-red bg-opacity-25 text-high-emphesis",icon:(0,o.jsx)(n.Z,{className:"h-5 w-5 text-red"})}};function d(e){let{title:t,message:r,type:n="warning",className:d="",showIcon:h=!1,dismissable:u=!0}=e;const{0:x,1:m}=(0,i.useState)(!0),{color:p,icon:f,text:g}=c[n];return r&&x?(0,o.jsxs)("div",{className:(0,a.AK)("flex flex-row rounded p-4 gap-3",p,d),children:[h&&(0,o.jsx)("div",{children:f}),(0,o.jsxs)("div",{className:"flex flex-col gap-1.5 justify-center",children:[t&&(0,o.jsx)(l.Z,{weight:700,className:(0,a.AK)(g,"text-left inline leading-6"),children:t}),(0,o.jsx)(l.Z,{variant:"sm",weight:700,className:(0,a.AK)(g,"text-left"),children:r})]}),u&&(0,o.jsxs)("button",{type:"button",onClick:()=>m(!x),className:"inline-flex opacity-80 hover:opacity-100 focused:opacity-100 rounded text-primary hover:text-high-emphesis focus:text-high-emphesis focus:outline-none focus:ring focus:ring-offset focus:ring-offset-purple focus:ring-purple",children:[(0,o.jsx)("span",{className:"sr-only",children:"Dismiss"}),(0,o.jsx)(s.Z,{className:"w-5 h-5","aria-hidden":"true"})]})]}):null}},94492:function(e,t,r){r.d(t,{Z:function(){return I}});var n,s=r(64343),i=r(24635),a=r(49501),l=r(71862),o=r(45486),c=r(46430),d=r(38457),h=r(54962),u=r(573),x=r(58771),m=r(16682),p=r(44554),f=r(16339),g=r(37643),v=r(627),w=r(67294),j=r(56785),_=r(85893);!function(e){e.InvalidInput="InvalidInput"}(n||(n={}));var N=e=>{let{placeholderSlippage:t,trident:r=!1}=e;const{i18n:s}=(0,a.mV)(),i=(0,f.T)(),{error:o,percent:c,input:d}=(0,f.C)(g.Tz),u=c.equalTo(g.Ru),[N,b]=(0,v.A6)(),{0:Z,1:y}=(0,w.useState)(""),{0:k,1:I}=(0,w.useState)(!1);return(0,_.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,_.jsxs)("div",{className:"grid gap-2",children:[(0,_.jsxs)("div",{className:"flex items-center",children:[(0,_.jsx)(j.Z,{variant:"xs",weight:700,className:"text-high-emphesis",children:s._(s._("Slippage tolerance"))}),(0,_.jsx)(h.Z,{text:s._(s._("Your transaction will revert if the price changes unfavorably by more than this percentage."))})]}),(0,_.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,_.jsx)("div",{className:(0,p.AK)(o===g.Hd.INVALID_INPUT?"border-red/60":o===g.Hd.TOO_LOW||o===g.Hd.TOO_HIGH?"border-yellow/60":u?"border-dark-800":"border-blue","border-2 h-[36px] flex items-center px-2 rounded bg-dark-1000/40"),tabIndex:-1,children:(0,_.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[o===g.Hd.TOO_LOW||o===g.Hd.TOO_HIGH?(0,_.jsx)(x.Z,{className:"text-yellow",width:24}):null,(0,_.jsx)("input",{id:"text-slippage",className:(0,p.AK)(o===g.Hd.INVALID_INPUT?"text-red":"","bg-transparent placeholder-low-emphesis min-w-0 w-full font-bold"),placeholder:null===t||void 0===t?void 0:t.toFixed(2),value:d,onChange:e=>i((0,g.l_)(e.target.value)),onBlur:()=>o===g.Hd.INVALID_INPUT?i((0,g.l_)(g.QK)):i((0,g.w5)()),color:o===g.Hd.INVALID_INPUT?"red":"",autoComplete:"off"}),"%"]})}),(0,_.jsx)("div",{children:(0,_.jsx)(l.ZP,{size:"sm",color:u?"blue":"gray",variant:"outlined",onClick:()=>i((0,g.l_)(g.QK)),children:s._(s._("Auto"))})})]}),o?(0,_.jsx)(j.Z,{className:(0,p.AK)(o===g.Hd.INVALID_INPUT?"text-red":"text-yellow","font-medium flex items-center space-x-2"),variant:"xs",weight:700,children:(0,_.jsx)("div",{children:o===g.Hd.INVALID_INPUT?s._(s._("Enter a valid slippage percentage")):o===g.Hd.TOO_HIGH?s._(s._("Your transaction may be frontrun")):s._(s._("Your transaction may fail"))})}):null]}),!r&&(0,_.jsxs)("div",{className:"grid gap-2",children:[(0,_.jsxs)("div",{className:"flex items-center",children:[(0,_.jsx)(j.Z,{variant:"xs",weight:700,className:"text-high-emphesis",children:s._(s._("Transaction deadline"))}),(0,_.jsx)(h.Z,{text:s._(s._("Your transaction will revert if it is pending for more than this long."))})]}),(0,_.jsxs)("div",{className:"flex items-center gap-2",children:[(0,_.jsx)("input",{className:(0,p.AK)(k?"text-red":"","font-bold h-[36px] placeholder-low-emphesis bg-dark-1000/40 border-2 border-dark-800 rounded px-2  max-w-[100px] focus:border-blue"),placeholder:(m.PY/60).toString(),value:Z.length>0?Z:N===m.PY?"":(N/60).toString(),onChange:e=>function(e){if(y(e),I(!1),0===e.length)b(m.PY);else try{const t=Math.floor(60*Number.parseFloat(e));!Number.isInteger(t)||t<60||t>=Number.MAX_SAFE_INTEGER?I(n.InvalidInput):b(t)}catch(t){console.error(t),I(n.InvalidInput)}}(e.target.value),onBlur:()=>{y(""),I(!1)},color:k?"red":""}),(0,_.jsx)(j.Z,{variant:"sm",weight:700,className:"text-secondary",children:s._(s._("minutes"))})]})]})]})},b=r(38239),Z=r(7582),y=r(12614),k=r(90849);var I=e=>{let{placeholderSlippage:t,className:r,trident:n=!1}=e;const{i18n:x}=(0,a.mV)(),{chainId:m}=(0,y.aQ)(),f=(0,k.nU)(),[g,I]=(0,v.DG)(),[C,T]=(0,v.RO)(),{0:A,1:H}=(0,w.useState)(!1),[S,D]=(0,v.Cp)(),E=(0,Z.Z)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.Z,{placement:"bottom-end",content:(0,_.jsxs)("div",{className:"flex flex-col gap-3 p-3 border rounded shadow-xl bg-dark-900 w-80 border-dark-700",children:[(0,_.jsxs)("div",{className:"flex flex-col gap-4 p-3 border rounded border-dark-800/60",children:[(0,_.jsx)(j.Z,{variant:"xxs",weight:700,className:"text-secondary",children:x._(x._("Transaction Settings"))}),(0,_.jsx)(N,{placeholderSlippage:t,trident:n})]}),(0,_.jsxs)("div",{className:"flex flex-col gap-3 p-3 border rounded border-dark-800/60",children:[(0,_.jsx)(j.Z,{variant:"xxs",weight:700,className:"text-secondary",children:x._(x._("Interface Settings"))}),(0,_.jsxs)("div",{className:"flex items-center justify-between",children:[(0,_.jsxs)("div",{className:"flex items-center",children:[(0,_.jsx)(j.Z,{variant:"xs",className:"text-high-emphesis",weight:700,children:x._(x._("Toggle expert mode"))}),(0,_.jsx)(h.Z,{text:x._(x._("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."))})]}),(0,_.jsx)(u.Z,{size:"sm",id:"toggle-expert-mode-button",checked:g,onChange:g?()=>{I(),H(!1)}:()=>{f(),H(!0)},checkedIcon:(0,_.jsx)(s.Z,{className:"text-dark-700"}),uncheckedIcon:(0,_.jsx)(o.Z,{}),color:"gradient"})]}),!n&&(0,_.jsxs)("div",{className:"flex items-center justify-between",children:[(0,_.jsxs)("div",{className:"flex items-center",children:[(0,_.jsx)(j.Z,{variant:"xs",className:"text-high-emphesis",weight:700,children:x._(x._("Disable multihops"))}),(0,_.jsx)(h.Z,{text:x._(x._("Restricts swaps to direct pairs only."))})]}),(0,_.jsx)(u.Z,{size:"sm",id:"toggle-disable-multihop-button",checked:C,onChange:()=>T(!C),checkedIcon:(0,_.jsx)(s.Z,{className:"text-dark-700"}),uncheckedIcon:(0,_.jsx)(o.Z,{}),color:"gradient"})]}),(0,p.vR)(b.L.SUSHIGUARD,null!==m&&void 0!==m?m:-1)&&E&&(0,_.jsxs)("div",{className:"flex items-center justify-between",children:[(0,_.jsxs)("div",{className:"flex items-center",children:[(0,_.jsx)(j.Z,{variant:"xs",className:"text-high-emphesis",weight:700,children:x._(x._("SushiGuard Protector"))}),(0,_.jsx)(h.Z,{text:x._(x._("SushiGuard protects your trades from MEV, like frontrunning."))})]}),(0,_.jsx)(u.Z,{size:"sm",id:"toggle-use-sushiguard",checked:S,onChange:()=>D(!S),checkedIcon:(0,_.jsx)(s.Z,{className:"text-dark-700"}),uncheckedIcon:(0,_.jsx)(o.Z,{}),color:"gradient"})]})]})]}),children:(0,_.jsx)("div",{className:(0,p.AK)(r,"flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"),children:(0,_.jsx)(i.Z,{className:"w-[26px] h-[26px] transform rotate-90 hover:text-white"})})}),(0,_.jsx)(c.Z.Controlled,{isOpen:A,onDismiss:()=>H(!1),maxWidth:"md",children:(0,_.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,_.jsx)(c.Z.Header,{header:x._(x._("Confirm")),onClose:()=>H(!1)}),(0,_.jsxs)(c.Z.BorderedContent,{className:"flex flex-col gap-3 !border-yellow/40",children:[(0,_.jsx)(j.Z,{variant:"xs",weight:700,className:"text-secondary",children:x._(x._("Only use this mode if you know what you are doing."))}),(0,_.jsx)(j.Z,{variant:"sm",weight:700,className:"text-yellow",children:x._(x._("Expert mode turns off the confirm transaction prompt and allows high slippage trades\nthat often result in bad rates and lost funds."))})]}),(0,_.jsx)(l.ZP,{id:"confirm-expert-mode",color:"blue",variant:"filled",onClick:()=>{I(),H(!1)},children:x._(x._("Enable Expert Mode"))})]})})]})}},22441:function(e,t,r){var n=r(49501),s=r(78980),i=r(46430),a=r(56785),l=r(62828),o=r(53389),c=r(2886),d=(r(67294),r(85893));t.Z=e=>{let{children:t}=e;const{i18n:r}=(0,n.mV)(),{poolWithState:h}=(0,l.x)(),u=(0,o.bL)(null===h||void 0===h?void 0:h.pool),{result:x}=(0,c.Wk)(u,"barFee");return(0,d.jsx)(i.Z,{trigger:t,children:e=>{var t,n;let{setOpen:l}=e;return(0,d.jsxs)("div",{className:"flex flex-col gap-4 lg:max-w-2xl",children:[(0,d.jsx)(i.Z.Header,{header:r._(r._("Transaction Details")),onClose:()=>l(!1)}),(0,d.jsxs)(i.Z.BorderedContent,{className:"flex flex-col gap-4 border-dark-800",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r._(r._("Minimum Received"))}),(0,d.jsx)(a.Z,{variant:"sm",children:r._(r._("The minimum amount you\u2019ll receive from your transaction, or else the transaction will revert."))})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r._(r._("Price Impact"))}),(0,d.jsxs)(a.Z,{variant:"sm",children:[r._(r._("The difference between market price and estimated price due to the proportional makeup of the assets deposited."))," "]})]})]}),(0,d.jsxs)(i.Z.BorderedContent,{className:"flex flex-col gap-4",children:[(null===h||void 0===h||null===(t=h.pool)||void 0===t?void 0:t.fee)&&(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r._(r._("Liquidity Provider Fee"))}),(0,d.jsx)(a.Z,{variant:"sm",children:r._(r._("{0}% of each swap goes to liquidity providers.",{0:new s.iA(null===h||void 0===h||null===(n=h.pool)||void 0===n?void 0:n.fee.toString(),100).toSignificant(2)}))})]}),x&&Array.isArray(x)&&x.length>0&&(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r._(r._("xSUSHI Fee"))}),(0,d.jsxs)(a.Z,{variant:"sm",children:[r._(r._("{0}% of each swap goes to xSUSHI holders.",{0:new s.iA(x[0],100).toSignificant(2)}))," "]})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r._(r._("Estimated network Fee"))}),(0,d.jsx)(a.Z,{variant:"sm",children:r._(r._("This is our estimate of how much the gas cost for your transaction will be. Your wallet will give the true and final gas cost, which may be different from what is quoted."))})]})]}),(0,d.jsx)(i.Z.BorderedContent,{className:"border-purple/60",children:(0,d.jsx)(a.Z,{variant:"sm",children:r._(r._("Depositing with Zap Mode involves swapping your asset for the assets in the pool - this makes your transaction subject to swap-related fees."))})})]})}})}},67347:function(e,t,r){r.d(t,{CG:function(){return l},H7:function(){return a},Il:function(){return d},VU:function(){return u},Wb:function(){return o},gc:function(){return c},uE:function(){return h},x:function(){return i}});var n=r(84243),s=r(78980);const i=e=>{let{contract:t,fn:r,args:n}=e;return t.interface.encodeFunctionData(r,n)},a=e=>{let{contract:t,actions:r=[]}=e;const n=r.filter(Boolean);if(0===n.length)throw new Error("No valid actions");return 1===n.length?n[0]:n.length>1?t.interface.encodeFunctionData("multicall",[n]):void 0},l=e=>{let{router:t,address:r,amount:s,recipient:i,receiveToWallet:a,liquidityOutput:l}=e;return t.interface.encodeFunctionData("burnLiquidity",[r,s,n.$.encode(["address","bool"],[i,a]),l])},o=e=>{let{router:t,token:r,address:s,amount:i,recipient:a,receiveToWallet:l,minWithdrawal:o}=e;return t.interface.encodeFunctionData("burnLiquiditySingle",[s,i,n.$.encode(["address","address","bool"],[r,a,l]),o])},c=e=>{let{chainId:t,router:r,recipient:n,amountMinimum:i}=e;return t===s.a_.MATIC?r.interface.encodeFunctionData("unwrapWETH",[i,n]):r.interface.encodeFunctionData("unwrapWETH",[n])},d=e=>{let{router:t,token:r,amount:n,recipient:s}=e;return t.interface.encodeFunctionData("sweepNativeToken",[r,n,s])},h=e=>{let{router:t,signature:r}=e;if(!r)return;const{v:n,r:s,s:i}=r;return t.interface.encodeFunctionData("approveMasterContract",[n,s,i])},u=e=>{let{router:t,signatureData:r}=e;if(!r)return;const{tokenAddress:n,amount:s,deadline:i,v:a,r:l,s:o}=r;return t.interface.encodeFunctionData("selfPermit",[n,s,i,a,l,o])}},7582:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(10915);function s(){return!(0,n.Z)()}},24635:function(e,t,r){var n=r(67294);const s=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))}));t.Z=s},13902:function(e,t,r){var n=r(67294);const s=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}));t.Z=s},2905:function(e,t,r){var n=r(67294);const s=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}));t.Z=s}}]);