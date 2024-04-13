const getComputerChoice = () => {
    const janken = ['Rock',`Paper`, `Scissors`];
    const jankenRandom = Math.floor(Math.random()*janken.length);
    return janken[jankenRandom];
};

const playRound = (playerSelection,computerSelection) => {
    //Make your function’s playerSelection parameter case-insensitive// 
    //(so users can input rock, ROCK, RocK or any other variation).//
    playerSelection = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();
};
