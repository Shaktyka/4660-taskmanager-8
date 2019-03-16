import {getRandomNumber} from './utils.js';

// Список тегов
const tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `testing`,
  `question`,
  `eureka`,
  `challenge`,
  `course`
];

// Список цветов
const colors = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
];

// Список заголовков задач
const titles = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
  `Задать вопросы наставнику`,
  `Внести правки`,
  `Написать куратору`,
  `Протестировать код`
];

// Возвращает Set из num тегов
const getTags = (array, num) => {
  const tagsSet = new Set();
  while (tagsSet.size < num) {
    tagsSet.add(array[getRandomNumber(0, array.length - 1)]);
  }
  return tagsSet;
};

// Возвращает true или false
const getBoolean = () => Math.random() >= 0.5;

// Генерация рандомной даты
const getRandomDate = () => Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000;

// Возвращает объект с данными для задачи
const makeTask = () => {
  return {
    title: titles[getRandomNumber(0, titles.length - 1)],
    dueDate: getRandomDate(),
    tags: getTags(tags, getRandomNumber(0, 3)),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: colors[getRandomNumber(0, colors.length - 1)],
    repeatingDays: {
      'mo': getBoolean(),
      'tu': getBoolean(),
      'we': getBoolean(),
      'th': getBoolean(),
      'fr': getBoolean(),
      'sa': getBoolean(),
      'su': getBoolean()
    },
    isFavorite: getBoolean(),
    isDone: getBoolean()
  };
};

export default makeTask;
