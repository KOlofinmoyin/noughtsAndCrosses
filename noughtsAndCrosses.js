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
      if (firstOne == "") continue;
      if (firstOne == firstTwo && firstOne == firstThree) {alert("You've won");}
    }
}
