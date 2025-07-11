const hamburger = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');
// let showlist = false;
//   hamburger.addEventListener('click', () => {
//     if(showlist === false){
//     const list = document.querySelector('.list-group');
//     list.classList.add('show');
//     showlist = true;
//     } else {
//       const list = document.querySelector('.list-group');
//     list.classList.remove('show');
//     showlist = false;
//     }
// })

hamburger.addEventListener('click', () => {
  
  // js
  list.classList.toggle('show');
  // jQuery
  // $('.list-group').toggleClass('show');

})

const liTags = document.querySelectorAll('.list-group-item');
for(let i = 0; i<liTags.length; i++) {
  liTags[i].addEventListener('click', () => {
    alert('ㅋㅋㅋㅋ');
  });
}

  // jQuery
  // $('.list-group-item').on('click', () => {
  //   alert('ㅋㅋㅋㅋ');
  // })