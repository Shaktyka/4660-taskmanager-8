import renderTaskList from './render-task-list.js';

// Блок для вставки карточек задач
const cardContainer = document.querySelector(`.board__tasks`);

// Обработчик клика по пункту фильтра
const addFilterClickHandler = (element, amount) => {
  element.addEventListener(`click`, function () {
    renderTaskList(amount, cardContainer);
  });
};

export default addFilterClickHandler;
