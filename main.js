`use strict`;

// Блок для вставки фильтров
const filterContainer = document.querySelector('.main__filter');


// Блок для вставки карточек задач
const cardContainer = document.querySelector('.board__tasks');


// Стартовое кол-во карточек
const startTasksNumber = 7;


// Инициализация списка инпутов фильтров, 
let filtersList = null;


// Чекнутый элемент
let checkedRadio = null;


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


// Шаблон карточки
const taskTemplate = `<article class="card card--pink card--repeat">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >
It is example of repeating task. It marks by wave.</textarea
                    >
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">no</span>
                      </button>

                      <fieldset class="card__date-deadline" disabled>
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder="23 September"
                            name="date"
                          />
                        </label>
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__time"
                            type="text"
                            placeholder="11:15 PM"
                            name="time"
                          />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">no</span>
                      </button>

                      <fieldset class="card__repeat-days" disabled>
                        <div class="card__repeat-days-inner">
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-mo-2"
                            name="repeat"
                            value="mo"
                          />
                          <label class="card__repeat-day" for="repeat-mo-2"
                            >mo</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-tu-2"
                            name="repeat"
                            value="tu"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-tu-2"
                            >tu</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-we-2"
                            name="repeat"
                            value="we"
                          />
                          <label class="card__repeat-day" for="repeat-we-2"
                            >we</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-th-2"
                            name="repeat"
                            value="th"
                          />
                          <label class="card__repeat-day" for="repeat-th-2"
                            >th</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-fr-2"
                            name="repeat"
                            value="fr"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-fr-2"
                            >fr</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            name="repeat"
                            value="sa"
                            id="repeat-sa-2"
                          />
                          <label class="card__repeat-day" for="repeat-sa-2"
                            >sa</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-su-2"
                            name="repeat"
                            value="su"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-su-2"
                            >su</label
                          >
                        </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        <span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="repeat"
                            class="card__hashtag-hidden-input"
                          />
                          <button type="button" class="card__hashtag-name">
                            #repeat
                          </button>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>

                        <span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="repeat"
                            class="card__hashtag-hidden-input"
                          />
                          <button type="button" class="card__hashtag-name">
                            #cinema
                          </button>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>

                        <span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="repeat"
                            class="card__hashtag-hidden-input"
                          />
                          <button type="button" class="card__hashtag-name">
                            #entertaiment
                          </button>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>
                      </div>

                      <label>
                        <input
                          type="text"
                          class="card__hashtag-input"
                          name="hashtag-input"
                          placeholder="Type new hashtag here"
                        />
                      </label>
                    </div>
                  </div>

                  <label class="card__img-wrap card__img-wrap--empty">
                    <input
                      type="file"
                      class="card__img-input visually-hidden"
                      name="img"
                    />
                    <img
                      src="img/add-photo.svg"
                      alt="task picture"
                      class="card__img"
                    />
                  </label>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input
                        type="radio"
                        id="color-black-2"
                        class="card__color-input card__color-input--black visually-hidden"
                        name="color"
                        value="black"
                      />
                      <label
                        for="color-black-2"
                        class="card__color card__color--black"
                        >black</label
                      >
                      <input
                        type="radio"
                        id="color-yellow-2"
                        class="card__color-input card__color-input--yellow visually-hidden"
                        name="color"
                        value="yellow"
                      />
                      <label
                        for="color-yellow-2"
                        class="card__color card__color--yellow"
                        >yellow</label
                      >
                      <input
                        type="radio"
                        id="color-blue-2"
                        class="card__color-input card__color-input--blue visually-hidden"
                        name="color"
                        value="blue"
                      />
                      <label
                        for="color-blue-2"
                        class="card__color card__color--blue"
                        >blue</label
                      >
                      <input
                        type="radio"
                        id="color-green-2"
                        class="card__color-input card__color-input--green visually-hidden"
                        name="color"
                        value="green"
                      />
                      <label
                        for="color-green-2"
                        class="card__color card__color--green"
                        >green</label
                      >
                      <input
                        type="radio"
                        id="color-pink-2"
                        class="card__color-input card__color-input--pink visually-hidden"
                        name="color"
                        value="pink"
                        checked
                      />
                      <label
                        for="color-pink-2"
                        class="card__color card__color--pink"
                        >pink</label
                      >
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`;


// Генерация случайного числа от min до max
const getRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};


// Отметка радиобаттона выбранным
const setCheckedAttr = (element) => {
  element.checked = true;
  checkedRadio = element;
};


// Сброс checked с радиобаттонов
const resetCheckedAttr = (elements) => {
//  elements.forEach((item) => {
//    if (item.checked) {
//      item.checked = false;
//    }
//  });
};


// Очистка блока от содержимого
const emptyContainer = (container) => {
  container.innerHTML = ``;
};


// Обработчик клика по пункту фильтра
const filterClickHandler = (evt) => {
  resetCheckedAttr(filtersList);
  emptyContainer(cardContainer);
    
  const clickedFilter = evt.target;
  setCheckedAttr(clickedFilter);
    
  const spanElement = clickedFilter.nextSibling.querySelector(`span`);
  const taskNumber = Number(spanElement.textContent);
    
  if (taskNumber) {
    renderTaskList(taskNumber, cardContainer);
  }
};


// Рендеринг одного пункта фильтра
const renderFilterElement = (filterName, taskAmount) => {
  // $disabledValue = (taskAmount) ? false : true;

  const filterHtml = `<input type="radio" id="filter__${filterName}" class="filter__input visually-hidden" name="filter"><label for="filter__${filterName}" class="filter__label">${filterName}<span class="filter__${filterName}-count"> ${taskAmount}</span></label>`;
    
  const template = document.createElement('template');
  template.innerHTML = filterHtml;
    
  template.content.children[0].addEventListener(`click`, filterClickHandler);

  return template.content.children;
};


// Отрисовка всего фильтра
const renderFilter = (filters, container) => {
  emptyContainer(container);
    
  const fragment = document.createDocumentFragment();
    
  // Отрисовка всех пунктов списка фильтра
  filters.forEach((item) => {
    const taskNumber = getRandomNumber(0, 20);
    
    const filterElement = Array.from(renderFilterElement(item, taskNumber));
    
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
setCheckedAttr(filtersList[0]);


// Рендеринг одной задачи
const renderTask = (taskHtml) => {
  const template = document.createElement('template');
  template.innerHTML = taskHtml;
  const element = template.content;
  
  return element;
};


// Отрисовка списка задач
const renderTaskList = (amount, container) => {
  emptyContainer(container);
    
  const fragment = document.createDocumentFragment();
    
  for (let i = 0; i < amount; i++) {
    const task = renderTask(taskTemplate);
    fragment.appendChild(task);
  }
    
  container.appendChild(fragment);
};


// Запуск стартовой отрисовки карточек
renderTaskList(startTasksNumber, cardContainer);
