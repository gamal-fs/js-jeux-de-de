var scores, playerActive, scorePlay, playing;

start();

document.getElementById('launch').addEventListener('click', function() {
  if(playing) {
    // Nombre aléatoire
    var dice = Math.floor(Math.random() * 6) + 1;
    // Affichage du résultat
    var dicePlay = document.querySelector('.dice');
    dicePlay.style.display = 'block';
    dicePlay.src = 'dice-' + dice + '.png';
  }
});

document.getElementById('new').addEventListener('click', start);

function start() {
  scores = [0, 0];
  playerActive = 0;
  scorePlay = 0;
  playing = true;

  var playerOne = prompt('Nom du joueur un ?');
  if(playerOne === '') {
    playerOne = 'Player 1';
  } 
  var playerTwo = prompt('Nom du joueur deux ?');
  if(playerTwo === '') {
    playerTwo = 'Player 2';
  }

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('playerOne').textContent = playerOne;
  document.getElementById('playerTwo').textContent = playerTwo;
  document.getElementById('scoreOne').textContent = '0';
  document.getElementById('scoreTwo').textContent = '0';
  document.getElementById('scoreBoxOne').textContent = '0';
  document.getElementById('scoreBoxTwo').textContent = '0';
  document.querySelector('.player').classList.remove('winner');
  document.querySelector('.player').classList.remove('active');
  document.querySelector('.player-one').classList.add('active');
}