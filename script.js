var startButton = document.querySelector("#startButton");
var body = document.getElementById("body");
//create a countdown for the quiz
//create a button that initiates the quiz

var timeleft = 75;
startButton.addEventListener("click", function(event){
  event.preventDefault();
  var downloadTimer = setInterval(function(){
    body.textContent = "";
    document.getElementById("counter").innerHTML = timeleft;
    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished"
    }
    for (var i = 0; i < questions.length; i++) {

      var title = questions[i].title;
      var choices = questions[i].choices;
      var answer = questions[i].answer;
      
      var tr = document.createElement("tr");
      var td = document.createElement("td");
    
      td.innerHTML = title[0];
      td.innerHTML = choices[0];
      tr.appendChild(td);
      body.appendChild(tr);

    
      
    
    }
  }, 1000);
});
//show user the first question


// var tr = document.createElement("tr");
//         // create a table data cell (td) and inside build out an a tag w/ the link and name of link
//         var td = document.createElement("td");
//         // <a href ='linkehere' target='_blank'>nameHere</a>
//         td.innerHTML = "<a href='" + url + "' target='_blank'>" + name + "</a>";
//         // td.innerHTML = `<a href=${url} target="_blank">${name}</a>`; //does the same thing as teh line above
//         // append the td's into the tr 
//         tr.appendChild(td);
//         // Since tr is living only in javascript we have to append our tr to the table
//         bookmarksTable.appendChild(tr);
//         // If we add the delete button, wire up the delete click event






//Once user selects answer show whether they are correct or incorrect 
//Keep track of this score 
//Move on to the next question
//repeat until all questions have been asked and answered 
//Show user's final score and have them enter initials to save highscore
//when inititals are submitted change to the high score screen and have an options to clear 

