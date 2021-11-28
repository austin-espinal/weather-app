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

//one call API URL and key
const apiKey = "2a2063c48ee95fac2d9d7192efde7145";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID="+ apiKey;

function currentCity() {
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
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
