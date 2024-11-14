import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

(() => {
  const breakpoint320 = {
    allowTouchMove: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 30,
  };

  const breakpoint768 = {
    ...breakpoint320, // наследуем настройки от 320px
    scrollbar: {
      dragSize: 326,
    },
  };

  const breakpoints = {
    320: breakpoint320,
    768: breakpoint768,
    1440: {
      allowTouchMove: false,
      slidesPerView: 2,
      spaceBetween: 32,
    },
  };

  const initReviewsSwiper = () => {
    const swiperReviews = new Swiper('.reviews__swiper', {
      modules: [Scrollbar, Navigation],
      scrollbar: {
        el: '.reviews__swiper-scrollbar',
        draggable: true,
        dragSize: 394,
      },
      navigation: {
        nextEl: '.reviews__swiper-button--next',
        prevEl: '.reviews__swiper-button--prev',
        disabledClass: 'button--swiper--disabled',
      },
      breakpoints,
    });

    return swiperReviews;
  };

  initReviewsSwiper();
})();
