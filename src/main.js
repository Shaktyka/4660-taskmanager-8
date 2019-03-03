import renderFilter from './render-filter.js';
import renderTaskList from './render-task-list.js';
import getRandomNumber from './utils.js';

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

// Отрисовка всего фильтра
const renderFilterList = (filtersArr, container) => {
  filtersArr.forEach((item) => {
    const isChecked = (item === `all`) ? true : ``;

    // const filter = Array.from(renderFilter(item, getRandomNumber(0, 20), isChecked));
    // filter.forEach((it) => {
    // container.appendChild(it);
    // });

    const filter = renderFilter(item, getRandomNumber(0, 20), isChecked);
    console.log(filter);
    for (let val of filter) {
      // console.log(val);
      container.appendChild(val);
    }
  });
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterContainer);

// Запуск стартовой отрисовки карточек
renderTaskList(startTasksNumber, cardContainer);
