$(".lix-marketplace-first-section").addClass(
  "lix-marketplace-first-section-light"
);
function changeThemeColorLixMarketplace() {
  if (document.querySelector(".change-theme-input").checked == true) {
    $(".lix-marketplace-first-section").addClass(
      "lix-marketplace-first-section-light"
    );
  } else {
    $(".lix-marketplace-first-section").removeClass(
      "lix-marketplace-first-section-light"
    );
  }
}
function changeThemeColorFunctions() {
  changeThemeColorLixMarketplace();
  changeThemeColor();
}
$(".change-theme-input").click(changeThemeColorFunctions);
