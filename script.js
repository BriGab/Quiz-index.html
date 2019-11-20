var startButton = document.querySelector("#startButton");
var question = document.getElementById("question");
var description = document.getElementById("description");
var body = document.getElementById("body");
var header = document.getElementById("heading");
// var confirm = document.getElementsByClassName("rightWrong");
var timeleft = 75;
var currentIndex = 0;
var timerId;
var correct = 0, incorrect = 0;
//create a countdown for the quiz
//create a button that initiates the quiz

startButton.addEventListener("click", function () {
  startButton.remove();
  // description.remove();
  timer();
  getQuestion();
});

function timer() {
  timerId = setInterval(function () {
    document.getElementById("counter").innerHTML = timeleft;
    timeleft--;
    if (timeleft <= 0) {
      clearInterval(timerId);
      document.getElementById("counter").innerHTML = "Finished";
    }
  }, 1000);
}


//show user the first question
function getQuestion() {

  var title = questions[currentIndex].title;
  console.log(currentIndex);
  document.getElementById("heading").innerText = title;
  
  question.innerHTML = "";
  var choices = questions[currentIndex].choices;
  for (var i = 0; i < choices.length; i++) {

    var btn = document.createElement("BUTTON");
    btn.classList.add("btn")
    btn.classList.add("btn-info")
    btn.classList.add("btn-sm")
    btn.classList.add("btn-group-vertical")
    btn.classList.add("btnStyle")
    btn.value = choices[i];
    btn.innerText = choices[i];

    //  Assign function (bind 'this' to each instance of the function)
    btn.onclick = clickAnswer;

    question.appendChild(btn);
  }
}

function clickAnswer() {
  //  this === btn
  if (this.value === questions[currentIndex].answer) {
    document.getElementById("rightWrong").textContent = "Correct";
    correct++;
  } else {
    document.getElementById("rightWrong").textContent = "Incorrect";
    incorrect++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    getQuestion();
  } else {
    getScore();
    question.remove();
    header.remove();
  }
};

function getScore(){
  header.remove();
  // var createform = document.createElement("form");
  var createInput = document.createElement("input");
  // createform.setAttribute("action", "");
  // createform.setAttribute("method", "post");
  createInput.appendChild(question);
  // createform.classList.add("form-control");
  // createform.classList.add("form-control-sm");
  // createform.classList.add("formStyle");

  document.getElementById("rightWrong").innerHTML(createInput);
  
  // header.innerHTML = "Done!"
  // createform.appendChild(question);
  // console.log("form");

}





//Once user selects answer show whether they are correct or incorrect 
//Keep track of this score 
//Move on to the next question
//repeat until all questions have been asked and answered 
//Show user's final score and have them enter initials to save highscore
//when inititals are submitted change to the high score screen and have an options to clear



// var timeleft = 75;
// function timer(){
//   setInterval(function(){
//     console.log("timer")
//     body.textContent = "";
//     document.getElementById("counter").innerHTML = timeleft;
//     timeleft -= 1;
//     if(timeleft === 0){
//       clearInterval(timer);
//       document.getElementById("countdown");
//     }
//   }, 1000);
// }