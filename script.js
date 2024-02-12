const computerChoices =["Rock", "Paper","Scissors"];
let randomChoice =1 ;
let computerChoice = " ";

function getComputerChoice(){
    randomChoice = Math.floor(Math.random()*3);
    computerChoice = computerChoices[randomChoice];
    return computerChoice;
}