import renderFilterTemplate from './render-filter-template.js';
import renderTaskTemplate from './render-task-template.js';


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


// Обработчик клика по пункту фильтра
// const addFilterClickHandler = (element, amount) => {
//  element.addEventListener(`click`, function () {
//    emptyContainer(cardContainer);
//    renderTaskList(amount, cardContainer);
//  });
// };


// Отрисовка всего фильтра
const renderFilter = (filtersArr, container) => {
  filtersArr.forEach((item, i) => {
    const isChecked = (i === 0) ? true : ``;
    container.insertAdjacentHTML(`beforeend`, renderFilterTemplate(item, getRandomNumber(0, 20), isChecked));
  });
  // addFilterClickHandler(element?, taskNumber);
};


// Стартовый рендеринг фильтра
renderFilter(filters, filterContainer);


// Отрисовка списка задач
const renderTaskList = (amount, container) => {
  for (let i = 0; i < amount; i++) {
    container.insertAdjacentHTML(`beforeend`, renderTaskTemplate());
  }
};


// Запуск стартовой отрисовки карточек
renderTaskList(startTasksNumber, cardContainer);
