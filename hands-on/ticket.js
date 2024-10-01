
let btn = document.querySelector("#Submit")
btn.addEventListener("click", function() {
    // get checkedRb & check dayType
    let checkedRb = document.querySelector(".dayType:checked")
    let people = document.querySelector("#people").value
    let totalCost
    if (checkedRb.value == "weekday") {
        totalCost = Number(people)*7
    } else {
        totalCost = Number(people)*15
    }
    document.querySelector("#results").innerHTML = <h1>Please pay $(totalCost)</h1>
})

// document.querySelector("#submit")
//     .addEventListener("click", function()) {

//     }