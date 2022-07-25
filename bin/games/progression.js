import basis from '../../src/index.js';
import { getRandomValue, getRandomOfRange } from '../../src/randomValue.js';

const progressionTask = () => {
  const start = getRandomValue(100);
  const step = getRandomValue(100);
  const length = getRandomOfRange(5, 10);
  const sequenceNum = getRandomOfRange(0, length);

  let result = start;
  let hiddenProgression = '';
  let sum = start;
  let hiddenNum = 0;

  for (let i = 1; i < length; i += 1) {
    sum += step;
    result = `${result} ${sum}`;
    const arr = result.split(' ');
    hiddenNum = arr[sequenceNum];
    arr[sequenceNum] = '..';
    hiddenProgression = arr.join(' ');
  }
  const question = hiddenProgression;
  return [question, hiddenNum];
};

const progression = () => {
  const progressionNote = 'What number is missing in the progression?';
  basis(progressionNote, progressionTask);
};

export default progression;
