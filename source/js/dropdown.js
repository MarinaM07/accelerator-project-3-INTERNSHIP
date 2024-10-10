(function () {
  const dropdownLists = document.querySelectorAll('.header__list--dropdown');
  const headerButtonLinks = document.querySelectorAll('.header__button-link');

  headerButtonLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = dropdownLists[index].classList.toggle('is-open');
      link.classList.toggle('is-open', isOpen);
    });
  });
})();
