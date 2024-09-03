$(document).ready(function () {
  $(".your-class").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">PREV</button>',
    nextArrow: '<button type="button" class="slick-next">NEXT</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
