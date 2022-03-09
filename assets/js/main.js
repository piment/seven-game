const startButton = document.querySelector("#title");
startButton.addEventListener("click", ev => {
    ev.preventDefault();
    const gameZone = document.querySelector("#game-zone");
    gameZone.classList.remove("hidden");
    gameZone.classList.add("flex");
    ev.currentTarget.classList.add("hidden");
})

const rollButton = document.querySelector('.roll-dice');
rollButton.addEventListener("click", ev  => {
    ev.preventDefault();
    const result = rollDice(2);
    console.log(result);
    if(result.at(-1) === 7){
        console.log("perdu!")
    }
    else {
        console.log(result.at(-1));
        addResultsToPlayer(1, result)
    }
});


//Utility Functions

//Roll N dice and get an array with [N result,total]
const rollDice = (nbDice) => {
    const result = [];
    for(let i = 0; i < nbDice; i++){
        result.push(Math.ceil(Math.random() * 6));
    }
    result.push(result.reduce((total, actual) => total + actual));
    return result;
}

//Add roll results to the player and display it
const addResultsToPlayer = (numPlayer, results) => {
    const resultsZone = document.querySelector(`.player[data-player="${numPlayer}"]>.results`);
    console.log(resultsZone);
    const newResultsItem = document.createElement("li");
    newResultsItem.innerHTML = results;
    resultsZone.appendChild(newResultsItem);
}