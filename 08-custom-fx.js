
// function [name] ()
// [name]: cannot begin w/ no., cannot contain special symbols (except _ and $), cannot be a reserved keyword (let, const, function, etc)
// (): parameters needed to solve the problem, what to input, type of data not required to specify

function addTwo (no1, no2) {
    let sum = no1 + no2
    return sum //ends fx, this value will be the result of the fx
} //end addTwo

// call addTwo()
console.log(addTwo(10,15))

function circleArea (radius) {
    let area = 22/7 * radius**2
    return area
}

console.log(circleArea(7))

// console.log: for humans to read the result, program will have no access
// functions without return will return undefined
// return: store result into variable for com to reuse in later code