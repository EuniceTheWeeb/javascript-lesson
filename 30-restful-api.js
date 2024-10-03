// request: sent by client (web browser)
// response: client receives from server

// api: app programming interface
// library of fx provided by vendor/service for programmers to write their own programs

// rest: representational state transfer
// restful api: hosted on web server, exposes functionality thru url/endpoint (1 url = 1 fx)
// every fx is an operation on a resource
// each fx is paired w/ a unique pair of web url combined w/ http verb

// stateful: remembers login
// stateless: everything resets after closing

window.addEventListener("DOMContentLoaded", async function(){
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${}`)
    return response.data
})

// save data in jsonbin (a restful api)
// 1 bin is 1 json file
// assign variables to bin id & base api url
// request type of jsonbin must match axios.(request type)