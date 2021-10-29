document.addEventListener('DOMContentLoaded', function (e) {
    const body = document.querySelector('body');
    const menuHeader = document.querySelector('.menu-header--mobile');
    const burger = document.querySelector('.burger');
    const headerHero = document.querySelector('.header__hero');
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        menuHeader.classList.toggle('active');
        body.classList.toggle('hidden');
        headerHero.classList.toggle('active');
    })

    const tabsWrapper = document.querySelector('.tabs');
    if (tabsWrapper) {
        tabsWrapper.addEventListener('click', function (event) {
            if (event.target.classList.contains = "tabs__caption") {
                event.target.classList.toggle('active');
                event.target.nextSibling.classList.toggle('active');
            }
        })
    }

    if (document.documentElement.clientWidth < 1439) {
        body.classList.add('touch');
        body.classList.remove('mouse');
    } else {
        body.classList.add('mouse');
        body.classList.remove('touch');
    }

    const menuBtns = document.querySelectorAll('.menu-show');
    menuBtns.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('current');
            item.nextSibling.classList.toggle('current');
        });
    })

    const btnsModal = document.querySelectorAll('.show-modal');
    const modal = document.querySelector('.modal');
    const modalCross = document.querySelector('.modal__cross');
    btnsModal.forEach(item => {
        item.addEventListener('click', function () {
            modal.classList.add('active');
            body.classList.add('hidden');
        });
    })
    modalCross.addEventListener('click', function () {
        modal.classList.remove('active');
        body.classList.remove('hidden');
    });

    const inputs = document.querySelectorAll('.brif__input');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.brif__button-text').innerText;

        input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.brif__button-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.brif__button-text').innerText = labelVal;
        });
    });


})

//- slick slider
$(document).ready(function () {
    $('.partners__slider').slick({
        slidesToShow: 6,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
                breakpoint: 1439,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
            }
        ]
    })

    $('.examples-slider').slick({
        arrows: false,
        slidesToShow: 3,
        mobileFirst: true,
        responsive: [{
            breakpoint: 767,
            settings: "unslick",
        }]
    })

    //- counter
    const counter = $('.counter');
    let number = 1;
    const heightTopElement = $(".about").offset().top;
    const windowInnerHeight = window.innerHeight;
    const topElement = heightTopElement - windowInnerHeight;

    if (heightTopElement < windowInnerHeight) {
        counter.countTo();
    } else {
        $(window).scroll(function () {
            if ($(this).scrollTop() > topElement) {
                if (number < 2) {
                    number = number + 2;
                    counter.countTo();
                }

            }
        });
    }
})