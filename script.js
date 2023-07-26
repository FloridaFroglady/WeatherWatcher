var currentEl = document.getElementById("currentWeather");
var searchButton = document.getElementById("searchBtn");
var inputCity = document.getElementById("searchInput").value;

function logCity(event) {
  event.preventDefault();
  console.log(inputCity);
}
// function searchWeather(event) {
//   event.preventDefault();
//   console.log(inputCity);

//   function getCity() {
//     var geoUrl =
// `https://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&appid=eeee70c5daa7a8997eff5ca2f3d7d931`;

//     fetch(geoUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then(data => {
//         const cityLat = data[1];
//         const cityLon = data[2];
//         console.log(data[1], data[2]);

//         getWeather(cityLat, cityLon);
        
//       })
    
//     }
//     function getWeather(cityLat, cityLon) {
//       var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=eeee70c5daa7a8997eff5ca2f3d7d931`;
//   fetch(weatherUrl)
//   .then((response) => {
//    return response.json();
//   })
//   .then(data => {
//     const weather = data.list[0].main
//     console.log(weather);
//     document.getElementById("currentWeather").textContent = weather
//   })

//   getCity();
  
//     }
   
//   }
  document.getElementById("searchBtn").addEventListener("submit", logCity);
