const computerChoices =["rock", "paper","scissors"];
let randomChoice =1 ;
let computerChoice = " ";
let sameChoice = "You tie, You picked the same choice";
let numberOfGamesPlayed = 0;
let numberOfGamesWon = 0;


function getComputerChoice(){
    randomChoice = Math.floor(Math.random()*3);
    computerChoice = computerChoices[randomChoice];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection ==="rock"){
        if(computerChoice === "rock"){
            return sameChoice;
        }
        else if(computerChoice === "paper"){
            return "You lose, Paper beats Rock";
        }
        else if(computerChoice === "scissors"){
            numberOfGamesWon++;
            return "You win, Rock beats Scissors";
        }
    }
    else if(playerSelection ==="scissors"){
        if(computerChoice === "rock"){
            return "You lose, Rock beats Scissors";
        }
        else if(computerChoice === "paper"){
            numberOfGamesWon++;
            return "You win, Scissors beat paper";
        }
        else if(computerChoice === "scissors"){
            return sameChoice;
        }
    }
    else if(playerSelection === "paper"){
        if(computerChoice === "rock"){
            numberOfGamesWon++;
            return "You win, Paper beats Rock";
        }
        else if(computerChoice === "paper"){
            return sameChoice;
        }
        else if(computerChoice === "scissors"){
            return "You lose scissors beat paper";
        }
    }
}

function playGame(){
    let computerSelection = getComputerChoice();
    let playerSelection = " ";
    for(numberOfGamesPlayed = 0; numberOfGamesPlayed<5;numberOfGamesPlayed++){
        playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(numberOfGamesWon>2){
        return "you win";

    }
    else {
        return "you lose";
    }
}
console.log(playGame());
