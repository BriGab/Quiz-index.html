var startButton = document.querySelector("#startButton");
var question = document.getElementById("question");
var description = document.getElementById("description");
var body = document.getElementById("body");
//create a countdown for the quiz
//create a button that initiates the quiz

var timeleft = 75;




function getQuestion () {
  currentIndex++;
  var title = questions[currentIndex].title;
  var choices = questions[currentIndex].choices;
  var answer = questions[currentIndex].answer;

  var header = document.createElement("h1");

  header.innerHTML = title;
  body.appendChild(header);
  console.log (title);


for (var i = 0; i < choices.length; i++) {

  
  
  var tr = document.createElement("tr");
  var td = document.createElement("td");

  td.innerHTML = choices[i];
  tr.appendChild(td);
  body.appendChild(tr);

  console.log(title);
  console.log(choices);
  console.log(answer);
  
}
}
function timer(){
  // event.preventDefault();
 
  setInterval(function(){
    console.log("timer")
    body.textContent = "";
    document.getElementById("counter").innerHTML = timeleft;
    timeleft -= 1;
    if(timeleft === 0){
      clearInterval(timer);
      document.getElementById("countdown");
    }
  },1000);
}
startButton.addEventListener("click", function(){
  timer();
  getQuestion();


});


var currentIndex = 0;

//show user the first question




//Once user selects answer show whether they are correct or incorrect 
//Keep track of this score 
//Move on to the next question
//repeat until all questions have been asked and answered 
//Show user's final score and have them enter initials to save highscore
//when inititals are submitted change to the high score screen and have an options to clear 

