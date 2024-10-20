// When the user clicks the "search" button, call the fetchWeather function

document.querySelector('.search').addEventListener('click', fetchWeather);

// When the user presses "Enter" in the city input field, call the fetchWeather function

document.querySelector('.city').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchWeather();
    }
});

//1

//function for fetching weather data
 
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

        //it for fetching forcast 

    fetch(forecastUrl)
        .then(response => {
            // Check if the city was found, otherwise show an error
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();   // Convert the response to JSON (data we can use)
        })
        .then(data => {
            displayForecast(data);  // Pass the forecast data to the displayWeather function
              
        })
        .catch(error => {
            displayError(error.message);  // Show an error message if something goes wrong
        });
}

//2

// Function to show current weather details on the webpage

function displayWeather(data) {
    // Show the weather information section and hide the error section

    document.querySelector('.weather-condition').style.display = 'flex';
    document.querySelector('.not-found').style.display = 'none';
    document.querySelector('.search-city').style.display = 'none';

//from this we are getting or fatching data of weather condition..extract first weather forecast

    const temperature = data.main.temp; //getting temp
    const humidity = data.main.humidity;   //getting humidity
    const windSpeed = data.wind.speed;
    const condition = data.weather[0].main.toLowerCase(); // Get main weather condition
    const country = data.sys.country;
    const today = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    //update web page with weather data ,,show temp,humidity, windspeed, countrycode and today date

    document.querySelector('.temperature').textContent = `${temperature} °C`;
    document.querySelector('.value-humidity').textContent = `${humidity}%`;
    document.querySelector('.value-wind').textContent = `${windSpeed} M/s`;
    document.querySelector('.country').textContent = country;
    document.querySelector('.todayDate').textContent = today;
    

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

//3

//function to display 5 day forecast

    function displayForecast(data) {
        const ForcastContainer = document.querySelector('.forcast-container') 
        ForcastContainer.innerHTML = ' ';  //it clear previous forcast 

//filter forecast to show only one data point per day
        const dailyForcast = data.list.filter((item , index) => index % 8 === 0);

        dailyForcast.forEach((forcast) => {
            const date = new Date(forcast.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            const condition = forcast.weather[0].main.toLowerCase()
            const temperature = forcast.main.temp
            let iconSrc = 'icons/default.png';

// choose icon based on weather condition
            switch (condition) {
                case 'clear':
                    iconSrc = 'icons/clear.png'
                    break;
                case 'clouds':
                    iconSrc = 'icons/cloudy .png'
                    break;
                case 'rain':
                    iconSrc = 'icons/rain.png'
                    break;
                case 'drizzle':
                    iconSrc = 'icons/drizzle.png'
                    break;
                case 'thunderstrom':
                    iconSrc = 'icons/thunderstorm.png'
                    break;
                case 'snow':
                    iconSrc = 'icons/snow.png'
                    break;
                case 'atmosphere':
                    iconSrc = 'icons/atmosphere.png'
                    break;
            
                default:
                    break;
            }

//create forecast item for each day
            const forcastItem = `
            <div class = "forcast-item">
            <h5 class = "item-date-f textreg">${date}</h5>
            <img src = "${iconSrc}" alt="Weather icon" class = "forcast-img">
            <h5 class = "forcast-temp">${temperature} °C</h5>
            </div>
            `;
            ForcastContainer.innerHTML += forcastItem;
        });
    }

    

//4


//function to show error msg when the city is not found

function displayError(message) {
    document.querySelector('.weather-condition').style.display = 'none'; //it hide weather info
    document.querySelector('.not-found').style.display = 'block';    //show the error msg section
    document.querySelector('.search-city').style.display = 'none';
    document.querySelector('.not-found h1').textContent = message;     //display error msg
}



