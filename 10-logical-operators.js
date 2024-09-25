console.log("true && true =>", true && true)
console.log("false && true =>", false && true)
console.log("true && false =>", true && false)
console.log("false && false =>", false && false)

console.log("true or false =>", true || false)
console.log("false or true =>", false || true)
console.log("true or true =>", true || true)
console.log("false or false =>", false || false)

// && has more precedence that OR
// NOT(uses !) has the most

// order of precedence
// 1. ()
// 2. Variable substitution
// 3. Function calls
// 4. Arithmetic
// 5. Comparison operators (<> == etc)
// 6. Logical operators (!, &&, ||)
// 7. Assignment (=)