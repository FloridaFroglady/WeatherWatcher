var currentEl = document.getElementById("currentWeather");
var searchButton = document.getElementById("searchBtn");
var inputCity = document.getElementById("searchInput");
var inputState = document.getElementById("stateInput");
// function logCity(event) {
//   event.preventDefault();
//   console.log(inputCity.value);
// }
function searchWeather(event) {
  event.preventDefault();
  console.log(inputCity.value);

  function getCity() {
    var geoUrl =
`https://api.openweathermap.org/geo/1.0/direct?q=${inputCity.value},${inputState.value},US&appid=eeee70c5daa7a8997eff5ca2f3d7d931`;

    fetch(geoUrl)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const cityLat = data[0].lat;
        const cityLon = data[0].lon;
        console.log(data[0].lat, data[0].lon);
        document.getElementById("city").textContent = `${data[0].name}, ${data[0].state}`
        localStorage.setItem("cities", `${data[0].name}, ${data[0].state}`);
        cityHistory = localStorage.getItem("cities");
        document.getElementById("yourCities").textContent = cityHistory;


        getWeather(cityLat, cityLon);
        
      })
    
    }
    function getWeather(cityLat, cityLon) {
      var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=eeee70c5daa7a8997eff5ca2f3d7d931`;
  fetch(weatherUrl)
  .then((response) => {
   return response.json();
  })
  .then(data => {
    console.log(data);
    const time = data.list[0].dt_txt;
    const tomTime = data.list[7].dt_txt;
    const day2Time = data.list[15].dt_txt;
    const day3Time = data.list[23].dt_txt;
    const day4Time = data.list[31].dt_txt;
    const day5Time = data.list[39].dt_txt;
    const weather = data.list[0].main;
    const tomWeather = data.list[7].main;
    const day2Weather = data.list[15].main;
    const day3Weather = data.list[23].main;
    const day4Weather = data.list[31].main;
    const day5Weather = data.list[39].main;
    console.log(weather);
    const conditions = data.list[0].weather[0];
    const tomConditions = data.list[7].weather[0];
    const day2Conditions = data.list[15].weather[0];
    const day3Conditions = data.list[23].weather[0];
    const day4Conditions = data.list[31].weather[0];
    const day5Conditions = data.list[39].weather[0];


    document.getElementById("icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${conditions.icon}.png"></img>`
    document.getElementById("time").textContent = `${time}`
    document.getElementById("currentWeather").textContent = `${conditions.main} (${conditions.description})`
    document.getElementById("temp").textContent = `Current temperature: ${weather.temp}`
    document.getElementById("feel").textContent = `Feels Like: ${weather.feels_like}`
    document.getElementById("humid").textContent = `Humidity: ${weather.humidity}`
    document.getElementById("wind").textContent = `Wind: ${data.list[0].wind.speed}mph, Gusting to: ${data.list[0].wind.gust}mph`

    document.getElementById("tomorrow").innerHTML = `${tomTime} ${tomConditions.main} (${tomConditions.description}) ${tomWeather.temp} <img src="http://openweathermap.org/img/wn/${tomConditions.icon}.png"></img>`

    document.getElementById("day2").innerHTML = `${day2Time} ${day2Conditions.main} (${day2Conditions.description}) ${day2Weather.temp} <img src="http://openweathermap.org/img/wn/${day2Conditions.icon}.png"></img>`

    document.getElementById("day3").innerHTML = `${day3Time} ${day3Conditions.main} (${day3Conditions.description}) ${day3Weather.temp} <img src="http://openweathermap.org/img/wn/${day3Conditions.icon}.png"></img>`

    document.getElementById("day4").innerHTML = `${day4Time} ${day4Conditions.main} (${day4Conditions.description}) ${day4Weather.temp} <img src="http://openweathermap.org/img/wn/${day4Conditions.icon}.png"></img>`

    document.getElementById("day5").innerHTML = `${day5Time} ${day5Conditions.main} (${day5Conditions.description}) ${day5Weather.temp} <img src="http://openweathermap.org/img/wn/${day5Conditions.icon}.png"></img>`
  })
  }
  getCity();
  }
  
  document.getElementById("inputForm").addEventListener("submit", searchWeather);
  