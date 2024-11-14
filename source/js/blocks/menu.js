(function () {
  const headerWrapper = document.querySelector ('.header__wrapper');
  const headerButton = headerWrapper.querySelector('.header__button');
  const headerNav = headerWrapper.querySelector('.header__nav');
  const headerMenuWrapper = headerWrapper.querySelector('.header__menu-wrapper');
  const pageBody = document.querySelector('.page-body');
  const headerLinks = headerWrapper.querySelectorAll('.header__link');
  const headerLogo = headerWrapper.querySelector('.header__logo');
  const menuBackdrop = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');

  const toggleMenu = (isOpen) => {
    headerNav.classList.toggle('is-open', isOpen);
    headerButton.classList.toggle('active', isOpen);
    pageBody.classList.toggle('page-body--shown', isOpen);
    pageBody.classList.toggle('page-body--hidden', !isOpen);
    headerButton.setAttribute('aria-expanded', String(isOpen));
    headerMenuWrapper.setAttribute('aria-hidden', String(!isOpen));
    headerLinks.forEach((link) => link.setAttribute('tabindex', isOpen ? '0' : '-1'));
    menuBackdrop.classList.toggle('is-open-menu', isOpen);

    if (window.matchMedia('(min-width: 321px)').matches) {
      headerWrapper.style.justifyContent = isOpen ? 'flex-end' : 'space-between';
    }

    if (!modal.classList.contains('is-open')) {
      window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    }

    headerLogo.style.display = isOpen ? 'none' : 'flex';

    headerButton.textContent = isOpen ? '' : 'Меню';
  };

  headerButton.addEventListener('click', () => toggleMenu(!headerNav.classList.contains('is-open')));

  document.body.addEventListener('click', (event) => {
    if (event.target !== headerButton && !event.target.closest('.header__nav')) {
      toggleMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      toggleMenu(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.header__link')) {
      toggleMenu(false);
    }
  });

})();
