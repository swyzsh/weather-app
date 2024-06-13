import './style.css';

function capitalizeFirstLetter(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

let currentLocation = 'London';
let temp_c;
let temp_f;
let is_day;
let text;
let icon;

const API_KEY = "246e4620ea1644eeba4154724240406";

async function getData() {
  try {
    const requestURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${currentLocation}`;
    const response = await fetch(requestURL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    console.log(data);

    temp_c = data.current.temp_c;
    temp_f = data.current.temp_f;
    is_day = data.current.is_day;
    text = data.current.condition.text;

    console.log(text);
    console.log(temp_c);

    // Update Location
    location.innerHTML = capitalizeFirstLetter(currentLocation);

    // Update Temps
    tempC.innerHTML = `${temp_c}°C`;
    tempF.innerHTML = `${temp_f}°F`;


  } catch (error) {
    console.error('Fetch error: ', error);
  }
}

// HEADER
const header = document.querySelector('header');

const tempDisplay = document.createElement('div');
tempDisplay.classList.add('tempDisplay');
let tempState = 'C';

const tempC = document.createElement('span');
tempC.innerHTML = `${temp_c}°C`;
tempC.classList.add('selected-temp');
tempDisplay.appendChild(tempC)

const tempF = document.createElement('span');
tempF.innerHTML = `${temp_f}°F`;
tempF.classList.add('other-temp');
tempDisplay.appendChild(tempF);

header.appendChild(tempDisplay);

const tempSwitchBtn = document.createElement('button'); 
tempSwitchBtn.id = 'tempSwitchBtn';
tempSwitchBtn.innerHTML = "C/F";
header.appendChild(tempSwitchBtn);
tempSwitchBtn.addEventListener('click', function() {
  if (tempState === 'C') {
    tempState = 'F';
    tempDisplay.innerHTML = "";
    tempDisplay.appendChild(tempF);
    tempDisplay.appendChild(tempC);
    tempF.classList.remove('other-temp');
    tempC.classList.remove('selected-temp');
    tempF.classList.add('selected-temp');
    tempC.classList.add('other-temp');
  } else if (tempState === 'F') {
    tempState = 'C';
    tempDisplay.innerHTML = "";
    tempDisplay.appendChild(tempC);
    tempDisplay.appendChild(tempF); 
    tempC.classList.remove('other-temp');
    tempF.classList.remove('selected-temp');
    tempC.classList.add('selected-temp');
    tempF.classList.add('other-temp');
  }    
});  

// MAIN
const main = document.querySelector('main');


// FOOTER
const footer = document.querySelector('footer');


const location = document.createElement('h1');
location.innerHTML = currentLocation;
footer.appendChild(location);

const search = document.createElement('input');
search.setAttribute("type", "text");
search.setAttribute("name", "search");
search.setAttribute("placeholder", "Search you place!");
search.id = 'locationSearch';
search.classList.add('search');

const submit = document.createElement('button');
submit.innerHTML = "Submit";
submit.setAttribute("type", "submit");

footer.appendChild(search);
footer.appendChild(submit);

submit.addEventListener('click', function(event) {
  event.preventDefault();
  const searched = search.value;
  currentLocation = searched;
  console.log(currentLocation);
  getData();
});


document.addEventListener('DOMContentLoaded', function() {
  getData();
});