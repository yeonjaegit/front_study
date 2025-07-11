const btnBoard = document.querySelector('#open');

btnBoard.addEventListener('click', () => {

  document.querySelector('.black-bg').classList.add('show');

})

const closeBtn = document.querySelector('#close');

closeBtn.addEventListener('click', () => {
  document.querySelector('.black-bg').classList.remove('show');
})


// jQuery
// $('#open').on('click', () => {
//   $('black-bg').addClass('show');
// })
// on = addEventListner