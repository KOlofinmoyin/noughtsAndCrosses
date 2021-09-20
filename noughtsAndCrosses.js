let currentPlayer = 'X';
let won = false;

function board(currentPosition){
  if (currentPosition.innerText != "" || won) return;
      currentPosition.innerText = currentPlayer;
      currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
      checkGameBoard();
}

function checkGameBoard(){
    for (var i = 0; i <= 2; i++) {

      checkForWinner(document.getElementById('0_'+i).innerText, document.getElementById('1_'+i).innerText, document.getElementById('2_'+i).innerText);
      checkForWinner(document.getElementById(i + '_0').innerText, document.getElementById(i + '_1').innerText, document.getElementById(i + '_2').innerText);
    }

    checkForWinner(document.getElementById('0_0').innerText, document.getElementById('1_1').innerText, document.getElementById('2_2').innerText);
    checkForWinner(document.getElementById('0_2').innerText, document.getElementById('1_1').innerText, document.getElementById('2_0').innerText);

}

function checkForWinner(first, second, third){
  if (first != "" && first == second && first == third) {
    alert("You've won");
    won = true;
    return;
  }
}
