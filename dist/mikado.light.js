/**!
 * Mikado.js v0.4.1 (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var k;var m={store:!0,loose:!0,cache:!0,async:!1,reuse:!0,prefetch:!0},x={},z={},A={};function C(a,b,d){a.nodeType||(d=b,b=a,a=null);b||(d=a);a?this.mount(a):(this.b=this.f=null,this.length=0);this.init(b,d)}var D=C.register=function(a,b){b||(b=a,a=b.n);z[a]=b;return C},E=C.new=function(a,b,d){return new C(a,b,d)};k=C.prototype;k.mount=function(a){this.b!==a&&(this.b=a,F(this),this.f=a._d||(a._d=G(a.children)),this.length=this.f.length);return this};
k.sync=function(){this.b._d=this.f=G(this.b.children);this.length=this.f.length;return this};k.index=function(a){return a._i};k.node=function(a){return this.f[a]};k.init=function(a,b){this.w=b=b?Object.assign({},this.w||m,b):m;"string"===typeof a?a=z[a]:D(a);this.cache=b.cache;this.A=b.reuse;this.state=b.state||x;this.o!==a&&(this.o=a.n,this.m=this.g=null,this.l=a.d,this.v=b.prefetch&&H(this,a),F(this));return this};C.once=function(a,b,d,c,h){E(a,b).render(d,c,h).destroy(!0);return C};
function F(a){if(a.b){var b=a.b._t;b!==a.o&&(a.b._t=a.o,b&&a.clear())}}function G(a){for(var b=a.length,d=Array(b),c=0,h;c<b;c++)h=a[c],h._i=c,d[c]=h;return d}k=C.prototype;k.create=function(a,b,d){var c=this.v;c||(this.v=c=H(this,z[this.o]));this.l||this.m(c._p,c.$,a,d,b);return c.cloneNode(!0)};
k.render=function(a,b){if(this.l)this.f[0]||this.add();else{if(a)if("undefined"===typeof a.length){a=[a];var d=1}else d=a.length;if(!d)return this.clear();this.A||this.clear(d);for(var c=0;c<d;c++)c<this.length?this.update(this.f[c],a?a[c]:null,b,c):this.add(a?a[c]:this.store[c],b,this.b);if(d<this.length)for(a=this.f.splice(d),this.length=d,d=a.length,b=0;b<d;b++)this.b.removeChild(a[b])}return this};
k.add=function(a,b,d){var c=this.length;a=this.create(a,b,c);a._i=c;(d||this.b).appendChild(a);this.f[c]=a;this.length++;return this};k.clear=function(a){this.b._d=this.f=a?Array(a):[];this.b.textContent="";this.length=0;return this};k.destroy=function(a){a&&this.unload();this.v=this.m=this.g=this.o=this.b=this.f=A[this.o+(this.cache?"$":"")]=null;this.length=0};k.append=function(a,b){for(var d=a.length,c=0;c<d;c++)this.add(a[c],b);return this};
k.remove=function(a){if("number"===typeof a){var b=a;a=this.f[b]}else b=a._i;this.f.splice(b,1);this.b.removeChild(a);this.length--;for(a=b;a<this.length;a++)this.f[a]._i=a;return this};k.replace=function(a,b,d,c){"undefined"===typeof c&&(c=a._i);b=this.create(b,d,c);b._i=c;this.b.replaceChild(b,a);this.f[c]=b;return this};k.update=function(a,b,d,c){this.m(a._p||I(this,a),a.$,b,c,d);return this};
function I(a,b){for(var d=a.g.length,c={},h=Array(d),f=0;f<d;f++){var n=a.g[f],v=f,g;if(!(g=c[n])){g=b;for(var p="",t=0;t<n.length;t++){var l=n[t];p+=l;c[p]?g=c[p]:(">"===l?g=g.firstElementChild:"+"===l?g=g.nextElementSibling:"|"===l&&(g=g.firstChild),c[p]=g)}}h[v]=g}b._p=h;b.$={};return h}var J;
function H(a,b,d,c,h){var f=A[b.n+(a.cache?"$":"")];if(f)return a.m=f.m,a.l=f.l,a.u=f.u,a.proxy=f.proxy,a.g=f.g,f.node;f=document.createElement(b.t||"div");d||(d=0,c="&",J="",a.g=[],f._p=h=[],f.$={});var n=b.s,v=b.i,g=b.x,p=b.h,t=b.a,l=b.c,u=b.j,e=a.g.length,q=0,r="";u&&(r+=";"+u,-1<r.indexOf("self")&&(a.g[e]=c,h[e]=f,q=2));l&&("object"===typeof l?(l=l[0],r+=a.cache?";v="+l+";if(s._c"+e+"!==v){s._c"+e+"=v;self.className=v}":";self.className="+l,a.g[e]=c,h[e]=f,q++):f.className=l);if(t){var y;t&&(y=
Object.keys(t));for(l=0;l<y.length;l++){u=y[l];var w=void 0;!t||(w=t[u]);if("object"===typeof w){w=w[0];r+=a.cache?";v="+w+";if(s['_a_"+u+e+"']!==v){s['_a_"+u+e+"']=v;self.setAttribute('"+u+"',v)}":";self.setAttribute('"+u+"',"+w+")";var B=!0;q++}else f.setAttribute(u,w)}B&&(a.g[e]=c,h[e]=f)}n&&("string"===typeof n?f.style.cssText=n:n.length&&(n=n[0],r+=a.cache?";v="+n+";if(s._cs"+e+"!==v){s._cs"+e+"=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+n,a.g[e]=c,h[e]=f,q++));v||(g?
(c+="|",(y="object"===typeof g)&&(g=g[0]),B=document.createTextNode(g),y&&(q&&(K(q,r,e,a.cache),r="",e++),r+=a.cache?";v="+g+";if(s._x"+e+"!==v){s._x"+e+"=v;self.nodeValue=v}":";self.nodeValue="+g,a.g[e]=c,h[e]=B,q++),f.appendChild(B)):p&&("object"===typeof p?(p=p[0],r+=a.cache?";v="+p+";if(s._h"+e+"!==v){s._h"+e+"=v;self.innerHTML=v}":";self.innerHTML="+p,a.g[e]=c,h[e]=f,q++):f.innerHTML=p));q&&(a.l=!1,K(q,r,e,a.cache));if(v)if(v.length)for(g=">",e=0;e<v.length;e++)e&&(g+="+"),q=v[e],f.appendChild(H(a,
q,d+e+1,c+g,h));else f.appendChild(H(a,v,d+1,c+">",h));d||(!a.l&&J&&(a.m=Function("p","s","data","index","view",'"use strict";var self,v'+J)),A[b.n+(a.cache?"$":"")]={m:a.m,l:a.l,u:a.u,proxy:a.proxy,g:a.g,node:f});return f}function K(a,b,d,c){J=c||1<a?J+(";self=p["+d+"]"+b):J+b.replace(/self/g,"p["+d+"]")}C.prototype.unload=function(a){a||(a=this.o);a&&(z[a]=null)};C.unload=C.prototype.unload;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return C}):(b=a.modules)?b.mikado=C:"object"===typeof a.exports?a.module.exports=C:a.Mikado=C})();}).call(this);
