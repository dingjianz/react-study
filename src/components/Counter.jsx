import React from 'react'
// 注意：prop-types包中只能单一，只提供了一些常见的数据类型，用于做类型校验(array,bool,func,number,object,string,node,element,symbol)
import ReactTypes from 'prop-types'

// 封装组件的目的，是为了团队协作开发更加方便，有的人只负责开发组件，有的人只负责调用别人开发好的组件
export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'okok',
      count: props.initcount
    }
  }

  // 在封装一个组件的时候，组件内部，肯定是有一些数据是必须的，哪怕用户没有传递一些相关的启动参数，这时候，组件内部尽量给自己提供一个默认值；
  // 在React中，使用静态的defaultProps属性，来设置组件的默认属性值；
  static defaultProps = {
    initcount:69 // 如果外界没有传递initcount，那么自己初始化一个数值，为69
  }

  // 这是创建一个静态的propTypes对象，在这个对象中，可以把外界传递过来的属性，做类型校验；
  // 注意：如果要为外界传递过来的属性做类型校验，必须安装React提供的第三方包，叫做prop-types；
  // props-types大概在v.15.*之前，并没有单独抽离出来，那时候，还和react包在一起；后来，从v.15.*以后，官方把类型校验的模块，单独抽离为一个包，就叫做prop-types
  static propTypes = {
    initcount:ReactTypes.number // 使用prop-types包，来定义initcount为number类型
  }

  // 在组件即将挂载到页面上的时候执行，此时，组件尚未挂载到页面中呢
  // 虚拟DOM是否创建好了呢？此时，内存中的虚拟DOM也没开始创建呢
  componentWillMount() { // 这个生命周期函数相当于Vue 生命周期函数中的created

    // 此时，无法获取到页面上的任何元素，因为虚拟dom和页面都还没有开始渲染呢！【在这个阶段中，不能去操作页面上的DOM元素】
    // 可以访问props、state的数据，也能调用自己的实例方法
    // console.log(document.getElementById('myh1')) // null
    // console.log(this.props.initcount)
    // console.log(this.state.msg)
    // this.myFunction()
  }

  // 当执行到这个生命周期函数(render)的时候，即将要开始渲染内存中的虚拟DOM了，但这个函数执行完，内存中就有了一个渲染好的 虚拟DOM，但是，页面上尚未真正显示DOM元素呢
  render() {
    // 在return之前，虚拟dom还没开始创建，页面上也是空的，根本拿不到任何的元素
    // console.log(document.getElementById('myh1')) // null

    // 在组件运行阶段中，每当调用render函数的时候，页面上的DOM元素，还是之前旧的；
    // console.log(this.refs.h3&&this.refs.h3.innerHTML)

    return <div>
      <h1 id="myh1">counter组件</h1>
      <input type="button" value="+1" ref="ipt" onClick={this.increase}/>
      <hr/>
      <h3 ref="h3">当前的数量值是：{this.state.count}</h3>
    </div>

    // 当return执行完毕以后，虚拟DOM创建好了，但是，还没有挂载到真正的页面中
  }

  // 组件挂载到页面上之后，会进入到这个生命周期函数，只要进入到这个生命周期函数了，必然说明，页面上已经有可见的DOM元素了
  // 当组件执行完componentDidMount函数以后，就进入到了运行中的状态，所以componentDidMount是创建阶段的最后一个函数
  componentDidMount() { // 相当于 Vue中的 mounted函数
    // 在这个函数中，我们可以放心的去操作页面上你需要使用的DOM元素了；
    // 如果我们想操作DOM元素，最早，只能在componentDidMount；

    // console.log(document.getElementById('myh1')) // 可以访问到dom
    // this.refs.ipt.onclick = () => {  // 不推荐操作dom
    //   // this.props.initcount++ // props是只读的，无法修改值
    //   this.setState({count:++this.state.count})
    // }
  }

  // 从这里开始，就进入到了组件的运行中状态
  // 判断组件是否需要更新
  shouldComponentUpdate(nextProps,nextState) {
    // 1.在shouldComponentUpdate中要求必须返回一个布尔值；
    // 2.在shouldComponentUpdate中，如果返回的是fasle，则不会继续执行后续的生命周期函数，而是直接撤回到了运行中的状态，此时，由于后续的render函数并没有调用，因此，页面不会被更新，但是，组件的state状态，却被修改了
    // return true


    // 需求：如果state中的count是偶数，则更新页面，如果是奇数，则不更新页面，我们想要的页面的效果：4 6 8 10...
    // 经过测试发现，在shouldComponentUpdate中，通过this.state拿到的值是上一次的旧数据，并不是最新的；nextProps、nextState拿到的是最新的props和state
    // console.log(this.state.count+'---------'+nextState.count)
    // return nextState.count%2===0?true:false
    return true
  }

  // 组件将要更新，此时尚未更新，在进入这个生命周期函数的时候，内存中的虚拟DOM是旧的，页面上的DOM也是旧的
  componentWillUpdate(nextProps,nextState) {
    // 经过打印分析，得到，此时页面上的DOM节点都是旧的，应该慎重操作，因为你可能操作的是旧DOM
    // console.log(this.refs.h3.innerHTML)
    // console.log(this.state.count+'-----'+nextState.count)
  }

  // 这是组件完成了更新，此时，state中的数据、虚拟DOM、页面上的DOM，都是最新的，此时，你可以放心大胆的去操作页面了；
  componentDidUpdate(prevProps,prevState) {
    // console.log(this.refs.h3.innerHTML)
    console.log(this.state.count+'-----'+prevState.count)
  }

  increase = () => { // 实例方法
    this.setState({count:this.state.count+1})
  }
  myFunction() { // 实例方法
    console.log('这是我自己定义的函数，和生命周期函数无关')
  }
  static dj = 'ddddd' // 静态属性，通过Counter.dj调用
}