var colors = ["red", "blue", "green", "yellow"];
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 0;
$(document).keydown(function(){
    nextSequence();
});

$(".btn").click(clicked);



/* 


functions


*/

function nextSequence(){
    level++;
    $("h1").text("level "+level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColor = colors[randomNumber];

    gamePattern.push(randomChoosenColor);
    var colorID = $("#"+randomChoosenColor);
    colorID.fadeOut(50).fadeIn(50);
    playSound(randomChoosenColor);
    currentLevel = 0;
    userClickedPattern = [];

}

function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function clicked(){
    var clickedColor = this.id;
    var colorID = $("#"+clickedColor);
    userClickedPattern.push(clickedColor);
    colorID.addClass("pressed");
    playSound(clickedColor);
    setTimeout(function(){
        colorID.removeClass("pressed");
    },100);

    checkAnswer(userClickedPattern.length-1);
}

function Compare(num){
    let compareResult;
    if(gamePattern[num]!==userClickedPattern[num]){
        compareResult = 0;
    }
    else{
        compareResult = 1;
    }
    return compareResult;
    
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");

        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }

    else{
        console.log("wrong");
        $("body").addClass("game-over");
        playSound("wrong")
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 100)

        $("h1").text("Game over, press any key to restart the game");
        
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        currentLevel = 0;
    }
}