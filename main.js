`use strict`;

// Блок для вставки фильтра
const filterContainer = document.querySelector('.main__filter');
const cardContainer = document.querySelector('.board__tasks');


// Стартовое кол-во карточек
const startTasks = 7;


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
  const rand = min + Math.floor(Math.random() * (max + 1 - min));
  return rand;
};


// Отмечаем чекбокс выбранным
const setChecked = (element) => {
    element.checked = `checked`;
};


// Рендеринг одного пункта фильтра
renderFilterElement = (filterName) => {
    const taskAmount = ` ` + getRandomNumber(0, 20);
    
    const filterHtml = `<input type="radio" id="filter__${filterName}" class="filter__input visually-hidden" name="filter"><label for="filter__${filterName}" class="filter__label">${filterName}<span class="filter__${filterName}-count">${taskAmount}</span></label>`;
    
    var template = document.createElement('template');
    template.innerHTML = filterHtml;
    
    const element = template.cloneNode(true).content;
    
    // Добавляем disabled, если в счётчике 0
    if (element.querySelector(`span`).innerHTML.trim() === `0`) {
        element.querySelector(`input`).disabled = `disabled`;
    }
    
    return element;
};


// Отрисовка фильтра
const renderFilter = (filters, container) => {
    container.innerHTML = ``;
    const fragment = document.createDocumentFragment();
    
    // Запуск отрисовки всех пунктов списка фильтра
    filters.forEach((item)=> {
        const filterElement = renderFilterElement(item);
        fragment.appendChild(filterElement);
    });
    
    container.appendChild(fragment);
};


// Рендерим фильтр
renderFilter(filters, filterContainer);


// Шаблон карточки
const cardTemplate = `<article class="card card--edit card--black">
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
                  <svg width="100%" height="10">
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
This is example of new task, you can add picture, set date and time, add tags.</textarea
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
                            id="repeat-mo-1"
                            name="repeat"
                            value="mo"
                          />
                          <label class="card__repeat-day" for="repeat-mo-1"
                            >mo</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-tu-1"
                            name="repeat"
                            value="tu"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-tu-1"
                            >tu</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-we-1"
                            name="repeat"
                            value="we"
                          />
                          <label class="card__repeat-day" for="repeat-we-1"
                            >we</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-th-1"
                            name="repeat"
                            value="th"
                          />
                          <label class="card__repeat-day" for="repeat-th-1"
                            >th</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-fr-1"
                            name="repeat"
                            value="fr"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-fr-1"
                            >fr</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            name="repeat"
                            value="sa"
                            id="repeat-sa-1"
                          />
                          <label class="card__repeat-day" for="repeat-sa-1"
                            >sa</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-su-1"
                            name="repeat"
                            value="su"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-su-1"
                            >su</label
                          >
                        </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list"></div>

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
                        id="color-black-1"
                        class="card__color-input card__color-input--black visually-hidden"
                        name="color"
                        value="black"
                        checked
                      />
                      <label
                        for="color-black-1"
                        class="card__color card__color--black"
                        >black</label
                      >
                      <input
                        type="radio"
                        id="color-yellow-1"
                        class="card__color-input card__color-input--yellow visually-hidden"
                        name="color"
                        value="yellow"
                      />
                      <label
                        for="color-yellow-1"
                        class="card__color card__color--yellow"
                        >yellow</label
                      >
                      <input
                        type="radio"
                        id="color-blue-1"
                        class="card__color-input card__color-input--blue visually-hidden"
                        name="color"
                        value="blue"
                      />
                      <label
                        for="color-blue-1"
                        class="card__color card__color--blue"
                        >blue</label
                      >
                      <input
                        type="radio"
                        id="color-green-1"
                        class="card__color-input card__color-input--green visually-hidden"
                        name="color"
                        value="green"
                      />
                      <label
                        for="color-green-1"
                        class="card__color card__color--green"
                        >green</label
                      >
                      <input
                        type="radio"
                        id="color-pink-1"
                        class="card__color-input card__color-input--pink visually-hidden"
                        name="color"
                        value="pink"
                      />
                      <label
                        for="color-pink-1"
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


// Рендеринг одной карточки
renderTask = (card) => {
    const div = document.createElement(`div`);
    div.innerHTML = card;
    return div;
};


// Отрисовка списка задач
const renderTaskList = (amount, container) => {
    container.innerHTML = ``;
    const fragment = document.createDocumentFragment();
    
    // Отрисовка всех задач
    for (let i = 0; i < amount; i++) {
        const task = renderTask(cardTemplate);
        fragment.appendChild(task);
    }
    
    container.appendChild(fragment);
};


// Обработчик клика по пункту фильтра
const filterClickHandler = (evt) => {
    cardContainer.innerHTML = ``;
    
    const clickedFilter = evt.target;
    const label = clickedFilter.nextSibling.querySelector(`span`);
    const taskNumber = label.textContent.trim();
    
    if (taskNumber) {
        renderTaskList(taskNumber, cardContainer);
    }
};

// Массив инпутов фильтра 
const filtersList = Array.from(filterContainer.querySelectorAll(`input`));

// В фильтре отмечаем пункт All выбранным (cтартовое состояние)
setChecked(filtersList[0]);

// Вешаем обработчики на инпуты в фильтрах
filtersList.forEach((item) => {
    item.addEventListener(`click`, filterClickHandler);
});

// Запуск стартовой отрисовки карточек
renderTaskList(startTasks, cardContainer);
