// 假设 main.js 还是我们的入口文件
// webpack-dev-server 打包好的 main.js是托管到了内存中，不在物理磁盘中，(这样加载速度更快)，所以在项目根路径中看不到，但是，我们可以认为，在项目根目录中，有一个看不见的 main.js

// 1. 这两个导入的时候，接收的成员名称，必须这么写，不能随便修改
import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDom from 'react-dom' // 把创建好的组件和虚拟DOM放到页面上展示

// 2. 创建虚拟DOM元素
// 参数1：创建的元素的类型，字符串，表示元素的名称
// 参数2：是一个对象或null，表示当前这个DOM元素的属性
// 参数3：子节点（包括其他虚拟DOM或文本子节点）
// 参数n:其他子节点


//  eg:创建 <h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
const myh1 = React.createElement('h1', {
  id:'myh1',
  title:'this is a title'
}, '这是一个大大的H1')

const mydiv = React.createElement('div', null, '这是一个div元素', myh1)

// 渲染页面上的DOM结构，最好的方式就是直接在js里面写html代码
const mytest  = <div>111</div>


// 3. 使用ReactDom 把虚拟DOM渲染到页面上
// 参数1：要渲染的那个虚拟DOM元素
// 参数2：指定页面上的容器,是一个dom元素

ReactDom.render(mydiv, document.getElementById('app'))