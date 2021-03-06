// API key. Replace with your API key
const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {
  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  const weatherType = (data.weather[0].main);
  console.log(weatherType);

  document.body.style.backgroundImage = `url('images/${weatherType}.jpeg')`;

  console.log(document.body.style.backgroundImage);

  // Template to output
  const template = `
  <div class="flex">
    <h1>Weather</h1>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
    </div>
    <data value="${data.name}" class="city">${data.name}</data>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
    <data value="${data.weather[0].description}" class="description">${data.weather[0].description}</data>
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
});