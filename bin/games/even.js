import basis from '../../src/index.js';
import { getRandomValue } from '../../src/randomValue.js';

const evenTask = () => {
  const number = getRandomValue(100);
  const question = number;

  const result = number % 2 === 0 ? 'yes' : 'no';
  return [question, result];
};

const even = () => {
  const evenNote = 'Answer "yes" if the number is even, otherwise answer "no".';
  basis(evenNote, evenTask);
};

export default even;
