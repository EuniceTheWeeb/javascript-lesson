

window.addEventListener("DOMContentLoaded", async function(){
    let latLng = [1.29, 103.85]
    let singaporeMap = L.map('map');
    singaporeMap.setView(latLng, 13 );

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(singaporeMap);

    let hdbLayerGroup = L.hdbLayerGroup()
    hdbLayerGroup.addTo(singaporeMap)

    let hdbResponse = await axios.get("https://gist.githubusercontent.com/kunxin-chor/a5f5cab3e8a6ad0868134334c1432d9a/raw/ca55e99903d5913fc0e701ddab139472fe7fe4fa/hdb.json")
    for (let hdb of hdbResponse.data) {
        let marker = L.marker(hdb.coordinates)
        marker.bindPopup(`<h1>${hdb.name}</h1>`)
        marker.addTo(hdbLayerGroup)
    }

    let mallsResponse = "https://gist.githubusercontent.com/kunxin-chor/a5f5cab3e8a6ad0868134334c1432d9a/raw/ca55e99903d5913fc0e701ddab139472fe7fe4fa/malls.json"
    let natureResponse = "https://gist.githubusercontent.com/kunxin-chor/a5f5cab3e8a6ad0868134334c1432d9a/raw/ca55e99903d5913fc0e701ddab139472fe7fe4fa/nature.json"

})