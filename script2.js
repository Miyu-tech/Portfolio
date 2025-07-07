const apiKey = '537968c8f1717a40acfec2db084ba62b';

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`
        );
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();

        document.getElementById('weatherInfo').classList.remove('hidden');
        document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}℃`;
        document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        const date = new Date();
        document.getElementById('time').textContent = `Time: ${date.toLocaleTimeString()}`;
    } catch (error) {
        alert(error.message);
    }
}

