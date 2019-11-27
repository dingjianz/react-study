import React from 'react'

class BindThis extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: '这是默认的msg'
    }

    // 绑定this并传参的方式2：在构造函数（constructor）中绑定并传参
    // 注意：当为一个函数，调用bind改变了this指向后，bind函数调用的结果，有一个返回值，这个值，就是被改变this指向后的函数的引用
    // 注意：bind不会修改原函数的this指向
    this.changeMsg2 = this.changeMsg2.bind(this,'❤','🌳')
  }

  render() {
    return <div>
      <h3>绑定this并传参的几种方式</h3>

      {/* bind的作用：为前面的函数，修改函数内部的this指向，让函数内部的this，指向bind参数列表中的第一个参数 */}
      {/* bind和call/apply之间的区别：call/apply修改完this指向后，会立即调用前面的函数，但是bind只是修改this指向，并不会立即调用 。*/}
      {/* 注意：bind中第一个参数，是用来修改this指向的，第一个参数后面的所有参数，都会当作将来调用前面函数时候的参数传递进去 */}
      {/*方式1：在事件处理函数中，直接使用bind绑定this并传参 */}
      <input type="button" value="绑定this并传参的方式1" onClick={this.changeMsg1.bind(this,'🐖','🍕')}/>

      <input type="button" value="绑定this并传参的方式1" onClick={this.changeMsg2}/>

      {/* 这个适合不传参调用 */}
      <input type="button" value="绑定this并传参的方式3" onClick={this.changeMsg3}/>

      <input type="button" value="绑定this并传参的方式3" onClick={() => this.changeMsg4('🥁','😊')}/>
      <hr/>
      <hr/>

      <h3>{this.state.msg}</h3>

      {/* 在vue中，有v-model指令来实现双向数据绑定，但是，在react中，根本没有指令的概念，因此React默认也不允许双向数据绑定 */}
      {/* React只支持，把数据从state上传输到页面，但是，无法实现数据从页面传输到state中进行保存，也就是，React不支持数据的自动逆向传输，只实现了数据的单向绑定 */}
      <input type="text" ref="ipt" style={{width:'100%'}} value={this.state.msg} onChange={() => this.clickChange()}/>
    </div>
  }


  // 注意：这里的方式，是一个普通方法，因此，在触发的时候，这里的this是undefined
  changeMsg1(arg1, arg2) {
    console.log(this)
    this.setState({msg:'绑定this并传参的方式1'+arg1+arg2})
  }
  
  changeMsg2(arg1, arg2) {
    console.log(this)
    this.setState({msg:'绑定this并传参的方式2'+arg1+arg2})
  }

  changeMsg3 = (arg1 = '121', arg2='🎄') => {
    console.log(212212)
    this.setState({msg:'绑定this并传参的方式3'+arg1+arg2})
  }
  changeMsg4(arg1, arg2) {
    console.log(this)
    this.setState({msg:'绑定this并传参的方式4'+arg1+arg2})
  }

  clickChange = () => {
    console.log(this.refs.ipt.value)
    this.setState({msg:this.refs.ipt.value})
  }
}

export default BindThis