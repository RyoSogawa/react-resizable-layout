import{R as l,a,j as e,S as x}from"./Resizable-e5b7adab.js";import{r as h}from"./index-76fb7be0.js";import{S as s}from"./SampleBox-732eea89.js";import"./_commonjsHelpers-de833af9.js";const v={title:"WithContainer",component:l},i={args:{axis:"x",initial:200,min:100,max:500},render:p=>{const t=h.useRef(null);return a("div",{style:{display:"flex"},children:[e("div",{style:{padding:"16px",background:"red"}}),e(l,{...p,containerRef:t,children:({position:r,separatorProps:c})=>a("div",{ref:t,id:"wrapper",style:{display:"flex",width:"100%",height:"100vh",overflow:"hidden"},children:[e(s,{id:"left-block",theme:"blue",width:r,size:r}),e(x,{id:"splitter",...c}),e(s,{id:"right-block",theme:"red",width:`calc(100% - ${r}px)`})]})}),e("div",{style:{padding:"16px",background:"red"}})]})}};var d,o,n;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500
  },
  render: props => {
    const containerRef = useRef<HTMLDivElement>(null);
    return <div style={{
      display: 'flex'
    }}>
        <div style={{
        padding: '16px',
        background: 'red'
      }} />
        <Resizable {...props} containerRef={containerRef}>
          {({
          position: x,
          separatorProps
        }) => <div ref={containerRef} id="wrapper" style={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}>
              <SampleBox id="left-block" theme="blue" width={x} size={x} />
              <SampleSeparator id="splitter" {...separatorProps} />
              <SampleBox id="right-block" theme="red" width={\`calc(100% - \${x}px)\`} />
            </div>}
        </Resizable>
        <div style={{
        padding: '16px',
        background: 'red'
      }} />
      </div>;
  }
}`,...(n=(o=i.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const b=["AxisXWithContainer"];export{i as AxisXWithContainer,b as __namedExportsOrder,v as default};
//# sourceMappingURL=AxisXWithContainer.stories-ee2c77f1.js.map
