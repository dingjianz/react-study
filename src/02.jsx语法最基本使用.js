// 1. 导入包
import React from 'react'
import ReactDom from 'react-dom'

// 2. 创建虚拟DOM元素
// 回顾：什么是虚拟DOM? 就是用js对象的形式，来表示 DOM 和 DOM 之间的嵌套关系
// const mydiv  = React.createElement('div', { id: 'mydiv', titlle: 'this is a title'}, '这是一个div元素')

// HTML 是最优秀的标记语言；
// 注意：在JS 文件中，默认不能写这种类似于 HTML的标记，否则会打包失败；
// 可以使用 babel来转换这些 JS中的标签；
// 大家注意：这种在 JS中，混合写入类似于 HTML的语法，叫做 JSX语法（符合XML规范的 JS）
// 注意： JSX 语法的本质，在运行的时候，最终被转换成 React.createElement 的形式来执行；
const mydiv = <div>我是jsx写的div</div>

// 3. 调用 render 函数渲染
ReactDom.render(mydiv, document.getElementById('app'))