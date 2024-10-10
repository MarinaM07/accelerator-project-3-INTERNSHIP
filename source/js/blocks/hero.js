import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

const sliderElement = document.querySelector('.slider__swiper');

const setSliderHero = () => {
  const slider = new Swiper(sliderElement, {
    modules: [Autoplay, Pagination],
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      type: 'bullets',
      bulletElement: 'div',
      bulletClass: 'slider__pagination-bullet',
      bulletActiveClass: 'slider__pagination-bullet--active',
    },
    /* autoplay: {
      delay: 3000,
    }, */
    loop: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
    on: {
      slideChangeTransitionStart: function () {
        slider.pagination.init();
        slider.pagination.render();
        slider.pagination.update();
      }
    }
  });
};

const initSliderHero = () => {
  if (document.body.contains(sliderElement)) {
    setSliderHero();
  }
};

initSliderHero();
