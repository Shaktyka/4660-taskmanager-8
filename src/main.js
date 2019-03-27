import renderFilter from './render-filter.js';
import {getRandomNumber} from './utils.js';
import makeTask from './make-task.js';
import renderTask from './render-task.js';

// Блок для вставки фильтров
const filterContainer = document.querySelector(`.main__filter`);

// Блок для вставки карточек задач
const cardContainer = document.querySelector(`.board__tasks`);

// Стартовое кол-во карточек
const startTasksNumber = 7;

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
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const taskData = makeTask();
    fragment.appendChild(renderTask(taskData));
  }
  container.appendChild(fragment);
};

// Отрисовка всего фильтра
const renderFilterList = (filtersArr, container) => {
  const fragment = document.createDocumentFragment();
  filtersArr.forEach((item) => {
    const isChecked = (item === `all`) ? true : false;
    const filter = renderFilter(item, getRandomNumber(0, 20), isChecked, renderTaskList, cardContainer);
    fragment.appendChild(filter);
  });
  container.appendChild(fragment);
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterContainer);

// Запуск стартовой отрисовки карточек
renderTaskList(startTasksNumber, cardContainer);
