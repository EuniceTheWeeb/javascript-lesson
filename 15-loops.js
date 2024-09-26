// repeat certain lines of code over & over
// loop: body of code, sentinel/guard variable (variable to ctrl how many times to loop), guard condition, increment

let count = 0 // sentinel variable
while (count < 5) { // guard condition: should loop repeat or stop
    console.log("Blah Blah") // body code to loop over
    count++ // increment
}
// once count = 5, the loop stops

let x = 5
while (x < 11) { // must be more than final loop
    console.log(x)
    x++
}

// for loop
// syntax: for (sentinel, guard condition, increment) {output}
for (let i = 0; i < 10; i++) {
    console.log(i)
} 

// while loop more versetile than for loop. for loop mostly for numbers