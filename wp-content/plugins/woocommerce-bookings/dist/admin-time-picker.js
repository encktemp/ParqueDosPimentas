this["wc-bookings"]=this["wc-bookings"]||{},this["wc-bookings"]["admin-time-picker"]=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=169)}([,function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(11)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var o=e(2),r=e(1),i=e(53),c=e(20),u=e(12),a=function(t,n,e){var s,f,l,p=t&a.F,d=t&a.G,v=t&a.S,g=t&a.P,m=t&a.B,_=t&a.W,b=d?r:r[n]||(r[n]={}),h=b.prototype,k=d?o:v?o[n]:(o[n]||{}).prototype;for(s in d&&(e=n),e)(f=!p&&k&&void 0!==k[s])&&u(b,s)||(l=f?k[s]:e[s],b[s]=d&&"function"!=typeof k[s]?e[s]:m&&f?i(l,o):_&&k[s]==l?function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):g&&"function"==typeof l?i(Function.call,l):l,g&&((b.virtual||(b.virtual={}))[s]=l,t&a.R&&h&&!h[s]&&c(h,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var o=e(21),r=e(46),i=e(33),c=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(o(t),n=i(n,!0),o(e),r)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(9)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var o=e(28)("wks"),r=e(27),i=e(3).Symbol,c="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=c&&i[t]||(c?i:r)("Symbol."+t))}).store=o},,function(t,n,e){var o=e(36),r=e(50);t.exports=e(8)?function(t,n,e){return o.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var o=e(7);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},,function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var o=e(6),r=e(24);t.exports=e(4)?function(t,n,e){return o.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var o=e(10);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},,function(t,n,e){var o=e(3),r=e(13),i=e(16),c=e(31),u=e(32),a=function(t,n,e){var s,f,l,p,d=t&a.F,v=t&a.G,g=t&a.S,m=t&a.P,_=t&a.B,b=v?o:g?o[n]||(o[n]={}):(o[n]||{}).prototype,h=v?r:r[n]||(r[n]={}),k=h.prototype||(h.prototype={});for(s in v&&(e=n),e)l=((f=!d&&b&&void 0!==b[s])?b:e)[s],p=_&&f?u(l,o):m&&"function"==typeof l?u(Function.call,l):l,b&&c(b,s,l,t&a.U),h[s]!=l&&i(h,s,p),m&&k[s]!=l&&(k[s]=l)};o.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){var e=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+o).toString(36))}},function(t,n,e){var o=e(13),r=e(3),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:o.version,mode:e(52)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var o=e(23),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},,function(t,n,e){var o=e(3),r=e(16),i=e(35),c=e(27)("src"),u=e(51),a=(""+u).split("toString");e(13).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var s="function"==typeof e;s&&(i(e,"name")||r(e,"name",n)),t[n]!==e&&(s&&(i(e,c)||r(e,c,t[n]?""+t[n]:a.join(String(n)))),t===o?t[n]=e:u?t[n]?t[n]=e:r(t,n,e):(delete t[n],r(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},function(t,n,e){var o=e(39);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,r){return t.call(n,e,o,r)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var o=e(10);t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var o=e(17),r=e(48),i=e(44),c=Object.defineProperty;n.f=e(8)?Object.defineProperty:function(t,n,e){if(o(t),n=i(n,!0),o(e),r)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},,function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var o=e(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,n,e){t.exports=e(78)},,,function(t,n,e){var o=e(7);t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var o=e(19);t.exports=function(t){return Object(o(t))}},function(t,n,e){t.exports=!e(4)&&!e(11)((function(){return 7!=Object.defineProperty(e(47)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var o=e(10),r=e(2).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,n,e){t.exports=!e(8)&&!e(9)((function(){return 7!=Object.defineProperty(e(49)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var o=e(7),r=e(3).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports=e(28)("native-function-to-string",Function.toString)},function(t,n){t.exports=!1},function(t,n,e){var o=e(68);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,r){return t.call(n,e,o,r)}}return function(){return t.apply(n,arguments)}}},,,,,function(t,n,e){var o=e(14)("unscopables"),r=Array.prototype;null==r[o]&&e(16)(r,o,{}),t.exports=function(t){r[o][t]=!0}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},,,,,,,function(t,n,e){var o=e(40),r=e(19);t.exports=function(t){return o(r(t))}},function(t,n,e){"use strict";var o,r,i=e(87),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,s=(o=/a/,r=/b*/g,c.call(o,"a"),c.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(a=function(t){var n,e,o,r,a=this;return f&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(n=a.lastIndex),o=c.call(a,t),s&&o&&(a.lastIndex=a.global?o.index+o[0].length:n),f&&o&&o.length>1&&u.call(o[0],e,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=a},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},,,,function(t,n,e){"use strict";var o=e(26),r=e(92)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),o(o.P+o.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(58)("find")},,function(t,n,e){var o=e(66),r=e(29),i=e(85);t.exports=function(t){return function(n,e,c){var u,a=o(n),s=r(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){"use strict";var o=e(100),r=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,n)}},function(t,n,e){"use strict";e(107);var o=e(31),r=e(16),i=e(9),c=e(19),u=e(14),a=e(67),s=u("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=u(t),d=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),v=d?!i((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[p](""),!n})):void 0;if(!d||!v||"replace"===t&&!f||"split"===t&&!l){var g=/./[p],m=e(c,p,""[t],(function(t,n,e,o,r){return n.exec===a?d&&!r?{done:!0,value:g.call(n,e,o)}:{done:!0,value:t.call(e,n,o)}:{done:!1}})),_=m[0],b=m[1];o(String.prototype,t,_),r(RegExp.prototype,p,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}}},function(t,n,e){t.exports=e(88)},function(t,n,e){e(79);var o=e(1).Object;t.exports=function(t,n,e){return o.defineProperty(t,n,e)}},function(t,n,e){var o=e(5);o(o.S+o.F*!e(4),"Object",{defineProperty:e(6).f})},,,function(t,n,e){"use strict";var o=e(106)(!0);t.exports=function(t,n,e){return n+(e?o(t,n).length:1)}},,,function(t,n,e){var o=e(23),r=Math.max,i=Math.min;t.exports=function(t,n){return(t=o(t))<0?r(t+n,0):i(t,n)}},function(t,n,e){"use strict";var o=e(26),r=e(74)(!0);o(o.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(58)("includes")},function(t,n,e){"use strict";var o=e(17);t.exports=function(){var t=o(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){e(89),t.exports=e(1).parseInt},function(t,n,e){var o=e(5),r=e(90);o(o.G+o.F*(parseInt!=r),{parseInt:r})},function(t,n,e){var o=e(2).parseInt,r=e(91).trim,i=e(59),c=/^[-+]?0[xX]/;t.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(t,n){var e=r(String(t),3);return o(e,n>>>0||(c.test(e)?16:10))}:o},function(t,n,e){var o=e(5),r=e(34),i=e(11),c=e(59),u="["+c+"]",a=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),f=function(t,n,e){var r={},u=i((function(){return!!c[t]()||"​"!="​"[t]()})),a=r[t]=u?n(l):c[t];e&&(r[e]=a),o(o.P+o.F*u,"String",r)},l=f.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(s,"")),t};t.exports=f},function(t,n,e){var o=e(32),r=e(40),i=e(45),c=e(29),u=e(93);t.exports=function(t,n){var e=1==t,a=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l,d=n||u;return function(n,u,v){for(var g,m,_=i(n),b=r(_),h=o(u,v,3),k=c(b.length),y=0,x=e?d(n,k):a?d(n,0):void 0;k>y;y++)if((p||y in b)&&(m=h(g=b[y],y,_),t))if(e)x[y]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return y;case 2:x.push(g)}else if(f)return!1;return l?-1:s||f?f:x}}},function(t,n,e){var o=e(94);t.exports=function(t,n){return new(o(t))(n)}},function(t,n,e){var o=e(7),r=e(95),i=e(14)("species");t.exports=function(t){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)||(n=void 0),o(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var o=e(22);t.exports=Array.isArray||function(t){return"Array"==o(t)}},,,,,function(t,n,e){var o=e(22),r=e(14)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),r))?e:i?o(n):"Object"==(c=o(n))&&"function"==typeof n.callee?"Arguments":c}},,function(t,n,e){var o=e(7),r=e(22),i=e(14)("match");t.exports=function(t){var n;return o(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==r(t))}},,,function(t,n,e){"use strict";var o=e(17),r=e(45),i=e(29),c=e(23),u=e(82),a=e(75),s=Math.max,f=Math.min,l=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(76)("replace",2,(function(t,n,e,v){return[function(o,r){var i=t(this),c=null==o?void 0:o[n];return void 0!==c?c.call(o,i,r):e.call(String(i),o,r)},function(t,n){var r=v(e,t,this,n);if(r.done)return r.value;var l=o(t),p=String(this),d="function"==typeof n;d||(n=String(n));var m=l.global;if(m){var _=l.unicode;l.lastIndex=0}for(var b=[];;){var h=a(l,p);if(null===h)break;if(b.push(h),!m)break;""===String(h[0])&&(l.lastIndex=u(p,i(l.lastIndex),_))}for(var k,y="",x=0,w=0;w<b.length;w++){h=b[w];for(var S=String(h[0]),j=s(f(c(h.index),p.length),0),O=[],E=1;E<h.length;E++)O.push(void 0===(k=h[E])?k:String(k));var P=h.groups;if(d){var z=[S].concat(O,j,p);void 0!==P&&z.push(P);var M=String(n.apply(void 0,z))}else M=g(S,p,j,O,P,n);j>=x&&(y+=p.slice(x,j)+M,x=j+S.length)}return y+p.slice(x)}];function g(t,n,o,i,c,u){var a=o+t.length,s=i.length,f=d;return void 0!==c&&(c=r(c),f=p),e.call(u,f,(function(e,r){var u;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,o);case"'":return n.slice(a);case"<":u=c[r.slice(1,-1)];break;default:var f=+r;if(0===f)return e;if(f>s){var p=l(f/10);return 0===p?e:p<=s?void 0===i[p-1]?r.charAt(1):i[p-1]+r.charAt(1):e}u=i[f-1]}return void 0===u?"":u}))}}))},function(t,n,e){var o=e(23),r=e(19);t.exports=function(t){return function(n,e){var i,c,u=String(r(n)),a=o(e),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var o=e(67);e(26)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},,,,,,,,,,,,,,,function(t,n,e){"use strict";var o=e(26),r=e(152);o(o.P+o.F*e(153)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){var o=e(102),r=e(19);t.exports=function(t,n,e){if(o(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(r(t))}},function(t,n,e){var o=e(14)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[o]=!1,!"/./"[t](n)}catch(t){}}return!0}},,,function(t,n,e){e(41)(n,"__esModule",{value:!0}),n.get_client_server_timezone_offset_hrs=function(t){if(!booking_form_params.timezone_conversion)return 0;var n=moment(t),e=n.utcOffset();n.tz(booking_form_params.server_timezone);var o=n.utcOffset();return(e-o)/60}},,,,,,,,,,,,,function(t,n,e){var o=e(37);e(86),e(122);var r=o(e(77));e(72),e(105);var i=e(156);jQuery(document).ready((function(t){var n,e=moment.tz.guess()||booking_form_params.server_timezone;function o(t,n){var e=t.closest("form").find(".wc-bookings-booking-form-button");if(void 0!==n){var o=t.find('[data-value="'+n+'"]');if(void 0!==o.data("value"))t.closest("div").find("input").val(n).trigger("change"),t.closest("ul").find("a").removeClass("selected"),o.addClass("selected"),e.removeClass("disabled");else e.addClass("disabled")}else e.addClass("disabled")}function c(t){t.closest("ul").find("a").removeClass("selected")}function u(c){var u=t(c).closest("form"),a=t(c).closest("div").find("fieldset"),s=t(c).closest("div").find(".block-picker"),f=s.find(".selected"),l=a.find("input.booking_date_year").val(),p=(0,r.default)(l,10),d=a.find("input.booking_date_month").val(),v=(0,r.default)(d,10),g=a.find("input.booking_date_day").val(),m=(0,r.default)(g,10),_=l+"-"+d+"-"+g;if(p&&v&&m){s.closest("div").find("input").val("").trigger("change"),s.closest("div").block({message:null,overlayCSS:{background:"#fff",backgroundSize:"16px 16px",opacity:.6}}).show(),u.find(".wc-bookings-booking-cost").html("").hide(),n&&n.abort();var b=u.serialize(),h=(0,i.get_client_server_timezone_offset_hrs)(_);h<0?b+="&get_next_day=true":h>0&&(b+="&get_prev_day=true"),n=t.ajax({type:"POST",url:booking_form_params.ajax_url,data:{action:"wc_bookings_get_blocks",form:b},success:function(n){var r,c;s.html(n),r=0,c=0,t(".block-picker a").each((function(){var n=t(this).width(),e=t(this).height();n>r&&(r=n),e>c&&(c=e)})),t(".block-picker a").width(r),t(".block-picker a").height(c),function(n){if(!booking_form_params.timezone_conversion)return;var o=moment.tz(n,e),r=moment(o),c=".block-picker .block a";r.add(1,"days"),"customer"!==wc_bookings_booking_form.duration_type||"hour"!==wc_bookings_booking_form.duration_unit&&"minute"!==wc_bookings_booking_form.duration_unit||(c=".block-picker #wc-bookings-form-start-time > option");t(c).each((function(){if(".block-picker #wc-bookings-form-start-time > option"===c)var e=t(this).val();else e=t(this).attr("data-value");if(void 0===e||"0"==e)return!0;var u=(0,i.get_client_server_timezone_offset_hrs)(n),a=moment.tz(e,booking_form_params.server_timezone),s=moment.tz(e,booking_form_params.server_timezone);if(s.add(u,"hours"),a.isBetween(o,r,null,"[)")){if(".block-picker #wc-bookings-form-start-time > option"===c)moment(t(this).val()).unix()<=moment().unix()?t(this).remove():t(this).text(a);t(this).text(s.format(booking_form_params.server_time_format)),t(this).data("remaining")&&(".block-picker #wc-bookings-form-start-time > option"===c?t(this).append(" ("+t(this).data("remaining")+")"):t(this).append(' <small class="booking-spaces-left">('+t(this).data("remaining")+")</small>"))}else".block-picker #wc-bookings-form-start-time > option"===c?t(this).remove():t(this).parent().remove()}))}(_),s.closest("div").unblock(),o(s,f.data("value")),t(".woocommerce-error.wc-bookings-notice").slideUp()},error:function(n,e){if("abort"!==e){t(".woocommerce-error.wc-bookings-notice").removeClass("active");var o=document.createElement("p");o.setAttribute("class","woocommerce-error wc-bookings-notice active"),o.setAttribute("style","display: none;"),o.textContent=booking_form_params.i18n_request_failed,t(o).insertAfter("#wc-bookings-booking-form"),t(".woocommerce-error.wc-bookings-notice.active").slideDown({complete:function(){t(".woocommerce-error.wc-bookings-notice:not(.active)").slideUp()}}),t(".blockOverlay").remove(),wc_bookings_booking_form.wc_bookings_date_picker.clear_selection(),wc_bookings_booking_form.wc_bookings_date_picker.refresh_datepicker()}},dataType:"html"})}}booking_form_params.timezone_conversion&&(t(".wc-bookings-date-picker-timezone").text(e.replace("_"," ")),t('[name="wc_bookings_field_start_date_local_timezone"]').val(e)),t(".block-picker").on("click","a",(function(){if(t('[name="wc_bookings_field_start_date_yearmonth"]').length)return!1;var n=t(this).data("value");return o(t(this).closest("ul"),n),!1})),wc_bookings_booking_form.time_picker_reset_selected=c,t(".wc-bookings-booking-form").on("change","#wc-bookings-form-start-time",(function(){var o=t(this).val(),c=t(this).parents(".wc-bookings-start-time-container").data("productId"),u=t(this).parents(".wc-bookings-start-time-container").data("blocks"),a=t(this).parents(".form-field").eq(0);if(t("#wc-bookings-form-end-time").attr("disabled","disabled"),t("#wc-bookings-form-end-time").css("opacity","0.5"),t(this).closest("form").find(".wc-bookings-booking-cost").html("").hide(),"0"===o)return t(this).closest("form").find(".wc-bookings-booking-form-button").addClass("disabled"),!1;t(".wc-bookings-booking-form").closest("form").find(".wc-bookings-booking-form-button").addClass("disabled");var s=t("#wc-bookings-booking-form"),f=s.find("#wc_bookings_field_resource").val(),l=s.find("input.booking_date_year").val(),p=(0,r.default)(l,10),d=s.find("input.booking_date_month").val(),v=(0,r.default)(d,10),g=s.find("input.booking_date_day").val(),m=(0,r.default)(g,10),_=l+"-"+d+"-"+g;return p&&v&&m?(n=t.ajax({type:"POST",url:booking_form_params.ajax_url,data:{action:"wc_bookings_get_end_time_html",security:booking_form_params.nonce.get_end_time_html,start_date_time:o,product_id:c,blocks:u,resource_id:f},success:function(n){t(".wc-bookings-end-time-container").replaceWith(n),function(n){if(!booking_form_params.timezone_conversion)return;var o=moment.tz(n,e),r=moment(o);r.add(1,"days"),t(".block-picker #wc-bookings-form-end-time > option").each((function(){var e=t(this).data("value");if(void 0===e||"0"==e)return!0;var o=(0,i.get_client_server_timezone_offset_hrs)(n),r=moment.tz(e,booking_form_params.server_timezone),c=t(this).data("durationDisplay");r.add(o,"hours"),t(this).text(r.format(booking_form_params.server_time_format)+c)}))}(_),a.find("input.required_for_calculation").val(o)},dataType:"html"}),!1):void 0})),t(".wc-bookings-booking-form").on("change","#wc-bookings-form-end-time",(function(){t(".wc-bookings-booking-cost").html("").hide();var n=t(this).val(),e=t(this);t(this).parents(".wc-bookings-booking-form").find(".wc_bookings_field_duration").val(n);var o=e.closest("form").find(".wc-bookings-booking-form-button");void 0!==n&&"0"!==n&&"0"!==t(this).parents(".wc-bookings-booking-form").find("#wc-bookings-form-start-time").val()?(e.parents(".form-field").eq(0).find("input.required_for_calculation").trigger("change"),o.removeClass("disabled")):o.addClass("disabled")})),t(".wc_bookings_field_duration").on("change",(function(){["hour","minute"].includes(wc_bookings_booking_form.duration_unit)&&u(this)})),t("#wc_bookings_field_resource").on("change",(function(){["hour","minute"].includes(wc_bookings_booking_form.duration_unit)&&c(t(".wc-bookings-booking-form").find(".block-picker"))})),t(".wc-bookings-booking-form fieldset").on("date-selected",(function(){t(".wc_bookings_field_duration").val(1),["hour","minute"].includes(wc_bookings_booking_form.duration_unit)&&u(this)}))}))}]);
//# sourceMappingURL=admin-time-picker.js.map