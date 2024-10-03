window.addEventListener("DOMContentLoaded", async function(){
    let url = "https://raw.githubusercontent.com/kunxin-chor/fullstack-javascript-ajax-hands-on/refs/heads/master/Round-22-Animal-Adoption/data.json"
    let response = await axios.get(url)
    console.log(response)

    let user = response.data
    let animalInfo = document.querySelector("#animalInfo")
    let html = `
     <li>Name: ${user.Name}</li>
     <li>Type of Animal: ${user["Type of Animal"]}</li>
     <li>Breed: ${user.Breed}</li>
     <li>Date of Birth: ${user["Date of Birth"]}</li>
     <li>Medial Conditions: ${user["Medical Conditions"]}</li>
     <li>Photo: ${user.Photo}</li>
    `
    animalInfo.innerHTML = html
})