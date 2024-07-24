let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let computerChoice=["Rock","Paper","Scissor"];

    // genère un nombre aléatoire entre 0 et 2
    return(computerChoice[Math.floor(Math.random()*3)]);
}

function gethumanChoice(){
    let humanChoice = prompt("Type Rock, Paper or Scissor");
    while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissor" ) {
        humanChoice = prompt("Type Rock, Paper or Scissor only please");
      }
      return(humanChoice);
    
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`It's a tie Human played `+ humanChoice + `computer played `+ computerChoice);
    }
    else if (humanChoice === "Rock" && computerChoice == "Scissor"){
        console.log(`Human won with `+ humanChoice + ` computer played `+ computerChoice);
    }
    else if(humanChoice === "Paper" && computerChoice == "Rock") {
        console.log(`Human won with `+ humanChoice + ` computer played `+ computerChoice);

    }
    else if(humanChoice === "Scissor" && computerChoice == "Papper") {
        console.log(`Human won with `+ humanChoice + ` computer played `+ computerChoice);

    }else console.log(`Computer won with  `+ computerChoice + ` human played `+ humanChoice);

}

const humanSelection = gethumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);

