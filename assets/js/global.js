var root = document.querySelector(":root");
var body = $("body");
var lightVis = $(".light-vis");
var darkVis = $(".dark-vis");
root.style.setProperty("--text-color", "#171717");
body.addClass("body-bg-light");
lightVis.css("display", "block");
darkVis.css("display", "none");
$(".dropdown-menu").addClass("dropdown-menu-light");
$(".footer-form-box").addClass("footer-form-box-light");
$(".main-footer").addClass("main-footer-light");
$(".main-footer hr").css('background-color', "#171717");


function changeThemeColor() {

  if (document.querySelector(".change-theme-input").checked == true) {
    root.style.setProperty("--text-color", "#171717");
    body.addClass("body-bg-light");
    lightVis.css("display", "block");
    darkVis.css("display", "none");
    $(".dropdown-menu").addClass("dropdown-menu-light");
    $(".footer-form-box").addClass("footer-form-box-light");
    $(".main-footer").addClass("main-footer-light");
    $(".main-footer hr").css('background-color', "#171717");
  } else {
    root.style.setProperty("--text-color", "#ffffff");
    body.removeClass("body-bg-light");
    darkVis.css("display", "block");
    lightVis.css("display", "none");
    $(".dropdown-menu").removeClass("dropdown-menu-light");
    $(".footer-form-box").removeClass("footer-form-box-light");
    $(".main-footer").removeClass("main-footer-light");
    $(".main-footer hr").css('background-color', "#ffffff");
  }
  
}
