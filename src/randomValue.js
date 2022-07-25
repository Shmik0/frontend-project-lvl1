const getRandomValue = (max) => Math.floor(Math.random() * max);
const getRandomOfRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

const operators = ['+', '-', '*'];
const indexOfOperator = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomOperator = () => operators[indexOfOperator(0, 3)];

export {
  getRandomValue, getRandomOfRange, getRandomOperator, operators,
};
