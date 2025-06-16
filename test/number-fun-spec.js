// Your code here
const { expect } = require("chai")
const { returnsThree, reciprocal } = require("../problems/number-fun")

describe("returnsThree function", () => {
    it("should return the number 3", () => {
        let res = returnsThree()
        expect(res).to.equal(3)
    })
})

describe("reciprocal(num) function", () => {
    context("if argument is within range (1 to 1,000,000)", () => {
        it("should take a number and return the reciprocal of that number", () => {
            let res1 = reciprocal(4)
            let res2 = reciprocal(6)
            expect(res1).to.equal(0.25)
            expect(res2).to.equal(0.16666666666666666)

        })

    })
})

context("if argument is less than 1 or greater than 1,000,000 (out of range)", () => {
    it("should throw out-of-range Error", () => {
        expect(() => reciprocal(0)).to.throw(RangeError, "num is out of range")
        expect(() => reciprocal(1000001)).to.throw(RangeError, "num is out of range")

    })
})

