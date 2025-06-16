class Person {
  // Your code here
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    return `Hello ${this.name}, nice to meet you`
  }

  visit(person) {
    return this.name + " visited " + person.name
  }

  switchVisit(person){
    return person.visit(this)
  }

  update(obj){
    if(!(typeof obj === "object" && obj !== null)) {
      throw Error
    }
    if(obj.name === undefined || obj.age === undefined ){
      throw TypeError("name or age cannot be undefined")
    }
    this.name = obj.name
    this.age = obj.age
  }

  tryUpdate(obj){
    try {
      this.update(obj)
      return true
    } catch {
      return false
    }
  }

  static greetAll(arr){
    let res = arr.map(person => person.sayHello())
    return res
  }
}

module.exports = Person;