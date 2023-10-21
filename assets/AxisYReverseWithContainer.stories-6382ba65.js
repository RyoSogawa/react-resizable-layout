import{R as d,a as o,F as m,j as e,S as h}from"./Resizable-0495003d.js";import{r as x}from"./index-f1f749bf.js";import{S as a}from"./SampleBox-e329dd5f.js";import"./_commonjsHelpers-042e6b4d.js";const b={title:"WithContainer",component:d},r={args:{axis:"y",initial:100,min:50,max:300,reverse:!0},render:p=>{const t=x.useRef(null);return o(m,{children:[e("div",{style:{padding:"16px",background:"red"}}),e(d,{...p,containerRef:t,children:({position:i,separatorProps:c})=>o("div",{ref:t,style:{display:"flex",flexDirection:"column",height:"calc(100vh - 64px)",overflow:"hidden"},children:[e(a,{id:"top-block",height:`calc(100% - ${i}px)`,theme:"blue"}),e(h,{id:"splitter",dir:"horizontal",...c}),e(a,{id:"bottom-block",height:i,size:i,theme:"red"})]})}),e("div",{style:{padding:"16px",background:"red"}})]})}};var s,n,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    axis: 'y',
    initial: 100,
    min: 50,
    max: 300,
    reverse: true
  },
  render: props => {
    const containerRef = useRef<HTMLDivElement>(null);
    return <>
        <div style={{
        padding: '16px',
        background: 'red'
      }} />
        <Resizable {...props} containerRef={containerRef}>
          {({
          position: y,
          separatorProps
        }) => <div ref={containerRef} style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 64px)',
          overflow: 'hidden'
        }}>
              <SampleBox id="top-block" height={\`calc(100% - \${y}px)\`} theme="blue" />
              <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
              <SampleBox id="bottom-block" height={y} size={y} theme="red" />
            </div>}
        </Resizable>
        <div style={{
        padding: '16px',
        background: 'red'
      }} />
      </>;
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const R=["AxisYReverseWithContainer"];export{r as AxisYReverseWithContainer,R as __namedExportsOrder,b as default};
//# sourceMappingURL=AxisYReverseWithContainer.stories-6382ba65.js.map
