import readlineSync from 'readline-sync';

const basis = (gameNote, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameNote);

  for (let i = 0; i < 3; i += 1) {
    const questionAndResult = task();
    console.log('Question:', questionAndResult[0].toString());
    const answer = readlineSync.question('Your answer: ');

    const rightAnswer = questionAndResult[1].toString();

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default basis;
