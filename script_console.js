const getComputerChoice = () => {
    const janken = ['Rock','Paper', 'Scissors'];
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
        return `You LOSE!(負け!) ${computerSelection} beats ${playerSelection}`;
     }
     
};

const playGame = () => {
    let playerScore=0;
    let computerScore=0;

    for (let i = 0; i < 5; i++){
    const playerSelection = prompt("Whats your choice?");
    const computerSelection = getComputerChoice().toLowerCase();
    
    //"You cannot apply the includes method directly to the playRound function itself;//
    //instead, you need to use the includes method on the string, which is the return value of the function."//
    //if(playRound.includes("WIN")){//

    const result = playRound(playerSelection,computerSelection);
    

        if(result.includes("WIN")){
        playerScore++;
        
         }
        else if(result.includes("LOSE")){
        computerScore++;
        
        }

        //index is starting from 0, so you need to use 4 instead of 5//
         if (i === 4){
            console.log("Gameset!");


        if(playerScore > computerScore){
            console.log(`YOU ARE WINNER!! Your Score was ${playerScore}, Computer Score was ${computerScore}`);
        }else{
            console.log(`YOU LOST....Never mind!! Your Score was ${playerScore}, Computer Score was ${computerScore}`);
        }
        }

    };
};

playGame();