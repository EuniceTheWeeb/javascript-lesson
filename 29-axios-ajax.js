// axios: alt to fetch
// fetch built into js, axios must install 1st
// get from axios cdn

window.addEventListener("DOMContentLoaded", async function() {
    let Response = await axios.get("data.json")
    let html = `
    <h1>${Response.data.name}</h1>
    <h2>${Response.data.price}</h2>
    <p>${Response.data.tag}</p>
    `    
    document.querySelector("#product").innerHTML = html
})

// .then is older syntax

// get json from github - must use URL of raw version