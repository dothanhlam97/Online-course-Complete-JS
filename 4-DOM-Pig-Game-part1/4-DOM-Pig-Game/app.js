/*
 GAME RULES:

 - The game has 2 players, playing in rounds
 - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
 - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
 - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
 - The first player to reach 100 points on GLOBAL score wins the game

 */
var currentPlayer, endGame;
init();

function getRandomNumber() {
    var dice = Math.ceil(Math.random() * 6);
    if (dice === 0) {
        dice = 1;
    }
    return dice;
}
function swapPlayer() {
    document.querySelector(".player-" + currentPlayer.toString() + "-panel").classList.remove("active");
    currentPlayer ^= 1;
    document.querySelector(".player-" + currentPlayer.toString() + "-panel").classList.add("active");
}

function isWinner() {
    return (Number(document.getElementById("score-" + currentPlayer.toString()).innerHTML) >= 30);
}

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (endGame) {
        return;
    }
    const numberInDice = getRandomNumber();
    document.querySelector(".dice").style.display = 'block';
    document.querySelector(".dice").src = "dice-" + numberInDice.toString() + ".png";
    const currentScore = Number(document.getElementById("current-" + currentPlayer.toString()).innerHTML);
    // In case number 1
    if (numberInDice === 1) {
        document.getElementById("current-" + currentPlayer.toString()).innerHTML = "0";
        swapPlayer();
        return;
    }
    document.getElementById("current-" + currentPlayer.toString()).innerHTML = (currentScore + numberInDice).toString();
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (endGame) {
        return;
    }
    const currentScore = Number(document.getElementById("current-" + currentPlayer.toString()).innerHTML);
    document.getElementById("current-" + currentPlayer.toString()).innerHTML = "0";
    document.getElementById("score-" + currentPlayer.toString()).innerHTML = (Number(document.getElementById("score-" + currentPlayer.toString()).innerHTML) + currentScore).toString();
    if (isWinner()) {
        document.querySelector(".player-" + currentPlayer.toString() + "-panel").classList.remove("active");
        document.querySelector(".player-" + currentPlayer.toString() + "-panel").classList.add("winner");
        document.getElementById("name-" + currentPlayer.toString()).innerHTML = "Winner!";
        endGame = true;
        document.querySelector(".dice").style.display = 'none';
        return;
    }
    swapPlayer();
});

function init () {
    document.getElementById("score-0").innerHTML = "0";
    document.getElementById("score-1").innerHTML = "0";
    document.getElementById("current-0").innerHTML = "0";
    document.getElementById("current-1").innerHTML = "0";
    document.getElementById("name-0").innerHTML = "PLAYER 1";
    document.getElementById("name-1").innerHTML = "PLAYER 2";
    currentPlayer = 0;
    endGame = false;
    document.querySelector(".dice").style.display = 'none';
}

document.querySelector('.btn-new').addEventListener("click", init);