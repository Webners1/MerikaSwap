"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3882],{35908:function(t,e,o){o.d(e,{N:function(){return c}});var s=o(78980),n=o(45369),r=o(90102),a=o(67294),i=o(65297),u=o(85893);const l={[s.a_.ETHEREUM]:"ethereum",[s.a_.BSC]:"bsc",[s.a_.OPBNB]:"opBNB",[s.a_.CELO]:"celo",[s.a_.FANTOM]:"fantom",[s.a_.AVALANCHE_TESTNET]:"fuji",[s.a_.FUSE]:"fuse",[s.a_.HARMONY]:"harmony",[s.a_.HECO]:"heco",[s.a_.MATIC]:"matic",[s.a_.MOONRIVER]:"moonriver",[s.a_.OKEX]:"okex",[s.a_.PALM]:"palm",[s.a_.TELOS]:"telos",[s.a_.XDAI]:"xdai",[s.a_.ARBITRUM]:"arbitrum",[s.a_.AVALANCHE]:"avalanche",[s.a_.MOONBEAM]:"moonbeam",[s.a_.KAVA]:"kava",[s.a_.METIS]:"metis",[s.a_.ARBITRUM_NOVA]:"arbitrum-nova",[s.a_.HARDHAT]:"hardhat"},c=t=>{const e=[];return t.chainId in l&&(e.push("https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/".concat(l[t.chainId],"/").concat(t.wrapped.address,".jpg")),e.push("https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/".concat(l[t.chainId],"/assets/").concat(t.wrapped.address,"/logo.png")),e.push("https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/".concat(l[t.chainId],"/assets/").concat(t.wrapped.address,"/logo.png"))),e},d="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/avax.svg",h="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/bnb.svg",v="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ethereum.svg",g="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ftm.svg",p="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/one.svg",m="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ht.svg",w="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/matic.svg",f="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/okt.svg",b="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/palm.svg",_="https://cryptologos.cc/logos/bnb-bnb-logo.png",y={[s.a_.ETHEREUM]:v,[s.a_.KOVAN]:v,[s.a_.RINKEBY]:v,[s.a_.OPBNB]:_,[s.a_.ROPSTEN]:v,[s.a_["G\xd6RLI"]]:v,[s.a_.FANTOM]:g,[s.a_.FANTOM_TESTNET]:g,[s.a_.MATIC]:w,[s.a_.MATIC_TESTNET]:w,[s.a_.XDAI]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/xdai.svg",[s.a_.BSC]:h,[s.a_.BSC_TESTNET]:h,[s.a_.AVALANCHE]:d,[s.a_.AVALANCHE_TESTNET]:d,[s.a_.HECO]:m,[s.a_.HECO_TESTNET]:m,[s.a_.HARMONY]:p,[s.a_.HARMONY_TESTNET]:p,[s.a_.OKEX]:f,[s.a_.OKEX_TESTNET]:f,[s.a_.ARBITRUM]:v,[s.a_.ARBITRUM_TESTNET]:v,[s.a_.CELO]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/celo.svg",[s.a_.PALM]:b,[s.a_.PALM_TESTNET]:b,[s.a_.MOONRIVER]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/movr.svg",[s.a_.FUSE]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/fuse.svg",[s.a_.TELOS]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/telos.svg",[s.a_.HARDHAT]:v,[s.a_.MOONBEAM]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/glmr.svg",[s.a_.OPTIMISM]:v,[s.a_.KAVA]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/kava.svg",[s.a_.ARBITRUM_NOVA]:v,[s.a_.METIS]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/metis.svg",[s.a_.BOBA_AVAX]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/boba.svg"};e.Z=t=>{let{currency:e,size:o="24px",className:l,style:d}=t;const h=(0,n.Z)(e instanceof r.D?e.logoURI||e.tokenInfo.logoURI:void 0),v=(0,a.useMemo)((()=>{if(null!==e&&void 0!==e&&e.isNative||null!==e&&void 0!==e&&e.equals(s.FX[e.chainId]))return[y[e.chainId],i.R];if(null!==e&&void 0!==e&&e.isToken){const t=[...c(e)];return"WBNB"==(null===e||void 0===e?void 0:e.symbol)?[_]:"MRK"==(null===e||void 0===e?void 0:e.symbol)?["https://i.ibb.co/gJ9Y4xm/logo.png"]:t}return[i.R]}),[e,h]);return(0,u.jsx)(i.Z,{srcs:v,width:o,height:o,alt:null===e||void 0===e?void 0:e.symbol,className:l,style:d})}},41626:function(t,e,o){o.d(e,{X:function(){return s.Z},B:function(){return d}});var s=o(35908),n=o(59499),r=o(4730),a=(o(67294),o(56785)),i=o(85893);const u=["currencies","dense","maxLogos","size"];function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){(0,n.Z)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var d=t=>{let{currencies:e,dense:o=!1,maxLogos:n=3,size:l=24}=t,d=(0,r.Z)(t,u);const h=e.length<=n?e:e.slice(0,Math.max(0,Math.min(e.length,n)-1)),v=e.length-h.length;return(0,i.jsxs)("div",{className:"flex",children:[h.map(((t,e)=>(0,i.jsx)("div",{className:"overflow-hidden rounded-full",style:{marginLeft:n>1?0===e?"":o?-Math.floor(l/2-4):-6:0,filter:"drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))"},children:(0,i.jsx)(s.Z,c({currency:t,size:l},d))},e)),[]),v>0&&(0,i.jsx)("div",{className:"rounded-full overflow-hidden flex items-center justify-center z-[1]",style:{marginLeft:n>1?o?-Math.floor(l/2+2):-6:0,width:l,height:l,background:"radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #DBDBDB 100%)",filter:"drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))"},children:(0,i.jsxs)(a.Z,{weight:700,className:"text-low-emphesis",variant:"sm",children:["+",e.length-n+1]})})]})}},65297:function(t,e,o){o.d(e,{R:function(){return c}});var s=o(59499),n=o(44554),r=o(67294),a=o(13752),i=o(85893);function u(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?u(Object(o),!0).forEach((function(e){(0,s.Z)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}const c="https://raw.githubusercontent.com/sushiswap/icons/master/token/unknown.png",d={};e.Z=t=>{let{srcs:e,width:o,height:s,alt:u="",className:h,style:v}=t;const{1:g}=(0,r.useState)(0),p=e.find((t=>!d[t])),m=(0,r.useCallback)((()=>{p&&(d[p]=!0),g((t=>t+1))}),[p]);return(0,i.jsx)("div",{className:"rounded-full",style:l({width:o,height:s},v),children:(0,i.jsx)(a.Z,{src:p||c,onErrorCapture:m,width:o,height:s,alt:u,layout:"fixed",className:(0,n.AK)("rounded-full",h)})})}},22641:function(t,e,o){o.d(e,{m:function(){return u}});var s=o(97503),n=o(12614),r=o(627),a=o(22986),i=o(67294);const u=()=>{const{account:t}=(0,n.aQ)(),e=(0,r.B3)(),o=(0,i.useMemo)((()=>e.map((t=>({liquidityToken:(0,r.Ce)(t),tokens:t})))),[e]),u=(0,i.useMemo)((()=>o.map((t=>t.liquidityToken))),[o]),[l,c]=(0,a.v2)(null!==t&&void 0!==t?t:void 0,u),d=(0,i.useMemo)((()=>o.filter((t=>{var e;let{liquidityToken:o}=t;return null===(e=l[o.address])||void 0===e?void 0:e.greaterThan("0")}))),[o,l]),h=(0,s.OY)(d.map((t=>{let{tokens:e}=t;return e})));return{loading:c||(null===h||void 0===h?void 0:h.length)<d.length||(null===h||void 0===h?void 0:h.some((t=>!t))),pairs:h.map((t=>{let[,e]=t;return e})).filter((t=>Boolean(t)))}}},45369:function(t,e,o){o.d(e,{Z:function(){return c}});var s=o(67294),n=o(980),r=o(1901),a=o(84706),i=o(2886),u=o(44554),l=o(54907);function c(t){const e=(0,s.useMemo)((()=>t?(0,r.y)(t):void 0),[t]),o=function(t){var e,o,n;const r=(0,s.useMemo)((()=>{if(!t)return[void 0];try{return t?[(0,a.VM)(t)]:[void 0]}catch(e){return[void 0]}}),[t]),c=(0,l.zb)(!1),d=(0,i.Wk)(c,"resolver",r),h=null===(e=d.result)||void 0===e?void 0:e[0],v=(0,l.uU)(h&&(0,u.Fr)(h)?void 0:h,!1),g=(0,i.Wk)(v,"contenthash",r);return{contenthash:null!==(o=null===(n=g.result)||void 0===n?void 0:n[0])&&void 0!==o?o:null,loading:d.loading||g.loading}}(null===e||void 0===e?void 0:e.ensName);return(0,s.useMemo)((()=>e?o.contenthash?(0,n.ie)((0,n.il)(o.contenthash)):[]:t?(0,n.ie)(t):[]),[e,o.contenthash,t])}},62603:function(t,e,o){o.d(e,{A:function(){return u},Y:function(){return i}});var s=o(8198),n=o(78980),r=o(89638),a=o(2886);const i=t=>{var e;return(0,a._Y)(null!==(e=null===t||void 0===t?void 0:t.map((t=>null!==t&&void 0!==t&&t.isToken?t.address:void 0)))&&void 0!==e?e:[],new s.vU(r),"totalSupply").map(((e,o)=>{var s,r,a;return r=null===(s=e.result)||void 0===s?void 0:s[0],null!==(a=null===t||void 0===t?void 0:t[o])&&void 0!==a&&a.isToken&&r?n.ih.fromRawAmount(a,r.toString()):void 0})).reduce(((e,o,s)=>(o&&null!==t&&void 0!==t&&t[s]&&(e[t[s].wrapped.address]=o),e)),{})},u=t=>{const e=i([t]);return t?e[t.wrapped.address]:void 0}},94633:function(t,e,o){o.d(e,{Gj:function(){return c},SA:function(){return i},ZP:function(){return u},or:function(){return l}});var s=o(78980),n=o(84329),r=o(12614),a=o(67294);function i(t){const{chainId:e}=(0,r.aQ)(),o=e&&s.qY[e]?s.ih.fromRawAmount(s.qY[e],0).currency:void 0,{data:i}=(0,n.k$)({chainId:e}),u=(0,n.rU)({chainId:e,variables:{where:{id_in:null===t||void 0===t?void 0:t.map((t=>t.wrapped.address.toLowerCase()))}},shouldFetch:t&&(null===t||void 0===t?void 0:t.length)>0}),{data:l}=(0,n.EO)({chainId:e,variables:{where:{id_in:null===t||void 0===t?void 0:t.map((t=>t.wrapped.address.toLowerCase()))}},shouldFetch:t&&(null===t||void 0===t?void 0:t.length)>0});return(0,a.useMemo)((()=>{if(!t||0===t.length||!o||!u&&!l)return;const e={};return t.map((t=>{let n;const r=null===u||void 0===u?void 0:u.find((e=>e.id===t.wrapped.address.toLowerCase())),a=null===l||void 0===l?void 0:l.find((e=>e.id===t.wrapped.address.toLowerCase()));if(null!==t&&void 0!==t&&t.wrapped.equals(o))e[t.wrapped.address]=new s.tA(o,o,"1","1");else if(r&&a?n=r.liquidity>a.kpi.liquidity?i*r.derivedETH:a.price.derivedUSD:i&&r?n=i*r.derivedETH:a&&(n=a.price.derivedUSD),void 0!==n&&0!==n){var c,d,h;const r=10**(null!==(c=null===(d=String(n).split("."))||void 0===d||null===(h=d[1])||void 0===h?void 0:h.length)&&void 0!==c?c:0),a=Math.floor(n*r);try{e[t.wrapped.address]=new s.tA(t,o,r*10**t.decimals/10**o.decimals,a)}catch{}}})),e}),[t,o,u,l,i])}function u(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=i(t?[t]:void 0,e);return o?Object.values(o)[0]:void 0}function l(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=u(null===t||void 0===t?void 0:t.currency,e);return(0,a.useMemo)((()=>{if(!o||!t)return null;try{return o.quote(t)}catch(e){return null}}),[t,o])}function c(t){const e=u(null===t||void 0===t?void 0:t.currency);return(0,a.useMemo)((()=>{if(!e||!t)return{value:void 0,loading:!1};try{return{value:e.quote(t),loading:!1}}catch(o){return{value:void 0,loading:!1}}}),[t,e])}}}]);