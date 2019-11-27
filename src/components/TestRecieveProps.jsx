import React from 'react'

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '这是父组件中的msg消息'
    }
  }

  render() {
    return <div>
      <h2>我是父组件</h2>
      <input type="button" value="修改" onClick = {() => this.myClickFunc()}/>
      <hr/>
      {/* <Son msg={this.state.msg}></Son> */}
      <Son {...this.state}></Son>
    </div>
  }

  myClickFunc = () => {
    this.setState({msg:'我是修改后的父组件msg值'})
  }
}


class Son extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return <div>
    <h1>{this.state.msg}</h1>
      <h3>我是子组件---{this.props.msg}</h3>
    </div>
  }

  // 组件将要接收外界传过来的新的props属性值
  // 当子组件第一次被渲染到页面上的时候，不会触发这个函数
  // 只有当父组件中，通过某些事件，重新修改了传递给子组件的props数据之后，才会触发 componentWillReceiveProps 方法
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps 被触发了')

    // 注意：在componentWillReceiveProps被触发的时候，如果我们使用this.props 来获取属性值，这个属性值不是最新的，是上一次的旧属性值
    // 如果想要获取最新的属性值，需要通过componentWillReceiveProps的参数列表来获取
    console.log(this.props.msg + '-----' + nextProps.msg)

  }
}

// export default { Parent, Son } //导出多个文件时
export default Parent