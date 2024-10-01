// a tree-like structure that represents html doc
// select element (let/const/declare variables of html element), then manipulate/modify it

let btn = document.querySelector("#submit")
btn.addEventListener("click", function(){
    let firstNameTextBox = document.querySelector("#firstName")
    let firstName = firstNameTextBox.value
    // .value property is only available for <input>
    // alert("button pressed")
    let email = document.querySelector("#email").value
    // let selectedRb = document.querySelector(".experience")
    // let exp = 

    let allSelectedCheckBoxes = document.querySelectorAll(".hearAbout")
    // accumulator algorithm: for loop repeats & pushes data into array
    let hearAbout = []
    for (let c of allSelectedCheckBoxes) {
        hearAbout.push(c.value)
    }
    
    let country = document.querySelector("#country").value
    console.log("Country: ", country)
})


// have console tab open when coding js in webpg