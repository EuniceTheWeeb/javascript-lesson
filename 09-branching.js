const prompt = require("prompt-sync")()

let age = parseInt(prompt("Please enter the age: "))
if (age <= 12) {
    console.log("Please pay $6.")
}
else {
    console.log("Please pay $12.")
}