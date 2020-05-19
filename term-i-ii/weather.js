const api = {
  key: "b0fce03b5dfaa1ea39f055c85b334cd0",
  url: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector("#inputSearch");
const btn = document.querySelector("#searchButton");

btn.addEventListener("click", setQuery);

function setQuery(evt) {
  if (searchbox.value == "") {
    let errorLocation = (document.getElementById(
      "errorLocation"
    ).style.display = "block");
  } else {
    getResults(searchbox.value);
    errorLocation.style.display = "none";
  }
}

function getResults(query) {
  fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(function(weather) {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.getElementById("city");
  city.innerText = `${weather.name}`;
  let country = document.getElementById("country");
  country.innerText = `${weather.sys.country}`;
  let comma = (document.getElementById("cityInfo").style.display = "block");
  let icon = document.getElementById("icon");
  icon.src =
    "http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";
  let temp = document.getElementById("temperatureResult");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>ºC</span>`;
  let wind = document.getElementById("windResult");
  wind.innerHTML = `${Math.round(weather.wind.speed)}<span> mph</span>`;
  let humidity = document.getElementById("humidityResult");
  humidity.innerHTML = `${Math.round(weather.main.humidity)}<span>%</span>`;
}
