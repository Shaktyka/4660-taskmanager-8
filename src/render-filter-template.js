// Рендеринг одного пункта фильтра
const renderFilterTemplate = (filterName, taskAmount) => {
  const filterHtml = `<input type="radio" id="filter__${filterName}" class="filter__input visually-hidden" name="filter" ${taskAmount ? `` : `disabled`}><label for="filter__${filterName}" class="filter__label">${filterName}<span class="filter__${filterName}-count"> ${taskAmount}</span></label>`;

  const template = document.createElement(`template`);
  template.innerHTML = filterHtml;

  return template.content.children;
};

export default renderFilterTemplate;
