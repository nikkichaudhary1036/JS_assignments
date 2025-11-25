const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");

const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const conditionEl = document.getElementById("condition");

const errorEl = document.getElementById("error");
const weatherBox = document.getElementById("weatherBox");

const API_KEY = "YOUR_API_KEY";

async function getWeather() {
    const city = cityInput.value.trim();

    errorEl.textContent = "";
    weatherBox.classList.add("hidden");

    if (city === "") {
        errorEl.textContent = "Please enter a city name.";
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        tempEl.textContent = data.main.temp;
        humidityEl.textContent = data.main.humidity;
        conditionEl.textContent = data.weather[0].description;

        weatherBox.classList.remove("hidden");

    } catch (err) {
        errorEl.textContent = "Error: Invalid city name or API problem.";
    }
}

getWeatherBtn.addEventListener("click", getWeather);
