const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const Weather_img = document.querySelector('.Weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

    async function checkWeather(city){
 	const api_key = "67a2fa5aaff24b55c4011e54834e2e0e";
 	const url = `https://api.openweathermap.org/data/2.5/
	weather?q=${city}&appid=${api_key}`;

	const Weather_data = await fetch (`${url}`).then(response => response.json());
	
     temperature.innerHTML = `${Math.round(Weather_data.main.temp - 273.15)}°C`;
	 description.innerHTML = `${Weather_data.weather[0].description}`;
	 humidity.innerHTML = `${Weather_data.main.humidity}%`;
	 wind_speed.innerHTML = `${Weather_data.wind.speed}km/H`;

	 switch(Weather_data.weather[0].main){
		case 'Clouds': 
		Weather_img.src = "images/clouds.png";
		break;
		case 'Clear': 
		Weather_img.src = "images/clear.png";
		break;
		case 'Rain': 
		Weather_img.src = "images/rain.png";
		break;
		case 'Mist': 
		Weather_img.src = "images/mist.png";
		break;
		case 'Snow': 
		Weather_img.src = "images/snow.png";
		break;
	 }
	 console.log(Weather_data);
 }
  
 
 searchBtn.addEventListener('click', ()=>{
  	checkWeather(inputBox.value);
 });
 
