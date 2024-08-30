document.addEventListener('DOMContentLoaded', function() {

    const board = document.getElementById('board');
    const squares = document.getElementsByClassName('square');
    const restartBtn = document.getElementById('restartButton');
    const players = ['X', 'O'];
    let currentPlayer = players[0];
    let gameOver = false;

    const winning_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const endMessage = document.createElement('h2');
    endMessage.textContent = `X's turn`;
    endMessage.style.marginTop = '30px';
    endMessage.style.textAlign = 'center';
    board.after(endMessage);

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            if (squares[i].textContent !== '' || gameOver) {
                return;
            }
            squares[i].textContent = currentPlayer;
            if (winner(currentPlayer)) {
                endMessage.textContent = `Game Over! ${currentPlayer} wins!`;
                gameOver = true;
                return;
            }
            if (Draw()) {
                endMessage.textContent = `Game is Draw!`;
                gameOver = true;
                return;
            }
            currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
            endMessage.textContent = `${currentPlayer}'s turn!`;
        });
    }

    function winner(currentPlayer) {
        for (let i = 0; i < winning_combinations.length; i++) {
            const [a, b, c] = winning_combinations[i];
            if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
                return true;
            }
        }
        return false;
    }

    function Draw() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].textContent === '') {
                return false;
            }
        }
        return true;
    }
    
    restartBtn.addEventListener('click', restartButton);

    function restartButton() {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
        }
        endMessage.textContent = `X's turn`;
        currentPlayer = players[0];
        gameOver = false;
    }


});
