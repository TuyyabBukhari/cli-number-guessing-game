import inquirer from 'inquirer';

export default async function App() {

const randomNumber= Math.floor (Math.random() * 100) + 1;
let attempts= 0;

async function guessNumber() {
    const answer= await inquirer.prompt(
        {
            type: 'input',
            name: 'guess',
            message: 'Guess the number between (1 to 100)',
        }
    );
    const userGuess= parseInt(answer.guess);
    attempts++;

    if (userGuess === randomNumber){
        console.log(`Congratulation! You guess the ${randomNumber} in ${attempts} attempts.`);

    }
    else if (userGuess < randomNumber){
        console.log("Try a greater number.");
        guessNumber();
    }
    else {
        console.log("Try a smaller number.");
        guessNumber();
    }
}
console.log('Welcome to the Number Guessing Game!');
console.log('Try to guess the number between 1 and 100.');

await guessNumber();

};