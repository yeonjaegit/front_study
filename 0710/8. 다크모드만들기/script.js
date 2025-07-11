const darkMode = document.querySelector('.btn');


  // 다크모드이면 true, 아니면 false
  let isDark = false;
darkMode.addEventListener('click', function(){
  if(isDark === false) {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    darkMode.value = '라이트모드';
    isDark = true;
  } else {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    darkMode.value = '다크모드';
    isDark = false;
  }
}) 
