import{R as l,j as a,a as n,S as p}from"./Resizable-0495003d.js";import{S as s}from"./SampleBox-e329dd5f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const g={title:"Advanced",component:l},t={args:{axis:"x",initial:200},render:d=>a(l,{...d,onResizeStart:e=>{console.table(e)},onResizeEnd:e=>{console.table(e)},children:({position:e,separatorProps:c})=>n("div",{style:{display:"flex",height:"100vh",overflow:"hidden"},children:[a(s,{id:"left-block",theme:"blue",width:e,size:e,text:"You can see the callback arguments in the log"}),a(p,{id:"splitter",...c}),a(s,{id:"right-block",theme:"red",width:`calc(100% - ${e}px)`})]})})};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    axis: 'x',
    initial: 200
  },
  render: props => <Resizable {...props} onResizeStart={args => {
    console.table(args);
  }} onResizeEnd={args => {
    console.table(args);
  }}>
      {({
      position: x,
      separatorProps
    }) => <div style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }}>
          <SampleBox id="left-block" theme="blue" width={x} size={x} text="You can see the callback arguments in the log" />
          <SampleSeparator id="splitter" {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={\`calc(100% - \${x}px)\`} />
        </div>}
    </Resizable>
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const S=["Callback"];export{t as Callback,S as __namedExportsOrder,g as default};
//# sourceMappingURL=Callback.stories-de40298e.js.map
