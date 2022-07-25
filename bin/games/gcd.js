import basis from '../../src/index.js';
import { getRandomValue } from '../../src/randomValue.js';

const gcdTask = () => {
  const number1 = getRandomValue(100);
  const number2 = getRandomValue(100);
  const question = `${number1} ${number2}`;

  const minNumber = (number1 <= number2) ? number1 : number2;
  const maxNumber = (number1 > number2) ? number1 : number2;

  let result = 0;
  for (let i = 1; i <= minNumber / 2; i += 1) {
    if (minNumber % i === 0 && maxNumber % i === 0) {
      result = i;
    }
  }
  if (maxNumber % minNumber === 0) {
    result = minNumber;
  }
  return [question, result];
};

const gcd = () => {
  const gcdNote = 'Find the greatest common divisor of given numbers.';
  basis(gcdNote, gcdTask);
};

export default gcd;
