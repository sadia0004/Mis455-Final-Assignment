// Function to fetch country and weather data
function connectWeatherData() {
    var countryName = document.getElementById('countryInput').value;
    
    if (countryName === "") {
        alert("Please enter a country name.");
        return;
    }

    // Fetch country data
    
    var weatherUrl = `http://api.weatherapi.com/v1/current.json?key=cdac4ed7fa72480189f142745242412&q=${countryName}&aqi=no`;  // Replace with your API key
    
   

    // Fetch weather data
    fetch(weatherUrl)
      .then(response => response.json())
      .then(weatherData => {
        console.log(weatherData);  // Log the weather data to the console for debugging
        displayWeatherData(weatherData);
      })
      .catch(error => {
        console.log(error); // Log the error to the console for debugging
        alert('Weather data not found');
      });
}

function connecCountryData() {
  var countryName = document.getElementById('countryInput').value;
  
  if (countryName === "") {
      alert("Please enter a country name.");
      return;
  }

  // Fetch country data
  var countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;
 
  // Fetch country data
  fetch(countryUrl)
    .then(response => response.json())
    .then(countryData => displayCountryData(countryData[0]))
    .catch(error => alert('Country not found'));

 
}

// Function to display country data
function displayCountryData(data) {
    var countryInfoDiv = document.getElementById("countryData");
    countryInfoDiv.innerHTML = `
      <h3>Country Info</h3>
      <p><strong><b>Name:</b></strong> ${data.name.common}</p>
      <p><strong><b>Capital:</b></strong> ${data.capital ? data.capital[0] : 'No capital available'}</p>
      <p><strong><b>Area:</b></strong> ${data.area} km²</p>
      <p><strong><b>Population:</b></strong> ${data.population}</p>
      <img src="${data.flags.png}" alt="Flag" width="200px">
    `;
}

// Function to display weather data
function displayWeatherData(data) {
    var weatherResultsDiv = document.getElementById("weatherResults");

    // Log weather data for debugging
    console.log("Weather API Response:", data);

    if (data && data.current) {
        weatherResultsDiv.innerHTML = `
          <h3>Weather Info</h3>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${data.location.name}, ${data.location.country}</h5>
              <p class="card-text"><b>Weather:</b> ${data.current.condition.text}</p>
              <p class="card-text"><b>Temperature:</b> ${data.current.temp_c}°C</p>
              <p class="card-text"><b>Humidity:</b> ${data.current.humidity}%</p>
              <p class="card-text"><b>Wind Speed:</b> ${data.current.wind_kph} km/h</p>
              <img src="https:${data.current.condition.icon}" alt="Weather Icon">
            </div>
          </div>
        `;
    } else {
        weatherResultsDiv.innerHTML = `<p>No weather data available for this country.</p>`;
    }
}
