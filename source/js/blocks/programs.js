import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

const swiperPrograms = new Swiper('.programs__swiper', {
  watchSlidesProgress: true,
  modules: [Scrollbar, Navigation],
  scrollbar: {
    el: '.programs__scrollbar',
    draggable: true,
    dragSize: 394,
  },
  navigation: {
    nextEl: '.programs__swiper-button--next',
    prevEl: '.programs__swiper-button--prev',
    disabledClass: 'button--swiper--disabled',
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      allowTouchMove: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        dragSize: 326,
      },
    },
    1440: {
      width: 1240,
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 31,
    },
  },
});

const setContentButtonTabIndex = (button, index) => {
  if (swiperPrograms.slides[index].classList.contains('swiper-slide-visible')) {
    button.tabIndex = 0;
  } else {
    button.tabIndex = -1;
  }
};

const contentButtons = document.querySelectorAll('.programs__content-button');
contentButtons.forEach((button, index) => {
  setContentButtonTabIndex(button, index);
});

swiperPrograms.on('slideChange', () => {
  contentButtons.forEach((button, index) => {
    setContentButtonTabIndex(button, index);
  });
});

const scrollbarButton = document.querySelector('.programs__scrollbar .swiper-scrollbar-drag');
scrollbarButton.setAttribute('tabindex', '-1');
