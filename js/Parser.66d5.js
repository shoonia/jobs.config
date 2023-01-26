(window.g=window.g||[]).push([[842],{1330:(e,n,t)=>{t.d(n,{T:()=>c,z:()=>a});var r=t(1621),o=t(484),i=t(6584);const a=e=>{let{type:n="button",onClick:t,children:a,className:c,...l}=e;const s=(0,o.AK)([r.Z.btn,c]);return(0,i.tZ)("button",{type:n,onClick:t,className:s,...l,children:a})},c=e=>{let{children:n,className:t,...a}=e;const c=(0,o.AK)([r.Z.blank,t]);return(0,i.tZ)("button",{type:"button",className:c,...a,children:n})}},2598:(e,n,t)=>{t.d(n,{G:()=>c});var r=t(7502),o=t(2458);const i=/^every (\d+ )?(second|minute)s?\b/i,a=e=>[!0,e],c=e=>{try{const n=(0,o.toString)(e,{use24HourTimeFormat:!0});return i.test(n)?a(`${n}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?a(`${n}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?a(`${n}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):(0,r.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,n]:a(`${n}.\n\nError: Velo Job Scheduler does not support this syntax.`)}catch(e){return a(String(e))}}},6517:(e,n,t)=>{t.d(n,{b:()=>o});var r=t(6584);const o=()=>(0,r.tZ)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,r.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},1599:(e,n,t)=>{t.r(n),t.d(n,{Parser:()=>u});var r=t(3516),o=t(862),i=t(7428),a=t(6584);const c=e=>{let{children:n,error:t=!1}=e;return(0,a.tZ)("div",{className:"ra",children:(0,a.tZ)("pre",{className:t?"ta sa":"ua sa",children:n})})};var l=t(3934),s=t(1330),d=t(4664);const h=e=>{let{config:n}=e;const{dispatch:t}=(0,l.b)();return(0,a.tZ)(s.z,{onClick:()=>{t("items/replace",(0,d.Ze)(n)),location.hash=i.Yj.BUILDER},children:"Edit Config"})},u=e=>{let{value:n}=e;if(""===n.trim())return(0,a.tZ)(c,{children:"No input"});if(n.length>i.l2)return(0,a.tZ)(c,{error:!0,children:"The file size is too large for the jobs.config."});const[t,l]=(0,r.D)(n);if(null!==t)return(0,a.tZ)(c,{error:!0,children:t});const[s,d]=(0,o.k)(l);return s?(0,a.tZ)(c,{error:!0,children:d}):(0,a.BX)(c,{children:[(0,a.tZ)("p",{children:"Valid jobs.config"}),(0,a.tZ)(h,{config:l})]})}},862:(e,n,t)=>{t.d(n,{k:()=>j});var r=t(9649),o=t(6584);const i=e=>{let{index:n,name:t,expected:r}=e;return(0,o.tZ)("p",{children:`Incorrect type of property "${t}" at "jobs[${n}]". Expected "${r}".`})};var a=t(6705),c=t(5073),l=t(484),s=t(7428),d=t(2598);const h=[s.tW.functionLocation,s.tW.functionName,s.tW.executionConfig],u=[...h,s.tW.description],p=[s.tW.dayOfWeek,s.tW.dateInMonth],f=[s.tW.time,...p],m=[s.tW.cronExpression,...f],Z=e=>[!0,e],b=(e,n)=>{for(const t of Object.keys(e))if(!n.includes(t))return[!0,t];return[!1]},y=(e,n)=>{for(const t of n)if(!(t in e))return[!0,t];return[!1]},j=e=>{const n='", "';if(!(0,l.Kn)(e))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:'Incorrect type. Expected "object".'}),(0,o.tZ)("p",{children:"The jobs.config file must contains a JSON object."})]}));if(!(s.tW.jobs in e))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:'Missing property "jobs".'}),(0,o.tZ)("p",{children:'The jobs object must contains one top-level key named "jobs".'})]}));const t=Object.keys(e);if(t.length>1){const e=t.filter((e=>e!==s.tW.jobs)).join(n);return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Unknown property "${e}".`}),(0,o.tZ)("p",{children:'The jobs object must contains one top-level key named "jobs".'})]}))}if(!Array.isArray(e.jobs))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:'Incorrect type. Expected "array".'}),(0,o.tZ)("p",{children:'The top-level key "jobs" must be an array.'})]}));const j=e.jobs;let v=j.length;if(v>20)return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Too many scheduled jobs. (${v})`}),(0,o.tZ)("p",{children:"You can configure up to 20 jobs."})]}));if(v<1)return Z((0,o.tZ)("p",{children:"No scheduled jobs."}));if(!j.every(l.Kn))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:'Incorrect type. Expected "object."'}),(0,o.tZ)("p",{children:'The "jobs" array must contain only objects, each of which represents a scheduled job.'})]}));for(;0<v--;){const e=j[v],[t,g]=b(e,u);if(t)return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Unknown property "${g}" at "jobs[${v}]".`}),(0,o.tZ)("p",{children:`Allowed one of "${u.join(n)}"`})]}));const[x,N]=y(e,h);if(x)return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Missing property "${N}" at "jobs[${v}]"`}),(0,o.tZ)("p",{children:`Each scheduled job object must contain the required fields "${h.join(n)}".`})]}));if(s.tW.description in e&&!(0,l.HD)(e.description))return Z((0,o.tZ)(i,{index:v,name:s.tW.description,expected:"string"}));const k=e.functionLocation;if(!(0,l.HD)(k))return Z((0,o.tZ)(i,{index:v,name:s.tW.functionLocation,expected:"string"}));if(!(0,c.QL)(k))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Invalid "functionLocation" at "jobs[${v}]".`}),(0,o.BX)("p",{children:["The function location is a relative path within the Backend folder for ",(0,o.tZ)("code",{children:".js"})," or ",(0,o.tZ)("code",{children:".jsw"})," file."]}),(0,o.tZ)("p",{children:"File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period."})]}));const C=e.functionName;if(!(0,l.HD)(C))return Z((0,o.tZ)(i,{index:v,name:s.tW.functionName,expected:"string"}));if(!(0,c.c3)(C)||(0,r.isKeyword)(C)||(0,r.isStrictBindReservedWord)(C,!0))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Invalid "functionName" at "jobs[${v}]"`}),(0,o.tZ)("p",{children:`Error: "${C}".`})]}));const w=e.executionConfig;if(!(0,l.Kn)(w))return Z((0,o.tZ)(i,{index:v,name:s.tW.executionConfig,expected:"object"}));const[B,W]=b(w,m);if(B)return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Unknown property "${W}" in "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:`Allowed one of "${m.join(n)}"`})]}));if(s.tW.cronExpression in w){const e=w.cronExpression;if(!(0,l.HD)(e))return Z((0,o.tZ)(i,{index:v,name:s.tW.cronExpression,expected:"string"}));const[n,t]=(0,d.G)(e);if(n)return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Invalid "cronExpression" at "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:t})]}))}else{if(!(s.tW.time in w))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Missing the time of the job runs at "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:'The "executionConfig" object must contain one of "time", "cronExpression" properties.'})]}));{const e=w.time;if(!(0,l.HD)(e))return Z((0,o.tZ)(i,{index:v,name:s.tW.time,expected:"string"}));if(!(0,c.CO)(e))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Invalid "time" at "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:`Error: "${e}". The time is specified as UTC time in HH:MM format.`})]}))}}if(s.tW.dayOfWeek in w){const e=w.dayOfWeek;if(!(0,l.HD)(e))return Z((0,o.tZ)(i,{index:v,name:s.tW.dayOfWeek,expected:"string"}));if(!a.N.some((n=>n===e)))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Incorrect value of "dayOfWeek" at "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:`Error: unknown value "${e}". Allowed one of "${a.N.join(n)}"`})]}))}if(s.tW.dateInMonth in w){const e=w.dateInMonth;if(!(0,l.hj)(e))return Z((0,o.tZ)(i,{index:v,name:s.tW.dateInMonth,expected:"number"}));if(!Number.isInteger(e)||e<1||e>31)return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Invalid "dateInMonth" at "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:'The value of the "dateInMonth" property must be a number between 1 and 31.'})]}))}if(s.tW.cronExpression in w&&f.some((e=>e in w)))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Mutual exclusion property at "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:`Error: "cronExpression" omit all of "${f.join(n)}" properties.`}),(0,o.tZ)("p",{children:(0,o.tZ)("em",{children:'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression.'})})]}));if(p.every((e=>e in w)))return Z((0,o.BX)(o.HY,{children:[(0,o.tZ)("p",{children:`Mutual exclusion property at "jobs[${v}].executionConfig".`}),(0,o.tZ)("p",{children:'Error: "dateInMonth" omit the "dayOfWeek" property.'})]}))}return[!1]}},3516:(e,n,t)=>{t.d(n,{D:()=>i});var r=t(6509),o=t(278);const i=e=>{try{const n=(0,r.Z)(e);return[null,(0,o.Z)(n)]}catch(e){return[String(e)]}}},6005:(e,n,t)=>{t.d(n,{z:()=>o});var r=t(6584);const o=e=>{let{onInput:n,value:t}=e;return(0,r.tZ)("textarea",{onInput:n,className:"ga",value:t,placeholder:"{}",spellcheck:!1})}},1313:(e,n,t)=>{t.d(n,{G:()=>a});var r=t(484),o=t(6517),i=t(6584);const a=e=>{let{className:n,onLoad:t,onError:a}=e;return(0,i.BX)("label",{className:(0,r.AK)(["P",n]),"aria-label":"Upload your file","data-rh":"Upload your file","data-rh-at":"left",children:[(0,i.tZ)("input",{type:"file",className:"Q",onChange:e=>{let{target:n}=e;(e=>new Promise(((n,t)=>{if(e instanceof HTMLInputElement&&1===e.files?.length){const o=e.files[0],i=new FileReader;i.onload=()=>{(0,r.HD)(i.result)?n(i.result):t()},i.onerror=t,i.readAsText(o)}else t()})))(n).then(t,a)}}),(0,i.tZ)(o.b,{})]})}},3763:(e,n,t)=>{t.r(n),t.d(n,{UploadModal:()=>y});var r=t(396),o=t(3934),i=t(484),a=t(3516),c=t(862),l=t(4664),s=t(7428),d=t(3253),h=t.n(d),u=t(6584);h().setAppElement("#app");const p=e=>{let{close:n,label:t,children:r}=e;return(0,u.tZ)(h(),{isOpen:!0,onRequestClose:n,contentLabel:t,overlayClassName:"Wa",className:"Za",bodyOpenClassName:"Xa",htmlOpenClassName:"Ya",children:r})};var f=t(6005),m=t(1330),Z=t(1313);const b=()=>(0,u.tZ)("svg",{fill:"currentColor",width:"12",height:"12",viewBox:"0 0 8 8","aria-hidden":"true",children:(0,u.tZ)("path",{d:"M7.2 0 4 3.2.8 0 .1.7 3.3 4 0 7.3l.7.7L4 4.7 7.3 8l.7-.7L4.7 4 7.9.7z"})}),y=()=>{const e=(0,r.sO)(""),{dispatch:n}=(0,o.b)(),t=()=>{location.hash=s.Yj.BUILDER},d=e=>{if(""===e.trim())return t();const[r,o]=(0,a.D)(e);if(!r){const[e]=(0,c.k)(o);if(!e)return n("items/replace",(0,l.Ze)(o)),t()}n("validator/input",e),location.hash=s.Yj.VALIDATOR};return(0,u.tZ)(p,{label:"Upload form",close:t,children:(0,u.BX)("form",{onSubmit:n=>{(0,i.PF)(n),d(e.current)},className:"ma",children:[(0,u.tZ)(m.T,{onClick:t,className:"na","aria-label":"close modal",children:(0,u.tZ)(b,{})}),(0,u.tZ)("h2",{children:"Upload your config"}),(0,u.BX)("div",{className:"pa",children:[(0,u.tZ)(Z.G,{className:"qa",onLoad:d}),(0,u.tZ)(f.z,{onInput:n=>{let{target:t}=n;t instanceof HTMLTextAreaElement&&(e.current=t.value)}})]}),(0,u.BX)("div",{className:"oa",children:[(0,u.tZ)(m.z,{type:"submit",children:"Upload Config"}),(0,u.tZ)(m.z,{onClick:t,children:"Cancel"})]})]})})}},7035:(e,n,t)=>{t.r(n),t.d(n,{ValidatorPage:()=>Z});var r=t(3934),o=t(484),i=t(8661),a=t(6584);const c=(0,i.lazy)((()=>Promise.all([t.e(532),t.e(113),t.e(533),t.e(842)]).then(t.bind(t,1599)).then((e=>e.Parser)))),l=e=>(0,a.tZ)(i.Suspense,{fallback:null,children:(0,a.tZ)(c,{...e})});var s=t(396),d=t(7153);const h=()=>(0,a.tZ)("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 18 18","aria-hidden":"true",children:(0,a.tZ)("path",{d:"M10.997 7a.5.5 0 010 .707L7.707 11A.5.5 0 017 10.293L10.29 7a.5.5 0 01.707 0zm-1.145 5.852l-1.137 1.123A3.336 3.336 0 014 13.978a3.325 3.325 0 01-.006-4.701L4 9.27l1.142-1.122a.499.499 0 01.706.006v.001a.501.501 0 01-.007.708L4.706 9.978a2.326 2.326 0 000 3.292c.913.91 2.39.91 3.302-.002l1.131-1.119a.506.506 0 01.712 0 .494.494 0 01.005.698l-.004.005zM8.16 5.114l1.124-1.095a3.334 3.334 0 014.737.039 3.378 3.378 0 01-.068 4.762l-1.086 1.033a.516.516 0 01-.72-.008.485.485 0 01.008-.697l1.1-1.044c.938-.912.87-2.5.049-3.35-.811-.838-2.404-.935-3.314-.027L8.827 5.86a.479.479 0 01-.692-.024.523.523 0 01.026-.723z"})});var u=t(1330);const p=e=>{let{className:n}=e;const[t,i]=(0,s.eJ)(!1),c=t?"Copied!":"Copy link to validation results";return(0,a.tZ)(u.T,{onClick:async()=>{const{validatorValue:e}=r.h.get(),n=(0,d.X)(e);n&&(history.pushState(null,"",n),await navigator.clipboard.writeText(n),i(!0),await(0,o.gw)(2e3),i(!1))},className:n,"aria-label":c,"data-rh":c,"data-rh-at":"left",children:(0,a.tZ)(h,{})})};var f=t(1313),m=t(6005);const Z=()=>{const{validatorValue:e,dispatch:n}=(0,r.b)("validatorValue");return(0,a.tZ)("section",{className:"J",children:(0,a.BX)("div",{className:"L",children:[(0,a.tZ)("h2",{className:"K",children:"Jobs Config Validator"}),(0,a.BX)("form",{action:"#",onSubmit:o.PF,className:"M",children:[(0,a.tZ)(m.z,{onInput:e=>{let{target:t}=e;t instanceof HTMLTextAreaElement&&n("validator/input",t.value)},value:e}),(0,a.BX)("aside",{className:"N",children:[(0,a.tZ)(p,{className:"O"}),(0,a.tZ)(f.G,{className:"O",onLoad:e=>{n("validator/input",e)}})]})]}),(0,a.tZ)(l,{value:e})]})})}},1621:(e,n,t)=>{t.d(n,{Z:()=>r});const r={base:"ja",btn:"ka ja",blank:"la ja"}},754:()=>{}}]);