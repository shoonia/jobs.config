export const id=3;export const ids=[3];export const modules={41:(e,r,t)=>{e=t.nmd(e);const n=t(42),o=(e,r)=>function(){return`[${e.apply(n,arguments)+r}m`},a=(e,r)=>function(){const t=e.apply(n,arguments);return`[${38+r};5;${t}m`},s=(e,r)=>function(){const t=e.apply(n,arguments);return`[${38+r};2;${t[0]};${t[1]};${t[2]}m`};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,r={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};r.color.grey=r.color.gray;for(const t of Object.keys(r)){const n=r[t];for(const t of Object.keys(n)){const o=n[t];r[t]={open:`[${o[0]}m`,close:`[${o[1]}m`},n[t]=r[t],e.set(o[0],o[1])}Object.defineProperty(r,t,{value:n,enumerable:!1}),Object.defineProperty(r,"codes",{value:e,enumerable:!1})}const t=e=>e,i=(e,r,t)=>[e,r,t];r.color.close="[39m",r.bgColor.close="[49m",r.color.ansi={ansi:o(t,0)},r.color.ansi256={ansi256:a(t,0)},r.color.ansi16m={rgb:s(i,0)},r.bgColor.ansi={ansi:o(t,10)},r.bgColor.ansi256={ansi256:a(t,10)},r.bgColor.ansi16m={rgb:s(i,10)};for(let e of Object.keys(n)){if("object"!==typeof n[e])continue;const t=n[e];"ansi16"===e&&(e="ansi"),"ansi16"in t&&(r.color.ansi[e]=o(t.ansi16,0),r.bgColor.ansi[e]=o(t.ansi16,10)),"ansi256"in t&&(r.color.ansi256[e]=a(t.ansi256,0),r.bgColor.ansi256[e]=a(t.ansi256,10)),"rgb"in t&&(r.color.ansi16m[e]=s(t.rgb,0),r.bgColor.ansi16m[e]=s(t.rgb,10))}return r}})},30:(e,r,t)=>{const n=t(40),o=t(41),a=t(45).stdout,s=t(46),i=!1,l=["ansi","ansi","ansi256","ansi16m"],c=new Set(["gray"]),u=Object.create(null);function h(e,r){e.level=void 0===(r=r||{}).level?a?a.level:0:r.level,e.enabled="enabled"in r?r.enabled:e.level>0}function g(e){if(!this||!(this instanceof g)||this.template){const r={};return h(r,e),r.template=function(){const e=[].slice.call(arguments);return m.apply(null,[r.template].concat(e))},Object.setPrototypeOf(r,g.prototype),Object.setPrototypeOf(r.template,r),r.template.constructor=g,r.template}h(this,e)}i&&(o.blue.open="[94m");for(const e of Object.keys(o))o[e].closeRe=new RegExp(n(o[e].close),"g"),u[e]={get(){const r=o[e];return p.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}};u.visible={get(){return p.call(this,this._styles||[],!0,"visible")}},o.color.closeRe=new RegExp(n(o.color.close),"g");for(const e of Object.keys(o.color.ansi))c.has(e)||(u[e]={get(){const r=this.level;return function(){const t={open:o.color[l[r]][e].apply(null,arguments),close:o.color.close,closeRe:o.color.closeRe};return p.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}});o.bgColor.closeRe=new RegExp(n(o.bgColor.close),"g");for(const e of Object.keys(o.bgColor.ansi))c.has(e)||(u["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const r=this.level;return function(){const t={open:o.bgColor[l[r]][e].apply(null,arguments),close:o.bgColor.close,closeRe:o.bgColor.closeRe};return p.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}});const f=Object.defineProperties((()=>{}),u);function p(e,r,t){const n=function(){return b.apply(n,arguments)};n._styles=e,n._empty=r;const o=this;return Object.defineProperty(n,"level",{enumerable:!0,get:()=>o.level,set(e){o.level=e}}),Object.defineProperty(n,"enabled",{enumerable:!0,get:()=>o.enabled,set(e){o.enabled=e}}),n.hasGrey=this.hasGrey||"gray"===t||"grey"===t,n.__proto__=f,n}function b(){const e=arguments,r=e.length;let t=String(arguments[0]);if(0===r)return"";if(r>1)for(let n=1;n<r;n++)t+=" "+e[n];if(!this.enabled||this.level<=0||!t)return this._empty?"":t;const n=o.dim.open;i&&this.hasGrey&&(o.dim.open="");for(const e of this._styles.slice().reverse())t=e.open+t.replace(e.closeRe,e.open)+e.close,t=t.replace(/\r?\n/g,`${e.close}$&${e.open}`);return o.dim.open=n,t}function m(e,r){if(!Array.isArray(r))return[].slice.call(arguments,1).join(" ");const t=[].slice.call(arguments,2),n=[r.raw[0]];for(let e=1;e<r.length;e++)n.push(String(t[e-1]).replace(/[{}\\]/g,"\\$&")),n.push(String(r.raw[e]));return s(e,n.join(""))}Object.defineProperties(g.prototype,u),e.exports=g(),e.exports.supportsColor=a,e.exports.default=e.exports},46:e=>{const r=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,t=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,n=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,o=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,a=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function s(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):a.get(e)||e}function i(e,r){const t=[],a=r.trim().split(/\s*,\s*/g);let i;for(const r of a)if(isNaN(r)){if(!(i=r.match(n)))throw new Error(`Invalid Chalk template style argument: ${r} (in style '${e}')`);t.push(i[2].replace(o,((e,r,t)=>r?s(r):t)))}else t.push(Number(r));return t}function l(e){t.lastIndex=0;const r=[];let n;for(;null!==(n=t.exec(e));){const e=n[1];if(n[2]){const t=i(e,n[2]);r.push([e].concat(t))}else r.push([e])}return r}function c(e,r){const t={};for(const e of r)for(const r of e.styles)t[r[0]]=e.inverse?null:r.slice(1);let n=e;for(const e of Object.keys(t))if(Array.isArray(t[e])){if(!(e in n))throw new Error(`Unknown Chalk style: ${e}`);n=t[e].length>0?n[e].apply(n,t[e]):n[e]}return n}e.exports=(e,t)=>{const n=[],o=[];let a=[];if(t.replace(r,((r,t,i,u,h,g)=>{if(t)a.push(s(t));else if(u){const r=a.join("");a=[],o.push(0===n.length?r:c(e,n)(r)),n.push({inverse:i,styles:l(u)})}else if(h){if(0===n.length)throw new Error("Found extraneous } in Chalk template literal");o.push(c(e,n)(a.join(""))),a=[],n.pop()}else a.push(g)})),o.push(a.join("")),n.length>0)throw new Error(`Chalk template literal is missing ${n.length} closing bracket${1===n.length?"":"s"} (\`}\`)`);return o.join("")}},31:(e,r,t)=>{var n=t(43),o={};for(var a in n)n.hasOwnProperty(a)&&(o[n[a]]=a);var s=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var i in s)if(s.hasOwnProperty(i)){if(!("channels"in s[i]))throw new Error("missing channels property: "+i);if(!("labels"in s[i]))throw new Error("missing channel labels property: "+i);if(s[i].labels.length!==s[i].channels)throw new Error("channel and label counts mismatch: "+i);var l=s[i].channels,c=s[i].labels;delete s[i].channels,delete s[i].labels,Object.defineProperty(s[i],"channels",{value:l}),Object.defineProperty(s[i],"labels",{value:c})}s.rgb.hsl=function(e){var r,t,n=e[0]/255,o=e[1]/255,a=e[2]/255,s=Math.min(n,o,a),i=Math.max(n,o,a),l=i-s;return i===s?r=0:n===i?r=(o-a)/l:o===i?r=2+(a-n)/l:a===i&&(r=4+(n-o)/l),(r=Math.min(60*r,360))<0&&(r+=360),t=(s+i)/2,[r,100*(i===s?0:t<=.5?l/(i+s):l/(2-i-s)),100*t]},s.rgb.hsv=function(e){var r,t,n,o,a,s=e[0]/255,i=e[1]/255,l=e[2]/255,c=Math.max(s,i,l),u=c-Math.min(s,i,l),h=function(e){return(c-e)/6/u+.5};return 0===u?o=a=0:(a=u/c,r=h(s),t=h(i),n=h(l),s===c?o=n-t:i===c?o=1/3+r-n:l===c&&(o=2/3+t-r),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*c]},s.rgb.hwb=function(e){var r=e[0],t=e[1],n=e[2];return[s.rgb.hsl(e)[0],1/255*Math.min(r,Math.min(t,n))*100,100*(n=1-1/255*Math.max(r,Math.max(t,n)))]},s.rgb.cmyk=function(e){var r,t=e[0]/255,n=e[1]/255,o=e[2]/255;return[100*((1-t-(r=Math.min(1-t,1-n,1-o)))/(1-r)||0),100*((1-n-r)/(1-r)||0),100*((1-o-r)/(1-r)||0),100*r]},s.rgb.keyword=function(e){var r=o[e];if(r)return r;var t,a,s,i=1/0;for(var l in n)if(n.hasOwnProperty(l)){var c=(a=e,s=n[l],Math.pow(a[0]-s[0],2)+Math.pow(a[1]-s[1],2)+Math.pow(a[2]-s[2],2));c<i&&(i=c,t=l)}return t},s.keyword.rgb=function(e){return n[e]},s.rgb.xyz=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*r+.7152*t+.0722*n),100*(.0193*r+.1192*t+.9505*n)]},s.rgb.lab=function(e){var r=s.rgb.xyz(e),t=r[0],n=r[1],o=r[2];return n/=100,o/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},s.hsl.rgb=function(e){var r,t,n,o,a,s=e[0]/360,i=e[1]/100,l=e[2]/100;if(0===i)return[a=255*l,a,a];r=2*l-(t=l<.5?l*(1+i):l+i-l*i),o=[0,0,0];for(var c=0;c<3;c++)(n=s+1/3*-(c-1))<0&&n++,n>1&&n--,o[c]=255*(a=6*n<1?r+6*(t-r)*n:2*n<1?t:3*n<2?r+(t-r)*(2/3-n)*6:r);return o},s.hsl.hsv=function(e){var r=e[0],t=e[1]/100,n=e[2]/100,o=t,a=Math.max(n,.01);return t*=(n*=2)<=1?n:2-n,o*=a<=1?a:2-a,[r,100*(0===n?2*o/(a+o):2*t/(n+t)),(n+t)/2*100]},s.hsv.rgb=function(e){var r=e[0]/60,t=e[1]/100,n=e[2]/100,o=Math.floor(r)%6,a=r-Math.floor(r),s=255*n*(1-t),i=255*n*(1-t*a),l=255*n*(1-t*(1-a));switch(n*=255,o){case 0:return[n,l,s];case 1:return[i,n,s];case 2:return[s,n,l];case 3:return[s,i,n];case 4:return[l,s,n];case 5:return[n,s,i]}},s.hsv.hsl=function(e){var r,t,n,o=e[0],a=e[1]/100,s=e[2]/100,i=Math.max(s,.01);return n=(2-a)*s,t=a*i,[o,100*(t=(t/=(r=(2-a)*i)<=1?r:2-r)||0),100*(n/=2)]},s.hwb.rgb=function(e){var r,t,n,o,a,s,i,l=e[0]/360,c=e[1]/100,u=e[2]/100,h=c+u;switch(h>1&&(c/=h,u/=h),n=6*l-(r=Math.floor(6*l)),0!==(1&r)&&(n=1-n),o=c+n*((t=1-u)-c),r){default:case 6:case 0:a=t,s=o,i=c;break;case 1:a=o,s=t,i=c;break;case 2:a=c,s=t,i=o;break;case 3:a=c,s=o,i=t;break;case 4:a=o,s=c,i=t;break;case 5:a=t,s=c,i=o}return[255*a,255*s,255*i]},s.cmyk.rgb=function(e){var r=e[1]/100,t=e[2]/100,n=e[3]/100;return[255*(1-Math.min(1,e[0]/100*(1-n)+n)),255*(1-Math.min(1,r*(1-n)+n)),255*(1-Math.min(1,t*(1-n)+n))]},s.xyz.rgb=function(e){var r,t,n,o=e[0]/100,a=e[1]/100,s=e[2]/100;return t=-.9689*o+1.8758*a+.0415*s,n=.0557*o+-.204*a+1.057*s,r=(r=3.2406*o+-1.5372*a+-.4986*s)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},s.xyz.lab=function(e){var r=e[0],t=e[1],n=e[2];return t/=100,n/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},s.lab.xyz=function(e){var r,t,n;r=e[1]/500+(t=(e[0]+16)/116),n=t-e[2]/200;var o=Math.pow(t,3),a=Math.pow(r,3),s=Math.pow(n,3);return t=o>.008856?o:(t-16/116)/7.787,r=a>.008856?a:(r-16/116)/7.787,n=s>.008856?s:(n-16/116)/7.787,[r*=95.047,t*=100,n*=108.883]},s.lab.lch=function(e){var r,t=e[0],n=e[1],o=e[2];return(r=360*Math.atan2(o,n)/2/Math.PI)<0&&(r+=360),[t,Math.sqrt(n*n+o*o),r]},s.lch.lab=function(e){var r,t=e[1];return r=e[2]/360*2*Math.PI,[e[0],t*Math.cos(r),t*Math.sin(r)]},s.rgb.ansi16=function(e){var r=e[0],t=e[1],n=e[2],o=1 in arguments?arguments[1]:s.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(n/255)<<2|Math.round(t/255)<<1|Math.round(r/255));return 2===o&&(a+=60),a},s.hsv.ansi16=function(e){return s.rgb.ansi16(s.hsv.rgb(e),e[2])},s.rgb.ansi256=function(e){var r=e[0],t=e[1],n=e[2];return r===t&&t===n?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},s.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var t=.5*(1+~~(e>50));return[(1&r)*t*255,(r>>1&1)*t*255,(r>>2&1)*t*255]},s.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},s.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},s.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var t=r[0];3===r[0].length&&(t=t.split("").map((function(e){return e+e})).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},s.rgb.hcg=function(e){var r,t=e[0]/255,n=e[1]/255,o=e[2]/255,a=Math.max(Math.max(t,n),o),s=Math.min(Math.min(t,n),o),i=a-s;return r=i<=0?0:a===t?(n-o)/i%6:a===n?2+(o-t)/i:4+(t-n)/i+4,r/=6,[360*(r%=1),100*i,100*(i<1?s/(1-i):0)]},s.hsl.hcg=function(e){var r,t=e[1]/100,n=e[2]/100,o=0;return(r=n<.5?2*t*n:2*t*(1-n))<1&&(o=(n-.5*r)/(1-r)),[e[0],100*r,100*o]},s.hsv.hcg=function(e){var r=e[2]/100,t=e[1]/100*r,n=0;return t<1&&(n=(r-t)/(1-t)),[e[0],100*t,100*n]},s.hcg.rgb=function(e){var r=e[1]/100,t=e[2]/100;if(0===r)return[255*t,255*t,255*t];var n,o=[0,0,0],a=e[0]/360%1*6,s=a%1,i=1-s;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=i,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=i,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=i}return[255*(r*o[0]+(n=(1-r)*t)),255*(r*o[1]+n),255*(r*o[2]+n)]},s.hcg.hsv=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r),n=0;return t>0&&(n=r/t),[e[0],100*n,100*t]},s.hcg.hsl=function(e){var r=e[1]/100,t=e[2]/100*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},s.hcg.hwb=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},s.hwb.hcg=function(e){var r=1-e[2]/100,t=r-e[1]/100,n=0;return t<1&&(n=(r-t)/(1-t)),[e[0],100*t,100*n]},s.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},s.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},s.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},s.gray.hsl=s.gray.hsv=function(e){return[0,0,e[0]]},s.gray.hwb=function(e){return[0,100,e[0]]},s.gray.cmyk=function(e){return[0,0,0,e[0]]},s.gray.lab=function(e){return[e[0],0,0]},s.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},s.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},42:(e,r,t)=>{var n=t(31),o=t(44),a={};Object.keys(n).forEach((function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});var r=o(e);Object.keys(r).forEach((function(t){var n=r[t];a[e][t]=function(e){var r=function(r){if(void 0===r||null===r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var t=e(r);if("object"===typeof t)for(var n=t.length,o=0;o<n;o++)t[o]=Math.round(t[o]);return t};return"conversion"in e&&(r.conversion=e.conversion),r}(n),a[e][t].raw=function(e){var r=function(r){return void 0===r||null===r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}(n)}))})),e.exports=a},44:(e,r,t)=>{var n=t(31);function o(e,r){return function(t){return r(e(t))}}function a(e,r){for(var t=[r[e].parent,e],a=n[r[e].parent][e],s=r[e].parent;r[s].parent;)t.unshift(r[s].parent),a=o(n[r[s].parent][s],a),s=r[s].parent;return a.conversion=t,a}e.exports=function(e){for(var r=function(e){var r=function(){for(var e={},r=Object.keys(n),t=r.length,o=0;o<t;o++)e[r[o]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;)for(var o=t.pop(),a=Object.keys(n[o]),s=a.length,i=0;i<s;i++){var l=a[i],c=r[l];-1===c.distance&&(c.distance=r[o].distance+1,c.parent=o,t.unshift(l))}return r}(e),t={},o=Object.keys(r),s=o.length,i=0;i<s;i++){var l=o[i];null!==r[l].parent&&(t[l]=a(l,r))}return t}},43:e=>{e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},38:(e,r,t)=>{var n=t(57),o=t(16),a=function(e,r){e&&e.constructor===String||(r=e||{},e=Error.name);var t=function n(a){if(!this)return new n(a);a=a instanceof Error?a.message:a||this.message,Error.call(this,a),Error.captureStackTrace(this,t),this.name=e,Object.defineProperty(this,"message",{configurable:!0,enumerable:!1,get:function(){var e=a.split(/\r?\n/g);for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"message"in n&&(e=n.message(this[t],e)||e,o(e)||(e=[e]))}return e.join("\n")},set:function(e){a=e}});var s=null,i=Object.getOwnPropertyDescriptor(this,"stack"),l=i.get,c=i.value;delete i.value,delete i.writable,i.set=function(e){s=e},i.get=function(){var e=(s||(l?l.call(this):c)).split(/\r?\n+/g);s||(e[0]=this.name+": "+this.message);var t=1;for(var n in r)if(r.hasOwnProperty(n)){var o=r[n];if("line"in o){var a=o.line(this[n]);a&&e.splice(t++,0,"    "+a)}"stack"in o&&o.stack(this[n],e)}return e.join("\n")},Object.defineProperty(this,"stack",i)};return Object.setPrototypeOf?(Object.setPrototypeOf(t.prototype,Error.prototype),Object.setPrototypeOf(t,Error)):n.inherits(t,Error),t};a.append=function(e,r){return{message:function(t,n){return(t=t||r)&&(n[0]+=" "+e.replace("%s",t.toString())),n}}},a.line=function(e,r){return{line:function(t){return(t=t||r)?e.replace("%s",t.toString()):null}}},e.exports=a},40:e=>{var r=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(r,"\\$&")}},39:e=>{class r extends SyntaxError{constructor(e,r,t,n){const o=((e,r,t)=>{if(!r)return{message:e.message+" while parsing empty string",position:0};const n=e.message.match(/^Unexpected token (.) .*position\s+(\d+)/i),o=n?+n[2]:e.message.match(/^Unexpected end of JSON.*/i)?r.length-1:null,a=n?e.message.replace(/^Unexpected token ./,`Unexpected token ${JSON.stringify(n[1])} (${(e=>{const r=e.charCodeAt(0).toString(16).toUpperCase();return"0x"+(r.length%2?"0":"")+r})(n[1])})`):e.message;if(null!==o&&void 0!==o){const e=o<=t?0:o-t,n=o+t>=r.length?r.length:o+t,s=(0===e?"":"...")+r.slice(e,n)+(n===r.length?"":"...");return{message:a+` while parsing ${r===s?"":"near "}${JSON.stringify(s)}`,position:o}}return{message:a+` while parsing '${r.slice(0,2*t)}'`,position:0}})(e,r,t=t||20);super(o.message),Object.assign(this,o),this.code="EJSONPARSE",this.systemError=e,Error.captureStackTrace(this,n||this.constructor)}get name(){return this.constructor.name}set name(e){}get[Symbol.toStringTag](){return this.constructor.name}}const t=Symbol.for("indent"),n=Symbol.for("newline"),o=/^\s*[{[]((?:\r?\n)+)([\s\t]*)/,a=/^(?:\{\}|\[\])((?:\r?\n)+)?$/,s=(e,l,c)=>{const u=i(e);c=c||20;try{const[,e="\n",r="  "]=u.match(a)||u.match(o)||[null,"",""],s=JSON.parse(u,l);return s&&"object"===typeof s&&(s[n]=e,s[t]=r),s}catch(t){if("string"!==typeof e&&!Buffer.isBuffer(e)){const r=Array.isArray(e)&&0===e.length;throw Object.assign(new TypeError(`Cannot parse ${r?"an empty array":String(e)}`),{code:"EJSONPARSE",systemError:t})}throw new r(t,u,c,s)}},i=e=>String(e).replace(/^\uFEFF/,"");e.exports=s,s.JSONParseError=r,s.noExceptions=(e,r)=>{try{return JSON.parse(i(e),r)}catch(e){}}},45:e=>{e.exports={stdout:!1,stderr:!1}},58:(e,r,t)=>{r.a=function(e,r,t={}){const o=(t.highlightCode||t.forceColor)&&(0,n.shouldHighlight)(t),a=s(t.forceColor),l=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(a),c=(e,r)=>o?e(r):r,u=e.split(i),{start:h,end:g,markerLines:f}=function(e,r,t){const n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),{linesAbove:a=2,linesBelow:s=3}=t||{},i=n.line,l=n.column,c=o.line,u=o.column;let h=Math.max(i-(a+1),0),g=Math.min(r.length,c+s);-1===i&&(h=0),-1===c&&(g=r.length);const f=c-i,p={};if(f)for(let e=0;e<=f;e++){const t=e+i;p[t]=!l||(0===e?[l,r[t-1].length-l+1]:e===f?[0,u]:[0,r[t-e].length])}else p[i]=l===u?!l||[l,0]:[l,u-l];return{start:h,end:g,markerLines:p}}(r,u,t),p=r.start&&"number"===typeof r.start.column,b=String(g).length;let m=(o?(0,n.default)(e,t):e).split(i,g).slice(h,g).map(((e,r)=>{const n=h+1+r,o=` ${` ${n}`.slice(-b)} |`,a=f[n],s=!f[n+1];if(a){let r="";if(Array.isArray(a)){const n=e.slice(0,Math.max(a[0]-1,0)).replace(/[^\t]/g," "),i=a[1]||1;r=["\n ",c(l.gutter,o.replace(/\d/g," "))," ",n,c(l.marker,"^").repeat(i)].join(""),s&&t.message&&(r+=" "+c(l.message,t.message))}return[c(l.marker,">"),c(l.gutter,o),e.length>0?` ${e}`:"",r].join("")}return` ${c(l.gutter,o)}${e.length>0?` ${e}`:""}`})).join("\n");return t.message&&!p&&(m=`${" ".repeat(b+1)}${t.message}\n${m}`),o?a.reset(m):m};var n=t(17);const o=t(30);let a;function s(e){return e?(null!=a||(a=new o.constructor({enabled:!0,level:1})),a):o}const i=/\r\n|[\n\r\u2028\u2029]/},56:(e,r,t)=>{t.d(r,{a:()=>l});var n=t(38),o=t(39),a=t(58),s=function(){function e(e){this.length=e.length;for(var r=[0],t=0;t<e.length;)switch(e[t]){case"\n":r.push(t+=1);break;case"\r":"\n"===e[t+=1]&&(t+=1),r.push(t);break;default:t++}this.offsets=r}return e.prototype.locationForIndex=function(e){if(e<0||e>this.length)return null;for(var r=0,t=this.offsets;t[r+1]<=e;)r++;return{line:r,column:e-t[r]}},e.prototype.indexForLocation=function(e){var r=e.line,t=e.column;return r<0||r>=this.offsets.length||t<0||t>this.lengthOfLine(r)?null:this.offsets[r]+t},e.prototype.lengthOfLine=function(e){return(e===this.offsets.length-1?this.length:this.offsets[e+1])-this.offsets[e]},e}();const i=n("JSONError",{fileName:n.append("in %s"),codeFrame:n.append("\n\n%s\n")});function l(e,r,t){"string"===typeof r&&(t=r,r=null);try{try{return JSON.parse(e,r)}catch(t){throw o(e,r),t}}catch(r){r.message=r.message.replace(/\n/g,"");const n=r.message.match(/in JSON at position (\d+) while parsing/),o=new i(r);if(t&&(o.fileName=t),n&&n.length>0){const r=new s(e),t=Number(n[1]),i=r.locationForIndex(t),l=(0,a.a)(e,{start:{line:i.line+1,column:i.column+1}},{highlightCode:!0});o.codeFrame=l}throw o}}},55:(e,r,t)=>{t.d(r,{a:()=>l});const n=Symbol("singleComment"),o=Symbol("multiComment"),a=()=>"",s=(e,r,t)=>e.slice(r,t).replace(/\S/g," "),i=(e,r)=>{let t=r-1,n=0;for(;"\\"===e[t];)t-=1,n+=1;return Boolean(n%2)};function l(e,{whitespace:r=!0,trailingCommas:t=!1}={}){if("string"!==typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const l=r?s:a;let c=!1,u=!1,h=0,g="",f="",p=-1;for(let r=0;r<e.length;r++){const a=e[r],s=e[r+1];if(u||'"'!==a||i(e,r)||(c=!c),!c)if(u||a+s!=="//"){if(u===n&&a+s==="\r\n"){r++,u=!1,g+=l(e,h,r),h=r;continue}if(u===n&&"\n"===a)u=!1,g+=l(e,h,r),h=r;else{if(!u&&a+s==="/*"){g+=e.slice(h,r),h=r,u=o,r++;continue}if(u===o&&a+s==="*/"){r++,u=!1,g+=l(e,h,r+1),h=r+1;continue}t&&!u&&(-1!==p?"}"===a||"]"===a?(g+=e.slice(h,r),f+=l(g,0,1)+g.slice(1),g="",h=r,p=-1):" "!==a&&"\t"!==a&&"\r"!==a&&"\n"!==a&&(g+=e.slice(h,r),h=r,p=-1):","===a&&(f+=g+e.slice(h,r),g="",h=r,p=r))}}else g+=e.slice(h,r),h=r,u=n,r++}return f+g+(u?l(e.slice(h)):e.slice(h))}}};