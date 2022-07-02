//get all li elements from the page and store them in an array
const list = document.querySelectorAll(".list");

//function that controls which link is active by clicking on it
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

//apply click listener to all navigation links
list.forEach((item) => item.addEventListener("click", activeLink));

//update contact method cards on hover
$(document).on("mouseenter", ".update", MODEL.displayContact);
$(document).on("mouseleave", ".update", MODEL.removeContact);

//reveal the mobile navigation when clicking on the burger menu
$(".burger-menu").click(toggleMobileNav);

let mobileNavStatus = false;
function toggleMobileNav() {
  if (mobileNavStatus == false) {
    console.log("open");
    MODEL.displayMobileNav();
    mobileNavStatus = true;
  } else if (mobileNavStatus == true) {
    console.log("close");
    MODEL.hideMobileNav();
    mobileNavStatus = false;
  }
}

//hide the mobile nav when a mobile nav link is clicked
$(".mobile-nav nav ul .list a").click(MODEL.hideMobileNav);

//function that routes to a new place
function route() {
  let hashtag = window.location.hash;
  let pageId = hashtag.replace("#/", "");

  if (pageId == "") {
    MODEL.navToPage("home");
  } else {
    MODEL.navToPage(pageId);
  }
}

//function that initializes listeners for clicks and other changes
function initListeners() {
  //run the route function one time when the page is initially opened
  route();

  //run the route function when the URL after the '#' changes
  $(window).on("hashchange", route);
}

$(document).ready(function () {
  initListeners();
});
