$(document).ready(function () {
  $(".your-class").slick({
    slidesToShow: 4, // Adjust based on your layout responsiveness
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 2000,
    dots: false, // Disables navigation dots if not needed
    arrows: true, // Keep or remove as needed
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
