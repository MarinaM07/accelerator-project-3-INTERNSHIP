import { FormValidator } from './form/form-validator.js';

(function () {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  const submitButton = modal.querySelector('.modal__submit-button');
  const openButton = document.querySelector('.about__button');
  const closeButton = document.querySelector('.modal__close-button');
  const modalBackdrop = document.querySelector('.overlay');
  const headerButton = document.querySelector('.header__button');

  let isModalOpen = false;

  const toggleModal = (isOpen) => {
    modal.classList.toggle('is-open', isOpen);
    modalBackdrop.classList.toggle('is-open-modal', isOpen);
    body.style.overflow = isOpen ? 'hidden' : 'auto';
    if (isOpen) {
      isModalOpen = true;
      const originalScrollY = window.scrollY;
      window.savedScrollY = originalScrollY;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      headerButton.style.zIndex = 2;
    } else {
      isModalOpen = false;
      window.scrollTo({ top: window.savedScrollY, behavior: 'instant' });
      window.savedScrollY = null;
      headerButton.style.zIndex = 3;
    }
  };

  openButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleModal(true);
  });

  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleModal(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isModalOpen) {
      toggleModal(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.modal') && event.target !== openButton && !event.target.matches('button') && isModalOpen) {
      toggleModal(false);
    }
  });

  const toggleSubmitButton = (isDisabled) => {
    submitButton.disabled = isDisabled;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = modal.querySelector('.modal__form');
    const formValidator = new FormValidator(form);
    formValidator.init();

    if (formValidator._validateForm()) {
      toggleSubmitButton(true);
      form.reset();

      setTimeout(() => {
        toggleSubmitButton(false);
      }, 1000);
    } else {
      modal.classList.add('is-error');
      toggleSubmitButton(false);
    }
  };

  const onClick = () => {
    modal.classList.add('is-error');
  };

  modal.addEventListener('submit', (event) => {
    onSubmit(event);
  });
  submitButton.addEventListener('click', onClick);
})();
