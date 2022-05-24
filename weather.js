fetch('https://api.openweathermap.org/data/2.5/weather?id=1503901&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.features').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
fetch('https://api.openweathermap.org/data/2.5/weather?id=528293&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name1').textContent = data.name;
        document.querySelector('.price1').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer1').textContent = data.weather[0]['description'];
        document.querySelector('.features1').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
fetch('https://api.openweathermap.org/data/2.5/weather?id=479561&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name2').textContent = data.name;
        document.querySelector('.price2').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer2').textContent = data.weather[0]['description'];
        document.querySelector('.features2').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
fetch('https://api.openweathermap.org/data/2.5/weather?id=2014407&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name3').textContent = data.name;
        document.querySelector('.price3').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer3').textContent = data.weather[0]['description'];
        document.querySelector('.features3').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
fetch('https://api.openweathermap.org/data/2.5/weather?id=1506271&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name4').textContent = data.name;
        document.querySelector('.price4').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer4').textContent = data.weather[0]['description'];
        document.querySelector('.features4').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
fetch('https://api.openweathermap.org/data/2.5/weather?id=532096&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name5').textContent = data.name;
        document.querySelector('.price5').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer5').textContent = data.weather[0]['description'];
        document.querySelector('.features5').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=6313621&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name6').textContent = data.name;
        document.querySelector('.price6').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer6').textContent = data.weather[0]['description'];
        document.querySelector('.features6').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=523523&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name7').textContent = data.name;
        document.querySelector('.price7').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer7').textContent = data.weather[0]['description'];
        document.querySelector('.features7').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=563514&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name8').textContent = data.name;
        document.querySelector('.price8').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer8').textContent = data.weather[0]['description'];
        document.querySelector('.features8').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=569154&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name9').textContent = data.name;
        document.querySelector('.price9').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer9').textContent = data.weather[0]['description'];
        document.querySelector('.features9').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=509820&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name10').textContent = data.name;
        document.querySelector('.price10').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer10').textContent = data.weather[0]['description'];
        document.querySelector('.features10').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=485239&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name11').textContent = data.name;
        document.querySelector('.price11').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer11').textContent = data.weather[0]['description'];
        document.querySelector('.features11').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=466806&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name12').textContent = data.name;
        document.querySelector('.price12').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer12').textContent = data.weather[0]['description'];
        document.querySelector('.features12').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=498698&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name13').textContent = data.name;
        document.querySelector('.price13').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer13').textContent = data.weather[0]['description'];
        document.querySelector('.features13').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2013159&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name14').textContent = data.name;
        document.querySelector('.price14').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer14').textContent = data.weather[0]['description'];
        document.querySelector('.features14').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=473249&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name15').textContent = data.name;
        document.querySelector('.price15').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer15').textContent = data.weather[0]['description'];
        document.querySelector('.features15').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=551487&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name16').textContent = data.name;
        document.querySelector('.price16').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer16').textContent = data.weather[0]['description'];
        document.querySelector('.features16').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=1500973&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name17').textContent = data.name;
        document.querySelector('.price17').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer17').textContent = data.weather[0]['description'];
        document.querySelector('.features17').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=554840&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name18').textContent = data.name;
        document.querySelector('.price18').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer18').textContent = data.weather[0]['description'];
        document.querySelector('.features18').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=1512236&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name19').textContent = data.name;
        document.querySelector('.price19').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer19').textContent = data.weather[0]['description'];
        document.querySelector('.features19').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=558418&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name20').textContent = data.name;
        document.querySelector('.price20').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer20').textContent = data.weather[0]['description'];
        document.querySelector('.features20').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=498817&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name78').textContent = data.name;
        document.querySelector('.price78').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer78').textContent = data.weather[0]['description'];
        document.querySelector('.features78').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=524894&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name77').textContent = data.name;
        document.querySelector('.price77').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer77').textContent = data.weather[0]['description'];
        document.querySelector('.features77').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=569696&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name21').textContent = data.name;
        document.querySelector('.price21').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer21').textContent = data.weather[0]['description'];
        document.querySelector('.features21').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=1510853&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name22').textContent = data.name;
        document.querySelector('.price22').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer22').textContent = data.weather[0]['description'];
        document.querySelector('.features22').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=542420&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name23').textContent = data.name;
        document.querySelector('.price23').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer23').textContent = data.weather[0]['description'];
        document.querySelector('.features23').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=795140&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name24').textContent = data.name;
        document.querySelector('.price24').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer24').textContent = data.weather[0]['description'];
        document.querySelector('.features24').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2013348&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name25').textContent = data.name;
        document.querySelector('.price25').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer25').textContent = data.weather[0]['description'];
        document.querySelector('.features25').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=487846&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name26').textContent = data.name;
        document.querySelector('.price26').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer26').textContent = data.weather[0]['description'];
        document.querySelector('.features26').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2022890&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name27').textContent = data.name;
        document.querySelector('.price27').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer27').textContent = data.weather[0]['description'];
        document.querySelector('.features27').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2026609&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name28').textContent = data.name;
        document.querySelector('.price28').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer28').textContent = data.weather[0]['description'];
        document.querySelector('.features28').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=581049&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name29').textContent = data.name;
        document.querySelector('.price29').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer29').textContent = data.weather[0]['description'];
        document.querySelector('.features29').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?id=1526059&appid=35dababd545f246452dd18a7ebed27e2')
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.package-name30').textContent = data.name;
        document.querySelector('.price30').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.disclaimer30').textContent = data.weather[0]['description'];
        document.querySelector('.features30').textContent = "Wind speed: " + data.wind.speed + " m/s";
    })


