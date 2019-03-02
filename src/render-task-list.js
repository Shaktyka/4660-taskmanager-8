import renderTask from './render-task.js';

// Отрисовка списка задач
const renderTaskList = (amount, container) => {
  container.innerHTML = ``;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const task = renderTask();
    console.log(task);
    fragment.appendChild(task);
  }

  container.appendChild(fragment);
};

export default renderTaskList;
