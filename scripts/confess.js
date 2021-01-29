; ((window, undefined) => {
  console.log('confess_form wrapper()');

  const pushVid = document.querySelector('video');
  const playBtn = document.querySelector('.play-btn');
  const commitBtn = document.querySelector('.commit');
  const confessFormPage = document.querySelector('.confess-form');
  const form = document.querySelector('.confess-form form');
  const select = document.querySelector('.confess-form select');
  const textarea = document.querySelector('.confess-form textarea')
  playBtn.style = "display: none;";
  playBtn.addEventListener('click', () => {
    pushVid.play();
  });

  form.onsubmit = () => {
    console.log('form.onsbumit');
    // 來發個 POST Request:
    var data = { category: select.value, content: textarea.value };
    console.log('data=', data);
    postData('./db/submit.php', data)
      .then(showVidAfterConfessForm) // JSON from `response.text()` call
      .catch(error => console.error(error))

    return false; //Disable form redirect
  }
  // Todo: callAjax, if backend validation is fine, then proceed below
  function showVidAfterConfessForm() {
    confessFormPage.style = 'opacity: 0; transition: 1s;';
    playBtn.style = "display: block;";
    pushVid.play();
  }

  //proceed btn 要實作上滑效果
  document.querySelector('.temp').addEventListener('click', () => {
    console.log(select.value);
    ajaxLoad('.window-wrap', './result.php?category=' + select.value, ['./scripts/result.js'], ['confess.js']);
  });

  

})(window);
