(self.g=self.g||[]).push([[764],{5040:(e,t)=>{function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.__esModule=!0,t.default=void 0,t.default=function(e){var t,i,l=e.createElement,o=e.createRef;return i=t=function(e){var t,i;function s(){for(var t,n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return r(a(t=e.call.apply(e,[this].concat(i))||this),"_hint",o()),r(a(t),"_container",o()),r(a(t),"state",{target:null,hidden:!0}),r(a(t),"target",null),r(a(t),"placement",null),r(a(t),"_containerStyle",{position:"relative"}),r(a(t),"toggleEvents",(function(e,a){var n=e.events,r=n.click,i=n.focus,l=n.hover,o=a?"addEventListener":"removeEventListener",s=!0===e.events;(r||s)&&document[o]("click",t.toggleHint),(i||s)&&document[o]("focusin",t.toggleHint),(l||s)&&document[o]("mouseover",t.toggleHint),(r||l||s)&&document[o]("touchend",t.toggleHint)})),r(a(t),"toggleHint",(function(e){var a=(void 0===e?{}:e).target,n=void 0===a?null:a;n=t.getHint(n),clearTimeout(t._timeout),t._timeout=setTimeout((function(){t.target=n,t.target&&(t.placement=null),t.getHintData()}),null===n?void 0===t.props.delay.hide?t.props.delay:t.props.delay.hide:void 0===t.props.delay.show?t.props.delay:t.props.delay.show)})),r(a(t),"getHint",(function(e){for(var a=t.props,n=a.attribute,r=a.persist,i=t.target;e&&e!==document;){if(r&&e===t._hint.current)return i;if(e.hasAttribute(n))return e;e=e.parentNode}return null})),r(a(t),"shallowEqual",(function(e,t){var a=Object.keys(e);return a.length===Object.keys(t).length&&a.reduce((function(a,n){return a&&("function"===typeof e[n]&&"function"===typeof t[n]||e[n]===t[n])}),!0)})),r(a(t),"getHintData",(function(){if(t.target){var e,a,n=t.props,r=n.attribute,i=n.autoPosition,l=n.position,o=t.target.getAttribute(r)||"",s=t.placement||t.target.getAttribute(r+"-at")||l,c=t._container.current.getBoundingClientRect(),d=c.top,h=c.left,u=t._hint.current.getBoundingClientRect(),p=u.width,m=u.height,v=t.target.getBoundingClientRect(),f=v.top,b=v.left,Z=v.width,g=v.height;if(i&&!t.placement){var y=["left","right"].includes(s),N=document.documentElement,w={left:(y?b-p:b+(Z-p>>1))>0,right:(y?b+Z+p:b+(Z+p>>1))<N.clientWidth,bottom:(y?f+(g+m>>1):f+g+m)<N.clientHeight,top:(y?f-(m>>1):f-m)>0};if(!s||!w[s])switch(s){case"left":w.left||(s="right"),w.top||(s="bottom"),w.bottom||(s="top");break;case"right":w.right||(s="left"),w.top||(s="bottom"),w.bottom||(s="top");break;case"bottom":w.bottom||(s="top"),w.left||(s="right"),w.right||(s="left");break;default:w.top||(s="bottom"),w.left||(s="right"),w.right||(s="left")}}switch(s){case"left":e=g-m>>1,a=-p;break;case"right":e=g-m>>1,a=Z;break;case"bottom":e=g,a=Z-p>>1;break;default:e=-m,a=Z-p>>1}(m>0||p>0)&&(t.placement=s),t.setState({content:o,at:s,top:e+f-d|0,left:a+b-h|0,hidden:!1})}else t.setState({hidden:!0})})),t}i=e,(t=s).prototype=Object.create(i.prototype),t.prototype.constructor=t,n(t,i);var c=s.prototype;return c.componentDidMount=function(){this.toggleEvents(this.props,!0)},c.componentWillUnmount=function(){this.toggleEvents(this.props,!1),clearTimeout(this._timeout)},c.componentDidUpdate=function(){this.target&&!this.state.hidden&&this.getHintData()},c.shouldComponentUpdate=function(e,t){return!this.shallowEqual(t,this.state)||!this.shallowEqual(e,this.props)},c.render=function(){var e=this.props,t=e.className,a=e.onRenderContent,n=this.state,r=n.content;return l("div",{ref:this._container,style:this._containerStyle},l("div",{className:t+" "+t+"--"+n.at,ref:this._hint,role:"tooltip",style:{top:n.top,left:n.left,display:this.target?void 0:"none"}},this.target&&(a?a(this.target,r):l("div",{className:t+"__content"},r))))},s}(e.Component),r(t,"defaultProps",{attribute:"data-rh",autoPosition:!1,className:"react-hint",delay:0,events:!1,onRenderContent:null,persist:!1,position:"top"}),i},e.exports=t.default},6325:(e,t,a)=>{a.r(t),a.d(t,{BuilderPage:()=>ae});var n=a(828),r=a(7428),i=a(804);const l={list:"wa",item:"xa",fields:"ya",new:"za",title:"Aa",period:"Ba",location:"Ca",period_box:"Da",block:"Ea",label:"Fa",text:"Ga",inputs:"Ha",func_input:"Ia Ha",day_of_week:"Ja Ia Ha",description:"Ka Ha",slash:"La",mono:"Ma Ia Ha",message:"Na",error:"Oa"};var o=a(4415),s=a(4664);const c=(0,o.createContext)((0,s.CC)()),d=()=>(0,o.useContext)(c);var h=a(484),u=a(6260);const p=e=>{if("Enter"===e.key||" "===e.key){const t=e.target;t.firstChild instanceof HTMLElement&&t.firstChild.click()}},m=({name:e,value:t,period:a})=>(0,u.BX)("label",{className:l.label,tabIndex:0,onKeyDown:p,children:[(0,u.tZ)("input",{type:"radio",name:e,checked:t===a,"data-name":"period",value:t,className:l.period}),(0,u.tZ)("span",{className:l.title,children:t})]}),v=()=>{const{id:e,period:t}=d();return(0,u.tZ)("fieldset",{className:l.fields,children:(0,u.BX)("div",{className:l.period_box,children:[(0,u.tZ)(m,{name:e,value:r.aI.DAILY,period:t}),(0,u.tZ)(m,{name:e,value:r.aI.WEEKLY,period:t}),(0,u.tZ)(m,{name:e,value:r.aI.MONTHLY,period:t}),(0,u.tZ)(m,{name:e,value:r.aI.CRON,period:t})]})})},f="Wa";var b=a(1330);const Z=()=>(0,u.tZ)("svg",{width:"24",height:"24",fill:"#8e21b1","aria-hidden":"true",children:(0,u.tZ)("path",{d:"M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z"})}),g=()=>(0,u.tZ)("svg",{width:"24",height:"24",fill:"#116dff","aria-hidden":"true",children:(0,u.tZ)("path",{d:"M6 8V6a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-2v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm10 1H4v2h12V9zm0 10v-7H4v7h12zM7 8h9a1 1 0 011 1v7h2V6H7v2z"})}),y=({up:e})=>(0,u.tZ)("svg",{width:"24",height:"24",fill:"#116dff","aria-hidden":"true",children:(0,u.tZ)("path",{d:e?"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z":"M16.59 16.16 12 11.58l-4.59 4.58L6 14.75l6-6 6 6z"})}),N=()=>{const{id:e}=d(),{dispatch:t,items:a}=(0,n.b)("items"),i=a.length,l=a.findIndex((t=>t.id===e));return(0,u.BX)("div",{className:"Va",children:[(0,u.BX)("div",{children:[(0,u.tZ)(b.T,{"aria-label":"Move up",onClick:()=>t("items/up",e),className:f,"data-rh":"Move up","data-rh-at":"top",disabled:l<1,children:(0,u.tZ)(y,{up:!1})}),(0,u.tZ)(b.T,{"aria-label":"Move down",onClick:()=>t("items/down",e),className:f,"data-rh":"Move down","data-rh-at":"top",disabled:l>=i-1,children:(0,u.tZ)(y,{up:!0})})]}),(0,u.BX)("div",{children:[(0,u.tZ)(b.T,{"aria-label":"remove",onClick:()=>t("items/remove",e),className:f,"data-rh":"Remove","data-rh-at":"top",children:(0,u.tZ)(Z,{})}),(0,u.tZ)(b.T,{"aria-label":"clone",onClick:()=>t("items/clone",e),className:f,"data-rh":"Clone","data-rh-at":"top",disabled:i>=r.aA,children:(0,u.tZ)(g,{})})]})]})},w=({top:e,children:t})=>(0,u.BX)("label",{className:l.block,children:[(0,u.tZ)("span",{className:l.text,children:e}),t]});var k=a(5073);const C=e=>t=>{const a=t.target,n=a.value.trim();a.value!==n&&(a.value=n),a.setCustomValidity(e(n)?"":"error")},x=C(k.c3),E=C(k.QL),_=()=>{const{functionLocation:e,functionName:t,description:a}=d();return(0,u.BX)("fieldset",{className:l.fields,children:[(0,u.BX)("div",{className:l.location,children:[(0,u.tZ)(w,{top:"Function Location",children:(0,u.tZ)("input",{type:"text","data-name":r.tW.functionLocation,"data-fl":!0,"data-fl-at":"bottom",className:l.func_input,value:e,placeholder:"Function Location",onInput:E,spellcheck:!1,required:!0})}),(0,u.tZ)("span",{className:l.slash,children:"/"}),(0,u.tZ)(w,{top:"Function Name",children:(0,u.tZ)("input",{type:"text","data-name":r.tW.functionName,"data-fl":!0,"data-fl-at":"bottom",className:l.func_input,value:t,placeholder:"Function Name",onInput:x,spellcheck:!1,required:!0})})]}),(0,u.tZ)("div",{className:l.location,children:(0,u.tZ)(w,{top:"Description",children:(0,u.tZ)("input",{type:"text",value:a,className:l.description,"data-name":r.tW.description,placeholder:"Description"})})})]})};var H=a(8001);const B=({value:e,setValidity:t})=>{const[a,n]=(0,H._)(e);return(0,i.d4)((()=>{t(a)}),[a]),(0,u.tZ)(u.HY,{children:n})},M=({value:e,error:t})=>{const a=(0,i.sO)(null);return(0,i.d4)((()=>{a.current?.setCustomValidity(t?"error":"")}),[t]),(0,u.tZ)(w,{top:"A valid cron expression",children:(0,u.tZ)("input",{ref:a,type:"text",className:l.mono,value:e,"data-name":r.tW.cronExpression,spellcheck:!1,required:!0})})},A=()=>{const{time:e}=d();return(0,u.tZ)(w,{top:"The time of day the job runs",children:(0,u.tZ)("input",{type:"time",value:e,"data-name":"time",className:l.mono,required:!0})})},V=()=>(0,u.tZ)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,u.tZ)("path",{d:"M6 12.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"})}),z=()=>{const{id:e}=d();return(0,u.tZ)(w,{top:"Cron Examples",children:(0,u.tZ)(b.T,{className:"Xa","aria-haspopup":"true","aria-label":"Show examples","data-fl":!0,"data-fl-at":"right","data-name":r.tW.cronExpression,"data-id":e,children:(0,u.tZ)(V,{})})})},j=a(6705).N.map((e=>(0,u.tZ)("option",{value:e,children:e},e))),I=()=>{const{dayOfWeek:e}=d();return(0,u.tZ)(w,{top:"The day of the week the job runs",children:(0,u.tZ)("select",{className:l.day_of_week,"data-name":r.tW.dayOfWeek,value:e,children:j})})},L=()=>{const{dateInMonth:e}=d();return(0,u.tZ)(w,{top:"The day of the month the job runs",children:(0,u.tZ)("input",{type:"number",min:1,max:31,step:1,value:String(e),"data-name":r.tW.dateInMonth,className:l.mono,required:!0})})},T=()=>{const[e,t]=(0,i.eJ)(!1),{period:a,cronExpression:n}=d(),o=a===r.aI.CRON,s=o?(0,u.tZ)(M,{value:n,error:e}):(0,u.tZ)(A,{}),c=o&&(0,u.tZ)(z,{}),p=o&&(0,u.tZ)("div",{className:(0,h.AK)([l.message,e&&l.error]),children:(0,u.tZ)(B,{value:n,setValidity:t})}),m=a===r.aI.WEEKLY&&(0,u.tZ)(I,{}),v=a===r.aI.MONTHLY&&(0,u.tZ)(L,{});return(0,u.BX)("fieldset",{className:l.fields,children:[(0,u.BX)("div",{className:l.location,children:[s,(0,u.tZ)("span",{className:l.slash}),c,m,v]}),p]})},W=(0,o.memo)((({id:e,update:t,isNew:a})=>(((e,t)=>{(0,i.d4)((()=>{if(t){const t=setTimeout((()=>{n.h.dispatch("items/update",{id:e,name:"isNew",value:void 0})}),500);return()=>clearTimeout(t)}}),[])})(e,a),(0,u.BX)("form",{id:e,action:"#",className:(0,h.AK)([l.item,a&&l.new]),onInput:t,onSubmit:h.PF,children:[(0,u.tZ)(_,{}),(0,u.tZ)(v,{}),(0,u.tZ)(T,{}),(0,u.tZ)(N,{})]})))),S=()=>{const{dispatch:e,items:t}=(0,n.b)("items"),a=(0,i.I4)((t=>{const a=t.target;e("items/update",{id:a.form.id,name:a.dataset.name,value:a.value})}),[]),r=t.map(((e,t,n)=>{const r=(0,h.AK)([0===t&&l.first,t===n.length-1&&l.last]);return(0,u.tZ)("li",{className:r,children:(0,u.tZ)(c.Provider,{value:e,children:(0,u.tZ)(W,{id:e.id,isNew:e.isNew,update:a})})},e.id)}));return(0,u.tZ)("ul",{className:l.list,children:r})},X=({children:e})=>(0,u.tZ)("div",{className:"Pa",children:e}),O=({children:e,label:t})=>(0,u.tZ)("span",{"data-rh":t,"data-rh-at":"top",className:"Qa",children:e}),R=()=>(0,u.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,u.tZ)("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"})});var D=a(6517);const P=()=>{const{dispatch:e,items:t}=(0,n.b)("items");return(0,u.BX)(X,{children:[(0,u.tZ)(O,{label:"You can configure up to 20 jobs",children:(0,u.BX)(b.z,{onClick:()=>{e("items/new")},disabled:t.length>=r.aA,children:[(0,u.tZ)(R,{})," New Job"]})}),(0,u.tZ)(O,{label:"Upload your config",children:(0,u.tZ)(b.z,{onClick:()=>{location.hash=r.Yj.UPLOAD},"aria-label":"Upload your config",children:(0,u.tZ)(D.b,{})})})]})},Y=()=>(0,u.BX)("div",{children:[(0,u.tZ)(P,{}),(0,u.tZ)(S,{})]});var K=a(8105);const U=[{regex:/^[\s[\]{}:,]+/},{regex:/^"(?:\\.|[^"\\])*"/,className:K.Z.mtk6},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/,className:K.Z.mtk5}],q=({input:e})=>{const t=[];for(;e.length;)for(const a of U){const n=a.regex.exec(e);if(Array.isArray(n)){const[r]=n,i=a.className?(0,u.tZ)("span",{className:a.className,children:r}):r;t.push(i),e=e.slice(r.length);break}}return(0,u.tZ)("code",{children:t})};var F=a(1621);const J="function"===typeof window.showSaveFilePicker,$=()=>(0,u.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,u.tZ)("path",{d:"M20 15v4c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-4a1 1 0 00-2 0v4a2.997 2.997 0 003 3h14a2.997 2.997 0 003-3v-4a1 1 0 00-2 0zm-7-2.414V3a1 1 0 00-2 0v9.586L7.707 9.293a.999.999 0 10-1.414 1.414l5 5A1.008 1.008 0 0012 16a.997.997 0 00.707-.293l5-5a.999.999 0 10-1.414-1.414z"})}),Q=({label:e,data:t})=>J?(0,u.tZ)(b.z,{onClick:()=>(async e=>{const t=await window.showSaveFilePicker({suggestedName:"jobs.config"});if("granted"===await t.queryPermission()){const a=await t.createWritable();await a.write(e),await a.close()}})(t),"aria-label":e,children:(0,u.tZ)($,{})}):(0,u.tZ)("a",{href:`data:application/json,${encodeURIComponent(t)}`,className:F.Z.btn,download:"jobs.config",type:"application/json","aria-label":e,tabIndex:0,children:(0,u.tZ)($,{})}),G=()=>{const{items:e}=(0,n.b)("items"),t=(0,i.sO)(null),a=(0,s._g)(e),r=(e=>`// Jobs Config Generator\n// https://wix.to/NDAQn6c\n\n${e}`)(a);return(0,u.BX)("div",{className:"ha",children:[(0,u.BX)(X,{children:[(0,u.tZ)(O,{label:"Copy to clipboard",children:(0,u.tZ)(b.z,{onClick:async()=>{if(await navigator.clipboard.writeText(r),t.current){const e=window.getSelection(),a=document.createRange();a.selectNodeContents(t.current),e?.removeAllRanges(),e?.addRange(a)}},children:"Copy Code"})}),(0,u.tZ)(O,{label:"Download a file",children:(0,u.tZ)(Q,{label:"Download a file",data:r})})]}),(0,u.tZ)("pre",{ref:t,className:"ia",children:(0,u.tZ)(q,{input:a})})]})},ee=(0,o.lazy)((()=>Promise.all([a.e(532),a.e(409),a.e(643)]).then(a.bind(a,3763)).then((e=>e.UploadModal)))),te=()=>(0,u.tZ)(o.Suspense,{fallback:null,children:(0,u.tZ)(ee,{})}),ae=()=>{const{path:e}=(0,n.b)("path"),t=e===r.Yj.UPLOAD&&(0,u.tZ)(te,{});return(0,u.BX)("div",{className:"R",children:[(0,u.tZ)(Y,{}),(0,u.tZ)(G,{}),t]})}},1330:(e,t,a)=>{a.d(t,{T:()=>o,z:()=>l});var n=a(1621),r=a(484),i=a(6260);const l=({type:e="button",onClick:t,children:a,className:l,...o})=>{const s=(0,r.AK)([n.Z.btn,l]);return(0,i.tZ)("button",{type:e,onClick:t,className:s,...o,children:a})},o=({children:e,className:t,...a})=>{const l=(0,r.AK)([n.Z.blank,t]);return(0,i.tZ)("button",{type:"button",className:l,...a,children:e})}},8001:(e,t,a)=>{a.d(t,{_:()=>o});var n=a(8056),r=a(7423);const i=/^every (\d+ )?(second|minute)s?\b/i,l=e=>[!0,e],o=e=>{try{const t=(0,r.toString)(e,{use24HourTimeFormat:!0});return i.test(t)?l(`${t}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?l(`${t}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?l(`${t}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):(0,n.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,t]:l(`${t}.\n\nError: Velo Job Scheduler does not support this syntax.`)}catch(e){return l(String(e))}}},6517:(e,t,a)=>{a.d(t,{b:()=>r});var n=a(6260);const r=()=>(0,n.tZ)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,n.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},9746:(e,t,a)=>{a.r(t),a.d(t,{Tooltips:()=>N});var n=a(5379),r=a(804),i=a(5040),l=a.n(i),o=a(828),s=a(7428),c=a(8105),d=a(484),h=a(6260);const u=({target:e})=>{const t=(0,d.AK)([c.Z.mtk4,!e.value&&c.Z.err]),a=(0,d.AK)([c.Z.mtk10,!e.validity.valid&&c.Z.err]);return(0,h.tZ)("div",{className:"B",style:`min-width:${e.offsetWidth}px`,children:(0,h.BX)("code",{className:"C",children:[(0,h.tZ)("span",{className:t,children:"export function "}),(0,h.tZ)("span",{className:a,children:e.value}),"() {",(0,h.tZ)("br",{}),(0,h.tZ)("span",{className:c.Z.mtk3,children:"  // TODO:"}),(0,h.tZ)("br",{}),"}"]})})};var p=a(5073);const m=(e,t)=>t?e.endsWith(".js")?"Z":e.endsWith(".jsw")?"_":"Y":"aa",v=({target:e})=>{const t=(e=>e.replace(/^\//,"").split("/").map(((e,t,a)=>{const n=t===a.length-1;return{path:e,className:(0,d.AK)(["W",m(e,n),(0,p.Ox)(e,n)&&"X"])}})))(e.value).reduceRight(((e,t,a)=>(0,h.tZ)("ul",{className:0===a?"U":"V",children:(0,h.BX)("li",{children:[(0,h.tZ)("div",{className:t.className,children:t.path}),e]})})),null);return(0,h.BX)("div",{className:"S",style:`min-width:${e.offsetWidth}px`,children:[(0,h.tZ)("div",{className:"T",children:"Backend"}),t]})},f=JSON.parse('[{"label":"Every 1 hour","value":"0 * * * *"},{"label":"Every 3 hours","value":"0 */3 * * *"},{"label":"Every Monday","value":"0 0 * * MON"},{"label":"Every Tuesday and Sunday","value":"0 0 * * TUE,SUN"},{"label":"Every Friday at 12:15","value":"15 12 * * FRI"},{"label":"Every month","value":"0 0 1 * *"},{"label":"Every 2 months","value":"0 0 1 */2 *"},{"label":"Every 3 months at 10:30","value":"30 10 1 */3 *"},{"label":"Every year","value":"0 0 1 1 *"},{"label":"Every May and November","value":"0 0 1 MAY,NOV *"},{"label":"Every 4th of July at 18:30","value":"30 18 4 JUL *"}]');var b=a(1330);const Z=({target:e})=>{const{items:t,dispatch:a}=(0,o.b)("items"),{id:n}=e.dataset,{cronExpression:r}=t.find((e=>e.id===n))||{},i=e=>{a("items/update",{id:n||"",name:s.tW.cronExpression,value:e.target.value})},l=f.map((e=>{const t=(0,d.AK)(["da",r===e.value&&"ea"]);return(0,h.tZ)("li",{className:"ca",children:(0,h.tZ)(b.T,{value:e.value,title:e.value,className:t,onClick:i,children:e.label})},e.value)}));return(0,h.BX)("ul",{className:"ba",children:[l,(0,h.tZ)("li",{className:"ca",children:(0,h.tZ)("a",{href:"https://github.com/shoonia/jobs.config/discussions/15",className:"fa",target:"_blank",rel:"noreferrer",tabIndex:0,children:"You can request an example"})})]})},g=l()({createElement:n.h,Component:n.wA,createRef:n.Vf}),y={show:500,hide:100},N=()=>{const{items:e}=(0,o.b)("items"),t=(0,r.I4)((e=>{const{name:t}=e.dataset;switch(t){case s.tW.functionLocation:return(0,h.tZ)(v,{target:e});case s.tW.functionName:return(0,h.tZ)(u,{target:e});case s.tW.cronExpression:return(0,h.tZ)(Z,{target:e})}return null}),[e]);return(0,h.BX)(h.HY,{children:[(0,h.tZ)(g,{events:!0,delay:y}),(0,h.tZ)(g,{persist:!0,attribute:"data-fl",events:{focus:!0,click:!0,hover:!1},className:"z",onRenderContent:t})]})}},1621:(e,t,a)=>{a.d(t,{Z:()=>n});const n={base:"ja",btn:"ka ja",blank:"la ja"}},8105:(e,t,a)=>{a.d(t,{Z:()=>n});const n={mtk1:"s",mtk4:"t",mtk3:"u",mtk5:"v",mtk6:"w",mtk10:"x",err:"y"}}}]);