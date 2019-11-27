import React from 'react'

export default class BindEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '哈哈哈'
    }
  }

  render() { // 实例方法
    return <div>
      BindEvent 组件---{this.state.msg}
      <hr/>
      <button className='btn btn-primary' onClick={ () => this.clickFn('test')}>BindEvent按钮</button>
    </div>
  }

  clickFn = (arg) => { // 实例方法
    // 在 react中，如果想为state中的数据，重新赋值，不要使用this.state.*** = 新值
    // this.state.msg = 'msg的信息被修改了'

    // 在react中，推荐使用this.setState({ }) 修改状态值
    this.setState({
      // 在setState方法中，只会把对应的state状态更新，而不会覆盖其他的state状态
      msg:'msg的信息被修改了'+arg
    },() =>{ // 回调函数，拿到最新的state值
      console.log(this.state.msg) // 'msg的信息被修改了test'
    })
    
    // 注意：this.setState是一个异步方法
    // 如果在调用完this.setState方法之后，想立即拿到最新的state值，需要使用this.setState({}, callback)
    console.log(this.state.msg) // '哈哈'
  }

}