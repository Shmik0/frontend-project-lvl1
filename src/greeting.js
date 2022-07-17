import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

const greeting = (`Welcome to the Brain Games! \nHello, ${userName}!`);

export { greeting, userName };
