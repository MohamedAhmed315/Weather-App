function getWeather() {
    let city = document.querySelector('#city-input').value;
    document.querySelector('.card').style.display = 'block';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);

            document.querySelector(".card-img-top").setAttribute("src", `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`);
            document.querySelector("#city").innerHTML = city;
            document.querySelector("#lon").innerHTML = obj.coord.lon;
            document.querySelector("#lat").innerHTML = obj.coord.lat;
            document.querySelector('#temp').innerHTML = Math.floor(obj.main.temp - 273);
            document.querySelector("#humidity").innerHTML = obj.main.humidity;
            document.querySelector("#pressure").innerHTML = obj.main.pressure;
            document.querySelector("#status").innerHTML = obj.weather[0].description;
            document.querySelector("#country").innerHTML = obj.sys.country;
            // document.querySelector("#xyz").innerHTML = this.responseText;

            switch (obj.weather[0].main) {
                case "Clouds":
                    document.querySelector("body").style.backgroundImage = 'url(/img/clouds.jpg)';
                    break;
                case "Clear":
                    document.querySelector("body").style.backgroundImage = 'url(/img/clear.jpg)';
                    break;
                case "Haze":
                    document.querySelector("body").style.backgroundImage = 'url(/img/haze.jpg)';
                    break;
                default:
                    break;
            }
        }
    };
    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43e5ddccf27ef197208b6ad9552c570c`, true);
    xhttp.send();
}