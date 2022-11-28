const degree = document.querySelector(".degree");
const cityName = document.querySelector('.city');
const region = document.querySelector('.region');
const timeText = document.querySelector('.time');
const country = document.querySelector(".country");
const input = document.getElementById('input');
const img = document.getElementById('img');


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
// var dayName = days[d.getDay()];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "c628e04b96msh525d796e1636119p1a2497jsn912df329da68",
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


getData('Samarkand');


async function getData(city){
	try{
		const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
		const data = await response.json();
		console.log(data)
		region.textContent = data.location.region;
		country.textContent = data.location.country;
		cityName.textContent = data.location.region;
		degree.textContent = data.current.temp_c + '°';
		timeText.textContent = `${days[d.getDay()]}, ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
		img.src = data.current.condition.icon
	}catch(err){
		alert('City is not found!')
	}
}

input.addEventListener('keydown', (e) => {
	if(e.key === 'Enter'){
		getData(input.value)
	}
})