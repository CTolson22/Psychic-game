var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessChoices = [];
var guessLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];




var play=confirm("Want to Play?")
if(play){
    alert("Take a Guess")
}


document.onkeyup = function(event) {
    var userGuess = event.key;
}

var ranLetters = guessLetters[Math.floor(Math.random() * guessLetters.length)];
console.log(guessLetters)

if (ranLetter===guessLetters) {
    wins+++
    guessChoices.push(userGuess)
    guessChoices[---]
}

else(ranLetter!==guessLetter){
    losses---
    guessChoices.push(userGuess)
    guessChoices[--]
}
