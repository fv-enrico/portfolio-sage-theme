// import external dependencies
import 'jquery';

// Load Events
jQuery(document).ready(function() {
  /* --------------------------------------------------

 	Replace all SVG images with inline SVG
  -------------------------------------------------- */
  jQuery('img').filter(function() {
    return this.src.match(/.*\.svg$/);
  }).each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });

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

  /* --------------------------------------------------

	Mobile nav
	-------------------------------------------------- */
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

  /* --------------------------------------------------

  Smooth scroll
  -------------------------------------------------- */
  $('a[href^="#"]').click(function() {
    $('html, body').animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);

    return false;
  });

  console.log('Ready!');
});