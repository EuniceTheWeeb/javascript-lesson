// dev tools -> network -> check what files are being sent to 
// js programming runs on the user's com
// fetch takes in 1 parameter: the URL of where the data is
// only takes data hosted on a web server (available on public Internet)

// fetch("28-data-driven-programming.json")
// make a request to server, then fetch data from there

// promise: fx that takes a while (>100ms) to execute & only executes in the future
// still working in bg
// can tell js when the promise finishes
fetchData()
console.log("Hello world")

async function fetchData() {
    let request = await fetch("28-data-driven-programming.json")
    console.log(request)
    let json = await request.json()
    console.log(json)
    // in this fx, all await become synchronous
    // outside this fx, still remains async

    // request.then(function(response){
    //     console.log(response)
    //     return response.json // also returns promise
    //     }.then(console.log(request))
    // )
}

// when request finishes, then console.log response

// synchronous: js will read the code line-by-line
// async: js executes a fx in bg while reading other code
// when fetch finishes, js will call .then(execute fx())
// .fire also returns promise
// can only use await in async fx
