const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};

const lan = document.querySelector('.lan');
const temp = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const cloud = document.querySelector('.cloud');
const img = document.querySelector('.img');

const selectBox = document.querySelector('.select');

selectBox.addEventListener('change', (e) => {
  let target = e.target.value;
  
  let lat = (countryCoordinates[target].latitude);
  let lon = (countryCoordinates[target].longitude);

  const APIKEY = '5f97e534b6423b7e74fc6d0e112250d5';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const temp2 = data.main.temp;
    const weather2 = data.weather[0].description;
    const cloud2 = data.clouds.all;
    
    console.log(target);
    console.log(temp2);
    console.log(weather2);
    console.log(cloud2);

    lan.innerHTML = target;
    temp.innerHTML = temp2;
    weather.innerHTML = weather2;
    cloud.innerHTML = cloud2;
    img.setAttribute('src', 'https://openweathermap.org/img/wn/10d@2x.png');
    
  })

})
