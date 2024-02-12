const computerChoices =["rock", "paper","scissors"];
let randomChoice =1 ;
let computerChoice = " ";
let sameChoice = "You tie, You picked the same choice";

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
            return "You win, Rock beats Scissors";
        }
    }
    else if(playerSelection ==="scissors"){
        if(computerChoice === "rock"){
            return "You lose, Rock beats Scissors";
        }
        else if(computerChoice === "paper"){
            return "You win, Scissors beat paper";
        }
        else if(computerChoice === "scissors"){
            return sameChoice;
        }
    }
    else if(playerSelection === "paper"){
        if(computerChoice === "rock"){
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

 const playerSelection = "rock";
 const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));
