(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8471],{93688:function(t,e,r){"use strict";var n,s=r(13752),i=r(44554),a=r(85893);!function(t){t[t.REPEAT=0]="REPEAT",t[t.SINGLE=1]="SINGLE"}(n||(n={}));const l={"bg-bars":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:n.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};e.Z=t=>{let{variant:e}=t;if(!e)return(0,a.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});const{type:r,url:c}=l[e];return r===n.REPEAT?(0,a.jsx)("div",{className:(0,i.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,a.jsx)("div",{className:(0,i.AK)("absolute inset-0 w-full h-full z-0 opacity-10",e)})}):(0,a.jsx)(s.Z,{alt:"background image",src:c,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},13752:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(59499),s=r(4730),i=r(44554),a=r(25675),l=r.n(a);var c=r(85893);const o=["src","width","height","layout"];function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=t=>{let{src:e,width:r,height:n,layout:a}=t,p=(0,s.Z)(t,o);const u=parseInt(String(n),10)>=40&&parseInt(String(r),10)>=40,d="string"===typeof e&&e.includes("http")?i.HT:void 0;return(0,c.jsx)("div",{style:{width:r,height:n},className:"overflow-hidden rounded",children:u?(0,c.jsx)(l(),h({loader:d,src:e,width:r,height:n,layout:a,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((g=r,x=n,f='\n<svg width="'.concat(g,'" height="').concat(x,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(g,'" height="').concat(x,'" fill="#333" />\n  <rect id="r" width="').concat(g,'" height="').concat(x,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(g,'" to="').concat(g,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(f)))},p)):(0,c.jsx)(l(),h({loader:d,src:e,width:r,height:n,layout:a,placeholder:"empty"},p))});var f,g,x}},22680:function(t,e,r){"use strict";r.d(e,{A9:function(){return u},CV:function(){return h}});var n=r(93688),s=r(72457),i=r(8578),a=r(23573),l=r(52907),c=r(76844),o=r(44554),p=(r(67294),r(85893));const h=t=>{let{children:e,className:r,pattern:i,maxWidth:a="7xl",condensed:l}=t;return(0,p.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,p.jsx)(n.Z,{variant:i}),(0,p.jsx)(s.Z,{maxWidth:a,className:(0,o.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",l&&"py-5",r),children:e})]})},u=t=>{let{children:e,className:r,maxWidth:n="7xl"}=t;return(0,p.jsx)(l.Z,{children:(0,p.jsx)(s.Z,{maxWidth:n,className:(0,o.AK)("flex flex-col gap-10 z-[1] p-6 lg:py-10 mx-auto",r),children:e})})};e.ZP=t=>{let{children:e=[]}=t;return(0,p.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,p.jsx)(a.Z,{}),(0,p.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,p.jsx)("div",{className:"flex flex-col flex-grow w-full",children:e}),(0,p.jsx)(c.Z,{})]}),(0,p.jsx)(i.Z,{})]})}},96216:function(t,e,r){"use strict";r.r(e);var n=r(49501),s=r(56785),i=r(22680),a=(r(67294),r(85893));e.default=()=>{const{i18n:t}=(0,n.mV)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:t._(t._("BentoBox Explorer"))}),(0,a.jsx)(s.Z,{variant:"sm",weight:400,children:t._(t._("Explore the BentoBox"))})]})}),(0,a.jsx)(i.A9,{children:"Test..."})]})}},80517:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bentobox/explorer",function(){return r(96216)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=80517,t(t.s=e);var e}));var e=t.O();_N_E=e}]);