// 1. 导入包
// import React, { Component } from 'react'
import React from 'react'
import ReactDom from 'react-dom'

// 【两种创建组件方式的对比】
/*
注意： 使用class关键字创建的组件，有自己的私有数据和生命周期函数；
      使用function创建的组件，只有props，没有自己的私有数据和生命周期函数；

  1. 用构造函数创建出来的组件，叫做“无状态组件”；
  2.用class关键字创建出来的组件，叫做“有状态组件”；
  3.什么情况下使用有状态组件？什么情况下使用无状态组件？
    （1）如果一个组件需要有自己的私有数据，则推荐使用:class创建的有状态组件；
    （2）如果一个组件不需要有私有的数据，则推荐使用：无状态组件
    （3）React官方说：无状态组件，由于没有自己记得state和生命周期函数，所以运行效率会比有状态组件稍微高一些；

  区别：有状态组件和无状态组件之间的本质区别就是：有无state属性和有无生命周期函数

  4.组件中的props和state/data之间的区别？
  （1）props中的数据都是外界传递过来的；
  （2）state/data中的数据，都是组件私有的；（通过ajax获取回来的数据，一般都是私有数据）
  （3）props中的数据都是只读的，不能重新赋值；
  （4）state/data中的数据，都是可读可写的；

*/

function Hello(props) {
  return <div>这是 Hello 组件~{props.name}--{props.age}</div>
}

// class 关键字创建组件
class Movie extends React.Component {
  constructor() {
    super()
    // 这个this.state = {}就相当于Vue中的data() {return {}}
    this.state = { 
      msg: '我是class创建的movie组件'
    } 
  }
  render() {
    // 在class创建的组件中， this.state上的数据，都是可读可写的
    this.state.msg = 'msg的值被我修改了'

    return <div>
      这是movie组件---{this.props.name}---{this.props.age}---{this.props.gender}
      <h1>{this.state.msg}</h1>
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
  <Hello {...user}></Hello>
  <Movie {...user}></Movie>
</div>, document.getElementById('app'))