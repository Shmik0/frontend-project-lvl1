import basis from '../../src/index.js';
import { getRandomValue, getRandomOperator, operators } from '../../src/randomValue.js';

const calc = () => {
  const calcNote = 'What is the result of the expression?';

  const calcTask = () => {
    const number1 = getRandomValue(100);
    const number2 = getRandomValue(100);
    const operator = getRandomOperator(operators);

    const question = `${number1} ${operator} ${number2}`;

    let result = 0;
    if (operator === '+') {
      result = number1 + number2;
    }
    if (operator === '-') {
      result = number1 - number2;
    }
    if (operator === '*') {
      result = number1 * number2;
    }
    return [question, result];
  };
  basis(calcNote, calcTask);
};
export default calc;
