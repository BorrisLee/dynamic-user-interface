!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(()=>{let e=document.querySelector(".dropdown");e||(e=document.createElement("ul"),e.classList.add("dropdown"),e.textContent="MENU",document.querySelector("body").appendChild(e),e.addEventListener("click",()=>{document.querySelectorAll(".dropdown-item").forEach(e=>{"block"===e.style.display?e.style.display="none":e.style.display="block"})}));return{addItem:t=>{const n=document.createElement("li");n.classList.add("dropdown-item"),e.appendChild(n),n.appendChild(t)}}})();for(let e=0;e<10;e++){const t=document.createElement("p");t.textContent="test item "+e,o.addItem(t)}console.log("TODO: Slider Module")}]);