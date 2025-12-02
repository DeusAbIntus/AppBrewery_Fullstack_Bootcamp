// Generate random color and add to game pattern
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

$(document).keydown(function() {
    if (!gameStarted) {
        nextSequence();
        $("#level-title").text("Level " + level);
        gameStarted = true;
    }
});

$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(150).fadeIn(150);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);
}

function playSound(name) {
    var buttonSound = new Audio("sounds/"+name+".mp3");
    buttonSound.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
     if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        // success
            if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
     } else {
        // fail
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
     }

}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}