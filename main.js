const axios = require("axios");
const args = process.argv.slice(2);
const city = args[0];
const yourId = "";

// Make a request for a user with a given ID
axios
  .get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${yourId}`
  )
  .then(function (response) {
    const temperatureF = response.data.main.temp;
    const temperatureC =parseFloat( temperatureF - 273.15).toFixed(1);
    const cityName = response.data.name;
    const country = response.data.sys.country;
    const conditions = response.data.weather[0].description;
    // handle success
    // console.log(response.data);
    console.log(`It is now: ${temperatureF}°F, or; ${temperatureC}°C. in ${cityName}, ${country}`);
    console.log(`The current weather conditions are: ${conditions}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
