const getComputerChoice = () => {
    const janken = ['Rock',`Paper`, `Scissors`];
    const jankenRandom = Math.floor(Math.random()*janken.length);
    return janken[jankenRandom];
};

const playRound = (playerSelection,computerSelection) => {


    computerSelection = getComputerChoice();
};
