(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9764],{35908:function(e,t,r){"use strict";r.d(t,{N:function(){return u}});var n=r(78980),o=r(45369),s=r(90102),a=r(67294),i=r(65297),l=r(85893);const c={[n.a_.ETHEREUM]:"ethereum",[n.a_.BSC]:"bsc",[n.a_.OPBNB]:"opBNB",[n.a_.CELO]:"celo",[n.a_.FANTOM]:"fantom",[n.a_.AVALANCHE_TESTNET]:"fuji",[n.a_.FUSE]:"fuse",[n.a_.HARMONY]:"harmony",[n.a_.HECO]:"heco",[n.a_.MATIC]:"matic",[n.a_.MOONRIVER]:"moonriver",[n.a_.OKEX]:"okex",[n.a_.PALM]:"palm",[n.a_.TELOS]:"telos",[n.a_.XDAI]:"xdai",[n.a_.ARBITRUM]:"arbitrum",[n.a_.AVALANCHE]:"avalanche",[n.a_.MOONBEAM]:"moonbeam",[n.a_.KAVA]:"kava",[n.a_.METIS]:"metis",[n.a_.ARBITRUM_NOVA]:"arbitrum-nova",[n.a_.HARDHAT]:"hardhat"},u=e=>{const t=[];return e.chainId in c&&(t.push("https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/".concat(c[e.chainId],"/").concat(e.wrapped.address,".jpg")),t.push("https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/".concat(c[e.chainId],"/assets/").concat(e.wrapped.address,"/logo.png")),t.push("https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/".concat(c[e.chainId],"/assets/").concat(e.wrapped.address,"/logo.png"))),t},d="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/avax.svg",p="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/bnb.svg",m="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ethereum.svg",h="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ftm.svg",v="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/one.svg",f="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ht.svg",g="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/matic.svg",w="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/okt.svg",b="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/palm.svg",x="https://cryptologos.cc/logos/bnb-bnb-logo.png",O={[n.a_.ETHEREUM]:m,[n.a_.KOVAN]:m,[n.a_.RINKEBY]:m,[n.a_.OPBNB]:x,[n.a_.ROPSTEN]:m,[n.a_["G\xd6RLI"]]:m,[n.a_.FANTOM]:h,[n.a_.FANTOM_TESTNET]:h,[n.a_.MATIC]:g,[n.a_.MATIC_TESTNET]:g,[n.a_.XDAI]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/xdai.svg",[n.a_.BSC]:p,[n.a_.BSC_TESTNET]:p,[n.a_.AVALANCHE]:d,[n.a_.AVALANCHE_TESTNET]:d,[n.a_.HECO]:f,[n.a_.HECO_TESTNET]:f,[n.a_.HARMONY]:v,[n.a_.HARMONY_TESTNET]:v,[n.a_.OKEX]:w,[n.a_.OKEX_TESTNET]:w,[n.a_.ARBITRUM]:m,[n.a_.ARBITRUM_TESTNET]:m,[n.a_.CELO]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/celo.svg",[n.a_.PALM]:b,[n.a_.PALM_TESTNET]:b,[n.a_.MOONRIVER]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/movr.svg",[n.a_.FUSE]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/fuse.svg",[n.a_.TELOS]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/telos.svg",[n.a_.HARDHAT]:m,[n.a_.MOONBEAM]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/glmr.svg",[n.a_.OPTIMISM]:m,[n.a_.KAVA]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/kava.svg",[n.a_.ARBITRUM_NOVA]:m,[n.a_.METIS]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/metis.svg",[n.a_.BOBA_AVAX]:"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/boba.svg"};t.Z=e=>{let{currency:t,size:r="24px",className:c,style:d}=e;const p=(0,o.Z)(t instanceof s.D?t.logoURI||t.tokenInfo.logoURI:void 0),m=(0,a.useMemo)((()=>{if(null!==t&&void 0!==t&&t.isNative||null!==t&&void 0!==t&&t.equals(n.FX[t.chainId]))return[O[t.chainId],i.R];if(null!==t&&void 0!==t&&t.isToken){const e=[...u(t)];return"WBNB"==(null===t||void 0===t?void 0:t.symbol)?[x]:"MRK"==(null===t||void 0===t?void 0:t.symbol)?["https://i.ibb.co/gJ9Y4xm/logo.png"]:e}return[i.R]}),[t,p]);return(0,l.jsx)(i.Z,{srcs:m,width:r,height:r,alt:null===t||void 0===t?void 0:t.symbol,className:c,style:d})}},13752:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(59499),o=r(4730),s=r(44554),a=r(25675),i=r.n(a);var l=r(85893);const c=["src","width","height","layout"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=e=>{let{src:t,width:r,height:n,layout:a}=e,u=(0,o.Z)(e,c);const p=parseInt(String(n),10)>=40&&parseInt(String(r),10)>=40,m="string"===typeof t&&t.includes("http")?s.HT:void 0;return(0,l.jsx)("div",{style:{width:r,height:n},className:"overflow-hidden rounded",children:p?(0,l.jsx)(i(),d({loader:m,src:t,width:r,height:n,layout:a,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((v=r,f=n,h='\n<svg width="'.concat(v,'" height="').concat(f,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(v,'" height="').concat(f,'" fill="#333" />\n  <rect id="r" width="').concat(v,'" height="').concat(f,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(v,'" to="').concat(v,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(h)))},u)):(0,l.jsx)(i(),d({loader:m,src:t,width:r,height:n,layout:a,placeholder:"empty"},u))});var h,v,f}},48410:function(e,t,r){"use strict";var n=r(59499),o=r(4730),s=r(44554),a=r(67294),i=r(85893);const l=["value","onUserInput","placeholder","className","min"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const d=RegExp("^\\d*(?:\\\\[.])?\\d*$"),p="w-0 p-0 text-2xl bg-transparent",m=(0,a.forwardRef)(((e,t)=>{let{value:r,onUserInput:n,placeholder:a,className:c=p,min:m}=e,h=(0,o.Z)(e,l);return(0,i.jsx)("input",u(u({},h),{},{ref:t,value:r,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,"."))||d.test((0,s.hr)(t)))&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:a||"0.0",min:m||0,minLength:1,maxLength:79,spellCheck:"false",className:(0,s.AK)("relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary",c)}))}));m.displayName="NumericalInput",t.Z=m},23987:function(e,t,r){"use strict";var n=r(59499),o=r(4730),s=r(44554),a=r(67294),i=r(85893);const l=["value","onUserInput","placeholder","className","align","fontSize"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const d=RegExp("^\\d*$"),p=a.memo((e=>{let{value:t,onUserInput:r,placeholder:n,className:a,align:c,fontSize:p}=e,m=(0,o.Z)(e,l);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("input",u({value:t,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,".").replace(/%/g,""))||d.test((0,s.hr)(t)))&&Number(t)<=100&&r(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*$",placeholder:n||"100%",maxLength:3,className:(0,s.AK)("right"===c&&"text-right","relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary",a),style:{fontSize:p}},m))})}));p.displayName="PercentInput",t.Z=p},39281:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(59499),o=r(4730),s=r(44554),a=r(67294),i=r(85893);const l=["value","onUserInput","placeholder","className","align","fontSize"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const d=a.memo((e=>{let{value:t,onUserInput:r,placeholder:n,className:a="flex w-full h-full p-3 font-bold rounded overflow-ellipsis recipient-address-input bg-dark-900 placeholder-low-emphesis",align:c,fontSize:d="24px"}=e,p=(0,o.Z)(e,l);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("input",u({value:t,onChange:e=>{r(e.target.value.replace(/\s+/g,""))},inputMode:"text",title:"Wallet Address or ENS name",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address or ENS name",pattern:"^(0x[a-fA-F0-9]{40})$",type:"text",className:(0,s.AK)("right"===c&&"text-right","font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto",a),style:{fontSize:d}},p))})}));d.displayName="AddressInput";var p=d,m=r(48410);var h={Address:p,Percent:r(23987).Z,Numeric:m.Z}},65297:function(e,t,r){"use strict";r.d(t,{R:function(){return u}});var n=r(59499),o=r(44554),s=r(67294),a=r(13752),i=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u="https://raw.githubusercontent.com/sushiswap/icons/master/token/unknown.png",d={};t.Z=e=>{let{srcs:t,width:r,height:n,alt:l="",className:p,style:m}=e;const{1:h}=(0,s.useState)(0),v=t.find((e=>!d[e])),f=(0,s.useCallback)((()=>{v&&(d[v]=!0),h((e=>e+1))}),[v]);return(0,i.jsx)("div",{className:"rounded-full",style:c({width:r,height:n},m),children:(0,i.jsx)(a.Z,{src:v||u,onErrorCapture:f,width:r,height:n,alt:l,layout:"fixed",className:(0,o.AK)("rounded-full",p)})})}},64958:function(e,t,r){"use strict";var n=r(59499),o=r(4730),s=r(41664),a=r.n(s),i=r(11163),l=r(67294),c=r(85893);const u=["children","exact","activeClassName"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=e=>{let{children:t,exact:r=!1,activeClassName:n="text-high-emphesis"}=e,s=(0,o.Z)(e,u);const{asPath:d,pathname:m,route:h,query:v,basePath:f}=(0,i.useRouter)(),g=l.Children.only(t),w=g.props.className||"",b=(r?(s.as||s.href.pathname||s.href)===d:d.startsWith(s.as||s.href.pathname||s.href))?"".concat(w," ").concat(n).trim():w;return(0,c.jsx)(a(),p(p({href:s.href},s),{},{children:l.cloneElement(g,{className:b||null})}))}},87433:function(e,t,r){"use strict";var n=r(49501),o=r(78980),s=r(46430),a=r(64958),i=r(56785),l=r(87269),c=r(10552),u=r(90662),d=r(12614),p=r(49552),m=r.n(p),h=r(25675),v=r.n(h),f=r(67294),g=r(85893);const w=e=>{var t;let{children:r,feature:p,asModal:h=!0}=e;const{i18n:w}=(0,n.mV)(),{chainId:b,library:x,account:O}=(0,d.aQ)(),y=(0,g.jsx)(a.Z,{href:"/swap",children:(0,g.jsx)("a",{className:"text-blue focus:outline-none",children:w._(w._("home page"))})}),T=Object.entries(l.Z).reduce(((e,t)=>{let[r,n]=t;return n.includes(p)&&e.push(r),e}),[]),N=(0,g.jsx)("div",{className:"flex justify-center lg:mt-[200px]",children:(0,g.jsxs)("div",{className:"flex flex-col gap-5 justify-center p-4 mt-10 lg:mt-0",children:[(0,g.jsx)(i.Z,{variant:"h1",className:"max-w-2xl text-white text-center",weight:700,children:w._(w._("This feature is not yet supported on the {0} network",{0:c.z[b]}))}),(0,g.jsxs)(i.Z,{className:"text-center max-w-[248px] mx-auto",children:[(0,g.jsx)(n.cC,{id:"Either return to the {link}",values:{link:y},components:f.Fragment})," ",w._(w._("or change to an available network"))]}),(0,g.jsx)(i.Z,{variant:"sm",className:"uppercase text-center tracking-[.2rem] mt-10 mb-5",weight:700,children:w._(w._("Available Networks"))}),(0,g.jsx)("div",{className:"grid grid-cols-[repeat(2,_100px)] md:grid-cols-[repeat(4,_100px)] gap-y-10 justify-center",children:T.map(((e,t)=>(0,g.jsxs)("button",{className:"text-primary hover:text-white flex items-center flex-col gap-2 justify-center",onClick:()=>{const t=u.b[e];m().set("chainId",e),e===o.a_.ETHEREUM.toString()?null===x||void 0===x||x.send("wallet_switchEthereumChain",[{chainId:"0x1"},O]):e===o.a_.KOVAN.toString()?null===x||void 0===x||x.send("wallet_switchEthereumChain",[{chainId:"0x2A"},O]):null===x||void 0===x||x.send("wallet_addEthereumChain",[t,O])},children:[(0,g.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,g.jsx)(v(),{src:c.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,g.jsx)(i.Z,{variant:"sm",weight:700,className:"text-white",children:c.z[e]})]},t)))})]})});return h?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.Z.Controlled,{isOpen:!!O&&!(null!==(t=l.Z[b])&&void 0!==t&&t.includes(p)),onDismiss:()=>null,transparent:!0,children:N}),r]}):O&&!l.Z[b].includes(p)?N:(0,g.jsx)(g.Fragment,{children:r})};t.Z=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?t=>{let{children:r}=t;return(0,g.jsx)(w,{feature:e,children:r})}:t=>{let{children:r}=t;return(0,g.jsx)(w,{feature:e,asModal:!1,children:r})}}},71195:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var n=r(12614),o=r(94654),s=r.n(o),a=r(67294),i=r(86612);function l(e,t){const{chainId:r}=(0,n.aQ)(),[o,l]=r?[null===e||void 0===e?void 0:e.wrapped,null===t||void 0===t?void 0:t.wrapped]:[void 0,void 0],c=(0,a.useMemo)((()=>{var e,t,n,s,a;if(!r)return[];return[...null!==(e=i.lM[r])&&void 0!==e?e:[],...o&&null!==(t=null===(n=i.ck[r])||void 0===n?void 0:n[o.address])&&void 0!==t?t:[],...l&&null!==(s=null===(a=i.ck[r])||void 0===a?void 0:a[l.address])&&void 0!==s?s:[]]}),[r,o,l]),u=(0,a.useMemo)((()=>s()(c,(e=>c.map((t=>[e,t]))))),[c]);return(0,a.useMemo)((()=>o&&l?[[o,l],...c.map((e=>[o,e])),...c.map((e=>[l,e])),...u].filter((e=>Boolean(e[0]&&e[1]))).filter((e=>{let[t,r]=e;return t.address!==r.address})).filter((e=>{let[t,n]=e;if(!r)return!0;const o=i.IP[r],s=null===o||void 0===o?void 0:o[t.address],a=null===o||void 0===o?void 0:o[n.address];return!s&&!a||!(s&&!s.find((e=>n.equals(e))))&&!(a&&!a.find((e=>t.equals(e))))})):[]),[o,l,c,u,r])}},45369:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(67294),o=r(980),s=r(1901),a=r(84706),i=r(2886),l=r(44554),c=r(54907);function u(e){const t=(0,n.useMemo)((()=>e?(0,s.y)(e):void 0),[e]),r=function(e){var t,r,o;const s=(0,n.useMemo)((()=>{if(!e)return[void 0];try{return e?[(0,a.VM)(e)]:[void 0]}catch(t){return[void 0]}}),[e]),u=(0,c.zb)(!1),d=(0,i.Wk)(u,"resolver",s),p=null===(t=d.result)||void 0===t?void 0:t[0],m=(0,c.uU)(p&&(0,l.Fr)(p)?void 0:p,!1),h=(0,i.Wk)(m,"contenthash",s);return{contenthash:null!==(r=null===(o=h.result)||void 0===o?void 0:o[0])&&void 0!==r?r:null,loading:d.loading||h.loading}}(null===t||void 0===t?void 0:t.ensName);return(0,n.useMemo)((()=>t?r.contenthash?(0,o.ie)((0,o.il)(r.contenthash)):[]:e?(0,o.ie)(e):[]),[t,r.contenthash,e])}},90573:function(e,t,r){"use strict";r.d(t,{Fm:function(){return u},NF:function(){return c},ZP:function(){return l},mJ:function(){return d}});var n=r(78980),o=r(67294),s=r(12614),a=r(56388);const i={[n.a_.ETHEREUM]:n.ih.fromRawAmount(n.qY[n.a_.ETHEREUM],1e11),[n.a_.ROPSTEN]:n.ih.fromRawAmount(n.qY[n.a_.ROPSTEN],1e11),[n.a_.KOVAN]:n.ih.fromRawAmount(n.qY[n.a_.KOVAN],1e6),[n.a_.MATIC]:n.ih.fromRawAmount(n.qY[n.a_.MATIC],1e11),[n.a_.FANTOM]:n.ih.fromRawAmount(n.qY[n.a_.FANTOM],1e11),[n.a_.BSC]:n.ih.fromRawAmount(n.qY[n.a_.BSC],1e23),[n.a_.HARMONY]:n.ih.fromRawAmount(n.qY[n.a_.HARMONY],1e11),[n.a_.HECO]:n.ih.fromRawAmount(n.qY[n.a_.HECO],1e11),[n.a_.OKEX]:n.ih.fromRawAmount(n.qY[n.a_.OKEX],1e23),[n.a_.XDAI]:n.ih.fromRawAmount(n.qY[n.a_.XDAI],1e11),[n.a_.ARBITRUM]:n.ih.fromRawAmount(n.qY[n.a_.ARBITRUM],1e11),[n.a_.CELO]:n.ih.fromRawAmount(n.qY[n.a_.CELO],1e23),[n.a_.MOONRIVER]:n.ih.fromRawAmount(n.qY[n.a_.MOONRIVER],1e11),[n.a_.FUSE]:n.ih.fromRawAmount(n.qY[n.a_.FUSE],1e11),[n.a_.TELOS]:n.ih.fromRawAmount(n.qY[n.a_.TELOS],1e11),[n.a_.AVALANCHE]:n.ih.fromRawAmount(n.qY[n.a_.AVALANCHE],1e11),[n.a_.MOONBEAM]:n.ih.fromRawAmount(n.qY[n.a_.MOONBEAM],1e11)};function l(e){const{chainId:t}=(0,s.aQ)(),r=t?i[t]:void 0,l=null===r||void 0===r?void 0:r.currency,c=(0,a.k)(e,r,{maxHops:2});return(0,o.useMemo)((()=>{if(e&&l){if(null!==e&&void 0!==e&&e.wrapped.equals(l))return new n.tA(l,l,"1","1");if(c){const{numerator:t,denominator:r}=c.route.midPrice;return new n.tA(e,l,r,t)}}}),[e,l,c])}function c(e){const t=l(null===e||void 0===e?void 0:e.currency);return(0,o.useMemo)((()=>{if(!t||!e)return null;try{return t.quote(e)}catch(r){return null}}),[e,t])}function u(e){const t=l(e);return(0,o.useMemo)((()=>{if(!t||!e)return{price:void 0,loading:!1};try{return{price:t,loading:!1}}catch(r){return{price:void 0,loading:!1}}}),[e,t])}function d(e){const t=l(null===e||void 0===e?void 0:e.currency);return(0,o.useMemo)((()=>{if(!t||!e)return{value:void 0,loading:!1};try{return{value:t.quote(e),loading:!1}}catch(r){return{value:void 0,loading:!1}}}),[e,t])}},97503:function(e,t,r){"use strict";r.d(t,{OY:function(){return d},Oo:function(){return p},_G:function(){return u}});var n=r(8198),o=r(69587),s=r(78980),a=r(2886),i=r(67294),l=r(627);const c=new n.vU(o);let u;function d(e){const t=(0,i.useMemo)((()=>e.map((e=>{let[t,r]=e;return[null===t||void 0===t?void 0:t.wrapped,null===r||void 0===r?void 0:r.wrapped]}))),[e]),r=(0,i.useMemo)((()=>t.reduce(((e,t)=>{let[r,n]=t;const o=r&&n&&r.chainId===n.chainId&&!r.equals(n)&&s.F1[r.chainId]?(0,l.f7)({factoryAddress:204==r.chainId?"0xa7408904620F14C4FEB898c8c20c2189636d4009":s.F1[r.chainId],tokenA:r,tokenB:n}):void 0;return e.push(o&&!e.includes(o)?o:void 0),e}),[])),[t]),n=(0,a._Y)(r,c,"getReserves");return(0,i.useMemo)((()=>n.map(((e,r)=>{const{result:n,loading:o}=e,a=t[r][0],i=t[r][1];if(o)return[u.LOADING,null];if(!a||!i||a.equals(i))return[u.INVALID,null];if(!n)return[u.NOT_EXISTS,null];const{reserve0:l,reserve1:c}=n,[d,p]=a.sortsBefore(i)?[a,i]:[i,a];return[u.EXISTS,new s.qA(s.ih.fromRawAmount(d,l.toString()),s.ih.fromRawAmount(p,c.toString()))]}))),[n,t])}function p(e,t){return d((0,i.useMemo)((()=>[[e,t]]),[e,t]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(u||(u={}))},56388:function(e,t,r){"use strict";r.d(t,{k:function(){return p},w:function(){return d}});var n=r(78980),o=r(16682),s=r(92659),a=r(67294),i=r(71195),l=r(97503);function c(e,t){const r=(0,i.V)(e,t),n=(0,l.OY)(r);return(0,a.useMemo)((()=>Object.values(n.filter((e=>Boolean(e[0]===l._G.EXISTS&&e[1]))).reduce(((e,t)=>{var r;let[,n]=t;return e[n.liquidityToken.address]=null!==(r=e[n.liquidityToken.address])&&void 0!==r?r:n,e}),{}))),[n])}const u=3;function d(e,t){let{maxHops:r=u}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=c(null===e||void 0===e?void 0:e.currency,t);return(0,a.useMemo)((()=>{if(e&&t&&i.length>0){var a;if(1===r)return null!==(a=n.ho.bestTradeExactIn(i,e,t,{maxHops:1,maxNumResults:1})[0])&&void 0!==a?a:null;let c=null;for(let a=1;a<=r;a++){var l;const r=null!==(l=n.ho.bestTradeExactIn(i,e,t,{maxHops:a,maxNumResults:1})[0])&&void 0!==l?l:null;(0,s._B)(c,r,o.Ru)&&(c=r)}return c}return null}),[i,e,t,r])}function p(e,t){let{maxHops:r=u}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=c(e,null===t||void 0===t?void 0:t.currency);return(0,a.useMemo)((()=>{if(e&&t&&i.length>0){var a;if(1===r)return null!==(a=n.ho.bestTradeExactOut(i,e,t,{maxHops:1,maxNumResults:1})[0])&&void 0!==a?a:null;let c=null;for(let a=1;a<=r;a++){var l;const r=null!==(l=n.ho.bestTradeExactOut(i,e,t,{maxHops:a,maxNumResults:1})[0])&&void 0!==l?l:null;(0,s._B)(c,r,o.Ru)&&(c=r)}return c}return null}),[e,t,i,r])}},44521:function(e,t,r){"use strict";r.r(t),r.d(t,{Field:function(){return Y},default:function(){return K}});var n=r(59499),o=r(67294);var s=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))})),a=r(55929),i=r(49501),l=r(78980),c=r(72457),u=r(56785),d=r(33624),p=r(38239),m=r(39281),h=r(44554),v=r(90573),f=r(12614),g=r(22986),w=r(25675),b=r.n(w),x=r(85893);var O=e=>{let{field:t,meowshiState:r,showMax:n}=e;const{currencies:o,handleInput:s,setCurrency:a,fields:c}=r,{account:p}=(0,f.aQ)(),{i18n:w}=(0,i.mV)(),O=o[t],y=(0,g.mM)(p,O),T=(0,v.NF)((0,h.eo)(c[t],o[t])),N=(0,v.NF)(y);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"rounded bg-dark-800",children:[(0,x.jsxs)("div",{className:"flex flex-col justify-between p-5 space-y-3 sm:space-y-0 sm:flex-row",children:[(0,x.jsx)("div",{className:"flex items-center w-full sm:w-2/5",children:(0,x.jsxs)("div",{className:"flex items-center gap-4",children:[(0,x.jsx)(b(),{src:O===l.hs[l.a_.ETHEREUM]?"https://app.sushi.com/images/tokens/sushi-square.jpg":O===d.LL?"https://app.sushi.com/images/tokens/xsushi-square.jpg":"https://app.sushi.com/images/tokens/nyan-square.jpg",alt:"SUSHI",width:"62px",height:"62px",objectFit:"contain",className:"rounded-full"}),(0,x.jsxs)("div",{className:"flex flex-col items-start",children:[(0,x.jsx)(u.Z,{variant:"h3",className:"leading-6 text-high-emphesis",weight:700,children:null===O||void 0===O?void 0:O.symbol}),(O===l.hs[l.a_.ETHEREUM]||O===d.LL)&&(0,x.jsx)(u.Z,{variant:"xs",className:"underline cursor-pointer text-blue",onClick:()=>a(O===d.LL?l.hs[l.a_.ETHEREUM]:d.LL,t),children:o[t]===l.hs[l.a_.ETHEREUM]?w._(w._("Use xSUSHI")):w._(w._("Use SUSHI"))})]})]})}),(0,x.jsxs)("div",{className:"flex items-center justify-between w-full px-3 py-2 rounded bg-dark-900 sm:w-3/5",children:[(0,x.jsxs)("div",{className:"flex flex-col items-start",children:[(0,x.jsx)("div",{className:"w-full",children:(0,x.jsx)(m.Z.Numeric,{className:"w-full text-2xl leading-4 bg-transparent",id:"token-amount-input",value:c[t],onUserInput:e=>s(e,t)})}),T&&(0,x.jsxs)("div",{className:"text-xs font-medium text-low-emphesis",children:["\u2248 ",null===T||void 0===T?void 0:T.toSignificant(6,{groupSeparator:","})," USDC"]})]}),n&&(0,x.jsx)("span",{onClick:()=>s(null===y||void 0===y?void 0:y.toExact(),t),className:"flex items-center justify-center px-2 py-1 text-sm uppercase border border-opacity-50 cursor-pointer border-blue bg-blue text-blue bg-opacity-30 rounded-3xl hover:border-opacity-100",children:w._(w._("Max"))})]})]}),(0,x.jsxs)("div",{className:"bg-dark-700 rounded-b flex justify-end px-5 py-1.5 gap-2",children:[(0,x.jsxs)(u.Z,{variant:"xs",component:"span",onClick:()=>s(null===y||void 0===y?void 0:y.toExact(),t),className:"cursor-pointer text-primary",children:["Balance: ",(null===y||void 0===y?void 0:y.toSignificant(6,{groupSeparator:","}))||"0"," ",null===O||void 0===O?void 0:O.symbol]}),N&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{variant:"xs",component:"span",className:"text-pr]",children:" \u2248 "}),(0,x.jsxs)(u.Z,{variant:"xs",component:"span",className:"text-secondary",children:["$",null===N||void 0===N?void 0:N.toSignificant(6,{groupSeparator:","})," USDC"]})]})]})]})})},y=r(56727),T=r(77062);var N=e=>{let{meowshiState:t}=e;const{meow:r,switchCurrencies:n}=t;return(0,x.jsxs)("div",{className:"flex justify-between",children:[(0,x.jsxs)(y.Ee,{value:r,onChange:n,className:"flex flex-row bg-dark-800 rounded p-3px cursor-pointer",children:[(0,x.jsx)(y.Ee.Option,{value:!0,className:e=>{let{checked:t}=e;return(0,T.A)("px-8 py-2 rounded","".concat(t?"bg-gradient-to-r from-blue to-pink":""))},children:e=>{let{checked:t}=e;return(0,x.jsx)(u.Z,{weight:t?700:400,className:"".concat(t?"text-high-emphesis":"text-secondary"),children:"Meow"})}}),(0,x.jsx)(y.Ee.Option,{value:!1,className:e=>{let{checked:t}=e;return(0,T.A)("px-8 py-2 rounded","".concat(t?"bg-gradient-to-r from-blue to-pink":""))},children:e=>{let{checked:t}=e;return(0,x.jsx)(u.Z,{weight:t?700:400,className:"".concat(t?"text-high-emphesis":"text-secondary"),children:"Un-Meow"})}})]}),(0,x.jsx)("div",{className:"my-1.5 items-center flex border-gradient-r-blue-pink-dark-pink-red border-transparent border-solid border rounded-3xl px-4 md:px-3.5 py-1.5 md:py-0.5 text-high-emphesis text-xs font-medium md:text-base md:font-normal",children:"1 xSUSHI \u2248 100k MEOW"})]})},j=r(61744),_=r(71862),E=r(15097),P=r(60708),U=r(27262),S=r(2593),I=r(21046),A=r(37601),M=r(68411),R=r(54907);var k=e=>{const{account:t}=(0,f.aQ)(),r=(0,M.h7)(),n=(0,R.Z9)(!0),s=(0,R.Vu)(!0),a=(0,R.JD)(!0),{0:i,1:l}=(0,o.useState)(!1),{0:c,1:u}=(0,o.useState)("0"),d=(0,o.useCallback)((async()=>{if(t)try{let r;r=e?await(null===n||void 0===n?void 0:n.allowance(t,null===a||void 0===a?void 0:a.address)):await(null===s||void 0===s?void 0:s.allowance(t,null===a||void 0===a?void 0:a.address));const o=A.i.from(S.O$.from(r),S.O$.from(10).pow(18)).toString();u(o)}catch(r){u("0")}}),[t,e,n,null===a||void 0===a?void 0:a.address,s]);(0,o.useEffect)((()=>{t&&a&&(e&&n||!e&&s)&&d();const r=setInterval(d,1e4);return()=>clearInterval(r)}),[t,a,d,n,s,e]);return{approvalState:(0,o.useMemo)((()=>t?i?U.UK.PENDING:c&&0!==Number(c)?U.UK.APPROVED:U.UK.NOT_APPROVED:U.UK.UNKNOWN),[t,c,i]),approve:(0,o.useCallback)((async()=>{try{let t;return l(!0),t=e?await(null===n||void 0===n?void 0:n.approve(null===a||void 0===a?void 0:a.address,I.Bz.toString())):await(null===s||void 0===s?void 0:s.approve(null===a||void 0===a?void 0:a.address,I.Bz.toString())),r(t,{summary:"Approve"}),await t.wait(),t}catch(t){return t}finally{l(!1)}}),[e,r,n,null===a||void 0===a?void 0:a.address,s]),meow:(0,o.useCallback)((async e=>{if(null!==e&&void 0!==e&&e.value)try{const n=await(null===a||void 0===a?void 0:a.meow(t,null===e||void 0===e?void 0:e.value));return r(n,{summary:"Enter Meowshi"}),n}catch(n){return n}}),[t,r,a]),unmeow:(0,o.useCallback)((async e=>{if(null!==e&&void 0!==e&&e.value)try{const n=await(null===a||void 0===a?void 0:a.unmeow(t,null===e||void 0===e?void 0:e.value));return r(n,{summary:"Leave Meowshi"}),n}catch(n){return n}}),[t,r,a]),meowSushi:(0,o.useCallback)((async e=>{if(null!==e&&void 0!==e&&e.value)try{const n=await(null===a||void 0===a?void 0:a.meowSushi(t,null===e||void 0===e?void 0:e.value));return r(n,{summary:"Enter Meowshi"}),n}catch(n){return n}}),[t,r,a]),unmeowSushi:(0,o.useCallback)((async e=>{if(null!==e&&void 0!==e&&e.value)try{const n=await(null===a||void 0===a?void 0:a.unmeowSushi(t,null===e||void 0===e?void 0:e.value));return r(n,{summary:"Leave Meowshi"}),n}catch(n){return n}}),[t,r,a])}},C=r(23816);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=e=>{var t,r;let{meowshiState:n}=e;const{currencies:s,meow:a,fields:c}=n,{i18n:u}=(0,i.mV)(),{0:p,1:m}=(0,o.useState)({attemptingTxn:!1,txHash:"",open:!1}),{account:h,chainId:v}=(0,f.aQ)(),w=(0,g.mM)(h,l.hs[l.a_.ETHEREUM]),b=(0,g.mM)(h,d.LL),{approvalState:O,approve:y,meow:T,unmeow:N,meowSushi:S,unmeowSushi:I}=k(s[Y.INPUT]===l.hs[l.a_.ETHEREUM]),A=(0,g.mM)(h,s[Y.INPUT]),M=(0,P.e)(c[Y.INPUT],s[Y.INPUT]),R=(0,P.e)(c[Y.OUTPUT],s[Y.OUTPUT]),D=()=>{m((e=>B(B({},e),{},{open:!1})))},Z=(0,o.useMemo)((()=>A?null!==M&&void 0!==M&&M.greaterThan(A)?u._(u._("Insufficient Balance")):null!==M&&void 0!==M&&M.greaterThan(0)?null:u._(u._("Please enter an amount")):u._(u._("Loading Balance"))),[A,u,M]);return h?v!==l.a_.ETHEREUM?(0,x.jsx)(_.ZP,{onClick:y,color:"gradient",disabled:!0,children:u._(u._("Network not supported yet"))}):O===U.UK.PENDING?(0,x.jsx)(_.ZP,{color:"gradient",disabled:!0,children:(0,x.jsx)(E.Z,{children:u._(u._("Approving"))})}):O===U.UK.NOT_APPROVED?(0,x.jsx)(_.ZP,{onClick:y,color:"gradient",disabled:!!Z,children:Z||u._(u._("Approve"))}):O===U.UK.APPROVED?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C.ZP,{isOpen:p.open,onDismiss:D,attemptingTxn:p.attemptingTxn,hash:p.txHash,content:(0,x.jsx)(C.pM,{title:u._(u._("Confirm convert")),onDismiss:D,topContent:(0,x.jsx)("span",{}),bottomContent:(0,x.jsx)("span",{})}),pendingText:u._(u._("Converting {0} {1} for {2} {3}",{0:null===M||void 0===M?void 0:M.toSignificant(6,{groupSeparator:","}),1:null===(t=n.currencies[Y.INPUT])||void 0===t?void 0:t.symbol,2:null===R||void 0===R?void 0:R.toSignificant(6,{groupSeparator:","}),3:null===(r=n.currencies[Y.OUTPUT])||void 0===r?void 0:r.symbol}))}),(0,x.jsx)(_.ZP,{onClick:async()=>{var e;let t;var r,n,o,i;(m({attemptingTxn:!0,open:!0,txHash:""}),a)?("SUSHI"===(null===(r=s[Y.INPUT])||void 0===r?void 0:r.symbol)&&(t=await S({value:(0,j.vz)(c[Y.INPUT],w.currency.decimals),decimals:w.currency.decimals})),"xSUSHI"===(null===(n=s[Y.INPUT])||void 0===n?void 0:n.symbol)&&(t=await T({value:(0,j.vz)(c[Y.INPUT],w.currency.decimals),decimals:b.currency.decimals}))):("SUSHI"===(null===(o=s[Y.OUTPUT])||void 0===o?void 0:o.symbol)&&(t=await I({value:(0,j.vz)(c[Y.INPUT],w.currency.decimals),decimals:b.currency.decimals})),"xSUSHI"===(null===(i=s[Y.OUTPUT])||void 0===i?void 0:i.symbol)&&(t=await N({value:(0,j.vz)(c[Y.INPUT],w.currency.decimals),decimals:b.currency.decimals})));null!==(e=t)&&void 0!==e&&e.hash?m((e=>B(B({},e),{},{attemptingTxn:!1,txHash:t.hash}))):D()},disabled:!!Z,color:"gradient",children:Z||u._(u._("Convert"))})]}):void 0:(0,x.jsx)(_.ZP,{onClick:y,color:"gradient",disabled:!0,children:u._(u._("Connect to wallet"))})},H=r(87433);var L=r(38113),F=r(2962);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}let Y;function K(){var e,t;const{i18n:r}=(0,i.mV)(),n=(0,L.Z)(),[p,m]=function(){const e=(0,R.rO)(),{0:t,1:r}=(0,o.useState)([S.O$.from("0"),S.O$.from("0")]);return(0,o.useEffect)((()=>{e&&(async()=>{const t=await e.toShare(d.LL.address,"1".toBigNumber(d.LL.decimals),!1),n=await e.toAmount(d.LL.address,"1".toBigNumber(d.LL.decimals),!1);r([t,n])})()}),[e]),t}(),{0:v,1:f}=(0,o.useState)({independentField:Y.INPUT,[Y.INPUT]:"",[Y.OUTPUT]:""}),{0:g,1:w}=(0,o.useState)({[Y.INPUT]:l.hs[l.a_.ETHEREUM],[Y.OUTPUT]:d.PY}),y=(0,o.useCallback)((async(e,t)=>{f((r=>{const o=g[Y.INPUT]===d.LL?p.mul((0,h.TB)(5)):p.mul((0,h.TB)(5)).mulDiv((0,h.TB)(18),n.toString().toBigNumber(18)),s=g[Y.OUTPUT]===d.LL?m.div((0,h.TB)(5)):m.mulDiv(n.toString().toBigNumber(18),(0,h.TB)(18)).div((0,h.TB)(5));var a,i,l,c;return t===Y.INPUT?g[Y.OUTPUT]===d.PY?{independentField:Y.INPUT,[Y.INPUT]:e||r[Y.INPUT],[Y.OUTPUT]:null===(a=o.mulDiv((e||r[Y.INPUT]).toBigNumber(18),(0,h.TB)(18)))||void 0===a?void 0:a.toFixed(18)}:{independentField:Y.INPUT,[Y.INPUT]:e||r[Y.INPUT],[Y.OUTPUT]:null===(i=s.mulDiv((e||r[Y.INPUT]).toBigNumber(18),(0,h.TB)(18)))||void 0===i?void 0:i.toFixed(18)}:g[Y.OUTPUT]===d.PY?{independentField:Y.OUTPUT,[Y.INPUT]:null===(l=(e||r[Y.OUTPUT]).toBigNumber(18).mulDiv((0,h.TB)(18),o))||void 0===l?void 0:l.toFixed(18),[Y.OUTPUT]:e||r[Y.OUTPUT]}:{independentField:Y.OUTPUT,[Y.INPUT]:null===(c=(e||r[Y.OUTPUT]).toBigNumber(18).mulDiv((0,h.TB)(18),s))||void 0===c?void 0:c.toFixed(18),[Y.OUTPUT]:e||r[Y.OUTPUT]}}))}),[g,p,n,m]),T=(0,o.useCallback)(((e,t)=>{w((r=>q(q({},r),{},{[t]:e})))}),[]);(0,o.useEffect)((()=>{y(null,v.independentField)}),[v.independentField,y]);const j=(0,o.useCallback)((()=>{w((e=>({[Y.INPUT]:e[Y.OUTPUT],[Y.OUTPUT]:e[Y.INPUT]})))}),[]),_=(0,o.useMemo)((()=>{var e;return{currencies:g,setCurrency:T,switchCurrencies:j,fields:v,meow:"MEOW"===(null===(e=g[Y.OUTPUT])||void 0===e?void 0:e.symbol),handleInput:y}}),[g,v,y,T,j]);return(0,x.jsxs)(c.Z,{id:"meowshi-page",className:"py-4 mx-auto md:py-8 lg:py-12",maxWidth:"2xl",children:[(0,x.jsx)(F.PB,{title:"Meowshi"}),(0,x.jsxs)("div",{className:"z-0 relative mb-[-38px] md:mb-[-54px] ml-0 md:ml-4 flex justify-between gap-6 items-center",children:[(0,x.jsx)("div",{className:"min-w-[168px] hidden md:block",children:(0,x.jsx)(b(),{src:"https://app.sushi.com/images/meowshi/neon-cat.png",alt:"neon-cat",width:"168px",height:"168px"})}),(0,x.jsxs)("div",{className:"bg-[rgba(255,255,255,0.04)] p-4 py-2 rounded flex flex-row items-center gap-4 mb-[54px]",children:[(0,x.jsx)(s,{width:48,height:48,color:"pink"}),(0,x.jsx)(u.Z,{variant:"xs",weight:700,children:r._(r._("MEOW tokens wrap xSUSHI into BentoBox for double yields and can be\nused to vote in special MEOW governor contracts."))})]})]}),(0,x.jsxs)("div",{className:"relative grid gap-4 p-4 border-2 rounded z-1 bg-dark-900 shadow-swap border-dark-800",children:[(0,x.jsx)(N,{meowshiState:_}),(0,x.jsx)(O,{field:Y.INPUT,showMax:!0,meowshiState:_}),(0,x.jsxs)("div",{className:"relative mt-[-24px] mb-[-24px] ml-[28px] flex items-center",children:[(0,x.jsx)("div",{className:"inline-flex p-2 border-2 rounded-full cursor-pointer border-dark-900 bg-dark-800",onClick:j,children:(0,x.jsx)(a.Z,{width:24,height:24})}),(0,x.jsxs)(u.Z,{variant:"sm",className:"text-secondary ml-[26px]",children:[null===(e=g[Y.INPUT])||void 0===e?void 0:e.symbol," \u2192"," ",(g[Y.INPUT]===l.hs[l.a_.ETHEREUM]||g[Y.OUTPUT]===l.hs[l.a_.ETHEREUM])&&" xSUSHI \u2192 ",null===(t=g[Y.OUTPUT])||void 0===t?void 0:t.symbol]})]}),(0,x.jsx)(O,{field:Y.OUTPUT,showMax:!1,meowshiState:_}),(0,x.jsx)(Z,{meowshiState:_})]})]})}!function(e){e.INPUT="INPUT",e.OUTPUT="OUTPUT"}(Y||(Y={})),K.Guard=(0,H.Z)(p.L.MEOWSHI)},17461:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/meowshi",function(){return r(44521)}])},55929:function(e,t,r){"use strict";var n=r(67294);const o=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=o}},function(e){e.O(0,[8529,129,3935,9774,2888,179],(function(){return t=17461,e(e.s=t);var t}));var t=e.O();_N_E=t}]);