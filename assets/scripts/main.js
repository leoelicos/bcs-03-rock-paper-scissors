// rock, paper, scissors

const rock = 'R';
const paper = 'P';
const scissors = 'S';

// tallies the player's wins
var player = {
	wins: 0,
	ties: 0,
	losses: 0,
};

// 0 = rock, 1 = paper, 2 = scissors
var gameChoices = [rock, paper, scissors];

window.alert('Rock-Paper-Scissors\r\nRules:\r\nrock (R) beats scissors (S)\r\npaper (P) beats rock (R)\r\nscissors (S) beats paper (P)');

var keepPlaying = window.confirm('Play ?');

while (keepPlaying === true) {
	var playerChoice = window.prompt('To play, type R, P or S', 'R');

	if (playerChoice == null) {
		// player has selected cancel
		keepPlaying = false;
	} else {
		playerChoice = playerChoice.toUpperCase();

		var computerChoice = gameChoices[random(0, 2)];

		if (playerChoice === computerChoice) {
			player.ties++;
		} else if ((playerChoice === rock && computerChoice === scissors) || (playerChoice === scissors && computerChoice === paper) || (playerChoice === paper && computerChoice === rock)) {
			player.wins++;
		} else {
			player.losses++;
		}

		keepPlaying = window.confirm('You have\n' + player.wins + ' wins,\n' + player.ties + ' ties,\n' + player.losses + ' losses.\n\nPlay again?');
	}
}

window.alert('Thanks for playing, bye now!');

/*********** 
  Functions
 ***********/

// This function generates an integer from min to max
// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
function random(min, max) {
	const num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}
