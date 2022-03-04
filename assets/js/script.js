//Constants declaration
const gameOptions = ['rock','paper','scissors'];

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {

        button.addEventListener('click', function() {
            let optionType = this.getAttribute('id');
            console.log(`1 user's choice is ${optionType}`)
            mainGame(optionType); 
        })
    }
})

//function for getting a random option for the computer
function computerRandomChoice() {

    //this will generate a random option from the ['rock','paper','scissors']
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
    playRound(userChoice, computerChoice);
}

//function that change the computer's option style if the computer loses
function computerLoses(computer) {

    if (computer === 'rock') {
        document.getElementById('rockC').classList.add('lose-glow');
        setTimeout(function (){ document.getElementById('rockC').classList.remove('lose-glow')
    }, 500);
    }
    if (computer === 'paper') {
        document.getElementById('paperC').classList.add('lose-glow');
        setTimeout(function (){ document.getElementById('paperC').classList.remove('lose-glow')
    }, 500);
    }
    if (computer === 'scissors') {
        document.getElementById('scissorsC').classList.add('lose-glow');
        setTimeout(function (){ document.getElementById('scissorsC').classList.remove('lose-glow')
    }, 500);
    }
}

//function that change the computer's option style if the computer wins
function computerWins(computer) {

    if (computer === 'rock') {
        document.getElementById('rockC').classList.add('win-glow');
        setTimeout(function (){ document.getElementById('rockC').classList.remove('win-glow')
    }, 500);
    }
    if (computer === 'paper') {
        document.getElementById('paperC').classList.add('win-glow');
        setTimeout(function (){ document.getElementById('paperC').classList.remove('win-glow')
    }, 500);
    }
    if (computer === 'scissors') {
        document.getElementById('scissorsC').classList.add('win-glow');
        setTimeout(function (){ document.getElementById('scissorsC').classList.remove('win-glow')
    }, 500);
    }
}

//function that will change the style  of the user's button if he wins
function userWins(user, computer) {

    //It will take the integer part of the user score and then will increment by 1 if the user wins
    let userScore = parseInt(document.getElementById('user-score').innerText);
    document.getElementById('user-score').innerText = ++userScore;
    //Add a class to the user's button if it is the winner choice
    document.getElementById(user).classList.add('win-glow');
    // code from https://www.w3schools.com/jsref/met_win_settimeout.asp This will remove the lose-glow class
    setTimeout(function (){ document.getElementById(user).classList.remove('win-glow')
    }, 500);

    computerLoses(computer);
    console.log(`3 you win! ${user} beats ${computer}`);
}

//function that will change the style  of the loser's button
function userLoses(user, computer) {
    
    //It will take the integer part of the computer score and then will increment by 1 if the user loses
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScore;
     //Add a class to the user's button if it isn't the winner choice
     document.getElementById(user).classList.add('lose-glow');
      // code from https://www.w3schools.com/jsref/met_win_settimeout.asp This will remove the lose-glow class
     setTimeout(function (){ document.getElementById(user).classList.remove('lose-glow')
    }, 500);

    computerWins(computer);

    console.log(`3 you loose! ${computer} beats ${user}`);
}

function draw(user, computer) {

    //Add a class to the user's button if it isn't the winner choice
    document.getElementById(user).classList.add('draw-glow');
    // code from https://www.w3schools.com/jsref/met_win_settimeout.asp This will remove the lose-glow class
   setTimeout(function (){ document.getElementById(user).classList.remove('draw-glow')
  }, 500);


    console.log(`it's a draw! ${user} equals ${computer}`);
}

//function to update the round counter. It will increase the round number everytime the user clicks on any option
function playRound(user, computer) {
    
    if (user && computer) {
        let roundNumber = parseInt(document.getElementById('round-number').innerText);
        document.getElementById('round-number').innerText = ++roundNumber;
    }
}