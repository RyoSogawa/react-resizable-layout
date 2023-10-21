import{R as g,j as e,a as n,S as m}from"./Resizable-0495003d.js";import{S as a}from"./SampleBox-e329dd5f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const b={title:"Advanced",component:g},i={args:{axis:"x",initial:200,min:100,max:500},render:p=>e(g,{...p,children:({position:r,isDragging:t,separatorProps:d})=>n("div",{style:{display:"flex",height:"100vh",overflow:"hidden"},children:[e(a,{id:"left-block",theme:"blue",width:r,size:r,text:t&&"Dragging..."}),e(m,{id:"splitter",...d}),e(a,{id:"right-block",theme:"red",width:`calc(100% - ${r}px)`,text:t&&"Dragging..."})]})})};var s,o,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500
  },
  render: props => <Resizable {...props}>
      {({
      position: x,
      isDragging,
      separatorProps
    }) => <div style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }}>
          <SampleBox id="left-block" theme="blue" width={x} size={x} text={isDragging && 'Dragging...'} />
          <SampleSeparator id="splitter" {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={\`calc(100% - \${x}px)\`} text={isDragging && 'Dragging...'} />
        </div>}
    </Resizable>
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const f=["DraggingState"];export{i as DraggingState,f as __namedExportsOrder,b as default};
//# sourceMappingURL=DraggingState.stories-baa5b71b.js.map
