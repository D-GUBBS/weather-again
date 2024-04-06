function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");

  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let timeElement = document.querySelector("#time");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let date = new Date(response.data.time * 1000);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km\h`;
  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate{date};
}

function formatDate(date) {
  let day = date.getDate();

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sartuday",
  ];
  let day = days[date.getDay()];

  if (minutes <10){
    `0${minutes}`;
  }

  return `${day} ${hours} ${minutes}`;
}

function searchCity(city) {
  let apiKey = "f395ab75a23faa33c4066t05fao79b4d";
  let upiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
