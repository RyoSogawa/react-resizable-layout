import{R as l,j as e,a as m,S as c}from"./Resizable-e5b7adab.js";import{S as r}from"./SampleBox-732eea89.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const S={title:"Basic",component:l},i={args:{axis:"y",initial:100,min:50,max:300},render:p=>e(l,{...p,children:({position:o,separatorProps:d})=>m("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"},children:[e(r,{id:"top-block",height:o,theme:"blue",size:o}),e(c,{id:"splitter",dir:"horizontal",...d}),e(r,{id:"bottom-block",height:`calc(100% - ${o}px)`,theme:"red"})]})})};var t,s,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    axis: 'y',
    initial: 100,
    min: 50,
    max: 300
  },
  render: props => <Resizable {...props}>
      {({
      position: y,
      separatorProps
    }) => <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden'
    }}>
          <SampleBox id="top-block" height={y} theme="blue" size={y} />
          <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
          <SampleBox id="bottom-block" height={\`calc(100% - \${y}px)\`} theme="red" />
        </div>}
    </Resizable>
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const f=["AxisY"];export{i as AxisY,f as __namedExportsOrder,S as default};
//# sourceMappingURL=AxisY.stories-e6dd6d56.js.map
