const prompt = require("prompt-sync")()

console.log("1. Sing a song")
console.log("2. Play a game")
console.log("3. Eat a snack")

let choice = parseInt(prompt("Enter a choice: "))

switch (choice) {
    case 1: 
        console.log("Singing")
    break //done with switch, exit this block of code
    case 2: 
        console.log("Playing")
    break
    case 3: 
        console.log("Eating")
    break
    default:
        console.log("Please pick from 1 of 3 choices.")
}
// no break, that option + next option will execute