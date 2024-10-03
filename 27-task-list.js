// create, update, read, delete
// store data as an array of objects in local storage

let tasks = {
    "id" :1, // unique identifier for record
    "name" : "wash the car",
    "urgency" : 3,
    "done" : false
},
{
    "id" : 2,
    "name" :"buy groceries",
    "urgency" :5,
    "done" :false
},
{
    "id": 3,
    "name": "wash the toilet",
    "urgency": 2,
    "done": true
},

window.addEventListener("DOMContentLoaded", function(){
    //call function when HTML is loaded, render tasks in database
    renderTasks()
})

// renderTasks to update ul#tasks w/ all the tasks
function renderTasks () {
    for (let t of tasks) {
        let liElements = document.createElement("li")
        liElements.innerHTML = ${t.name} (${t.urgency})

        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.checked = t.done

        liElement.appendChild(checkBox)
        taskList.appendChild(liElements)
    }
}