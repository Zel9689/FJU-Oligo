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
//Ajax 載入指定頁面url(可以加上GET query) 取代目前頁面指定元素 新增/移除指定scripts 改變標題名稱 doPush:加一個historyState
function ajaxLoad(replacedNode, url, appendList, removeList, doPush = true) {
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
            window.urlHold = url; //留下pushState之前的url
            if (doPush) {
                history.pushState({ page: url }, "dontcare", url);
            }
            changeTitle();
        })
}
//如果開始播放就把播放鍵隱藏
function handleFirstPlay(event) {
    let vid = event.target;
    vid.onplay = null;
    // Start whatever you need to do after playback has started
    // vid.playbackRate = 5;
    document.querySelector('.play-btn').classList.add('played');
}
//動態加載&移除scripts; 傳入值為array
function dynamicLoadScripts(appendList, removeList) {
    return new Promise((resolve, reject) => {
        
        // console.log(appendList, removeList);
        const head = document.querySelector('head');
        for (let scriptName of removeList) {
            for (let element of head.querySelectorAll('script')) {
                if (element.src.includes(scriptName)) {
                    // console.log(element);
                    head.removeChild(element);
                }
            }
        }
        for (let scriptPath of appendList) {
            var script = document.createElement('script');
            script.src = scriptPath;
            head.appendChild(script);
        }
        resolve();
    });
}

//下面的部份寫很死，爛，檔名、網址一定要.php，耦合到爆

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
//history.replaceState on non-ajax page loaded
(() => {
    // console.log('replaceState');
    var url = './';
    for (let value of document.URL.split('/')) {
        if (value.includes('.php')) {
            url += value;
        }
    }
    if (url == './') {
        url = './index.php';
    }
    window.urlHold = url; //留下replaceState之前的url
    history.replaceState({ page: url }, "dontcare", url)
})();
//onpopstate
window.onpopstate = function (e) {
    // console.log('onpopstate');
    var nextUrl = e.state.page;
    var currentUrl = (() => {
        for (let value of window.urlHold.split('/')) {
            if (value.includes('.php')) {
                return value.split('.')[0];
            }
        }
        return 'index'
    })();
    ajaxLoad('.window-wrap', nextUrl, ['./scripts/' + nextUrl.split('?')[0].replace('php', 'js?a20210219')], [currentUrl + '.js'], false);
}