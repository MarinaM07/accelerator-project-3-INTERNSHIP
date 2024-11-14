import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const sliderElement = document.querySelector('.slider__swiper');

const swiper = new Swiper(sliderElement, {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 3000,
  },
});
// Создание кастомной пагинации
const paginationContainers = document.querySelectorAll('.slider__custom-pagination');
const totalSlides = swiper.slides.length;

// Заполнение пагинации
paginationContainers.forEach((container) => {
  for (let i = 0; i < totalSlides; i++) {
    const button = document.createElement('button');
    button.classList.add('pagination-button');
    button.dataset.index = i;
    button.addEventListener('click', () => {
      swiper.slideTo(i);
    });
    container.appendChild(button);
  }
});
// Обновление активной кнопки пагинации
swiper.on('slideChange', () => {
  const activeIndex = swiper.realIndex;
  paginationContainers.forEach((container) => {
    const buttons = container.querySelectorAll('.pagination-button');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    buttons[activeIndex].classList.add('active');
  });
});

// Инициализация активной кнопки для первого слайда
paginationContainers[0].querySelector('.pagination-button').classList.add('active');
