let isShownMenuContent = false;

const TOGGLE_MENU = document.getElementById("toggle-menu");
TOGGLE_MENU.addEventListener("click", toggleMenu);

function toggleMenu() {
  isShownMenuContent = !isShownMenuContent;
  showHideMenuContent();
}

function showHideMenuContent() {
  const SECOND_NAV_BAR_CONTAINER = document.getElementById("second-nav-bar-lg");

  SECOND_NAV_BAR_CONTAINER.classList.toggle(
    "hide",
    isShownMenuContent === true
  );

  const UNIVERSITY_CONTENT_SMALL_SCREEN = document.querySelectorAll(
    ".university-content-small-screen"
  );
  UNIVERSITY_CONTENT_SMALL_SCREEN.forEach((content) => {
    content.classList.toggle("hide", isShownMenuContent === true);
  });
}
