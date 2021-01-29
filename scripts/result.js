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