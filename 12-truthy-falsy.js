// falsy: anything that is 0, NaN, null, undefined, ""(empty string)

//truthy
console.log("1 && true =>", 1 && true);

// falsy
let a;
console.log(a)

// industry tricks
// 1. use || to set default values: Falsy value || Truthy value (eg - calculateGst || 0)
// if 1st value is falsy, JS will take the next value (truthy)