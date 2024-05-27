import{R as l,a as s,j as e,S as x}from"./Resizable-e5b7adab.js";import{r as h}from"./index-76fb7be0.js";import{S as a}from"./SampleBox-732eea89.js";import"./_commonjsHelpers-de833af9.js";const g={title:"WithContainer",component:l},r={args:{axis:"x",initial:200,min:100,max:500,reverse:!0},render:p=>{const t=h.useRef(null);return s("div",{style:{display:"flex"},children:[e("div",{style:{padding:"16px",background:"red"}}),e(l,{...p,containerRef:t,children:({position:i,separatorProps:c})=>s("div",{ref:t,style:{display:"flex",width:"100%",height:"100vh",overflow:"hidden"},children:[e(a,{id:"left-block",theme:"blue",width:`calc(100% - ${i}px)`}),e(x,{id:"splitter",...c}),e(a,{id:"right-block",theme:"red",width:i,size:i})]})}),e("div",{style:{padding:"16px",background:"red"}})]})}};var o,d,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
    reverse: true
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
        }) => <div ref={containerRef} style={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}>
              <SampleBox id="left-block" theme="blue" width={\`calc(100% - \${x}px)\`} />
              <SampleSeparator id="splitter" {...separatorProps} />
              <SampleBox id="right-block" theme="red" width={x} size={x} />
            </div>}
        </Resizable>
        <div style={{
        padding: '16px',
        background: 'red'
      }} />
      </div>;
  }
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const R=["AxisXReverseWithContainer"];export{r as AxisXReverseWithContainer,R as __namedExportsOrder,g as default};
//# sourceMappingURL=AxisXReverseWithContainer.stories-d40a8de6.js.map
