(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{209:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("本以为对 JS 中的 this 已经很熟练了，再看完冴羽的博客后，才发现自己对 ES 规范知之甚少，原来我都是根据经验在判断 this，这篇文章会从最底层的 ES 规范上去介绍 this 的判断。")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("第一次做这道题时，只对了第一题。。")]),t._v(" "),t._m(2),e("p",[t._v("先想一想这道题的答案，然后解释一下原因。")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("要彻底弄明白上面的测试题，还得看规范文档 😂")]),t._v(" "),e("p",[t._v("常见的几种规范：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"http://es5.github.io/#x8.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 8.7 The Reference Specification Type"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Reference 类型实例大致长这样：")]),t._v(" "),t._m(6),t._m(7)]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"http://es5.github.io/#x8.7.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("8.7.1 GetValue (V)"),e("OutboundLink")],1)]),t._v(" "),t._m(8)]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"http://es5.github.io/#x10.2.1.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 10.2.1.1.6 ImplicitThisValue()"),e("OutboundLink")],1)]),t._v(" "),t._m(9)])]),t._v(" "),t._m(10),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"http://es5.github.io/#x11.2.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.2.3 Function Calls"),e("OutboundLink")],1),t._v("：")]),t._v(" "),t._m(11)])]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("2、交给函数调用规范，去解析 this。")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"http://es5.github.io/#x11.2.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.2.1 Property Accessors"),e("OutboundLink")],1)]),t._v(" "),t._m(15)]),t._v(" "),t._m(16)]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://es5.github.io/#x11.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看规范 11.1.6 The Grouping Operator"),e("OutboundLink")],1),t._v(" "),t._m(20)]),t._v(" "),t._m(21)]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://es5.github.io/#x11.13.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.13.1 Simple Assignment ( = )"),e("OutboundLink")],1),t._v(" "),t._m(25)]),t._v(" "),t._m(26)]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://es5.github.io/#x11.11",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.11 Binary Logical Operators"),e("OutboundLink")],1),t._v(" "),t._m(30)]),t._v(" "),t._m(31)]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),e("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://es5.github.io/#x11.14",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.14 Comma Operator ( , )"),e("OutboundLink")],1),t._v(" "),t._m(35)]),t._v(" "),t._m(36)]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),e("p",[t._v("2、交给函数调用规范，去解析 this。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://es5.github.io/#x10.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 10.3.1 Identifier Resolution"),e("OutboundLink")],1),t._v(" "),t._m(40)]),t._v(" "),t._m(41)]),t._v(" "),t._m(42),t._v(" "),e("p",[t._v("遇到问题时，尽量从原理的角度看待问题，不要凭经验办事情，不妨多研究研究底层规范。")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 深入之从 ECMAScript 规范解读 this"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://es5.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES5 规范文档"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"从-es-规范-中理解-this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-es-规范-中理解-this","aria-hidden":"true"}},[this._v("#")]),this._v(" 从 ES 规范 中理解 this")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一道测试题引发的思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一道测试题引发的思考","aria-hidden":"true"}},[this._v("#")]),this._v(" 一道测试题引发的思考")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例1")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例2")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例3")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例4")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例5")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"规范文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规范文档","aria-hidden":"true"}},[this._v("#")]),this._v(" 规范文档")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("Reference 类型")]),t._v(" "),e("li",[t._v("函数调用规范")]),t._v(" "),e("li",[t._v("属性读取规范")]),t._v(" "),e("li",[t._v("括号运算规范")]),t._v(" "),e("li",[t._v("赋值运算规范")]),t._v(" "),e("li",[t._v("逻辑与算法规范")]),t._v(" "),e("li",[t._v("逗号运算规范")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"reference-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference 类型")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fooReference "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EnvironmentRecord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fooReference"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EnvironmentRecord;")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" barReference "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("barReference"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo;")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("GetBase(V)")]),t._v(". Returns the base value component of the reference V.")]),t._v(" "),e("li",[e("code",[t._v("HasPrimitiveBase(V)")]),t._v(". Returns true if the base value is a Boolean, String, or Number.")]),t._v(" "),e("li",[e("code",[t._v("IsPropertyReference(V)")]),t._v(". Returns true if either the base value is an object or HasPrimitiveBase(V) is true; otherwise returns false.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("If Type(V) is not Reference, return V.")]),this._v(" "),s("li",[this._v("Let base be the result of calling GetBase(V).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Return "),s("code",[this._v("undefined")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"函数调用规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数调用规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数调用规范")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("步骤1")]),t._v("将 ref 赋值为 MemberExpression（简单理解 MemberExpression 其实就是()左边的部分）")]),t._v(" "),e("li",[e("code",[t._v("步骤2")]),t._v("判断 ref 的类型\n"),e("ul",[e("li",[e("code",[t._v("步骤3")]),t._v("如果 ref 是 Reference 类型\n"),e("ul",[e("li",[e("code",[t._v("步骤4")]),t._v("如果 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)")]),t._v(" "),e("li",[e("code",[t._v("步骤5")]),t._v("如果 base value 值是 Environment Record, 那么 this 的值为 ImplicitThisValue(ref)")])])]),t._v(" "),e("li",[e("code",[t._v("步骤6")]),t._v("如果 ref 不是 Reference 类型，那么 this 的值为 undefined")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"示例-1-解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-1-解答","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例 1 解答")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、使用"),s("code",[this._v("属性读取")]),this._v("规范：获取 "),s("code",[this._v("foo.bar")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("Return a value of type Reference")]),this._v(" whose base value is baseValue and whose referenced name is propertyNameString, and whose strict mode flag is strict.")]),this._v(" "),s("li",[this._v("由此可见，属性读取，默认返回一个 Reference 类型")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("函数调用规范")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("步骤1")]),t._v(" -> "),e("code",[t._v("步骤2")]),t._v(" -> "),e("code",[t._v("步骤3")]),t._v(" -> "),e("code",[t._v("步骤4")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"示例-2-解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2-解答","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例 2 解答")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、使用"),s("code",[this._v("属性读取")]),this._v("规范：获取 "),s("code",[this._v("foo.bar")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、使用"),s("code",[this._v("括号运算符")]),this._v("规范：获取 "),s("code",[this._v("(foo.bar)")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Return the result of evaluating Expression. "),s("code",[this._v("This may be of type Reference")]),this._v(".")]),this._v(" "),s("li",[this._v("实际上 () 并没有对 MemberExpression 进行计算，所以其实跟示例 1 的结果是一样的。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[t._v("函数调用规范\n"),e("ul",[e("li",[e("code",[t._v("步骤1")]),t._v(" -> "),e("code",[t._v("步骤2")]),t._v(" -> "),e("code",[t._v("步骤3")]),t._v(" -> "),e("code",[t._v("步骤4")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"示例-3-解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-3-解答","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例 3 解答")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、使用"),s("code",[this._v("赋值运算符")]),this._v("规范：获取 "),s("code",[this._v("foo.bar = foo.bar")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、使用"),s("code",[this._v("括号运算符")]),this._v("规范：获取 "),s("code",[this._v("(foo.bar = foo.bar)")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Let rval be "),s("code",[this._v("GetValue(rref)")]),this._v(".")]),this._v(" "),s("li",[this._v("Return rval. 返回的是 GetValue 后的值，不是一个 Refernce。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("函数调用规范\n"),s("ul",[s("li",[s("code",[this._v("步骤1")]),this._v(" -> "),s("code",[this._v("步骤2")]),this._v(" -> "),s("code",[this._v("步骤6")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"示例-4-解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-4-解答","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例 4 解答")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、使用"),s("code",[this._v("逻辑与算法")]),this._v("规范：获取 "),s("code",[this._v("false || foo.bar")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、使用"),s("code",[this._v("括号运算符")]),this._v("规范：获取 "),s("code",[this._v("(false || foo.bar)")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Let rval be "),s("code",[this._v("GetValue(rref)")]),this._v(".")]),this._v(" "),s("li",[this._v("Return rval. 返回的是 GetValue 后的值，不是一个 Refernce。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("函数调用规范\n"),s("ul",[s("li",[s("code",[this._v("步骤1")]),this._v(" -> "),s("code",[this._v("步骤2")]),this._v(" -> "),s("code",[this._v("步骤6")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"示例-5-解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-5-解答","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例 5 解答")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、使用"),s("code",[this._v("逗号操作符")]),this._v("规范：获取 "),s("code",[this._v("foo.bar, foo.bar")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、使用"),s("code",[this._v("括号运算符")]),this._v("规范：获取 "),s("code",[this._v("(foo.bar, foo.bar)")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Return "),s("code",[this._v("GetValue(rref)")]),this._v(". 返回的是 GetValue 后的值，不是一个 Refernce。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("函数调用规范\n"),s("ul",[s("li",[s("code",[this._v("步骤1")]),this._v(" -> "),s("code",[this._v("步骤2")]),this._v(" -> "),s("code",[this._v("步骤6")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一个最普通的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个最普通的情况","aria-hidden":"true"}},[this._v("#")]),this._v(" 一个最普通的情况")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fooReference"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EnvironmentRecord;")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、使用"),s("code",[this._v("标识符解析")]),this._v("规范：获取 "),s("code",[this._v("foo")]),this._v(" 的返回类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("The result of evaluating an identifier "),s("code",[this._v("is always a value of type Reference")]),this._v(" with its referenced name component equal to the Identifier String.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[t._v("函数调用规范\n"),e("ul",[e("li",[e("code",[t._v("步骤1")]),t._v(" -> "),e("code",[t._v("步骤2")]),t._v(" -> "),e("code",[t._v("步骤3")]),t._v(" -> "),e("code",[t._v("步骤5")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);a.options.__file="js-this.md";s.default=a.exports}}]);