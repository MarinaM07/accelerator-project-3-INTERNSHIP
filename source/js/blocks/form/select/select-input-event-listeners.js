const isSpaceKey = (evt) => evt.key === ' ';

export const addSelectInputEventListeners = (selectInput, selectList) => {
  selectInput.addEventListener('click', (evt) => {
    evt.preventDefault();
    selectInput.classList.toggle('select__field--shown');
    selectList.classList.toggle('select__dropdown--shown');
  });

  selectInput.addEventListener('keydown', (evt) => {
    if (isSpaceKey(evt) && !selectList.classList.contains('select__dropdown--shown')) {
      evt.preventDefault();
      selectInput.classList.add('select__field--shown');
      selectList.classList.add('select__dropdown--shown');
    } else if (evt.key !== 'Tab') {
      evt.preventDefault();
    }
  });
};
