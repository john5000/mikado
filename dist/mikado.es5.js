/**
 * Mikado.js v0.2.5 (ES5)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var g;Object.assign||(Object.assign=function(){var a=arguments,b=a.length,d=a[0];if(1<b)for(var c=1,e,f,h;c<b;c++){e=a[c];f=Object.keys(e);h=f.length;for(var m=0,k;m<h;m++)k=f[m],d[k]=e[k]}return d});Promise||(window.Promise=function(){function a(b){this.g=null;var d=this;b(function(c){d.g&&(d.g(c),d.g=null)})}a.prototype.then=function(b){this.g=b};return a}());function l(a,b,d,c){window[(a?"add":"remove")+"EventListener"](b,d,c||{passive:!0,capture:!0})}function u(a,b){b||(b=a.type);var d=a.target,c=d,e=d["_e_"+b];if(e)c=d["_r_"+b];else{for(;c;){if(c===x)return;if(e=c.getAttribute(b)){if(-1!==e.indexOf(":")){var f=e.split(":"),h=f[1];e=0;for(c=c.parentElement;c!==x;){if(c.hasAttribute(h)){e=f[0];break}c=c.parentElement}}break}c=c.parentElement}if(!e)return;d["_e_"+b]=e;d["_r_"+b]=c}if(b=A[e])a.preventDefault(),b(c,a,d);a.stopPropagation()}
var B={},A={},x=document.body;D.prototype.route=function(a,b){A[a]=b;return this};var E="ontouchstart"in window||navigator.msMaxTouchPoints,F,G,H;if(E){var I=function(a,b){b&&(b=b[0]);F=b?b.clientX:a.pageX;G=b?b.clientY:a.pageY},J=function(a){var b=F,d=G;I(a,a.changedTouches);50>Math.abs(F-b)&&50>Math.abs(G-d)&&u.call(this,a,"click")},K=function(a){I(a,a.touches)};H=function(a){l(a,"touchstart",K,!1);l(a,"touchend",J,!1)}}
D.prototype.listen=function(a,b){B[a]||(E&&"click"===a?H(1):l(1,a,u,b||!0),B[a]=1);return this};D.prototype.unlisten=function(a,b){B[a]&&(E&&"click"===a?H(0):l(0,a,u,b||!0),B[a]=0);return this};function L(a,b,d,c,e,f){d._i=e;c._i=f;a[f]=c;a[e]=d;b&&(a=b[e],b[e]=b[f],b[f]=a)}g=D.prototype;g.move=function(a,b){if("number"===typeof a){var d=a;a=this.b[a]}else d=a._i;d!==b&&(0>b&&(b=this.length-b),d<b?this.down(a,b-d):d>b&&this.up(a,d-b));return this};g.up=function(a,b){if("number"===typeof a){var d=a;a=this.b[a]}else d=a._i;if(d){var c=this.b[Math.max(d-(b||1),0)];this.root.insertBefore(a,c);L(this.b,this.store,a,c,d-(b||1),d)}return this};
g.down=function(a,b){if("number"===typeof a){var d=a;a=this.b[a]}else d=a._i;if(d<this.length-1){var c=this.b[Math.min(d+(b||1),this.length-1)];d===this.length-2?this.root.appendChild(a):this.root.insertBefore(a,c);L(this.b,this.store,a,c,d+(b||1),d)}return this};g.first=function(a){return this.up(a,this.length)};g.last=function(a){return this.down(a,this.length)};
g.swap=function(a,b,d){if(a!==b){if("number"===typeof a){var c=a;a=this.b[a]}else c=a._i;if("number"===typeof b){var e=b;b=this.b[b]}else e=b._i;if(a!==b)if(this.C){var f=a._m;this.update(a,b._m,d,e);this.update(b,f,d,c)}else this.root.insertBefore(a,b),this.root.insertBefore(b,c+1===e?a:this.b[c+1]),a._i=e,b._i=c,this.b[c]=b,this.b[e]=a;this.store&&(a=this.store[e],this.store[e]=this.store[c],this.store[c]=a)}return this};g=D.prototype;g.setText=function(a,b){a._x!==b&&(a.nodeValue=b,a._x=b);return this};g.getText=function(a){return"undefined"===typeof a._x?a._x=a.nodeValue:a._x};g.setHTML=function(a,b){a._h!==b&&(a.innerHTML=b,a._h=b);return this};g.getHTML=function(a){return"undefined"===typeof a._h?a._h=a.innerHTML:a._h};g.setClass=function(a,b){a._c!==b&&(a.className=b,a._c=b,a._cs=null);return this};g.getClass=function(a){return"undefined"===typeof a._c?a._c=a.className:a._c};
g.setStyle=function(a,b,d){var c=a._sc||(a._sc={});c[b]!==d&&(c[b]=d,(a._s||(a._s=a.style)).setProperty(b,d),a._cs=null);return this};g.getStyle=function(a,b){var d=a._sc||(a._sc={});return"undefined"===typeof d[b]?d[b]=(a._s||(a._s=a.style)).getPropertyValue(b):d[b]};g.setCSS=function(a,b){a._cs!==b&&((a._s||(a._s=a.style)).cssText=b,a._cs=b,a._sc=null);return this};g.getCSS=function(a){return"undefined"===typeof a._cs?a._cs=(a._s||(a._s=a.style)).cssText:a._cs};
g.setAttribute=function(a,b,d){var c="_a_"+b;a[c]!==d&&(a.setAttribute(b,d),a[c]=d);return this};g.getAttribute=function(a,b){var d="_a_"+b;return"undefined"===typeof a[d]?a[d]=a.getAttribute(b):a[d]};g.hasAttribute=function(a,b){var d="_a_"+b;"undefined"===typeof a[d]&&(a[d]=a.getAttribute(b));return!!a[d]};g.removeAttribute=function(a,b){var d="_a_"+b;a[d]&&delete a[d];a.removeAttribute(b);return this};var M=window.localStorage;D.prototype.export=function(){if(this.store)var a=this.store;else if(this.l){a=Array(this.length);for(var b=0;b<this.length;b++)a[b]=this.b[b]._m}a&&M.setItem(this.v,JSON.stringify(a));return this};D.prototype.import=function(){var a=M.getItem(this.v);a&&(a=JSON.parse(a),this.B?this.store.push.apply(this.store,a):this.store=a);return this};var N=window,O=N.requestAnimationFrame,P=N.cancelAnimationFrame,Q={store:!1,loose:!0,cache:!0,async:!1,reuse:!0},R={},S={};function D(a,b,d){a.nodeType||(d=b,b=a,a=null);b||(d=a);a?this.mount(a):(this.root=this.b=null,this.length=0);this.init(b,d)}var T=D.register=function(a,b){b||(b=a,a=b.n);S[a]=b;return D},U=D.new=function(a,b,d){return new D(a,b,d)};D.prototype.mount=function(a){this.root!==a&&(this.root=a,V(this),this.b=a._d||(a._d=W(a.children)),this.length=this.b.length);return this};
var aa={tap:1,change:1,click:1,dblclick:1,input:1,keydown:1,keypress:1,keyup:1,mousedown:1,mouseenter:1,mouseleave:1,mousemove:1,mouseout:1,mouseover:1,mouseup:1,mousewheel:1,touchstart:1,touchmove:1,touchend:1,reset:1,select:1,submit:1,toggle:1,blur:1,error:1,focus:1,load:1,resize:1,scroll:1};g=D.prototype;g.sync=function(){this.root._d=this.b=W(this.root.children);this.length=this.b.length;return this};g.index=function(a){return a._i};g.node=function(a){return this.b[a]};
g.item=function(a){return this.l?this.b[a]._m:this.store[a]};g.find=function(a){for(var b=0;b<this.length;b++)if(this.item(b)===a)return this.b[b]};g.search=function(a){a=Object.values(a).join("^");for(var b=0;b<this.length;b++)if(Object.values(this.item(b)).join("^")===a)return this.b[b]};g.where=function(a){for(var b=Object.keys(a),d=b.length,c=[],e=0,f,h;e<this.length;e++){f=this.item(e);h=!0;for(var m=0,k;m<d;m++)if(k=b[m],f[k]!==a[k]){h=!1;break}h&&(c[c.length]=f)}return c};
g.init=function(a,b){this.D=b=b?Object.assign({},this.D||Q,b):Q;"string"===typeof a?a=S[a]:T(a);this.cache=b.cache;this.async=b.async;this.o=0;this.C=b.reuse;this.state=b.state||R;var d=b.store;d?(this.l=b.loose)?this.store=!1:(this.B="object"===typeof d,this.store=d&&(this.B?d:[])):this.l=this.store=!1;this.v!==a&&(this.v=a.n,this.A=this.g=null,this.u=!0,this.w=null,this.F=X(this,a),V(this));return this};D.once=function(a,b,d,c,e){U(a,b).render(d,c,e).destroy(!0);return D};
function V(a){if(a.root){var b=a.root._t;b!==a.v&&(a.root._t=a.v,b&&a.clear())}}function W(a){for(var b=a.length,d=Array(b),c=0,e;c<b;c++)e=a[c],e._i=c,d[c]=e;return d}g=D.prototype;g.create=function(a,b,d){var c=this.F;this.u||this.A(c._p,c.$,a,d,b);return c.cloneNode(!0)};
g.refresh=function(a,b){if("number"===typeof a){var d=this.b[a];return this.update(d,this.store?this.store[a]:d._m,b,a)}d=(a=this.store)?a.length:this.l?this.length:0;this.l&&(this.store=null);for(var c=0;c<d;c++)this.update(this.b[c],a?a[c]:null,b,c);return this};
g.render=function(a,b,d,c){"function"===typeof b&&(d=b,b=null);if(!c){this.o&&this.cancel();if(d){var e=this;this.o=O(function(){e.o=0;e.render(a,b,null,!0);"function"===typeof d&&d()});return this}if(this.async){var f=this;return new Promise(function(k){f.o=O(function(){f.o=0;f.render(a,b,null,!0);k()})})}}if(this.u)this.b[0]||this.add();else if(a||this.l){a&&"undefined"===typeof a.length&&(a=[a]);c=a?a.length:this.length;if(!c)return this.clear();this.C||this.clear(c);for(var h=0;h<c;h++)h<this.length?
this.update(this.b[h],a[h],b,h):this.add(a[h],b,this.root);if(c<this.length){this.store&&this.store.splice(c);h=this.b.splice(c);this.length=c;c=h.length;for(var m=0;m<c;m++)this.root.removeChild(h[m])}}return this};g.add=function(a,b,d){var c=this.length;b=this.create(a,b,c);this.store?this.store[c]=a:this.l&&(b._m=a);b._i=c;(d||this.root).appendChild(b);this.b[c]=b;this.length++;return this};
g.clear=function(a){this.root._d=this.b=a?Array(a):[];this.root.textContent="";this.length=0;this.store&&(this.B?this.store.splice(0):this.store=a?Array(a):[]);return this};g.destroy=function(a){a&&this.unload();this.F=this.A=this.g=this.root=this.b=null};g.cancel=function(){this.o&&(P(this.o),this.o=null)};g.append=function(a,b){for(var d=a.length,c=0;c<d;c++)this.add(a[c],b);return this};
g.remove=function(a){if("number"===typeof a){var b=a;a=this.b[b]}else b=a._i;this.b.splice(b,1);this.root.removeChild(a);this.length--;this.store&&this.store.splice(b,1);for(a=b;a<this.length;a++)this.b[a]._i=a;return this};g.replace=function(a,b,d,c){"undefined"===typeof c&&(c=a._i);d=this.create(b,d,c);this.store?this.store[c]=b:this.l&&(d._m=b);d._i=c;this.root.replaceChild(d,a);this.b[c]=d;return this};
g.update=function(a,b,d,c){this.store?this.store[c]=b:this.l&&(a._m=b);this.A(a._p||ba(this,a),a.$,b,c,d);return this};function ba(a,b){for(var d=a.g.length,c={},e=Array(d),f=0;f<d;f++){var h=a.g[f],m=f,k;if(!(k=c[h])){k=b;for(var q="",w=0;w<h.length;w++){var p=h[w];q+=p;c[q]?k=c[q]:(">"===p?k=k.firstElementChild:"+"===p?k=k.nextElementSibling:"|"===p&&(k=k.firstChild),c[q]=k)}}e[m]=k}b._p=e;b.$={};return e}var Y;
function X(a,b,d,c,e){var f=document.createElement(b.t||"div");d||(d=0,c="&",Y="",a.g=[],f._p=e=[],f.$={});var h=b.s,m=b.i,k=b.x,q=b.h,w=b.a,p=b.c,v=b.j,n=a.g.length,t=0,r="";v&&(r+=";"+v,-1<r.indexOf("self")&&(a.g[n]=c,e[n]=f,t=2));p&&("object"===typeof p?(r+=a.cache?";v="+p[0]+";if(self._c!==v){self._c=v;self.className=v}":";self.className="+p[0],a.g[n]=c,e[n]=f,t++):f.className=p);if(w){p=Object.keys(w);for(v=0;v<p.length;v++){var y=p[v],C=w[y];if("object"===typeof C){r+=a.cache?";v="+C[0]+";if(self['_a_"+
y+"']!==v){self['_a_"+y+"']=v;self.setAttribute('"+y+"',v)}":";self.setAttribute('"+y+"',"+C[0]+")";var z=!0;t++}else f.setAttribute(y,C);aa[y]&&a.listen(y)}z&&(a.g[n]=c,e[n]=f)}if(h)if("string"===typeof h)f.style.cssText=h;else if(h.length)r+=a.cache?";v="+h[0]+";if(self._cs!==v){self._cs=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+h[0],a.g[n]=c,e[n]=f,t++;else{w=Object.keys(h);for(z=0;z<w.length;z++)if(p=w[z],v=h[p],"object"===typeof v){r+=a.cache?";v="+v[0]+";var t=self['_sc']||(self['_sc']={});if(t['"+
p+"']!==v){t['"+p+"']=v;(self._s||(self._s=self.style)).setProperty('"+p+"',v)}":";self.style.setProperty('"+p+"',"+v[0]+")";var ca=!0;t++}else f.style.setProperty(p,v);ca&&(a.g[n]=c,e[n]=f)}m||(b["@"]?(a.w||(a.w=[]),k=Y+=";this.include["+a.w.length+"].mount(p["+n+"]).render("+b.r+(b.m?".slice("+(0<b.m?"0,":"")+b.m+")":"")+",index,view)",Y="",a.w.push(new D(f,"string"===typeof b["@"]?S[b["@"]]:b["@"],Object.assign(a.D,{store:!1,loose:!1,async:!1}))),Y=k,a.g[n]=c,e[n]=f,a.u=!1):b["+"]?m=S[b["+"]]:
k?(c+="|",(h="object"===typeof k)&&(k=k[0]),q=document.createTextNode(k),h&&(t&&(Z(t,r,n,a.cache),r="",n++),r+=a.cache?";v="+k+";if(self._x!==v){self._x=v;self.nodeValue=v}":";self.nodeValue="+k,a.g[n]=c,e[n]=q,t++),f.appendChild(q)):q&&("object"===typeof q?(q=q[0],r+=a.cache?";v="+q+";if(self._h!==v){self._h=v;self.innerHTML=v}":";self.innerHTML="+q,a.g[n]=c,e[n]=f,t++):f.innerHTML=q));b.f&&(Y+=";if("+b.f+"){"+(1<t?"self":"p["+n+"]")+".hidden=false",t||(a.g[n]=c,e[n]=f,a.u=!1));t&&(a.u=!1,Z(t,r,
n,a.cache));if(m)if(m.length)for(k=">",h=0;h<m.length;h++){h&&(k+="+");q=m[h];if(r=q["+"])q=S[r];f.appendChild(X(a,q,d+h+1,c+k,e))}else{if(r=m["+"])m=S[r];f.appendChild(X(a,m,d+1,c+">",e))}b.f&&(Y+="}else "+(1<t?"self":"p["+n+"]")+".hidden=true");d||a.u||!Y||(a.A=Function("p","s","item","index","view",'"use strict";var self,v'+Y));return f}function Z(a,b,d,c){Y=c||1<a?Y+(";self=p["+d+"]"+b):Y+b.replace(/self/g,"p["+d+"]")}
D.prototype.load=function(a,b){if(S[a])this instanceof D&&this.init(S[a]),b&&b();else{var d=this,c=new XMLHttpRequest;c.overrideMimeType("application/json");c.open("GET",a,!1!==b);c.onload=function(){var e=this.responseText;if(e){try{var f=JSON.parse(e);T(f);d instanceof D&&d.init(f)}catch(m){var h=m}"function"===typeof b&&b(h)}};c.send()}};D.load=D.prototype.load;D.prototype.unload=function(a){a||(a=this.v);a&&(S[a]=null)};D.unload=D.prototype.unload;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return D}):(b=a.modules)?b.mikado=D:"object"===typeof a.exports?a.module.exports=D:a.Mikado=D})();}).call(this);
