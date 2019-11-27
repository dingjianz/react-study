import React from 'react'

// 第三层封装,抽离为单独的样式表模块
// import styles from '@/components/styles'


// 导入列表组件需要的样式表
import cssobj from '@/css/cmtitem.scss'
console.log(cssobj)

// 使用function构造函数，定义普通的无状态子组件
function CmtItem(props) {
  return <div className={cssobj.cmtbox}>
    <h4 className={[cssobj.title, 'test'].join(' ')}>评论人：{props.user}</h4>
    <p className={cssobj.content}>评论内容：{props.content}</p>
  </div>
}

export default CmtItem