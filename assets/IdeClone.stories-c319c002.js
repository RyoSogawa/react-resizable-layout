import{u as i,a as s,j as r,c as a,S as n}from"./Resizable-0495003d.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const f=()=>{const{isDragging:o,position:m,separatorProps:p}=i({axis:"y",initial:150,min:50,reverse:!0}),{isDragging:t,position:h,separatorProps:u}=i({axis:"x",initial:250,min:50}),{isDragging:g,position:x,separatorProps:D}=i({axis:"x",initial:200,min:50,reverse:!0});return s("div",{className:"flex flex-column h-screen bg-dark font-mono color-white overflow-hidden",children:[s("div",{className:"flex grow",children:[r("div",{className:a("shrink-0 contents",t&&"dragging"),style:{width:h},children:"File Tree"}),r(n,{isDragging:t,...u}),s("div",{className:"flex grow",children:[r("div",{className:"grow bg-darker contents",children:"Editor"}),r(n,{isDragging:g,...D}),r("div",{className:a("shrink-0 contents",g&&"dragging"),style:{width:x},children:"Plugin"})]})]}),r(n,{dir:"horizontal",isDragging:o,...p}),r("div",{className:a("shrink-0 bg-darker contents",o&&"dragging"),style:{height:m},children:"Terminal"})]})},v=f,k={title:"Example",component:v},e={};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["IDEClone"];export{e as IDEClone,C as __namedExportsOrder,k as default};
//# sourceMappingURL=IdeClone.stories-c319c002.js.map
