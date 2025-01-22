var rand1 = Math.floor((Math.random() * 6 )) + 1;
var rand2 = Math.floor((Math.random() * 6 ))+ 1;
if (rand1 > rand2){
    document.querySelector("h1").textContent = "🚩 player 1 wins";
}
else if(rand1< rand2){
    document.querySelector("h1").textContent = "player 2 wins 🚩";
}
else{
    document.querySelector("h1").textContent = "draw";
}

if (rand1 === 1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if (rand1 === 2){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if (rand1 === 3){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if (rand1 === 4){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if (rand1 === 5){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (rand2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if (rand2 === 2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if (rand2 === 3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if (rand2 === 4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if (rand2 === 5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}