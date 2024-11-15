// create map obj
// L.map receives lat & long of center point
// lat & lng always array

let zoo = [1.4043, 103.7930]; // #1 latlng
let centre = [1.3327, 103.6789]
let birdPark = [1.4072, 103.7813]

// sgMap.setView(latLng, zoom lvl) - fx to set initial location & zoom lvl
let map = L.map('map').setView(zoo, 13); // #2 Set the center point
// let mapCentre = L.map('map').setView(centre, 13);
// let mapBirdPark = L.map('map').setView(birdPark, 13);

// set up tile layer (aka map layer)
// layer: anything visible on the map, like csp
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
}).addTo(map);

// add a marker to map (own layer)
let markerZoo = L.marker(zoo).addTo(map)
let markerCentre = L.marker(centre).addTo(map)
let markerBirdPark = L.marker(birdPark).addTo(map)

// bindPopup() can add tooltip
// markerZoo.bindPopup("<p>Singapore Zoo</p>")
markerCentre.bindPopup("<p>Singapore Discovery Centre</p>")
markerBirdPark.bindPopup("<p>Bird Paradise</p>")

markerZoo.addEventListener ("click", function(){
    console.log(markerZoo)
    markerZoo.bindPopup("<p>Singapore Zoo</p>")
    let circle = L.circle(zoo, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: .25,
        radius: 500,
    }).addTo(map);
})

markerCentre.addEventListener ("click", function(){
    console.log(markerCentre)
    markerCentre.bindPopup("<p>Singapore Discovery Centre</p>")
    let circle = L.circle(centre, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: .25,
        radius: 500,
    }).addTo(map);
})

markerBirdPark.addEventListener ("click", function(){
    console.log(markerBirdPark)
    markerZoo.bindPopup("<p>Bird Paradise</p>")
    let circle = L.circle(birdPark, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: .25,
        radius: 500,
    }).addTo(map);
})


// 1st parameter of bindPopup is what html to show user
// setIntervals - useful for real-time updating APIs
// layer grps - container w/ other layers so that devs can hide & show layers, & access them later
// built into leaflet plugin


// maps api: fsq37qjUeXEMSpIo+Th3YxhJQ2tMFNnPbfqvOJey5Ze3ZRA=