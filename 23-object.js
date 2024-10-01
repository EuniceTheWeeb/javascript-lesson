// variables store objects
// objects store multiple properties, use{}
// object syntax: variable = {property: key, property: key}
// to access key: variable name.property name

let book = {
    "title": "LOTR",
    "author": "JRR Tolkien",
    "year_published": "1950",
}

console.log("book title = ", book.title)

// short form
// 1. if property name is already valid variable, don't need ""
// 2. if key matches that of a defined variable, just state key
let username = "useremail@aaa.com"
let user = {
    name : "userhere",
    username,
}
console.log(user.username)

// array: store same data type
// object: store structured data, record what each data represents, commonn for databases

let car = {
    "topSpeed": 120,
    "calcDist": function(inHrs) {
        return this.topSpeed * inHrs
    }
}
console.log(car.calcDist(2))

// to get every key, use "in" in for loop
for (let k in book) {
    console.log(book[k])
}