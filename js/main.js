
'use strict'
$(document).ready(function () {

    /*ibg*/

    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '")');
            }
        });
    }

    ibg();

    /*попап*/

    function openPopup(id) {
        $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
    }

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });

    $('.header__link').click(function (event) {
        event = $(this).closest('.header__list').find('.header__link.active');
        event.removeClass('active');
        $(this).addClass('active');
    })

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

    $('.header__burger').click(function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        // $('.header__menu.active').css('top', heightHeader);
    });

});
// /*кнопка прокрутки вверх*/

// const offset = 100;
// const scrollUp = document.querySelector('.js-scroll-up');
// // const scrollUpSvgPath = document.querySelector('.js-scroll-up__path');
// const pathLength = scrollUpSvgPath.getTotalLength();

// // scrollUpSvgPath.style.strokeDasharray = '\'' + pathLength + pathLength + '\'';
// // scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

// // getTop
// const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// //updateDashoffset

// const updateDashoffset = () => {
//     const heigth = document.documentElement.scrollHeight - window.innerHeight;
//     const dashoffset = pathLength - (getTop() * pathLength / heigth);

//     scrollUpSvgPath.style.strokeDashoffset = dashoffset;
// }

// // onScroll
// window.addEventListener('scroll', () => {
//     updateDashoffset();
//     getTop() > offset ? scrollUp.classList.add('scroll-up_active') : scrollUp.classList.remove('scroll-up_active');
// });

// // click
// scrollUp.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// /*скрол по якорю*/