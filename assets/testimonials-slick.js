$(document).ready(function () {
  $(".your-class").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,

    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-previous">-</button>',
    nextArrow: '<button type="button" class="slick-nextarrow">+</button>',
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
