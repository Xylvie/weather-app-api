const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');

async function checkWeather() {
    const city = cityInput.value;
    const apiKey = "39ea66573e7aa7f648c7514f16a3dbe2";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

           if (city === "") {
                alert("Invalid Input");
                document.getElementById('details-container').style.display = "none";
            } else {
                document.getElementById('details-container').style.display = "block";
            };


        if (response.ok) {
            console.log(data);
            document.getElementById('city-holder').innerText = data.name;
            document.getElementById('degrees-holder').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('humidity-holder').children[0].innerText = `${data.main.humidity}%`;
            document.getElementById('wind-holder').children[0].innerText = `${Math.round(data.wind.speed)} km/h`;

            if (data.weather[0].main === 'Clouds') {
                    document.getElementById('img').src = "./images/clouds.png";
            } else if (data.weather[0].main === 'Clear') {
                    document.getElementById('img').src = "./images/clear.png";
            } else if (data.weather[0].main === 'Rain') {
                    document.getElementById('img').src = "./images/rain.png";
            } else if (data.weather[0].main === 'Drizzle') {
                    document.getElementById('img').src = "./images/drizzle.png";
            } else if (data.weather[0].main === 'Mist') {
                    document.getElementById('img').src = "./images/mist.png";
            } else if (data.weather[0].main === 'Snow') {
                    document.getElementById('img').src = "./images/snow.png";
            };
    }

        
 } catch (error) {
        console.error("Error fetching weather data:", error);
    };  
}



searchButton.addEventListener('click', checkWeather);


