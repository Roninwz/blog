(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{673:function(s,n,a){"use strict";a.r(n);var t=a(43),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[s._v("#")]),s._v(" vscode")]),s._v(" "),a("h3",{attrs:{id:"_1-插件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-插件安装"}},[s._v("#")]),s._v(" 1.插件安装")]),s._v(" "),a("ul",[a("li",[s._v("Emmet 代码提示")]),s._v(" "),a("li",[s._v("View In Browser")]),s._v(" "),a("li",[s._v("Code Runner")]),s._v(" "),a("li",[s._v("Path Autocomplete 路径完成提示")]),s._v(" "),a("li",[s._v("Path Intellisense")]),s._v(" "),a("li",[s._v("ESlint   格式化")]),s._v(" "),a("li",[s._v("prettier  格式化")]),s._v(" "),a("li",[s._v("vetur  vue.js代码提示，语法高亮")]),s._v(" "),a("li",[s._v("HTML CSS Support  支持html编写class提示已经定义的类名")]),s._v(" "),a("li",[s._v("Auto Rename Tag    适用于 JSX、Vue、HTML，在修改标签名时，能在你修改开始（结束）标签的时候修改对应的结束（开始）标签")]),s._v(" "),a("li",[s._v("JavaScript (ES6) code snippets  ES6语法中的JavaScript代码片段（支持JavaScript和TypeScript）")]),s._v(" "),a("li",[s._v("安装完code runner后需重启才能运行js")]),s._v(" "),a("li",[s._v("vetur vue提示插件")]),s._v(" "),a("li",[s._v("ES7 React/Redux/GraphQL/React-Native snippets react项目支持插件")]),s._v(" "),a("li",[s._v("Auto-Open Markdown Preview  打开Markdown文件时自动打开Markdown预览")]),s._v(" "),a("li",[s._v("Turbo Console.log()  支持对下面一行中的任何变量进行日志记录，并在代码结构之后自动添加前缀。")])]),s._v(" "),a("h3",{attrs:{id:"汉化："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#汉化："}},[s._v("#")]),s._v(" 汉化：")]),s._v(" "),a("p",[s._v("调出命令行ctrl+shift+p")]),s._v(" "),a("p",[s._v("安装汉语插件并重启就行了")]),s._v(" "),a("p",[s._v("快捷键：")]),s._v(" "),a("p",[s._v("vscode格式化插件：https://segmentfault.com/a/1190000014796012")]),s._v(" "),a("p",[s._v("格式调整")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("代码行缩进 Ctrl+[ 、 Ctrl+]\nCtrl+C 、 Ctrl+V 复制或剪切当前行/当前选中内容\n代码格式化： Shift+Alt+F，或 Ctrl+Shift+P 后输入 format code\n上下移动一行： Alt+Up 或 Alt+Down\n向上向下复制一行： Shift+Alt+Up 或 Shift+Alt+Down\n在当前行下边插入一行 Ctrl+Enter\n在当前行上方插入一行 Ctrl+Shift+Enter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"用户设置："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户设置："}},[s._v("#")]),s._v(" 用户设置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('旧版本格式化：\n\n"eslint.autoFixOnSave": true\n\n新版用这个：\n\n"editor.formatOnSave": true,\n\n{\n  "editor.tabSize": 2,\n  //分号\n  "prettier.semi": false,\n  //单引号包裹字符串\n  "prettier.singleQuote": true,\n  //开启 eslint 支持\n  "prettier.eslintIntegration": true,\n  // #每次保存的时候自动格式化 \n  "editor.formatOnSave": true,\n  //配置eslint\n  "eslint.autoFixOnSave": true,\n  //函数前是否加空格\n  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,\n  //没有下边这个 上边不生效\n  "vetur.format.defaultFormatter.js": "vscode-typescript",\n  //.vue文件template格式化支持，并使用js-beautify-html插件\n  "vetur.format.defaultFormatter.html": "js-beautify-html",\n  //js-beautify-html格式化配置，属性强制换行\n  "vetur.format.defaultFormatterOptions": {\n    "js-beautify-html": {\n      "wrap_attributes": "force-aligned"\n    }\n  },\n  "eslint.options": {\n    "plugins": [\n      "html"\n    ]\n  },\n  "eslint.validate": [\n    "javascript",\n    "javascriptreact",\n    "html",\n    "vue",\n    {\n      "language": "html",\n      "autoFix": true\n    },\n    {\n      "language": "vue",\n      "autoFix": true\n    }\n  ],\n  //根据文件后缀名定义vue文件类型\n  "files.associations": {\n    "*.vue": "vue"\n  },\n  //jsx语法自动补全\n  "emmet.includeLanguages": {\n    "javascript": "javascriptreact"\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br")])]),a("h3",{attrs:{id:"用户代码片段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户代码片段"}},[s._v("#")]),s._v(" 用户代码片段")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('javascript.json \n\n"function": {\n    "prefix": "fc",\n    "body": "function ${1:name}() {\\n\\n${2}}",\n    "description": "function 方法"\n  },\n  "import": {\n    "prefix": "import 导入资源",\n    "body": "import {$0} from \'\';",\n    "description": "导入"\n  },\n\n  "Print to console": {\n    "prefix": "clg",\n    "body": ["console.log(\'my console $1 : \' , $1);"],\n    "description": "Log output to console"\n  },\n  "Print to json console": {\n    "prefix": "clgj",\n    "body": ["console.log(\'my console $1 : \' + JSON.stringfy($1))"],\n    "description": "Log output to console json"\n  }\n  \n  \n  \n vue.json\n \n \n   "vue template": {\n        "prefix": "vue",\n        "body": [\n            "<template>",\n            "    <div>\\n",\n            "    </div>",\n            "</template>\\n",\n            "<script>",\n            "export default {",\n            "    components: {\\n",\n            "    },",\n            "    data() {",\n            "        return {\\n",\n            "        };",\n            "    },",\n            "    created() {\\n",\n            "    },",\n            "    mounted() {\\n",\n            "    },",\n            "    watch: {\\n",\n            "    },",\n            "    computed: {\\n",\n            "    },",\n            "    methods: {\\n",\n            "    },",\n            "};",\n            "<\/script>\\n",\n            "<style scoped lang=\\"${1:scss}\\">\\n",\n            "</style>\\n",\n        ],\n        "description": "Create vue template"\n    }\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br")])]),a("h3",{attrs:{id:"快捷键："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键："}},[s._v("#")]),s._v(" 快捷键：")]),s._v(" "),a("p",[s._v("ctrl+f   局部查找")]),s._v(" "),a("p",[s._v("ctrl+shift+f  全局查找")]),s._v(" "),a("p",[s._v("ctrl+G 定位到哪一行")]),s._v(" "),a("p",[s._v("ctrl+p  查找文件")]),s._v(" "),a("p",[s._v("折叠所有区域代码的快捷： 先ctrl + k      后ctrl + 0 ;")]),s._v(" "),a("p",[s._v("展开所有折叠区域代码的快捷：先ctrl +k     后ctrl + J ;")]),s._v(" "),a("h3",{attrs:{id:"快速编写css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速编写css"}},[s._v("#")]),s._v(" 快速编写css")]),s._v(" "),a("ul",[a("li",[s._v("w10 width: 10px;")]),s._v(" "),a("li",[s._v("h10 height: 10px;")]),s._v(" "),a("li",[s._v("p0  padding: 0;")]),s._v(" "),a("li",[s._v("m40 margin: 40px;")]),s._v(" "),a("li",[s._v("m40-50 margin: 40px 50px;")]),s._v(" "),a("li",[s._v("z1  z-index: 1;")]),s._v(" "),a("li",[s._v("oxh overflow-x: hidden;")]),s._v(" "),a("li",[s._v("oxs overflow-x: scroll;")]),s._v(" "),a("li",[s._v("oh  overflow: hidden;")]),s._v(" "),a("li",[s._v("bd  border: 1px solid #000;")]),s._v(" "),a("li",[s._v("bdr border-right: 1px solid #000;")]),s._v(" "),a("li",[s._v("bd2-s border: 2px solid;")]),s._v(" "),a("li",[s._v("cup cursor: pointer;")])]),s._v(" "),a("h3",{attrs:{id:"技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[s._v("#")]),s._v(" 技巧")]),s._v(" "),a("ul",[a("li",[s._v("快速回到上一级并折叠  键盘 <- 就可以回到上级。")])]),s._v(" "),a("h3",{attrs:{id:"vscode侧边栏字体大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode侧边栏字体大小"}},[s._v("#")]),s._v(" vscode侧边栏字体大小")]),s._v(" "),a("blockquote",[a("p",[s._v("C:\\software\\VSCode\\resources\\app\\out\\vs\\workbench\\workbench.desktop.main.css"),a("br"),s._v("\n查找 .part>.content"),a("br"),s._v("\n修改如下的字体大小 font-size")])])])}),[],!1,null,null,null);n.default=e.exports}}]);