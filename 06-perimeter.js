const prompt = require("prompt-sync")()

let breadth = Number(prompt("Enter the breadth: "))
let length = Number(prompt("Enter the length: "))
let perimeterRect = 2*(breadth + length)
console.log("The perimeter of the rectangle is", perimeterRect)
