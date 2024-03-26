#!/ user/bin/env node
import inquirer from "inquirer";
// guessing the number
const randomNumber = Math.floor(Math.random() * 20 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 20:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Your number is correct and you won the game");
}
else {
    console.log("Sorry! you guess wrong number try again");
}
