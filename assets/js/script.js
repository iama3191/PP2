//constants for the game. Available options.
const gameOptions = ['rock','paper','scissors'];

//From Math Project, Code Institute and adapted for this project 
//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {

        button.addEventListener('click', function() {
            if(this.getAttribute('id')==='help') {
                showHelp();
            } else {
                let optionType = this.getAttribute('id');
            console.log(`1 user's choice is ${optionType}`)
            mainGame(optionType); 
            }
        })
    }
})

//Function to show modal screen for the help button
function showHelp() {

    const backToGame = document.getElementsByClassName('back-game')[0];
    document.getElementsByClassName('modal')[0].style.display = 'block';

    backToGame.addEventListener('click', function () {
        document.getElementsByClassName('modal')[0].style.display = 'none';
    })
}

//function for getting a random option for the computer
function computerRandomChoice() {

    //this will generate a random option from the ['rock','paper','scissors']
    let randomChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomChoice;
}

//function for running the game. Will take user's choice as parameter and will compare, user's and computer's choices
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

//function for changing the computer's style if the computer loses
function computerLoses(computer) {

    if (computer === 'rock') {
        document.getElementById('rockC').classList.add('lose-computer');
        setTimeout(function (){ document.getElementById('rockC').classList.remove('lose-computer')
    }, 500);
    }
    if (computer === 'paper') {
        document.getElementById('paperC').classList.add('lose-computer');
        setTimeout(function (){ document.getElementById('paperC').classList.remove('lose-computer')
    }, 500);
    }
    if (computer === 'scissors') {
        document.getElementById('scissorsC').classList.add('lose-computer');
        setTimeout(function (){ document.getElementById('scissorsC').classList.remove('lose-computer')
    }, 500);
    }
}

//function for changing the computer's style if the computer wins
function computerWins(computer) {

    if (computer === 'rock') {
        document.getElementById('rockC').classList.add('win-computer');
        setTimeout(function (){ document.getElementById('rockC').classList.remove('win-computer')
    }, 500);
    }
    if (computer === 'paper') {
        document.getElementById('paperC').classList.add('win-computer');
        setTimeout(function (){ document.getElementById('paperC').classList.remove('win-computer')
    }, 500);
    }
    if (computer === 'scissors') {
        document.getElementById('scissorsC').classList.add('win-computer');
        setTimeout(function (){ document.getElementById('scissorsC').classList.remove('win-computer')
    }, 500);
    }
}

//function for changing the computer's style if the computer draws
function computerDraws(computer) {

    if (computer === 'rock') {
        document.getElementById('rockC').classList.add('draw-computer');
        setTimeout(function (){ document.getElementById('rockC').classList.remove('draw-computer')
    }, 500);
    }
    if (computer === 'paper') {
        document.getElementById('paperC').classList.add('draw-computer');
        setTimeout(function (){ document.getElementById('paperC').classList.remove('draw-computer')
    }, 500);
    }
    if (computer === 'scissors') {
        document.getElementById('scissorsC').classList.add('draw-computer');
        setTimeout(function (){ document.getElementById('scissorsC').classList.remove('draw-computer')
    }, 500);
    }
}

//function for changing the user's button style if he wins
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

//function for changing  the style  of the user's button if he loses
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

//function for changing  the style  of the user's button if he draws
function draw(user, computer) {

    //Add a class to the user's button if it isn't the winner choice
    document.getElementById(user).classList.add('draw-glow');
    // code from https://www.w3schools.com/jsref/met_win_settimeout.asp This will remove the lose-glow class
   setTimeout(function (){ document.getElementById(user).classList.remove('draw-glow')
  }, 500);

    computerDraws(computer);
    console.log(`it's a draw! ${user} equals ${computer}`);
}

//function to update the round counter. It will increase the round number everytime the user clicks on any option
function playRound(user, computer) {
    
    if (user && computer) {
        let roundNumber = parseInt(document.getElementById('round-number').innerText);
        document.getElementById('round-number').innerText = ++roundNumber;

        if (roundNumber > 5) {
            gameOver(user,computer);
        }   
    }  
}

//function for ending the game and announcing the ultimate winner
function gameOver() {
   //the final score from the 5th round
  const finalUserScore = parseInt(document.getElementById('user-score').textContent);
  const finalComputerScore = parseInt(document.getElementById('computer-score').textContent);

  //this is for the modal screen that will be shown after game over
  const answerBox = document.getElementsByClassName('game-results')[0];
  const battleText = document.getElementById('game-over-text');
  let restart = document.getElementsByClassName('start')[0];

  answerBox.style.display = 'block';

      if (finalUserScore === finalComputerScore) {
        battleText.innerHTML = `This is a draw! And the final score is ${finalUserScore} vs ${finalComputerScore}`;
      } else {
          if (finalUserScore > finalComputerScore) {
            battleText.innerHTML = `Congratulations! You win the game!! And the final score is ${finalUserScore} vs ${finalComputerScore}`;
          } else {
            battleText.innerHTML = `I'm so sorry. You lose!! And the final score is ${finalUserScore} vs ${finalComputerScore}`;
          }
      }

      //this will give to the user to restart the game
    restart.addEventListener('click', function() {
        answerBox.style.display = 'none';
        window.location.reload();
    })
  } 
