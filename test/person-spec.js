// Your code here
const { expect } = require("chai")
const Person = require("../problems/person")

describe("Person class", () => {
    let person
    let otherPerson
    let param

    beforeEach(() => {
        person = new Person("chima", 32)
        otherPerson = new Person("aritech", 28)
        param = [person, otherPerson]

    })

    describe("constructor", () => {
        it("should have a name and age properties when instantialized", () => {
            expect(person.name).to.exist
            expect(person.age).to.exist
        })

        it("should intake name and age and set them as properties on instance", () => {
            expect(person.name).to.equal("chima")
            expect(person.age).to.equal(32)
        })
    })

    describe("sayHello() function", () => {
        it("should say 'Hello name, nice to meet you", () => {
            expect(person.sayHello()).to.equal("Hello chima, nice to meet you")
        })
    })

    describe("visit(otherPerson) function", () => {
        it("should accept a Person instance and return a string indicating it visited the passed in instance", () => {
            let res = person.visit(otherPerson)
            expect(res).to.equal("chima visited aritech")
        })
    })

    describe("switchVisit(otherPerson) function", () => {
        it("should invoke the visit function of the parameter. Passing in the onstance as argument", () => {
            let res = person.switchVisit(otherPerson)
            expect(res).to.equal("aritech visited chima")
        })
    })


    describe("update(obj) function ", () => {
        context("if argument given is not an object", () => {
            it("should throw an error", () => {
                expect(() => person.update([])).to.throw(Error)
            })
        })

        context("if argument is an object ", () => {
            context("if passed-in object does not have a name and age property", () => {
                it("should throw a TypeError with appropriate message", () => {
                    let obj = {
                        name: "mai"
                    }
                    expect(() => person.update(obj)).to.throw(TypeError, "name or age cannot be undefined")
                })
            })

            context("if passed in object has both name and age property", () => {
                it("should update the name and age property of the person with that of the passed in object ", () => {
                    expect(person.name).to.equal("chima")
                    expect(person.age).to.equal(32)

                    person.update({ name: "cool", age: 14 })

                    expect(person.name).to.equal("cool")
                    expect(person.age).to.equal(14)
                })
            })
        })
    })

    describe("tryUpdate(obj) function should invoke update(obj) function of the incoming argument", () => {

        context("if update(obj) function is invoked successfully", () => {
            it("should return true", () => {

                expect(person.tryUpdate(otherPerson)).to.be.true
            })
        })
        context("if it is not successfully in avoked", () => {
            it("should not throw an error, instead return false", () => {
                expect(person.tryUpdate([])).to.be.false
            })
        })
    })

    describe("greetAll(obj) static function ", () => {
        it("should take an array of Person instance", () => {

            Person.greetAll(param)
            expect(param).to.be.an("array")
            param.forEach(person => {
                expect(person).to.be.an.instanceof(Person)
            })
        })
        it("should return an array of greeting strings", () => {
            let res = [
                "Hello chima, nice to meet you",
                "Hello aritech, nice to meet you"
            ]
            expect(Person.greetAll(param)).to.deep.equal(res)
        })
    })

})