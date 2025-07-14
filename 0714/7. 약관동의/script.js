const box = document.querySelector('.box');

let boxY = box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight)

let isDisabled = true;

box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  
  if( isDisabled && boxHeight + scroll > boxY -  5 ) {
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }

})

const chk = document.querySelector('#chk');
const nextBtn = document.querySelector('.nextBtn');

nextBtn.addEventListener('click', () => {
 if(chk.checked == true){
  alert('다음 페이지로 이동합니다.')
 } else {
  alert('동의하십쇼')
 }
  
})