import{R as p,j as e,a as c,S as r}from"./Resizable-0495003d.js";import{S as a}from"./SampleBox-e329dd5f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const v={title:"Advanced",component:p},i={args:{axis:"x",initial:200,min:100,max:500},render:d=>e(p,{...d,children:({position:n,endPosition:t,isDragging:m,separatorProps:h})=>c("div",{id:"wrapper",style:{position:"relative",display:"flex",height:"100vh",overflow:"hidden"},children:[e(a,{id:"left-block",theme:"blue",width:t,size:t}),e(r,{id:"splitter"}),e(r,{id:"virtual-splitter",...h,style:{position:"absolute",top:0,left:n,height:"100%",opacity:m?.3:0}}),e(a,{id:"right-block",theme:"red",width:`calc(100% - ${t}px)`})]})})};var o,s,l;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500
  },
  render: props => <Resizable {...props}>
      {({
      position: x,
      endPosition: endX,
      isDragging,
      separatorProps
    }) => <div id="wrapper" style={{
      position: 'relative',
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }}>
          <SampleBox id="left-block" theme="blue" width={endX} size={endX} />
          <SampleSeparator id="splitter" />
          <SampleSeparator id="virtual-splitter" {...separatorProps} style={{
        position: 'absolute',
        top: 0,
        left: x,
        height: '100%',
        opacity: isDragging ? 0.3 : 0
      }} />
          <SampleBox id="right-block" theme="red" width={\`calc(100% - \${endX}px)\`} />
        </div>}
    </Resizable>
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const b=["VirtualSplitter"];export{i as VirtualSplitter,b as __namedExportsOrder,v as default};
//# sourceMappingURL=VirtualSplitter.stories-116c6981.js.map
