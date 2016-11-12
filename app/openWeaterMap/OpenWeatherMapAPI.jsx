var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=371e0995d01ef78834174a3acfd672a9';

// q=London&'


function getCurrentWeatherData(location) {

    return httpGetAsync(requestUrl , function(response) {
        return response;
    });
}

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestURL).then(function (response) {
            // debugger;
            if (response.data && response.data.cod && response.data.message) {
                if (response.data && response.data.message) {
                    throw new Error(response.data.message);
                } else {
                    throw new Error(response);
                }
            } else {
                return response.data.main.temp;
            }
        },
        function(response) {
            throw new Error(response);
        });
    }
};

// function httpGetAsync(requestUrl, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     };
//     xmlHttp.open("GET", requestUrl, true); // true for asynchronous
//     xmlHttp.send(null);
// }
