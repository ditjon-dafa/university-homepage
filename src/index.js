let isShownMenuContent = false;

let firstDocumentBodyWidth = 0;
let previousWindowWidth = 0;
let currentWindowWidth = 0;

const TOGGLE_MENU = document.getElementById("toggle-menu");
TOGGLE_MENU.addEventListener("click", toggleMenu);

function initialUpdate() {
  firstDocumentBodyWidth = screen.availWidth;
  previousWindowWidth = firstDocumentBodyWidth;
  updateSize();
}

function toggleMenu() {
  isShownMenuContent = !isShownMenuContent;
  updateSize(); //to hide general page content when menu content is shown at the small screen
  showHideMenuContent();
}

function showHideMenuContent() {
  const SECOND_NAV_BAR_CONTAINER = document.getElementById("second-nav-bar-lg");

  SECOND_NAV_BAR_CONTAINER.classList.toggle(
    "hide",
    isShownMenuContent === true
  );
}

//

//function to update Window Size (width)
function updateSize() {
  currentWindowWidth = window.innerWidth;

  const SMALL_SCREEN_MAIN_CONTENT =
    document.getElementById("small-screen-main");

  //hide page general content when menu content is shown in small screen
  if (currentWindowWidth <= 767) {
    SMALL_SCREEN_MAIN_CONTENT.classList.toggle(
      "hide",
      isShownMenuContent === true
    );
  }
  //or show menu content overlaying page content in medium and large screen
  else {
    if (
      isShownMenuContent === true &&
      SMALL_SCREEN_MAIN_CONTENT.classList.contains("hide")
    ) {
      SMALL_SCREEN_MAIN_CONTENT.classList.remove("hide");
    }
  }
  //hide large screen menu content when browser maximize button is clicked
  //then show second nav bar
  if (
    isShownMenuContent === true &&
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
