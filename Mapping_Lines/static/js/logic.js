// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -97.3301], 5);

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
//   }).addTo(map);

// // Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);

let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [32.8943, -80.0382],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

L.polyline(line, {
    color: "blue",
    dashArray: '10, 10',
    dashOffset: '10',
    weight: 4,
    opacity: 0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);