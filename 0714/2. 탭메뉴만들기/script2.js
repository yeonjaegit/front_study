const btns = $('.tap-button');
const contents = $('.tap-content');

btns.on('click', (e) => {
  btns.removeClass('selected');
  contents.removeClass('show');

  let no = e.target.dataset.no;

  btns.eq(no).addClass('selected');
  contents.eq(no).addClass('show');
});