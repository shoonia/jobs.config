(window.g=window.g||[]).push([[764],{1330:(t,e,n)=>{n.d(e,{T:()=>l,z:()=>i});var a=n(1621),r=n(484),o=n(6584);const i=t=>{let{type:e="button",onClick:n,children:i,className:l,...s}=t;const c=(0,r.AK)([a.Z.btn,l]);return(0,o.tZ)("button",{type:e,onClick:n,className:c,...s,children:i})},l=t=>{let{children:e,className:n,...i}=t;const l=(0,r.AK)([a.Z.blank,n]);return(0,o.tZ)("button",{type:"button",className:l,...i,children:e})}},9746:(t,e,n)=>{n.r(e),n.d(e,{Tooltips:()=>N});var a=n(6400),r=n(396),o=n(6934),i=n.n(o),l=n(2323),s=n(7428),c=n(8105),u=n(484),d=n(6584);const h=t=>{let{target:e}=t;const n=(0,u.AK)([c.Z.mtk4,!e.value&&c.Z.err]),a=(0,u.AK)([c.Z.mtk10,!e.validity.valid&&c.Z.err]);return(0,d.tZ)("div",{className:"s",style:"min-width:"+e.offsetWidth+"px",children:(0,d.BX)("code",{className:"t",children:[(0,d.tZ)("span",{className:n,children:"export function "}),(0,d.tZ)("span",{className:a,children:e.value}),"() {",(0,d.tZ)("br",{}),(0,d.tZ)("span",{className:c.Z.mtk3,children:"  // TODO:"}),(0,d.tZ)("br",{}),"}"]})})};var p=n(5073);const m=(t,e)=>e?/\.js$/.test(t)?"Y":/\.jsw$/.test(t)?"Z":"X":"_",v=t=>{let{target:e}=t;const n=(a=e.value,a.replace(/^\//,"").split("/").map(((t,e,n)=>{const a=e===n.length-1;return{path:t,className:(0,u.AK)(["V",m(t,a),(0,p.Ox)(t,a)&&"W"])}}))).reduceRight(((t,e,n)=>(0,d.tZ)("ul",{className:0===n?"T":"U",children:(0,d.BX)("li",{children:[(0,d.tZ)("div",{className:e.className,children:e.path}),t]})})),(0,d.tZ)(d.HY,{}));var a;return(0,d.BX)("div",{className:"R",style:"min-width:"+e.offsetWidth+"px",children:[(0,d.tZ)("div",{className:"S",children:"Backend"}),n]})},f=JSON.parse('[{"label":"Every 1 hour","value":"0 * * * *"},{"label":"Every 3 hours","value":"0 */3 * * *"},{"label":"Every Monday","value":"0 0 * * MON"},{"label":"Every Tuesday and Sunday","value":"0 0 * * TUE,SUN"},{"label":"Every Friday at 12:15","value":"15 12 * * FRI"},{"label":"Every month","value":"0 0 1 * *"},{"label":"Every 2 months","value":"0 0 1 */2 *"},{"label":"Every 3 months at 10:30","value":"30 10 1 */3 *"},{"label":"Every year","value":"0 0 1 1 *"},{"label":"Every May and November","value":"0 0 1 MAY,NOV *"},{"label":"Every 4th of July at 18:30","value":"30 18 4 JUL *"}]');var g=n(1330);const b=t=>{let{target:e}=t;const{items:n,dispatch:a}=(0,l.bI)("items"),{id:r}=e.dataset,{cronExpression:o}=n.find((t=>t.id===r))||{},i=f.map((t=>{const e=(0,u.AK)(["ca",o===t.value&&"da"]);return(0,d.tZ)("li",{className:"ba",children:(0,d.tZ)(g.T,{value:t.value,title:t.value,className:e,children:t.label})},t.value)}));return(0,d.BX)("ul",{className:"aa",onClick:t=>{t.target instanceof HTMLButtonElement&&a("items/update",{id:r||"",name:s.tW.cronExpression,value:t.target.value})},children:[i,(0,d.tZ)("li",{className:"ba",children:(0,d.tZ)("a",{href:"https://github.com/shoonia/jobs.config/discussions/15",className:"ea",target:"_blank",rel:"noreferrer",tabIndex:0,children:"You can request an example"})})]})},y=i()({createElement:a.h,Component:a.wA,createRef:a.Vf}),N=()=>{const{items:t}=(0,l.bI)("items"),e=(0,r.I4)((t=>{const{name:e}=t.dataset;switch(e){case s.tW.functionLocation:return(0,d.tZ)(v,{target:t});case s.tW.functionName:return(0,d.tZ)(h,{target:t});case s.tW.cronExpression:return(0,d.tZ)(b,{target:t})}return null}),[t]);return(0,d.BX)(d.HY,{children:[(0,d.tZ)(y,{events:!0,delay:"500"}),(0,d.tZ)(y,{persist:!0,attribute:"data-fl",events:{focus:!0,click:!0},className:"q",onRenderContent:e})]})}},1621:(t,e,n)=>{n.d(e,{Z:()=>a});const a={base:"ia",btn:"ja ia",blank:"ka ia"}},8105:(t,e,n)=>{n.d(e,{Z:()=>a});const a={mtk1:"A",mtk4:"B",mtk3:"C",mtk5:"D",mtk6:"E",mtk10:"F",err:"G"}},6934:(t,e)=>{function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.__esModule=!0,e.default=void 0,e.default=function(t){var e,o,i=t.createElement,l=t.createRef;return o=e=function(t){var e,o;function s(){for(var e,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return r(n(e=t.call.apply(t,[this].concat(o))||this),"_hint",l()),r(n(e),"_container",l()),r(n(e),"state",{target:null,hidden:!0}),r(n(e),"target",null),r(n(e),"placement",null),r(n(e),"_containerStyle",{position:"relative"}),r(n(e),"toggleEvents",(function(t,n){var a=t.events,r=a.click,o=a.focus,i=a.hover,l=n?"addEventListener":"removeEventListener",s=!0===t.events;(r||s)&&document[l]("click",e.toggleHint),(o||s)&&document[l]("focusin",e.toggleHint),(i||s)&&document[l]("mouseover",e.toggleHint),(r||i||s)&&document[l]("touchend",e.toggleHint)})),r(n(e),"toggleHint",(function(t){var n=(void 0===t?{}:t).target,a=void 0===n?null:n;a=e.getHint(a),clearTimeout(e._timeout),e._timeout=setTimeout((function(){e.target=a,e.target&&(e.placement=null),e.getHintData()}),null===a?void 0===e.props.delay.hide?e.props.delay:e.props.delay.hide:void 0===e.props.delay.show?e.props.delay:e.props.delay.show)})),r(n(e),"getHint",(function(t){for(var n=e.props,a=n.attribute,r=n.persist,o=e.target;t&&t!==document;){if(r&&t===e._hint.current)return o;if(t.hasAttribute(a))return t;t=t.parentNode}return null})),r(n(e),"shallowEqual",(function(t,e){var n=Object.keys(t);return n.length===Object.keys(e).length&&n.reduce((function(n,a){return n&&("function"===typeof t[a]&&"function"===typeof e[a]||t[a]===e[a])}),!0)})),r(n(e),"getHintData",(function(){if(e.target){var t,n,a=e.props,r=a.attribute,o=a.autoPosition,i=a.position,l=e.target.getAttribute(r)||"",s=e.placement||e.target.getAttribute(r+"-at")||i,c=e._container.current.getBoundingClientRect(),u=c.top,d=c.left,h=e._hint.current.getBoundingClientRect(),p=h.width,m=h.height,v=e.target.getBoundingClientRect(),f=v.top,g=v.left,b=v.width,y=v.height;if(o&&!e.placement){var N=["left","right"].includes(s),Z=document.documentElement,E={left:(N?g-p:g+(b-p>>1))>0,right:(N?g+b+p:g+(b+p>>1))<Z.clientWidth,bottom:(N?f+(y+m>>1):f+y+m)<Z.clientHeight,top:(N?f-(m>>1):f-m)>0};if(!s||!E[s])switch(s){case"left":E.left||(s="right"),E.top||(s="bottom"),E.bottom||(s="top");break;case"right":E.right||(s="left"),E.top||(s="bottom"),E.bottom||(s="top");break;case"bottom":E.bottom||(s="top"),E.left||(s="right"),E.right||(s="left");break;default:E.top||(s="bottom"),E.left||(s="right"),E.right||(s="left")}}switch(s){case"left":t=y-m>>1,n=-p;break;case"right":t=y-m>>1,n=b;break;case"bottom":t=y,n=b-p>>1;break;default:t=-m,n=b-p>>1}(m>0||p>0)&&(e.placement=s),e.setState({content:l,at:s,top:t+f-u|0,left:n+g-d|0,hidden:!1})}else e.setState({hidden:!0})})),e}o=t,(e=s).prototype=Object.create(o.prototype),e.prototype.constructor=e,a(e,o);var c=s.prototype;return c.componentDidMount=function(){this.toggleEvents(this.props,!0)},c.componentWillUnmount=function(){this.toggleEvents(this.props,!1),clearTimeout(this._timeout)},c.componentDidUpdate=function(){this.target&&!this.state.hidden&&this.getHintData()},c.shouldComponentUpdate=function(t,e){return!this.shallowEqual(e,this.state)||!this.shallowEqual(t,this.props)},c.render=function(){var t=this.props,e=t.className,n=t.onRenderContent,a=this.state,r=a.content;return i("div",{ref:this._container,style:this._containerStyle},i("div",{className:e+" "+e+"--"+a.at,ref:this._hint,role:"tooltip",style:{top:a.top,left:a.left,display:this.target?void 0:"none"}},this.target&&(n?n(this.target,r):i("div",{className:e+"__content"},r))))},s}(t.Component),r(e,"defaultProps",{attribute:"data-rh",autoPosition:!1,className:"react-hint",delay:0,events:!1,onRenderContent:null,persist:!1,position:"top"}),o},t.exports=e.default}}]);