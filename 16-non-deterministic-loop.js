const prompt = require("prompt-sync")()

let x = parseInt(prompt("Enter a number with 3 digits: "))
while (x < 100 || x > 999) {
    x = parseInt(prompt("Enter a number with 3 digits: "))
}
console.log("Your number is", x)

// while loop: think about what user doesn't want, e.g. 100 <= x <= 999
// && is the opposite of ||

let y = null;
while (true) {
    y = parseInt(prompt("Enter a number with 3 digits: "))
    if (y >= 100 && y <= 999) {
        break
    }
}
console.log("Your number is", y)