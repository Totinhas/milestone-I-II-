/*let appId = "b0fce03b5dfaa1ea39f055c85b334cd0";
let units = "metric";
let searchMethod = "zip";

function searchWeather(searchTerm) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result)
    })
}

function init(resultFromServer) {

    console.log(resultFromServer)
}

document.getElementById('searchButton').addEventListener('click', () => {
    let searchTerm = document.getElementById('inputSearch').value;
    if (searchTerm)
        searchWeather(searchTerm);
});*/

const api = {
  key: "b0fce03b5dfaa1ea39f055c85b334cd0",
  url: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector("#inputSearch");
const btn = document.querySelector("#searchButton");
searchbox.addEventListener("keypress", setQuery);
btn.addEventListener("click", setQuery);

function setQuery(evt) {
  getResults(searchbox.value);
}

function getResults(query) {
  fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
}
