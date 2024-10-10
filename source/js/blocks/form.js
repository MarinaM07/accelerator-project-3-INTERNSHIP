import { FormValidator } from './form/form-validator.js';
import { FormSubmitter } from './form/form-submitter.js';

const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__submit-button');
const validator = new FormValidator(form);
const submitter = new FormSubmitter(form, validator, submitButton);

validator.init();
submitter.init();
