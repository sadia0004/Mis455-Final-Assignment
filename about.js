// Function to fetch country data
function connecCountryData(event) {
  event.preventDefault(); // Prevent page reload on form submit

  const countryName = document.getElementById('countryInput').value.trim();

  if (countryName === "") {
      alert("Please enter a country name.");
      return;
  }

  const countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;

  fetch(countryUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error("Country not found");
          }
          return response.json();
      })
      .then(countryData => {
          if (countryData && countryData.length > 0) {
              displayCountryData(countryData[0]);
          } else {
              alert('Country not found');
          }
      })
      .catch(error => {
          console.error(error);
          alert('Country not found');
      });
}

// Function to display country data
function displayCountryData(data) {
  const countryInfoDiv = document.getElementById("countryData");
  countryInfoDiv.innerHTML = `
      <div class="grid-item">
          <h3>Country Info</h3>
          <p><strong>Official Name:</strong> ${data.name.official}  <img src="${data.flags.png}" alt="Flag of ${data.name.common}" width="60px"></p>
        <p><strong>Region:</strong> ${data.region}</p>
        <p><strong>Subregion:</strong> ${data.subregion}</p>
        <p><strong>Languages:</strong> ${data.languages ? Object.values(data.languages).join(", ") : "Not available"}</p>
        <p><strong>Currency:</strong> ${data.currencies ? Object.values(data.currencies)[0].name + " (" + Object.values(data.currencies)[0].symbol + ")" : "Not available"}</p>

    
  `;

  const countryInfoDi = document.getElementById("datacountry");
  countryInfoDi.innerHTML = `
      <div class="grid-item">
          <h3><b>Country Geographical Info </b></h3>

        <p><strong>Country name:</strong> ${data.name.common}</p>

        <p><strong>PostalCode:</strong> ${data.postalCode.regex}</p>
        <p><strong>longitude coordinates:</strong> ${data.capitalInfo.latlng}</p>
        <p><strong>Borders:</strong> ${data.borders? Object.values(data.borders).join(", ") : "Not available"}</p>
        <p><strong>continents:</strong> ${data.continents}</p>
    
  `;

  }

