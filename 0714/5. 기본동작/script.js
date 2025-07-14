document.querySelector('a').addEventListener('click', (e) => {
  
  // 기본동작 막아줌
  e.preventDefault();

})

document.querySelector('p')
        .addEventListener('contextmenu', (e) => {

  e.preventDefault();
  alert('ㅋㅋㅋㅋ');

});

document.querySelector('p')
        .addEventListener('selectstart', (e) => {
  e.preventDefault();
  alert('드래그하지마쇼')
  
})