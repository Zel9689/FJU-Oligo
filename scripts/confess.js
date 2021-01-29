; ((window, undefined) => {
  console.log('confess_form wrapper()');

  const pushVid = document.querySelector('video');
  const playBtn = document.querySelector('.play-btn');
  const commitBtn = document.querySelector('.commit');
  const confessFormPage = document.querySelector('.confess-form');
  const form = document.querySelector('.confess-form form');
  playBtn.style = "display: none;";
  playBtn.addEventListener('click', () => {
    pushVid.play();
  });

  form.onsubmit = () => {
    console.log('form.onsbumit');
    // 來發個 POST Request:
    const select = document.querySelector('.confess-form select');
    const textarea = document.querySelector('.confess-form textarea')
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

  //proceed btn todo: 要改成ajax
  document.querySelector('.temp').addEventListener('click', renderResultPage);

  function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'same-origin', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
      .then(response => response.text()) // 輸出成 text
  }

})(window);
