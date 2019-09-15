// import external dependencies
import 'jquery';

// Load Events
jQuery(document).ready(function() {

  /* --------------------------------------------------

	Hide Header on on scroll down
	-------------------------------------------------- */
  let prev = 0;
  const $window = $(window);
  const nav = $("nav");

  $window.on("scroll", function() {
    const scrollTop = $window.scrollTop();
    nav.toggleClass("nav-up", scrollTop > prev);
    nav.toggleClass("bg-black", scrollTop >= 10);
    nav.toggleClass("stuck", scrollTop <= 1);
    prev = scrollTop;

    if ($window.width() <= 768) {
      if (nav.hasClass("nav-up")) {
        $("nav ul").slideUp("normal");
        nav.removeClass("opened");
      }
    }
  });
});