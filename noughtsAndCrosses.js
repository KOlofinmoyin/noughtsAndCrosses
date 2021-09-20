let currentPlayer = 'X';

function board(currentPosition){
  if (currentPosition.innerText != "") return;
      currentPosition.innerText = currentPlayer;
      currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
      checkGameBoard();
}

function checkGameBoard(){
    for (var i = 0; i < 2; i++) {
      let firstOne = document.getElementById('0_'+i).innerText;
      let firstTwo = document.getElementById('1_'+i).innerText;
      let firstThree = document.getElementById('2_'+i).innerText;

      checkForWinner(firstOne, firstTwo, firstThree);
    }
}

function checkForWinner(first, second, third){
  if (first != "" && first == second && first == third) {
    alert("You've won");
  }
}
