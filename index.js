//player1

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

//player2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML = "BRAVO Joueur 1 vous avez gagner !!"; 
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "BRAVO Joueur 2 vous avez ganger!!";
}

else {
    document.querySelector("h1").innerHTML = "lancer les dés" +   " ctrl + r ";
}


console.log(image1);