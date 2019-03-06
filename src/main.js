import renderFilter from './render-filter.js';
import {getRandomNumber} from './utils.js';
import renderTask from './render-task.js';

// Блок для вставки фильтров
const filterContainer = document.querySelector(`.main__filter`);

// Блок для вставки карточек задач
const cardContainer = document.querySelector(`.board__tasks`);

// Стартовое кол-во карточек
const startTasksNumber = 7;

// Чекнутый фильтр
let isCheckedFilter = null;

// Список фильтров
const filters = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `tags`,
  `archive`
];

// Отрисовка списка задач
const renderTaskList = (amount, container) => {
  container.innerHTML = ``;

  for (let i = 0; i < amount; i++) {
    container.appendChild(renderTask());
  }
};

// Отрисовка всего фильтра
const renderFilterList = (filtersArr, container) => {
  filtersArr.forEach((item) => {
    const isChecked = (item === `all`) ? true : false;
    const filter = renderFilter(item, getRandomNumber(0, 20), isChecked, renderTaskList, cardContainer);
    container.appendChild(filter);
  });
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterContainer);

// Запуск стартовой отрисовки карточек
renderTaskList(startTasksNumber, cardContainer);
