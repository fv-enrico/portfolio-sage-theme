// import external dependencies
import 'jquery';

// Load Events
jQuery(document).ready(function() {

  /* --------------------------------------------------

  Smooth scroll
  -------------------------------------------------- */
  $('a[href^="#"]').click(function() {
    $('html, body').animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);

    return false;
  });
});