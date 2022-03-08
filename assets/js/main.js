const startButton = document.querySelector("#title");
startButton.addEventListener("click", ev => {
    ev.preventDefault();
    const gameZone = document.querySelector("#game-zone");
    gameZone.classList.remove("hidden");
    gameZone.classList.add("flex");
    ev.currentTarget.classList.add("hidden");
})