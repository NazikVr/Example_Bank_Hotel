// const tabs2 = document.querySelectorAll(".conference-hall__tab");
// const contents2 = document.querySelectorAll(".conference-hall__content");

// tabs2.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     tabs2.forEach(tab => tab.classList.remove("active"))
//     tab.classList.add("active");
    
//     contents2.forEach((c) => c.classList.remove("active"));
    
//     contents2[index].classList.add("active");
//   })
// });

// tabs2[0].click();

let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  navigation: {
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  mousewhell: true,
  keyboard: true,

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  speed: 1000,
  spaceBetween: 0,
});

$(".swiper-wrapper").mouseenter(function(){
  swiper.stopAutoplay();
});

$(".swiper-wrapper").mouseleave(function(){
  swiper.startAutoplay();
});

$('#sandbox-container input').datepicker({
});