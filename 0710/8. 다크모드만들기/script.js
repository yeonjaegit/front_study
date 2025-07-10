const darkMode = document.querySelector('.btn');

darkMode.addEventListener('click', function() {
  document.body.style.background = 'black';
  document.body.style.color = 'white';
  darkMode.value = "라이트모드"
});