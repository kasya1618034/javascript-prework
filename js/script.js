let computerMove = 'nieznany ruch';
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2) {
  computerMove = 'papier';
} else if(randomNumber == 3) {
  computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2') {
  playerMove = 'papier'; 
  playerMove = 'papier';
} else if(playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == playerMove){
  printMessage('Mamy remis!');
} else if (computerMove == 'kamień' && playerMove == 'papier') ||
          (computerMove == 'papier' && playerMove == 'nożyce') ||
          (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (playerMove == 'nieznany ruch')
    printMessage('Wybierz liczbę 1, 2 lub 3');
} else {
    printMessage('Ja wygrywam!');
}