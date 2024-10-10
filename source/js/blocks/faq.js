(function () {
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems[2].classList.add('is-open');
  faqItems[2].querySelector('.faq__accordion-answer').classList.add('is-open');

  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('is-open');
      item.querySelector('.faq__accordion-answer').classList.toggle('is-open');
    });
  });
})();
