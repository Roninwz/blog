(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{510:function(s,t,a){"use strict";a.r(t);var e=a(43),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"element-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-总结"}},[s._v("#")]),s._v(" element 总结")]),s._v(" "),a("h3",{attrs:{id:"element-事件回调传额外参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-事件回调传额外参数"}},[s._v("#")]),s._v(" element 事件回调传额外参数")]),s._v(" "),a("blockquote",[a("p",[s._v("用回调函数传递额外参数")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v('<el-upload\n:on-success="(response, file, fileList)=>handleUpSuccess(response, file, fileList,otherParams)"\n'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("el-upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"el-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#el-table"}},[s._v("#")]),s._v(" el-table")]),s._v(" "),a("ul",[a("li",[s._v("修改 el-table header 的背景色")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("header"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tableHeaderColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tableHeaderColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rowIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" columnIndex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rowIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'background-color:#E5E5E5; box-shadow:1px 1px 3px #333; border-bottom:1px solid #CDCDCD;'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("修改 el-table 行样式 （行的 style 的回调方法）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" <el-table :row-style=\"rowStyle\">\n     rowStyle({ row, rowIndex }) {\n      if (rowIndex === 0) {\n        return 'height:120px'\n      } else {\n        return 'height:120px'\n      }\n    },\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"el-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#el-input"}},[s._v("#")]),s._v(" el-input")]),s._v(" "),a("ul",[a("li",[s._v("el-input 输入不了内容（没有 disabled）:")])]),s._v(" "),a("blockquote",[a("p",[s._v("el-row 必须并排")])]),s._v(" "),a("h3",{attrs:{id:"el-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#el-form"}},[s._v("#")]),s._v(" el-form")]),s._v(" "),a("ul",[a("li",[s._v("el-form 表单重置")])]),s._v(" "),a("blockquote",[a("p",[s._v("代码： "),a("code",[s._v("this.$refs['appGuardSetForm'].resetFields();")]),s._v("\n注意点：\n当 formData:{ id:null} id 初始化有值，但是表单上没有 id 回显框 input，后台返回的 id 有值，resetFields 不能把 id 置为 null，需要手动重置 formData.id")])])])}),[],!1,null,null,null);t.default=n.exports}}]);