import React from 'react';

// 在 React种，构造函数，就是一个最基本的组件
// 如果想要把组件放到页面种，可以把 构造函数的名称， 当作 组件的名称， 以HTML标签的形式引入页面中即可；
// 注意： React在解析所有标签的时候，是以标签的首字母来区分的， 如果标签的首字母是小写， 那么就按照普通的HTML标签来解析， 如果首字母是大学，则按照组件的形式去解析渲染；
// 结论： 组件的首字母必须是大写
function Hello(props) {
  // 在组件中，如果想要使用外部传递过来的数据，必须，显示的在 构造函数参数列表中定义 props 属性来接收
  // props 名称可以自定义，通过props得到的任何数据都是只读的，不能重新赋值
  // props.name = 'xxx' 这样写会报错
  return <div>
    nihao --- {props.name} --- {props.age}
    <span>丁健</span>
  </div>
}
export  default Hello