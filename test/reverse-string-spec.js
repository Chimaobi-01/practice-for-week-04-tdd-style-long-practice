// Your code here
const { expect } = require("chai")
const reverseString = require("../problems/reverse-string")

describe("reverseString function", () => {
    it("should return a reversed version of a given string", () => {
        let str = "fun"
        let reversed = reverseString(str)
        expect(reversed).to.equal("nuf")
    })

    it("should throw a TypeError when invoked with argument that is not a string", () => {
        expect(() => reverseString([])).to.throw(TypeError)
    })
})