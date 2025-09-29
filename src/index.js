let isShownMenuContent = false;

const TOGGLE_MENU = document.getElementById("toggle-menu");
TOGGLE_MENU.addEventListener("click", toggleSecondNavBar);

function toggleSecondNavBar() {
  isShownMenuContent = !isShownMenuContent;
  showHideSecondNavBar();
}

function showHideSecondNavBar() {
  const SECOND_NAV_BAR_CONTAINER = document.getElementById("second-nav-bar-lg");

  SECOND_NAV_BAR_CONTAINER.classList.toggle(
    "hide",
    isShownMenuContent === true
  );
}
