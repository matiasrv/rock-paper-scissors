function computerPlay(){
    let rand = Math.floor(Math.random()*3) + 1;
    let choice;
    switch(rand){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper"
            break;
        default:
            choice = "scissors";
            break;        
    }
    return choice;
}
function playRound(){
    let playerSelection;
    do {
        playerSelection = prompt("Choice between 'rock' 'paper' or 'scissors'").toLowerCase();
    } while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
    
    let computerSelection = computerPlay();
    console.log("computer: " + computerSelection)
    
    let result;
    let win = youWin;
    let lose = youLose;

    if (playerSelection == computerSelection){
        return result = "It's a tie"
    }
    switch(playerSelection){
        case "rock":
            if(computerSelection == "paper"){
                result = lose(playerSelection, computerSelection);
            }
            else{
                result = win(playerSelection, computerSelection);
            }
            break;
        case "paper":
            if(computerSelection == "scissors"){
                result = lose(playerSelection, computerSelection);
            }
            else{
                result = win(playerSelection, computerSelection);
            }
            break;
        default:
            if(computerSelection == "rock"){
                result = lose(playerSelection, computerSelection);
            }
            else{
                result = win(playerSelection, computerSelection);
            }
            break;        
    }
    return result;
}
function youWin(playerSelection, computerSelection){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function youLose(playerSelection, computerSelection){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
console.log(playRound());