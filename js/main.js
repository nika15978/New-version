
const boxes = document.querySelectorAll('.box');
const video2 = document.querySelector("#video2")
const video = document.querySelector("#video")
const humburger = document.querySelector('.hamburger')
const beforeclick = document.querySelector('.bfclick');
const close = document.querySelector('.close');
const scrollUpBtn = document.querySelector('.scrollUp');
const header = document.querySelector('header');
const sidebar = document.querySelector('.fixed')
let startingPosition = 0;
let width = window.innerWidth;

window.addEventListener('scroll', (e) => {

    checkBoxes();




    const currentPosition = window.scrollY;
    const isScrollUp = startingPosition < currentPosition;
    startingPosition = currentPosition;
    if (currentPosition > 100) {
        scrollUpBtn.style.opacity = '1';
        scrollUpBtn.disabled = false;
    } else {
        scrollUpBtn.style.opacity = '0';
        scrollUpBtn.disabled = true;
    }
    if (isScrollUp) {

        header.style.top = '-60px';

        sidebar.style.top = '0px'






    } else if (currentPosition === 0) {
        header.style.top = '0px';

    }
    else {

        header.style.top = 0;
        sidebar.style.top = '60px'


    }
});
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach((box, idx) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');

        }

    });
}



beforeclick.addEventListener('click', (e) => {
    humburger.classList.add('movetoleft');
    humburger.classList.remove('movetoright');

})
close.addEventListener('click', (e) => {
    humburger.classList.remove('movetoleft');
    humburger.classList.add('movetoright');
})
function updatewidth() {
    width = window.innerWidth;

}
window.addEventListener("resize", (e) => {
    updatewidth();
})
