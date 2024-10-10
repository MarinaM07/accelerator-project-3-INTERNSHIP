export class FormValidator {
  constructor(form) {
    this.form = form;
    this.inputs = this.form.querySelectorAll('input, textarea');
    this.formElements = Array.from(this.inputs);
  }

  _validateForm() {

    let isValid = true;

    this.formElements.forEach((element) => {
      if (element.name === 'phone') {
        const phoneValue = element.value.replace(/[^0-9]/g, '');
        if (!phoneValue.match(/^\d{11}$/)) {
          element.setCustomValidity('Введите данные в указанном формате.');
          isValid = false;
        } else {
          element.setCustomValidity('');
        }

      } else if (element.name === 'city') {
        if (element.value.trim() === '') {
          element.setCustomValidity('Заполните это поле.');
          isValid = false;
        } else {
          element.setCustomValidity('');
        }

      } else if (element.name === 'name') {
        const nameValue = element.value.trim();
        if (nameValue === '' || /^\s+$/.test(nameValue)) {
          element.setCustomValidity('Заполните это поле.');
          isValid = false;
        } else {
          element.setCustomValidity('');
        }

      } else if (!element.checkValidity()) {
        element.setCustomValidity(element.validationMessage);
        isValid = false;
      } else {
        element.setCustomValidity('');
        element.reportValidity();
      }
    });

    if (!isValid) {
      this.formElements.forEach((element) => {
        element.reportValidity();
      });
    }

    return isValid;
  }


  init() {
    this.formElements.forEach((element) => {
      element.addEventListener('input', () => {
        element.setCustomValidity('');
      });
    });
  }
}
