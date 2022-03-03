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

//function for run the game. Will take user's choice as parameter and will compare, user's and computer's choices and say who won.
function mainGame(userChoice) {

    let computerChoice = computerRandomChoice();
    console.log(`2 computer's choice is ${computerChoice}`)
    if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    } else { //if userChoice is different to computerSelection
        if (((userChoice === 'rock') && (computerChoice === 'scissors')) || ((userChoice === 'paper') && (computerChoice === 'rock')) || ((userChoice === 'scissors') && (computerChoice === 'paper'))) {
            userWins(userChoice, computerChoice);
        } else {
            userLoses(userChoice, computerChoice);
        }
    }
}

//function that will change the style  of the user's button if he wins

function userWins(user, computer) {

    //It will take the integer part of the user score and then will increment by 1 if the user wins
    let userScore = parseInt(document.getElementById('user-score').innerText);
    document.getElementById('user-score').innerText = ++userScore;
    console.log(`3 you win! ${user} beats ${computer}`);
}
//function that will change the style  of the loser's button
function userLoses(user, computer) {
    
    //It will take the integer part of the computer score and then will increment by 1 if the user loses
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScore;
    console.log(`3 you loose! ${computer}beats ${user} `);
}

function draw(user, computer) {
   
    console.log("it's a draw!")
}
//function to update the score container

//function to update the round counter
