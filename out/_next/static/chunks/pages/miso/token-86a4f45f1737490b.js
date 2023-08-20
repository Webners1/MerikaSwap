(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6341],{72356:function(e,t,n){"use strict";var s=n(49501),i=n(78980),r=n(25401),a=n(64527),o=n(12614),l=n(67294);t.Z=()=>{const{i18n:e}=(0,s.mV)(),{chainId:t}=(0,o.aQ)(),n=(0,l.useCallback)((t=>({[a.iv.FIXED]:e._(e._("Fixed")),[a.iv.SUSHI]:e._(e._("Sushi")),[a.iv.MINTABLE]:e._(e._("Mintable"))}[t])),[e]);return{map:(0,l.useMemo)((()=>{var e,n,s,o,l,c,d,u,h,m,v,p;if(t)return{[null===(e=r[t])||void 0===e||null===(n=e[i.bk[t]])||void 0===n?void 0:n.contracts.FixedToken.address]:a.iv.FIXED,[null===(s=r[t])||void 0===s||null===(o=s[i.bk[t]])||void 0===o?void 0:o.contracts.SushiToken.address]:a.iv.SUSHI,[null===(l=r[t])||void 0===l||null===(c=l[i.bk[t]])||void 0===c?void 0:c.contracts.MintableToken.address]:a.iv.MINTABLE,[a.iv.FIXED]:null===(d=r[t])||void 0===d||null===(u=d[i.bk[t]])||void 0===u?void 0:u.contracts.FixedToken,[a.iv.SUSHI]:null===(h=r[t])||void 0===h||null===(m=h[i.bk[t]])||void 0===m?void 0:m.contracts.SushiToken,[a.iv.MINTABLE]:null===(v=r[t])||void 0===v||null===(p=v[i.bk[t]])||void 0===p?void 0:p.contracts.MintableToken}}),[t]),templateIdToLabel:n}}},12281:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var s=n(19485);const i=n(74231).Z_().test("is-address","${value} is not a valid address",(e=>{if(0===(null===e||void 0===e?void 0:e.length))return!0;try{return!(!e||!(0,s.getAddress)(e))}catch{return!1}}))},77191:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var s=n(94323),i=n(49501),r=n(71862),a=n(56785),o=n(38239),l=n(59499),c=n(95496),d=n(78980),u=n(25401),h=n(29300),m=n(12614),v=n(67294),p=n(87536),b=n(85893);var x=e=>{var t,n;let{}=e;const{chainId:s}=(0,m.aQ)(),{i18n:r}=(0,i.mV)(),a=(0,p.qo)({name:"tokenTypeAddress"});return(0,b.jsxs)(h.Z.Section,{header:(0,b.jsx)(h.Z.Section.Header,{header:r._(r._("Token Details"))}),className:"pt-8",children:[(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsx)(h.Z.TextField,{name:"tokenName",label:r._(r._("Name*")),helperText:r._(r._("This will be the name of your token. Choose wisely, this is final and immutable.")),placeholder:"The name of your token"})}),(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsx)(h.Z.TextField,{name:"tokenSymbol",label:r._(r._("Symbol*")),helperText:r._(r._("This will be the symbol of your token. Choose wisely, this is final and immutable.")),placeholder:"The symbol of your token"})}),(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsx)(h.Z.TextField,{name:"tokenSupply",label:r._(r._("Initial Supply*")),helperText:a===(s?null===(t=u[s])||void 0===t||null===(n=t[d.bk[s]])||void 0===n?void 0:n.contracts.FixedToken.address:void 0)?r._(r._("This will be the initial supply of your token. Because your token type is set to fixed. This value will be final and immutable")):r._(r._("This will be the initial supply of your token.")),placeholder:"The name of your token"})})]})},y=n(56727),j=n(42144),f=n(72356),k=n(64527),g=n(44554);var w=()=>{const{watch:e,setValue:t}=(0,p.Gc)(),n=e("tokenTypeAddress"),{i18n:s}=(0,i.mV)(),{map:r,templateIdToLabel:o}=(0,f.Z)(),l=[{icon:(0,b.jsx)(j.Wh,{height:83,width:83}),address:null===r||void 0===r?void 0:r[k.iv.FIXED],value:k.iv.FIXED,label:o(k.iv.FIXED),description:s._(s._('A "standard" ERC20 token with a fixed supply and protections against further token minting or burning.'))},{icon:(0,b.jsx)(j.ZF,{height:83,width:83}),address:null===r||void 0===r?void 0:r[k.iv.MINTABLE],value:k.iv.MINTABLE,label:o(k.iv.MINTABLE),description:s._(s._("An ERC20 token with a function allowing further minting at a later date. Creators will have to assign an owner for the minting controls."))},{icon:(0,b.jsx)(j.tG,{height:83,width:83}),address:null===r||void 0===r?void 0:r[k.iv.SUSHI],value:k.iv.SUSHI,label:o(k.iv.SUSHI),description:s._(s._("Sushi tokens function similar to mintable tokens but with additional capabilities built into the token. Creators will have to assign an owner address for token functions during minting."))}];return(0,b.jsx)(h.Z.Section,{columns:6,header:(0,b.jsx)(h.Z.Section.Header,{header:s._(s._("Select Token Type")),subheader:s._(s._("Decide on the type of token"))}),children:(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsxs)(y.Ee,{value:n,onChange:e=>t("tokenTypeAddress",e),className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10",children:[(0,b.jsx)("input",{className:"hidden",name:"tokenTypeAddress",value:n,onChange:()=>{}}),l.map((e=>{let{icon:t,value:n,address:s,label:i,description:r}=e;return(0,b.jsx)(y.Ee.Option,{value:s,children:e=>{let{checked:n}=e;return(0,b.jsxs)("div",{className:(0,g.AK)(n?"bg-dark-1000/40":"bg-dark-900","flex flex-col gap-4 border border-dark-800 p-5 rounded h-full cursor-pointer"),children:[(0,b.jsx)(a.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:i}),t,(0,b.jsx)(a.Z,{className:"text-high-emphesis",children:r})]})}},n)}))]})})})},_=n(22244),T=n(46430),O=n(84243),S=n(53389),N=n(68411),Z=n(18269);var C=()=>{var e,t,n,s;const{account:i,chainId:r}=(0,m.aQ)(),a=(0,N.h7)(),o=(0,S.cq)(r?null===(e=u[r])||void 0===e||null===(t=e[d.bk[r]])||void 0===t?void 0:t.contracts.MISOTokenFactory.address:void 0,r?null===(n=u[r])||void 0===n||null===(s=n[d.bk[r]])||void 0===s?void 0:s.contracts.MISOTokenFactory.abi:void 0);return{subscribe:(0,v.useCallback)(((e,t)=>{o&&o.on(e,t)}),[o]),unsubscribe:(0,v.useCallback)(((e,t)=>{o&&o.off(e,t)}),[o]),init:(0,v.useCallback)((async(e,t,n,s)=>{if(!o)throw new Error("Contract not initialized");if(!i)throw new Error("Wallet not connected");const r=await o.getTemplateId(s),l=await o.createToken(r,i,O.$.encode(["string","string","address","uint256"],[e,t,i,(0,Z.toWei)(n.toString())]));return a(l,{summary:"Initialize Fixed Token"}),l}),[i,a,o])}},I=n(15003),E=n(70028),P=n(69260),D=n.n(P);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=e=>{let{txHash:t,onDismiss:n,tokenAddress:s}=e;const{i18n:r}=(0,i.mV)();return(0,b.jsx)(E.S.SubmittedModalContent,{txHash:t,header:r._(r._("Success!")),subheader:r._(r._("Token creation transaction successfully submitted. Your newly created token address will appear here once we receive the event from the blockchain")),onDismiss:n,actions:(0,b.jsx)(E.S.Action,F(F({main:!0,disabled:!s},!s&&{startIcon:(0,b.jsx)("div",{className:"w-4 h-4 mr-1",children:(0,b.jsx)(D(),{animationData:_,autoplay:!0,loop:!0})})}),{},{children:(0,b.jsx)("a",{href:"/miso/auction?token=".concat(s),target:"_blank",rel:"noreferrer",className:s?"":"pointer-events-none",children:r._(r._("Create auction"))})})),children:(0,b.jsxs)("div",{className:"flex flex-col px-4 py-3 bg-dark-900 rounded border border-dark-700 mt-4",children:[(0,b.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Token Address"))}),s?(0,b.jsx)(a.Z,{variant:"sm",className:"text-high-emphesis",weight:700,children:(0,b.jsx)(I.Z,{toCopy:s,className:"text-high-emphesis opacity-100",children:s})}):(0,b.jsx)("div",{className:"w-4 h-4",children:(0,b.jsx)(D(),{animationData:_,autoplay:!0,loop:!0})})]})})};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=e=>{let{open:t,onDismiss:n,data:s}=e;const{i18n:r}=(0,i.mV)(),{0:o,1:l}=(0,v.useState)(),{0:c,1:d}=(0,v.useState)(!1),{init:u,subscribe:h,unsubscribe:m}=C(),{0:p,1:x}=(0,v.useState)(),{0:y,1:j}=(0,v.useState)(),{map:k,templateIdToLabel:g}=(0,f.Z)(),w=(0,v.useCallback)((()=>{c||(x(void 0),l(void 0),j(void 0))}),[c]),O=(0,v.useCallback)((()=>{w(),n()}),[n,w]),S=(0,v.useCallback)((async e=>{d(!0);try{const t=await u(e.tokenName,e.tokenSymbol,e.tokenSupply,e.tokenTypeAddress);null!==t&&void 0!==t&&t.hash&&(l(t.hash),await t.wait())}catch(n){var t;j(null===(t=n.error)||void 0===t?void 0:t.message)}finally{d(!1)}}),[u]);return(0,v.useEffect)((()=>(h("TokenCreated",((e,t,n,s)=>{let{transactionHash:i}=s;(null===i||void 0===i?void 0:i.toLowerCase())===(null===o||void 0===o?void 0:o.toLowerCase())&&x(t)})),()=>{m("TokenCreated",(()=>console.log("unsubscribed")))})),[h,o,m]),(0,b.jsx)(T.Z.Controlled,{isOpen:t,onDismiss:O,afterLeave:()=>l(void 0),children:o?(0,b.jsx)(M,{txHash:o,tokenAddress:p,onDismiss:O}):(0,b.jsxs)(T.Z.Body,{children:[(0,b.jsx)(T.Z.Header,{header:r._(r._("Create Token")),subheader:r._(r._("Please review your entered details thoroughly."))}),(0,b.jsx)(T.Z.Content,{children:(0,b.jsx)("div",{className:"flex flex-col gap-4",children:(0,b.jsxs)("div",{className:"flex flex-col divide-y divide-dark-700",children:[(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Type"))}),(0,b.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:g(null===k||void 0===k?void 0:k[s.tokenTypeAddress])})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Name"))}),(0,b.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:s.tokenName})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Symbol"))}),(0,b.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:s.tokenSymbol})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Total Supply"))}),(0,b.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:s.tokenSupply})]})]})})}),(0,b.jsxs)(T.Z.Actions,{children:[(0,b.jsx)(T.Z.Action,{onClick:O,children:r._(r._("Cancel"))}),(0,b.jsx)(T.Z.Action,H(H({main:!0},c&&{startIcon:(0,b.jsx)("div",{className:"w-4 h-4 mr-1",children:(0,b.jsx)(D(),{animationData:_,autoplay:!0,loop:!0})})}),{},{disabled:c,onClick:()=>S(s),children:r._(r._("Create Token"))}))]}),(0,b.jsx)(T.Z.Error,{children:y})]})})},X=n(12281),q=n(74231);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const U=q.Ry({tokenTypeAddress:X.q.required("Must be a valid ERC-20 token address"),tokenName:q.Z_().required("Must enter a valid name"),tokenSymbol:q.Z_().required("Must enter a valid symbol"),tokenSupply:q.Rx().typeError("Supply must be a number").required("Must enter a valid number").moreThan(0,"Token supply must be larger than zero").max(2e256,"Token supply can be at most 2^256 - 1 due to network limitations")});var z=e=>{var t,n;let{}=e;const{chainId:s}=(0,m.aQ)(),{i18n:a}=(0,i.mV)(),{0:o,1:l}=(0,v.useState)(!1),y=(0,p.cI)({resolver:(0,c.X)(U),defaultValues:{tokenTypeAddress:s?null===(t=u[s])||void 0===t||null===(n=t[d.bk[s]])||void 0===n?void 0:n.contracts.FixedToken.address:void 0},reValidateMode:"onChange",mode:"onChange"}),{watch:j,formState:{errors:f}}=y,k=j();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Z,R(R({},y),{},{onSubmit:y.handleSubmit((()=>l(!0))),children:(0,b.jsxs)(h.Z.Card,{children:[(0,b.jsx)(w,{}),(0,b.jsx)(x,{}),(0,b.jsx)(h.Z.Submit,{children:(0,b.jsx)("div",{children:(0,b.jsx)(r.ZP,{disabled:Object.keys(f).length>0,color:"blue",type:"submit",children:a._(a._("Review"))})})})]})})),(0,b.jsx)(V,{open:o,onDismiss:()=>l(!1),data:k})]})},Q=n(87433),G=n(95497),W=n(41664),$=n.n(W);const K=()=>{const{i18n:e}=(0,i.mV)(),t=(0,b.jsx)("a",{href:"https://instantmiso.gitbook.io/miso/tokens",target:"_blank",rel:"noreferrer",className:"text-blue",children:"documentation"});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(G.Zo,{className:"bg-miso-bowl bg-cover",children:(0,b.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,b.jsx)("div",{children:(0,b.jsx)(r.ZP,{color:"blue",size:"sm",className:"rounded-full !pl-2 !py-1.5",startIcon:(0,b.jsx)(s.Z,{width:24,height:24}),children:(0,b.jsx)($(),{href:"/miso",children:e._(e._("All Auctions"))})})}),(0,b.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,b.jsx)(a.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("New Token"))}),(0,b.jsx)(a.Z,{variant:"sm",weight:400,children:(0,b.jsx)(i.cC,{id:"Create your own Token at the Token Factory. For details on all current Token types, please visit our {link}",values:{link:t},components:v.Fragment})})]})]})}),(0,b.jsx)(G.SX,{children:(0,b.jsx)(z,{})})]})};K.Layout=G.ZP,K.Guard=(0,Q.Z)(o.L.MISO);var Y=K},92066:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miso/token",function(){return n(77191)}])},89214:function(){},85568:function(){}},function(e){e.O(0,[8529,2749,9294,3978,2892,2144,8728,9774,2888,179],(function(){return t=92066,e(e.s=t);var t}));var t=e.O();_N_E=t}]);