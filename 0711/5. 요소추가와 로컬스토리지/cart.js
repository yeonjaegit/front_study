// 로컬스토리지에 있는 거 꺼내오고 배열로 변환
let cart = JSON.parse(localStorage.getItem('cart'));

const cartList = document.querySelector('.list');

cart.forEach((item) => {

  cartList.insertAdjacentHTML('beforeend', `<div>${item}</div>`)
})