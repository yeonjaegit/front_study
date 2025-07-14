document.querySelector('button')
        .addEventListener('click', (e) => {
  // 0 : 왼쪽, 1 : 가운데, 2 : 오른쪽 
  console.log(e.button);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);

  console.log(e.clientX, e.clientY);
  console.log(e.pageX, e.pageY);

  if(e.ctrlKey && e.shiftKey) {
  alert('컨트롤 쉬프트 클릭 클릭함')
}
});

// change : 변경되고 포커스가 나가면 작동
// input : 변경 감지되는 모든 순간 작동
// cut : 잘라내기
// copy : 복사
// paste : 붙여넣기

document.querySelector('input')
        .addEventListener('cut', () => {

  alert('잘라내기 감지됌')

        })