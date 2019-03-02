import renderFilter from './render-filter.js';
import renderTask from './render-task.js';
import renderTaskList from './render-task-list.js';

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


// Генерация случайного числа от min до max
const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));


// Очистка блока от содержимого
// const emptyContainer = (container) => {
//  container.innerHTML = ``;
// };


// Генерация элемента
//const getElement = (string) => {
//  const template = document.createElement(`template`);
//  template.innerHTML = string;
//  return template.content.children;
//};


// Отрисовка всего фильтра
const renderFilterList = (filtersArr, container) => {
  filtersArr.forEach((item, i) => {
    const isChecked = (i === 0) ? true : ``;
    container.insertAdjacentHTML(`beforeend`, renderFilter(item, getRandomNumber(0, 20), isChecked));
  });
};
// addFilterClickHandler(element?, taskNumber);


// Стартовый рендеринг фильтра
renderFilterList(filters, filterContainer);

// Запуск стартовой отрисовки карточек
renderTaskList(startTasksNumber, cardContainer);
