import basis from '../../src/index.js';
import { getRandomValue } from '../../src/randomValue.js';

const primeTask = () => {
  const number = getRandomValue(100);
  const question = number;

  let result = 'yes';
  if (number === 0) result = 'no';
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  return [question, result];
};

const prime = () => {
  const primeNote = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  basis(primeNote, primeTask);
};

export default prime;
