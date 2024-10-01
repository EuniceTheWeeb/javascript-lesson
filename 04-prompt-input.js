// npm install prompt-sync
// type the above into terminal
// gives js the ability to ask users to input, aka prompt system

// import prompt-sync into current file
const prompt = require("prompt-sync")();

// waits for user to type in something & ends on ENTER key
// prompt always returns a string
let name = prompt("Enter your name: ")
console.log("Welcome, ", name)

let age = prompt("Enter your age: ")
// turn string into no.
age = parseInt(age)
console.log("Next year, your age will be", age+1)

// convert no. into string: let n = 42 + ""

console.log(typeof(age)) // inspect what data type

// toFixed is string