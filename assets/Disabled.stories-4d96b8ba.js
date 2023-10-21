import{R as o,j as e,a as m,S as c}from"./Resizable-0495003d.js";import{S as a}from"./SampleBox-e329dd5f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const S={title:"Basic",component:o},i={args:{axis:"x",initial:200,min:100,max:500,disabled:!0},render:l=>e(o,{...l,children:({position:r,separatorProps:p})=>m("div",{id:"wrapper",style:{display:"flex",height:"100vh",overflow:"hidden"},children:[e(a,{id:"left-block",theme:"blue",width:r,size:r}),e(c,{id:"splitter",disabled:!0,...p}),e(a,{id:"right-block",theme:"red",width:`calc(100% - ${r}px)`})]})})};var s,t,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
    disabled: true
  },
  render: props => <Resizable {...props}>
      {({
      position: x,
      separatorProps
    }) => <div id="wrapper" style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }}>
          <SampleBox id="left-block" theme="blue" width={x} size={x} />
          <SampleSeparator id="splitter" disabled {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={\`calc(100% - \${x}px)\`} />
        </div>}
    </Resizable>
}`,...(d=(t=i.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const f=["Disabled"];export{i as Disabled,f as __namedExportsOrder,S as default};
//# sourceMappingURL=Disabled.stories-4d96b8ba.js.map
