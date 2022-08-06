const useLaptopSwiper = new Swiper(".swiper.use-laptop-section-box-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 25,
  allowTouchMove: true,
  centeredSlides: false,
  loop: false,
});

$(".use-laptop-section-box").addClass("use-laptop-section-box-light");
$(".integrated-across-card").addClass("integrated-across-card-light");

function changeThemeColorBrandLoyalty() {
  if (document.querySelector(".change-theme-input").checked == true) {
    $(".use-laptop-section-box").addClass("use-laptop-section-box-light");
    $(".integrated-across-card").addClass("integrated-across-card-light");
  }else{
    $(".use-laptop-section-box").removeClass("use-laptop-section-box-light");
    $(".integrated-across-card").removeClass("integrated-across-card-light");
  }
}

function changeThemeColorFunctions(){
    changeThemeColorBrandLoyalty();
    changeThemeColor();
}
$(".change-theme-input").click(changeThemeColorFunctions);
