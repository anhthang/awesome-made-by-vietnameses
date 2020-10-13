var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function s(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function h(){return f(" ")}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function d(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t,n,l){e.style.setProperty(t,n,l?"important":"")}let _;function v(e){_=e}function y(e){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.on_mount.push(e)}const b=[],w=[],x=[],$=[],k=Promise.resolve();let j=!1;function z(e){x.push(e)}let M=!1;const A=new Set;function V(){if(!M){M=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];v(t),L(t.$$)}for(v(null),b.length=0;w.length;)w.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];A.has(t)||(A.add(t),t())}x.length=0}while(b.length);for(;$.length;)$.pop()();j=!1,M=!1,A.clear()}}function L(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const P=new Set;let S;function N(){S={r:0,c:[],p:S}}function C(){S.r||l(S.c),S=S.p}function O(e,t){e&&e.i&&(P.delete(e),e.i(t))}function q(e,t,n,l){if(e&&e.o){if(P.has(e))return;P.add(e),S.c.push((()=>{P.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function B(e){e&&e.c()}function E(e,n,o){const{fragment:r,on_mount:i,on_destroy:u,after_update:c}=e.$$;r&&r.m(n,o),z((()=>{const n=i.map(t).filter(a);u?u.push(...n):l(n),e.$$.on_mount=[]})),c.forEach(z)}function T(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function K(e,t){-1===e.$$.dirty[0]&&(b.push(e),j||(j=!0,k.then(V)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(t,a,o,r,i,c,s=[-1]){const m=_;v(t);const f=a.props||{},h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:s,skip_bound:!1};let p=!1;if(h.ctx=o?o(t,f,((e,n,...l)=>{const a=l.length?l[0]:n;return h.ctx&&i(h.ctx[e],h.ctx[e]=a)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](a),p&&K(t,e)),n})):[],h.update(),p=!0,l(h.before_update),h.fragment=!!r&&r(h.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);h.fragment&&h.fragment.l(e),e.forEach(u)}else h.fragment&&h.fragment.c();a.intro&&O(t.$$.fragment),E(t,a.target,a.anchor),V()}v(m)}class I{$destroy(){T(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var G={"Vietnamese Input":{projects:[{external:!0,name:"EVKey",owner:{name:"Lam Quang Minh"},html_url:"https://evkeyvn.com",description:"Vietnamese keyboard for Windows / MacOS X"},{external:!0,name:"GoTiengViet",owner:{name:"Tran Ky Nam"},html_url:"https://www.trankynam.com/gotv",description:"Giúp bạn gõ tiếng Việt thuận tiện, chính xác, và nhanh nhất"},{full_name:"BambooEngine/ibus-bamboo"},{full_name:"huyphan/NAKL"},{full_name:"tuyenvm/OpenKey"},{external:!0,name:"UniKey",owner:{name:"Pham Kim Long"},html_url:"https://unikey.org",description:"UniKey is the most popular Vietnamese keyboard for Windows. The core UniKey Vietnamese Input Method is also the engine for many Vietnamese keyboards in Linux, macOS and iOS."}]},Applications:{projects:[{external:!0,name:"dbdiagram.io",owner:{name:"Holistics"},html_url:"https://dbdiagram.io",description:"A free, simple tool to draw ER diagrams by just writing code. Designed for developers and data analysts."},{full_name:"onmyway133/DeepDiff"},{full_name:"onmyway133/IconGenerator"},{full_name:"hql287/Manta"},{full_name:"ProxymanApp/Proxyman"},{full_name:"onmyway133/PushNotifications"},{full_name:"TablePlus/TablePlus"}]},C:{projects:[{full_name:"aquynh/capstone"},{full_name:"tuanpmt/esp_mqtt"},{full_name:"unicorn-engine/unicorn"}]},"C++":{projects:[{full_name:"keystone-engine/keystone"}]},Dart:{projects:[{full_name:"hnvn/flutter_flip_panel"},{full_name:"duytq94/flutter-fb-reactions-animation"},{full_name:"hnvn/flutter_shimmer"},{full_name:"hnvn/flutter_image_cropper"},{full_name:"scitbiz/flutter_pokedex"}]},Go:{projects:[{full_name:"giongto35/cloud-game"},{full_name:"pipe-cd/pipe"},{full_name:"nghialv/promviz"}]},HTML:{projects:[{full_name:"kombai/freewall"},{full_name:"phuoc-ng/html-dom"},{full_name:"phuoc-ng/csslayout"}]},Java:{projects:[{full_name:"rockerhieu/emojicon"},{full_name:"duydo/elasticsearch-analysis-vietnamese"},{full_name:"vncorenlp/VnCoreNLP"}]},JavaScript:{projects:[{full_name:"huytd/agar.io-clone"},{full_name:"phuoc-ng/1loc"},{full_name:"tuananh/camaro"},{full_name:"holistics/dbml"},{full_name:"formvalidation/formvalidation"},{full_name:"tuandm/laravue"},{full_name:"buunguyen/mongoose-deep-populate"},{full_name:"ovity/octotree"},{full_name:"evolus/pencil"},{full_name:"huytd/pomoday-v2"},{full_name:"khanhas/spicetify-cli"}]},"Jupyter Notebook":{projects:[{full_name:"chiphuyen/python-is-cool"}]},PHP:{projects:[{full_name:"koel/koel"}]},Python:{projects:[{full_name:"chiphuyen/lazynlp"},{full_name:"lebinh/ngxtop"},{full_name:"chiphuyen/sotawhat"},{full_name:"chiphuyen/stanford-tensorflow-tutorials"},{full_name:"undertheseanlp/underthesea"}]},Ruby:{projects:[{full_name:"nguyenquangminh0711/ruby_jard"}]},Rust:{projects:[{full_name:"huytd/kanban-app"}]},Shell:{projects:[{full_name:"icy/pacapt"}]},Swift:{projects:[{full_name:"itsmeichigo/DateTimePicker"},{full_name:"nghialv/Hakuba"},{full_name:"nghialv/MaterialKit"}]},"Vim script":{projects:[{full_name:"ctrlpvim/ctrlp.vim"}]},Others:{projects:[{full_name:"binhnguyennus/awesome-scalability"},{full_name:"bigdargon/hostsVN"},{full_name:"phanan/htaccess"},{full_name:"hoanhan101/ultimate-go"}]}};function D(e){let t,n;return{c(){t=m("svg"),n=m("path"),p(n,"fill-rule","evenodd"),p(n,"d","M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"),g(t,"margin-right","8px"),p(t,"viewBox","0 0 16 16"),p(t,"version","1.1"),p(t,"width","16"),p(t,"height","16"),p(t,"aria-hidden","true"),p(t,"class","svelte-1kgwfyz")},m(e,l){i(e,t,l),r(t,n)},d(e){e&&u(t)}}}function J(e){let t,n;return{c(){t=m("svg"),n=m("path"),p(n,"fill-rule","evenodd"),p(n,"d","M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"),g(t,"margin-right","8px"),p(t,"viewBox","0 0 16 16"),p(t,"version","1.1"),p(t,"width","16"),p(t,"height","16"),p(t,"aria-hidden","true"),p(t,"class","svelte-1kgwfyz")},m(e,l){i(e,t,l),r(t,n)},d(e){e&&u(t)}}}function F(e){let t,n;return{c(){t=m("svg"),n=m("path"),p(n,"fill-rule","evenodd"),p(n,"d","M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948c.12-.197.237-.381.353-.552a6.506 6.506 0 0 0-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 0 0 4.666 5.5a11.13 11.13 0 0 1-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 0 1-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 0 1-.857-1.215A9.637 9.637 0 0 1 5.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 0 1 1.363-4.177c.306-.51.612-.919.857-1.215c.245.296.55.705.857 1.215A9.638 9.638 0 0 1 10.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948c-.12.197-.237.381-.353.552a6.506 6.506 0 0 0 4.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 0 0-.353-.552a6.506 6.506 0 0 1 4.666 5.5zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z"),g(t,"margin-right","8px"),p(t,"viewBox","0 0 16 16"),p(t,"version","1.1"),p(t,"width","16"),p(t,"height","16"),p(t,"aria-hidden","true"),p(t,"class","svelte-1kgwfyz")},m(e,l){i(e,t,l),r(t,n)},d(e){e&&u(t)}}}function R(e){let t,n,l,a=e[0].name+"";return{c(){t=s("a"),n=f(a),p(t,"href",l=e[0].html_url),p(t,"target","_blank")},m(e,l){i(e,t,l),r(t,n)},p(e,o){1&o&&a!==(a=e[0].name+"")&&d(n,a),1&o&&l!==(l=e[0].html_url)&&p(t,"href",l)},d(e){e&&u(t)}}}function U(e){let t,n,l,a=e[0].full_name+"";return{c(){t=s("a"),n=f(a),p(t,"href",l=e[0].html_url),p(t,"target","_blank")},m(e,l){i(e,t,l),r(t,n)},p(e,o){1&o&&a!==(a=e[0].full_name+"")&&d(n,a),1&o&&l!==(l=e[0].html_url)&&p(t,"href",l)},d(e){e&&u(t)}}}function W(e){let t;return{c(){t=s("span"),t.textContent="Archived",p(t,"class","archived svelte-1kgwfyz")},m(e,n){i(e,t,n)},d(e){e&&u(t)}}}function Q(e){let t,n,l,a,o,c=e[0].source.full_name+"";return{c(){t=s("div"),n=f("forked from "),l=s("a"),a=f(c),g(l,"color","#0366d6"),p(l,"href",o=e[0].source.html_url),p(l,"target","_blank"),g(t,"display","block"),g(t,"font-size","12px")},m(e,o){i(e,t,o),r(t,n),r(t,l),r(l,a)},p(e,t){1&t&&c!==(c=e[0].source.full_name+"")&&d(a,c),1&t&&o!==(o=e[0].source.html_url)&&p(l,"href",o)},d(e){e&&u(t)}}}function X(e){let t,n,l,a,o,c,_,v,y,b,w,x,$,k,j,z=ee(e[0].stargazers_count)+"",M=ee(e[0].forks)+"",A=e[0].language&&Y(e);return{c(){t=s("div"),A&&A.c(),n=h(),l=s("div"),a=m("svg"),o=m("path"),c=f("\n                      "),_=s("span"),v=f(z),y=h(),b=s("div"),w=m("svg"),x=m("path"),$=f("\n                      "),k=s("span"),j=f(M),p(o,"fill-rule","evenodd"),p(o,"d","M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"),p(a,"aria-label","stars"),p(a,"viewBox","0 0 16 16"),p(a,"version","1.1"),p(a,"width","16"),p(a,"height","16"),p(a,"role","img"),p(a,"class","svelte-1kgwfyz"),g(l,"display","flex"),g(l,"align-items","center"),g(l,"margin-right","16px"),p(x,"fill-rule","evenodd"),p(x,"d","M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"),p(w,"aria-label","fork"),p(w,"viewBox","0 0 16 16"),p(w,"version","1.1"),p(w,"width","16"),p(w,"height","16"),p(w,"role","img"),p(w,"class","svelte-1kgwfyz"),g(b,"display","flex"),g(b,"align-items","center"),g(t,"font-size","14px"),g(t,"display","flex")},m(e,u){i(e,t,u),A&&A.m(t,null),r(t,n),r(t,l),r(l,a),r(a,o),r(l,c),r(l,_),r(_,v),r(t,y),r(t,b),r(b,w),r(w,x),r(b,$),r(b,k),r(k,j)},p(e,l){e[0].language?A?A.p(e,l):(A=Y(e),A.c(),A.m(t,n)):A&&(A.d(1),A=null),1&l&&z!==(z=ee(e[0].stargazers_count)+"")&&d(v,z),1&l&&M!==(M=ee(e[0].forks)+"")&&d(j,M)},d(e){e&&u(t),A&&A.d()}}}function Y(e){let t,n,l,a,o,c=e[0].language+"";return{c(){t=s("div"),n=s("span"),l=h(),a=s("span"),o=f(c),g(n,"width","12px"),g(n,"height","12px"),g(n,"border-radius","100%"),g(n,"background-color",e[0].language?e[1][e[0].language]?.color:"gray"),g(n,"display","inline-block"),g(n,"top","1px"),g(n,"position","relative"),g(t,"margin-right","16px")},m(e,u){i(e,t,u),r(t,n),r(t,l),r(t,a),r(a,o)},p(e,t){3&t&&g(n,"background-color",e[0].language?e[1][e[0].language]?.color:"gray"),1&t&&c!==(c=e[0].language+"")&&d(o,c)},d(e){e&&u(t)}}}function Z(t){let n,l,a,o,c,m,_,v,y,b,w=t[0].description+"";function x(e,t){return e[0].external?F:e[0].fork?J:D}let $=x(t),k=$(t);function j(e,t){return e[0].full_name?U:R}let z=j(t),M=z(t),A=t[0].archived&&W(),V=t[0].fork&&Q(t),L=!t[0].external&&X(t);return{c(){n=s("div"),l=s("div"),k.c(),a=h(),o=s("span"),M.c(),c=h(),A&&A.c(),m=h(),V&&V.c(),_=h(),v=s("div"),y=f(w),b=h(),L&&L.c(),g(o,"font-weight","bolder"),g(o,"color","#0366d6"),g(l,"display","flex"),g(l,"align-items","center"),g(v,"font-size","14px"),g(v,"margin-bottom","16px"),g(v,"margin-top","8px"),p(n,"class","repo-card svelte-1kgwfyz")},m(e,t){i(e,n,t),r(n,l),k.m(l,null),r(l,a),r(l,o),M.m(o,null),r(l,c),A&&A.m(l,null),r(n,m),V&&V.m(n,null),r(n,_),r(n,v),r(v,y),r(n,b),L&&L.m(n,null)},p(e,[t]){$!==($=x(e))&&(k.d(1),k=$(e),k&&(k.c(),k.m(l,a))),z===(z=j(e))&&M?M.p(e,t):(M.d(1),M=z(e),M&&(M.c(),M.m(o,null))),e[0].archived?A||(A=W(),A.c(),A.m(l,null)):A&&(A.d(1),A=null),e[0].fork?V?V.p(e,t):(V=Q(e),V.c(),V.m(n,_)):V&&(V.d(1),V=null),1&t&&w!==(w=e[0].description+"")&&d(y,w),e[0].external?L&&(L.d(1),L=null):L?L.p(e,t):(L=X(e),L.c(),L.m(n,null))},i:e,o:e,d(e){e&&u(n),k.d(),M.d(),A&&A.d(),V&&V.d(),L&&L.d()}}}function ee(e){return Math.abs(e)>999?Math.sign(e)*(Math.abs(e)/1e3).toFixed(1)+"k":Math.sign(e)*Math.abs(e)}function te(e,t,n){let{project:l}=t,{colors:a}=t;return y((async()=>{if(l.full_name){const e=sessionStorage.getItem(l.full_name);if(e)n(0,l=JSON.parse(e));else{const e=await fetch("https://api.github.com/repos/"+l.full_name);n(0,l=await e.json()),sessionStorage.setItem(l.full_name,JSON.stringify(l))}}})),e.$$set=e=>{"project"in e&&n(0,l=e.project),"colors"in e&&n(1,a=e.colors)},[l,a]}class ne extends I{constructor(e){super(),H(this,e,te,Z,o,{project:0,colors:1})}}function le(t){let n;return{c(){n=s("a"),n.innerHTML='<svg width="48" height="48" fill="#fcd838" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Fork me on GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>',p(n,"id","github-repo"),p(n,"href","https://github.com/anhthang/awesome-made-by-vietnameses"),p(n,"target","_blank"),p(n,"class","svelte-c63oqj")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class ae extends I{constructor(e){super(),H(this,e,null,le,o,{})}}function oe(e,t,n){const l=e.slice();return l[4]=t[n],l}function re(e,t,n){const l=e.slice();return l[10]=t[n],l}function ie(e,t,n){const l=e.slice();return l[7]=t[n],l}function ue(e){let t,n;return t=new ne({props:{project:e[10],colors:e[1]}}),{c(){B(t.$$.fragment)},m(e,l){E(t,e,l),n=!0},p(e,n){const l={};2&n&&(l.colors=e[1]),t.$set(l)},i(e){n||(O(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function ce(e){let t,n,l,a,o,m=e[7]+"",d=G[e[7]].projects,_=[];for(let t=0;t<d.length;t+=1)_[t]=ue(re(e,d,t));const v=e=>q(_[e],1,1,(()=>{_[e]=null}));return{c(){t=s("h3"),n=f(m),l=h(),a=s("div");for(let e=0;e<_.length;e+=1)_[e].c();g(t,"color",e[1][e[7]]?.color),p(a,"class","repos svelte-x62pqm")},m(e,u){i(e,t,u),r(t,n),i(e,l,u),i(e,a,u);for(let e=0;e<_.length;e+=1)_[e].m(a,null);o=!0},p(e,n){if((!o||2&n)&&g(t,"color",e[1][e[7]]?.color),10&n){let t;for(d=G[e[7]].projects,t=0;t<d.length;t+=1){const l=re(e,d,t);_[t]?(_[t].p(l,n),O(_[t],1)):(_[t]=ue(l),_[t].c(),O(_[t],1),_[t].m(a,null))}for(N(),t=d.length;t<_.length;t+=1)v(t);C()}},i(e){if(!o){for(let e=0;e<d.length;e+=1)O(_[e]);o=!0}},o(e){_=_.filter(Boolean);for(let e=0;e<_.length;e+=1)q(_[e]);o=!1},d(e){e&&u(t),e&&u(l),e&&u(a),c(_,e)}}}function se(e){let t,n,l,a,o,c;return{c(){t=s("a"),n=s("img"),o=h(),p(n,"width","64"),p(n,"height","64"),g(n,"border-radius","100%"),n.src!==(l=e[4].avatar_url||e[4].gravatar_id)&&p(n,"src",l),p(n,"alt",a=e[4].login),p(t,"href",c=e[4].html_url),p(t,"target","_blank")},m(e,l){i(e,t,l),r(t,n),r(t,o)},p(e,o){4&o&&n.src!==(l=e[4].avatar_url||e[4].gravatar_id)&&p(n,"src",l),4&o&&a!==(a=e[4].login)&&p(n,"alt",a),4&o&&c!==(c=e[4].html_url)&&p(t,"href",c)},d(e){e&&u(t)}}}function me(e){let t,n,l,a,o,m,g,_,v,y,b,w;n=new ae({});let x=e[3],$=[];for(let t=0;t<x.length;t+=1)$[t]=ce(ie(e,x,t));const k=e=>q($[e],1,1,(()=>{$[e]=null}));let j=e[2],z=[];for(let t=0;t<j.length;t+=1)z[t]=se(oe(e,j,t));return{c(){t=s("main"),B(n.$$.fragment),l=h(),a=s("h1"),o=f(e[0]),m=h(),g=s("p"),g.textContent="It's hard to calculate project popularity so we use stars as a measurement. It's not quite fair, but it is what we have here on Github.",_=h();for(let e=0;e<$.length;e+=1)$[e].c();v=h(),y=s("h2"),y.textContent="Contributors",b=h();for(let e=0;e<z.length;e+=1)z[e].c();p(t,"class","svelte-x62pqm")},m(e,u){i(e,t,u),E(n,t,null),r(t,l),r(t,a),r(a,o),r(t,m),r(t,g),r(t,_);for(let e=0;e<$.length;e+=1)$[e].m(t,null);r(t,v),r(t,y),r(t,b);for(let e=0;e<z.length;e+=1)z[e].m(t,null);w=!0},p(e,[n]){if((!w||1&n)&&d(o,e[0]),10&n){let l;for(x=e[3],l=0;l<x.length;l+=1){const a=ie(e,x,l);$[l]?($[l].p(a,n),O($[l],1)):($[l]=ce(a),$[l].c(),O($[l],1),$[l].m(t,v))}for(N(),l=x.length;l<$.length;l+=1)k(l);C()}if(4&n){let l;for(j=e[2],l=0;l<j.length;l+=1){const a=oe(e,j,l);z[l]?z[l].p(a,n):(z[l]=se(a),z[l].c(),z[l].m(t,null))}for(;l<z.length;l+=1)z[l].d(1);z.length=j.length}},i(e){if(!w){O(n.$$.fragment,e);for(let e=0;e<x.length;e+=1)O($[e]);w=!0}},o(e){q(n.$$.fragment,e),$=$.filter(Boolean);for(let e=0;e<$.length;e+=1)q($[e]);w=!1},d(e){e&&u(t),T(n),c($,e),c(z,e)}}}function fe(e,t,n){let{name:l}=t,a=[],o=[];y((async()=>{n(1,a=await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then((e=>e.json()))),n(2,o=await fetch("https://api.github.com/repos/anhthang/awesome-made-by-vietnameses/contributors").then((e=>e.json())))}));const r=Object.keys(G);return e.$$set=e=>{"name"in e&&n(0,l=e.name)},[l,a,o,r]}return new class extends I{constructor(e){super(),H(this,e,fe,me,o,{name:0})}}({target:document.body,props:{name:"🇻🇳 Awesome made by Vietnameses"}})}();
//# sourceMappingURL=bundle.js.map
