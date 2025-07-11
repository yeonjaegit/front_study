const btns = $('.tap-button');
const contents = $('.tap-content');

btns.on('click', (e) => {
  btns.removeClass('selected');
  contents.removeClass('show');

  let no = e.target.dataset.no;

  btns.eq(no-1).addClass('selected');
  contents.eq(no-1).addClass('show');
});