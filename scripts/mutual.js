//todo:改成fetch()的方法
function loadXMLDoc(replacedDom, targetUrl, removeList, appendList) {
    var xmlhttp = new XMLHttpRequest();
    var dom = document.querySelector(replacedDom);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                dom.innerHTML = '';
                dom.innerHTML = xmlhttp.responseText;
                var state = {foo: 'bar'};
                history.pushState(state, '', targetUrl);
                dynamicLoadScripts(removeList, appendList);
            }
            else if (xmlhttp.status == 400) {
                console.log('There was an error 400');
            }
            else {
                console.log('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", targetUrl, true);
    xmlhttp.send();
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
function dynamicLoadScripts(removeList, appendList) {
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