/**
  Swiper:
  https://swiperjs.com/
**/

// init Swiper:
const swiper = new Swiper(".swiperCarousel", {
  direction: "horizontal",
  loop: true,
  //Amount of slides in loop mode should be at least 2x of slidesPerView value.
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24, // coloum gap 24px

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
