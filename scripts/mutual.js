function loadXMLDoc(replacedDom, targetUrl, removeList, appendList) {
    var xmlhttp = new XMLHttpRequest();
    var dom = document.querySelector(replacedDom);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                dom.innerHTML = '';
                dom.innerHTML = xmlhttp.responseText;
                var state = {foo: 'bar'};
                history.pushState(state, '', 'google.html');
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

// Generate DOM of Result Page.
function renderResultPage() {
    console.log('renderResultPage');
    const s = document.querySelector('select');
    const window_wrap = document.createElement('div');
    const result_img = document.createElement('img');
    const shareBtn = document.createElement('button');
    const go_to_file_Btn = document.createElement('button');
    window_wrap.setAttribute('class', 'window-wrap');
    switch (s.value) {
        case '愛情':
            var img = './data/結果頁/結果頁 愛情.jpg';
            break;
        case '親情':
            var img = './data/結果頁/結果頁 親情.jpg';
            break;
        case '工作':
            var img = './data/結果頁/結果頁 工作.jpg';
            break;
        case '友情':
            var img = './data/結果頁/結果頁 友情.jpg';
            break;
        case '學業':
            var img = './data/結果頁/結果頁 學業.jpg';
            break;
        case '生活':
            var img = './data/結果頁/結果頁 生活.jpg';
            break;
        case '其他':
            var img = './data/結果頁/結果頁 其他.jpg';
            break;

        default:
            break;
    }
    result_img.src = img;
    result_img.setAttribute('class', 'result-img');
    shareBtn.setAttribute('class', 'share-btn');
    go_to_file_Btn.setAttribute('class', 'go-to-file-btn');

    document.querySelector('.window-wrap').remove();

    document.querySelector('body').appendChild(window_wrap);
    window_wrap.appendChild(result_img);
    window_wrap.appendChild(shareBtn);
    window_wrap.appendChild(go_to_file_Btn);

    const x = '    <div class="share-window"> \
    <div class="title-close"> \
      <p>分享你的案件</p> \
      <a class="close"></a> \
    </div> \
    <div class="sites-btn"> \
      <a class="facebook" href="https://www.facebook.com/sharer.php?u=http://www.google.com/&quote=尬林拿" target="_blank"><img src="./data/fb.svg">Facebook</a> \
      <a class="twitter"><img src="./data/twitter.svg">Twitter</a> \
      <a class="Instgram"><img src="./data/ig.svg">Instgram</a> \
      <a class="Line" href="https://social-plugins.line.me/lineit/share?url=http://www.google.com" target="_blank"><img src="./data/line.svg">Line</a> \
      <div class="link"> \
        <p>https://abc.example.com</p> \
        <a class="copy-link">複製！</a> \
      </div> \
    </div> \
  </div>';
  window_wrap.insertAdjacentHTML('beforeend', x);
  resultPageScript();
}

// Generate DOM of important Page.
function renderImportantPage() {
    console.log('renderImportantPage');
    const window_wrap = document.createElement('div');
    const important_img = document.createElement('img');
    window_wrap.setAttribute('class', 'window-wrap');

    result_img.src = './data/重大情報-01_srgb.jpg';
    result_img.setAttribute('class', 'important-img');
    shareBtn.setAttribute('class', 'share-btn');

    document.querySelector('.window-wrap').remove();

    document.querySelector('body').appendChild(window_wrap);
    window_wrap.appendChild(important_img);
}

// Generate DOM of files Page.
function renderFilesPage() {
    console.log('renderFilesPage');
    const window_wrap = document.createElement('div');
    window_wrap.setAttribute('class', 'window-wrap');
    document.querySelector('.window-wrap').remove();
    document.querySelector('body').appendChild(window_wrap);
    const x = '<img class="files-img" src="./data/檔案區.jpg" alt="">\
    <button class="love"><p>50%</p></button>\
    <button class="friend"><p>30%</p></button>\
    <button class="family"><p>30%</p></button>\
    <button class="studies"><p>30%</p></button>\
    <button class="work"><p>30%</p></button>\
    <button class="life"><p>30%</p></button>\
    <button class="others"><p>30%</p></button>\
    <button class="no-entry"></button>';
    window_wrap.insertAdjacentHTML('beforeend', x);
    filesPageScript();
}


function resultPageScript(){
    const shareBtn = document.querySelector('.share-btn');
    const shareWindow = document.querySelector('.share-window');
    const closeBtn = document.querySelector('.title-close .close');
    const goToFileBtn = document.querySelector('.go-to-file-btn');
    shareBtn.addEventListener('click', () => {
        shareWindow.classList.add('is-open');
    });
    closeBtn.addEventListener('click', () => {
        shareWindow.classList.remove('is-open');
    });
    goToFileBtn.addEventListener('click', renderFilesPage);
}

function filesPageScript(){
    console.log('filesPageScript');
    // todo: fetch() percentage of each category,
    // and create <p> node inside category div,
    // change <p> innerHTML with fetched json.
}