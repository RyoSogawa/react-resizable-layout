import{R as l,j as e,a as m,S as c}from"./Resizable-0495003d.js";import{S as o}from"./SampleBox-e329dd5f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const b={title:"Basic",component:l},r={args:{axis:"y",initial:100,min:50,max:300,reverse:!0},render:p=>e(l,{...p,children:({position:i,separatorProps:d})=>m("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"},children:[e(o,{id:"top-block",height:`calc(100% - ${i}px)`,theme:"blue"}),e(c,{id:"splitter",dir:"horizontal",...d}),e(o,{id:"bottom-block",height:i,theme:"red",size:i})]})})};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    axis: 'y',
    initial: 100,
    min: 50,
    max: 300,
    reverse: true
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
          <SampleBox id="top-block" height={\`calc(100% - \${y}px)\`} theme="blue" />
          <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
          <SampleBox id="bottom-block" height={y} theme="red" size={y} />
        </div>}
    </Resizable>
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["AxisYReverse"];export{r as AxisYReverse,u as __namedExportsOrder,b as default};
//# sourceMappingURL=AxisYReverse.stories-1b55b85d.js.map
