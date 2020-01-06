var startButton = document.querySelector("#startButton");
var question = document.getElementById("question");
var description = document.getElementById("description");
var body = document.getElementById("body");
var header = document.getElementById("heading");
var div = document.getElementById("rightWrong");
var score = document.getElementById("score") 
var saveScore= document.getElementById("saveScore");
var input = document.getElementById("input")
var getUserInfo = { 
  HTML: {
      name: [],
      num: []
  },
}



var allScores = JSON.parse(localStorage.getItem("allScores"))
console.log("allScores", getUserInfo)
// var cities = JSON.parse(localStorage.getItem("cities")) || [];

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
    var final = timeleft--;
    score.textContent= final;
    if (timeleft === -1) {
      clearInterval(timerId)
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
    div.textContent = "Correct";
    correct++;
  } else {
    div.textContent = "Incorrect";
    incorrect++;
    timeleft -=10;
  }
  console.log(timeleft)
  currentIndex++;
  if (currentIndex < questions.length) {
    getQuestion();
  } else { 
    clearInterval(timerId);
    header.innerHTML = "";
    div.innerHTML = "";
    question.innerHTML = "";
    document.getElementById("hideMe").style.display= "inline";
   
    
  }
};
saveScore.addEventListener("click", function(){

var name = input.value
var num = score.innerHTML

var newGetScore =  {
  name: name,
  num: num
}
var nameLine = document.getElementById("line")
nameLine.textContent = name + " " + " " + num


localStorage.setItem("allScores", JSON.stringify(newGetScore));
// collect bookmark url and store in variable

// localStorage.setItem(initials, scores);
// let user = {initials: [input.value], score: [score.value]};
// localStorage.setItem('jsonValue',JSON.stringify(user));

// //Retrieve the values from localstorage
// let temp = localStorage.getItem('someValue'); //temp is hello
// let tempJSONString = localStorage.getItem('jsonValue'); 
// let tempJSON = JSON.parse(tempJSONString );
// console.log(temp)
// console.log(tempJSON)
// console.log(JSON.parse(localStorage.getItem(1)))

// saveBox.innerText = JSON.parse(localStorage.getItem(initials))
// input.append(saveBox)

})