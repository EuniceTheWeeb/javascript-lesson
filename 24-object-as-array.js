let employee = {
    "name": "Lee",
    "role": "Manager",
    "pay": 5000,
}
// add key
employee.email = "lee@aaa.com"

for (let eachKey in employee) {
    console.log(eachKey)
} // iteration thru obj, go thru & output keys of an obj

console.log(Object.keys(employee)) // key names
console.log(Object.values(employee)) // values of keys (not keys)
console.log(Object.entries(employee)) // keys & values in own arrays in big database array

// fx in obj
