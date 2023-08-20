"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2892],{13752:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(59499),o=n(4730),a=n(44554),i=n(25675),u=n.n(i);var c=n(85893);const s=["src","width","height","layout"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=e=>{let{src:t,width:n,height:r,layout:i}=e,d=(0,o.Z)(e,s);const f=parseInt(String(r),10)>=40&&parseInt(String(n),10)>=40,h="string"===typeof t&&t.includes("http")?a.HT:void 0;return(0,c.jsx)("div",{style:{width:n,height:r},className:"overflow-hidden rounded",children:f?(0,c.jsx)(u(),l({loader:h,src:t,width:n,height:r,layout:i,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((v=n,p=r,m='\n<svg width="'.concat(v,'" height="').concat(p,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(v,'" height="').concat(p,'" fill="#333" />\n  <rect id="r" width="').concat(v,'" height="').concat(p,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(v,'" to="').concat(v,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(m)))},d)):(0,c.jsx)(u(),l({loader:h,src:t,width:n,height:r,layout:i,placeholder:"empty"},d))});var m,v,p}},53389:function(e,t,n){n.d(t,{UK:function(){return r.UK},qL:function(){return r.qL},x7:function(){return O},rO:function(){return A.rO},HW:function(){return A.HW},mX:function(){return A.mX},cq:function(){return A.cq},MQ:function(){return A.MQ},TK:function(){return y.Z},JY:function(){return A.JY},wq:function(){return A.wq},ou:function(){return A.ou},JE:function(){return A.JE},Fe:function(){return A.Fe},Ti:function(){return A.Ti},cX:function(){return x.Z},i7:function(){return A.i7},bL:function(){return A.bL},sL:function(){return A.sL},oF:function(){return I.ZP},lz:function(){return A.lz}});var r=n(27262),o=n(19485),a=n(9279),i=n(78980),u=n(2593);const c=e=>{let{bentobox:t,tokenAddress:n,amount:r,account:u,chainId:c,share:s}=e;const d=(0,o.getAddress)(n);return{data:t.interface.encodeFunctionData("withdraw",[d===i.df[c]?a.d:d,u,u,r,s?s.toString():0])}},s=e=>{let{bentobox:t,tokenAddress:n,rebalance:r}=e;return{data:t.interface.encodeFunctionData("harvest",[n,r,0])}},d=e=>{let{bentobox:t,actions:n=[],revertOnFail:r}=e;const o=n.filter(Boolean);if(0===o.length)throw new Error("No valid actions");return 1===o.length?o[0]:o.length>1?t.interface.encodeFunctionData("batch",[o,r]):void 0};var l=n(59499),f=n(69807),h=n(46440),m=n(44554),v=n(12614),p=n(68411),b=n(67294);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=e=>{const{account:t,chainId:n,library:r}=(0,v.aQ)(),l=(0,p.h7)(),g=(0,A.rO)(!0),O=(0,b.useCallback)((async(e,o,a)=>{if(n&&t&&g&&r)try{const i=await r.getSigner().sendTransaction({from:t,to:g.address,data:d({bentobox:g,actions:[c({bentobox:g,tokenAddress:e,account:t,amount:o,chainId:n}).data,s({bentobox:g,tokenAddress:e,rebalance:!0}).data,c({bentobox:g,tokenAddress:e,account:t,amount:a.sub(o),chainId:n}).data],revertOnFail:!1})});if(null!==i&&void 0!==i&&i.hash)return l(i,{summary:"Withdraw from Bentobox"})}catch(i){return console.error("Bentobox withdraw error:",i),i}}),[t,l,g,n,r]),y=(0,b.useCallback)((async(c,s,h,m)=>{if(!h||!n||!t||!g||!r)return;const v=[];let p="";try{const b=await g.balanceOf(c.wrapped.address,"0x000000000000000000000000000000000000dead"),w=(i.QA.equal(i.QA.BigInt(0),s.base)&&i.QA.equal(i.QA.BigInt(0),s.elastic)?h:u.O$.from((0,f.T)(s,i.QA.BigInt(h)).toString())).sub(b.isZero()?1e3:0);m&&e&&(v.push((e=>{let{bentobox:t,account:n,masterContract:r,permit:o}=e;const{v:a,r:i,s:u}=o;return{data:t.interface.encodeFunctionData("setMasterContractApproval",[n,r,!0,a,i,u])}})({bentobox:g,masterContract:e,permit:m,account:t}).data),p+="Approve Master Contract and");const{data:O,value:A}=(e=>{let{bentobox:t,tokenAddress:n,share:r,amount:c,account:s,chainId:d}=e;const l=(0,o.getAddress)(n);return l===i.df[d]?{data:t.interface.encodeFunctionData("deposit",[a.d,s,s,0,r]),value:c}:{data:t.interface.encodeFunctionData("deposit",[l,s,s,0,r]),value:u.O$.from(0)}})({bentobox:g,tokenAddress:c.wrapped.address,account:t,amount:h,share:w,chainId:n});v.push(O),p+="Deposit to Bentobox",b.isZero()&&v.push((e=>{let{bentobox:t,tokenAddress:n,fromAddress:r,toAddress:o,share:a}=e;return{data:t.interface.encodeFunctionData("transfer",[n,r,o,a])}})({bentobox:g,fromAddress:t,tokenAddress:c.wrapped.address,toAddress:"0x000000000000000000000000000000000000dead",share:u.O$.from(1)}).data);const y=await r.getSigner().sendTransaction({from:t,to:g.address,data:d({bentobox:g,actions:v,revertOnFail:!0}),value:A});return null!==y&&void 0!==y&&y.hash&&(l(y,{summary:p}),await y.wait()),y}catch(b){return console.error("Bentobox deposit error:",b),b}}),[t,l,g,n,r,e]),x=(0,b.useCallback)((async(e,o,a)=>{if(!o||!n||!t||!g||!r)return;const i=(0,m.uN)(e,h.RB,r),u=await i.balanceOf(null===g||void 0===g?void 0:g.address);if(o.gt(u))return O(e,u,o);try{const i=await r.getSigner().sendTransaction(w({from:t,to:g.address},c({bentobox:g,tokenAddress:e,account:t,amount:o,chainId:n,share:a})));if(null!==i&&void 0!==i&&i.hash)return l(i,{summary:"Withdraw from Bentobox"})}catch(s){return console.error("Bentobox withdraw error:",s),s}}),[t,l,g,n,r,O]),I=(0,b.useCallback)((async function(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!n&&g&&r&&t)try{const n=await r.getSigner().sendTransaction(w({from:t,to:g.address},s({bentobox:g,tokenAddress:e,rebalance:o})));if(null!==n&&void 0!==n&&n.hash)return l(n,{summary:o?"Harvest & Rebalance":"Harvest"})}catch(a){return console.error("bentobox harvest error:",a),a}}),[t,l,g,n,r]);return{deposit:y,withdraw:x,harvest:I,withdrawWithHarvest:O}},A=(n(89638),n(37601),n(54907));n(980),n(1082);var y=n(76294),x=n(80113),I=n(90573)},71195:function(e,t,n){n.d(t,{V:function(){return c}});var r=n(12614),o=n(94654),a=n.n(o),i=n(67294),u=n(86612);function c(e,t){const{chainId:n}=(0,r.aQ)(),[o,c]=n?[null===e||void 0===e?void 0:e.wrapped,null===t||void 0===t?void 0:t.wrapped]:[void 0,void 0],s=(0,i.useMemo)((()=>{var e,t,r,a,i;if(!n)return[];return[...null!==(e=u.lM[n])&&void 0!==e?e:[],...o&&null!==(t=null===(r=u.ck[n])||void 0===r?void 0:r[o.address])&&void 0!==t?t:[],...c&&null!==(a=null===(i=u.ck[n])||void 0===i?void 0:i[c.address])&&void 0!==a?a:[]]}),[n,o,c]),d=(0,i.useMemo)((()=>a()(s,(e=>s.map((t=>[e,t]))))),[s]);return(0,i.useMemo)((()=>o&&c?[[o,c],...s.map((e=>[o,e])),...s.map((e=>[c,e])),...d].filter((e=>Boolean(e[0]&&e[1]))).filter((e=>{let[t,n]=e;return t.address!==n.address})).filter((e=>{let[t,r]=e;if(!n)return!0;const o=u.IP[n],a=null===o||void 0===o?void 0:o[t.address],i=null===o||void 0===o?void 0:o[r.address];return!a&&!i||!(a&&!a.find((e=>r.equals(e))))&&!(i&&!i.find((e=>t.equals(e))))})):[]),[o,c,s,d,n])}},76294:function(e,t,n){var r=n(74221),o=n(67294);r.Z.IFuseOptions;t.Z=function(e){let{data:t,options:n}=e;const{0:a,1:i}=(0,o.useState)(""),u=(0,o.useCallback)((()=>i("")),[]);return(0,o.useMemo)((()=>{const e=function(e){let{fuse:t,data:n,term:r}=e;const o=t.search(r);return r?o.map((e=>e.item)):n}({fuse:new r.Z(t||[],n),data:t,term:a});return{result:e,search:i,term:a,reset:u}}),[t,n,u,a])}},80113:function(e,t,n){var r=n(2593),o=n(78980),a=n(67294);function i(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";try{return t.replace("[",n).replace("]","").split(n).reduce(((e,t)=>e[t]),e)}catch(r){return}}t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const{0:n,1:u}=(0,a.useState)(t),c=(0,a.useMemo)((()=>{if(e&&e.length>0){const t=[...e];return null!==n&&t.sort(((e,t)=>{const a=i(e,n.key),u=i(t,n.key);if("number"===typeof a&&"number"===typeof u){if(a===1/0)return"ascending"===n.direction?-1:1;if(u===1/0)return"ascending"===n.direction?1:-1;if(a<u)return"ascending"===n.direction?-1:1;if(a>u)return"ascending"===n.direction?1:-1}if(a instanceof r.O$&&u instanceof r.O$){if(a.lt(u))return"ascending"===n.direction?-1:1;if(a.gt(u))return"ascending"===n.direction?1:-1}if(a instanceof o.QA&&u instanceof o.QA){if(o.QA.lessThan(a,u))return"ascending"===n.direction?-1:1;if(o.QA.greaterThan(a,u))return"ascending"===n.direction?1:-1}if(a instanceof o.ih&&u instanceof o.ih){if(a.lessThan(u))return"ascending"===n.direction?-1:1;if(a.greaterThan(u))return"ascending"===n.direction?1:-1}return a?u?0:-1:1})),t}return[]}),[e,n]),s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ascending";n&&n.key===e&&"ascending"===n.direction?t="descending":n&&n.key===e&&"descending"===n.direction&&(t="ascending"),u({key:e,direction:t})};return{items:c,requestSort:s,sortConfig:n}}},90573:function(e,t,n){n.d(t,{Fm:function(){return d},NF:function(){return s},ZP:function(){return c},mJ:function(){return l}});var r=n(78980),o=n(67294),a=n(12614),i=n(56388);const u={[r.a_.ETHEREUM]:r.ih.fromRawAmount(r.qY[r.a_.ETHEREUM],1e11),[r.a_.ROPSTEN]:r.ih.fromRawAmount(r.qY[r.a_.ROPSTEN],1e11),[r.a_.KOVAN]:r.ih.fromRawAmount(r.qY[r.a_.KOVAN],1e6),[r.a_.MATIC]:r.ih.fromRawAmount(r.qY[r.a_.MATIC],1e11),[r.a_.FANTOM]:r.ih.fromRawAmount(r.qY[r.a_.FANTOM],1e11),[r.a_.BSC]:r.ih.fromRawAmount(r.qY[r.a_.BSC],1e23),[r.a_.HARMONY]:r.ih.fromRawAmount(r.qY[r.a_.HARMONY],1e11),[r.a_.HECO]:r.ih.fromRawAmount(r.qY[r.a_.HECO],1e11),[r.a_.OKEX]:r.ih.fromRawAmount(r.qY[r.a_.OKEX],1e23),[r.a_.XDAI]:r.ih.fromRawAmount(r.qY[r.a_.XDAI],1e11),[r.a_.ARBITRUM]:r.ih.fromRawAmount(r.qY[r.a_.ARBITRUM],1e11),[r.a_.CELO]:r.ih.fromRawAmount(r.qY[r.a_.CELO],1e23),[r.a_.MOONRIVER]:r.ih.fromRawAmount(r.qY[r.a_.MOONRIVER],1e11),[r.a_.FUSE]:r.ih.fromRawAmount(r.qY[r.a_.FUSE],1e11),[r.a_.TELOS]:r.ih.fromRawAmount(r.qY[r.a_.TELOS],1e11),[r.a_.AVALANCHE]:r.ih.fromRawAmount(r.qY[r.a_.AVALANCHE],1e11),[r.a_.MOONBEAM]:r.ih.fromRawAmount(r.qY[r.a_.MOONBEAM],1e11)};function c(e){const{chainId:t}=(0,a.aQ)(),n=t?u[t]:void 0,c=null===n||void 0===n?void 0:n.currency,s=(0,i.k)(e,n,{maxHops:2});return(0,o.useMemo)((()=>{if(e&&c){if(null!==e&&void 0!==e&&e.wrapped.equals(c))return new r.tA(c,c,"1","1");if(s){const{numerator:t,denominator:n}=s.route.midPrice;return new r.tA(e,c,n,t)}}}),[e,c,s])}function s(e){const t=c(null===e||void 0===e?void 0:e.currency);return(0,o.useMemo)((()=>{if(!t||!e)return null;try{return t.quote(e)}catch(n){return null}}),[e,t])}function d(e){const t=c(e);return(0,o.useMemo)((()=>{if(!t||!e)return{price:void 0,loading:!1};try{return{price:t,loading:!1}}catch(n){return{price:void 0,loading:!1}}}),[e,t])}function l(e){const t=c(null===e||void 0===e?void 0:e.currency);return(0,o.useMemo)((()=>{if(!t||!e)return{value:void 0,loading:!1};try{return{value:t.quote(e),loading:!1}}catch(n){return{value:void 0,loading:!1}}}),[e,t])}},97503:function(e,t,n){n.d(t,{OY:function(){return l},Oo:function(){return f},_G:function(){return d}});var r=n(8198),o=n(69587),a=n(78980),i=n(2886),u=n(67294),c=n(627);const s=new r.vU(o);let d;function l(e){const t=(0,u.useMemo)((()=>e.map((e=>{let[t,n]=e;return[null===t||void 0===t?void 0:t.wrapped,null===n||void 0===n?void 0:n.wrapped]}))),[e]),n=(0,u.useMemo)((()=>t.reduce(((e,t)=>{let[n,r]=t;const o=n&&r&&n.chainId===r.chainId&&!n.equals(r)&&a.F1[n.chainId]?(0,c.f7)({factoryAddress:204==n.chainId?"0xa7408904620F14C4FEB898c8c20c2189636d4009":a.F1[n.chainId],tokenA:n,tokenB:r}):void 0;return e.push(o&&!e.includes(o)?o:void 0),e}),[])),[t]),r=(0,i._Y)(n,s,"getReserves");return(0,u.useMemo)((()=>r.map(((e,n)=>{const{result:r,loading:o}=e,i=t[n][0],u=t[n][1];if(o)return[d.LOADING,null];if(!i||!u||i.equals(u))return[d.INVALID,null];if(!r)return[d.NOT_EXISTS,null];const{reserve0:c,reserve1:s}=r,[l,f]=i.sortsBefore(u)?[i,u]:[u,i];return[d.EXISTS,new a.qA(a.ih.fromRawAmount(l,c.toString()),a.ih.fromRawAmount(f,s.toString()))]}))),[r,t])}function f(e,t){return l((0,u.useMemo)((()=>[[e,t]]),[e,t]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(d||(d={}))},56388:function(e,t,n){n.d(t,{k:function(){return f},w:function(){return l}});var r=n(78980),o=n(16682),a=n(92659),i=n(67294),u=n(71195),c=n(97503);function s(e,t){const n=(0,u.V)(e,t),r=(0,c.OY)(n);return(0,i.useMemo)((()=>Object.values(r.filter((e=>Boolean(e[0]===c._G.EXISTS&&e[1]))).reduce(((e,t)=>{var n;let[,r]=t;return e[r.liquidityToken.address]=null!==(n=e[r.liquidityToken.address])&&void 0!==n?n:r,e}),{}))),[r])}const d=3;function l(e,t){let{maxHops:n=d}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const u=s(null===e||void 0===e?void 0:e.currency,t);return(0,i.useMemo)((()=>{if(e&&t&&u.length>0){var i;if(1===n)return null!==(i=r.ho.bestTradeExactIn(u,e,t,{maxHops:1,maxNumResults:1})[0])&&void 0!==i?i:null;let s=null;for(let i=1;i<=n;i++){var c;const n=null!==(c=r.ho.bestTradeExactIn(u,e,t,{maxHops:i,maxNumResults:1})[0])&&void 0!==c?c:null;(0,a._B)(s,n,o.Ru)&&(s=n)}return s}return null}),[u,e,t,n])}function f(e,t){let{maxHops:n=d}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const u=s(e,null===t||void 0===t?void 0:t.currency);return(0,i.useMemo)((()=>{if(e&&t&&u.length>0){var i;if(1===n)return null!==(i=r.ho.bestTradeExactOut(u,e,t,{maxHops:1,maxNumResults:1})[0])&&void 0!==i?i:null;let s=null;for(let i=1;i<=n;i++){var c;const n=null!==(c=r.ho.bestTradeExactOut(u,e,t,{maxHops:i,maxNumResults:1})[0])&&void 0!==c?c:null;(0,a._B)(s,n,o.Ru)&&(s=n)}return s}return null}),[e,t,u,n])}}}]);