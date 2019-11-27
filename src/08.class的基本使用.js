function Person(name,age) {
  this.name = name
  this.age = age
}
// info 属性，直接挂载给了构造函数，所以它是【静态属性】
Person.info = 111

const p1 = new Person('王多多',18)
console.log(p1)

// 通过new 出来的实例，访问到的属性，叫做【实例属性】
console.log(p1.name)
console.log(p1.age)

// 通过构造函数直接访问到的属性，叫做【静态属性】
console.log(Person.info) // 111
console.log(p1.info) // undefined

// -------------华丽丽的分割线--------------
console.log('------------------------')

// 创建了一个动物类
class Animal {
  // 这是类中的构造器
  // 每一个类中，都有一个构造器，如果程序员没有手动指定构造器，那么可以认为，类内部有个隐形的、看不见的空构造器，类似于 constructor() {}

  // 构造器的作用：每当new 这个类的时候，必然会优先执行构造器中的代码
  constructor(name, age) { // 属性为实例属性
    this.name = name
    this.age = age
  }

  // 在class内部，通过static修饰的属性，就是【静态属性】
  static userInfo = 'eee'
}

const a1 = new Animal('大黄',3)

console.log(Animal.age) // undefined 实例属性
console.log(a1.age) // 3 // 实例属性
console.log(Animal.userInfo) // 'eee' 静态属性
console.log(a1.userInfo) // undefined // 静态属性