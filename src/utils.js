// Генерация случайного числа от min до max
export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

// Добавляет 0 к количеству минут < 10
export const addLeadZero = (units) => units < 10 ? (`0` + units) : units;

// Генерирует элемент из строки
export const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

export default renderElement;
