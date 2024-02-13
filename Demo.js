const apiKey = 'My_API_Key';
const apiUrl = 'https://home.openweathermap.org/api_keys';

const Locationinput = document.getElementById('locationInput');
const searchButon = document.getElementById('searchButon');
const LocationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButon.addEventListener('click',() =>
{
    const location = Locationinput.value;
    if (Location){
        fetchWeather(location);
    }
});
function fetchWeather(Location) {
    const url = `${apiUrl}?q=${Location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            LocationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
