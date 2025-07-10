// 함수 선언문
function hello() {
  console.log('hello');
}
// 함수 표현식
let hi = function() {
  console.log("hi");
}

// 콜백 함수

function yes() {
  console.log("예");
}

let no = function() {
  console.log("아니오");
}

function check(question, ok, cancel) {
  if(question === 'y') {
    ok();
  } else {
    cancel();
  }
}

check('y', yes, no);


function buy(item, price, stock, callback) {
  console.log(`${item}을 ${stock}개 구매함`)
  
  let total = price * stock;
  callback(total);

}

function pay(n) {
  console.log(`총 금액 : ${n}`)
}

function pay2(n) {
  console.log(`총 금액(할인적용) : ${n * 0.9}`);
}

buy("컴퓨터", 10000, 3, pay2)


// setInterval(콜백함수, 시간)

// 콜백함수 : 나중에 호출되는 함수

setInterval(hello, 1000);