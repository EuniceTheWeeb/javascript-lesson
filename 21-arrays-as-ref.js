// primitive values: strings, no., booleans
// ref values: array, obj, fx
// arrays are REF values, the array is not in the variable

let fruits = ["apple", "banana"]
let fruits2 = fruits
fruits.push("pineapple")
console.log(fruits2)