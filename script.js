
document.addEventListener("DOMContentLoaded",()=>{
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    const playerTurnIndicator = document.querySelector(".player-turn");
    const score = document.querySelector("score");
    const winnerIndicator =document.querySelector(".winner-indicator");
    let gameActive = true;

    const whenToWin = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function cellClick(e){
        const cell =e.target;
        const cellIndex = Array.from(cells).indexOf(cell);

        if(cell.textContent.trim() !== "" || !gameActive){
            return ; 
        }
        cell.textContent = currentPlayer;
        // checkwinner();
        // checkDraw();
        switchPlayers();
    }

    function switchPlayers(){
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // cells.forEach(cell => {
    //     cell.addEventListener('click', cellClick);
    // });
    
});

