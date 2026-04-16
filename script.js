function tickClock() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('clock').innerText = now.toUTCString();
    }, 1000);
}

async function fetchWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m');
    const data = await response.json();
    renderWeather(data.current_weather);
    renderForecast(data.hourly);
}

function renderWeather(currentWeather) {
    const weatherElement = document.getElementById('weather');
    weatherElement.innerText = `Current Temperature: ${currentWeather.temperature}°C`; 
}

function renderForecast(hourlyData) {
    const forecastElement = document.getElementById('forecast');
    forecastElement.innerHTML = ''; // Clear previous forecast
    hourlyData.temperature_2m.forEach(temp => {
        const hourDiv = document.createElement('div');
        hourDiv.innerText = `Temperature: ${temp}°C`;
        forecastElement.appendChild(hourDiv);
    });
}

function renderToday(events) {
    const todayElement = document.getElementById('today');
    todayElement.innerHTML = ''; // Clear previous events
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.innerText = event;
        todayElement.appendChild(eventDiv);
    });
}

function renderWeek(weekEvents) {
    const weekElement = document.getElementById('week');
    weekElement.innerHTML = ''; // Clear previous events
    weekEvents.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.innerText = event;
        weekElement.appendChild(eventDiv);
    });
}

function renderMonthCal(monthEvents) {
    const monthElement = document.getElementById('month');
    monthElement.innerHTML = ''; // Clear previous events
    monthEvents.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.innerText = event;
        monthElement.appendChild(eventDiv);
    });
}

function renderTide(tideInfo) {
    const tideElement = document.getElementById('tide');
    tideElement.innerText = `Tide: ${tideInfo.tide}`;
}

function initDashboard() {
    tickClock();
    setInterval(fetchWeather, 10 * 60 * 1000); // Fetch weather every 10 minutes
}

initDashboard();