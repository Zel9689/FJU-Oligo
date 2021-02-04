changeTitle();
//Post function
function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            // 'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.text()) // 輸出成 text
}
//Ajax 載入指定頁面url(可以加上GET query) 取代目前頁面指定元素 新增/移除指定scripts
function ajaxLoad(replacedNode, url, appendList, removeList) {
    var mark = document.createElement('div');
    mark.classList.add('ajax-mark');
    node = document.querySelector(replacedNode);
    node.before(mark);
    node.remove();
    mark = document.querySelector('.ajax-mark');
    if (url.includes('?')) {
        var url_withQuery = url + '&ajax=1';
    } else {
        var url_withQuery = url + '?ajax=1';
    }
    fetch(url_withQuery)
        .then(response => response.text())
        .then(text => mark.insertAdjacentHTML('afterend', text))
        .then(() => {
            mark.remove();
            dynamicLoadScripts(appendList, removeList);
        })
        .then(() => history.pushState({ page: url }, "dontcare", url))
        .then(() => changeTitle());
}
//如果開始播放就把播放鍵隱藏
function handleFirstPlay(event) {
    console.log('new hi');
    let vid = event.target;
    vid.onplay = null;
    // Start whatever you need to do after playback has started
    vid.playbackRate = 3;
    var playBtn = document.querySelector('.play-btn');
    playBtn.style = 'display: none';
}
//動態加載&移除scripts; 傳入值為array
function dynamicLoadScripts(appendList, removeList) {
    console.log(removeList, appendList);
    const head = document.querySelector('head');
    for (let scriptName of removeList) {
        for (let element of head.querySelectorAll('script')) {
            if (element.src.includes(scriptName)) {
                console.log(element);
                head.removeChild(element);
            }
        }
    }
    for (let scriptPath of appendList) {
        var script = document.createElement('script');
        script.src = scriptPath;
        head.appendChild(script);
    }
}
//change page title
function changeTitle() {
    for (let value of document.URL.split('/')) {
        if (value.includes('.php')) {
            document.title = value.split('.')[0] + ' - ' + '疚事排出所';
            break;
        }
        document.title = '疚事排出所';
    }
}
