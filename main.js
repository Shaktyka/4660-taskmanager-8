`use strict`;

// Блок для вставки фильтра
const filterContainer = document.querySelector('.main__filter');

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
    container.innerHTML = '';
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




