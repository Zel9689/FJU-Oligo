; ((window, undefined) => {
    const love_p = document.querySelector('.love p');
    const friend_p = document.querySelector('.friend p');
    const family_p = document.querySelector('.family p');
    const studies_p = document.querySelector('.studies p');
    const work_p = document.querySelector('.work p');
    const life_p = document.querySelector('.life p');
    const others_p = document.querySelector('.others p');

    const loveBtn = document.querySelector('.love');
    const friendBtn = document.querySelector('.friend');
    const familyBtn = document.querySelector('.family');
    const studiesBtn = document.querySelector('.studies');
    const workBtn = document.querySelector('.work');
    const lifeBtn = document.querySelector('.life');
    const othersBtn = document.querySelector('.others');
    const noEntryBtn = document.querySelector('.no-entry');

    noEntryBtn.addEventListener('click', () => {
      ajaxLoad('.window-wrap', './information.php', ['./scripts/result.js'], []);
    })

    fetch('./db/get_category_percent.php')
      .then(response => response.json())
      .then(json => placePercent(json));
    
    function placePercent(json) {
      love_p.textContent = Math.floor(json.love / json.all * 10000)/100 + '%';
      friend_p.textContent = Math.floor(json.friend / json.all * 10000)/100 + '%';
      family_p.textContent = Math.floor(json.family / json.all * 10000)/100 + '%';
      studies_p.textContent = Math.floor(json.studies / json.all * 10000)/100 + '%';
      work_p.textContent = Math.floor(json.work / json.all * 10000)/100 + '%';
      life_p.textContent = Math.floor(json.life / json.all * 10000)/100 + '%';
      others_p.textContent = Math.floor(json.others / json.all * 10000)/100 + '%';
    }
})(window);