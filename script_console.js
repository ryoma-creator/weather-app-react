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
