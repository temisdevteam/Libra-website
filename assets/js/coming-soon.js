$(".coming-soon-section").addClass("coming-soon-section-light");

function changeThemeColorComingSoon() {
  if (document.querySelector(".change-theme-input").checked == true) {
    $(".coming-soon-section").addClass("coming-soon-section-light");
  } else {
    $(".coming-soon-section").removeClass("coming-soon-section-light");
  }
}

function changeThemeColorFunctions(){
    changeThemeColorComingSoon();
    changeThemeColor();
}
$(".change-theme-input").click(changeThemeColorFunctions);
