// 介绍
// 从ECMAScript 2015开始，JavaScript引入了模块的概念。TypeScript也沿用这个概念。
//
// 模块在其自身的作用域里执行，而不是在全局作用域里；这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。 相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import形式之一。
//
// 模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。
//
// 模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。
//
// TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块
import {StringValidator} from "./Validation"
