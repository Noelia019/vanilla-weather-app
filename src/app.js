function displayTemperature(response) {
  console.log(response.data);
  tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
