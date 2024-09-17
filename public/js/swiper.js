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


// tarif section on home page
var swiper = new Swiper(".tarif-swp", {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    950: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});