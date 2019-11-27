// 这是父类 【可以把父类 理解成原型对象 prototype】
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 打招呼的实例方法
  sayHello() {
    console.log('大家好')
  }
}


// 这是子类 美国人
class American extends Person {
  constructor(name, age) {
    // 问题1：为什么一定要在constructor中调用super
    // 答案： 因为，如果一个子类，通过extends关键字继承了父类，那么，在子类的constructor构造函数中，必须优先调用一下super()

    // 问题2： super是个什么东西？
    // 答案： super是一个函数，而且，它是父类的构造器，子类中的super，其实就是父类 constructor构造器的引用；

    // 问题3：为什么调用了super()之后，a1实例中的name和age都变成了undefined？
    // 答案：需要传值
    super(name, age)
  }
}

const a1 = new American('Jack', 20)
console.log(a1)
a1.sayHello()


// 这是子类 中国人
class Chinese extends Person {
  constructor(name, age, idNumer) {
    // 在子类中，this只能放在super之后使用
    super(name, age)
    this.idNumer = idNumer
  }
  
}

const c1 = new Chinese('张三',10,'340822****')
console.log(c1)
c1.sayHello()