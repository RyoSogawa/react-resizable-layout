import{R as p,j as e,a as m,S as x}from"./Resizable-0495003d.js";import{S as s}from"./SampleBox-e329dd5f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const b={title:"Basic",component:p},i={args:{axis:"x",initial:200,min:100,max:500},render:l=>e(p,{...l,children:({position:r,separatorProps:d})=>m("div",{id:"wrapper",style:{display:"flex",height:"100vh",overflow:"hidden"},children:[e(s,{id:"left-block",theme:"blue",width:r,size:r}),e(x,{id:"splitter",...d}),e(s,{id:"right-block",theme:"red",width:`calc(100% - ${r}px)`})]})})};var a,t,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500
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
          <SampleSeparator id="splitter" {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={\`calc(100% - \${x}px)\`} />
        </div>}
    </Resizable>
}`,...(o=(t=i.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const f=["AxisX"];export{i as AxisX,f as __namedExportsOrder,b as default};
//# sourceMappingURL=AxisX.stories-ad1b8bb5.js.map
