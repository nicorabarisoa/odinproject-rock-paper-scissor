function getComputerChoice(){
    let computerChoice=["Rock","Paper","Scissor"];
    return(computerChoice[Math.floor(Math.random()*3)]);
}

console.log(getComputerChoice());