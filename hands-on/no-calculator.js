let btn = document.querySelector("#submit")
btn.addEventListener("click", function(){
    let allSelectedCheckBoxes = document.querySelectorAll(".number:checked")
    let numItems = 0
    for (let c of allSelectedCheckBoxes) {
        numItems = numItems + Number(c.value)
    }
    alert(numItems)
})