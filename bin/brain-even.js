#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNum = (max) => Math.floor(Math.random() * max);

const evenOrOdd = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    let result;
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    if (result === answer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
console.log(evenOrOdd(getRandomNum));
