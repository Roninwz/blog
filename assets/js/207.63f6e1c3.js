(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{565:function(t,s,a){"use strict";a.r(s);var _=a(43),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"网络面试及答案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络面试及答案"}},[t._v("#")]),t._v(" 网络面试及答案")]),t._v(" "),a("h3",{attrs:{id:"_1-讲述一下计算机网络的七层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-讲述一下计算机网络的七层"}},[t._v("#")]),t._v(" 1.讲述一下计算机网络的七层")]),t._v(" "),a("p",[t._v("​ 应用层、表示层、会话层、传输层、网络层、数据链路层、物理层")]),t._v(" "),a("h3",{attrs:{id:"_2-tcp-和-udp-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp-和-udp-的区别是什么"}},[t._v("#")]),t._v(" 2.TCP 和 UDP 的区别是什么")]),t._v(" "),a("p",[t._v("TCP：面向连接、传输可靠(保证数据正确性,保证数据顺序)、用于传输大量数据(流模式)、速度慢，建立连接需要开销较多(时间，系统资源)")]),t._v(" "),a("p",[t._v("UDP：面向非连接、传输不可靠、用于传输少量数据(数据包模式)、速度快")]),t._v(" "),a("p",[t._v("TCP 和 UDP 协议的一些应用例子：")]),t._v(" "),a("p",[t._v("TCP 一般用于文件传输（FTP HTTP 对数据准确性要求高，速度可以相对慢），发送或接收邮件（POP IMAP SMTP 对数据准确性要求高，非紧急应用），远程登录（TELNET SSH 对数据准确性有一定要求，有连接的概念）等等；UDP 一般用于即时通信（QQ 聊天 对数据准确性和丢包要求比较低，但速度必须快），在线视频（RTSP 速度一定要快，保证视频连续，但是偶尔花了一个图像帧，人们还是能接受的），网络语音电话（VoIP 语音数据包一般比较小，需要高速发送，偶尔断音或串音也没有问题）等等。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-tcp-的三次握手和四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-tcp-的三次握手和四次挥手"}},[t._v("#")]),t._v(" 2.1 TCP 的三次握手和四次挥手")]),t._v(" "),a("p",[t._v("确认号 ACK：确认序号的标志，ACK=1 表示确认号有效，ACK=0 表示报文不含确认序号信息")]),t._v(" "),a("p",[t._v("同步号 SYN：同步序列编号（Synchronize Sequence Numbers），连接请求序号标志，用于建立连接，SYN=1 表示请求连接")]),t._v(" "),a("p",[t._v("FIN：结束标志，用于释放连接，为 1 表示关闭本方数据流")]),t._v(" "),a("p",[t._v("序列号 seq：占 4 个字节，用来标记数据段的顺序")]),t._v(" "),a("p",[a("strong",[t._v("三次握手：")])]),t._v(" "),a("p",[a("strong",[t._v("(1)")]),t._v(" 第一次握手：建立连接时，客户端 A 发送 SYN 包(SYN=j)到服务器 B，并进入 SYN_SEND 状态，等待服务器 B 确认。")]),t._v(" "),a("p",[a("strong",[t._v("(2)")]),t._v(" 第二次握手：服务器 B 收到 SYN 包，必须确认客户 A 的 SYN(ACK=j+1)，同时自己也发送一个 SYN 包(SYN=k)，即 SYN+ACK 包，此时服务器 B 进入 SYN_RECV 状态。")]),t._v(" "),a("p",[a("strong",[t._v("(3)")]),t._v(" 第三次握手：客户端 A 收到服务器 B 的 SYN ＋ ACK 包，向服务器 B 发送确认包 ACK(ACK=k+1)，此包发送完毕，客户端 A 和服务器 B 进入 ESTABLISHED 状态，完成三次握手。")]),t._v(" "),a("p",[a("strong",[t._v("四次挥手：")])]),t._v(" "),a("p",[a("strong",[t._v("(1)")]),t._v(" 第一次挥手：客户端向服务器发送一个 FIN 报文段，将设置 seq 为 100 和 ack 为 120，;此时，客户端进入 FIN_WAIT_1 状态,这表示客户端没有数据要发送服务器了，请求关闭连接;")]),t._v(" "),a("p",[a("strong",[t._v("(2)")]),t._v(" 第二次挥手：服务器收到了客户端发送的 FIN 报文段，向客户端回一个 ACK 报文段，ack 设置为 101，seq 设置为 120;服务器进入了 CLOSE_WAIT 状态，客户端收到服务器返回的 ACK 报文后，进入 FIN_WAIT_2 状态;")]),t._v(" "),a("p",[a("strong",[t._v("(3)")]),t._v(" 第三次挥手：服务器会观察自己是否还有数据没有发送给客户端，如果有，先把数据发送给客户端，再发送 FIN 报文；如果没有，那么服务器直接发送 FIN 报文给客户端。请求关闭连接，同时服务器进入 LAST_ACK 状态;")]),t._v(" "),a("p",[a("strong",[t._v("(4)")]),t._v(" 第四次挥手：客户端收到服务器发送的 FIN 报文段，向服务器发送 ACK 报文段，将 seq 设置为 101，将 ack 设置为 121，然后客户端进入 TIME_WAIT 状态;服务器收到客户端的 ACK 报文段以后，就关闭连接;此时，客户端等待 2MSL 后依然没有收到回复，则证明 Server 端已正常关闭，客户端也可以关闭连接了。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-tcp-的超时重传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-tcp-的超时重传"}},[t._v("#")]),t._v(" 2.2 TCP 的超时重传")]),t._v(" "),a("h3",{attrs:{id:"_2-3-tcp-为什么是三次握手呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-tcp-为什么是三次握手呢？"}},[t._v("#")]),t._v(" 2.3 TCP 为什么是三次握手呢？")]),t._v(" "),a("p",[a("strong",[t._v("两次握手没有办法保证交互双方同时具备发送与接收能力")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-tcp-如何去终止之前发送报文的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-tcp-如何去终止之前发送报文的？"}},[t._v("#")]),t._v(" 2.4 TCP 如何去终止之前发送报文的？")]),t._v(" "),a("h3",{attrs:{id:"_2-5-tcp-为什么是四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-tcp-为什么是四次挥手"}},[t._v("#")]),t._v(" "),a("strong",[t._v("2.5 TCP 为什么是四次挥手")])]),t._v(" "),a("p",[t._v("TCP 连接是全双工的，因此每个方向都必须单独进行关闭")]),t._v(" "),a("p",[t._v("试想有一种情况，当 Client 发送了 FIN 报文给 Server，而 Server 这时候还想传递一些信息给客户端，如果没有第二次握手，Server 这时候直接发送剩下的数据，那客户端怎么知道 Server 是否收到了自己发送的关闭请求呢？")]),t._v(" "),a("h3",{attrs:{id:"_3-tcp-和-udp-属于计算机网络中的哪一层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-tcp-和-udp-属于计算机网络中的哪一层"}},[t._v("#")]),t._v(" 3.TCP 和 UDP 属于计算机网络中的哪一层")]),t._v(" "),a("p",[t._v("网际层协议：IP 协议、ICMP 协议、ARP 协议、RARP 协议")]),t._v(" "),a("p",[t._v("传输层协议：TCP 协议、UDP 协议")]),t._v(" "),a("p",[t._v("应用层协议：FTP、Telnet、SMTP、HTTP、RIP、NFS、DNS")]),t._v(" "),a("h3",{attrs:{id:"_4-https-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-https-是什么"}},[t._v("#")]),t._v(" 4.HTTPS 是什么")]),t._v(" "),a("p",[t._v("HTTPS 即加密的 HTTP，HTTPS 并不是一个新协议，而是 HTTP+SSL（TLS）。原本 HTTP 先和 TCP（假定传输层是 TCP 协议）直接通信，而加了 SSL 后，就变成 HTTP 先和 SSL 通信，再由 SSL 和 TCP 通信，相当于 SSL 被嵌在了 HTTP 和 TCP 之间")]),t._v(" "),a("h3",{attrs:{id:"_5-http-和-https-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-和-https-区别"}},[t._v("#")]),t._v(" 5.http 和 https 区别")]),t._v(" "),a("ul",[a("li",[t._v("1、https 协议需要到 CA 申请证书，一般免费证书较少，因而需要一定费用。")]),t._v(" "),a("li",[t._v("2、http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl/tls 加密传输协议。")]),t._v(" "),a("li",[t._v("3、http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。")]),t._v(" "),a("li",[t._v("4、http 的连接很简单，是无状态的；HTTPS 协议是由 SSL/TLS+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全。")])]),t._v(" "),a("h3",{attrs:{id:"_6-http2-和-http1-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-http2-和-http1-的区别"}},[t._v("#")]),t._v(" 6.http2 和 http1 的区别")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("二进制传输")])]),t._v(" "),a("p",[t._v("http2 采用二进制传输，相较于文本传输的 http1 来说更加安全可靠。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("多路复用")])]),t._v(" "),a("p",[t._v("http1 一个连接只能提交一个请求，而 http2 可以同时处理无数个请求，可以降低连接的占用数量，进一步提升网络的吞吐量。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("头部压缩")])]),t._v(" "),a("p",[t._v("http2 通过 gzip 与 compress 对头部进行压缩，并且在客户端与服务端各维护了一份头部索引表，只需要根据索引 id 就可以进行头部信息的传输，缩小了头部容量，间接提升了传输效率。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("服务端推送")])]),t._v(" "),a("p",[t._v("服务端可以主动推送资源给客户端，避免客户端花过多的时间逐个请求资源，这样可以降低整个请求的响应时间。")])])]),t._v(" "),a("h3",{attrs:{id:"_7-1-什么是同源策略，"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-什么是同源策略，"}},[t._v("#")]),t._v(" 7.1 什么是同源策略，")]),t._v(" "),a("p",[t._v('同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到 XSS、CSFR 等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。')]),t._v(" "),a("h3",{attrs:{id:"_7-2-为什么浏览器要使用同源策略，"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-为什么浏览器要使用同源策略，"}},[t._v("#")]),t._v(" 7.2 为什么浏览器要使用同源策略，")]),t._v(" "),a("p",[t._v("为了安全")]),t._v(" "),a("p",[t._v("同源策略限制以下几种行为：")]),t._v(" "),a("p",[t._v("1.) Cookie、LocalStorage 和 IndexDB 无法读取")]),t._v(" "),a("p",[t._v("2.) DOM 和 Js 对象无法获得")]),t._v(" "),a("p",[t._v("3.) AJAX 请求不能发送")]),t._v(" "),a("h3",{attrs:{id:"_7-3-如何跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-如何跨域"}},[t._v("#")]),t._v(" 7.3 如何跨域")]),t._v(" "),a("p",[t._v("1、 通过 jsonp 跨域")]),t._v(" "),a("p",[t._v("2、 跨域资源共享（CORS）")]),t._v(" "),a("p",[t._v("3、 nginx 代理跨域")]),t._v(" "),a("p",[t._v("4、 nodejs 中间件代理跨域")]),t._v(" "),a("p",[t._v("6、 postMessage 跨域")]),t._v(" "),a("p",[t._v("详解：https://segmentfault.com/a/1190000011145364")]),t._v(" "),a("h3",{attrs:{id:"_7-4-jsonp-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-jsonp-原理"}},[t._v("#")]),t._v(" 7.4 JSONP 原理")]),t._v(" "),a("p",[t._v("客户端利用 script 标签可以跨域请求资源的性质，向网页中动态插入 script 标签，来向服务端请求数据。")]),t._v(" "),a("p",[t._v("服务端会解析请求的 url,至少拿到一个回调函数(比如 callback=myCallback)参数,之后将数据放入其中返回给客户端。")]),t._v(" "),a("p",[t._v("当然 jsonp 不同于平常的 ajax 请求,它仅仅支持 get 类型的方式")]),t._v(" "),a("h3",{attrs:{id:"_7-5-jsonp-优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-jsonp-优缺点"}},[t._v("#")]),t._v(" 7.5 JSONP 优缺点")]),t._v(" "),a("p",[t._v("​ 1.优点")]),t._v(" "),a("p",[t._v("​ 1.1 它不像 XMLHttpRequest 对象实现的 Ajax 请求那样受到同源策略的限制，JSONP 可以跨越同源策略；")]),t._v(" "),a("p",[t._v("​ 1.2 兼容性更好，在更加古老的浏览器中都可以运行，不需要 XMLHttpRequest 或 ActiveX 的支持")]),t._v(" "),a("p",[t._v("​ 1.3 在请求完毕后可以通过调用 callback 的方式回传结果。将回调方法的权限给了调用方。这个就相当于将 controller 层和 view 层终于分开了。我提供的 jsonp 服务只提供纯服务的数据，至于提供服务以 后的页面渲染和后续 view 操作都由调用者来自己定义就好了。如果有两个页面需要渲染同一份数据，你们只需要有不同的渲染逻辑就可以了，逻辑都可以使用同 一个 jsonp 服务。")]),t._v(" "),a("p",[t._v("​ 2.缺点")]),t._v(" "),a("p",[t._v("​ 2.1 它只支持 GET 请求而不支持 POST 等其它类型的 HTTP 请求")]),t._v(" "),a("p",[t._v("​ 2.2 它只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面之间如何进行 JavaScript 调用的问题。")]),t._v(" "),a("p",[t._v("​ 2.3 jsonp 在调用失败的时候不会返回各种 HTTP 状态码。")]),t._v(" "),a("p",[t._v("​ 2.4 缺点是安全性。万一假如提供 jsonp 的服务存在页面注入漏洞，即它返回的 javascript 的内容被人控制的。那么结果是什么？所有调用这个 jsonp 的网站都会存在漏洞。于是无法把危险控制在一个域名下…所以在使用 jsonp 的时候必须要保证使用的 jsonp 服务必须是安全可信的。")]),t._v(" "),a("h3",{attrs:{id:"_7-5-为什么-form-表单提交没有跨域问题，但-ajax-提交有跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-为什么-form-表单提交没有跨域问题，但-ajax-提交有跨域问题"}},[t._v("#")]),t._v(" "),a("strong",[t._v("7.5 为什么 form 表单提交没有跨域问题，但 ajax 提交有跨域问题")])]),t._v(" "),a("p",[t._v("因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。")]),t._v(" "),a("p",[t._v("所以浏览器认为这是安全的。")]),t._v(" "),a("p",[t._v("而 AJAX 是可以读取响应内容的，因此浏览器不能允许你这样做。")]),t._v(" "),a("p",[t._v("如果你细心的话你会发现，其实请求已经发送出去了，你只是拿不到响应而已。")]),t._v(" "),a("p",[t._v("所以浏览器这个策略的本质是，一个域名的 JS ，在未经允许的情况下，不得读取另一个域名的内容。但浏览器并不阻止你向另一个域名发送请求。")]),t._v(" "),a("h3",{attrs:{id:"_8-fetch-和-xhr-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-fetch-和-xhr-有什么区别"}},[t._v("#")]),t._v(" 8.fetch 和 xhr 有什么区别")]),t._v(" "),a("p",[a("code",[t._v("fetch")]),t._v("跨域的处理 在配置中，添加"),a("code",[t._v('mode： "no-cors"')]),t._v("就可以跨域了")]),t._v(" "),a("p",[a("code",[t._v("fetch")]),t._v("没有办法原生监测请求的进度，而"),a("code",[t._v("XHR")]),t._v("可以")]),t._v(" "),a("p",[a("code",[t._v("fetch")]),t._v("是低层次的 API，代替"),a("code",[t._v("XHR")]),t._v("，可以轻松处理各种格式，非文本化格式。可以很容易的被其他技术使用，例如"),a("code",[t._v("Service Workers")]),t._v("。但是想要很好的使用"),a("code",[t._v("fetch")]),t._v("，需要做一些封装处理。")]),t._v(" "),a("h3",{attrs:{id:"_9-ajax-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-ajax-实现"}},[t._v("#")]),t._v(" 9.ajax 实现")]),t._v(" "),a("blockquote",[a("p",[t._v("详解： "),a("a",{attrs:{href:"https://www.cnblogs.com/sivkun/p/7263754.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/sivkun/p/7263754.html"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getXmlHttpRequest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XMLHttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主流浏览器提供了XMLHttpRequest对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActiveXObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//低版本的IE浏览器没有提供XMLHttpRequest对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所以必须使用IE浏览器的特定实现ActiveXObject")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Microsoft.XMLHTTP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXmlHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取成功后执行操作")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据在xhr.responseText")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TYPE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'URL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h3",{attrs:{id:"_9-1-readystate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-readystate"}},[t._v("#")]),t._v(" 9.1 readyState")]),t._v(" "),a("blockquote",[a("p",[t._v("readyState 是 XMLHttpRequest 对象的一个属性，用来标识当前 XMLHttpRequest 对象处于什么状态。\nreadyState 总共有 5 个状态值，分别为 0~4，每个值代表了不同的含义"),a("br"),t._v("\n0 未初始化状态：此时，已经创建了一个 XMLHttpRequest 对象"),a("br"),t._v("\n1 准备发送状态：此时，已经调用了 XMLHttpRequest 对象的 open 方法，并且 XMLHttpRequest 对象已经准备好将一个请求发送到服务器端"),a("br"),t._v("\n2 已经发送状态：此时，已经通过 send 方法把一个请求发送到服务器端，但是还没有收到一个响应"),a("br"),t._v("\n3 正在接收状态：此时，已经接收到 HTTP 响应头部信息，但是消息体部分还没有完全接收到"),a("br"),t._v("\n4 完成响应状态：此时，已经完成了 HTTP 响应的接收")])]),t._v(" "),a("h3",{attrs:{id:"_9-2-什么是-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-什么是-status"}},[t._v("#")]),t._v(" 9.2 什么是 status")]),t._v(" "),a("blockquote",[a("p",[t._v("status 是 XMLHttpRequest 对象的一个属性，表示响应的 HTTP 状态码。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在 HTTP1.1 协议下，HTTP 状态码总共可分为 5 大类，如下表所示：")])]),t._v(" "),a("blockquote",[a("p",[t._v("1XX 服务器收到请求，需要继续处理。例如 101 状态码，表示服务器将通知客户端使用更高版本的 HTTP 协议。\n2XX 请求成功。例如 200 状态码，表示请求所希望的响应头或数据体将随此响应返回。\n3XX 重定向。例如 302 状态码，表示临时重定向，请求将包含一个新的 URL 地址，客户端将对新的地址进行 GET 请求。\n4XX 客户端错误。例如 404 状态码，表示客户端请求的资源不存在。\n5XX 服务器错误。例如 500 状态码，表示服务器遇到了一个未曾预料的情况，导致了它无法完成响应，一般来说，这个问题会在程序代码出错时出现。")])]),t._v(" "),a("h3",{attrs:{id:"_10-说说从输入-url-到看到页面发生的全过程，越详细越好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-说说从输入-url-到看到页面发生的全过程，越详细越好"}},[t._v("#")]),t._v(" 10.说说从输入 URL 到看到页面发生的全过程，越详细越好")]),t._v(" "),a("ul",[a("li",[t._v("浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期。")]),t._v(" "),a("li",[t._v("DNS 解析 URL 对应的 IP。")]),t._v(" "),a("li",[t._v("根据 IP 建立 TCP 连接（三次握手）。")]),t._v(" "),a("li",[t._v("HTTP 发起请求。")]),t._v(" "),a("li",[t._v("服务器处理请求，浏览器接收 HTTP 响应。")]),t._v(" "),a("li",[t._v("浏览器解析渲染页面。")]),t._v(" "),a("li",[t._v("关闭 TCP 连接（四次挥手）。")]),t._v(" "),a("li",[t._v("详解："),a("a",{attrs:{href:"https://segmentfault.com/a/1190000013662126",target:"_blank",rel:"noopener noreferrer"}},[t._v("\ufeffhttps://segmentfault.com/a/1190000013662126"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_11-get-和-post-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-get-和-post-区别"}},[t._v("#")]),t._v(" 11.get 和 post 区别")]),t._v(" "),a("ul",[a("li",[t._v("GET 请求可被缓存 <=> POST 请求不会被缓存")]),t._v(" "),a("li",[t._v("GET 请求保留在浏览器历史记录中 <=> POST 请求不会保留在浏览器历史记录中")]),t._v(" "),a("li",[t._v("GET 请求可被收藏为书签 <=> POST 不能收藏为书签")]),t._v(" "),a("li",[t._v("GET 请求长度有限制 <=> POST 请求没有限")]),t._v(" "),a("li",[t._v("GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息。")]),t._v(" "),a("li",[t._v("GET 请求只能进行 url 编码，而 POST 支持多种编码方式。")]),t._v(" "),a("li",[t._v("GET 参数通过 URL 传递，POST 放在 Request body 中。")])]),t._v(" "),a("h3",{attrs:{id:"_12-什么是请求头，它是干什么的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-什么是请求头，它是干什么的？"}},[t._v("#")]),t._v(" 12.什么是请求头，它是干什么的？")]),t._v(" "),a("blockquote",[a("p",[t._v("请求头是请求报文特有的，它们为服务器提供了一些额外信息，比如客户端希望接收什么类型的数据，如 Accept 头部。")])]),t._v(" "),a("ul",[a("li",[t._v("作用\n"),a("blockquote",[a("p",[t._v("请求头用于说明是谁或什么在发送请求、请求源于何处，或者客户端的喜好及能力。服务器可以根据请求头部给出的客户端信息，试着为客户端提供更好的响应")])])]),t._v(" "),a("li",[t._v("常用请求头\n"),a("ul",[a("li",[a("ol",[a("li",[t._v("Cache-Control 指定请求和响应遵循的缓存机制，")])]),t._v(" "),a("ul",[a("li",[t._v("(1) no-cache：指示请求或响应消息不能缓存，实际上是可以存储在本地缓存区中的，只是在与原始服务器进行新鲜度验证之前，缓存不能将其提供给客户端使用。")]),t._v(" "),a("li",[t._v("(2) no-store：缓存应该尽快从存储器中删除文档的所有痕迹，因为其中可能会包含敏感信息。")]),t._v(" "),a("li",[t._v("(3) max-age：缓存无法返回缓存时间长于 max-age 规定秒的文档，若不超规定秒浏览器将不会发送对应的请求到服务器，数据由缓存直接返回；超过这一时间段才进一步由服务器决定是返回新数据还是仍由缓存提供。若同时还发送了 max-stale 指令，则使用期可能会超过其过期时间。")]),t._v(" "),a("li",[t._v("其它：min-fresh，max-stale，only-if-cached，Public，Private")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("Connection 是否需要持久连接")])]),t._v(" "),a("ul",[a("li",[t._v("(1) Close：告诉 WEB 服务器或者代理服务器，在完成本次请求的响应后，断开连接，不要等待本次连接的后续请求了。")]),t._v(" "),a("li",[t._v("(2) Keepalive：告诉 WEB 服务器或者代理服务器，在完成本次请求的响应后，保持连接，等待本次连接的后续请求。")]),t._v(" "),a("li",[t._v("(3) Keep-Alive：如果浏览器请求保持连接，则该头部表明希望 WEB 服务器保持连接多长时间（秒），如 Keep-Alive：300。")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("Accept 告诉 WEB 服务器自己接受什么介质类型")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("Accept-Charset 浏览器告诉服务器自己能接收的字符集。")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"5"}},[a("li",[t._v("Accept-Encoding 浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"6"}},[a("li",[t._v("Accept-Language 浏览器可接受的语言")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"7"}},[a("li",[t._v("User-Agent 包含发出请求的用户信息")])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);