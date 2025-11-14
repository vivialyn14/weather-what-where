function newCity(event) {
  //prevent page reload
  event.preventDefault();

  // change h2 to searched city
  let searchInput = document.querySelector("#search-bar");

  // change temp-value to current temp according to API
  let apiKey = "1dd3bcb8741dt0aoe047389dbb6b5df4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;

  function getWeather(response) {
    //change temperature
    let tempData = Math.round(response.data.temperature.current);
    let tempValue = document.querySelector("#temp-value");
    tempValue.innerHTML = tempData;

    //change city & country
    let cityName = document.querySelector("#city-name");
    cityName.innerHTML = response.data.city;
    let countryName = document.querySelector("#country");

    //countryName.innerHTML = response.data.country;
    let shortCountry = {
      "United Kingdom of Great Britain and Northern Ireland": "UK",
      "United States of America": "USA",
      "Russian Federation": "Russia",
      "Congo (Democratic Republic of the)": "DRC",
    };
    if (response.data.country in shortCountry) {
      countryName.innerHTML = shortCountry[response.data.country];
    } else {
      countryName.innerHTML = response.data.country;
    }

    //change description
    let description = document.querySelector("#weather-description");
    description.innerHTML = response.data.condition.description;

    //change details
    let windSpeed = document.querySelector("#wind-speed");
    let humidity = document.querySelector("#humidity");
    windSpeed.innerHTML = `${Math.round(response.data.wind.speed)} m/s`;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;

    //change emoji
    let emoji = document.querySelector("#emoji");
    emoji.src = response.data.condition.icon_url;
  }

  axios.get(apiUrl).then(getWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", newCity);

let currentDate = new Date();
let dateTimeInfo = document.querySelector("");
