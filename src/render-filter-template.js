// Рендеринг одного пункта фильтра
const renderFilterTemplate = (filterName, taskAmount, isChecked = false) => {
  return `<input type="radio" id="filter__${filterName}" class="filter__input visually-hidden" name="filter" ${isChecked && taskAmount ? ` checked` : ``} ${taskAmount ? `` : ` disabled`}><label for="filter__${filterName}" class="filter__label">${filterName}<span class="filter__${filterName}-count"> ${taskAmount}</span></label>`;
};

export default renderFilterTemplate;
