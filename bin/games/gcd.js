import basis from '../../src/index.js';
import { getRandomValue } from '../../src/randomValue.js';

const gcdTask = () => {
  const number1 = getRandomValue(100);
  const number2 = getRandomValue(100);
  const question = `${number1} ${number2}`;

  let result = 0;
  for (let i = 1; i <= number1 / 2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  if (number2 % number1 === 0) {
    result = number1;
  }
  if (number1 % number2 === 0) {
    result = number2;
  }
  return [question, result];
};

const gcd = () => {
  const gcdNote = 'Find the greatest common divisor of given numbers.';
  basis(gcdNote, gcdTask);
};

export default gcd;
