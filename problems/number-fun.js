function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  if(n < 1 || n > 1000000)
    throw new RangeError("num is out of range")
  return 1 / n
}

module.exports = {
  returnsThree,
  reciprocal
};