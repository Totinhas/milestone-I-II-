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