import renderTaskList from './render-task-list.js';

// Блок для вставки карточек задач
const cardContainer = document.querySelector(`.board__tasks`);

// Рендеринг одного пункта фильтра
const renderFilter = (filterName, taskAmount, isChecked = false) => {
  const string = `<input type="radio" id="filter__${filterName}" class="filter__input visually-hidden" name="filter" ${isChecked && taskAmount ? ` checked` : ``} ${taskAmount ? `` : ` disabled`}><label for="filter__${filterName}" class="filter__label">${filterName}<span class="filter__${filterName}-count"> ${taskAmount}</span></label>`;

  const template = document.createElement(`template`);
  template.innerHTML = string;

  const element = template.content.children; // HTML-коллекция

  element[0].addEventListener(`click`, () => {
    renderTaskList(taskAmount, cardContainer);
  });

  return element;
};

export default renderFilter;
