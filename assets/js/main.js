//============= SLIDER SHOW =============//
var sliderIndex = 1;
showDivs(sliderIndex);

function currentDiv(n) {
    showDivs(sliderIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('slider-list__item');
    var dots = document.getElementsByClassName('slider__button');
    if (n > x.length) {
        sliderIndex = 1
    }
    if (n < 1) {
        sliderIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' slider-button--white', '');
    }

    x[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].className += ' slider-button--white';

}

//============= SHOW SIDEBAR =============//

//Show menu
const menuToggle = document.querySelector('.img__menu');
const sidebarOverlay = document.querySelector('.sidebar__overlay');
const sidebarWrap = document.querySelector('.sidebar__wrap');

menuToggle.onclick = function() {
    sidebarOverlay.style.display = 'block';
    sidebarWrap.classList.add('show-sidebar');
}

const closeBtn = document.querySelectorAll('.sidebar__close-btn');

function closeSidebar() {
    sidebarOverlay.style.display = 'none';
    sidebarWrap.classList.remove('show-sidebar');
}

closeBtn.forEach(n => n.addEventListener('click', closeSidebar));