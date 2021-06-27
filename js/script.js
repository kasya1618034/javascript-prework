function playGame (playerInput) {
    clearMessages()
    function getMoveName (argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage ('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }
    function displayResult (argComputerMove, argPlayerMove) {
        if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
            printMessage ('Ty wygrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage ('Mamy remis!');
        } else {
            printMessage ('Tym razem przegrywasz :(');
        }
    }
  
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log ('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage ('Mój ruch to: ' + computerMove);
    console.log ('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage ('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
