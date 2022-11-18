const setWeatherBalloon = (cityID) => {
    var apiKey = '39a8b902fc186b78b27fc089eec5508c';
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?id=' +
            cityID +
            '&appid=' +
            apiKey
    )
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let weatherIcon = data.weather[0].icon;
            let tempK = parseFloat(data.main.temp);
            let tempC = Math.round(tempK - 273.15);
            let tempF = Math.round((tempK - 273.15) * 1.8) + 32;
            document.getElementById('weather').innerHTML =
                '<p id="location">' +
                data.name +
                '</p><p id="details" ' +
                'title="' +
                tempF +
                '&deg;F">' +
                '<img src="https://openweathermap.org/img/wn/' +
                weatherIcon +
                '.png">' +
                data.weather[0].description +
                '<span class="separator">|</span>' +
                tempC +
                '&deg;C</p>';
        });
};

export { setWeatherBalloon };
