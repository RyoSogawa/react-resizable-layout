import{R as d,a as o,F as m,j as e,S as h}from"./Resizable-e5b7adab.js";import{r as x}from"./index-76fb7be0.js";import{S as a}from"./SampleBox-732eea89.js";import"./_commonjsHelpers-de833af9.js";const v={title:"WithContainer",component:d},i={args:{axis:"y",initial:100,min:50,max:300},render:p=>{const t=x.useRef(null);return o(m,{children:[e("div",{style:{padding:"16px",background:"red"}}),e(d,{...p,containerRef:t,children:({position:r,separatorProps:c})=>o("div",{ref:t,style:{display:"flex",flexDirection:"column",height:"calc(100vh - 32px)",overflow:"hidden"},children:[e(a,{id:"top-block",height:r,theme:"blue",size:r}),e(h,{id:"splitter",dir:"horizontal",...c}),e(a,{id:"bottom-block",height:`calc(100% - ${r}px)`,theme:"red"})]})}),e("div",{style:{padding:"16px",background:"red"}})]})}};var s,n,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    axis: 'y',
    initial: 100,
    min: 50,
    max: 300
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
          height: 'calc(100vh - 32px)',
          overflow: 'hidden'
        }}>
              <SampleBox id="top-block" height={y} theme="blue" size={y} />
              <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
              <SampleBox id="bottom-block" height={\`calc(100% - \${y}px)\`} theme="red" />
            </div>}
        </Resizable>
        <div style={{
        padding: '16px',
        background: 'red'
      }} />
      </>;
  }
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const y=["AxisYWithContainer"];export{i as AxisYWithContainer,y as __namedExportsOrder,v as default};
//# sourceMappingURL=AxisYWithContainer.stories-966d2099.js.map
