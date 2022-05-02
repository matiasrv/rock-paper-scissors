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
function playRound(selection){
    let playerSelection = selection.toLowerCase();
    
    let computerSelection = computerPlay();

    let result;
    let win = youWin;
    let lose = youLose;

    if (playerSelection == computerSelection){
        document.querySelector('.result').textContent ="it's a tie";
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
    document.querySelector('.result').textContent = `${playerSelection} beats ${computerSelection}, YOU WIN`;
    return `won`;
}

function youLose(playerSelection, computerSelection){
    document.querySelector('.result').textContent = `${computerSelection} beats ${playerSelection}, YOU LOSE`;
    return `lost`;
}

function game(){
    let play = [];
    let wins = 0, loses = 0, ties = 0;
    let round = "";
    const result = document.querySelector('.result'); 
    const buttons = document.querySelectorAll('button');
    let gameover = document.createElement('h2');
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', play[i] = (e) => {
            round = playRound(e.target.textContent);
            if(round == "won"){
                wins++;
            }
            else if (round == "lost"){
                loses++;
            }
            else{
                ties++;   
            }
            if(wins < 5 && loses < 5){
                result.textContent =`result, ${wins} wins, ${loses} loses and ${ties} ties`;
            }
            else{
                result.textContent =`final result: ${wins} wins, ${loses} loses and ${ties} ties`;
                for (let j = 0; j < buttons.length; j++){
                    buttons[j].removeEventListener('click', play[j]);
                }
                if(wins < 5)
                    gameover.textContent = "Game Over, You Lose";
                else
                    gameover.textContent = "Game Over, You Win";
                document.body.appendChild(gameover);
            }
        });
    };
}

game();