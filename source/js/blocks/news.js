import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperSelector = '.news__swiper';
const swiperWrapperSelector = '.news__swiper-wrapper';
const swiperLinksSelector = '.news__content-button';
const paginationBulletsSelector = '.swiper-pagination-bullet';
const tabButtons = document.querySelectorAll('.news__tab');
let currentTab = document.querySelector('.news__tab.is-active');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentTab && currentTab !== button) {
      currentTab.classList.remove('is-active');
    }
    button.classList.add('is-active');
    currentTab = button;
  });
});


const swiperNews = new Swiper(swiperSelector, {
  autoHeight: true,
  direction: 'horizontal',
  watchSlidesProgress: true,

  modules: [Grid, Navigation, Pagination],
  pagination: {
    el: '.news__pagination',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet--active',
    bulletElement: 'button',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
    renderBullet: (index, className) => `<button class="pagination__button ${className}">${index + 1}</button>`,
  },
  navigation: {
    nextEl: '.news__swiper-button--next',
    prevEl: '.news__swiper-button--prev',
    disabledClass: 'button--swiper--disabled',
  },
  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      autoHeight: false,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    768: {
      width: 678,
      autoHeight: false,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    1440: {
      width: 1240,
      autoHeight: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
  },
});

const swiperWrapper = document.querySelector(swiperWrapperSelector);
const swiperLinks = swiperWrapper.querySelectorAll(swiperLinksSelector);
const paginationButtons = document.querySelectorAll(paginationBulletsSelector);

const setTabIndex = () => {
  swiperLinks.forEach((link, index) => {
    link.setAttribute('tabindex', index >= swiperNews.activeIndex && index < swiperNews.activeIndex + 3 ? '0' : '-1');
  });
};

swiperLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
setTabIndex();

swiperNews.on('activeIndexChange', setTabIndex);

const setPaginationTabIndex = () => {
  paginationButtons.forEach((button) => {
    button.tabIndex = button.classList.contains('swiper-pagination-bullet--active-main') || button.classList.contains('swiper-pagination-bullet--active-next') ? 0 : -1;
  });
};

swiperNews.on('paginationRender', setPaginationTabIndex);
