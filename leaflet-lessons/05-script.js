// separate concerns - controller

// render map when window has loaded
async function main(){
    function init() {
        let map = initMap()
        window.addEventListener("DOMContentLoaded", async function(){
    
            document.querySelector("#searchBtn").addEventListener("click", async function(){
                let query = document.querySelector("#searchInput").value
            })        
        })
    }
    init()
}



// initialize map only, no other layers
function initMap(){
    let singapore = [1.29, 103.85];
    // "map" is div id
    let map = L.map('map');
    map.setView(singapore, 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
    }).addTo(map);

    return map;
}

main();