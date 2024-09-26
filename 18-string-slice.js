// substring: slice a string ie extract a portion of a string
// doesn't change original string
// strings are immutable. they cannot be changed once created
// for 2 non-consecutive words, must log 2x
// slice(), split() are the same
// substr starts extracting from an index & then by a specific length

let sentence = "the quick brown fox";

console.log(sentence.slice(10, 15))
console.log(sentence.slice(16))

console.log(sentence.substring(4, 9))


const prompt = require("prompt-sync")()

let date = prompt("Please enter a date as YYYY-MM-DD: ")
let year = date.slice(0,4)
let month = date.slice(5,7)
let day = date.slice(8,10)

console.log("year =", year)
console.log("month =", month)
console.log("day =", day)