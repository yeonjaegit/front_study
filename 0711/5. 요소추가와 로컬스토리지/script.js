// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임
const FRUITS = [
  { name : 'apple', memo : '빨갛고 맛있는 사과'},
  { name : 'mango', memo : '달달하고 맛있음'},
  { name : 'melon', memo : '그냥 맛있다'}
];

for(let i = 0; i<FRUITS.length; i++) {
  let card = `
        <div class="col">
          <div class="card" style="width: 18rem;">
          <img src="./요소추가용 images/${FRUITS[i].name}.jpg" class="card-img-top">
              <div class="card-body">
              <h5 class="card-title">${FRUITS[i].name}.</h5>
              <p class="card-text">${FRUITS[i].memo}</p>
              <button class="btn btn-primary cart">담기</button>
            </div>
          </div>
        </div>
  `;
document.querySelector('.row').insertAdjacentHTML('beforeend', card);
}

const cart = document.querySelectorAll('.cart');

for(let i = 0; i<cart.length; i++) {
  cart[i].addEventListener('click', (e) => {
    let nameTag = e.target.previousElementSibling.previousElementSibling;
    let name = nameTag.innerHTML;

    let temp = localStorage.getItem('cart');

    if(temp != null) {
      // 로컬스토리지에 있으면 먼저 그 정보들을 꺼내와야함
      // 문자열 형태이므로 원본인 배열로 되돌려줌
      temp = JSON.parse(temp);

      // 새로 장바구니에 담을 name을 추가 
      temp.push(name);
      // 추가된 정보를 로컬스토리지에 다시 넣음
      localStorage.setItem('cart', JSON.stringify(temp));

    } else {
      localStorage.setItem('cart', JSON.stringify([name]));
    }



  });
};



FRUITS.forEach((data, index) => {

  console.log(data.name, index);


})

// 로컬스토리지에 저장 or 수정 ( 동일한 키를 넣으면 기존 데이터를 지움 )
localStorage.setItem( '키', '값');
// 로컬스토리지에서 해당 키에 대한 값을 리턴해줌
localStorage.getItem( '키' );
// 로컬스토리지에서 해당 키를 삭제
localStorage.removeItem( '키' );

let arr = [1,2,3,4,5];
let obj = {
  name : 'kim',
  age : 20
};

// 로컬스토리지는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됌
localStorage.setItem( 'arr', arr );
localStorage.setItem( 'obj', obj );

// JSON형식으로 변환 "[1,2,3,4]"
// arr인 배열을 문자열(JSON)로 변환
let arr_json = JSON.stringify(arr);

localStorage.setItem( 'arr', arr_json);

arr = localStorage.getItem('arr');

// 로컬스토리지에서 꺼내와도 아직까진 문자열임 (구조가 살아있는 상태)
console.log(arr, typeof arr);

// 문자열인 형태를 다시 배열로 되돌려줌
arr = JSON.parse(arr);

console.log(arr, typeof arr);


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// beforebegin : 해당 요소 앞에 html을 넣어줌
// afgerbegin : 해당 요소 첫 번째 자식으로 추가
// beforeend : 해당 요소 마지막 자식으로 추가
// afterend : 해당 요소 뒤에 넣어줌


// document.querySelector('.row').innerHTML = card;
// document.querySelector('.row').innerHTML =
//             document.querySelector('.row').innerHTML = card;

// 이렇게 하니까 글자로 들어가버림
// document.querySelector('row').append(card);

