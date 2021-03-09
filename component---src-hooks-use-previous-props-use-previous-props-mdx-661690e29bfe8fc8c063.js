(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GV0n:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return f}));var o=n("Fcif"),s=n("+I+c"),r=n("mXGw"),u=n("/FXl"),a=n("TjRS"),i=n("ZFoC"),c=n("OuyR"),p=n("VIsN"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/usePreviousProps/usePreviousProps.mdx"}});var b={_frontmatter:l},v=a.a;function f(e){var t,n=e.components,f=Object(s.a)(e,["components"]);return Object(u.b)(v,Object(o.a)({},b,f,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"usepreviousprops"},"usePreviousProps"),Object(u.b)("h2",{id:"basic-usage"},"Basic usage"),Object(u.b)("p",null,"  保存的上个effect生命周期里的props"),Object(u.b)("pre",null,Object(u.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { usePreviousProps } from 'vc-ui'\n\nconst Child = ({ value }) => {\n  const previousProps = usePreviousProps(props)\n  if (previousProps.value !== props.value) {\n    console.log('changed')\n  } else {\n    console.log('not changed')\n  }\n  return (\n    <div>\n      <p>previous: {JSON.stringify(previousProps)}</p>\n      <p>current: {JSON.stringify(props)}</p>\n    </div>\n  )\n}\n")),Object(u.b)(i.c,{__position:0,__code:"() => {\n  const [text, setText] = useState('')\n  const [value, setValue] = useState('')\n  return (\n    <div>\n      <input onInput={e => setText(e.target.value)} />\n      <button type=\"button\" onClick={() => setValue(text)}>\n        confirm\n      </button>\n      <Child value={value} />\n    </div>\n  )\n}",__scope:(t={props:f,DefaultLayout:a.a,Playground:i.c,Props:i.d,useState:r.useState,useRef:r.useRef,usePreviousProps:c.a,Child:p.a},t.DefaultLayout=a.a,t._frontmatter=l,t),mdxType:"Playground"},(function(){var e=Object(r.useState)(""),t=e[0],n=e[1],o=Object(r.useState)(""),s=o[0],a=o[1];return Object(u.b)("div",null,Object(u.b)("input",{onInput:function(e){return n(e.target.value)}}),Object(u.b)("button",{type:"button",onClick:function(){return a(t)}},"confirm"),Object(u.b)(p.a,{value:s,mdxType:"Child"}))})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/usePreviousProps/usePreviousProps.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-previous-props-use-previous-props-mdx-661690e29bfe8fc8c063.js.map