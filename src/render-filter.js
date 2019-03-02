import addFilterClickHandler from './add-filter-click-handler.js';

// Рендеринг одного пункта фильтра
const renderFilter = (filterName, taskAmount, isChecked = false) => {
  const string = `<input type="radio" id="filter__${filterName}" class="filter__input visually-hidden" name="filter" ${isChecked && taskAmount ? ` checked` : ``} ${taskAmount ? `` : ` disabled`}><label for="filter__${filterName}" class="filter__label">${filterName}<span class="filter__${filterName}-count"> ${taskAmount}</span></label>`;
  const template = document.createElement(`template`);
  template.innerHTML = string;
  
  // Повесить обработчик нажатия

  return template.content.children;
};

export default renderFilter;
