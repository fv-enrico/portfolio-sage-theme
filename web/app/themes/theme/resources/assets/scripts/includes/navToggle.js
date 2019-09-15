// import external dependencies
import 'jquery';

// Load Events
jQuery(document).ready(function() {

  /* --------------------------------------------------

	Mobile nav
	-------------------------------------------------- */
  const $window = $(window);
  const nav = $("nav");
  const navToggle = $("nav .nav-toggle");
  const navOpen = $("nav .nav-toggle svg .open");
  const navClose = $("nav .nav-toggle svg .close");

  navToggle.on("click", function() {
    $(this).prev().slideToggle("slow");
    nav.toggleClass("opened");
    navOpen.toggleClass("hidden");
    navClose.toggleClass("hidden");
  });

  $window.resize(function() {
    if ($window.width() >= 768) {
      $('nav ul').css("display", "");
      nav.removeClass("opened");

      if (navOpen.hasClass("hidden")) {
        navOpen.toggleClass("hidden");
      }

      if (!navClose.hasClass("hidden")) {
        navClose.toggleClass("hidden");
      }
    }
  })
});