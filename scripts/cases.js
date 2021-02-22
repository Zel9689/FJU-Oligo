; ((window, undefined) => {
    //案件HTML版型
    const caseHTML = '\
<button class="case-bar"><img src="./data/圖層/案件列表條.png" alt=""><p class="font-song"></p></button>\
<div class="case-content"><div class="plus-minus"><div class="minus"></div><div class="plus"></div></div>\
<div class="content-box"><img class="oligo" src="./data/圖層/案件中奧利多.png" alt="">\
<div class="right"><p class="font-song"></p><img class="all-let-go" src="./data/圖層/all_let_go.png" alt="">\
</div></div></div>\
';
    //載入更多案件
    function loadCases() {
        return new Promise((resolve, reject) => {

            console.log('LoadCases triggered');
            var quantity = document.querySelectorAll('.case-bar').length;
            fetch('./db/get_cases_by_category.php' + '?category=' + window.categorySelected + '&quantity=' + quantity)
                .then(response => response.json())
                .then(json => {
                    insertCaseHTML(json.length);
                    if(json.length == 0){
                        hasMoreCases = false
                    }
                    var case_bars_p = document.querySelectorAll('.case-bar p');
                    var case_contents_p = document.querySelectorAll('.case-content p');
                    for (let i = 0; i < json.length; i++) {
                        case_bars_p[quantity + i].textContent =
                            case_contents_p[quantity + i].textContent =
                            json[i];
                    }
                })
                .then(() => updateClickEvent(quantity))
                .then(() => displayNoDataAlert(hasMoreCases))
                .then(() => resolve());

        });
    }
    //滾輪事件觸發載入更多案件
    const case_list = document.querySelector('.case-list');
    var triggerMore = true; //在請求時進入CD，不能再請求
    var hasMoreCases = true; //如果回傳的json長度為0代表已經沒有更多案件了
    case_list.addEventListener('scroll', (e) => {
        // console.log(e.target.scrollTop, (e.target.scrollHeight - e.target.clientHeight));
        // console.log('triggerMore='+triggerMore,'hasMoreCases='+hasMoreCases);
        if (triggerMore && hasMoreCases) {
            setTimeout(() => {
                if (e.target.scrollTop * 2 > (e.target.scrollHeight - e.target.clientHeight)) {
                    triggerMore = false;
                    loadCases().then(() => triggerMore = true);
                }
            })         
        }
    });
    //插入案件HTML版型到尾端
    function insertCaseHTML(num) {
        for (let i = 0; i < num; i++) {
            case_list.insertAdjacentHTML('beforeend', caseHTML);
        }
    }
    //案件按鈕的點擊事件更新迴圈
    function updateClickEvent(pointer) {
        var case_bars = document.querySelectorAll('.case-bar');
        var case_contents = document.querySelectorAll('.case-content');
        for (let i = pointer; i < case_bars.length; i++) {
            case_bars[i].addEventListener('click', () => {
                removeIsOpen(i);
                case_contents[i].classList.toggle('is-open');
            })
        }
    }
    //移除所有class="is-open"，除了index == i
    function removeIsOpen(exceptIndex) {
        var case_contents = document.querySelectorAll('.case-content');
        for (let i = 0; i < case_contents.length; i++) {
            if (i != exceptIndex) {
                case_contents[i].classList.remove('is-open');
            }
        }
    }
    //如果有資料則移除"目前沒資料"的提示元素
    function displayNoDataAlert(hasMoreCases){
        if(!hasMoreCases){
            document.querySelector('.no-data-alert').classList.remove('hide');
        }
    }

    //click return button to call history.back()
    document.querySelector('.case-return').addEventListener('click', () => history.back());

    loadCases();
    // window.test = { loadCases: loadCases };
})(window)