let fruits = ["apple", "banana", "pineapple", "durian", "grape", "orange"]
console.log("fruits[0] =>", fruits[0])

// items in arrays are called "elements"

let randomStuff = [42, 3.14, "stuff here", true, [2,4,6] ]
console.log(randomStuff[4][1])

// let shopCart = new Array() // can also use [] to create empty array
console.log(fruits.slice(2,4))

// splice: replace 1 item in array
// start at index 2, del 1 item, replace with new item
console.log(fruits.splice(2, 1, "blueberry"))
console.log(fruits)