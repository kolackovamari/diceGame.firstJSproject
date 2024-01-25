// first Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // for creating a number 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // to select img, dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // changing attribute vallue for source, images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // change attribute of element

image1.setAttribute("src", randomImageSource);

// second Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



// if player 1 wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
// if player 2 wins

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
// if it is draw

else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
