$(document).ready(function () {
  $(".slider")
    .on("initialized.owl.carousel changed.owl.carousel", function (e) {
      if (!e.namespace) {
        return;
      }
      var carousel = e.relatedTarget;
      $(".slider-counter").text(
        carousel.relative(carousel.current()) +
          1 +
          "/" +
          carousel.items().length
      );
    })
    .owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      dots: false,
      nav: false,
    });

  var owl = $(".slider");
  owl.owlCarousel();
  // Go to the next item
  $(".customeArrows.c_next").click(function () {
    owl.trigger("next.owl.carousel", [500]);
  });
  // Go to the previous item
  $(".customeArrows.c_prev").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [500]);
  });

  if ($(window).width() < 960) {
    $(".v_slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
});

$(window).resize(function () {
  if ($(window).width() < 960) {
    $(".v_slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
    });
  }
});
