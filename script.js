//We want a variable assigned to the wins and another to the losses counter
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

//We a variable assigned to the start button
var startButton = document.getElementById("gameStart");

//We a variable assigned to the dotted line where the objective word will live
var gameword = document.getElementById("gameWord");


//When we load the page we want to check local storage for previous wins and losses
localStorage.getItem("storedWins");
localStorage.getItem("storedLosses");
    //if there are none the counters will display as 0/null/none
if(storedWins === null) {
    wins.textValue = 0;
    wins.textContent = "Wins: " + wins;
}
//When we push the start button we want to initilize the game

    //it needs to track the keys the user presses

//We need an array of words to select from randomly like math.floor (math.random)
//

    //That means want to start the counter
        //we need and if else depending on if the word was completed succesfully or not in time
            //we need to update local storage whenever the total score changes
