/*
 GAME RULES:

 - The game has 2 players, playing in rounds
 - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
 - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
 - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
 - The first player to reach 100 points on GLOBAL score wins the game

 */

var current_player = 0;
const statusOfDice = document.getSelection(".dice");
document.querySelector(".dice").style.display = 'none';

function getRandomNumber() {
    var dice = Math.ceil(Math.random() * 6);
    if (dice === 0) {
        dice = 1;
    }
    return dice;
}
function swapPlayer() {
    document.querySelector(".player-" + current_player.toString() + "-panel").classList.remove("active");
    current_player ^= 1;
    document.querySelector(".player-" + current_player.toString() + "-panel").classList.add("active");
}

function isWinner() {
    return (Number(document.querySelector(".player-" + current_player.toString() + "-panel .player-score").innerHTML) >= 30);
}

document.querySelector(".btn-roll").addEventListener("click", function () {
    const numberInDice = getRandomNumber();
    document.querySelector(".dice").style.display = 'block';
    document.querySelector(".dice").src = "dice-" + numberInDice.toString() + ".png";
    const showCurrentScore = document.querySelector(".player-" + current_player.toString() + "-panel .player-current-score");
    const currentScore = Number(showCurrentScore.innerHTML);
    // In case number 1
    if (numberInDice === 1) {
        showCurrentScore.innerHTML = "0";
        swapPlayer();
        return;
    }
    showCurrentScore.innerHTML = (currentScore + numberInDice).toString();
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    const showCurrentScore = document.querySelector(".player-" + current_player.toString() + "-panel .player-current-score");
    const currentScore = Number(showCurrentScore.innerHTML);
    showCurrentScore.innerHTML = 0;

    const showScore = document.querySelector(".player-" + current_player.toString() + "-panel .player-score");
    showScore.innerHTML = (Number(showScore.innerHTML) + currentScore).toString();
    showCurrentScore.innerHTML = 0;
    if (isWinner()) {
        document.querySelector(".player-" + current_player.toString() + "-panel").classList.remove("active");
        document.querySelector(".player-" + current_player.toString() + "-panel").classList.add("winner");
    }
    swapPlayer();
});


