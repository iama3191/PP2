//Declaring constants
const gameOptions = ['rock','paper','scissors'];

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let optionType = this.getAttribute("data-type");
            alert(optionType);
            computerChoice();
        })
    }
})

//function for computer's choice

function computerChoice() {
    let randomChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(randomChoice);
    return randomChoice;
}

//function for comparing user and computer's choice

//function to update the score container

//function to update the round counter
