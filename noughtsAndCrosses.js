let currentPlayer = 'X';

function board(currentPosition){
  if (currentPosition.innerText != "") {
    return;
  }
      currentPosition.innerText = currentPlayer;
      currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
}
