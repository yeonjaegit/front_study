function showHide(state) {
  // JS 문법
  // document.getElementById('ab').style.display = state;

  // jQuery 문법
  $('#ab').css('display', state);
}

function showText(text) {
   // JS 문법
  // document.querySelector('.alert').innerHTML = text;

  // jQuery 문법
  $('.alert').html(text);
}