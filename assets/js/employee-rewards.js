$(".q1-section").css(
  "background-image",
  "url('./assets/img/q1-section-bg-light.png')"
);
$(".step-card").addClass("step-card-light");
$(".steps-mobile-vis .nav-link").addClass("nav-link-light");

function changeThemeColorEmployeeRewards() {
  if (document.querySelector(".change-theme-input").checked == true) {
    $(".q1-section").css(
      "background-image",
      "url('./assets/img/q1-section-bg-light.png')"
    );
    $(".step-card").addClass("step-card-light");
    $(".steps-mobile-vis .nav-link").addClass("nav-link-light");
  } else {
    $(".q1-section").css(
      "background-image",
      "url('./assets/img/q1-section-bg.png')"
    );
    $(".step-card").removeClass("step-card-light");
    $(".steps-mobile-vis .nav-link").removeClass("nav-link-light");
  }
}

function changeThemeColorFunctions(){
    changeThemeColorEmployeeRewards();
    changeThemeColor();
}
$(".change-theme-input").click(changeThemeColorFunctions);
