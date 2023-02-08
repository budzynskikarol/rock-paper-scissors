const playerPointsSpan = document.querySelector(".player-points");
const computerPointsSpan = document.querySelector(".computer-points");
const optionsButtons = document.querySelectorAll(".options button");
const playerChoiceSpan = document.querySelector(".player-choice");
const computerChoiceSpan = document.querySelector(".computer-choice");
const resultText = document.querySelector(".result-text");
const resetGameButton = document.querySelector(".reset-game");
const choicesSection = document.querySelector(".choices");

const availableCompChoices = ["ROCK", "PAPER", "SCISSORS"];
let playerPoints = 0;
let playerChoice = "";
let computerPoints = 0;
let computerChoice = "";

function setGame() {
    playerPointsSpan.innerHTML = playerPoints;
    computerPointsSpan.innerHTML = computerPoints;
    resultText.innerHTML = "Choose your weapon :)"
    resetGameButton.classList.remove("active");
    resultText.style.background = "white";
}

window.onload = setGame();

function playerSelect (event) {
    optionsButtons.forEach((button) => button.classList.remove("active"));
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active");
    resetGameButton.classList.add("active");
    computerSelect();
}

function computerSelect() {
    const randomIndex =  Math.floor(Math.random() * availableCompChoices.length);
    computerChoice = availableCompChoices[randomIndex];

    checkResault();
}

function checkResault() {
    let winner = "";
    
    playerChoiceSpan.innerHTML = playerChoice;
    computerChoiceSpan.innerHTML = computerChoice;
    choicesSection.classList.add("active");

    if(playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
    playerChoice === "PAPER" && computerChoice === "ROCK" ||
    playerChoice === "SCISSORS" && computerChoice === "ROCK")
    {
        winner = "You won!"
        playerPoints ++;
        playerPointsSpan.innerHTML = playerPoints;
        resultText.style.background = "rgb(3, 206, 3)";
    }   
    else if(playerChoice === computerChoice)
    {
        winner = "Draw!"
        resultText.style.background = "orange";
    }
    else
    {
        winner = "You lost!"
        resultText.style.background = "red";
        computerPoints ++;
        computerPointsSpan.innerHTML = computerPoints;
    }

    resultText.innerHTML = winner;
}

function resetGame() {
    choicesSection.classList.remove("active");
    optionsButtons.forEach((button) => button.classList.remove("active"));
    playerPoints = 0;
    computerPoints = 0;
    setGame();
}

optionsButtons.forEach((button) => 
    button.addEventListener("click", playerSelect)
);

resetGameButton.addEventListener("click", resetGame);