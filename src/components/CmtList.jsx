import React from 'react'

// 导入列表组件需要的样式表
import cssobj from '@/css/cmtlist.scss'
console.log(cssobj)

// 引入bootstrap,如果在引用某个包的时候，这个包被安装到了node_modules目录中，则可以省略node_modules这一层目录，直接以包名开始引入自己的模块或样式表
import 'bootstrap/dist/css/bootstrap.css'

// 导入评论项子组件
import CmtItem from '@/components/CmtItem'

// 导入绑定事件组件
import BindEvent from '@/components/BindEvent'

// class 关键字定义父组件
export default class CmtList extends React.Component {
  constructor() {
    super()
    this.state = {
      CommentList: [
        {id:1, user: '张三', content: '哈哈，沙发'},
        {id:2, user: '李四', content: '哈哈，板凳'},
        {id:3, user: '王五', content: '哈哈，凉席'},
        {id:4, user: '赵六', content: '哈哈，砖头'},
        {id:5, user: ' 田七', content: '哈哈，桥下山炮'}
      ]
    } 
  }
  render() {
    return <div>
      <button className='btn btn-primary'>按钮</button>
      <BindEvent></BindEvent>

      <p className={cssobj.title}>这是评论列表组件</p>
      {this.state.CommentList.map(item => <CmtItem key={item.id} {...item}></CmtItem>
      )}
      {[1,2,3].map(item => <div key={item} style={{color:'red'}}>{item}</div>)}
    </div>
  }
} 