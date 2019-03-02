import renderTask from './render-task.js';

// Отрисовка списка задач
const renderTaskList = (amount, container) => {
  container.innerHTML = ``;

  for (let i = 0; i < amount; i++) {
    container.appendChild(renderTask());
  }
};

export default renderTaskList;
