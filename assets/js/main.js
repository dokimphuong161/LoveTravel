//============= SHOW SIDEBAR =============//
//Open sidebar
const menuToggle = document.querySelector('.img__menu');
const sidebarOverlay = document.querySelector('.sidebar__overlay');
const sidebarWrap = document.querySelector('.sidebar__wrap');
if (menuToggle && sidebarOverlay && sidebarWrap) {
    function openSidebar() {
        sidebarOverlay.style.display = 'block';
        sidebarWrap.classList.add('show-sidebar');
    }
    menuToggle.addEventListener('click', openSidebar);

    // Close sidebar
    const closeBtn = document.querySelectorAll('.sidebar__close-btn');

    function closeSidebar() {
        sidebarOverlay.style.display = 'none';
        sidebarWrap.classList.remove('show-sidebar');
    }

    closeBtn.forEach(n => n.addEventListener('click', closeSidebar));
    sidebarOverlay.addEventListener('click', closeSidebar);
}
//============= SLIDER SHOW =============//

const x = document.getElementsByClassName('slider-list__item'),
    dots = document.getElementsByClassName('slider__button');

if (x.length !== 0 && dots.length !== 0) {
    var sliderIndex = 1;
    showDivs(sliderIndex);

    function currentDiv(n) {
        showDivs(sliderIndex = n);
    }


    function showDivs(n) {
        var i;
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
}

//============= SHOW VIDEO YOUTUBE =============//
const playBtn = document.querySelector('.video__play-img');
const introduceOverlay = document.querySelector('.introduce__overlay');
const introduceYtb = document.querySelector('.introduce__ytb');

if (playBtn && introduceOverlay && introduceYtb) {
    function openVideo() {
        introduceOverlay.style.display = 'block';
        introduceYtb.style.display = 'block';
    }

    playBtn.addEventListener('click', openVideo);

    function closeVideo() {
        introduceOverlay.style.display = 'none';
        introduceYtb.style.display = 'none';
    }
    introduceOverlay.addEventListener('click', closeVideo);
}