
// solving programming problems (IPO)
// 1. define variables that store the problems & solutions (Input)
// 2. know the process of going from problem to solution (Processing)
// 3. show the user the solution (Output)

const prompt = require("prompt-sync")()

let weight = prompt("Please enter your weight: ")
weight = Number(weight)
let height = Number(prompt("Please enter your height in metres: "))
let bmi = weight / height ** 2
console.log("Your BMI is: ", bmi.toFixed(2))