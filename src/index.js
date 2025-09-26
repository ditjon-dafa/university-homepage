let isShownSecondNavBar = true;

const TOGGLE_MENU = document.getElementById("toggle-menu");
TOGGLE_MENU.addEventListener("click", toggleSecondNavBar);

function toggleSecondNavBar() {
  isShownSecondNavBar = !isShownSecondNavBar;
  showHideSecondNavBar();
}

function showHideSecondNavBar() {
  const SECOND_NAV_BAR_CONTAINER = document.getElementById("second-nav-bar");
  SECOND_NAV_BAR_CONTAINER.classList.toggle(
    "hide",
    isShownSecondNavBar === false
  );
}
