function connectGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const temp2 = document.querySelector('.temp');
  const cloud2 = document.querySelector('.cloud');
  const weather2 = document.querySelector('.weather');

  console.log(`위도${lat} 경도:${lon}`)
  const APIKEY = '5f97e534b6423b7e74fc6d0e112250d5';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const temp = data.main.temp;
    const cloud = data.clouds.all;
    const weather = data.weather[0].description;

    console.log(temp);
    console.log(cloud);
    console.log(weather);

    temp2.innerHTML = temp;
    cloud2.innerHTML = cloud;
    weather2.innerHTML = weather;

  })

}

function errorGeo() {
  alert('위치 정보 연결 실패')
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);

