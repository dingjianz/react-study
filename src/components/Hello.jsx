import React from 'react'

// 【第一种】创建组件的方式,使用构造函数创建组件，注意首字母要大写
function Hello(props) {
  // 如果在一个组件中，return 一个null，则表示组件是空的，什么都不会渲染
  // return null

  // 在组件中，必须返回一个合法的jsx虚拟dom元素
  // props.name = 12 // 结论：不论是Vue还是React，组件中的props永远是只读的，不能重新赋值

  // 在构造函数中，使用props形参（props可以是其他名字，但最好是props），接收外界传递过来的数据
  return <div>这是 Hello 组件~{props.name}--{props.age}</div>
}

export default Hello