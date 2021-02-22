; ((window, undefined) => {
  const love_p = document.querySelector('.love p');
  const friend_p = document.querySelector('.friend p');
  const family_p = document.querySelector('.family p');
  const studies_p = document.querySelector('.studies p');
  const work_p = document.querySelector('.work p');
  const life_p = document.querySelector('.life p');
  const others_p = document.querySelector('.others p');
  
  document.querySelector('.files-return').addEventListener('click', () => {
    ajaxLoad('.window-wrap', './confess.php', ['./scripts/confess.js'], ['files.js']);
  });

  fetch('./db/get_category_percent.php')
    .then(response => response.json())
    .then(json => placePercent(json));

  function placePercent(json) {
    if(json.love == 0) {
      love_p.textContent = '0%';  
    }else{
      love_p.textContent = Math.floor(json.love / json.all * 10000) / 100 + '%';
    }
    if(json.friend == 0) {
      friend_p.textContent = '0%';  
    }else{
      friend_p.textContent = Math.floor(json.friend / json.all * 10000) / 100 + '%';
    }
    if(json.family == 0) {
      family_p.textContent = '0%';  
    }else{
      family_p.textContent = Math.floor(json.family / json.all * 10000) / 100 + '%';
    }
    if(json.studies == 0) {
      studies_p.textContent = '0%';  
    }else{
      studies_p.textContent = Math.floor(json.studies / json.all * 10000) / 100 + '%';
    }
    if(json.work == 0) {
      work_p.textContent = '0%';  
    }else{
      work_p.textContent = Math.floor(json.work / json.all * 10000) / 100 + '%';
    }
    if(json.life == 0) {
      life_p.textContent = '0%';  
    }else{
      life_p.textContent = Math.floor(json.life / json.all * 10000) / 100 + '%';
    }
    if(json.others == 0) {
      others_p.textContent = '0%';  
    }else{
      others_p.textContent = Math.floor(json.others / json.all * 10000) / 100 + '%';
    }
  }

  const noEntryBtn = document.querySelector('.no-entry');
  noEntryBtn.addEventListener('click', () => {
    ajaxLoad('.window-wrap', './information.php', ['./scripts/information.js'], ['files.js']);
  })
  
  var buttons = ['love', 'friend', 'family', 'studies', 'work', 'life', 'others'];
  for (let value of buttons) {
    document.querySelector('.' + value).addEventListener('click', () => {
      ajaxLoad('.window-wrap', './cases.php', ['./scripts/cases.js'], ['files.js']);
      window.categorySelected = value;
    })
  }

})(window);