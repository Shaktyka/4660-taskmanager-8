import renderFilterTemplate from './render-filter-template.js';
import renderTaskTemplate from './render-task-template.js';

// Блок для вставки фильтров
const filterContainer = document.querySelector(`.main__filter`);


// Блок для вставки карточек задач
const cardContainer = document.querySelector(`.board__tasks`);


// Стартовое кол-во карточек
const startTasksNumber = 7;


// Инициализация списка инпутов фильтров
let filtersList = null;


// Чекнутый элемент
let checkedRadio = 0;


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
const getRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};


// Переключение радиобаттонов
const switchCheckedAttr = (element) => {
  checkedRadio.checked = false;
  element.checked = true;
  checkedRadio = element;
};


// Очистка блока от содержимого
const emptyContainer = (container) => {
  container.innerHTML = ``;
};


// Обработчик клика по пункту фильтра
const addFilterClickHandler = (element, amount) => {
  element.addEventListener(`click`, function (evt) {
    emptyContainer(cardContainer);

    const clickedFilter = evt.target;
    switchCheckedAttr(clickedFilter);

    if (amount) {
      renderTaskList(amount, cardContainer);
    }
  });
};


// Отрисовка всего фильтра
const renderFilter = (filtersArr, container) => {
  emptyContainer(container);

  const fragment = document.createDocumentFragment();

  // Отрисовка всех пунктов списка фильтра
  filtersArr.forEach((filter) => {
    const taskNumber = getRandomNumber(0, 20);

    const filterElement = Array.from(renderFilterTemplate(filter, taskNumber));

    addFilterClickHandler(filterElement[0], taskNumber);

    // Чтобы поместить элементы массива во fragment
    filterElement.forEach((item) => {
      fragment.appendChild(item);
    });
  });

  container.appendChild(fragment);
};


// Стартовый рендеринг фильтра
renderFilter(filters, filterContainer);


// Массив инпутов фильтра
filtersList = Array.from(filterContainer.querySelectorAll(`input`));


// В фильтре отмечаем первый пункт выбранным (cтартовое состояние)
filtersList[0].checked = true;
checkedRadio = filtersList[0];


// Отрисовка списка задач
const renderTaskList = (amount, container) => {
  emptyContainer(container);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const task = renderTaskTemplate();
    fragment.appendChild(task);
  }

  container.appendChild(fragment);
};


// Запуск стартовой отрисовки карточек
renderTaskList(startTasksNumber, cardContainer);
