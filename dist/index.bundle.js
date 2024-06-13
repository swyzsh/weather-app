"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[57],{208:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(354),o=t.n(r),a=t(314),i=t.n(a),A=t(417),c=t.n(A),s=new URL(t(603),t.b),l=i()(o()),p=c()(s);l.push([n.id,`@font-face {\n  font-family: 'carto-reg';\n  src: url(${p});\n}\n\n:root {\n  --base: #303446;\n  --surface: #51576d;\n  --overlay: #737994;\n  --subtext: #a5adce;\n  --text: #c6d0f5;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  font-family: 'carto-reg';\n  background-color: var(--base);\n  color: var(--text);\n  overflow: hidden;\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n#tempSwitchBtn {\n  font-family: 'carto-reg';\n  font-size: 1rem;\n  padding: 6px 12px;\n  background-color: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--overlay);\n  border-radius: 12px;\n}\n#tempSwitchBtn:hover {\n  background-color: var(--overlay);\n}\n#tempSwitchBtn:active {\n  background-color: var(--surface);\n}\n.tempDisplay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0px;\n}\n.tempDisplay .selected-temp {\n  font-size: 4rem;\n}\n.tempDisplay .other-temp {\n  font-size: 2rem;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\nfooter h1 {\n  margin-left: 24px;\n  margin-right: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 4rem;\n}\nfooter .search {\n  margin-left: auto;\n  font-family: 'carto-reg';\n  font-size: 1rem;\n  padding: 6px 12px;\n  background-color: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--overlay);\n  border-radius: 12px;\n}\nfooter .search::placeholder {\n  color: var(--text); \n}\nfooter button[type="submit"] {\n  margin-right: 24px;\n  font-family: 'carto-reg';\n  font-size: 1rem;\n  padding: 6px 12px;\n  background-color: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--overlay);\n  border-radius: 12px;\n}\nbutton[type="submit"]:hover {\n  background-color: var(--overlay);\n}\nbutton[type="submit"]:active {\n  background-color: var(--surface);\n}\n\n\n@media screen and (max-width: 600px) {\n\n\n\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,wBAAwB;EACxB,4CAAoD;AACtD;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,wBAAwB;EACxB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,kBAAkB;EAClB,gCAAgC;EAChC,mBAAmB;AACrB;AACA;EACE,gCAAgC;AAClC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,kBAAkB;EAClB,gCAAgC;EAChC,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,kBAAkB;EAClB,gCAAgC;EAChC,mBAAmB;AACrB;AACA;EACE,gCAAgC;AAClC;AACA;EACE,gCAAgC;AAClC;;;AAGA;;;;AAIA",sourcesContent:["@font-face {\n  font-family: 'carto-reg';\n  src: url('./metadata/font/CartographCF-Regular.ttf');\n}\n\n:root {\n  --base: #303446;\n  --surface: #51576d;\n  --overlay: #737994;\n  --subtext: #a5adce;\n  --text: #c6d0f5;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  font-family: 'carto-reg';\n  background-color: var(--base);\n  color: var(--text);\n  overflow: hidden;\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n#tempSwitchBtn {\n  font-family: 'carto-reg';\n  font-size: 1rem;\n  padding: 6px 12px;\n  background-color: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--overlay);\n  border-radius: 12px;\n}\n#tempSwitchBtn:hover {\n  background-color: var(--overlay);\n}\n#tempSwitchBtn:active {\n  background-color: var(--surface);\n}\n.tempDisplay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0px;\n}\n.tempDisplay .selected-temp {\n  font-size: 4rem;\n}\n.tempDisplay .other-temp {\n  font-size: 2rem;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\nfooter h1 {\n  margin-left: 24px;\n  margin-right: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 4rem;\n}\nfooter .search {\n  margin-left: auto;\n  font-family: 'carto-reg';\n  font-size: 1rem;\n  padding: 6px 12px;\n  background-color: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--overlay);\n  border-radius: 12px;\n}\nfooter .search::placeholder {\n  color: var(--text); \n}\nfooter button[type=\"submit\"] {\n  margin-right: 24px;\n  font-family: 'carto-reg';\n  font-size: 1rem;\n  padding: 6px 12px;\n  background-color: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--overlay);\n  border-radius: 12px;\n}\nbutton[type=\"submit\"]:hover {\n  background-color: var(--overlay);\n}\nbutton[type=\"submit\"]:active {\n  background-color: var(--surface);\n}\n\n\n@media screen and (max-width: 600px) {\n\n\n\n}"],sourceRoot:""}]);const d=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=r.base?c[0]+r.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var d=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var f=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},128:(n,e,t)=>{var r=t(72),o=t.n(r),a=t(825),i=t.n(a),A=t(659),c=t.n(A),s=t(56),l=t.n(s),p=t(540),d=t.n(p),u=t(113),f=t.n(u),m=t(208),C={};C.styleTagTransform=f(),C.setAttributes=l(),C.insert=c().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=d(),o()(m.A,C),m.A&&m.A.locals&&m.A.locals;let B,g,h,v,E="London";async function b(){try{const n=`http://api.weatherapi.com/v1/current.json?key=246e4620ea1644eeba4154724240406&q=${E}`,e=await fetch(n);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();console.log(t),B=t.current.temp_c,g=t.current.temp_f,h=t.current.is_day,v=t.current.condition.text,console.log(v),console.log(B),M.innerHTML=E.toLowerCase().split(" ").map((n=>n.charAt(0).toUpperCase()+n.slice(1))).join(" "),w.innerHTML=`${B}°C`,L.innerHTML=`${g}°F`}catch(n){console.error("Fetch error: ",n)}}const x=document.querySelector("header"),y=document.createElement("div");y.classList.add("tempDisplay");let k="C";const w=document.createElement("span");w.innerHTML=`${B}°C`,w.classList.add("selected-temp"),y.appendChild(w);const L=document.createElement("span");L.innerHTML=`${g}°F`,L.classList.add("other-temp"),y.appendChild(L),x.appendChild(y);const S=document.createElement("button");S.id="tempSwitchBtn",S.innerHTML="C/F",x.appendChild(S),S.addEventListener("click",(function(){"C"===k?(k="F",y.innerHTML="",y.appendChild(L),y.appendChild(w),L.classList.remove("other-temp"),w.classList.remove("selected-temp"),L.classList.add("selected-temp"),w.classList.add("other-temp")):"F"===k&&(k="C",y.innerHTML="",y.appendChild(w),y.appendChild(L),w.classList.remove("other-temp"),L.classList.remove("selected-temp"),w.classList.add("selected-temp"),L.classList.add("other-temp"))})),document.querySelector("main");const j=document.querySelector("footer"),M=document.createElement("h1");M.innerHTML=E,j.appendChild(M);const T=document.createElement("input");T.setAttribute("type","text"),T.setAttribute("name","search"),T.setAttribute("placeholder","Search you place!"),T.id="locationSearch",T.classList.add("search");const H=document.createElement("button");H.innerHTML="Submit",H.setAttribute("type","submit"),j.appendChild(T),j.appendChild(H),H.addEventListener("click",(function(n){n.preventDefault();const e=T.value;E=e,console.log(E),b()})),document.addEventListener("DOMContentLoaded",(function(){b()}))},603:(n,e,t)=>{n.exports=t.p+"842ffe14f6f94ce7f7af.ttf"}},n=>{n(n.s=128)}]);
//# sourceMappingURL=index.bundle.js.map