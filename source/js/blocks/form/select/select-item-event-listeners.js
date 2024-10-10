const isSpaceKey = (evt) => evt.key === ' ';
const isEnterKey = (evt) => evt.key === 'Enter';

let selectedItem = null;
const selectList = document.querySelector('.select__dropdown');


export const addSelectItemEventListeners = (item, selectInput) => {
  item.setAttribute('tabindex', '0');
  item.addEventListener('mouseover', () => {
    if (!selectedItem) {
      selectInput.value = item.innerText;
    }
  });
  item.addEventListener('mouseout', () => {
    if (!selectedItem) {
      selectInput.value = '';
    }
  });
  item.addEventListener('click', () => {
    selectedItem = item;
    selectInput.value = item.innerText;
    selectInput.setCustomValidity('');
    selectInput.classList.remove('is-error');
  });
  item.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt) || isSpaceKey(evt)) {
      selectInput.value = evt.target.innerText;
      selectList.classList.remove('select__dropdown--shown');
      selectInput.classList.remove('select__field--shown');
      selectList.blur();
    }
  });
};
