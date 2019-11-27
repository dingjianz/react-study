// 1. 导入包
import React from 'react'
import ReactDom from 'react-dom'

let a = 10
let str = '你好，中国'
let boo = true
let title = '999'
const h1 = <h1>红红火火，恍恍惚惚</h1>
const arr = [
  <h1>这是h1</h1>,
  <h2>这是h2</h2>,
  <h3>这是h3</h3>,
]
const strArr = ['毛利', '灰原安', '柯南', '小五郎']

// 定义一个空数组,将来用来存放名称 标签， 【方案1】
const nameArr = []
// 注意 React中，需要把key添加给被forEach或map或for循环 直接控制 的元素
strArr.forEach(item => {
  const temp = <h5 key={item}>{item}</h5>
  nameArr.push(temp)
})

// 数组的map方法,map中必须写return 【方案2】
const result = strArr.map(item => {
  return <h5 key={item}>{item}</h5>
})
console.log(result)

// 3. 调用 render 函数渲染
// 什么情况下需要使用 {}呢？ 当我们需要在 JSX 控制的区域内，写js表达式了，则需要把 js代码写到 {}中
ReactDom.render(<div>
  {a + 2}
  <hr/>
  {str}
  <hr/>
  {boo ? '条件为真' : '条件为假'}
  <hr/>
  <p title={title}>我是一个p标签</p>
  <hr/>
  {h1}
  <hr/>
  {/* arr */
    // 这是注释你看不见我
  }
  <hr/>
  {strArr}
  {nameArr}
  <hr/>
  {strArr.map(item => <h6 key={item}>{item}</h6>)}
  
  { /**class for 和es6 javascript 里面的关键字重合，容易产生歧义，故使用 className htmlFor来进行代替 */}
  <div className="mydiv">我是div</div>
  <label htmlFor="diao">我是一个label</label>
</div>, document.getElementById('app'))