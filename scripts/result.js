; ((window, undefined) => {
    const shareBtn = document.querySelector('.share-btn');
    const shareWindow = document.querySelector('.share-window');
    const closeBtn = document.querySelector('.title-close .close');
    const goToFileBtn = document.querySelector('.go-to-file-btn');
    const copyBtn = document.querySelector('.copy-link');
    shareBtn.addEventListener('click', () => {
        shareWindow.classList.add('is-open');
    });
    closeBtn.addEventListener('click', () => {
        shareWindow.classList.remove('is-open');
    });
    goToFileBtn.addEventListener('click', () => {
        ajaxLoad('.window-wrap', './files.php', ['./scripts/files.js'], ['result.js']);
    });
    function CopyTextToClipboard(cssSelector) {
        var TextRange = document.createRange();
        TextRange.selectNode(document.querySelector(cssSelector));
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(TextRange);
        document.execCommand("copy");
    }
    copyBtn.addEventListener('click', () => CopyTextToClipboard('.link p'))
})(window);