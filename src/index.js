let isShownMenuContent = false;

let firstDocumentBodyWidth = 0;
let previousWindowWidth = 0;
let currentWindowWidth = 0;

const TOGGLE_MENU = document.getElementById("toggle-menu");
TOGGLE_MENU.addEventListener("click", toggleMenu);

function initialUpdate() {
  firstDocumentBodyWidth = screen.availWidth;
  previousWindowWidth = firstDocumentBodyWidth;
  currentWindowWidth = 0;
  updateSize();
}

function toggleMenu() {
  isShownMenuContent = !isShownMenuContent;
  updateSize();
  showHideMenuContent();
}

function showHideMenuContent() {
  const SECOND_NAV_BAR_CONTAINER = document.getElementById("second-nav-bar-lg");

  SECOND_NAV_BAR_CONTAINER.classList.toggle(
    "hide",
    isShownMenuContent === true
  );
}

//function to update Window Size (width)
function updateSize() {
  currentWindowWidth = window.innerWidth;

  const UNIVERSITY_CONTENT_SMALL_SCREEN = document.querySelectorAll(
    ".university-content-small-screen"
  );
  if (currentWindowWidth <= 767) {
    UNIVERSITY_CONTENT_SMALL_SCREEN.forEach((content) => {
      content.classList.toggle("hide", isShownMenuContent === true);
    });
  } else {
    UNIVERSITY_CONTENT_SMALL_SCREEN.forEach((content) => {
      if (isShownMenuContent === true && content.classList.contains("hide"))
        content.classList.remove("hide");
    });
  }
  if (
    previousWindowWidth < firstDocumentBodyWidth &&
    currentWindowWidth === firstDocumentBodyWidth
  ) {
    isShownMenuContent = !isShownMenuContent;
    showHideMenuContent();

    const collapseElementList = document.querySelectorAll(".collapse");
    const collapseList = [...collapseElementList].map(
      (collapseEl) => new bootstrap.Collapse(collapseEl)
    );
  }
  previousWindowWidth = currentWindowWidth;
}

//add event listener for window resize
window.addEventListener("resize", updateSize);

//initial update of browser screen width
initialUpdate();
