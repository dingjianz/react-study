// 1. 导入包
import React from 'react'
import ReactDom from 'react-dom'

// 导入组件
import Counter from '@/components/Counter'




// 3. 调用 render 函数渲染
ReactDom.render(<div>
  {/* 规定：每个用户在使用组件的时候，必须传递一个默认的数量值，作为组件初始化的数据 */}
  <Counter initcount={3}></Counter>
  <hr/>
  <Counter></Counter>
  <hr/>
  <Counter initcount="哈哈哈，我是来捣乱的，这是个数字，你用吧"></Counter>
</div>, document.getElementById('app'))