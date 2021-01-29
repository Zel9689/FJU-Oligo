; ((window, undefined) => {
    const love_p = document.querySelector('.love p');
    const friend_p = document.querySelector('.friend p');
    const family_p = document.querySelector('.family p');
    const studies_p = document.querySelector('.studies p');
    const work_p = document.querySelector('.work p');
    const life_p = document.querySelector('.life p');
    const others_p = document.querySelector('.others p');

    fetch('./db/get_category_percent.php')
      .then(response => response.json())
      .then(json => placePercent(json));
    
    function placePercent(json) {
      love_p.innerHTML = Math.floor(json.love / json.all * 10000)/100 + '%';
      friend_p.innerHTML = Math.floor(json.friend / json.all * 10000)/100 + '%';
      family_p.innerHTML = Math.floor(json.family / json.all * 10000)/100 + '%';
      studies_p.innerHTML = Math.floor(json.studies / json.all * 10000)/100 + '%';
      work_p.innerHTML = Math.floor(json.work / json.all * 10000)/100 + '%';
      life_p.innerHTML = Math.floor(json.life / json.all * 10000)/100 + '%';
      others_p.innerHTML = Math.floor(json.others / json.all * 10000)/100 + '%';
    }
})(window);