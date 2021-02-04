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
    function loadCases(){
        var quantity = document.querySelectorAll('.case-bar').length;
        fetch('./db/get_cases_by_category.php'+'?category='+window.categorySelected+'&quantity='+quantity)
            .then(response => response.json())
            .catch(e => console.log(e))
            .then(json => {
                insertCaseHTML(json.length);
                var case_bars_p = document.querySelectorAll('.case-bar p');
                var case_contents_p = document.querySelectorAll('.case-content p');
                for(let i=0; i<json.length; i++){
                    case_bars_p[quantity+i].textContent = 
                    case_contents_p[quantity+i].textContent = 
                    json[i];
                }
            })
            .catch(e => console.log(e))
            .then(updateClickEvent);
    }
    //插入案件HTML版型到尾端
    function insertCaseHTML(num) {
        var case_list = document.querySelector('.case-list');
        for (let i = 0; i < num; i++) {
            case_list.insertAdjacentHTML('beforeend', caseHTML);
        }
    }
    //更新案件按鈕的點擊事件
    function updateClickEvent(){
        var case_bars = document.querySelectorAll('.case-bar');
        var case_contents = document.querySelectorAll('.case-content');
        var lastOpened;
        for (let i = 0; i < case_bars.length; i++) {
            case_bars[i].addEventListener('click', () => {
                case_contents[i].classList.toggle('is-open');
                if (lastOpened != undefined && lastOpened != i) {
                    case_contents[lastOpened].classList.remove('is-open');
                }
                lastOpened = i;
            })
        }
    }

    loadCases();
    window.test = {loadCases: loadCases};
})(window)