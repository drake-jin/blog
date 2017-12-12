var Zepto=function(){function t(t){return null==t?String(t):$[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return t.length>0?x.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in P?P[t]:P[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,e){return"number"!=typeof e||A[c(t)]?e:e+"px"}function f(t){return"children"in t?j.call(t.children):x.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function h(t,e,n){for(w in e)n&&(o(e[w])||Q(e[w]))?(o(e[w])&&!o(t[w])&&(t[w]={}),Q(e[w])&&!Q(t[w])&&(t[w]=[]),h(t[w],e[w],n)):e[w]!==b&&(t[w]=e[w])}function p(t,e){return null==e?x(t):x(t).filter(e)}function d(t,n,r,i){return e(n)?n.call(t,r,i):n}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",r=n&&n.baseVal!==b;return e===b?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function g(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?x.parseJSON(t):t):t}catch(e){return t}}function y(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)y(t.childNodes[n],e)}var b,w,x,E,S,C,T=[],j=T.slice,O=T.filter,N=window.document,L={},P={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},k=/^\s*<(\w+|!)[^>]*>/,R=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,I=/([A-Z])/g,H=["val","css","html","text","data","width","height","offset"],F=N.createElement("table"),q=N.createElement("tr"),z={tr:N.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:q,th:q,"*":N.createElement("div")},Z=/complete|loaded|interactive/,M=/^[\w-]*$/,$={},J=$.toString,U={},B=N.createElement("div"),V={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return U.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=B).appendChild(t),r=~U.qsa(i,e).indexOf(t),o&&B.removeChild(t),r},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},U.fragment=function(t,e,n){var r,i,s;return R.test(t)&&(r=x(N.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(_,"<$1></$2>")),e===b&&(e=k.test(t)&&RegExp.$1),e in z||(e="*"),s=z[e],s.innerHTML=""+t,r=x.each(j.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=x(r),x.each(n,function(t,e){H.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},U.Z=function(t,e){return t=t||[],t.__proto__=x.fn,t.selector=e||"",t},U.isZ=function(t){return t instanceof U.Z},U.init=function(t,n){var r;if(!t)return U.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&k.test(t))r=U.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return x(n).find(t);r=U.qsa(N,t)}else{if(e(t))return x(N).ready(t);if(U.isZ(t))return t;if(Q(t))r=function(t){return O.call(t,function(t){return null!=t})}(t);else if(i(t))r=[t],t=null;else if(k.test(t))r=U.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return x(n).find(t);r=U.qsa(N,t)}}return U.Z(r,t)},x=function(t,e){return U.init(t,e)},x.extend=function(t){var e,n=j.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){h(t,n,e)}),t},U.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],s=i||o?e.slice(1):e,a=M.test(s);return r(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:j.call(a&&!i?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},x.contains=N.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},x.type=t,x.isFunction=e,x.isWindow=n,x.isArray=Q,x.isPlainObject=o,x.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},x.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},x.camelCase=S,x.trim=function(t){return null==t?"":String.prototype.trim.call(t)},x.uuid=0,x.support={},x.expr={},x.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&o.push(n);else for(i in t)null!=(n=e(t[i],i))&&o.push(n);return a(o)},x.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},x.grep=function(t,e){return O.call(t,e)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){$["[object "+e+"]"]=e.toLowerCase()}),x.fn={forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,indexOf:T.indexOf,concat:T.concat,map:function(t){return x(x.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return x(j.apply(this,arguments))},ready:function(t){return Z.test(N.readyState)&&N.body?t(x):N.addEventListener("DOMContentLoaded",function(){t(x)},!1),this},get:function(t){return t===b?j.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return e(t)?this.not(this.not(t)):x(O.call(this,function(e){return U.matches(e,t)}))},add:function(t,e){return x(C(this.concat(x(t,e))))},is:function(t){return this.length>0&&U.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?j.call(t):x(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return x(n)},has:function(t){return this.filter(function(){return i(t)?x.contains(this,t):x(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:x(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:x(t)},find:function(t){var e=this;return t?"object"==typeof t?x(t).filter(function(){var t=this;return T.some.call(e,function(e){return x.contains(e,t)})}):1==this.length?x(U.qsa(this[0],t)):this.map(function(){return U.qsa(this,t)}):x()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=x(t));n&&!(i?i.indexOf(n)>=0:U.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return x(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=x.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return p(e,t)},parent:function(t){return p(C(this.pluck("parentNode")),t)},children:function(t){return p(this.map(function(){return f(this)}),t)},contents:function(){return this.map(function(){return j.call(this.childNodes)})},siblings:function(t){return p(this.map(function(t,e){return O.call(f(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return x.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=function(t){var e,n;return L[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=x(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){x(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){x(this[0]).before(t=x(t));for(var e;(e=t.children()).length;)t=e.first();x(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=x(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=x(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return x(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;x(this).empty().append(d(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=d(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(w in t)m(this,w,t[w]);else m(this,t,d(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){m(this,t)},this)})},prop:function(t,e){return t=V[t]||t,1 in arguments?this.each(function(n){this[t]=d(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(I,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?g(r):b},val:function(t){return 0 in arguments?this.each(function(e){this.value=d(this,t,e,this.value)}):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=x(this),r=d(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[S(e)]||r.getPropertyValue(e);if(Q(e)){var o={};return x.each(e,function(t,e){o[e]=i.style[S(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=c(e)+":"+l(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(w in e)e[w]||0===e[w]?s+=c(w)+":"+l(w,e[w])+";":this.each(function(){this.style.removeProperty(c(w))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(x(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&T.some.call(this,function(t){return this.test(v(t))},u(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){E=[];var n=v(this);d(this,t,e,n).split(/\s+/g).forEach(function(t){x(this).hasClass(t)||E.push(t)},this),E.length&&v(this,n+(n?" ":"")+E.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===b)return v(this,"");E=v(this),d(this,t,e,E).split(/\s+/g).forEach(function(t){E=E.replace(u(t)," ")}),v(this,E.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=x(this);d(this,t,n,v(this)).split(/\s+/g).forEach(function(t){(e===b?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(x(t).css("margin-top"))||0,n.left-=parseFloat(x(t).css("margin-left"))||0,r.top+=parseFloat(x(e[0]).css("border-top-width"))||0,r.left+=parseFloat(x(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!D.test(t.nodeName)&&"static"==x(t).css("position");)t=t.offsetParent;return t})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});x.fn[t]=function(i){var o,s=this[0];return i===b?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){(s=x(this)).css(t,d(this,i,e,s[t]()))})}}),["after","prepend","before","append"].forEach(function(e,n){var r=n%2;x.fn[e]=function(){var e,i,o=x.map(arguments,function(n){return"object"==(e=t(n))||"array"==e||null==n?n:U.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=x.contains(N.documentElement,i);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return x(t).remove();i.insertBefore(t,e),a&&y(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},x.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return x(t)[e](this),this}}),U.Z.prototype=x.fn,U.uniq=C,U.deserializeValue=g,x.zepto=U,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=f++)}function n(t,n,i,o){if((n=r(n)).ns)var s=function(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}(n.ns);return(m[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||i&&e(t.fn)!==e(i)||o&&t.sel!=o)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t,e){return t.del&&!g&&t.e in y||!!e}function o(t){return b[t]||g&&y[t]||t}function s(n,s,a,u,f,h,p){var d=e(n),v=m[d]||(m[d]=[]);s.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var s=r(e);s.fn=a,s.sel=f,s.e in b&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=h;var d=h||a;s.proxy=function(t){if(!(t=c(t)).isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==l?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},s.i=v.length,v.push(s),"addEventListener"in n&&n.addEventListener(o(s.e),s.proxy,i(s,p))})}function a(t,r,s,a,c){var u=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,s,a).forEach(function(e){delete m[u][e.i],"removeEventListener"in t&&t.removeEventListener(o(e.e),e.proxy,i(e,c))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(S,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=x}),(n.defaultPrevented!==l?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function u(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===l||(n[e]=t[e]);return c(n,t)}var l,f=1,h=Array.prototype.slice,p=t.isFunction,d=function(t){return"string"==typeof t},m={},v={},g="onfocusin"in window,y={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:a},t.proxy=function(n,r){var i=2 in arguments&&h.call(arguments,2);if(p(n)){var o=function(){return n.apply(r,i?i.concat(h.call(arguments)):arguments)};return o._zid=e(n),o}if(d(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},x=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var c,f,m=this;return e&&!d(e)?(t.each(e,function(t,e){m.on(t,n,r,e,o)}),m):(d(n)||p(i)||!1===i||(i=r,r=n,n=l),(p(r)||!1===r)&&(i=r,r=l),!1===i&&(i=x),m.each(function(l,p){o&&(c=function(t){return a(p,t.type,i),i.apply(this,arguments)}),n&&(f=function(e){var r,o=t(e.target).closest(n,p).get(0);return o&&o!==p?(r=t.extend(u(e),{currentTarget:o,liveFired:p}),(c||i).apply(o,[r].concat(h.call(arguments,1)))):void 0}),s(p,e,i,r,n,f||c)}))},t.fn.off=function(e,n,r){var i=this;return e&&!d(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(d(n)||p(r)||!1===r||(r=n,n=l),!1===r&&(r=x),i.each(function(){a(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=d(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in y&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,a){(i=u(d(e)?t.Event(e):e))._args=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){d(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||g,r,i):void 0}function r(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return!1!==e.beforeSend.call(r,t,e)&&!1!==n(e,r,"ajaxBeforeSend",[t,e])&&void n(e,r,"ajaxSend",[t,e])}function s(t,e,r,i){var o=r.context,s="success";r.success.call(o,t,s,e),i&&i.resolveWith(o,[t,s,e]),n(r,o,"ajaxSuccess",[e,r,t]),c(s,e,r)}function a(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),c(e,r,i)}function c(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==x?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function p(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(c.name,c.value):"array"==o||!r&&"object"==o?p(e,c,r,n):e.add(n,c)})}var d,m,v=0,g=window.document,y=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,x="application/json",E="text/html",S=/^\s*$/,C=g.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++v,l=g.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?s(r[0],p,e,n):a(null,c||"error",p,e,n),window[u]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),!1===o(p,e)?(h("abort"),p):(window[u]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),g.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:x,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(d in t.ajaxSettings)void 0===i[d]&&(i[d]=t.ajaxSettings[d]);r(i),i.crossDomain||(n=g.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),function(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}(i);var h=i.dataType,p=/\?.+=\?/.test(i.url);if(p&&(h="jsonp"),!1!==i.cache&&(e&&!0===e.cache||"script"!=h&&"jsonp"!=h)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==h)return p||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":!1===i.jsonp?"":"callback=?")),t.ajaxJSONP(i,c);var v,y=i.accepts[h],b={},w=function(t,e){b[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,E=i.xhr(),T=E.setRequestHeader;if(c&&c.promise(E),i.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",y||"*/*"),(y=i.mimeType||y)&&(y.indexOf(",")>-1&&(y=y.split(",",2)[0]),E.overrideMimeType&&E.overrideMimeType(y)),(i.contentType||!1!==i.contentType&&i.data&&"GET"!=i.type.toUpperCase())&&w("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(m in i.headers)w(m,i.headers[m]);if(E.setRequestHeader=w,E.onreadystatechange=function(){if(4==E.readyState){E.onreadystatechange=u,clearTimeout(v);var e,n=!1;if(E.status>=200&&E.status<300||304==E.status||0==E.status&&"file:"==x){h=h||l(i.mimeType||E.getResponseHeader("content-type")),e=E.responseText;try{"script"==h?(0,eval)(e):"xml"==h?e=E.responseXML:"json"==h&&(e=S.test(e)?null:t.parseJSON(e))}catch(t){n=t}n?a(n,"parsererror",E,i,c):s(e,E,i,c)}else a(E.statusText||null,E.status?"error":"abort",E,i,c)}},!1===o(E,i))return E.abort(),a(null,"abort",E,i,c),E;if(i.xhrFields)for(m in i.xhrFields)E[m]=i.xhrFields[m];var j=!("async"in i)||i.async;E.open(i.type,i.url,j,i.username,i.password);for(m in b)T.apply(E,b[m]);return i.timeout>0&&(v=setTimeout(function(){E.onreadystatechange=u,E.abort(),a(null,"timeout",E,i,c)},i.timeout)),E.send(i.data?i.data:null),E},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,s=e.split(/\s/),a=h(e,n,r),c=a.success;return s.length>1&&(a.url=s[0],i=s[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(y,"")).find(i):e),c&&c.apply(o,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},p(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,(e=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(Zepto),function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){(r(t,e)?o:i)(t,e)}var r,i,o;"classList"in document.documentElement?(r=function(t,e){return t.classList.contains(e)},i=function(t,e){t.classList.add(e)},o=function(t,e){t.classList.remove(e)}):(r=function(t,n){return e(n).test(t.className)},i=function(t,e){r(t,e)||(t.className=t.className+" "+e)},o=function(t,n){t.className=t.className.replace(e(n)," ")});var s={hasClass:r,addClass:i,removeClass:o,toggleClass:n,has:r,add:i,remove:o,toggle:n};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(){"use strict";var t=document.querySelector(".post-content"),e=document.querySelector(".progress-bar");if(t&&e){var n=0,r=t.scrollHeight,i=e.querySelector(".completed"),o=e.querySelector(".remaining"),s=e.querySelector(".time-completed"),a=e.querySelector(".time-remaining");document.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop;if(e.style.bottom=t>n?"0%":"-100%",t<=r){var c=t/r,u=(100*c).toFixed(2),l=100-parseFloat(u);i.style.width=u.toString()+"%",o.style.width=l.toString()+"%";var f=60*parseInt(e.getAttribute("data-minutes")),h=parseInt(c*f),p=parseInt(h/60),d=parseInt(60*(h/60-p)),m=f-h,v=parseInt(m/60),g=parseInt(60*(m/60-v));p=p<10?"0"+p:p,d=d<10?"0"+d:d,v=v<10?"0"+v:v,g=g<10?"0"+g:g,s.innerText=p+":"+d,a.innerText=v+":"+g}else{i.style.width="100%",o.style.width="0%";var y=parseInt(e.getAttribute("data-minutes"));y=y<10?"0"+y:y,s.innerText="00:00",a.innerText=y+":00"}n=t})}}(),function(t){"use strict";function e(){var e=s.clientHeight,n=t.innerHeight;return e<n?n:e}function n(){return t.pageYOffset||s.scrollTop}function r(t,r){var i=t.offsetHeight,o=n(),s=o+e(),a=function(t){var e=0,n=0;do{isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft)}while(t=t.offsetParent);return{top:e,left:n}}(t).top;return a+i*(r=r||0)<=s&&a+i-i*r>=o}function i(t){if(t){var e=new Image;e.onload=function(){t.src=e.src},e.src=t.getAttribute("data-url")}}function o(t,e){this.el=t,this.options=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(this.defaults,e),this._init()}var s=t.document.documentElement;o.prototype={defaults:{minDuration:0,maxDuration:0,viewportFactor:0},_init:function(){this.items=Array.prototype.slice.call(document.querySelectorAll("#"+this.el.id+" > article")),this.itemsCount=this.items.length,this.itemsRenderedCount=0,this.didScroll=!1;var e=this;e.items.forEach(function(t,n){r(t)&&(e._checkTotalRendered(),classie.add(t,"shown"),i(t.querySelector(".preload")))}),t.addEventListener("scroll",function(){e._onScrollFn()},!1),t.addEventListener("resize",function(){e._resizeHandler()},!1)},_onScrollFn:function(){var t=this;this.didScroll||(this.didScroll=!0,setTimeout(function(){t._scrollPage()},60))},_scrollPage:function(){var t=this;this.items.forEach(function(o,s){classie.has(o,"shown")||classie.has(o,"animate")||!r(o,t.options.viewportFactor)||setTimeout(function(){var r=n()+e()/2;if(t.el.style.WebkitPerspectiveOrigin="50% "+r+"px",t.el.style.MozPerspectiveOrigin="50% "+r+"px",t.el.style.perspectiveOrigin="50% "+r+"px",t._checkTotalRendered(),t.options.minDuration&&t.options.maxDuration){var s=Math.random()*(t.options.maxDuration-t.options.minDuration)+t.options.minDuration+"s";o.style.WebkitAnimationDuration=s,o.style.MozAnimationDuration=s,o.style.animationDuration=s}classie.add(o,"animate"),i(o.querySelector(".preload"))},25)}),this.didScroll=!1},_resizeHandler:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t._scrollPage(),t.resizeTimeout=null},1e3)},_checkTotalRendered:function(){++this.itemsRenderedCount,this.itemsRenderedCount===this.itemsCount&&t.removeEventListener("scroll",this._onScrollFn)}},t.AnimOnScroll=o}(window),function(t){t.fn.simpleJekyllSearch=function(e){function n(){a.keyup(function(e){t(this).val().length?function(e){r(),c.append(t(i.searchResultsTitle)),e.length?t.each(e,function(e,n){if(e<i.limit){for(var r=i.template,e=0;e<o.length;e++){var s=new RegExp("{"+o[e]+"}","g");r=r.replace(s,n[o[e]])}c.append(t(r))}}):c.append(i.noResults)}(function(e){var n=[];return t.each(s,function(t,r){for(t=0;t<o.length;t++)void 0!==r[o[t]]&&-1!==r[o[t]].toLowerCase().indexOf(e.toLowerCase())&&(n.push(r),t=o.length)}),n}(t(this).val())):r()})}function r(){c.children().remove()}var i=t.extend({jsonFile:"/search.json",jsonFormat:"title,tags,categories,url,date",template:'<li><article><a href="{url}"><span class="entry-category">{categories}</span> {title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',searchResults:".search-results",limit:"10",noResults:"<p>Puuuts! Não encontramos nada :(</p>"},e),o=i.jsonFormat.split(","),s=[],a=this,c=t(i.searchResults);i.jsonFile.length&&c.length&&t.ajax({type:"GET",url:i.jsonFile,dataType:"json",success:function(t,e,r){s=t,n()},error:function(t,e,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(t),console.log(e),console.log(n)}})}}(Zepto),function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";var e,n,r,i,o={},s="querySelector"in document&&"addEventListener"in t,a={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},c=function(){var t={},e=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e&&"[object Object]"===Object.prototype.toString.call(n[r])?t[r]=c(!0,t[r],n[r]):t[r]=n[r])};n<r;n++){i(arguments[n])}return t},u=function(t){return null===t?0:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)}(t)+t.offsetTop};o.animateScroll=function(e,n,o){var s=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}}(e?e.getAttribute("data-options"):null),l=c(l||a,o||{},s),f="#"===(n="#"+function(t){for(var e,n=String(t),r=n.length,i=-1,o="",s=n.charCodeAt(0);++i<r;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=e>=1&&e<=31||127==e||0===i&&e>=48&&e<=57||1===i&&e>=48&&e<=57&&45===s?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return o}(n.substr(1)))?t.document.documentElement:t.document.querySelector(n),h=t.pageYOffset;r||(r=t.document.querySelector(l.selectorHeader)),i||(i=u(r));var p,d,m,v=function(t,e,n){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return(r=r-e-n)>=0?r:0}(f,i,parseInt(l.offset,10)),g=v-h,y=Math.max(t.document.body.scrollHeight,t.document.documentElement.scrollHeight,t.document.body.offsetHeight,t.document.documentElement.offsetHeight,t.document.body.clientHeight,t.document.documentElement.clientHeight),b=0;!function(e,n){t.history.pushState&&(n||"true"===n)&&"file:"!==t.location.protocol&&t.history.pushState(null,null,[t.location.protocol,"//",t.location.host,t.location.pathname,t.location.search,e].join(""))}(n,l.updateURL);var w=function(){d=(d=(b+=16)/parseInt(l.speed,10))>1?1:d,m=h+g*function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e}(l.easing,d),t.scrollTo(0,Math.floor(m)),function(r,i,o){var s=t.pageYOffset;(r==i||s==i||t.innerHeight+s>=y)&&(clearInterval(o),f.focus(),l.callback(e,n))}(m,v,p)};0===t.pageYOffset&&t.scrollTo(0,0),p=setInterval(w,16)};var l=function(t){var n=function(t,e){var n,r,i=e.charAt(0),o="classList"in document.documentElement;for("["===i&&(n=(e=e.substr(1,e.length-2)).split("=")).length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""));t&&t!==document;t=t.parentNode){if("."===i)if(o){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===i&&t.id===e.substr(1))return t;if("["===i&&t.hasAttribute(n[0])){if(!r)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}(t.target,e.selector);n&&"a"===n.tagName.toLowerCase()&&(t.preventDefault(),o.animateScroll(n,n.hash,e))},f=function(t){n||(n=setTimeout(function(){n=null,i=u(r)},66))};return o.destroy=function(){e&&(t.document.removeEventListener("click",l,!1),t.removeEventListener("resize",f,!1),e=null,n=null,r=null,i=null)},o.init=function(n){s&&(o.destroy(),e=c(a,n||{}),r=t.document.querySelector(e.selectorHeader),i=u(r),t.document.addEventListener("click",l,!1),r&&t.addEventListener("resize",f,!1))},o}),function(){for(var t=document.links,e=0,n=t.length;e<n;e++)t[e].hostname!=window.location.hostname&&(t[e].target="_blank")}(),function(t,e,n){function r(){t(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.canvas.removeClass("search-overlay")}t("#menu").click(function(){t("body").addClass("push-menu-to-right"),t("#sidebar").addClass("open"),t(".overlay").addClass("show")}),t("#mask").click(function(){t("body").removeClass("push-menu-to-right"),t("#sidebar").removeClass("open"),t(".overlay").removeClass("show")});var i={close:t(".icon-remove-sign"),searchform:t(".search-form"),canvas:t("body"),dothis:t(".dosearch")};i.dothis.on("click",function(){t(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.searchform.find("input").focus(),i.canvas.toggleClass("search-overlay"),t(".search-field").simpleJekyllSearch()}),i.close.on("click",r),document.addEventListener("keyup",function(e){27==e.keyCode&&t(".search-overlay").length&&r()}),document.getElementsByClassName("home").length>=1&&new AnimOnScroll(document.getElementById("grid"),{minDuration:.4,maxDuration:.7,viewportFactor:.2}),smoothScroll.init({selectorHeader:".bar-header",speed:500,updateURL:!1})}(Zepto,window);