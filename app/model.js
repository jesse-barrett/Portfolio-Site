var MODEL = (function () {
  //function that updates the page content
  function _navToPage(pageName, callback) {
    $.get(`pages/${pageName}.html`, function (data) {
      $("#app").html(data);

      //run a callback function (if provided)
      if (callback) {
        callback();
      }
    });
  }

  //function that displays contact information
  function _dislpayContact(callback) {
    let info = $(this).attr("data-info");
    $(this).append(`<p class="remove">` + info + `</p>`);
  }

  //function that removes contact information
  function _removeContact(callback) {
    $(".remove").remove();
  }

  //function that displays the mobile navigation
  function _displayMobileNav(callback) {
    console.log("working");
    $(".mobile-nav").css("animation", "fromLeft 0.7s ease-out 0s 1 normal");
    $(".mobile-nav").css("display", "flex");

    $(".burger").fadeOut(200);
    $(".close").delay(200).fadeIn(200);
  }

  //function that hides the mobile navigation
  function _hideMobileNav(callback) {
    $(".mobile-nav").css("animation", "toLeft 0.7s ease-out 0s 1 normal");

    $(".close").fadeOut(200);
    $(".burger").delay(200).fadeIn(200);

    setTimeout(() => {
      $(".mobile-nav").css("display", "none");
    }, 700);
  }

  //make MODEL functions accessible by the controller
  return {
    navToPage: _navToPage,
    displayContact: _dislpayContact,
    removeContact: _removeContact,
    displayMobileNav: _displayMobileNav,
    hideMobileNav: _hideMobileNav,
  };
})();
