let selectedItem = null;

export const addDocumentEventListeners = (selectItems, selectInput, selectList) => {
  document.addEventListener('click', (event) => {
    if (selectedItem && !selectItems.includes(event.target)) {
      selectedItem = null;
      selectInput.value = '';
    }
  });

  document.body.addEventListener('click', (evt) => {
    if (evt.target !== selectInput) {
      selectInput.classList.remove('select__field--shown');
      selectList.classList.remove('select__dropdown--shown');
    }
  });
};
