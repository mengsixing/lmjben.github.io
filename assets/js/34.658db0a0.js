(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{185:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"redux-使用总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-使用总结","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux 使用总结")]),t._v(" "),a("p",[t._v("这一节我们来讨论一下 Redux。")]),t._v(" "),a("h2",{attrs:{id:"历史说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#历史说起","aria-hidden":"true"}},[t._v("#")]),t._v(" 历史说起")]),t._v(" "),a("p",[t._v("我们先从历史的角度，分析一下 Redux 的产生。")]),t._v(" "),a("h3",{attrs:{id:"mvc-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc-架构","aria-hidden":"true"}},[t._v("#")]),t._v(" MVC 架构")]),t._v(" "),a("p",[t._v("在 MVC 架构时代，对数据、视图、逻辑有了清晰的分工。")]),t._v(" "),a("ul",[a("li",[t._v("Model：负责保存应用数据，和后端交互同步应用数据。")]),t._v(" "),a("li",[t._v("View：标识当前状态的视图。")]),t._v(" "),a("li",[t._v("Controller：负责连接 Model 和 View。Model 的任何改变会应用到 View 中，View 的操作会通过 Controller 应用到 Model。")])]),t._v(" "),a("p",[t._v("但是一旦项目变得复杂起来，可能会变成这个样子。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/11/16183c3fae895d43",alt:"mvc"}})]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("由于可以在不止一个 View 里修改同个 Model 的数据，一个 Model 的数据同时对应多个 View 的呈现，如图所示。当业务逻辑过多时，"),a("code",[t._v("多个 Model 和多个 View 就会耦合到一块")]),t._v("，可以想到排查 bug 的时候会比较痛苦。")]),t._v(" "),a("li",[t._v("更糟糕的是，一个 Model 还能改变另一个 Model，使整个"),a("code",[t._v("数据流动的方式变得更加混乱")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"flux-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flux-架构","aria-hidden":"true"}},[t._v("#")]),t._v(" Flux 架构")]),t._v(" "),a("p",[t._v("为了解决 MVC 架构的问题，Flux 采用单向数据流的方式。")]),t._v(" "),a("ul",[a("li",[t._v("View： 视图层。")]),t._v(" "),a("li",[t._v("Action（动作）：视图层发出的消息（比如 mouseClick）。")]),t._v(" "),a("li",[t._v("Dispatcher（派发器）：用来接收 Actions、执行回调函数。")]),t._v(" "),a("li",[t._v("Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒 Views 要更新页面。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2016/bg2016011503.png",alt:"flux架构"}})]),t._v(" "),a("p",[t._v("Flux 存在多种实现，Redux 就是其中一种。")]),t._v(" "),a("h2",{attrs:{id:"redux-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux 基本概念")]),t._v(" "),a("p",[t._v("Redux 是 JavaScript 状态容器，提供可预测化的状态管理。")]),t._v(" "),a("ul",[a("li",[t._v("Web 应用是一个状态机，视图与状态是一一对应的。")]),t._v(" "),a("li",[t._v("所有的状态，保存在一个对象里面。")])]),t._v(" "),a("h3",{attrs:{id:"redux-工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-工作流","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux 工作流")]),t._v(" "),a("p",[t._v("Redux 把所有的状态都存在了一个对象里，这个对象是只读的，必须通过指定工作流才能修改。")]),t._v(" "),a("p",[t._v("view -> dispatch(action) -> store(reducer) -> store(subscribe) -> view。")]),t._v(" "),a("p",[t._v("视图层 -> 触发 action 事件，传递 type 参数 -> 根据 type 参数，匹配 reducer 规则 -> 返回新 store，触发监听事件 -> 重绘视图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg",alt:"redux工作流"}})]),t._v(" "),a("h2",{attrs:{id:"react-中使用-redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中使用-redux","aria-hidden":"true"}},[t._v("#")]),t._v(" React 中使用 Redux")]),t._v(" "),a("p",[t._v("在 React 中， 我们使用 Redux 抽离页面中的 state，将状态抽离到 store 中进行统一管理，可以"),a("code",[t._v("解决各种状态依赖的问题")]),t._v("。抽离状态后，页面中的组件变为"),a("code",[t._v("无状态组件")]),t._v("，还能优化渲染性能。")]),t._v(" "),a("ul",[a("li",[t._v("react-redux 绑定 Redux 中数据到 React 中。")]),t._v(" "),a("li",[t._v("connected-react-router（原 react-router-redux） 将路由的状态抽离到 Redux 中。")]),t._v(" "),a("li",[t._v("redux-saga 编写 redux 中的异步操作。")])]),t._v(" "),a("h2",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("h3",{attrs:{id:"reselect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reselect","aria-hidden":"true"}},[t._v("#")]),t._v(" Reselect")]),t._v(" "),a("p",[t._v("对于 Redux 来说，每当 store 发生变化时，所有的 connect 都会重新计算，在一个大型应用中，会造成大量的重复计算。Redux 拥抱了函数式编程，在函数式编程中，"),a("code",[t._v("纯函数的好处之一就是方便做缓存")]),t._v("。")]),t._v(" "),a("p",[t._v("Reselect 库就是利用纯函数，同样的输入必定会有同样的输出特性，完成对 connect 计算时优化的。")]),t._v(" "),a("h3",{attrs:{id:"immutable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immutable","aria-hidden":"true"}},[t._v("#")]),t._v(" Immutable")]),t._v(" "),a("p",[t._v("由于 React 拥抱函数式编程，在 setState 时，会返回一个新的 state 实例，可能出现这样的代码，"),a("code",[t._v("Object.assign({},this.state,{changedata})")]),t._v("，这种方式。使用 Immutable，可以方便地生成一个新的对象，并且帮我们做了内存优化，只生成改动部分的对象。")]),t._v(" "),a("ul",[a("li",[t._v("redux-immutable 将 store 中的所有对象，转换为 immutable 对象。")]),t._v(" "),a("li",[t._v("react-immutable-proptypes 对 immutable 对象的类型检查。")])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("1、使用 immutable 后，所有的 state，store，router 中的对象都得改成 immutable 对象，"),a("code",[t._v("改造成本较大")]),t._v("。")]),t._v(" "),a("p",[t._v("2、在不支持 immutable 的地方，得进行 toJS()处理，"),a("code",[t._v("消耗多余性能")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他方法")]),t._v(" "),a("p",[t._v("1、在 Redux 中，每个 action 被分发，所有的 reducer 都会被执行一次，我们可以指定环境，让 Redux 在特殊环境之外，只执行 action 对应的 reducer。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("splitActions")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reg"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("actions"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("action"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("reducer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("reducer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("combineReducers")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  counter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("splitActions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token regex"}},[t._v("/COUNTER$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token constant"}},[t._v("SELECT_RADIO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  radio"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("splitActions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token regex"}},[t._v("/RADIO$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token constant"}},[t._v("INCREMENT_COUNTER")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("2、当我们有连续多个独立的 action 触发时，我们只需要关心最终的状态，即可以把 action 进行合并。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 转换为")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("batchActions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("action1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action3"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("BATCH")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'BATCHED_ACTIONS'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("batchActions")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" actions "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("BATCH")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("canBatchedReducer")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reducer "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("batchedReducer")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("BATCH")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" action"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("reduce")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batchedReducer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("reducer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h2",{attrs:{id:"redux-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux API")]),t._v(" "),a("ul",[a("li",[t._v("createStore 创建 store。")]),t._v(" "),a("li",[t._v("combineReducers 合并 reducer。")]),t._v(" "),a("li",[t._v("applyMiddleware 添加中间件。")]),t._v(" "),a("li",[t._v("bindActionCreators 绑定 dispatch 到 action。")]),t._v(" "),a("li",[t._v("compose 函数组合。")])]),t._v(" "),a("p",[t._v("store 对象：")]),t._v(" "),a("ul",[a("li",[t._v("维持应用的 state。")]),t._v(" "),a("li",[t._v("提供 getState() 方法获取 state。")]),t._v(" "),a("li",[t._v("提供 dispatch(action) 方法更新 state。")]),t._v(" "),a("li",[t._v("通过 subscribe(listener) 注册监听器，可通过但会的对象取消监听。")]),t._v(" "),a("li",[t._v("通过 replaceReducer(nextReducer) 替换 store 当前用来计算 state 的 reducer。")])]),t._v(" "),a("h2",{attrs:{id:"react-redux-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-redux-api","aria-hidden":"true"}},[t._v("#")]),t._v(" react-redux API")]),t._v(" "),a("ul",[a("li",[t._v("Provider 提供子组件可访问 store 能力。")]),t._v(" "),a("li",[t._v("connect 连接 React 组件与 Redux store。")])]),t._v(" "),a("h3",{attrs:{id:"connect-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" connect 方法")]),t._v(" "),a("p",[t._v("connect 是连接 redux 和 react 和核心，包含 4 个参数。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("connect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mapStateToProps"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mapDispatchToProps"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mergeProps"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"mapstatetoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapstatetoprops","aria-hidden":"true"}},[t._v("#")]),t._v(" mapStateToProps")]),t._v(" "),a("p",[t._v("将 store 中的 state 映射到组件的 props 里。")]),t._v(" "),a("h4",{attrs:{id:"mapdispatchtoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapdispatchtoprops","aria-hidden":"true"}},[t._v("#")]),t._v(" mapDispatchToProps")]),t._v(" "),a("p",[t._v("将 store 中的 dispatch 映射到组件的 props 里(一般配合 redux 的 bindActionCreators 直接把绑定了 dispath 的 action 映射到组件中)")]),t._v(" "),a("h4",{attrs:{id:"mergeprops-stateprops-dispatchprops-ownprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mergeprops-stateprops-dispatchprops-ownprops","aria-hidden":"true"}},[t._v("#")]),t._v(" mergeProps(stateProps, dispatchProps, ownProps)")]),t._v(" "),a("ul",[a("li",[t._v("stateProps ：mapStateToProps()的返回值。")]),t._v(" "),a("li",[t._v("dispatchProps：mapDispatchToProps()的返回值。")]),t._v(" "),a("li",[t._v("ownProps: 组件自己的 props。")])]),t._v(" "),a("p",[t._v("这个方法方便对三种来源的 props 进行更好的分类、命名和重组，如果省略这个参数，默认情况下返回 "),a("code",[t._v("Object.assign({}, ownProps, stateProps, dispatchProps)")]),t._v(" 的结果。")]),t._v(" "),a("h4",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("p",[t._v("如果指定这个参数，可以定制 connector 的行为。")]),t._v(" "),a("ul",[a("li",[t._v("pure: 默认值为 true。如果为 true，Connect 中会定义 shouldComponentUpdate 方法并使用浅比较对比判断前后两次 props 是否发生了变化，从此来减少不必要的刷新。")]),t._v(" "),a("li",[t._v("withRef: 默认值为 false。如果为 true，Connect 会保存一个对被包装组件实例的引用 refs，该引用通过 getWrappedInstance() 方法获得，并最终获得原始的 dom 节点。")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("参考资料")]),t._v(" "),a("ul",[a("li",[t._v("《深入 React 技术栈》")])])])])}],!1,null,null,null);e.options.__file="library-redux.md";s.default=e.exports}}]);