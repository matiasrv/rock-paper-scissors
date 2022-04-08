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
        console.log("it's a tie");
        return result = "tie";
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
    console.log(`${playerSelection} beats ${computerSelection}`);
    return `won`;
}

function youLose(playerSelection, computerSelection){
    console.log(`${computerSelection} beats ${playerSelection}`);
    return `lost`;
}

function game(){
    let wins = 0, loses = 0, ties = 0;
    let round;
    for (let i = 0; i < 5; i++){
        round = playRound();
        if(round == "won"){
            wins++;
            console.log("round win");
            continue;
        }
        else if (round == "lost"){
            loses++;
            console.log("round lost");
            continue;
        }
        ties++;
    }
    console.log(`final result, ${wins} wins, ${loses} loses and ${ties} ties`);
}

game();