export class FormSubmitter {
  constructor(form, validator, submitButton) {
    this.form = form;
    this.validator = validator;
    this.submitButton = submitButton;
    this.submitButton.addEventListener('click', this.handleClick.bind(this));
  }

  submitForm(event) {
    event.preventDefault();
    if (this.validator._validateForm()) {
      this.form.submit();
    } else {
      this.form.classList.add('is-error');
      this.validator.formElements.forEach((element) => {
        element.reportValidity();
      });
    }
  }

  init() {
    this.form.addEventListener('submit', (event) => {
      this.submitForm(event);
    });
  }

  handleClick = () => {
    if (!this.form.classList.contains('is-error')) {
      this.form.classList.add('is-error');
    }
  };
}
