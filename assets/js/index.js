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

const teamSwiper = new Swiper('.swiper.team-swiper', {
    slidesPerView: 2,
    spaceBetween: 18,
    allowTouchMove: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.team-swiper-next',
        prevEl: '.team-swiper-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        425: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        // when window width is >= 640px
        928: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

$(".gray-bordered-section").css({ background: "linear-gradient(180deg, #D9D5D5 0%, #C5C5C5 100%)" });
$(".partners-swiper-next").addClass("partners-swiper-next-light");
$(".partners-swiper-prev").addClass("partners-swiper-prev-light");
$(".about-us-section").addClass("about-us-section-light");

function changeThemeColorIndex() {

    if (document.querySelector('.change-theme-input').checked == true) {
        $(".gray-bordered-section").css({ background: "linear-gradient(180deg, #D9D5D5 0%, #C5C5C5 100%)" });
        $(".partners-swiper-next").addClass("partners-swiper-next-light");
        $(".partners-swiper-prev").addClass("partners-swiper-prev-light");
        $(".about-us-section").addClass("about-us-section-light");
    }else{
        $(".gray-bordered-section").css({ background: "linear-gradient(97.57deg, #2B2B2B 31.49%, #1B1B1B 113.66%)" });
        $(".partners-swiper-next").removeClass("partners-swiper-next-light");
        $(".partners-swiper-prev").removeClass("partners-swiper-prev-light");
        $(".about-us-section").removeClass("about-us-section-light");
    }

}
function changeThemeColorFunctions(){
    changeThemeColorIndex();
    changeThemeColor();
}
$(".change-theme-input").click(changeThemeColorFunctions);

if ($(window).width() < 768) {
    $('.about-us-section .section-normal-p:first-of-type').readmore({ speed: 120, collapsedHeight: 65, embedCSS: false });
}