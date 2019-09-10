/**
 * Mikado.js v0.0.81 (ES5)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var l;Object.assign||(Object.assign=function(){var a=arguments,b=a.length,d=a[0];if(1<b)for(var c=1,e,h,k;c<b;c++){e=a[c];h=Object.keys(e);k=h.length;for(var f=0,g;f<k;f++)g=h[f],d[g]=e[g]}return d});Promise||(window.Promise=function(){function a(b){this.f=null;var d=this;b(function(c){d.f&&(d.f(c),d.f=null)})}a.prototype.then=function(b){this.f=b};return a}());function n(a,b,d){window.addEventListener(a,b,d||{passive:!0,capture:!0})}function t(a,b){b||(b=a.type);var d=a.target,c=d,e=d["_event_"+b];if(e)c=d["_root_"+b];else{for(;c;){if(c===w)return;if(e=c.getAttribute(b)){if(-1!==e.indexOf(":")){var h=e.split(":"),k=h[1];e=0;for(c=c.parentElement;c!==w;){if(c.hasAttribute(k)){e=h[0];break}c=c.parentElement}}break}c=c.parentElement}if(!e)return;d["_event_"+b]=e;d["_root_"+b]=c}if(b=x[e])a.preventDefault(),b(c,a);a.stopPropagation()}var A={},x={},w=document.body;
B.prototype.route=function(a,b){x[a]=b;return this};var C="ontouchstart"in window||navigator.msMaxTouchPoints,D,E,F;if(C){var G=function(a,b){b&&(b=b[0]);D=b?b.clientX:a.pageX;E=b?b.clientY:a.pageY},H=function(a){var b=D,d=E;G(a,a.changedTouches);50>Math.abs(D-b)&&50>Math.abs(E-d)&&t.call(this,a,"click")},I=function(a){G(a,a.touches)};F=function(){n("touchstart",I,!1);n("touchend",H,!1)}};l=B.prototype;l.up=function(a){if(a=a._idx){var b=this.b[a],d=this.b[a-1];this.root.insertBefore(b,d);b._idx=a-1;d._idx=a;this.b[a]=d;this.b[a-1]=b;this.store&&(b=this.store[a-1],this.store[a-1]=this.store[a],this.store[a]=b)}};l.down=function(a){a=a._idx;if(a<this.length-1){var b=this.b[a],d=this.b[a+1];a===this.length-2?this.root.appendChild(b):this.root.insertBefore(b,d);b._idx=a+1;d._idx=a;this.b[a]=d;this.b[a+1]=b;this.store&&(b=this.store[a+1],this.store[a+1]=this.store[a],this.store[a]=b)}};
l.first=function(a){var b=a._idx;if(b){this.root.insertBefore(a,this.b[0]);a=this.b.splice(b,1)[0];this.b.unshift(a);for(a=0;a<=b;a++)this.b[a]._idx=a;this.store&&(b=this.store.splice(b,1)[0],this.store.unshift(b))}};l.last=function(a){var b=a._idx;if(b<this.length-1){this.root.appendChild(a);a=this.b.splice(b,1)[0];this.b.push(a);for(a=b;a<this.length;a++)this.b[a]._idx=a;this.store&&(b=this.store.splice(b,1)[0],this.store.push(b))}};
l.swap=function(a,b){if(a!==b){if("number"===typeof a){var d=a;a=this.b[a]}else d=a._idx;if("number"===typeof b){var c=b;b=this.b[b]}else c=b._idx;if(this.v){var e=a._item;this.update(a,b._item,null,c);this.update(b,e,null,d)}else this.root.insertBefore(a,b),this.root.insertBefore(b,d+1===c?a:this.b[d+1]),a._idx=c,b._idx=d,this.b[d]=b,this.b[c]=a;this.store&&(a=this.store[c],this.store[c]=this.store[d],this.store[d]=a)}return this};B.prototype.setText=function(a,b){a._text!==b&&(a.nodeValue=b,a._text=b);return this};B.prototype.setHTML=function(a,b){a._html!==b&&(a.innerHTML=b,a._html=b);return this};B.prototype.setClass=function(a,b){a._class!==b&&(a.className=b,a._class=b,a._class_cache=null);return this};B.prototype.setStyle=function(a,b,d){var c=a._style_cache||(a._style_cache={});c[b]!==d&&(c[b]=d,(a._style||(a._style=a.style)).setProperty(b,d),a._css=null);return this};
B.prototype.setCSS=function(a,b){a._css!==b&&((a._style||(a._style=a.style)).cssText=b,a._css=b,a._style_cache=null);return this};B.prototype.setAttribute=function(a,b,d){var c="_attr_"+b;a[c]!==d&&(a.setAttribute(b,d),a[c]=d);return this};var J=window,K=J.requestAnimationFrame,L=J.cancelAnimationFrame,M={store:!1,loose:!0,cache:!0,async:!1,reuse:!0},N={},O={};function B(a,b,d){a.nodeType||(d=b,b=a,a=null);b||(d=a);a&&this.mount(a);this.init(b,d)}function P(a,b){b||(b=a,a=b.n);O[a]=b}B.prototype.mount=function(a){this.root!==a&&(this.root=a,Q(this),this.b=a._d||(a._d=R(a.childNodes)),this.length=this.b.length);return this};
var S={tap:1,change:1,click:1,dblclick:1,input:1,keydown:1,keypress:1,keyup:1,mousedown:1,mouseenter:1,mouseleave:1,mousemove:1,mouseout:1,mouseover:1,mouseup:1,mousewheel:1,touchstart:1,touchmove:1,touchend:1,touchcancel:1,reset:1,select:1,submit:1,toggle:1,blur:1,error:1,focus:1,load:1,resize:1,scroll:1};B.prototype.sync=function(){this.root._d=this.b=R(this.root.childNodes);this.length=this.b.length;return this};B.prototype.node=function(a){return this.b[a]};
B.prototype.item=function(a){return this.l?this.b[a]._m:this.store[a]};var T=0;B.prototype.init=function(a,b){this.config=b=b?Object.assign({},this.config||M,b):M;"string"===typeof a?a=O[a]:P(a);this.cache=b.cache;this.async=b.async;this.v=b.reuse;this.state=b.state||N;var d=b.store;d?(this.l=b.loose)?this.store=!1:(this.u="object"===typeof d,this.store=d&&(this.u?d:[])):this.l=this.store=!1;this.m!==a&&(this.m=a,this.id=++T,this.clone=this.o=this.f=null,this.g=!0,Q(this));return this};
function Q(a){if(a.root){var b=a.root._t;b!==a.id&&(a.root._t=a.id,b&&a.clear())}}function R(a){for(var b=a.length,d=Array(b),c=0,e;c<b;c++)e=a[c],e._i=c,d[c]=e;return d}B.prototype.create=function(a,b,d){var c=this.clone;c||(this.clone=c=this.parse(this.m));this.g||this.o(c._p,a,d,b);b=c.cloneNode(!0);this.l&&(b._m=a);return b};var U;l=B.prototype;
l.render=function(a,b,d,c){if(!this.root)return console.error(""),this;a?"function"===typeof a?(d=a,a=this.store):"function"===typeof b&&(d=b,b=null):a=this.store;if(!c){if(d){var e=this;U=K(function(){U=null;e.render(a,b,null,!0);"function"===typeof d&&d()});return this}if(this.async){var h=this;return new Promise(function(g){U=K(function(){U=null;h.render(a,b,null,!0);g()})})}}if(a){c=a.length;var k;this.v||this.clear();this.length||(this.b=Array(c),this.store&&!this.u&&(this.store=Array(c)));for(var f=
0;f<c;f++)f<this.length?this.update(this.b[f],a[f],b,f):this.add(a[f],b,this.root||(k=document.createDocumentFragment()));k&&this.root.appendChild(k);if(c<this.length)for(this.store&&this.store.splice(c),k=this.b.splice(c),this.length=c,c=k.length,f=0;f<c;f++)this.root.removeChild(k[f])}else this.b[0]||this.add();return this};l.add=function(a,b,d){var c=this.length;b=this.create(a,b,c);this.store?this.store[c]=a:this.l&&(b._m=a);b._i=c;(d||this.root).appendChild(b);this.b[c]=b;this.length++;return this};
l.clear=function(){this.root._d=this.b=[];this.root.textContent="";this.length=0;this.store&&(this.u?this.store.splice(0):this.store=[]);this.cache&&(this.root._h=null);return this};l.destroy=function(a){a&&this.unload();this.clone=this.o=this.f=this.m=this.root=this.b=null};l.cancel=function(){U&&(L(U),U=null)};l.append=function(a,b){for(var d=a.length,c=0;c<d;c++)this.add(a[c],b);return this};
l.remove=function(a){var b=a._i;this.b.splice(b,1);this.root.removeChild(a);this.length--;this.store&&this.store.splice(b,1);for(a=b;a<this.length;a++)this.b[a]._i=a;return this};l.replace=function(a,b,d,c){"undefined"===typeof c&&(c=a._i);d=this.create(b,d,c);this.store?this.store[c]=b:this.l&&(d._m=b);this.root.replaceChild(d,a);this.b[c]=d;return this};
l.update=function(a,b,d,c){this.g||("number"===typeof a?(c=a,a=this.b[a]):"undefined"===typeof c&&(c=a._i),this.store?b?this.store[c]=b:b=this.store[c]:this.l&&(b?a._m=b:b=a._m),this.o(a._p||V(this,a),b,c,d));return this};
function V(a,b){for(var d=a.f.length,c={},e=Array(d),h=0;h<d;h++){var k=a.f[h],f=h,g;if(!(g=c[k])){g=b;for(var q="",m=0;m<k.length;m++){var p=k[m];q+=p;c[q]?g=c[q]:(">"===p?g=g.firstElementChild:"+"===p?g=g.nextElementSibling:"|"===p&&(g=g.firstChild),c[q]=g)}}e[f]=g}return b._p=e}var W;
B.prototype.parse=function(a,b,d,c){var e=document.createElement(a.t||"div");b||(b=0,d="&",W="",this.f=[],e._p=c=[]);var h=a.s,k=a.i,f=a.x,g=a.h,q=a.a,m=a.c,p=a.j;a=this.f.length;var v=0,r="";p&&(r+=p+";");m&&("object"===typeof m?(r+=this.cache?"._l(self,"+m[0]+")":"self.className="+m[0]+";",this.f[a]=d,c[a]=e,this.g=!1,v++):e.className=m);if(q){m=Object.keys(q);for(p=0;p<m.length;p++){var u=m[p],z=q[u];if("object"===typeof z){r+=this.cache?"._a(self,'"+u+"',"+z[0]+")":"self.setAttribute('"+u+"',"+
z[0]+");";var y=!0;v++}else e.setAttribute(u,z);S[u]&&!A[u]&&(C&&"click"===u?F():n(u,t,!0),A[u]=1)}y&&(this.f[a]=d,c[a]=e,this.g=!1)}if(h)if("string"===typeof h)e.style.cssText=h;else if(h.length)r+=this.cache?"._c(self,"+h[0]+")":"self.style.cssText="+h[0]+";",this.f[a]=d,c[a]=e,v++;else{q=Object.keys(h);for(y=0;y<q.length;y++)if(m=q[y],p=h[m],"object"===typeof p){r+=this.cache?"._s(self,'"+m+"',"+p[0]+")":"self.style.setProperty('"+m+"',"+p[0]+");";var X=!0;v++}else e.style.setProperty(m,p);X&&
(this.f[a]=d,c[a]=e,this.g=!1)}k||(f?(d+="|",(h="object"===typeof f)&&(f=f[0]),g=document.createTextNode(f),h&&(r+=this.cache?"._t(self,"+f+")":"self.nodeValue="+f+";",c[a]&&a++,this.f[a]=d,c[a]=g,this.g=!1,v++),e.appendChild(g)):g&&("object"===typeof g?(g=g[0],r+=this.cache?"._h(self, "+g+")":"self.innerHTML="+g+";",this.f[a]=d,c[a]=e,this.g=!1,v++):e.innerHTML=g));v&&(1<v?(W+="self=p["+a+"];",W=this.cache?W+("this"+r+";"):W+r):W=this.cache?W+("this"+r.replace(/self/g,"p["+a+"]")+";"):W+("p["+a+
"]"+r.substring(4)));if(k)if(k.length)for(f=">",a=0;a<k.length;a++)a&&(f+="+"),e.appendChild(this.parse(k[a],b+a+1,d+f,c));else e.appendChild(this.parse(k,b+1,d+">",c));b||this.g||(this.o=Function("p","item","index","view",W?'"use strict";var self;'+W:""));return e};
B.prototype.load=function(a,b){if(O[a])this instanceof B&&this.init(O[a]),b&&b();else{var d=this,c=new XMLHttpRequest;c.overrideMimeType("application/json");c.open("GET",a,!1!==b);c.onload=function(){var e=this.responseText;if(e){try{var h=JSON.parse(e);P(a,h);d instanceof B&&d.init(h)}catch(f){var k=f}"function"===typeof b&&b(k)}};c.send()}};B.prototype.unload=function(a){a||(a=this.m);a&&(O[a.n]=null)};(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return B}):(b=a.modules)?b.mikado=B:"object"===typeof a.exports?a.module.exports=B:a.Mikado=B})();}).call(this);