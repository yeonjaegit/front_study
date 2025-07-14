const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.pre');
const nextBtn = document.querySelector('.next');

// 현재 보고있는 캐러셀의 이미지 번호
let slideNo = 1;

btn2.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-100vw)'
  slideNo = 2;
})

btn3.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-200vw)'
  slideNo = 3;
})

btn1.addEventListener('click', () => {
  carousel.style.transform = 'translateX(0vw)'
  slideNo = 1;
})

prevBtn.addEventListener('click', () => {

  if(slideNo === 1){
    return;
  }

  carousel.style.transform = `translateX(-${slideNo-2}00vw)`;
  slideNo --;

});

nextBtn.addEventListener('click', () => {

  if(slideNo >= 3){
    return;
  }

  carousel.style.transform = `translateX(-${slideNo}00vw)`
  slideNo ++;

  // 1번 이미지를 보고있으면 2번이미지로 이동
  // -100vw만큼 이동

  // 2번 이미지를 보고있으면
  // 3번 이미지로 이동 -200vw
})