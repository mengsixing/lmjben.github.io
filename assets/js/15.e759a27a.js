(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{189:function(t,i,e){"use strict";e.r(i);var a=e(0),_=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"http-协议浅析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议浅析","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 协议浅析")]),t._v(" "),e("p",[t._v("HTTP 协议是超文本传输协议，从 www 浏览器传输到本地浏览器的一种传输协议，网站的图片，js，css 都是基于 http 协议的。")]),t._v(" "),e("h2",{attrs:{id:"输入一个网址后发生了什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入一个网址后发生了什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 输入一个网址后发生了什么？")]),t._v(" "),e("ul",[e("li",[t._v("1、输入网址并回车。")]),t._v(" "),e("li",[t._v("2、解析域名。")]),t._v(" "),e("li",[t._v("3、浏览器发送 HTTP 请求。")]),t._v(" "),e("li",[t._v("4、服务器处理请求。")]),t._v(" "),e("li",[t._v("5、服务器返回 HTML 相应。")]),t._v(" "),e("li",[t._v("6、浏览器处理 HTML 页面。")]),t._v(" "),e("li",[t._v("7、继续请求其他资源。")])]),t._v(" "),e("h2",{attrs:{id:"在-tcp-ip-协议栈中的位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-tcp-ip-协议栈中的位置","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 TCP/IP 协议栈中的位置")]),t._v(" "),e("ul",[e("li",[t._v("HTTP 层。")]),t._v(" "),e("li",[t._v("TCP 层。")]),t._v(" "),e("li",[t._v("IP 层。")]),t._v(" "),e("li",[t._v("数据链路层。")])]),t._v(" "),e("h2",{attrs:{id:"请求与相应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求与相应","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求与相应")]),t._v(" "),e("ul",[e("li",[t._v("HTTP 请求组成:请求行、消息报头、请求正文。")]),t._v(" "),e("li",[t._v("HTTP 响应组成:状态行、消息报头、响应正文。")]),t._v(" "),e("li",[t._v("请求行组成:以一个方法符号开头，后面跟着请求的 URI 和协 议的版本。")]),t._v(" "),e("li",[t._v("状态行组成:服务器 HTTP 协议的版本，服务器发回的响应状 态代码和状态代码的文本描述。")])]),t._v(" "),e("h2",{attrs:{id:"请求方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),e("ul",[e("li",[t._v("GET: 请求获取 Request-URI 所标识的资源（4K 大小）。")]),t._v(" "),e("li",[t._v("POST: 在 Request-URI 所标识的资源后附加新的数据（修改数据）。")]),t._v(" "),e("li",[t._v("HEAD: 请求获取由 Request-URI 所标识的资源的响应消息报头（简易版的 get,只返回请求头）。")]),t._v(" "),e("li",[t._v("PUT: 请求服务器存储一个资源，并用 Request-URI 作为其标识（增加数据）。")]),t._v(" "),e("li",[t._v("DELETE:请求服务器删除 Request-URI 所标识的资源。")]),t._v(" "),e("li",[t._v("TRACE: 请求服务器回送收到的请求信息，主要用于测试或诊断 。")]),t._v(" "),e("li",[t._v("CONNECT:保留将来使用 。")]),t._v(" "),e("li",[t._v("OPTIONS:请求查询服务器的性能，或者查询与资源相关的选项和需求。")])]),t._v(" "),e("h2",{attrs:{id:"http-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 状态码")]),t._v(" "),e("ul",[e("li",[t._v("1xx:指示信息--表示请求已接收，继续处理 。")]),t._v(" "),e("li",[t._v("2xx:成功--表示请求已被成功接收、理解、接受 。")]),t._v(" "),e("li",[t._v("3xx:重定向--要完成请求必须进行更进一步的操作 。")]),t._v(" "),e("li",[t._v("4xx:客户端错误--请求有语法错误或请求无法实现 。")]),t._v(" "),e("li",[t._v("5xx:服务器端错误--服务器未能实现合法的请求。")])]),t._v(" "),e("h2",{attrs:{id:"常用的请求报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求报头","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的请求报头")]),t._v(" "),e("ul",[e("li",[t._v("Accept 请求报头域用于指定客户端接受哪些类型的信息。eg:Accept:image/gif，Accept:text/ html。")]),t._v(" "),e("li",[t._v("Accept-Charset 请求报头域用于指定客户端接受的字符集。")]),t._v(" "),e("li",[t._v("Accept-Encoding:Accept-Encoding 请求 报头域类似于 Accept，但是它是用于指定可接受的内容编码。")]),t._v(" "),e("li",[t._v("Accept-Language 请求报头域类似于 Accept，但是它是用于指定一种自然语言。")]),t._v(" "),e("li",[t._v("Authorization 请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收 到服务器的响应代码为 401(未授权)，可以发送一个包含 Authorization 请求报头域的请求，要求服务 器对其进行验证。")]),t._v(" "),e("li",[t._v("Host 请求报头域主要用于指定被请求资源的 Internet 主机和端又号，它通常从 HTTP URL 中提取出来 的，发送请求时，该报头域是必需的。")]),t._v(" "),e("li",[t._v("User-Agent 请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。")])]),t._v(" "),e("h2",{attrs:{id:"常用的响应报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的响应报头","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的响应报头")]),t._v(" "),e("ul",[e("li",[t._v("Location 响应报头域用于重定向接受者到一个新的位置。Location 响应报头域常用在更换域名的时候。")]),t._v(" "),e("li",[t._v("Server 响应报头域包含了服务器用来处理请求的软件信息。与 User- Agent 请求报头域是相对应的。")]),t._v(" "),e("li",[t._v("WWW-Authenticate 响应报头域必须被包含在 401（未授权的）响应消息中，客户端收到 401 响应消息时候，并发送 Authorization 报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。")])]),t._v(" "),e("h2",{attrs:{id:"常用的实体报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的实体报头","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的实体报头")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("请求和响应消息都可以传送一个实体。")]),t._v(" "),e("p",[t._v("一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。")]),t._v(" "),e("p",[t._v("实体报头定义了关于实体正文 (eg:有无实体正文)和请求所标识的资源的元信息。")])]),t._v(" "),e("ul",[e("li",[t._v("Content-Encoding 实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得 Content-Type 报头域中所引用的媒体类型，必须采用相应的解 码机制。")]),t._v(" "),e("li",[t._v("Content-Language 实体报头域描述了资源所用的自然语言。")]),t._v(" "),e("li",[t._v("Content-Length 实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")]),t._v(" "),e("li",[t._v("Content-Type 实体报头域用语指明发送给接收者的实体正文的媒体类型。 Last-Modified 实体报头域用于指示资源的最后修改日期和时间。 Expires 实体报头域给出响应过期的日期和时间。")])]),t._v(" "),e("h2",{attrs:{id:"http-缓存策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存策略","aria-hidden":"true"}},[t._v("#")]),t._v(" http 缓存策略")]),t._v(" "),e("h3",{attrs:{id:"cookies-和-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookies-和-session","aria-hidden":"true"}},[t._v("#")]),t._v(" cookies 和 session")]),t._v(" "),e("ul",[e("li",[t._v("Cookies 是保存在客户端的小段文本，随客户端点每一个请求发送该 url 下的所有 cookies 到服务器端。")]),t._v(" "),e("li",[t._v("Session 则保存服务器段，通过唯一的值 sessionID 来区别每一个 用户。SessionID 随每个连接请求发送到服务器，服务器根据 sessionID 来识别客户端，再通过 session 的 key 获取 session 值。")])]),t._v(" "),e("h3",{attrs:{id:"etag-if-none-match-策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match-策略","aria-hidden":"true"}},[t._v("#")]),t._v(" Etag/if-None-Match 策略")]),t._v(" "),e("ul",[e("li",[t._v("Etag:web 服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识(生成规则由服务器决定)。")]),t._v(" "),e("li",[t._v("If-None-Match:当资源过期时（使用 Cache-Control 标识的 max- age），发现资源具有 Etage 声明，则再次向 web 服务器请求时带 上头 If-None-Match（Etag 的值）。web 服务器收到请求后发现 有头 If-None-Match 则与被请求资源的相应校验串进行比对，决 定返回 200 或 304。")])]),t._v(" "),e("h3",{attrs:{id:"last-modified-if-modified-since-策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since-策略","aria-hidden":"true"}},[t._v("#")]),t._v(" Last-Modified/If-Modified-Since 策略")]),t._v(" "),e("ul",[e("li",[t._v("Last-Modified:标示这个响应资源的最后修改时间。web 服务器在响应请求时，告诉浏览器资源的最后修改时间。")]),t._v(" "),e("li",[t._v("If-Modified-Since:当资源过期时(使用 Cache-Control 标识的 max-age)，发现资源具有 Last-Modified 声明，则再次向 web 服务器请求时带上头 If-Modified-Since，表示请求时间。web 服务器收到请求后发现有头 If-Modified- Since 则与被请求资源的最后修改时间进行比对。若最后修改时间较新，说 明资源又被改动过，则响应整片资源内容(写在响应消息包体内)，HTTP 200;若最后修改时间较旧，说明资源无新修改，则响应 HTTP 304（无需包 体，节省浏览），告知浏览器继续使用所保存的 cache。")])]),t._v(" "),e("p",[t._v("http 缓存策略图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/blog/browser-caching.jpg",alt:"http 缓存策略图"}})]),t._v(" "),e("h2",{attrs:{id:"http2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http2","aria-hidden":"true"}},[t._v("#")]),t._v(" http2")]),t._v(" "),e("ul",[e("li",[t._v("使用二进制格式传输，更高效、更紧凑。")]),t._v(" "),e("li",[t._v("对报头压缩，降低开销。")]),t._v(" "),e("li",[t._v("多路复用，一个网络连接实现并行请求。")]),t._v(" "),e("li",[t._v("服务器主动推送，减少请求的延迟。")])]),t._v(" "),e("h2",{attrs:{id:"反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),e("p",[t._v("用户不直接请求服务器，而是请求反向代理服务器，再由反向代理服务器转发请求到其他服务器。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/blog/http-reverseProxy.png",alt:"反向代理"}})]),t._v(" "),e("p",[t._v("反向代理的作用：")]),t._v(" "),e("ul",[e("li",[t._v("复用 DNS 查询。")]),t._v(" "),e("li",[t._v("加密和 SSL 加速。")]),t._v(" "),e("li",[t._v("负载均衡。")]),t._v(" "),e("li",[t._v("缓存静态资源。")]),t._v(" "),e("li",[t._v("压缩。")]),t._v(" "),e("li",[t._v("减速上传。")]),t._v(" "),e("li",[t._v("安全。")]),t._v(" "),e("li",[t._v("外网发布。")])]),t._v(" "),e("p",[t._v("负载均衡示意图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/blog/http-loadBalancing.png",alt:"负载均衡"}})])])}],!1,null,null,null);_.options.__file="http.md";i.default=_.exports}}]);