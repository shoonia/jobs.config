(self.g=self.g||[]).push([[643],{4155:(e,t,n)=>{var r=n(754),o=n(3789),i=function(e,t){e&&e.constructor===String||(t=e||{},e=Error.name);var n=function r(i){if(!this)return new r(i);i=i instanceof Error?i.message:i||this.message,Error.call(this,i),Error.captureStackTrace(this,n),this.name=e,Object.defineProperty(this,"message",{configurable:!0,enumerable:!1,get:function(){var e=i.split(/\r?\n/g);for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];"message"in r&&(e=r.message(this[n],e)||e,o(e)||(e=[e]))}return e.join("\n")},set:function(e){i=e}});var s=null,a=Object.getOwnPropertyDescriptor(this,"stack"),c=a.get,l=a.value;delete a.value,delete a.writable,a.set=function(e){s=e},a.get=function(){var e=(s||(c?c.call(this):l)).split(/\r?\n+/g);s||(e[0]=this.name+": "+this.message);var n=1;for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];if("line"in o){var i=o.line(this[r]);i&&e.splice(n++,0,"    "+i)}"stack"in o&&o.stack(this[r],e)}return e.join("\n")},Object.defineProperty(this,"stack",a)};return Object.setPrototypeOf?(Object.setPrototypeOf(n.prototype,Error.prototype),Object.setPrototypeOf(n,Error)):r.inherits(n,Error),n};i.append=function(e,t){return{message:function(n,r){return(n=n||t)&&(r[0]+=" "+e.replace("%s",n.toString())),r}}},i.line=function(e,t){return{line:function(n){return(n=n||t)?e.replace("%s",n.toString()):null}}},e.exports=i},3789:e=>{e.exports=function(e){return!!e&&(e instanceof Array||Array.isArray(e)||e.length>=0&&e.splice instanceof Function)}},8135:e=>{class t extends SyntaxError{constructor(e,t,n,r){const o=((e,t,n)=>{if(!t)return{message:e.message+" while parsing empty string",position:0};const r=e.message.match(/^Unexpected token (.) .*position\s+(\d+)/i),o=r?+r[2]:e.message.match(/^Unexpected end of JSON.*/i)?t.length-1:null,i=r?e.message.replace(/^Unexpected token ./,`Unexpected token ${JSON.stringify(r[1])} (${(e=>{const t=e.charCodeAt(0).toString(16).toUpperCase();return"0x"+(t.length%2?"0":"")+t})(r[1])})`):e.message;if(null!==o&&void 0!==o){const e=o<=n?0:o-n,r=o+n>=t.length?t.length:o+n,s=(0===e?"":"...")+t.slice(e,r)+(r===t.length?"":"...");return{message:i+` while parsing ${t===s?"":"near "}${JSON.stringify(s)}`,position:o}}return{message:i+` while parsing '${t.slice(0,2*n)}'`,position:0}})(e,t,n=n||20);super(o.message),Object.assign(this,o),this.code="EJSONPARSE",this.systemError=e,Error.captureStackTrace(this,r||this.constructor)}get name(){return this.constructor.name}set name(e){}get[Symbol.toStringTag](){return this.constructor.name}}const n=Symbol.for("indent"),r=Symbol.for("newline"),o=/^\s*[{\[]((?:\r?\n)+)([\s\t]*)/,i=/^(?:\{\}|\[\])((?:\r?\n)+)?$/,s=(e,c,l)=>{const h=a(e);l=l||20;try{const[,e="\n",t="  "]=h.match(i)||h.match(o)||[,"",""],s=JSON.parse(h,c);return s&&"object"===typeof s&&(s[r]=e,s[n]=t),s}catch(n){if("string"!==typeof e&&!Buffer.isBuffer(e)){const t=Array.isArray(e)&&0===e.length;throw Object.assign(new TypeError(`Cannot parse ${t?"an empty array":String(e)}`),{code:"EJSONPARSE",systemError:n})}throw new t(n,h,l,s)}},a=e=>String(e).replace(/^\uFEFF/,"");e.exports=s,s.JSONParseError=t,s.noExceptions=(e,t)=>{try{return JSON.parse(a(e),t)}catch(e){}}},1330:(e,t,n)=>{n.d(t,{T:()=>a,z:()=>s});var r=n(1621),o=n(484),i=n(6260);const s=({type:e="button",onClick:t,children:n,className:s,...a})=>{const c=(0,o.AK)([r.Z.btn,s]);return(0,i.tZ)("button",{type:e,onClick:t,className:c,...a,children:n})},a=({children:e,className:t,...n})=>{const s=(0,o.AK)([r.Z.blank,t]);return(0,i.tZ)("button",{type:"button",className:s,...n,children:e})}},8001:(e,t,n)=>{n.d(t,{_:()=>a});var r=n(8056),o=n(7423);const i=/^every (\d+ )?(second|minute)s?\b/i,s=e=>[!0,e],a=e=>{try{const t=(0,o.toString)(e,{use24HourTimeFormat:!0});return i.test(t)?s(`${t}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?s(`${t}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?s(`${t}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):(0,r.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,t]:s(`${t}.\n\nError: Velo Job Scheduler does not support this syntax.`)}catch(e){return s(String(e))}}},6517:(e,t,n)=>{n.d(t,{b:()=>o});var r=n(6260);const o=()=>(0,r.tZ)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,r.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},862:(e,t,n)=>{n.d(t,{k:()=>Z});var r=n(6260);const o=({index:e,name:t,expected:n})=>(0,r.tZ)("p",{children:`Incorrect type of property "${t}" at "jobs[${e}]". Expected "${n}"`});var i=n(6705),s=n(2256),a=n(5073),c=n(484),l=n(7428),h=n(8001);const d=[l.tW.functionLocation,l.tW.functionName,l.tW.executionConfig],u=[...d,l.tW.description],p=[l.tW.dayOfWeek,l.tW.dateInMonth],f=[...p,l.tW.time],m=[...f,l.tW.cronExpression],g=e=>[!0,e],b=(e,t)=>{for(const n in e)if(!t.includes(n))return[!0,n];return[!1]},y=(e,t)=>{for(const n of t)if(!(n in e))return[!0,n];return[!1]},Z=e=>{const t='", "';if(!(0,c.Kn)(e))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:'Incorrect type. Expected "object"'}),(0,r.tZ)("p",{children:"The jobs.config file must contains a JSON object"})]}));if(!(l.tW.jobs in e))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:'Missing property "jobs"'}),(0,r.tZ)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}));const n=Object.keys(e);if(n.length>1){const e=n.filter((e=>e!==l.tW.jobs)).join(t);return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Unknown property "${e}"`}),(0,r.tZ)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}))}if(!Array.isArray(e.jobs))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:'Incorrect type. Expected "array"'}),(0,r.tZ)("p",{children:'The top-level key "jobs" must be an array'})]}));const{jobs:Z}=e;let v=Z.length;if(v>l.aA)return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Too many scheduled jobs. (${v})`}),(0,r.tZ)("p",{children:"You can configure up to 20 jobs"})]}));if(v<1)return g((0,r.tZ)("p",{children:"No scheduled jobs"}));if(!Z.every(c.Kn))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:'Incorrect type. Expected "object"'}),(0,r.tZ)("p",{children:'The "jobs" array must contain only objects, each of which represents a scheduled job'})]}));for(;0<v--;){const e=Z[v],[n,j]=b(e,u);if(n)return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Unknown property "${j}" at "jobs[${v}]"`}),(0,r.tZ)("p",{children:`Allowed one of "${u.join(t)}"`})]}));const[x,k]=y(e,d);if(x)return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Missing property "${k}" at "jobs[${v}]"`}),(0,r.tZ)("p",{children:`Each scheduled job object must contain the required fields "${d.join(t)}"`})]}));if(l.tW.description in e&&!(0,c.HD)(e.description))return g((0,r.tZ)(o,{index:v,name:l.tW.description,expected:"string"}));const{functionLocation:w}=e;if(!(0,c.HD)(w))return g((0,r.tZ)(o,{index:v,name:l.tW.functionLocation,expected:"string"}));if(!(0,a.QL)(w))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Invalid "functionLocation" at "jobs[${v}]"`}),(0,r.BX)("p",{children:["The function location is a relative path within the Backend folder for ",(0,r.tZ)("code",{children:".js"})," or ",(0,r.tZ)("code",{children:".jsw"})," file."]}),(0,r.tZ)("p",{children:"File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period"})]}));const{functionName:N}=e;if(!(0,c.HD)(N))return g((0,r.tZ)(o,{index:v,name:l.tW.functionName,expected:"string"}));if(!(0,a.c3)(N)){const e=s.h.has(N)?`reserved word "${N}"`:`token "${N}"`;return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Invalid "functionName" at "jobs[${v}]"`}),(0,r.tZ)("p",{children:`Error: Unexpected ${e}`})]}))}const{executionConfig:$}=e;if(!(0,c.Kn)($))return g((0,r.tZ)(o,{index:v,name:l.tW.executionConfig,expected:"object"}));const[E,C]=b($,m);if(E)return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Unknown property "${C}" in "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:`Allowed one of "${m.join(t)}"`})]}));if(l.tW.cronExpression in $){const{cronExpression:e}=$;if(!(0,c.HD)(e))return g((0,r.tZ)(o,{index:v,name:l.tW.cronExpression,expected:"string"}));const[t,n]=(0,h._)(e);if(t)return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Invalid "cronExpression" at "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:n})]}))}else{if(!(l.tW.time in $))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Missing the time of the job runs at "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:'The "executionConfig" object must contain one of "time", "cronExpression" properties'})]}));{const{time:e}=$;if(!(0,c.HD)(e))return g((0,r.tZ)(o,{index:v,name:l.tW.time,expected:"string"}));if(!(0,a.CO)(e))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Invalid "time" at "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:`Error: "${e}". The time is specified as UTC time in HH:MM format`})]}))}}if(l.tW.dayOfWeek in $){const{dayOfWeek:e}=$;if(!(0,c.HD)(e))return g((0,r.tZ)(o,{index:v,name:l.tW.dayOfWeek,expected:"string"}));if(!i.N.some((t=>t===e)))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Incorrect value of "dayOfWeek" at "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:`Error: unknown value "${e}". Allowed one of "${i.N.join(t)}"`})]}))}if(l.tW.dateInMonth in $){const{dateInMonth:e}=$;if(!(0,c.hj)(e))return g((0,r.tZ)(o,{index:v,name:l.tW.dateInMonth,expected:"number"}));if(!Number.isInteger(e)||e<1||e>31)return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Invalid "dateInMonth" at "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:'The value of the "dateInMonth" property must be a number between 1 and 31'})]}))}if(l.tW.cronExpression in $&&f.some((e=>e in $)))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Mutual exclusion property at "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:`Error: "cronExpression" omit all of "${f.join(t)}" properties`}),(0,r.tZ)("p",{children:(0,r.tZ)("em",{children:'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression'})})]}));if(p.every((e=>e in $)))return g((0,r.BX)(r.HY,{children:[(0,r.tZ)("p",{children:`Mutual exclusion property at "jobs[${v}].executionConfig"`}),(0,r.tZ)("p",{children:'Error: "dateInMonth" omit the "dayOfWeek" property'})]}))}return[!1]}},1585:(e,t,n)=>{n.d(t,{D:()=>g});const r=Symbol("singleComment"),o=Symbol("multiComment"),i=()=>"",s=(e,t,n)=>e.slice(t,n).replace(/\S/g," "),a=(e,t)=>{let n=t-1,r=0;for(;"\\"===e[n];)n-=1,r+=1;return Boolean(r%2)};var c=n(4155),l=n(8135),h=n(18),d="\n",u="\r",p=function(){function e(e){this.length=e.length;for(var t=[0],n=0;n<e.length;)switch(e[n]){case d:t.push(n+=d.length);break;case u:e[n+=u.length]===d&&(n+=d.length),t.push(n);break;default:n++}this.offsets=t}return e.prototype.locationForIndex=function(e){if(e<0||e>this.length)return null;for(var t=0,n=this.offsets;n[t+1]<=e;)t++;return{line:t,column:e-n[t]}},e.prototype.indexForLocation=function(e){var t=e.line,n=e.column;return t<0||t>=this.offsets.length||n<0||n>this.lengthOfLine(t)?null:this.offsets[t]+n},e.prototype.lengthOfLine=function(e){return(e===this.offsets.length-1?this.length:this.offsets[e+1])-this.offsets[e]},e}();const f=c("JSONError",{fileName:c.append("in %s"),codeFrame:c.append("\n\n%s\n")});function m(e,t,n){"string"===typeof t&&(n=t,t=null);try{try{return JSON.parse(e,t)}catch(n){throw l(e,t),n}}catch(t){t.message=t.message.replace(/\n/g,"");const r=t.message.match(/in JSON at position (\d+) while parsing/),o=new f(t);if(n&&(o.fileName=n),r&&r.length>0){const t=new p(e),n=Number(r[1]),i=t.locationForIndex(n),s=(0,h.rf)(e,{start:{line:i.line+1,column:i.column+1}},{highlightCode:!0});o.codeFrame=s}throw o}}const g=e=>{try{return[null,m(function(e,{whitespace:t=!0,trailingCommas:n=!1}={}){if("string"!==typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const c=t?s:i;let l=!1,h=!1,d=0,u="",p="",f=-1;for(let t=0;t<e.length;t++){const i=e[t],s=e[t+1];if(h||'"'!==i||a(e,t)||(l=!l),!l)if(h||i+s!=="//"){if(h===r&&i+s==="\r\n"){t++,h=!1,u+=c(e,d,t),d=t;continue}if(h===r&&"\n"===i)h=!1,u+=c(e,d,t),d=t;else{if(!h&&i+s==="/*"){u+=e.slice(d,t),d=t,h=o,t++;continue}if(h===o&&i+s==="*/"){t++,h=!1,u+=c(e,d,t+1),d=t+1;continue}n&&!h&&(-1!==f?"}"===i||"]"===i?(u+=e.slice(d,t),p+=c(u,0,1)+u.slice(1),u="",d=t,f=-1):" "!==i&&"\t"!==i&&"\r"!==i&&"\n"!==i&&(u+=e.slice(d,t),d=t,f=-1):","===i&&(p+=u+e.slice(d,t),u="",d=t,f=t))}}else u+=e.slice(d,t),d=t,h=r,t++}return p+u+(h?c(e.slice(d)):e.slice(d))}(e))]}catch(e){return[String(e)]}}},6005:(e,t,n)=>{n.d(t,{z:()=>o});var r=n(6260);const o=({onInput:e,value:t})=>(0,r.tZ)("textarea",{onInput:e,className:"ga",value:t,placeholder:"{}",spellcheck:!1})},1313:(e,t,n)=>{n.d(t,{G:()=>s});var r=n(484),o=n(6517),i=n(6260);const s=({className:e,onLoad:t})=>(0,i.BX)("label",{className:(0,r.AK)(["P",e]),"aria-label":"Upload your file","data-rh":"Upload your file","data-rh-at":"left",children:[(0,i.tZ)("input",{type:"file",className:"Q",onChange:e=>{var n;(n=e.target.files,new Promise(((e,t)=>{if(n?.length){const o=new FileReader;o.onload=()=>{(0,r.HD)(o.result)?e(o.result):t()},o.onerror=t,o.readAsText(n[0])}else t()}))).then(t)}}),(0,i.tZ)(o.b,{})]})},3763:(e,t,n)=>{n.r(t),n.d(t,{UploadModal:()=>y});var r=n(804),o=n(828),i=n(484),s=n(1585),a=n(862),c=n(4664),l=n(7428),h=n(8685),d=n.n(h),u=n(6260);d().setAppElement("#app");const p=({close:e,label:t,children:n})=>(0,u.tZ)(d(),{isOpen:!0,onRequestClose:e,contentLabel:t,overlayClassName:"Ra",className:"Ua",bodyOpenClassName:"Sa",htmlOpenClassName:"Ta",children:n});var f=n(6005),m=n(1330),g=n(1313);const b=()=>(0,u.tZ)("svg",{fill:"currentColor",width:"12",height:"12",viewBox:"0 0 8 8","aria-hidden":"true",children:(0,u.tZ)("path",{d:"M7.2 0 4 3.2.8 0 .1.7 3.3 4 0 7.3l.7.7L4 4.7 7.3 8l.7-.7L4.7 4 7.9.7z"})}),y=()=>{const e=(0,r.sO)(""),{dispatch:t}=(0,o.b)(),n=()=>{location.hash=l.Yj.BUILDER},h=e=>{if(""===e.trim())return n();const[r,o]=(0,s.D)(e);if(!r){const[e]=(0,a.k)(o);if(!e)return t("items/replace",(0,c.Ze)(o)),n()}t("validator/input",e),location.hash=l.Yj.VALIDATOR};return(0,u.tZ)(p,{label:"Upload form",close:n,children:(0,u.BX)("form",{onSubmit:t=>{(0,i.PF)(t),h(e.current)},className:"ra",children:[(0,u.tZ)(m.T,{onClick:n,className:"sa","aria-label":"close modal",children:(0,u.tZ)(b,{})}),(0,u.tZ)("h2",{children:"Upload your config"}),(0,u.BX)("div",{className:"ua",children:[(0,u.tZ)(g.G,{className:"va",onLoad:h}),(0,u.tZ)(f.z,{onInput:t=>{e.current=t.target.value}})]}),(0,u.BX)("div",{className:"ta",children:[(0,u.tZ)(m.z,{type:"submit",children:"Upload Config"}),(0,u.tZ)(m.z,{onClick:n,children:"Cancel"})]})]})})}},8309:(e,t,n)=>{n.r(t),n.d(t,{ValidatorPage:()=>v});var r=n(828),o=n(484),i=n(1585),s=n(862),a=n(7428),c=n(6260);const l=({children:e,error:t=!1})=>(0,c.tZ)("div",{className:"ma",children:(0,c.tZ)("pre",{className:t?"oa na":"pa na",children:e})});var h=n(1330),d=n(4664);const u=({config:e})=>{const{dispatch:t}=(0,r.b)();return(0,c.tZ)(h.z,{onClick:()=>{t("items/replace",(0,d.Ze)(e)),location.hash=a.Yj.BUILDER},children:"Edit Config"})},p=({value:e})=>{if(""===e.trim())return(0,c.tZ)(l,{children:"No input"});if(e.length>a.l2)return(0,c.tZ)(l,{error:!0,children:"The file size is too large for the jobs.config."});const[t,n]=(0,i.D)(e);if(null!==t)return(0,c.tZ)(l,{error:!0,children:t});const[r,o]=(0,s.k)(n);return r?(0,c.tZ)(l,{error:!0,children:o}):(0,c.BX)(l,{children:[(0,c.tZ)("p",{children:"Valid jobs.config"}),(0,c.tZ)(u,{config:n})]})};var f=n(804),m=n(7153);const g=()=>(0,c.tZ)("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 18 18","aria-hidden":"true",children:(0,c.tZ)("path",{d:"M10.997 7a.5.5 0 010 .707L7.707 11A.5.5 0 017 10.293L10.29 7a.5.5 0 01.707 0zm-1.145 5.852l-1.137 1.123A3.336 3.336 0 014 13.978a3.325 3.325 0 01-.006-4.701L4 9.27l1.142-1.122a.499.499 0 01.706.006v.001a.501.501 0 01-.007.708L4.706 9.978a2.326 2.326 0 000 3.292c.913.91 2.39.91 3.302-.002l1.131-1.119a.506.506 0 01.712 0 .494.494 0 01.005.698l-.004.005zM8.16 5.114l1.124-1.095a3.334 3.334 0 014.737.039 3.378 3.378 0 01-.068 4.762l-1.086 1.033a.516.516 0 01-.72-.008.485.485 0 01.008-.697l1.1-1.044c.938-.912.87-2.5.049-3.35-.811-.838-2.404-.935-3.314-.027L8.827 5.86a.479.479 0 01-.692-.024.523.523 0 01.026-.723z"})}),b=({className:e})=>{const[t,n]=(0,f.eJ)(!1),i=t?"Copied!":"Copy link to validation results";return(0,c.tZ)(h.T,{onClick:async()=>{const{validatorValue:e}=r.h.get(),t=(0,m.X)(e);t&&(history.pushState(null,"",t),await navigator.clipboard.writeText(t),n(!0),await(0,o.gw)(2e3),n(!1))},className:e,"aria-label":i,"data-rh":i,"data-rh-at":"left",children:(0,c.tZ)(g,{})})};var y=n(1313),Z=n(6005);const v=()=>{const{validatorValue:e,dispatch:t}=(0,r.b)("validatorValue");return(0,c.tZ)("section",{className:"J",children:(0,c.BX)("div",{className:"L",children:[(0,c.tZ)("h2",{className:"K",children:"Jobs Config Validator"}),(0,c.BX)("form",{action:"#",onSubmit:o.PF,className:"M",children:[(0,c.tZ)(Z.z,{onInput:e=>{t("validator/input",e.target.value)},value:e}),(0,c.BX)("aside",{className:"N",children:[(0,c.tZ)(b,{className:"O"}),(0,c.tZ)(y.G,{className:"O",onLoad:e=>{t("validator/input",e)}})]})]}),(0,c.tZ)(p,{value:e})]})})}},1621:(e,t,n)=>{n.d(t,{Z:()=>r});const r={base:"ja",btn:"ka ja",blank:"la ja"}},754:()=>{},18:(e,t,n)=>{t.rf=function(e,t,n={}){const i=(n.highlightCode||n.forceColor)&&(0,r.shouldHighlight)(n),s=(0,r.getChalk)(n),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(s),c=(e,t)=>i?e(t):t,l=e.split(o),{start:h,end:d,markerLines:u}=function(e,t,n){const r=Object.assign({column:0,line:-1},e.start),o=Object.assign({},r,e.end),{linesAbove:i=2,linesBelow:s=3}=n||{},a=r.line,c=r.column,l=o.line,h=o.column;let d=Math.max(a-(i+1),0),u=Math.min(t.length,l+s);-1===a&&(d=0),-1===l&&(u=t.length);const p=l-a,f={};if(p)for(let e=0;e<=p;e++){const n=e+a;f[n]=!c||(0===e?[c,t[n-1].length-c+1]:e===p?[0,h]:[0,t[n-e].length])}else f[a]=c===h?!c||[c,0]:[c,h-c];return{start:d,end:u,markerLines:f}}(t,l,n),p=t.start&&"number"===typeof t.start.column,f=String(d).length;let m=(i?(0,r.default)(e,n):e).split(o,d).slice(h,d).map(((e,t)=>{const r=h+1+t,o=` ${` ${r}`.slice(-f)} |`,i=u[r],s=!u[r+1];if(i){let t="";if(Array.isArray(i)){const r=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\t]/g," "),l=i[1]||1;t=["\n ",c(a.gutter,o.replace(/\d/g," "))," ",r,c(a.marker,"^").repeat(l)].join(""),s&&n.message&&(t+=" "+c(a.message,n.message))}return[c(a.marker,">"),c(a.gutter,o),e.length>0?` ${e}`:"",t].join("")}return` ${c(a.gutter,o)}${e.length>0?` ${e}`:""}`})).join("\n");return n.message&&!p&&(m=`${" ".repeat(f+1)}${n.message}\n${m}`),i?s.reset(m):m};var r=n(123);const o=/\r\n|[\n\r\u2028\u2029]/}}]);