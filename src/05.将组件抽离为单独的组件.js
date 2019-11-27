// 1. 导入包
import React from 'react'
import ReactDom from 'react-dom'


// 导入 Hello 组件
// 默认，如果不做单独的配置的话，不能省略.jsx后缀名
import Hello from '@/components/Hello'


const dog = {
  name: '花子1',
  age: 8,
  gender: 'male'
}


// 3. 调用 render 函数渲染
ReactDom.render(<div>
  {/* 直接把组件的名称，以标签的形式，丢到页面上即可 */}
  {/* <Hello name={dog.name} age={dog.age}></Hello> */}
  <Hello {...dog}></Hello>
</div>, document.getElementById('app'))