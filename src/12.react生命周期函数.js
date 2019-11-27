/* 
组件创建阶段：组件创建阶段的生命周期函数，有一个显著的特点：创建阶段的生命周期函数，在组件的一辈子中，只执行一次；
    （1）componentWillMount:组件将要被挂载，此时还没有渲染虚拟DOM；
    （2）render:第一次开始渲染真正的虚拟DOM,当render执行完，内存中就有了完整的虚拟DOM了；
    （3）componentDidMount:组件完成了挂载，此时，组件已经显示到了页面上，当这个方法执行完，组件就进行到了运行中的状态；

*/
/*
组件运行阶段：也有一个显著的特点，根据组件的state和props的改变，有选择性的触发0次或多次；
（1）componentWillReceiveProps:组件将要接收新属性，此时只要这个方法被触法，就证明父组件为子组件传递了新的属性值；
（2）shouldComponentUpdate:组件是否需要被更新，此时，组件尚未被更新，但是，state和props肯定是最新的；
（3）componentWillUpdate:组件将要被更新，此时，尚未被更新内存中的虚拟DOM树还是旧的；
（4）render:此时，又要根据最新的state和props，重新渲染一颗内存中的虚拟DOM树，当render调用完毕，内存中的旧DOM树，已经被新DOM树替换了；
（5）componentDidUpdate:此时，页面又被重新渲染了，state、props、虚拟DOM和页面已经完全保持同步；
*/

/* 
组件销毁阶段：也有一个显著特点，一辈子只执行一次
  （1）componentWillUnmount:组件将要被卸载，此时组件还可以正常使用
*/