let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]



let player1state = true;
let player2state = false;
let letterX = "X";
let letterO = "O";
let boxes = document.querySelectorAll('.box');
let count = 0;
let player1win = false;
let player2win = false;





boxes.forEach(function(box){
  box.addEventListener('click', function() {
    console.log(count);

    let letter = document.createElement('p');
    wordChange(letter);
    updateArray(box);

    if(!box.querySelector('p')){
        this.appendChild(letter);
        count++;
    }


    //change state for next player
    changeState();
    checkWinner();
    });
});

function changeState(){
    let truthHold = player1state;
    player1state = player2state;
    player2state = truthHold;
}

function wordChange(letter)
{
    if(player1state && !(player2state))
    {
        letter.innerText = letterX;
    }
    else
    { 
        letter.innerText = letterO;
    }
}

function updateArray(box)
{
    // Get the ID of the element
    let elementId = box.id;
    let row = parseInt(elementId[elementId.length-2]);
    let col = parseInt(elementId[elementId.length-1]);;

    if(player1state)
    {
        board[row][col] = letterX;
    }else{
        board[row][col] = letterO;
    }
}

function checkWinner() {

        // Check rows
        for (let i = 0; i < board.length; i++) {
        if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            assignWinner(board[i][0]);
        }
        }
    
        // Check columns
        for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] !== null && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            assignWinner(board[0][j]);
        }
        }
    
        // Check diagonals
        if (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            assignWinner(board[0][0]);
        }
    
        if (board[0][2] !== null && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            assignWinner(board[0][2]);
        }
    
        // If no winner is found, return null
        else if(count === 9 && player1win == false && player2win == false){
            console.log("it's a draw")
        }
}

function assignWinner(word){
    if(word === "X")
    {
        player1win = true;
        let playerOneScore = document.querySelector(".grey1 p");
        let pScore = parseInt(playerOneScore.textContent);
        pScore++;
        playerOneScore.textContent = pScore;
        console.log("PLAYER 1 WINS")
    }
    else{
        let playerTwoScore = document.querySelector(".grey2 p");
        let pScore2 = parseInt(playerTwoScore.textContent);
        pScore2++;
        playerTwoScore.textContent = pScore2;
        player2win = true;
        console.log("PLAYER 2 WINS")
    }
}

