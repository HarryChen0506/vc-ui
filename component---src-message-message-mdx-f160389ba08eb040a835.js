(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7cj3":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return g})),t.d(e,"default",(function(){return O}));var o=t("Fcif"),a=t("+I+c"),s=(t("mXGw"),t("/FXl")),i=t("TjRS"),c=t("ZFoC"),r=t("P7QW"),b=t("MUVh"),m=t("nraw"),l=t("yvnz"),p=t("jdsj"),u=t("hxHM"),d=t("47K3"),f=t("/Pog"),g=(t("aD51"),{});void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/message/Message.mdx"}});var y={_frontmatter:g},j=i.a;function O(n){var e,t=n.components,O=Object(a.a)(n,["components"]);return Object(s.b)(j,Object(o.a)({},y,O,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"message"},"message"),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)(c.d,{of:u.a,mdxType:"Props"}),Object(s.b)("h2",{id:"open-options"},"open options"),Object(s.b)(c.d,{of:d.a,mdxType:"Props"}),Object(s.b)("h2",{id:"basic-usage"},"Basic usage"),Object(s.b)(c.c,{__position:2,__code:"() => {\n  const theme = createMuiTheme({\n    palette: {\n      primary: {\n        main: 'rgba(35, 178, 190, 1)',\n        contrastText: '#fff',\n        light: '#18FFFF',\n      },\n    },\n  })\n  setTheme(theme)\n  const showMsg = () => {\n    message.open({\n      IsSingleton: false,\n      type: 'primary',\n      noticeIconName: 'notification',\n      content: '转诊成功！',\n      style: { left: '50%', bottom: '20px', transform: 'translateX(-50%)' },\n      expandActions: [\n        {\n          text: '查看患者',\n          iconName: 'notification',\n          onClick: () => console.log('successful'),\n        },\n      ],\n      duration: 30,\n    })\n  }\n  const showMsg2 = () => {\n    message.open({\n      type: 'warning',\n      noticeIconName: 'notification',\n      content: '密码设置成功！',\n      style: { left: '50%', bottom: '20px', transform: 'translateX(-50%)' },\n    })\n  }\n  const showMsg3 = () => {\n    message.open({\n      content: '密码设置成功！',\n      style: { right: '50px', bottom: '20px' },\n    })\n  }\n  const destroyMessage = () => {\n    message.destroy()\n  }\n  return (\n    <ThemeProvider theme={theme}>\n      <div>\n        <Button variant=\"contained\" onClick={showMsg}>\n          显示Message\n        </Button>\n        <br />\n        <br />\n        <Button variant=\"contained\" onClick={showMsg2}>\n          显示Message2\n        </Button>\n        <br />\n        <br />\n        <Button variant=\"contained\" onClick={showMsg3}>\n          显示Message3\n        </Button>\n        <br />\n        <br />\n        <Button variant=\"contained\" onClick={destroyMessage}>\n          销毁message\n        </Button>\n      </div>\n    </ThemeProvider>\n  )\n}",__scope:(e={props:O,DefaultLayout:i.a,Playground:c.c,Props:c.d,createMuiTheme:r.a,ThemeProvider:b.a,Button:m.a,Select:l.a,message:p.a,MessagePropTypes:u.a,OpenOptionsTypes:d.a,setTheme:f.b},e.DefaultLayout=i.a,e._frontmatter=g,e),mdxType:"Playground"},(function(){var n=Object(r.a)({palette:{primary:{main:"rgba(35, 178, 190, 1)",contrastText:"#fff",light:"#18FFFF"}}});Object(f.b)(n);return Object(s.b)(b.a,{theme:n,mdxType:"ThemeProvider"},Object(s.b)("div",null,Object(s.b)(m.a,{variant:"contained",onClick:function(){p.a.open({IsSingleton:!1,type:"primary",noticeIconName:"notification",content:"转诊成功！",style:{left:"50%",bottom:"20px",transform:"translateX(-50%)"},expandActions:[{text:"查看患者",iconName:"notification",onClick:function(){return console.log("successful")}}],duration:30})},mdxType:"Button"},"显示Message"),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)(m.a,{variant:"contained",onClick:function(){p.a.open({type:"warning",noticeIconName:"notification",content:"密码设置成功！",style:{left:"50%",bottom:"20px",transform:"translateX(-50%)"}})},mdxType:"Button"},"显示Message2"),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)(m.a,{variant:"contained",onClick:function(){p.a.open({content:"密码设置成功！",style:{right:"50px",bottom:"20px"}})},mdxType:"Button"},"显示Message3"),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)(m.a,{variant:"contained",onClick:function(){p.a.destroy()},mdxType:"Button"},"销毁message")))})))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/message/Message.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-message-message-mdx-f160389ba08eb040a835.js.map