(window.J=window.J||[]).push([[715],{943:(a,e,t)=>{t.r(e),t.d(e,{ValidatorPage:()=>Z});var l=t(323),r=t(484),n=t(661),i=t(584);const o=(0,n.Vo)((()=>Promise.all([t.e(533),t.e(842)]).then(t.bind(t,740)).then((a=>a.Parser)))),s=a=>(0,i.tZ)(n.n4,{fallback:null,children:(0,i.tZ)(o,{...a})});var d=t(396),c=t(934),h=t(153);const u=()=>(0,i.tZ)("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 18 18","aria-hidden":"true",children:(0,i.tZ)("path",{d:"M10.997 7a.5.5 0 010 .707L7.707 11A.5.5 0 017 10.293L10.29 7a.5.5 0 01.707 0zm-1.145 5.852l-1.137 1.123A3.336 3.336 0 014 13.978a3.325 3.325 0 01-.006-4.701L4 9.27l1.142-1.122a.499.499 0 01.706.006v.001a.501.501 0 01-.007.708L4.706 9.978a2.326 2.326 0 000 3.292c.913.91 2.39.91 3.302-.002l1.131-1.119a.506.506 0 01.712 0 .494.494 0 01.005.698l-.004.005zM8.16 5.114l1.124-1.095a3.334 3.334 0 014.737.039 3.378 3.378 0 01-.068 4.762l-1.086 1.033a.516.516 0 01-.72-.008.485.485 0 01.008-.697l1.1-1.044c.938-.912.87-2.5.049-3.35-.811-.838-2.404-.935-3.314-.027L8.827 5.86a.479.479 0 01-.692-.024.523.523 0 01.026-.723z"})}),p=({className:a})=>{const[e,t]=(0,d.eJ)(!1),l=e?"Copied!":"Copy link to validation results";return(0,i.tZ)("button",{type:"button",onClick:async()=>{const{validatorValue:a}=c.h.get(),e=(0,h.X)(a);e&&(history.pushState(null,"",e),await navigator.clipboard.writeText(e),t(!0),await(0,r.gw)(2e3),t(!1))},className:a,"aria-label":l,"data-rh":l,"data-rh-at":"left",children:(0,i.tZ)(u,{})})},v=()=>(0,i.tZ)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,i.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})}),m=({onLoad:a,onError:e})=>(0,i.BX)("label",{className:"Y","aria-label":"Upload your file","data-rh":"Upload your file","data-rh-at":"left",children:[(0,i.tZ)("input",{type:"file",className:"Z",onChange:({target:t})=>{(a=>new Promise(((e,t)=>{var l;if(a instanceof HTMLInputElement&&1===(null==(l=a.files)?void 0:l.length)){const l=a.files[0],n=new FileReader;n.onload=()=>{(0,r.HD)(n.result)?e(n.result):t()},n.onerror=t,n.readAsText(l)}else t()})))(t).then(a,e)}}),(0,i.tZ)(v,{})]}),Z=()=>{const{validatorValue:a,dispatch:e}=(0,l.bI)("validatorValue");return(0,i.tZ)("section",{className:"H",children:(0,i.BX)("div",{className:"J",children:[(0,i.tZ)("h2",{className:"I",children:"Jobs Config Validator"}),(0,i.BX)("form",{action:"#",onSubmit:r.PF,className:"K",children:[(0,i.tZ)("textarea",{onInput:({target:a})=>{a instanceof HTMLTextAreaElement&&e("validator/input",a.value)},className:"L",value:a,placeholder:"{}",spellcheck:!1}),(0,i.BX)("aside",{className:"M",children:[(0,i.tZ)(p,{className:"N"}),(0,i.tZ)("span",{className:"N",children:(0,i.tZ)(m,{onLoad:a=>{e("validator/input",a)}})})]})]}),(0,i.tZ)(s,{value:a})]})})}}}]);