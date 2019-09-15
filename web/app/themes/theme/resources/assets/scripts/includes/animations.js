// import external dependencies
import 'jquery';
import {
  TimelineMax,
  TweenMax
} from "gsap/all";

// Load Events
jQuery(document).ready(function() {

  /* --------------------------------------------------

  GSAP
  -------------------------------------------------- */
  const hero = $("#eb-hero .section-content");
  const timeline = $(".timeline:not(.last)");

  const tl = new TimelineMax();

  tl.to(hero, 1, {
      transform: "translateX(0)"
    })
    .fromTo(timeline, 1, {
      height: "0"
    }, {
      height: "350%"
    })
});