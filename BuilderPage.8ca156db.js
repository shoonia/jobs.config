parcelRequire=function(e){var a="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require,t={};function r(e,r){if(e in t)return t[e];var n="function"==typeof parcelRequire&&parcelRequire;if(!r&&n)return n(e,!0);if(a)return a(e,!0);if(o&&"string"==typeof e)return o(e);var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return r.register=function(e,a){t[e]=a},t=function(e){function a(e){return e&&e.__esModule?{d:e.default}:{d:e}}var o={};function t(){return e("aSor").h(e("aSor").Fragment,null,e("aSor").h(v,null),e("aSor").h(r,null))}function r(){const{dispatch:o,items:t,isMax:r}=e("RIA0").useStoreon("items","isMax"),c=e("MwGB").useCallback((({target:e})=>{o("items/remove",e.form.id)}),[]),d=e("MwGB").useCallback((({target:e})=>{o("items/clone",e.form.id)}),[]),s=e("MwGB").useCallback((({target:e})=>{o("items/update",{id:e.form.id,name:e.dataset.name,value:e.value})}),[]),l=t.map((a=>e("aSor").h(i,{key:a.id,data:a,remove:c,clone:d,update:s,isMax:r})));var u=a(n);return e("aSor").h("ul",{className:u.d.list},l)}var n={};function i({data:o,remove:t,clone:r,update:i,isMax:d}){const{id:s,period:l}=o,u=l===e("eKDL").PERIOD.WEEKLY&&e("aSor").h(p,{day:o.dayOfWeek}),m=l===e("eKDL").PERIOD.MONTHLY&&e("aSor").h(f,{date:o.dateInMonth+""});var h=a(n);return e("aSor").h("li",null,e("aSor").h("form",{id:s,action:"#",className:h.d.item,onInput:i,onSubmit:e("GUNI").preventDefault},e("aSor").h(_,{functionLocation:o.functionLocation,functionName:o.functionName,description:o.description}),e("aSor").h(c,{name:s,period:l,time:o.time,cronExpression:o.cronExpression}),u,m,e("aSor").h(S,{remove:t,clone:r,isMax:d})))}function c({name:o,time:t,cronExpression:r,period:i}){const[c,d]=e("AQ6k").useState(!1),u=i===e("eKDL").PERIOD.CRON,h=u?e("aSor").h(m,{value:r,error:c}):e("aSor").h(l,{value:t}),p=u&&e("aSor").h(e("AQ6k").Suspense,{fallback:null},e("aSor").h(e("ubaf").CronTrue,{value:r,setValidity:d}));var f=a(n);return e("aSor").h("fieldset",{className:f.d.fields},e("aSor").h("div",{className:f.d.location},e("aSor").h("div",null,h,e("aSor").h(s,{name:o,value:e("eKDL").PERIOD.DAILY,period:i}),e("aSor").h(s,{name:o,value:e("eKDL").PERIOD.WEEKLY,period:i}),e("aSor").h(s,{name:o,value:e("eKDL").PERIOD.MONTHLY,period:i}),e("aSor").h(s,{name:o,value:e("eKDL").PERIOD.CRON,period:i})),e("aSor").h("span",{className:c&&f.d.error},p)))}n={list:"_list_c86d8",item:"_item_c86d8",fields:"_fields_c86d8",buttons:"_buttons_c86d8",btn:"_btn_c86d8",btnRemove:"_btnRemove_c86d8 _btn_c86d8",btnClone:"_btnClone_c86d8 _btn_c86d8",title:"_title_c86d8",period:"_period_c86d8",location:"_location_c86d8",block:"_block_c86d8",label:"_label_c86d8",text:"_text_c86d8",inputs:"_inputs_c86d8",funcInput:"_funcInput_c86d8 _inputs_c86d8",date:"_date_c86d8 _inputs_c86d8",cron:"_cron_c86d8 _date_c86d8 _inputs_c86d8",description:"_description_c86d8 _inputs_c86d8",slash:"_slash_c86d8",error:"_error_c86d8"},e("aSor");const d=({key:e,target:a})=>{"Enter"!==e&&" "!==e||a.firstChild.click()};function s({name:o,value:t,period:r}){const i=t===r;var c=a(n);return e("aSor").h("label",{className:c.d.label,tabIndex:i?-1:0,onKeyPress:d},e("aSor").h("input",{type:"radio",name:o,checked:i,"data-name":"period",value:t,className:c.d.period}),e("aSor").h("span",{className:c.d.title},t))}function l({value:o}){var t=a(n);return e("aSor").h(u,{top:"The time of day the job runs."},e("aSor").h("input",{type:"time",value:o,"data-name":"time",className:t.d.date,required:!0}))}function u({top:o,children:t}){var r=a(n);return e("aSor").h("label",{className:r.d.block},e("aSor").h("span",{className:r.d.text},o),t)}function m({value:o,error:t}){const r=e("MwGB").useRef();var i=a(n);return e("MwGB").useEffect((()=>{r.current.setCustomValidity(t?"error":"")}),[t]),e("aSor").h(u,{top:"A valid cron expression"},e("aSor").h("input",{ref:r,type:"text",className:i.d.cron,value:o,"data-name":"cronExpression",required:!0}))}e("aSor"),e("aSor"),e("aSor"),e("MwGB"),e("aSor"),e("AQ6k"),e("eKDL"),e("ubaf"),e("aSor"),e("IjgQ");const h=e("IjgQ").weekList.map((a=>e("aSor").h("option",{key:a,value:a},a)));function p({day:o}){var t=a(n);return e("aSor").h("fieldset",{className:t.d.fields},e("aSor").h("div",{className:t.d.location},e("aSor").h(u,{top:"The day of the week the job runs."},e("aSor").h("select",{className:t.d.date,"data-name":"dayOfWeek",value:o},h))))}function f({date:o}){var t=a(n);return e("aSor").h("fieldset",{className:t.d.fields},e("aSor").h("div",{className:t.d.location},e("aSor").h(u,{top:"The day of the month the job runs."},e("aSor").h("input",{type:"number",min:"1",max:"31",step:"1",value:o,"data-name":"dateInMonth",className:t.d.date,required:!0}))))}function S({remove:o,clone:t,isMax:r}){var i=a(n);return e("aSor").h("div",{className:i.d.buttons},e("aSor").h("button",{type:"button","aria-label":"remove",onClick:o,className:i.d.btnRemove,"data-rh":"Remove","data-rh-at":"top"}),e("aSor").h("button",{type:"button","aria-label":"clone",onClick:t,className:i.d.btnClone,"data-rh":"Clone","data-rh-at":"top",disabled:r}))}function _({functionLocation:o,functionName:t,description:r}){var i=a(n);return e("aSor").h("fieldset",{className:i.d.fields},e("aSor").h("div",{className:i.d.location},e("aSor").h(u,{top:"Function Location"},e("aSor").h("input",{type:"text","data-name":"functionLocation","data-fl":!0,"data-fl-at":"bottom",className:i.d.funcInput,value:o,placeholder:"Function Location",pattern:"^(\\/)?[\\w\\-\\.\\/]*[\\w-]\\.jsw?$",required:!0})),e("aSor").h("span",{className:i.d.slash},"/"),e("aSor").h(u,{top:"Function Name"},e("aSor").h("input",{type:"text","data-name":"functionName","data-fl":!0,"data-fl-at":"bottom",className:i.d.funcInput,value:t,placeholder:"Function Name",pattern:"^(\\s)*?[\\$a-zA-Z_][\\$\\w]*(\\s)*?$",required:!0}))),e("aSor").h("div",{className:i.d.location},e("aSor").h(u,{top:"Description"},e("aSor").h("input",{type:"text",value:r,className:i.d.description,"data-name":"description",placeholder:"Description"}))))}function v(){const{dispatch:o,isMax:t}=e("RIA0").useStoreon("isMax");var r=a(b);return e("aSor").h("div",{className:r.d.section},e("aSor").h("span",{"data-rh":"You can configure up to 20 jobs.",className:r.d.tooltip},e("aSor").h(e("Y6JO").Button,{onClick(){o("items/new")},disabled:t},e("aSor").h(N,null)," New Job")))}e("aSor"),e("aSor"),e("aSor"),e("aSor"),e("eKDL"),e("GUNI"),e("aSor"),e("MwGB"),e("RIA0");var b={};function N(){return e("aSor").h("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true"},e("aSor").h("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"}))}function x({left:o,right:t}){var r=a(g);return e("aSor").h("div",{className:r.d.box},e("aSor").h("div",{className:r.d.left},o),e("aSor").h("div",{className:r.d.right},t))}b={section:"_section_8ee3b",tooltip:"_tooltip_8ee3b"},e("aSor"),e("aSor"),e("RIA0"),e("Y6JO"),e("aSor");var g={};function y(){const{items:o}=e("RIA0").useStoreon("items"),t=e("MwGB").useRef(),r=e("FFbO").createConfig(o),n="data:application/json,"+encodeURIComponent(r);var i=a(R);return e("aSor").h("div",{className:i.d.box},e("aSor").h("div",{className:i.d.copy},e("aSor").h(e("Y6JO").Button,{onClick(){const e=window.getSelection(),a=document.createRange();a.selectNodeContents(t.current),e.removeAllRanges(),e.addRange(a),document.execCommand("copy")}},"Copy Code")),e("aSor").h("pre",{ref:t,className:i.d.out},e("aSor").h(I,{input:r})),e("aSor").h("div",{className:i.d.export},e("aSor").h("a",{href:n,className:i.d.download,download:"jobs.config",type:"application/json","aria-label":"Download a file","data-rh":"Download a file","data-rh-at":"left"})))}g={box:"_box_cefb1",column:"_column_cefb1",left:"_left_cefb1 _column_cefb1",right:"_right_cefb1 _column_cefb1"},e("aSor");var R={};R={box:"_box_cee26",out:"_out_cee26",copy:"_copy_cee26",export:"_export_cee26",download:"_download_cee26"},e("aSor"),e("AQ6k"),e("jCGa");var k=a(e("jCGa"));const w=[{regex:/^\s+/},{regex:/^[{}]/},{regex:/^[[\]]/},{regex:/^:/},{regex:/^,/},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i,className:k.d.mtk5},{regex:/^"(?:\\.|[^"\\])*"(?=\s*:)/,className:k.d.mtk6},{regex:/^"(?:\\.|[^"\\])*"/,className:k.d.mtk6}],I=e("AQ6k").memo((function({input:a}){const o=[];let t;do{t=!1;for(let r=0;r<w.length;r++){const n=w[r],i=n.regex.exec(a);if(Array.isArray(i)){const r=i[0],c=void 0!==n.className?e("aSor").h("span",{className:n.className},r):r;o.push(c),a=a.substring(r.length),t=!0;break}}}while(a.length>0&&t);return e("aSor").h("code",null,o)}));return e("aSor"),e("RIA0"),e("MwGB"),e("Y6JO"),e("FFbO"),e("aSor"),o.BuilderPage=function(){return e("aSor").h(x,{left:e("aSor").h(t,null),right:e("aSor").h(y,null)})},"object"===typeof exports&&"undefined"!==typeof module?module.exports=o:"function"===typeof define&&define.amd&&define((function(){return o})),o.__esModule=!0,{zHZx:o}}(r),r.modules=t,r}();