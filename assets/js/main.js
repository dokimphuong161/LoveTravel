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

//============= COUNTDOWN TIMER =============//
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

if (days && hours && minutes && seconds) {
    function updateCountdownTime() {
        const currentTime = new Date();
        const diff = newYearTime - currentTime;

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        days.innerHTML = d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;

    }

}

setInterval(updateCountdownTime, 1000);

//============= RATING STAR =============//
const container = document.querySelector('.product__ratings');
const stars = document.querySelectorAll('.product__rating-icon');

if (container && stars) {
    container.onclick = e => {
        const eClass = e.target.classList;
        console.log(eClass);
        if (!eClass.contains('active')) {
            stars.forEach(star => star.classList.remove('active'));
        }

        console.log(e.target.getAttribute('data-rate'));
        eClass.add('active');
    }
}

//============= SLIDER RANGE =============//
const inputSlider = document.getElementById('my-range');
const priceValue = document.getElementById('price-value');


if (inputSlider && priceValue) {
    priceValue.innerHTML = inputSlider.value + ' $';
    inputSlider.oninput = function() {
        priceValue.innerHTML = this.value + ' $';
    }

    inputSlider.addEventListener('mousemove', function() {
        const dataDivide = inputSlider.getAttribute('data-divide');
        var sliderValue = inputSlider.value / dataDivide;
        var color = `linear-gradient(90deg, rgb(20, 185, 213) ${sliderValue}%, rgb(228, 228, 228) ${sliderValue}%)`;
        console.log(color);
        inputSlider.style.background = color;
    })

}

//============= SCROLL TO TOP =============//
const scrollTop = document.getElementById('scroll-top');
if (scrollTop) {
    function scrollTop() {
        const scrollTop = document.getElementById('scroll-top');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 560) scrollTop.classList.add('show-top');
        else scrollTop.classList.remove('show-top')
    }
    window.addEventListener('scroll', scrollTop);
}