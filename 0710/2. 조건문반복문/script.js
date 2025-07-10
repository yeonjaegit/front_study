// 조건문

// if문
let age = 20;
if(age >= 20) {
  console.log("성인")
} else if(age >= 12) {
  console.log("청소년")
} else {
  console.log("어린이")
}

// 삼항연산자
// 조건식 ? 참 : 거짓
let result = age >= 20 ? "성인" : "청소년";
console.log(result);

// switch문
let a = 3;

switch(a) {
  case 1:
    console.log("a는 1이다");
    break;
  case 2:
    console.log("a는 2이다");
    break;
  default:
    console.log("a는 1,2가 아니다");
}

// 반복문
// for문
// for(초기값; 조건식; 증감식) {
//   반복할코드
// }

// 1~10까지 합
let sum = 0; // 초기값설정 안하면 undefined
for(let i = 1; i<=10; i++) {
  sum = sum + i;
}
console.log(sum);

let num = 0;
let sum2 = 0;
for(let i = 0; i<10; i++) {
  num = num + (i+1);
  console.log(num);
  sum2 = sum2 + num;
}
console.log(sum2);

// while문
// while(조건식) {
//   반복할코드
// }

// 반복 종료 - break;
// 반복문 상단으로 돌아감 - continue