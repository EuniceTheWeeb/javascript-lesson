// string fx
// 1. query fx - info about string

let sentence = "the quick brown fox"
console.log(sentence.includes("fox"))
// includes: returns true if the substr is inside string
// indexOf: returns index of 1st occurence eg "fox" starts at index[16]

// let t = m
// if (sentence.indexOf("t") > -1) {}
// when checking a substr w/ indexOf, use > -1

// 2. fx that extract/transform a copy of string (not the original string)
let fruit = "apple"
fruit = fruit.toUpperCase(); // reassign to make a copy of string
console.log(fruit);

// 3. fx that create an entirely new data structure from string
let animals = "cats, dogs, fish"
let animalArray = animals.split(",")


const prompt = require("prompt-sync")()
let fileName = prompt("Please enter the file name: ")
// if (fileName.includes(".png") || fileName.includes(".jpg")) {
//     console.log("It is an image file.")
// } else {
//     console.log("It is an not image file.")
// }
let indexOfDot = fileName.indexOf(".")
let fileExt = fileName.slice(-3)
if (fileExt.includes(".png") || fileExt.includes(".jpg")) {
    console.log("It is an image file.")
} else {
    console.log("It is an not image file.")
}
let checkExt = fileName.split(".")
let imgExt = checkExt[1]