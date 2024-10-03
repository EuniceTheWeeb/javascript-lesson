window.addEventListener("DOMContentLoaded", async function(){
    let pg1 = "https://raw.githubusercontent.com/kunxin-chor/fullstack-javascript-ajax-hands-on/refs/heads/master/Round-21-Jump-to-Page/page1.html"
    let response = await axios.get(pg1)
    console.log(response)

    let pg = this.document.querySelector("#page")
    let pgNum =  document.querySelector("#pgNum").value
    
})

