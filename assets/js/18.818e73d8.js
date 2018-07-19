(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{166:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("在运行时完成模块加载。")]),t._m(2),a("p",[t._v("自动采用严格模式。\nes6可以在编译时完成模块加载。")]),t._m(3),a("p",[t._v("用于规定模块的对外接口。")]),a("p",[t._v("export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。")]),t._m(4),a("p",[t._v("export 命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域，就会报错（违背了静态化初衷）。")]),t._m(5),a("p",[t._v("用于输入其他模块提供的功能。")]),a("p",[t._v("import 命令具有提升效果，会提升到整个模块的头部并首先执行。\n本质是import命令式便一阶段执行的，在代码运行之前。")]),a("p",[t._v("由于import是静态执行的，不能使用表达式和变量，只有在运行时才能得到结果的语法结构。")]),t._m(6),a("p",[t._v("多次重复执行同一句import语句，那么只会执行一次。")]),t._m(7),t._m(8),a("p",[t._v("整体模块加载所在的对象应该是可以静态分析的，所以不允许运行时改变")]),t._m(9),t._m(10),a("p",[t._v("本质上，export default 就是输出一个叫做default 的变量或方法。")]),t._m(11),t._m(12),a("p",[t._v("动态加载模块，可以在条件运算，表达式中使用。")]),a("p",[t._v("返回一个promise对象。\nimport() 类似于node的require方法，区别主要是，前者是异步加载，后者是同步加载。")]),t._m(13),t._m(14),a("p",[t._v("0、传统的script标签")]),t._m(15),a("p",[t._v("1、使用浏览器script标签")]),t._m(16),a("p",[t._v("代码是在模块作用域之中云进行，而不是在全局作用域中运行。")]),t._m(17),t._m(18),a("p",[t._v("es6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。\nes6输入的模块变量知识一个“符号链接”，所以这个变量是制度的，对他重新赋值会报错。")]),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("commonjs模块循环加载，值输出已执行的部分，还未执行的额部分不会输出。")]),t._m(23),a("p",[t._v("上面代码之中，b.js执行到第二行，就会去加载a.js，这时，就发生了“循环加载”。系统会去a.js模块对应对象的exports属性取值，可是因为a.js还没有执行完，从exports属性只能取回已经执行的部分，而不是最后的值。\na.js已经执行的部分，只有一行。\n因此，对于b.js来说，它从a.js只输入一个变量done，值为false。\n然后，b.js接着往下执行，等到全部执行完毕，再把执行权交还给a.js。于是，a.js接着往下执行，直到执行完毕。")]),t._m(24),a("p",[t._v("es6加载的变量都是动态引用其所在模块的。只要应用存在，代码就能执行。")]),a("p",[t._v("参考资料：")]),a("p",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("module加载的实现"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"js-module-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-module-语法","aria-hidden":"true"}},[this._v("#")]),this._v(" js module 语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"commonjs-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" commonjs 模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"es6-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" es6 模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"export-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" export 模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" m"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("m"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" m"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"import-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" import 命令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'a'")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token string"}},[t._v("'bcd'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my_module'")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//执行一次")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my_module'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my_module'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 执行一次")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'lodash'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'lodash'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模块的整体加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块的整体加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块的整体加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" xxx "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my_module'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\nxxx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'123'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"export-default-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-default-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" export default 命令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyClass")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" MyClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 相等于")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MyClass "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"import-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" import() 方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'my_module'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模块的加载实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块的加载实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块的加载实现")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 下载完就执行")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"application/javascript"')]),t._v(" scr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"foo.js"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 整个页面正常渲染完才会执行")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"application/javascript"')]),t._v(" scr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"foo2.js"')]),t._v(" defer"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"module"')]),t._v(" scr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"foo.js"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"es6模块和commonjs模块的差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6模块和commonjs模块的差异","aria-hidden":"true"}},[this._v("#")]),this._v(" es6模块和commonjs模块的差异")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("commonjs模块输出的是一个值得复制，es6模块输出的是值的引用")]),s("li",[this._v("commonjs模块是运行时加载，es6模块是编译时输出接口")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my_module'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\na"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("porp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模块加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./foo'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//依次寻找")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("package")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//依次寻找")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("packagejson"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token comment"}},[t._v("//向上一级继续寻找")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token comment"}},[t._v("//继续向上一级寻找")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"循环加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 循环加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// a.js")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./b.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'在 a.js 之中，b.done = %j'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'a.js 执行完毕'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// b.js")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./a.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'在 b.js 之中，a.done = %j'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'b.js 执行完毕'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("在 b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 之中，a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 执行完毕\n在 a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 之中，b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\na"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 执行完毕\n在 main"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 之中"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("done"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);