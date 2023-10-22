export const id=2;export const ids=[2];export const modules={26:(e,n,t)=>{var r=t(41),o=t(13),i=function(e,n){e&&e.constructor===String||(n=e||{},e=Error.name);var t=function r(i){if(!this)return new r(i);i=i instanceof Error?i.message:i||this.message,Error.call(this,i),Error.captureStackTrace(this,t),this.name=e,Object.defineProperty(this,"message",{configurable:!0,enumerable:!1,get:function(){var e=i.split(/\r?\n/g);for(var t in n)if(n.hasOwnProperty(t)){var r=n[t];"message"in r&&(e=r.message(this[t],e)||e,o(e)||(e=[e]))}return e.join("\n")},set:function(e){i=e}});var c=null,a=Object.getOwnPropertyDescriptor(this,"stack"),s=a.get,l=a.value;delete a.value,delete a.writable,a.set=function(e){c=e},a.get=function(){var e=(c||(s?s.call(this):l)).split(/\r?\n+/g);c||(e[0]=this.name+": "+this.message);var t=1;for(var r in n)if(n.hasOwnProperty(r)){var o=n[r];if("line"in o){var i=o.line(this[r]);i&&e.splice(t++,0,"    "+i)}"stack"in o&&o.stack(this[r],e)}return e.join("\n")},Object.defineProperty(this,"stack",a)};return Object.setPrototypeOf?(Object.setPrototypeOf(t.prototype,Error.prototype),Object.setPrototypeOf(t,Error)):r.inherits(t,Error),t};i.append=function(e,n){return{message:function(t,r){return(t=t||n)&&(r[0]+=" "+e.replace("%s",t.toString())),r}}},i.line=function(e,n){return{line:function(t){return(t=t||n)?e.replace("%s",t.toString()):null}}},e.exports=i},27:e=>{class n extends SyntaxError{constructor(e,n,t,r){const o=((e,n,t)=>{if(!n)return{message:e.message+" while parsing empty string",position:0};const r=e.message.match(/^Unexpected token (.) .*position\s+(\d+)/i),o=r?+r[2]:e.message.match(/^Unexpected end of JSON.*/i)?n.length-1:null,i=r?e.message.replace(/^Unexpected token ./,`Unexpected token ${JSON.stringify(r[1])} (${(e=>{const n=e.charCodeAt(0).toString(16).toUpperCase();return"0x"+(n.length%2?"0":"")+n})(r[1])})`):e.message;if(null!==o&&void 0!==o){const e=o<=t?0:o-t,r=o+t>=n.length?n.length:o+t,c=(0===e?"":"...")+n.slice(e,r)+(r===n.length?"":"...");return{message:i+` while parsing ${n===c?"":"near "}${JSON.stringify(c)}`,position:o}}return{message:i+` while parsing '${n.slice(0,2*t)}'`,position:0}})(e,n,t=t||20);super(o.message),Object.assign(this,o),this.code="EJSONPARSE",this.systemError=e,Error.captureStackTrace(this,r||this.constructor)}get name(){return this.constructor.name}set name(e){}get[Symbol.toStringTag](){return this.constructor.name}}const t=Symbol.for("indent"),r=Symbol.for("newline"),o=/^\s*[{[]((?:\r?\n)+)([\s\t]*)/,i=/^(?:\{\}|\[\])((?:\r?\n)+)?$/,c=(e,s,l)=>{const d=a(e);l=l||20;try{const[,e="\n",n="  "]=d.match(i)||d.match(o)||[null,"",""],c=JSON.parse(d,s);return c&&"object"===typeof c&&(c[r]=e,c[t]=n),c}catch(t){if("string"!==typeof e&&!Buffer.isBuffer(e)){const n=Array.isArray(e)&&0===e.length;throw Object.assign(new TypeError(`Cannot parse ${n?"an empty array":String(e)}`),{code:"EJSONPARSE",systemError:t})}throw new n(t,d,l,c)}},a=e=>String(e).replace(/^\uFEFF/,"");e.exports=c,c.JSONParseError=n,c.noExceptions=(e,n)=>{try{return JSON.parse(a(e),n)}catch(e){}}},24:(e,n,t)=>{t.d(n,{a:()=>a,b:()=>c});var r=t(25),o=t(3),i=t(5);const c=({type:e="button",onClick:n,children:t,className:c,...a})=>{const s=(0,o.a)([r.a.btn,c]);return(0,i.c)("button",{type:e,onClick:n,className:s,...a,children:t})},a=({children:e,className:n,...t})=>{const c=(0,o.a)([r.a.blank,n]);return(0,i.c)("button",{type:"button",className:c,...t,children:e})}},30:(e,n,t)=>{t.d(n,{a:()=>a});var r=t(39),o=t(31);const i=/^every (\d+ )?(second|minute)s?\b/i,c=e=>[!0,e],a=e=>{try{const n=(0,o.toString)(e,{use24HourTimeFormat:!0});return i.test(n)?c(`${n}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?c(`${n}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?c(`${n}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):(0,r.a)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,n]:c(`${n}.\n\nError: Velo Job Scheduler does not support this syntax.`)}catch(e){return c(String(e))}}},32:(e,n,t)=>{t.d(n,{a:()=>o});var r=t(5);const o=()=>(0,r.c)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,r.c)("path",{stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},42:(e,n,t)=>{t.d(n,{a:()=>j});var r=t(5);const o=({index:e,name:n,expected:t})=>(0,r.c)("p",{children:`Incorrect type of property "${n}" at "jobs[${e}]". Expected "${t}"`});var i=t(12),c=t(11),a=t(8),s=t(3),l=t(0),d=t(30);const h=[l.a.functionLocation,l.a.functionName,l.a.executionConfig],u=[...h,l.a.description],p=[l.a.dayOfWeek,l.a.dateInMonth],f=[...p,l.a.time],m=[...f,l.a.cronExpression],g=e=>"object"===typeof e&&!Array.isArray(e)&&null!==e,b=e=>[!0,e],y=(e,n)=>{for(const t in e)if(!n.includes(t))return[!0,t];return[!1]},v=(e,n)=>{for(const t of n)if(!(t in e))return[!0,t];return[!1]},j=e=>{const n='", "';if(!g(e))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:'Incorrect type. Expected "object"'}),(0,r.c)("p",{children:"The jobs.config file must contains a JSON object"})]}));if(!(l.a.jobs in e))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:'Missing property "jobs"'}),(0,r.c)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}));const t=Object.keys(e);if(t.length>1){const e=t.filter((e=>e!==l.a.jobs)).join(n);return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Unknown property "${e}"`}),(0,r.c)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}))}if(!Array.isArray(e.jobs))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:'Incorrect type. Expected "array"'}),(0,r.c)("p",{children:'The top-level key "jobs" must be an array'})]}));const{jobs:j}=e;let x=j.length;if(x>l.c)return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Too many scheduled jobs. (${x})`}),(0,r.c)("p",{children:"You can configure up to 20 jobs"})]}));if(x<1)return b((0,r.c)("p",{children:"No scheduled jobs"}));if(!j.every(g))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:'Incorrect type. Expected "object"'}),(0,r.c)("p",{children:'The "jobs" array must contain only objects, each of which represents a scheduled job'})]}));for(;0<x--;){const e=j[x],[t,w]=y(e,u);if(t)return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Unknown property "${w}" at "jobs[${x}]"`}),(0,r.c)("p",{children:`Allowed one of "${u.join(n)}"`})]}));const[k,N]=v(e,h);if(k)return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Missing property "${N}" at "jobs[${x}]"`}),(0,r.c)("p",{children:`Each scheduled job object must contain the required fields "${h.join(n)}"`})]}));if(l.a.description in e&&!(0,s.b)(e.description))return b((0,r.c)(o,{index:x,name:l.a.description,expected:"string"}));const{functionLocation:O}=e;if(!(0,s.b)(O))return b((0,r.c)(o,{index:x,name:l.a.functionLocation,expected:"string"}));if(!(0,a.c)(O))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Invalid "functionLocation" at "jobs[${x}]"`}),(0,r.b)("p",{children:["The function location is a relative path within the Backend folder for ",(0,r.c)("code",{children:".js"})," or ",(0,r.c)("code",{children:".jsw"})," file."]}),(0,r.c)("p",{children:"File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period"})]}));const{functionName:$}=e;if(!(0,s.b)($))return b((0,r.c)(o,{index:x,name:l.a.functionName,expected:"string"}));if(!(0,a.d)($)){const e=c.a.has($)?`reserved word "${$}"`:`token "${$}"`;return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Invalid "functionName" at "jobs[${x}]"`}),(0,r.c)("p",{children:`Error: Unexpected ${e}`})]}))}const{executionConfig:E}=e;if(!g(E))return b((0,r.c)(o,{index:x,name:l.a.executionConfig,expected:"object"}));const[C,S]=y(E,m);if(C)return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Unknown property "${S}" in "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:`Allowed one of "${m.join(n)}"`})]}));if(l.a.cronExpression in E){const{cronExpression:e}=E;if(!(0,s.b)(e))return b((0,r.c)(o,{index:x,name:l.a.cronExpression,expected:"string"}));const[n,t]=(0,d.a)(e);if(n)return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Invalid "cronExpression" at "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:t})]}))}else{if(!(l.a.time in E))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Missing the time of the job runs at "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:'The "executionConfig" object must contain one of "time", "cronExpression" properties'})]}));{const{time:e}=E;if(!(0,s.b)(e))return b((0,r.c)(o,{index:x,name:l.a.time,expected:"string"}));if(!(0,a.b)(e))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Invalid "time" at "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:`Error: "${e}". The time is specified as UTC time in HH:MM format`})]}))}}if(l.a.dayOfWeek in E){const{dayOfWeek:e}=E;if(!(0,s.b)(e))return b((0,r.c)(o,{index:x,name:l.a.dayOfWeek,expected:"string"}));if(!i.a.some((n=>n===e)))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Incorrect value of "dayOfWeek" at "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:`Error: unknown value "${e}". Allowed one of "${i.a.join(n)}"`})]}))}if(l.a.dateInMonth in E){const{dateInMonth:e}=E;if(!Number.isInteger(e))return b((0,r.c)(o,{index:x,name:l.a.dateInMonth,expected:"number"}));if(e<1||e>31)return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Invalid "dateInMonth" at "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:'The value of the "dateInMonth" property must be a number between 1 and 31'})]}))}if(l.a.cronExpression in E&&f.some((e=>e in E)))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Mutual exclusion property at "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:`Error: "cronExpression" omit all of "${f.join(n)}" properties`}),(0,r.c)("p",{children:(0,r.c)("em",{children:'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression'})})]}));if(p.every((e=>e in E)))return b((0,r.b)(r.a,{children:[(0,r.c)("p",{children:`Mutual exclusion property at "jobs[${x}].executionConfig"`}),(0,r.c)("p",{children:'Error: "dateInMonth" omit the "dayOfWeek" property'})]}))}return[!1]}},40:(e,n,t)=>{t.d(n,{a:()=>f});const r=Symbol("singleComment"),o=Symbol("multiComment"),i=()=>"",c=(e,n,t)=>e.slice(n,t).replace(/\S/g," "),a=(e,n)=>{let t=n-1,r=0;for(;"\\"===e[t];)t-=1,r+=1;return Boolean(r%2)};var s=t(26),l=t(27),d=t(33),h=function(){function e(e){this.length=e.length;for(var n=[0],t=0;t<e.length;)switch(e[t]){case"\n":n.push(t+=1);break;case"\r":"\n"===e[t+=1]&&(t+=1),n.push(t);break;default:t++}this.offsets=n}return e.prototype.locationForIndex=function(e){if(e<0||e>this.length)return null;for(var n=0,t=this.offsets;t[n+1]<=e;)n++;return{line:n,column:e-t[n]}},e.prototype.indexForLocation=function(e){var n=e.line,t=e.column;return n<0||n>=this.offsets.length||t<0||t>this.lengthOfLine(n)?null:this.offsets[n]+t},e.prototype.lengthOfLine=function(e){return(e===this.offsets.length-1?this.length:this.offsets[e+1])-this.offsets[e]},e}();const u=s("JSONError",{fileName:s.append("in %s"),codeFrame:s.append("\n\n%s\n")});function p(e,n,t){"string"===typeof n&&(t=n,n=null);try{try{return JSON.parse(e,n)}catch(t){throw l(e,n),t}}catch(n){n.message=n.message.replace(/\n/g,"");const r=n.message.match(/in JSON at position (\d+) while parsing/),o=new u(n);if(t&&(o.fileName=t),r&&r.length>0){const n=new h(e),t=Number(r[1]),i=n.locationForIndex(t),c=({highlightCode:n})=>(0,d.a)(e,{start:{line:i.line+1,column:i.column+1}},{highlightCode:n});o.codeFrame=c({highlightCode:!0}),o.rawCodeFrame=c({highlightCode:!1})}throw o}}const f=e=>{try{return[null,p(function(e,{whitespace:n=!0,trailingCommas:t=!1}={}){if("string"!==typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const s=n?c:i;let l=!1,d=!1,h=0,u="",p="",f=-1;for(let n=0;n<e.length;n++){const i=e[n],c=e[n+1];if(d||'"'!==i||a(e,n)||(l=!l),!l)if(d||i+c!=="//"){if(d===r&&i+c==="\r\n"){n++,d=!1,u+=s(e,h,n),h=n;continue}if(d===r&&"\n"===i)d=!1,u+=s(e,h,n),h=n;else{if(!d&&i+c==="/*"){u+=e.slice(h,n),h=n,d=o,n++;continue}if(d===o&&i+c==="*/"){n++,d=!1,u+=s(e,h,n+1),h=n+1;continue}t&&!d&&(-1!==f?"}"===i||"]"===i?(u+=e.slice(h,n),p+=s(u,0,1)+u.slice(1),u="",h=n,f=-1):" "!==i&&"\t"!==i&&"\r"!==i&&"\n"!==i&&(u+=e.slice(h,n),h=n,f=-1):","===i&&(p+=u+e.slice(h,n),u="",h=n,f=n))}}else u+=e.slice(h,n),h=n,d=r,n++}return p+u+(d?s(e.slice(h)):e.slice(h))}(e))]}catch(e){return[String(e)]}}},44:(e,n,t)=>{t.d(n,{a:()=>o});var r=t(5);const o=({onInput:e,value:n})=>(0,r.c)("textarea",{onInput:e,className:"S",value:n,placeholder:"{}",spellcheck:!1})},43:(e,n,t)=>{t.d(n,{a:()=>c});var r=t(3),o=t(32),i=t(5);const c=({className:e,onLoad:n})=>(0,i.b)("label",{className:(0,r.a)(["P",e]),"aria-label":"Upload your file","data-rh":"Upload your file","data-rh-at":"left",children:[(0,i.c)("input",{type:"file",className:"Q",onChange:e=>{var t;(t=e.target.files,new Promise(((e,n)=>{if(t?.length){const o=new FileReader;o.onload=()=>{(0,r.b)(o.result)?e(o.result):n()},o.onerror=n,o.readAsText(t[0])}else n()}))).then(n)}}),(0,i.c)(o.a,{})]})},48:(e,n,t)=>{t.r(n),t.d(n,{UploadModal:()=>j});var r=t(1),o=t(6),i=t(3),c=t(40),a=t(42),s=t(7),l=t(0),d=t(34),h=t.n(d),u=t(5);const p=h();h().setAppElement("#app");const f=({close:e,label:n,children:t})=>(0,u.c)(p,{isOpen:!0,onRequestClose:e,contentLabel:n,overlayClassName:"Y",className:"aa",bodyOpenClassName:"Z",htmlOpenClassName:"_",children:t});var m=t(44),g=t(24),b=t(43);const y=()=>(0,u.c)("svg",{fill:"currentcolor",width:"12",height:"12",viewBox:"0 0 8 8","aria-hidden":"true",children:(0,u.c)("path",{d:"M7.2 0 4 3.2.8 0 .1.7 3.3 4 0 7.3l.7.7L4 4.7 7.3 8l.7-.7L4.7 4 7.9.7z"})}),v=()=>{location.hash=l.e.BUILDER},j=()=>{const e=(0,r.k)(""),n=(0,o.c)(),t=e=>{if(""===e.trim())return v();const[t,r]=(0,c.a)(e);if(!t){const[e]=(0,a.a)(r);if(!e)return n.dispatch("items/replace",(0,s.b)(r)),v()}n.dispatch("validator/input",e),location.hash=l.e.VALIDATOR};return(0,u.c)(f,{label:"Upload form",close:v,children:(0,u.b)("form",{onSubmit:n=>{(0,i.c)(n),t(e.current)},className:"ba",children:[(0,u.c)(g.a,{onClick:v,className:"ca","aria-label":"close modal",children:(0,u.c)(y,{})}),(0,u.c)("h2",{children:"Upload your config"}),(0,u.b)("div",{className:"ea",children:[(0,u.c)(b.a,{className:"fa",onLoad:t}),(0,u.c)(m.a,{onInput:n=>{e.current=n.target.value}})]}),(0,u.b)("div",{className:"da",children:[(0,u.c)(g.b,{type:"submit",children:"Upload Config"}),(0,u.c)(g.b,{onClick:v,children:"Cancel"})]})]})})}},19:(e,n,t)=>{t.r(n),t.d(n,{ValidatorPage:()=>j});var r=t(6),o=t(3),i=t(40),c=t(42),a=t(0),s=t(5);const l=({children:e,error:n=!1})=>(0,s.c)("div",{className:"ga",children:(0,s.c)("pre",{className:n?"ia ha":"ja ha",children:e})});var d=t(24),h=t(7);const u=({config:e})=>{const n=(0,r.c)();return(0,s.c)(d.b,{onClick:()=>{n.dispatch("items/replace",(0,h.b)(e)),location.hash=a.e.BUILDER},children:"Edit Config"})},p=({value:e})=>{if(""===e.trim())return(0,s.c)(l,{children:"No input"});if(e.length>a.f)return(0,s.c)(l,{error:!0,children:"The file size is too large for the jobs.config."});const[n,t]=(0,i.a)(e);if(null!==n)return(0,s.c)(l,{error:!0,children:n});const[r,o]=(0,c.a)(t);return r?(0,s.c)(l,{error:!0,children:o}):(0,s.b)(l,{children:[(0,s.c)("p",{children:"Valid jobs.config"}),(0,s.c)(u,{config:t})]})};var f=t(1),m=t(9);const g=()=>(0,s.c)("svg",{fill:"currentcolor",width:"24",height:"24",viewBox:"0 0 18 18","aria-hidden":"true",children:(0,s.c)("path",{d:"M10.997 7a.5.5 0 010 .707L7.707 11A.5.5 0 017 10.293L10.29 7a.5.5 0 01.707 0zm-1.145 5.852l-1.137 1.123A3.336 3.336 0 014 13.978a3.325 3.325 0 01-.006-4.701L4 9.27l1.142-1.122a.499.499 0 01.706.006v.001a.501.501 0 01-.007.708L4.706 9.978a2.326 2.326 0 000 3.292c.913.91 2.39.91 3.302-.002l1.131-1.119a.506.506 0 01.712 0 .494.494 0 01.005.698l-.004.005zM8.16 5.114l1.124-1.095a3.334 3.334 0 014.737.039 3.378 3.378 0 01-.068 4.762l-1.086 1.033a.516.516 0 01-.72-.008.485.485 0 01.008-.697l1.1-1.044c.938-.912.87-2.5.049-3.35-.811-.838-2.404-.935-3.314-.027L8.827 5.86a.479.479 0 01-.692-.024.523.523 0 01.026-.723z"})}),b=({className:e})=>{const n=(0,r.c)(),[t,o]=(0,f.l)(!1),i=t?"Copied!":"Copy link to validation results";return(0,s.c)(d.a,{onClick:async()=>{const{validatorValue:e}=n.get(),t=(0,m.a)(e);t&&(history.pushState(null,"",t),await navigator.clipboard.writeText(t),o(!0),setTimeout(o,2e3,!1))},className:e,"aria-label":i,"data-rh":i,"data-rh-at":"left",children:(0,s.c)(g,{})})};var y=t(43),v=t(44);const j=()=>{const{validatorValue:e,dispatch:n}=(0,r.b)("validatorValue");return(0,s.c)("section",{className:"J",children:(0,s.b)("div",{className:"L",children:[(0,s.c)("h2",{className:"K",children:"Jobs Config Validator"}),(0,s.b)("form",{action:"#",onSubmit:o.c,className:"M",children:[(0,s.c)(v.a,{onInput:e=>{n("validator/input",e.target.value)},value:e}),(0,s.b)("aside",{className:"N",children:[(0,s.c)(b,{className:"O"}),(0,s.c)(y.a,{className:"O",onLoad:e=>{n("validator/input",e)}})]})]}),(0,s.c)(p,{value:e})]})})}},25:(e,n,t)=>{t.d(n,{a:()=>r});const r={base:"V",btn:"W V",blank:"X V"}},41:()=>{},33:(e,n,t)=>{n.a=function(e,n,t={}){const i=(t.highlightCode||t.forceColor)&&(0,r.shouldHighlight)(t),s=t.forceColor?(null!=c||(c=new o.default.constructor({enabled:!0,level:1})),c):o.default,l=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(s),d=(e,n)=>i?e(n):n,h=e.split(a),{start:u,end:p,markerLines:f}=function(e,n,t){const r=Object.assign({column:0,line:-1},e.start),o=Object.assign({},r,e.end),{linesAbove:i=2,linesBelow:c=3}=t||{},a=r.line,s=r.column,l=o.line,d=o.column;let h=Math.max(a-(i+1),0),u=Math.min(n.length,l+c);-1===a&&(h=0),-1===l&&(u=n.length);const p=l-a,f={};if(p)for(let e=0;e<=p;e++){const t=e+a;f[t]=!s||(0===e?[s,n[t-1].length-s+1]:e===p?[0,d]:[0,n[t-e].length])}else f[a]=s===d?!s||[s,0]:[s,d-s];return{start:h,end:u,markerLines:f}}(n,h,t),m=n.start&&"number"===typeof n.start.column,g=String(p).length;let b=(i?(0,r.default)(e,t):e).split(a,p).slice(u,p).map(((e,n)=>{const r=u+1+n,o=` ${` ${r}`.slice(-g)} |`,i=f[r],c=!f[r+1];if(i){let n="";if(Array.isArray(i)){const r=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\t]/g," "),a=i[1]||1;n=["\n ",d(l.gutter,o.replace(/\d/g," "))," ",r,d(l.marker,"^").repeat(a)].join(""),c&&t.message&&(n+=" "+d(l.message,t.message))}return[d(l.marker,">"),d(l.gutter,o),e.length>0?` ${e}`:"",n].join("")}return` ${d(l.gutter,o)}${e.length>0?` ${e}`:""}`})).join("\n");return t.message&&!m&&(b=`${" ".repeat(g+1)}${t.message}\n${b}`),i?s.reset(b):b};var r=t(14),o=function(e,n){if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i(!0);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var a=o?Object.getOwnPropertyDescriptor(e,c):null;a&&(a.get||a.set)?Object.defineProperty(r,c,a):r[c]=e[c]}return r.default=e,t&&t.set(e,r),r}(t(15));function i(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:n})(e)}let c;const a=/\r\n|[\n\r\u2028\u2029]/}};