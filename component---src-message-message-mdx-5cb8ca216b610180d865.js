(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7cj3":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return f})),t.d(n,"default",(function(){return g}));var a=t("Fcif"),o=t("+I+c"),r=(t("mXGw"),t("/FXl")),s=t("TjRS"),i=t("ZFoC"),c=t("P7QW"),m=t("MUVh"),b=t("nraw"),l=t("jdsj"),d=t("/Pog"),f=(t("aD51"),{});void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/message/Message.mdx"}});var u={_frontmatter:f},p=s.a;function g(e){var n,t=e.components,g=Object(o.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},u,g,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"message"},"message"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(i.d,{of:l.a,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(i.c,{__position:1,__code:"() => {\n  const theme = createMuiTheme({\n    palette: {\n      primary: {\n        main: 'rgba(35, 178, 190, 1)',\n        contrastText: '#fff',\n        light: '#18FFFF',\n      },\n      error: { main: 'rgba(255, 152, 0, 1)' },\n      text: { disabled: 'rgba(0, 0, 0, 0.26)' },\n      action: { hover: 'rgba(0, 0, 0, 0.04)' },\n    },\n  })\n  setTheme(theme)\n  const showMessage = () => {\n    message.open({\n      noticeIconName: 'notifications',\n      content: '转诊成功！',\n      style: { left: '50%', bottom: '20px', transform: 'translateX(-50%)' },\n      expandActions: [\n        {\n          text: '查看患者',\n          iconName: 'notifications',\n          onClick: () => console.log('successful'),\n        },\n      ],\n      duration: 3,\n    })\n  }\n  const showMsg = () => {\n    message.open({\n      content: '密码设置成功！',\n      style: { left: '50%', bottom: '20px', transform: 'translateX(-50%)' },\n    })\n  }\n  return (\n    <ThemeProvider theme={theme}>\n      <div id=\"app\">\n        <Button variant=\"contained\" onClick={showMessage}>\n          显示Message\n        </Button>\n        <br />\n        <br />\n        <Button variant=\"contained\" onClick={showMsg}>\n          显示Message2\n        </Button>\n      </div>\n    </ThemeProvider>\n  )\n}",__scope:(n={props:g,DefaultLayout:s.a,Playground:i.c,Props:i.d,createMuiTheme:c.a,ThemeProvider:m.a,Button:b.a,message:l.a,setTheme:d.b},n.DefaultLayout=s.a,n._frontmatter=f,n),mdxType:"Playground"},(function(){var e=Object(c.a)({palette:{primary:{main:"rgba(35, 178, 190, 1)",contrastText:"#fff",light:"#18FFFF"},error:{main:"rgba(255, 152, 0, 1)"},text:{disabled:"rgba(0, 0, 0, 0.26)"},action:{hover:"rgba(0, 0, 0, 0.04)"}}});Object(d.b)(e);return Object(r.b)(m.a,{theme:e,mdxType:"ThemeProvider"},Object(r.b)("div",{id:"app"},Object(r.b)(b.a,{variant:"contained",onClick:function(){l.a.open({noticeIconName:"notifications",content:"转诊成功！",style:{left:"50%",bottom:"20px",transform:"translateX(-50%)"},expandActions:[{text:"查看患者",iconName:"notifications",onClick:function(){return console.log("successful")}}],duration:3})},mdxType:"Button"},"显示Message"),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(b.a,{variant:"contained",onClick:function(){l.a.open({content:"密码设置成功！",style:{left:"50%",bottom:"20px",transform:"translateX(-50%)"}})},mdxType:"Button"},"显示Message2")))})))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/message/Message.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-message-message-mdx-5cb8ca216b610180d865.js.map