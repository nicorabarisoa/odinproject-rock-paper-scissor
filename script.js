let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let computerChoice=["Rock","Paper","Scissor"];

    // genère un nombre aléatoire entre 0 et 2
    return(computerChoice[Math.floor(Math.random()*3)]);
}

function getHumanChoice(){
    let HumanChoice = prompt("Type Rock, Paper or Scissor");
    while (HumanChoice !== "Rock" && HumanChoice !== "Paper" && HumanChoice !== "Scissor" ) {
        HumanChoice = prompt("Type Rock, Paper or Scissor only please");
      }
      console.log(HumanChoice);

    
}

function playRound(humanChoice, computerChoice){
    
}

