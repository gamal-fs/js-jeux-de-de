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
    // Mise à jour score si le numéro tiré est différent de un
    if(dice !== 1) {
      scorePlay += dice; 
      document.getElementById('scoreBox-' + playerActive).textContent = scorePlay;
    } else {
      nextPlayer();
    }
  }
});

document.getElementById('hold').addEventListener('click', function() {
  if(playing) {
    // Ajout du score actuel au score global
    scores[playerActive] += scorePlay;
    // Mise à jour du scolre
    document.getElementById('score-' + playerActive).textContent = scores[playerActive];
    // Joueur gagnant
    if (scores[playerActive] >= 100) {
      document.getElementById('player-' + playerActive).textContent = 'WINNER!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('player-' + playerActive + '-box').classList.remove('active');
      document.querySelector('player-' + playerActive + '-box').classList.add('winner');
      playing = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  playerActive === 0 ? playerActive = 1 : playerActive = 0;
  scorePlay = 0;
  document.getElementById('scoreBox-0').textContent = '0';
  document.getElementById('scoreBox-1').textContent = '0';
  document.querySelector('.player-0-box').classList.toggle('active');
  document.querySelector('.player-1-box').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

document.getElementById('new').addEventListener('click', start);

// Fonction pour commencer à jouer
function start() {
  // remise à zéro des compteurs
  scores = [0, 0];
  playerActive = 0;
  scorePlay = 0;
  playing = true;

  // Demande du nom du premier joueur
  var playerOne = prompt('Nom du joueur un ?', '');
  if(playerOne === '' || playerOne == null) {
    playerOne = "Player 1";
  } 

  // Demande du nom du deuxième joueur 
  var playerTwo = prompt('Nom du joueur deux ?');
  if(playerTwo === '' || playerTwo == null) {
    playerTwo = "Player 2";
  }

  // Remise à zéro de l'affichage
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('player-0').textContent = playerOne;
  document.getElementById('player-1').textContent = playerTwo;
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('scoreBox-0').textContent = '0';
  document.getElementById('scoreBox-1').textContent = '0';
  document.querySelector('.player').classList.remove('winner');
  document.querySelector('.player').classList.remove('active');
  document.querySelector('.player-0-box').classList.add('active');
}