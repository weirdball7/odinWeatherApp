const inputValue = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.tempature');
const weather = document.querySelector('.weather');

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=08a7d2b6c8d0af42862c9615672e2226')
        .then(response => response.json())
        .then(data => {
            const nameValue = data.name;
            const tempValue = (data.main.temp - 273.15).toFixed(1); // Convert Kelvin to Celsius
            const weatherValue = data.weather[0].description;

            cityName.innerHTML = nameValue;
            temp.innerHTML = tempValue + '°C'; // Display temperature with °C
            weather.innerHTML = weatherValue;
        })
        .catch(err => alert("City not found!"));
});
