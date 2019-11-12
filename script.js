var startButton = document.querySelector("#startButton");

var totalSeconds = 75;
var secondsElapsed = 0
var interval;
//create a countdown for the quiz


var timeleft = 75;
var downloadTimer = setInterval(function(){
  document.getElementById("counter").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);


//create a button that initiates the quiz
//show user the first question
//Once user selects answer show whether they are correct or incorrect 
//Keep track of this score 
//Move on to the next question
//repeat until all questions have been asked and answered 
//Show user's final score and have them enter initials to save highscore
//when inititals are submitted change to the high score screen and have an options to clear 

