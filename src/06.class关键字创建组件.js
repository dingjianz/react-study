// 1. 导入包
// import React, { Component } from 'react'
import React from 'react'
import ReactDom from 'react-dom'

// class 关键字创建组件
class Movie extends React.Component {
  // render 函数的作用，是渲染当前组件所对应的虚拟DOM元素
  render() {
    // 什么都没有就return null 

    // 在 class关键字创建的组件中，如果想使用传递过来props参数，不需接收，直接通过this.props.*** 访问即可

    // 注意：不论是class还是普通function创建的组件，它们的props都是只读的。
    // this.props.name = 'lisi'
    return <div>
      {/* 注意：在class组件内部，this表示当前组件的实例对象 */}
      这是movie组件---{this.props.name}---{this.props.age}---{this.props.gender}
    </div>
  }
}

const user = {
  name: 'dingjian',
  age: 18,
  gender: 'male'
}
// 3. 调用 render 函数渲染
ReactDom.render(<div>
  {/* 这里的Movie标签，其实就是 Movie类的一个实例对象 */}
  <Movie {...user}></Movie>
</div>, document.getElementById('app'))