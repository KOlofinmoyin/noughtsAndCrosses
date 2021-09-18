let currentPlayer = 'X';

function board(currentPosition){
  if (currentPosition.innerText != "") return;
      currentPosition.innerText = currentPlayer;
      currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
      checkBoardGame();
}

function checkGameBoard(){
  let firstOne = document.getElementById('0_0').innerText;
  let firstTwo = document.getElementById('1_0').innerText;
  let firstThree = document.getElementById('2_0').innerText;


  if (firstOne == firstTwo && firstOne == firstThree) {alert("You've won");}


}
