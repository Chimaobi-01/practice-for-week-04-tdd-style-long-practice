// Your code here
const { expect } = require("chai")
const { Triangle, Scalene } = require("../problems/triangle")

/*
describe("Triangle class", () => {
    let triangle
    let invalidTriangle

    beforeEach(() => {
        triangle = new Triangle(3, 3, 3)
        invalidTriangle = new Triangle(1, 1, 5)
    })

    describe("constructor", () => {
        it("should have side1, side2 and side3 properties when instantiated", () => {
            expect(triangle.side1).to.exist
            expect(triangle.side2).to.exist
            expect(triangle.side3).to.exist
        })

        it("should intake side1, side2 and side3 values and populate their respective properties", () => {
            expect(triangle.side1).to.equal(3)
            expect(triangle.side2).to.equal(3)
            expect(triangle.side3).to.equal(3)
        })
    })

    describe("getPerimeter() instance function", () => {
        it("should get the perimeter of the triangle by summing all three sides", () => {
            expect(triangle.getPerimeter()).to.equal(9)
        })
    })

    describe("hasValidSideLengths() instance function checks for a valid triangle", () => {
        
        it("should return true if it's a valid triangle", () => {
            expect(triangle.hasValidSideLengths()).to.be.true
        })

        it("should return false if it's an invalid triangle", () => {
            expect(invalidTriangle.hasValidSideLengths()).to.be.false
        })
    })

    describe("validate() instance function", () => {
        it("should add an isValid property to the triangle instance with a value of true if it's a valid triangle and false if otherwise", () => {
            expect(triangle.isValid).to.not.exist
            triangle.validate()
            expect(triangle.isValid).to.exist
            expect(triangle.hasValidSideLengths()).to.equal(triangle.isValid)

        })

    })

    describe("getValidTriangles(arr) static function", () => {
        it("should take an arbitrary number of triangle instances and return only the valid ones", () => {
            let arg = [triangle, invalidTriangle]
            let res = Triangle.getValidTriangles(arg)
            expect(res).to.deep.equal([triangle])
        })
    })

})
*/
describe("Scalene class", () => {
    let scalene
    let invalidScalene

    beforeEach(() => {
        scalene = new Scalene(2, 6, 8)
        invalidScalene = new Scalene(2,2,4)
    })

    describe("constructor", () => {
        it("should inherit from Triangle class", () => {
            expect(scalene).to.be.an.instanceof(Triangle)
            expect(scalene).to.be.an.instanceof(Scalene)
        })

        it("should initialize 3 sides lengths inherited from triangle class", () => {
            expect(scalene.side1).to.exist
            expect(scalene.side2).to.exist
            expect(scalene.side3).to.exist
        })
        it("should have an isValidTriangle property with value derived from Triangle class hasValidSideLengths method", () => {
            expect(scalene.isValidTriangle).to.exist
            expect(scalene.hasValidSideLengths()).to.equal(scalene.isValidTriangle)
        })
    })

    describe("isScalene() function ",()=>{
        it("should return true or false if it's a scalene triangle",()=>{
            expect(scalene.isScalene()).to.be.true
            expect(invalidScalene.isScalene()).to.be.false
        })
    })
})