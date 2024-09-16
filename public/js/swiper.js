// hero section on home page
var swiper = new Swiper(".hero-swp", {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
});
