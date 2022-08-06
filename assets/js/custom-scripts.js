const partnersSwiper = new Swiper('.swiper.partners-swiper', {
    slidesPerView: 3,
    spaceBetween: 108,
    allowTouchMove: true,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.partners-swiper-next',
        prevEl: '.partners-swiper-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        // when window width is >= 480px
        425: {
            slidesPerView: 3,
            spaceBetween: 33
        },
        // when window width is >= 640px
        998: {
            slidesPerView: 3,
            spaceBetween: 108,
        }
    }
});

const useLaptopSwiper = new Swiper('.swiper.use-laptop-section-box-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 25,
    allowTouchMove: true,
    centeredSlides: false,
    loop: false,
});


const roadMapSwiper = new Swiper('.swiper.road-map-swiper', {
    slidesPerView: 1.95,
    allowTouchMove: true,
    centeredSlides: false,
    navigation: {
        nextEl: '.road-map-swiper-next',
        prevEl: '.road-map-swiper-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1.95,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
        }
    }
});

document.querySelector(".road-map-swiper-card-active .road-map-circle").src = "./assets/img/Group 59.png"



var root = document.querySelector(':root');
var body = $("body");
var lightVis = $(".light-vis");
var darkVis = $(".dark-vis");
root.style.setProperty('--text-color', '#171717');
body.addClass("body-bg-light");
lightVis.css("display", "block");
darkVis.css("display", "none");

$(".gray-bordered-section").css({ background: "linear-gradient(180deg, #D9D5D5 0%, #C5C5C5 100%)" });
$(".footer-form-box").addClass("footer-form-box-light");
$(".main-footer").addClass("main-footer-light");
$(".main-footer hr").css('background-color', "#171717");
$(".partners-swiper-next").addClass("partners-swiper-next-light");
$(".partners-swiper-prev").addClass("partners-swiper-prev-light");
$(".about-us-section").addClass("about-us-section-light");
$(".dropdown-menu").addClass("dropdown-menu-light");
$(".use-laptop-section-box").addClass("use-laptop-section-box-light");
$(".integrated-across-card").addClass("integrated-across-card-light");
$(".q1-section").css('background-image', "url('./assets/img/q1-section-bg-light.png')");
$(".step-card").addClass("step-card-light");
$(".steps-mobile-vis .nav-link").addClass("nav-link-light");
$(".coming-soon-section").addClass("coming-soon-section-light");

function changeThemeColor() {

    if (document.querySelector('.change-theme-input').checked == true) {
        root.style.setProperty('--text-color', '#171717');
        body.addClass("body-bg-light");
        lightVis.css("display", "block");
        darkVis.css("display", "none");
        $(".gray-bordered-section").css({ background: "linear-gradient(180deg, #D9D5D5 0%, #C5C5C5 100%)" });
        $(".footer-form-box").addClass("footer-form-box-light");
        $(".main-footer").addClass("main-footer-light");
        $(".main-footer hr").css('background-color', "#171717");
        $(".partners-swiper-next").addClass("partners-swiper-next-light");
        $(".partners-swiper-prev").addClass("partners-swiper-prev-light");
        $(".about-us-section").addClass("about-us-section-light");
        $(".dropdown-menu").addClass("dropdown-menu-light");
        $(".use-laptop-section-box").addClass("use-laptop-section-box-light");
        $(".integrated-across-card").addClass("integrated-across-card-light");
        $(".q1-section").css('background-image', "url('./assets/img/q1-section-bg-light.png')");
        $(".step-card").addClass("step-card-light");
        $(".steps-mobile-vis .nav-link").addClass("nav-link-light");
        $(".coming-soon-section").addClass("coming-soon-section-light");

    } else {
        root.style.setProperty('--text-color', '#ffffff');
        body.removeClass("body-bg-light");
        darkVis.css("display", "block");
        lightVis.css("display", "none");
        $(".gray-bordered-section").css({ background: "linear-gradient(97.57deg, #2B2B2B 31.49%, #1B1B1B 113.66%)" });
        $(".footer-form-box").removeClass("footer-form-box-light");
        $(".main-footer").removeClass("main-footer-light");
        $(".main-footer hr").css('background-color', "#ffffff");
        $(".partners-swiper-next").removeClass("partners-swiper-next-light");
        $(".partners-swiper-prev").removeClass("partners-swiper-prev-light");
        $(".about-us-section").removeClass("about-us-section-light");
        $(".dropdown-menu").removeClass("dropdown-menu-light");
        $(".use-laptop-section-box").removeClass("use-laptop-section-box-light");
        $(".integrated-across-card").removeClass("integrated-across-card-light");
        $(".q1-section").css('background-image', "url('./assets/img/q1-section-bg.png')");
        $(".step-card").removeClass("step-card-light");
        $(".steps-mobile-vis .nav-link").removeClass("nav-link-light");
        $(".coming-soon-section").removeClass("coming-soon-section-light");
    }
}

if ($(window).width() < 768) {
    $('.about-us-section .section-normal-p:first-of-type').readmore({ speed: 120, collapsedHeight: 65, embedCSS: false });
}

