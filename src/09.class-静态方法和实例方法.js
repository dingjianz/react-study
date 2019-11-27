function Person(name,age) {
  this.name = name
  this.age = age
}
// info 属性，直接挂载给了构造函数，所以它是【静态属性】
Person.info = 111

// 【静态方法】
Person.show = function() {
  console.log('这是Person 的 静态 show方法')
}


// 我们需要通过一个函数创建大量的对象,并且这些对象还都有许多的方法的时候;这时我们就要考虑在函数的prototype上添加这些方法. 这种情况下我们代码的内存占用就比较小.
Person.prototype.say = function() {
  console.log('这是 Person 的实例方法')
}


const p1 = new Person('王多多',18)
// console.log(Person.say()) // Person.say is not a function
console.log(p1.say())

Person.show(); // 静态方法
// p1.show(); // p1.show is not a function
// -------------华丽丽的分割线--------------
console.log('------------------------')

// 创建了一个动物类
// 注意1：在class的 {} 内部，只能写构造器、静态方法、静态属性和实例方法
// 注意2： 在class关键字内部，还是用原来的配方实现的，所以说，我们把class关键字，称为语法糖
class Animal {
  constructor(name, age) { // 属性为实例属性
    this.name = name
    this.age = age
  }

  // 在class内部，通过static修饰的属性，就是【静态属性】
  static userInfo = 'eee' // 【今后用的不多】
  static show() { // 【今后用的不多】
    console.log('这是Animal的静态 show方法')
  }
  // 挂在到原型对象上的实例方法
  jiao() {
    console.log('这是动物的实例方法')
  }
}

const a1 = new Animal('大黄',3)
console.log(a1)
console.log(a1.jiao())
console.log(Animal.show()) // 静态方法
// console.log(a1.show()) //  a1.show is not a function
