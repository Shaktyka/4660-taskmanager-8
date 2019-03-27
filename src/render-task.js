import {renderElement, addLeadZero} from './utils.js';

// Массив, из которого будет браться название месяца
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

// Поиск факта наличия повтора задач
const findRepeatedDay = (obj) => Object.values(obj).some((it) => it);

// Рендеринг одной задачи
const renderTask = (taskData) => {

  const calendarDate = new Date(taskData.dueDate);
  const repeat = findRepeatedDay(taskData.repeatingDays);

  const string = `<article class="card card--${taskData.color} ${repeat ? `card--repeat` : ``}">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">edit</button>
        <button type="button" class="card__btn card__btn--archive">archive</button>
        <button type="button" class="card__btn card__btn--favorites ${taskData.isFavorite ? `card__btn--disabled` : ``}">favorites</button>
      </div>

      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <label>
          <textarea class="card__text" placeholder="Start typing your text here..." name="text">${taskData.title}</textarea>
        </label>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
              date: <span class="card__date-status">${taskData.dueDate ? `yes` : `no`}</span>
            </button>

            <fieldset class="card__date-deadline" ${taskData.dueDate ? `` : `disabled`}>
              <label class="card__input-deadline-wrap">
                <input class="card__date" type="text" placeholder="${calendarDate.getDate()} ${months[calendarDate.getMonth() - 1]}" name="date" />
              </label>

              <label class="card__input-deadline-wrap">
                <input class="card__time" type="text" placeholder="${calendarDate.getHours()}:${addLeadZero(calendarDate.getMinutes())} ${calendarDate.getHours() >= 12 ? `PM` : `AM`}" name="time" />
              </label>
            </fieldset>

            <button class="card__repeat-toggle" type="button">
              repeat: <span class="card__repeat-status">${repeat ? `yes` : `no`}</span>
            </button>

            <fieldset class="card__repeat-days" ${repeat ? `` : `disabled`}>
              <div class="card__repeat-days-inner">
                <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-5" name="repeat" value="mo" ${taskData.repeatingDays.mo ? `checked` : ``} />
                <label class="card__repeat-day" for="repeat-mo-5">mo</label>

                <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-5" name="repeat" value="tu" ${taskData.repeatingDays.tu ? `checked` : ``} />
                <label class="card__repeat-day" for="repeat-tu-5">tu</label>

                <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-5" name="repeat" value="we" ${taskData.repeatingDays.we ? `checked` : ``} />
                <label class="card__repeat-day" for="repeat-we-5" >w</label>

                <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-5" name="repeat" value="th" ${taskData.repeatingDays.th ? `checked` : ``} />
                <label class="card__repeat-day" for="repeat-th-5">th</label>

                <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-5" name="repeat" value="fr" ${taskData.repeatingDays.fr ? `checked` : ``} />
                <label class="card__repeat-day" for="repeat-fr-5" >fr</label>

                <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-sa-5" name="repeat" value="sa" ${taskData.repeatingDays.sa ? `checked` : ``} />
                <label class="card__repeat-day" for="repeat-sa-5">sa</label>

                <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-5" name="repeat" value="su" ${taskData.repeatingDays.su ? `checked` : ``} />
                <label class="card__repeat-day" for="repeat-su-5" >su</label>
              </div>
            </fieldset>
          </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list">
              ${(Array.from(taskData.tags).map((tag) => (`
                <span class="card__hashtag-inner">
                  <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input" />
                  <button type="button" class="card__hashtag-name">#${tag}</button>
                  <button type="button" class="card__hashtag-delete">delete</button>
                </span>`.trim()))).join(``)}
            </div>

            <label>
              <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here" />
            </label>
          </div>
        </div>

        <label class="card__img-wrap ${taskData.picture ? `` : `card__img-wrap--empty`}">
          <input type="file" class="card__img-input visually-hidden" name="img" />
          <img src="${taskData.picture}" alt="task picture" class="card__img"/>
        </label>

        <div class="card__colors-inner">
          <h3 class="card__colors-title">Color</h3>
          <div class="card__colors-wrap">
            <input type="radio" id="color-black-5" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" />
            <label for="color-black-5" class="card__color card__color--black">black</label>

            <input type="radio" id="color-yellow-5" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow" />
            <label for="color-yellow-5" class="card__color card__color--yellow">yellow</label>

            <input type="radio" id="color-blue-5" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue" />
            <label for="color-blue-5" class="card__color card__color--blue">blue</label>

            <input type="radio" id="color-green-5" class="card__color-input card__color-input--green visually-hidden" name="color" value="green" />
            <label for="color-green-5" class="card__color card__color--green">green</label>

            <input type="radio" id="color-pink-5" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink" />
            <label for="color-pink-5" class="card__color card__color--pink">pink</label>
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

  return renderElement(string);
};

export default renderTask;
