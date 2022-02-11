$(document).ready(function () {

    $('.header-menu-mobile__btn').on('click', function () {
        $('.header-menu-mobile').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.header-menu__item-click').on('click', function () {
        $('.header-menu-submenu').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.gallery').slick({
        arrow: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.sliders-arrow__prev'),
        nextArrow: $('.sliders-arrow__next'),
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.team-slider').slick({
        responsive: [{
                breakpoint: 100000,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    arrow: false,
                    dots: true,
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});