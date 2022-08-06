$(".press-card-section").addClass("press-card-section-light");

function changeThemeColorPress() {
  if (document.querySelector(".change-theme-input").checked == true) {
    $(".press-card-section").addClass("press-card-section-light");
  } else {
    $(".press-card-section").removeClass("press-card-section-light");
  }
}

function changeThemeColorFunctions(){
    changeThemeColorPress();
    changeThemeColor();
}
$(".change-theme-input").click(changeThemeColorFunctions);
