const getComputerChoice = () => {
    const janken = ['Rock',`Paper`, `Scissors`];
    const jankenRandom = Math.floor(Math.random()*janken.length);
    return janken[jankenRandom];
};

const playRound = (playerSelection,computerSelection) => {
    //Make your function’s playerSelection parameter case-insensitive// 
    //(so users can input rock, ROCK, RocK or any other variation).//
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    //Make a "tie"　"引き分け"//
    if (playerSelection === computerSelection) {
        return "It's a tie!（引き分け！）";
    }
    //Make a "Win"//
     else if(   
        (playerSelection === "rock" &&  computerSelection === "scissors")||
        (playerSelection === "paper" &&  computerSelection === "rock")||
        (playerSelection === "scissors" &&  computerSelection === "paper")
    ){
        return `You WIN!（勝ち！）${playerSelection} beats ${computerSelection} `;
    }
    //Make a "lose"//
     else {
        return `You LOSE!(負け!) ${playerSelection} beats ${computerSelection}`;
     }
     
};

const playGame = () => {
    playerScore=0;
    computerScore=0;

    for ( i = 0; i < 5; i++)
    playerSelection = prompt("Whats your choice?");
    computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection,computerSelection);
    
    if(playRound.includes("WIN")){
        playerScore++;
        
    }
    ifelse(playRound.includes("LOSE")){
        computerScore++;
        
    }
    else{

    }

    if (i === 5){
            console.log("Gameset!");
        if(playerScore > computerScore){
            return `YOU ARE WINNER!! Your Score was ${playerScore}), Enemy Score was ${enemyScore}`;
        }else{
            return `YOU LOST....Never mind!! Your Score was ${playerScore}), Enemy Score was ${enemyScore}`;
        }
    }

};
