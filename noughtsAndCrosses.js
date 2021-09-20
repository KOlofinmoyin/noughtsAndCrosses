let currentPlayer = 'X';

function board(currentPosition){
  if (currentPosition.innerText != "") return;
      currentPosition.innerText = currentPlayer;
      currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
      checkGameBoard();
}

function checkGameBoard(){
    for (var i = 0; i < 2; i++) {
      let rowOne = document.getElementById('0_'+i).innerText;
      let rowTwo = document.getElementById('1_'+i).innerText;
      let rowThree = document.getElementById('2_'+i).innerText;

      let columnOne = document.getElementById(i + '_0').innerText;
      let columnTwo = document.getElementById(i + '_1').innerText;
      let columnThree = document.getElementById(i + '_2').innerText;

      checkForWinner(rowOne, rowTwo, rowThree);
      checkForWinner(columnOne, columnTwo, columnThree);
    }
}

function checkForWinner(first, second, third){
  if (first != "" && first == second && first == third) {
    alert("You've won");
  }
}
