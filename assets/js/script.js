var city = "";
//saved city array
var savedCity = [];

var searchCity = $("#search-city");
var searchButton = $("#search-btn");
var currentCity = $("#current-city");
var temp = $("#temperature");
var humidty= $("#humidity");
var windSpeed=$("#wind-speed");
var uvIndex= $("#uv-index");

//using LUXON for date
var DateTime = luxon.DateTime;
const now = DateTime.now();
// $("#currentDay").text(now.toLocaleString());

//one call API URL and key
const apiKey = "2a2063c48ee95fac2d9d7192efde7145";



function currentCity(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID="+ apiKey;

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayWeather(data, city);
            });
        } else {
            alert("Error: City not found");
        }
    })
    .catch(function (error) {
        //Notice this .cath()' gettineg chained onto the end of the '.then()' method
        alert("Unable to connect to One Call API");
    });
};
function displayWeather(){
  
}

