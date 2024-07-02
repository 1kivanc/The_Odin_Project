const apiKey = "1810d5f4b037b1f6ea4692c6b589d8ba";
const weatherForm = document.getElementById("weatherForm");
const weatherInfo = document.getElementById("weatherInfo");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = document.getElementById("locationInput").value.trim();
  if (location) {
    getWeather(location);
  }
});

function getWeather(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=tr`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const tempCelsius = (main.temp - 273.15).toFixed(2);
  const { humidity } = main;
  const { description } = weather[0];

  weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Sıcaklık: ${tempCelsius} °C</p>
        <p>Nem: ${humidity}%</p>
        <p>Durum: ${description}</p>
    `;
}
