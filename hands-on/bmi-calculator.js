
let btn = document.querySelector("#calculate")

btn.addEventListener("click", function() {
    let weight = Number(document.querySelector("#weight").value)
    let height  = Number(document.querySelector("#height").value)
    let bmi = weight/height**2
    let results = document.querySelector("#results")
    results.innerHTML = "Your BMI is $(bmi)."
})
