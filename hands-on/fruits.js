let btn = document.querySelector("#submit")
btn.addEventListener ("click", function(){
    let allSelectedCheckBoxes = document.querySelectorAll(".fruits")
    let fruits = []
    for (let c of allSelectedCheckBoxes) {
        fruits.push(c.value)
    }
})