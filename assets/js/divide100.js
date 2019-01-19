$(function () {
  UI = {};
  UI.viewportHeight = $(window).height();
  UI.viewportWidth = $(window).width();
  UI.floatingNav = $("nav.floating-nav");
  UI.headerNav = $("nav.header-nav");

  UI.init = function () {
    // Set ATF image height
    $("section.atf").css('height', UI.viewportHeight);
    // Set fixed image heights
    $("section.fixed-image").css('height', UI.viewportHeight * 0.45);
  }

  // Set scrolling state
  $(window).scroll(function (e, ui) {
    if ($(document).scrollTop() > 60) {
      $('header').addClass('scrolling');
    } else {
      $('header').removeClass('scrolling');
    }
  });

  // Toggle floating nav
  UI.toggleFloatingNav = function (nav) {
    nav.toggleClass('hidden');
  }
  $('.toggle-menu').click(function () {
    UI.toggleFloatingNav(UI.floatingNav);
  });
});

$(document).ready(function () {
  UI.init();
});
