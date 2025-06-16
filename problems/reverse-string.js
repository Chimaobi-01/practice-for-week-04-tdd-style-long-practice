module.exports = function reverseString(string) {
  // Your code here
  if(typeof string != "string")
    throw TypeError("unknown type")

  return string.split("").reverse().join("")
};