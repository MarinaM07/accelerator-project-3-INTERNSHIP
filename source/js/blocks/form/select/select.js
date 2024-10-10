import { addSelectItemEventListeners } from './select-item-event-listeners';
import { addSelectInputEventListeners } from './select-input-event-listeners';
import { addDocumentEventListeners } from './document-event-listeners';

(function () {
  const selects = document.querySelectorAll('.select');

  selects.forEach((select) => {
    const selectList = select.querySelector('.select__dropdown');
    const selectInput = select.querySelector('.select__field');
    const selectItems = select.querySelectorAll('.select__option');

    selectItems.forEach((item) => {
      addSelectItemEventListeners(item, selectInput);
    });

    addSelectInputEventListeners(selectInput, selectList);
    addDocumentEventListeners(selectItems, selectInput, selectList);
  });
})();
