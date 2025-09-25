let isShownMenuLgDisplay = false;

const MENU_LG_DISPLAY = document.getElementById("toggle-menu-lg");
MENU_LG_DISPLAY.addEventListener("click", toggleMenuLgDisplay);

function toggleMenuLgDisplay() {
  isShownMenuLgDisplay = !isShownMenuLgDisplay;
  showHideMenuLgDisplay();
}

function showHideMenuLgDisplay() {
  const MENU_LG_DISPLAY_CONTAINER = document.getElementById("second-nav-bar");
  MENU_LG_DISPLAY_CONTAINER.classList.toggle(
    "hide",
    isShownMenuLgDisplay === true
  );
}
