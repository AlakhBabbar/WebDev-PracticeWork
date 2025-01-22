for (i = 0; i < 7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonIH = this.innerHTML;
        makeSound(buttonIH);
        buttonAnimation(buttonIH);
        
    });
}


document.addEventListener("keydown", function(event){
    var keyP = event.key;
    makeSound(keyP);
    buttonAnimation(keyP);
});

function makeSound(event){
    switch(event){
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
        break;

        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
        break;

        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
        break;

        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
        break;

        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
        break;

        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
        break;

        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
        break;

        default: console.log("out of syllabus");
    }
}

function buttonAnimation(currentKey){
    var act = document.querySelector("." + currentKey).classList;
    act.add("pressed");

    setTimeout(function(){
        act.remove("pressed");
    }, 100);
}