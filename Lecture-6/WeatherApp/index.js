
 //Asynchronous Behaviour: If multiple requests are these in the queue, heavy requestes will be taken later by Javascipt without wasting anytime.
// //Async Await
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");

const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')
let target = "Mumbai";
form.addEventListener('submit',function(e)
{
  e.preventDefault(); // thsi will not refresh the page, will not let the default behaviour to work
target = searchField.value
fetchData(target)
})


async function fetchData(target)
{
  let endpoint = `http://api.weatherapi.com/v1/current.json?key=5124f67ea22f4baea86105809243005&q=${target}&aqi=no` // ${target} = this is known as template litral, we use tilt symbol here

  const response = await fetch(endpoint) // fetch is a menthod in a javascript to get data // This will get the reposnse body
  const data = await response.json() //This will get the reposnse body

  let currentTemp = data.current.temp_c;
  let locationName = data.location.name;
  let localTime = data.location.localtime

  let currentCondition = data.current.condition.text
  let conditonLogo = data.current.condition.icon

  updateWeatherData(locationName , currentTemp ,localTime , currentCondition , conditonLogo)
}

function updateWeatherData(cityName , temperature , time , currentCondition , conditonLogo){
  cityField.innerText = cityName
  temperatureField.innerText = temperature
  dateField.innerText = time
  weatherField.innerText = currentCondition
  emojiField.src = conditonLogo
}








