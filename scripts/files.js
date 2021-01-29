; ((window, undefined) => {
    const love_p = document.querySelector('.love p');
    const friend_p = document.querySelector('.friend p');
    const family_p = document.querySelector('.family p');
    const studies_p = document.querySelector('.studies p');
    const work_p = document.querySelector('.work p');
    const life_p = document.querySelector('.life p');
    const others_p = document.querySelector('.others p');

    postData('./get_category_percent.php',)

    function getData(url, data) {
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