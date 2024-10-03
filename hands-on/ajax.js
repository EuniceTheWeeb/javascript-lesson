// async function loadData() {
//     let url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt"
//     let response = await axios.get(url)
//     console.log(response.data)
//     document.querySelector("#helloWorld").innerHTML
// }
// loadData()

// window.addEventListener("DOMContentLoaded", async function() {
//     let url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt"
//     let response = await axios.get(url)
//     console.log(response.data)
//     let html = `
//     <h1>${response.data}</h1>
//     `    
//     document.querySelector("#helloWorld").innerHTML = html
// })

// window.addEventListener("DOMContentLoaded", async function() {
//     let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json"
//     let response = await axios.get(url)
//     console.log(response.data)

//     let user = response.data
//     let insertData = document.querySelector("#helloWorld")
//     let html = `
//      <ul>
//         <li>Name: ${user.Name}</li>
//         <li>Mobile: ${user.Mobile}</li>
//         <li>Current Address: ${user.Address["current Address"]}</li>
//         <li>Permanent Address: ${user.Address["Permanent address"]}</li>
//       </ul>
//     `
//     insertData.innerHTML = html    
//     }    
// )

window.addEventListener("DOMContentLoaded", async function() {
    let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json"
    let response = await axios.get(url)
    console.log(response)

    let userListEl = document.querySelector("#userList")
    for (let user of response.data.users) {
        let liElement = document.createElement("li")
        liElement.innerHTML = `
        ${user.firstName} ${user.lastName}, Phone: ${user.phoneNumber}, Email: ${user.emailAddress}
        `
        userListEl.appendChild(liElement)
    }
})