//file to call WeatherClient with node to test it

const WeatherClient = require('./weatherclient');
const weatherClient = new WeatherClient();

weatherClient.fetchWeatherData('Paris')
  .then((weatherData) => {
    console.log(weatherData);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });