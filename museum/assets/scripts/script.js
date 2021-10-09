// document.getElementById('line').style
// console.log(getComputedStyle(document.getElementById('ticket')).left)

const progress = document.querySelector('.progress1');
progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})