import React from 'react'

export default class BindInputVal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 123
    }
  }

  render() {
    return <div>
      BindInputVal 组件---{this.props.name}

      <button className="btn btn-primary" onClick={() => this.clickFn()}>按钮</button>
      <h1>msg---{this.state.msg}</h1>

     {/* 如果我们只是把文本框的value属性绑定到了state状态，但是不提供onChange处理函数的话，得到的文本框，将会是一个只读的文本框 */}

    {/*
      
    当为文本框绑定value 值以后，要么同时提供一个readonly，要么提供一个onChange处理函数

    <input type="text" style={{width:'100%'}} value={this.state.msg} readOnly/>
  */}
      
      <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={(e)=>this.txtChange(e)} ref="txt"/>
    </div>
  }

  clickFn = () => {
    console.log(2222)
    this.setState({
      msg: 'msg的值被修改了'
    })
  }

  // 每当文本框的内容变化了，必然会调用这个txtChange
  txtChange = (e) => {
    // 在onChange事件中，获取文本框的值，有两种方案
    // 方案1：通过事件参数e来获取
    // console.log(e.target.value)

    // Vue:this.$refs['name'] 方案2：ref事件
    console.log(this.refs.txt.value)
    const newVal = this.refs.txt.value
    this.setState({
      msg: newVal
    })
  }
}