// each "if" block is independent of each other, mutually exclusive, 2 results instead of 1
// with else if, only 1 result will execute

let bmi = 35;

if (bmi > 18.5) {
    console.log("Underweight")
} else if (bmi <= 25) {
    console.log("Normal weight")
} else if (bmi <= 30) {
    console.log("Overweight")
} else {
    console.log("Obese")
}
// write in ascending/descending order
// else-if makes code easier to read & understand over logical operators