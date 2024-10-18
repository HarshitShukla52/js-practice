// When the user clicks the "search" button, call the fetchWeather function

document.querySelector('.search').addEventListener('click', fetchWeather);

// When the user presses "Enter" in the city input field, call the fetchWeather function

document.querySelector('.city').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchWeather();
    }
});

 let temperature = document.querySelector('.temperature')
 let humidity = document.querySelector('.value-humidity')
 let windSpeed = document.querySelector('.value-wind')
 let country = document.querySelector('.country')
 let today = document.querySelector('.todayDate')
 const forecastContainer = document.querySelector('.forcast-container');




function fetchWeather() {
    const city = document.querySelector('.city').value;
    const apiKey = '7b3b4278a7467a2e736dc5dbbdd3b50f'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

     // Use the fetch() function to get weather data from the API

    fetch(url)
        .then(response => {
            // Check if the city was found, otherwise show an error
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();   // Convert the response to JSON (data we can use)
        })
        .then(data => {
            displayWeather(data);  // Pass the weather data to the displayWeather function
        })
        .catch(error => {
            displayError(error.message);  // Show an error message if something goes wrong
        });
}

// Function to show weather details on the webpage

function displayWeather(data) {
    // Show the weather information section and hide the error section

    document.querySelector('.weather-condition').style.display = 'flex';
    document.querySelector('.not-found').style.display = 'none';
    document.querySelector('.search-city').style.display = 'none';

//from this we are getting or fatching data of weather condition

    temperature = data.main.temp; //getting temp
    humidity = data.main.humidity;   //getting humidity
    windSpeed = data.wind.speed;
    condition = data.weather[0].main.toLowerCase(); // Get main weather condition
    country = data.sys.country;
    today = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    //update web page with weather data ,,show temp,humidity, windspeed, coundrycode and today date

    temperature.textContent = `${temperature} °C`;
    humidity.textContent = `${humidity}%`;
    windSpeed.textContent = `${windSpeed} M/s`;
    country.textContent = country;
    today.textContent = today;

    // Update weather condition
    const weatherImage = document.querySelector('.weather-img');
    const conditionText = document.querySelector('.condition');

    switch (condition) {
        case 'clear':
            weatherImage.src = 'icons/clear.png'; // Add your clear weather icon
            conditionText.textContent = 'Clear Sky';
            break;
        case 'clouds':
            weatherImage.src = 'icons/cloudy .png'; // Add your cloudy weather icon
            conditionText.textContent = 'Clouds';
            break;
        case 'rain':
            weatherImage.src = 'icons/rain.png'; // Add your rain icon
            conditionText.textContent = 'Rain';
            break;
        case 'drizzle':
            weatherImage.src = 'icons/drizzle.png'; // Add your drizzle icon
            conditionText.textContent = 'Drizzle';
            break;
        case 'thunderstorm':
            weatherImage.src = 'icons/thunderstorm.png'; // Add your thunderstorm icon
            conditionText.textContent = 'Thunderstorm';
            break;
        case 'snow':
            weatherImage.src = 'icons/snow.png'; // Add your snow icon
            conditionText.textContent = 'Snow';
            break;
        case 'atmosphere':
            weatherImage.src = 'icons/atmosphere.png'; // Add your atmosphere icon
            conditionText.textContent = 'Mist';
            break;
        default:
            weatherImage.src = 'icons/default.png'; // Add a default icon
            conditionText.textContent = 'Weather not available';
            break;
    }
}

//5 day of forcasting
function displayForecast(data) {
    forecastContainer.innerHTML = '';  // Clear previous forecast

    // OpenWeatherMap returns 3-hour interval data. We need to display the forecast for each day.
    for (let i = 0; i < data.list.length; i += 8) {  // Loop over every 8th item (24 hours)
        const forecastItem = data.list[i];
        const forecastDate = new Date(forecastItem.dt_txt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
        const weatherIcon = forecastItem.weather[0].icon;
        const temp = `${forecastItem.main.temp} °C`;

        const forecastElement = document.createElement('div');
        forecastElement.classList.add('forcast-item');
        forecastElement.innerHTML = `
            <h5 class="item-date-f textreg">${forecastDate}</h5>
            <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather icon" class="forcast-img">
            <h5 class="forcast-temp">${temp}</h5>
        `;
        forecastContainer.appendChild(forecastElement);
    }
}

//function to show error msg when the city is not found

function displayError(message) {
    document.querySelector('.weather-condition').style.display = 'none'; //it hide weather info
    document.querySelector('.not-found').style.display = 'block';    //show the error msg section
    document.querySelector('.search-city').style.display = 'none';
    document.querySelector('.not-found h1').textContent = message;     //display error msg
}


//5 day forcast

           