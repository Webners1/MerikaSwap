"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9469],{49932:function(e,n,t){var r=t(59499),o=t(49501),i=t(78980),a=t(71862),s=t(27262),u=t(69137),d=t(44232),l=t(12614),c=t(90849),p=t(67294),v=t(85893);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const O=(0,p.memo)((e=>{var n;let{inputAmount:t,onStateChange:r,tokenApproveOn:i,id:u,onSLPPermit:l}=e;const{i18n:c}=(0,o.mV)(),[m,O]=(0,s.qL)(null===t||void 0===t?void 0:t.wrapped,i),{gatherPermitSignature:f,signatureData:g}=(0,d.j3)(["Uniswap V2","Sushi LP Token"].includes(null!==(n=null===t||void 0===t?void 0:t.currency.name)&&void 0!==n?n:"")?null===t||void 0===t?void 0:t.wrapped:void 0,i),P=(0,p.useCallback)((async()=>{if(f)try{await f()}catch(e){await O()}else await O()}),[O,f]);return(0,p.useEffect)((()=>{if(g&&t&&m===s.UK.NOT_APPROVED){if(!l)throw new Error("onSLPPermit callback not defined");l(g)}}),[m,t,l,r,g]),(0,p.useEffect)((()=>{if(null!==t&&void 0!==t&&t.currency.wrapped.address)return r((e=>y(y({},e),{},{[t.currency.wrapped.address]:g?s.UK.APPROVED:m}))),()=>r((e=>{const n=y({},e);return n[t.currency.wrapped.address]&&delete n[t.currency.wrapped.address],n}))}),[m,t,null===t||void 0===t?void 0:t.currency.wrapped.address,r,g]),!g&&[s.UK.NOT_APPROVED,s.UK.PENDING].includes(m)?(0,v.jsx)(a.ZP,{fullWidth:!0,id:u,loading:m===s.UK.PENDING,color:"blue",onClick:P,children:c._(c._("Approve {0}",{0:null===t||void 0===t?void 0:t.currency.symbol}))}):(0,v.jsx)(v.Fragment,{})}));n.Z=e=>{let{spendFromWallet:n=!0,inputAmounts:t,tokenApproveOn:r,children:d,withPermit:m=!1,masterContractAddress:y,permit:f,onPermit:g,onSLPPermit:P,onPermitError:b}=e;const{account:h}=(0,l.aQ)(),{i18n:N}=(0,o.mV)(),A=(0,c.mq)(),{0:w,1:S}=(0,p.useState)({}),{0:D,1:E}=(0,p.useState)(!1),{approve:j,approvalState:k,getPermit:T,permit:I}=(0,u.ZP)(m?y:void 0,{}),L=Object.values(w).some((e=>e===s.UK.UNKNOWN))||!!m&&k===u.kG.UNKNOWN,C=(Object.values(w).every((e=>e===s.UK.APPROVED))||!n)&&(!m||k===u.kG.APPROVED),U=(0,p.useCallback)((async()=>{if(m&&!D){const e=await T();null!==e&&void 0!==e&&e.signature&&g?g(e.signature):b&&(E(!0),b())}else await j()}),[j,T,g,b,D,m]);return(0,v.jsxs)("div",{className:"flex flex-col gap-3",children:[t.every((e=>null===e||void 0===e?void 0:e.greaterThan(i.xE)))&&[u.kG.NOT_APPROVED,u.kG.PENDING].includes(k)&&(0,v.jsx)(a.ZP,{id:"btn-approve",loading:k===u.kG.PENDING,onClick:U,children:N._(N._("Approve BentoBox"))}),r&&t.reduce(((e,n,t)=>(null!==n&&void 0!==n&&n.currency.isNative||null===n||void 0===n||!n.greaterThan(i.xE)||e.push((0,v.jsx)(O,{id:"btn-approve",inputAmount:n,onStateChange:S,tokenApproveOn:r,onSLPPermit:P},t)),e)),[]),h?d({approved:C||!!f,loading:L,permit:I}):(0,v.jsx)(a.ZP,{color:"gradient",onClick:A,children:N._(N._("Connect Wallet"))})]})}},61647:function(e,n,t){t.d(n,{C:function(){return u}});var r=t(78980),o=t(2886),i=t(67294),a=t(54907);const s=e=>{const n=(0,i.useMemo)((()=>e.map((e=>[null===e||void 0===e?void 0:e.wrapped.address]))),[e]),t=(0,a.rO)(),s=(0,o.es)(t,"totals",n),u=(0,i.useMemo)((()=>s.some((e=>e.loading))),[s]);return(0,i.useMemo)((()=>({rebases:e.reduce(((e,n,t)=>{const o=s[t];return n&&(null!==o&&void 0!==o&&o.result?e[n.wrapped.address]={token:n.wrapped,base:r.QA.BigInt(o.result.base.toString()),elastic:r.QA.BigInt(o.result.elastic.toString())}:e[n.wrapped.address]=void 0),e}),{}),loading:u})),[u,s,e])},u=e=>{const n=(0,i.useMemo)((()=>[e]),[e]),{rebases:t,loading:r}=s(n);return(0,i.useMemo)((()=>e&&!r?{rebase:t[null===e||void 0===e?void 0:e.wrapped.address],loading:r}:{rebase:void 0,loading:r}),[r,t,e])};n.Z=s},92037:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2886),o=t(54907);function i(){var e,n;const t=(0,o.h$)();return null===(e=(0,r.Wk)(t,"getCurrentBlockTimestamp"))||void 0===e||null===(n=e.result)||void 0===n?void 0:n[0]}},44232:function(e,n,t){t.d(n,{j3:function(){return S},pO:function(){return w}});var r,o=t(59499),i=t(16441),a=t(78980),s=t(33624),u=t(2886),d=t(12614),l=t(67294),c=t(54907),p=t(67993),v=t(66367);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED"}(r||(r={}));const O={1:{[s.gn.address]:{type:r.AMOUNT,name:"USD Coin",version:"2"},[s.h1.address]:{type:r.ALLOWED,name:"Dai Stablecoin",version:"1"},[a.hs[1].address]:{type:r.AMOUNT,name:"SushiSwap"}},4:{"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735":{type:r.ALLOWED,name:"Dai Stablecoin",version:"1"},[a.hs[4].address]:{type:r.AMOUNT,name:"SushiSwap"}},3:{[a.hs[3].address]:{type:r.AMOUNT,name:"SushiSwap"},"0x07865c6E87B9F70255377e024ace6630C1Eaa37F":{type:r.AMOUNT,name:"USD Coin",version:"2"}},5:{[a.hs[5].address]:{type:r.AMOUNT,name:"SushiSwap"}},42:{[a.hs[42].address]:{type:r.AMOUNT,name:"SushiSwap"}}};let f;!function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED"}(f||(f={}));const g=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],P=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],b=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],h=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];function N(e,n,t){var o,s;const{account:m,chainId:N,library:A}=(0,d.aQ)(),w=(0,v.Z)(),S=null!==e&&void 0!==e&&null!==(o=e.currency)&&void 0!==o&&o.isToken?e.currency.address:void 0,D=(0,c.N9)(S),E=(0,p.Z)(),j=(0,l.useMemo)((()=>[null!==m&&void 0!==m?m:void 0]),[m]),k=(0,u.Wk)(D,"nonces",j),T=null!==t&&void 0!==t?t:N&&S?null===(s=O[N])||void 0===s?void 0:s[S]:void 0,{0:I,1:L}=(0,l.useState)(null);return(0,l.useMemo)((()=>{var t,o;if(E||!e||!D||!m||!N||!w||!A||!k.valid||!S||!n||!T)return{state:f.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const s=null===(t=k.result)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.toNumber();if(k.loading||"number"!==typeof s)return{state:f.LOADING,signatureData:null,gatherPermitSignature:null};const u=I&&I.owner===m&&I.deadline>=w.toNumber()&&I.tokenAddress===S&&I.nonce===s&&I.spender===n&&("allowed"in I||a.QA.equal(a.QA.BigInt(I.amount),e.quotient));return{state:u?f.SIGNED:f.NOT_SIGNED,signatureData:u?I:null,gatherPermitSignature:async function(){const t=T.type===r.ALLOWED,o=w.toNumber()+1200,a=e.quotient.toString(),u=t?{holder:m,spender:n,allowed:t,nonce:s,expiry:o}:{owner:m,spender:n,value:a,nonce:s,deadline:o},d=T.version?{name:T.name,version:T.version,verifyingContract:S,chainId:N}:{name:T.name,verifyingContract:S,chainId:N},l=JSON.stringify({types:{EIP712Domain:T.version?g:P,Permit:t?h:b},domain:d,primaryType:"Permit",message:u});return A.send("eth_signTypedData_v4",[m,l]).then(i.splitSignature).then((e=>{L(y(y({v:e.v,r:e.r,s:e.s,deadline:o},t?{allowed:t}:{amount:a}),{},{nonce:s,chainId:N,owner:m,spender:n,tokenAddress:S,permitType:T.type}))}))}}}),[E,e,D,m,N,w,A,k.valid,k.result,k.loading,S,n,T,I])}const A={version:"1",name:"SushiSwap LP Token",type:r.AMOUNT};function w(e,n){return N(e,n,A)}function S(e,n){const t=(0,c.N9)(null===e||void 0===e?void 0:e.currency.address),o=(0,u.Wk)(t,"name"),i=(0,l.useMemo)((()=>{var e;return null!==o&&void 0!==o&&null!==(e=o.result)&&void 0!==e&&e.length?null===o||void 0===o?void 0:o.result[0]:void 0}),[o]);return N(e?a.ih.fromRawAmount(e.currency,a.Bz):void 0,n,{version:"1",name:null!==i&&void 0!==i?i:"",type:r.AMOUNT})}},67993:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(2886),o=t(12614),i=t(67294),a=t(54907);function s(){var e,n;const{account:t}=(0,o.aQ)(),s=(0,a.c5)(),u=(0,i.useMemo)((()=>[null!==t&&void 0!==t?t:void 0]),[t]),d=(0,r.Wk)(s,"isArgentWallet",u,r.DB);return null!==(e=null===d||void 0===d||null===(n=d.result)||void 0===n?void 0:n[0])&&void 0!==e&&e}},66367:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(16339),o=t(67294),i=t(92037);function a(){const e=(0,r.C)((e=>e.user.userDeadline)),n=(0,i.Z)();return(0,o.useMemo)((()=>{if(n&&e)return n.add(e)}),[n,e])}}}]);