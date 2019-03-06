import renderElement from './utils.js';

// Рендеринг одного пункта фильтра
const renderFilter = (filterName, taskAmount, isChecked = false, renderTaskList, taskContainer, switchChecked) => {
  const string = `<input type="radio" id="filter__${filterName}" class="filter__input visually-hidden" name="filter" ${isChecked && taskAmount ? ` checked` : ``} ${taskAmount ? `` : ` disabled`}><label for="filter__${filterName}" class="filter__label">${filterName}<span class="filter__${filterName}-count"> ${taskAmount}</span></label>`;

  const element = renderElement(string);
  const input = element.querySelector(`input`);
  
  // Вешаем обработчик
  input.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    switchChecked(evt.target);
    renderTaskList(taskAmount, taskContainer);
  });

  return element;
};

export default renderFilter;
