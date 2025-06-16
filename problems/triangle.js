// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    getPerimeter(){
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths(){
        let sum1 = this.side1 + this.side2
        let sum2 = this.side1 + this.side3

        if(sum1 > this.side3 && sum2 > this.side2 ) {
            return true
        }
        return false
    }

    validate(){
        this.isValid = this.hasValidSideLengths()
    }

    static getValidTriangles(triangles){
        return triangles.filter(triangle => triangle.hasValidSideLengths())
    }
}

class Scalene extends Triangle {
    constructor(side1,side2,side3){
        super(side1, side2, side3)
        this.isValidTriangle = this.hasValidSideLengths()
    }
}

module.exports = {
    Triangle,
    Scalene
}