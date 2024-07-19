
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

    function checkWinner(){
        let oneRoundWon = false;
        for(let i = 0; i<whenToWin.length; i++
        ){
            const winCond = whenToWin[i];
            
            const a = cells[winCond[0]].textContent;//Since winCond contains indices of cells that need to be checked for a win condition, cells[winCond[0]] accesses the cell at that index. The .textContent property gets or sets the text content of the specified element, which in this case, would be either "X", "O", or an empty string if the cell is not filled.
            const b = cells[winCond[1]];
            const c = cells[winCond[2]];

            if( a === ""  || b === "" || c === ""){
                continue;
            }
            if(a === b && b == C){
                oneRoundWon = true;
                break

            }

        }

        if (oneRoundWon){
            winnerIndicator.textContent = `Ladies and Gents, player ${currentPlayer} Wins !`

        }
    }

    // cells.forEach(cell => {
    //     cell.addEventListener('click', cellClick);
    // });
    
});

