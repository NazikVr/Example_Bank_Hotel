let swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: "swiper-pagination",
  },
  loop: true,
  mousewhell: true,
  keyboard: true,

  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },
  
  slidesPerView: 3,
  centeredSlides: true,
  speed: 1000,
  spaceBetween: 0,
});