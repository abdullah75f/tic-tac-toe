
document.addEventListener("DOMContentLoaded",()=>{
    const cells = document.querySelectorAll(".cell");
    let currenPlayer = "X";
    const playerTurnIndicator = document.querySelector(".player-turn");
    const score = document.querySelector("score");
    const winnerIndicator =document.querySelector(".winner-indicator");
    let gameActive = true;

    const whenToWin = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
});