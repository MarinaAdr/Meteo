const apiKey = 'bdc974bc1ad3580950c13bd4c9368561'; 

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                document.getElementById('weatherResult').innerHTML = 
                    `La météo à ${city} : ${weatherDescription}, ${temperature}°C`;
            } else {
                document.getElementById('weatherResult').innerHTML = 
                    `Ville non trouvée.`;
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});