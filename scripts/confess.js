; ((window, undefined) => {
  // console.log('confess_form wrapper()');
  const pushVid = document.querySelector('video');
  const playBtn = document.querySelector('.play-btn');
  const commitBtn = document.querySelector('.commit');
  const confessFormPage = document.querySelector('.confess-form');
  const form = document.querySelector('.confess-form form');
  const select = document.querySelector('.confess-form select');
  const textarea = document.querySelector('.confess-form textarea');
  const nextPageBtn = document.querySelector('.next-page');

  playBtn.classList.add('played');
  playBtn.addEventListener('click', () => {
    pushVid.play();
  });
  setTimeout(() => {
    document.querySelector('.loading-wrapper').classList.add('loaded');
  }, 900);
  form.onsubmit = () => {
    // 來發個 POST Request:
    var data = { category: select.value, content: textarea.value };
    // console.log('data=', data);
    postData('./db/submit.php', data)
      .then(showVidAfterConfessForm) // JSON from `response.text()` call
      .catch(error => console.error(error))
    return false; //Disable form redirect
  }
  function showVidAfterConfessForm() {
    confessFormPage.classList.add('fadeout');
    playBtn.classList.remove('played');
    pushVid.play();
  }

  confessFormPage.addEventListener('transitionend', () => {
    console.log('Transition ended');
    confessFormPage.classList.add('display-none');
  });


  const swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
  });
  swiper.on('slideChangeTransitionEnd', function () {
    console.log('slideChangeTransitionEnd');
    ajaxLoad('.window-wrap', './result.php?category=' + select.value, ['./scripts/result.js'], ['confess.js']);
  });

  nextPageBtn.addEventListener('click', () => swiper.slideNext());

})(window);
