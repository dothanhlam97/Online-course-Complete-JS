/*
 GAME RULES:

 - The game has 2 players, playing in rounds
 - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
 - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
 - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
 - The first player to reach 100 points on GLOBAL score wins the game

 */

var current_player = 0;
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
    return (Number(document.getElementById("score-" + current_player.toString()).innerHTML) >= 30);
}

document.querySelector(".btn-roll").addEventListener("click", function () {
    const numberInDice = getRandomNumber();
    document.querySelector(".dice").style.display = 'block';
    document.querySelector(".dice").src = "dice-" + numberInDice.toString() + ".png";
    const currentScore = Number(document.getElementById("current-" + current_player.toString()).innerHTML);
    // In case number 1
    if (numberInDice === 1) {
        document.getElementById("current-" + current_player.toString()).innerHTML = "0";
        swapPlayer();
        return;
    }
    document.getElementById("current-" + current_player.toString()).innerHTML = (currentScore + numberInDice).toString();
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    const currentScore = Number(document.getElementById("current-" + current_player.toString()).innerHTML);
    document.getElementById("current-" + current_player.toString()).innerHTML = "0";
    document.getElementById("score-" + current_player.toString()).innerHTML = (Number(document.getElementById("score-" + current_player.toString()).innerHTML) + currentScore).toString();
    if (isWinner()) {
        document.querySelector(".player-" + current_player.toString() + "-panel").classList.remove("active");
        document.querySelector(".player-" + current_player.toString() + "-panel").classList.add("winner");
    }
    swapPlayer();
});


