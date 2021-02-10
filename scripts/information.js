; ((window, undefined) => {
    //click return button to call history.back()
    document.querySelector('.info-return').addEventListener('click', () => history.back());
})(window);