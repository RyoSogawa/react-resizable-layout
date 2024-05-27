import{R as l,j as e,a as m,S as x}from"./Resizable-e5b7adab.js";import{S as s}from"./SampleBox-732eea89.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const S={title:"Basic",component:l},r={args:{axis:"x",initial:200,min:100,max:500,reverse:!0},render:p=>e(l,{...p,children:({position:i,separatorProps:d})=>m("div",{style:{display:"flex",height:"100vh",overflow:"hidden"},children:[e(s,{id:"left-block",theme:"blue",width:`calc(100% - ${i}px)`}),e(x,{id:"splitter",...d}),e(s,{id:"right-block",theme:"red",width:i,size:i})]})})};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
    reverse: true
  },
  render: props => <Resizable {...props}>
      {({
      position: x,
      separatorProps
    }) => <div style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }}>
          <SampleBox id="left-block" theme="blue" width={\`calc(100% - \${x}px)\`} />
          <SampleSeparator id="splitter" {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={x} size={x} />
        </div>}
    </Resizable>
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const b=["AxisXReverse"];export{r as AxisXReverse,b as __namedExportsOrder,S as default};
//# sourceMappingURL=AxisXReverse.stories-81e63289.js.map
