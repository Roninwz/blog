(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{431:function(r,o,t){"use strict";t.r(o);var a=t(43),e=Object(a.a)({},(function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"for-循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-循环"}},[r._v("#")]),r._v(" for 循环")]),r._v(" "),t("h3",{attrs:{id:"for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[r._v("#")]),r._v(" for")]),r._v(" "),t("ul",[t("li",[r._v("1、for 有三个表达式：① 声明循环变量；② 判断循环条件；③ 更新循环变量；三个表达式之间，用;分割，for 循环三个表达式都可以省略，但是两个“;”缺一不可。")]),r._v(" "),t("li",[r._v("2、for 循环的执行特点：先判断再执行，与 while 相同")]),r._v(" "),t("li",[r._v("3、for 循环三个表达式都可以有多部分组成，第二部分多个判断条件用&& ||连接，第一三部分用逗号分割；")])]),r._v(" "),t("h3",{attrs:{id:"foreach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[r._v("#")]),r._v(" forEach")]),r._v(" "),t("ul",[t("li",[r._v("语法： "),t("code",[r._v("arr.forEach(function(self,index,arr){},this);")])])]),r._v(" "),t("blockquote",[t("p",[r._v("self：数组当前遍历的元素，默认从左往右依次获取数组元素。")])]),r._v(" "),t("blockquote",[t("p",[r._v("index：数组当前元素的索引，第一个元素索引为 0，依次类推。")])]),r._v(" "),t("blockquote",[t("p",[r._v("arr：当前遍历的数组。")])]),r._v(" "),t("blockquote",[t("p",[r._v("this：回调函数中 this 指向。")])]),r._v(" "),t("ul",[t("li",[r._v("注意点"),t("br"),r._v("\n1.forEach 不支持 break"),t("br"),r._v("\n2.forEach 中使用 return 无效"),t("br"),r._v("\n3.forEach 删除自身元素 index 不会被重置"),t("br"),r._v("\n详解： "),t("a",{attrs:{href:"https://www.cnblogs.com/echolun/p/11544045.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.cnblogs.com/echolun/p/11544045.html"),t("OutboundLink")],1)])]),r._v(" "),t("h3",{attrs:{id:"for-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-in"}},[r._v("#")]),r._v(" for in")]),r._v(" "),t("blockquote",[t("p",[r._v("for-in 循环主要用于遍历对象\nfor()中的格式：for(keys in zhangsan){}\nkeys 表示 obj 对象的每一个键值对的键！！所有循环中，需要使用 obj[keys]来取到每一个值！！！")])]),r._v(" "),t("blockquote",[t("p",[r._v("for-in 循环，遍历时不仅能读取对象自身上面的成员属性，也能延续原型链遍历出对象的原型属性\n所以，可以使用 hasOwnProperty 判断一个属性是不是对象自身上的属性。\nobj.hasOwnProperty(keys)==true 表示这个属性是对象的成员属性，而不是原先属性")])]),r._v(" "),t("h3",{attrs:{id:"for-of"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-of"}},[r._v("#")]),r._v(" for of")]),r._v(" "),t("blockquote",[t("p",[r._v("ES6 借鉴 C++、Java、C# 和 Python 语言，引入了 for...of 循环，作为遍历所有数据结构的统一的方法。")])]),r._v(" "),t("blockquote",[t("p",[r._v("一个数据结构只要部署了 Symbol.iterator 属性，就被视为具有 iterator 接口，就可以用 for...of 循环遍历它的成员。\n也就是说，for...of 循环内部调用的是数据结构的 Symbol.iterator 方法。\nfor...of 循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如 arguments 对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。")])]),r._v(" "),t("h3",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[r._v("#")]),r._v(" map")]),r._v(" "),t("h3",{attrs:{id:"区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[r._v("#")]),r._v(" 区别")]),r._v(" "),t("ul",[t("li",[t("p",[r._v("for...in 循环有几个缺点\n　　 ① 数组的键名是数字，但是 for...in 循环是以字符串作为键名“0”、“1”、“2”等等。\n　　 ②for...in 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。\n　　 ③ 某些情况下，for...in 循环会以任意顺序遍历键名。\n　　 for...in 循环主要是为遍历对象而设计的，不适用于遍历数组。")])]),r._v(" "),t("li",[t("p",[r._v("for...of 循环\n　　有着同 for...in 一样的简洁语法，但是没有 for...in 那些缺点。\n　　不同于 forEach 方法，它可以与 break、continue 和 return 配合使用。\n　　提供了遍历所有数据结构的统一操作接口。")])]),r._v(" "),t("li",[t("p",[r._v("详解： "),t("a",{attrs:{href:"https://www.cnblogs.com/baiyunke/p/7821299.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.cnblogs.com/baiyunke/p/7821299.html"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);o.default=e.exports}}]);