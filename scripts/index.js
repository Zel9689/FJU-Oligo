; ((window, undefined) => {
  const openingVid = document.querySelector('video');
  const playBtn = document.querySelector('.play-btn');
  const foreword = document.querySelector('.foreword');
  const confessBtn = document.querySelector('.confess-btn');
  const foreword_p = document.querySelector('.foreword p');
  //  影片載入完後隱藏載入動畫
  // vidLoadingDomHandler(openingVid).then(() => {
  //   setTimeout(()=>{
  //     openingVid.play();console.log('start vid');
  //   });
  // });

  playBtn.addEventListener('click', function () {
    openingVid.play();
  });
  setTimeout(()=>{
    document.querySelector('.loading-wrapper').classList.add('loaded');
    openingVid.play();
  }, 1500);
  //影片結束淡出 -> 打字機
  openingVid.addEventListener('ended', () => {
    let fadeoutSec = 3; //hard-coded
    openingVid.classList.add('fade-out');
    let index = 0;
    let i = 0;
    setTimeout(writing.bind(this, index, i), fadeoutSec*1000 - 1000);
  });
  var index = 5;
  //打字機效果
  function writing(index, i) {

    const data = ['在被時間追著跑的日子裡，在緊湊繁忙的生活中，難免有著大大小小的內疚心事。',
      '',
      '你也正在找尋一個可以排解這些罪惡感、減輕內疚與負擔的出口嗎？',
      '',
      '歡迎來到疚事排出所。',
      '',
      '在這裡你可以勇敢自首，排出罪惡感，減輕負擔，身心舒暢！'];
    if (index < data[i].length) {
      foreword_p.innerHTML += data[i][index];
      ++index;
    } else {
      foreword_p.innerHTML += '<br>';
      index = 0;
      i++;
    }
    if (i < data.length) {
      setTimeout(writing.bind(this, index, i), 100);
    } else {
      setTimeout(() => {
        // console.log('inside');
        foreword_p.classList.add('fade-out');
        confessBtn.classList.add('fade-in');
      }, 1500)
    }
  }

  //跳到下一個part
  confessBtn.addEventListener('click', () => {
    var removeList = ['index.js'];
    var appendList = ['./scripts/confess.js?x2a54'];
    ajaxLoad('.window-wrap', './confess.php', appendList, removeList);
    });

})(window);

