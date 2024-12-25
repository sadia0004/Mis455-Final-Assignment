// Function to fetch country and weather data
function connectWeatherData() {
  var countryName = document.getElementById('countryInput').value.trim();
  
  if (countryName === "") {
      alert("Please enter a country name.");
      return;
  }

  // Fetch country data to get the capital
  var countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;
  
  fetch(countryUrl)
  .then(response => response.json())
  .then(countryData => {
      // Extract capital from country data
      var capital = countryData[0].capital ? countryData[0].capital[0] : null;
      
      if (!capital) {
          alert("No capital found for this country.");
          return;
      }
      
      // Now fetch the weather data for the capital city
      fetchWeatherData(capital);
  })
  .catch(error => {
      console.error("Error fetching country data:", error);
      alert('Country not found');
  });
}

// Function to fetch weather data
function fetchWeatherData(city) {
  const apiKey = "d161cc6fc1cc49be9b534950240812";
  const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
  fetch(weatherUrl)
  .then(response => response.json())
  .then(weatherData => {
      console.log(weatherData);  // Log the weather data for debugging
      displayWeatherData(weatherData);
  })
  .catch(error => {
      console.error("Error fetching weather data:", error);
      alert('Weather data not found');
  });
}

// Function to display weather data
function displayWeatherData(data) {
  var weatherResultsDiv = document.getElementById("weatherResults");

  if (data && data.current) {
      weatherResultsDiv.innerHTML = `
          <h3>Weather Info</h3>
          <div class="card">
              <div class="card-body">
                  <p><strong>Temperature:</strong> ${data.current.temp_c}°C / ${data.current.temp_f}°F</p>
                  <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                  <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
                  <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                  <p><strong>Last Updated:</strong> ${data.current.last_updated}</p>
              </div>
          </div>
      `;
  } else {
      weatherResultsDiv.innerHTML = `<p>No weather data available for this country.</p>`;
  }
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
      <img src="${data.flags.png}" alt="Flag" width="250px">
  `;
}

// Adding event listener to the Show Country Data button
document.getElementById('showCountryBtn').addEventListener('click', function() {
  var countryName = document.getElementById('countryInput').value.trim();
  
  if (countryName === "") {
      alert("Please enter a country name.");
      return;
  }

  // Fetch country data to display
  var countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;
  
  fetch(countryUrl)
  .then(response => response.json())
  .then(countryData => {
      displayCountryData(countryData[0]);  // Display the country data when the button is clicked
  })
  .catch(error => {
      console.error("Error fetching country data:", error);
      alert('Country not found');
  });
});
