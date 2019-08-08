// class 实现面向对象的新形式

// 传统： 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person('zs', 18);
console.log(p1);


// class 后面跟上类名， 类名后面不需要加上 (), 直接跟 {}
class Per {
  // 在每个class类内部， 都有一个constructor 构造器，如果没有显示定义 构造器，那么类内部默认都有个看不见的 constructor
  // constructor的作用，就好比咱们之前的 functions Person() {}
  // 每当，使用 new 换剪子， 创建class类实例的时候， 必然会优先调用constructor构造器
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p2 = new Per('ls', 66)
console.log(p2)