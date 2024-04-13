const getComputerChoice = () => {
    const janken = ['Rock',`Paper`, `Scissors`];
    const janken_random = Math.floor(Math.random()*janken.length);
    return janken[janken_random]
};

