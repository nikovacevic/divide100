$(function () {
  UI = {};
  UI.viewportHeight = $(window).height();
  UI.viewportWidth = $(window).width();
  UI.floatingNav = $("nav.floating-nav");

  UI.init = function () {
    // Set ATF image
    $("section.atf").css('height', UI.viewportHeight);

    // Set fixed images
    $("section.fixed-image").css('height', UI.viewportHeight * 0.45);
    setTimeout(function () {
      $("body").removeClass('loading');
    }, 250)

    // Remove loading state
    setTimeout(function () {
      $("main, body").removeClass('loading');
    }, 200)
  }

  // Full-screen nav toggle
  UI.toggleFloatingNav = function (nav) {
    nav.toggleClass('hidden');
  }
  $('.toggle-menu').click(function (e, ui) {
    UI.toggleFloatingNav(UI.floatingNav);
  });
  $('body').click(function (e, ui) {
    console.log(e);
    // UI.toggleFloatingNav(UI.floatingNav);
  })
});

$(document).ready(function () {
  UI.init();
});
