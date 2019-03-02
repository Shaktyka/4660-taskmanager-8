// Обработчик клика по пункту фильтра
const addFilterClickHandler = (element, amount) => {
  element.addEventListener(`click`, function () {
    emptyContainer(cardContainer);
    renderTaskList(amount, cardContainer);
    });
};

export default addFilterClickHandler;