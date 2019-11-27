// 1. 导入包
import React from 'react'
import ReactDom from 'react-dom'

// 导入组件
import BindThis from '@/components/BindThis'


// 3. 调用 render 函数渲染
ReactDom.render(<div>
  <BindThis></BindThis>
</div>, document.getElementById('app'))