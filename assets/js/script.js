//Declaring constants
const gameOptions = ['rock','paper','scissors'];

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function() {
            let optionType = this.getAttribute("data-type");
            console.log(`1 user's choice is ${optionType}`)
            mainGame(optionType);
            
        })
    }
})

/**
 * function for getting a random option for the computer
 */
function computerRandomChoice() {

    let randomChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomChoice;
}

//function for run the game 
function mainGame(userChoice) {

    let computerChoice = computerRandomChoice();
    console.log(`2 computer's choice is ${computerChoice}`)
    if (userChoice === computerChoice) {
        console.log("this is a draw!");
    } else { //if userChoice is different to computerSelection
        if (((userChoice === 'rock') && (computerChoice === 'scissors')) || ((userChoice === 'paper') && (computerChoice === 'rock')) || ((userChoice === 'scissors') && (computerChoice === 'paper'))) {
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
        } else {
            console.log(`You loose! ${computerChoice} beats ${userChoice}`);
        }
    }
}
//function for comparing user and computer's choice

//function to update the score container

//function to update the round counter
