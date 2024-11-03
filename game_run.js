// Tic Tac Toe game project in JavaScript

let boxes = document.querySelectorAll(".boxClass");
let player1 = "Player 1", player2 = "Player 2";
let turn = player1;     // player1 vs player2
let isGameOver = false;

let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.style.pointerEvents  = "auto";
        box.style.backgroundColor = "";
    });
    document.querySelector(".win-msg").style.display = "none";
    document.querySelector(".win-msg").style.opacity = "0";
    turn = player1;
    isGameOver = false;
    console.log("Game has been reset");
});

let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(!isGameOver && box.innerHTML === ""){
            count++;
            if(turn === player1){
                box.innerHTML = "X";
                turn = player2;
            }else{
                box.innerHTML = "O";
                turn = player1;
            }
            box.style.pointerEvents  = "none";
            resultChecker(count, isGameOver);
            console.log(count, isGameOver);
        }
    })
});

function greenBoxing(winBoxes, winner) {
    winBoxes.forEach((box) => {
        box.style.backgroundColor = "rgb(74, 165, 74)";
    });
    setTimeout(() => {
        let winMsg = document.querySelector(".win-msg");
        let winText = document.querySelector("#winText");
        winText.innerText = `Player ${winner} wins!`;
        winMsg.style.display = "flex";
        winMsg.style.justifyContent = "center";
        winMsg.style.alignItems = "center";
        winMsg.style.opacity = "0";
        setTimeout(() => {
            winMsg.style.opacity = "1"; 
        }, 100);  
        isGameOver = true;
    }, 100);
}

const resultChecker = (count, isGameOver) => {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    for(let condition of winConditions) {
        let box1Val = boxes[condition[0]].innerText;
        let box2Val = boxes[condition[1]].innerText;
        let box3Val = boxes[condition[2]].innerText;
        if(box1Val != "" && box2Val != "" && box3Val != ""){
            if(box1Val===box2Val && box2Val===box3Val){
                greenBoxing([boxes[condition[0]] ,boxes[condition[1]], boxes[condition[2]]], box1Val);
                console.log(`The winner is ${box1Val}!`);
                return;
            }
        }
    }
    if(count === 9){
        setTimeout(() => {
        let winMsg = document.querySelector(".win-msg");
        let winText = document.querySelector("#winText");
        winText.innerText = `It's a draw!`;
        winMsg.style.display = "flex";
        winMsg.style.justifyContent = "center";
        winMsg.style.alignItems = "center";
        winMsg.style.opacity = "0";
        setTimeout(() => {
            winMsg.style.opacity = "1"; 
        }, 100);  
        isGameOver = true;
    }, 100);
    }
    
}   
