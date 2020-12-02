(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{442:function(v,_,e){"use strict";e.r(_);var t=e(43),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"前端总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端总结"}},[v._v("#")]),v._v(" 前端总结")]),v._v(" "),e("h3",{attrs:{id:"前端高级知识点概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端高级知识点概念"}},[v._v("#")]),v._v(" 前端高级知识点概念")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("PWA")])])]),v._v(" "),e("blockquote",[e("p",[v._v("简介：Progressive Web App 渐进式增强 WEB 应用")]),v._v(" "),e("p",[v._v("功能：")]),v._v(" "),e("blockquote",[e("p",[v._v("1、可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏")])]),v._v(" "),e("blockquote",[e("p",[v._v("2、实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能")])]),v._v(" "),e("blockquote",[e("p",[v._v("3、实现了消息推送")])]),v._v(" "),e("p",[v._v("关键技术：")]),v._v(" "),e("blockquote",[e("p",[v._v("Service Worker （可以理解为服务工厂）")])]),v._v(" "),e("blockquote",[e("p",[v._v("Manifest（应用清单）")])]),v._v(" "),e("blockquote",[e("p",[v._v("Push Notification（推送通知）")])])]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("Backend For Frontend")]),v._v("（服务于前端的后端）")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("Service Worker")])])])]),v._v(" "),e("blockquote",[e("p",[v._v("Service Worker 是 Chrome 团队提出和力推的一个 WEB API，用于给 web 应用提供高级的可持续的后台处理能力。")]),v._v(" "),e("p",[v._v("Service Workers 就像介于服务器和网页之间的拦截器，能够拦截进出的 HTTP 请求，从而完全控制你的网站")])]),v._v(" "),e("ul",[e("li",[v._v("浏览器缓存(Brower Caching)")])]),v._v(" "),e("blockquote",[e("p",[v._v("是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("XSS")]),v._v("（跨站脚本攻击），")])]),v._v(" "),e("blockquote",[e("p",[v._v("全称"),e("em",[v._v("Cross Site Scripting")]),v._v("，恶意攻击者向 web 页面中植入恶意 js 代码，当用户浏览到该页时，植入的代码被执行，达到恶意攻击用户的目的。")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("CSRF")]),v._v(" 跨站请求伪造")])]),v._v(" "),e("blockquote",[e("p",[v._v("（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。（详解："),e("a",{attrs:{href:"https://segmentfault.com/a/1190000007059639",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://segmentfault.com/a/1190000007059639"),e("OutboundLink")],1),v._v("）")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("跨域")]),v._v("：")])]),v._v(" "),e("blockquote",[e("p",[v._v("跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("柯里化")])])]),v._v(" "),e("blockquote",[e("p",[v._v("柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("鉴权（authentication）")])])]),v._v(" "),e("blockquote",[e("p",[v._v("是指验证用户是否拥有访问系统的权利")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("哈希算法")])])]),v._v(" "),e("blockquote",[e("p",[v._v("哈希算法在信息安全的应用主要是文件校验、数字签名、鉴权协议")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("域名收敛")])])]),v._v(" "),e("blockquote",[e("p",[v._v("就是将静态资源放在一个域名下。减少 DNS 解析的开销。")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("域名发散")])])]),v._v(" "),e("blockquote",[e("p",[v._v("是将静态资源放在多个子域名下，就可以多线程下载，提高并行度，使客户端加载静态资源更加迅速。")])]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("前端工程化")])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("前端模块化")])])]),v._v(" "),e("li",[e("p",[v._v("Chrome Devtool Performance中DCL, L, FP, FCP, FMP, LCP 的含义")])]),v._v(" "),e("li",[e("p",[v._v("prerender预渲染")])]),v._v(" "),e("li",[e("p",[v._v("Last-Modified，Etag，cache-control")])]),v._v(" "),e("li",[e("p",[v._v("浏览器模型")])]),v._v(" "),e("li",[e("p",[v._v("渲染原理")])]),v._v(" "),e("li",[e("p",[v._v("浏览器加载/解析流程")])]),v._v(" "),e("li",[e("p",[v._v("浏览器渲染原理")])]),v._v(" "),e("li",[e("p",[v._v("event loop 工作原理")])]),v._v(" "),e("li",[e("p",[v._v("webGL,OpenGL,OpenGL ES")])]),v._v(" "),e("li",[e("p",[v._v("GPU硬件加速，16ms 优化")])]),v._v(" "),e("li",[e("p",[v._v("assembly")])]),v._v(" "),e("li",[e("p",[v._v("web worker")])]),v._v(" "),e("li",[e("p",[v._v("Lerna是一个工具，它优化了使用Git和NPM管理多包存储库的工作流")])])]),v._v(" "),e("h2",{attrs:{id:"前端知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端知识点"}},[v._v("#")]),v._v(" 前端知识点")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("浏览器对同一个域名的并发数量有限制")])]),v._v(" "),e("li",[e("p",[v._v("ajax 的请求，请求头多了一个“X-Requested-With”属性")])]),v._v(" "),e("li",[e("p",[v._v("在移动设备中，不同设备的像素密度是不一样的，css 中的 1px 可能并不等于真实设备的一个像素值")])]),v._v(" "),e("li",[e("p",[v._v("跨站一定跨域，跨域并不一定跨站")])]),v._v(" "),e("li",[e("p",[v._v("使用chrome开发者工具中的performance面板解决性能瓶颈")])])])])}),[],!1,null,null,null);_.default=o.exports}}]);