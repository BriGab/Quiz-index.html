// var score = document.getElementById("score") 
var saveScore= document.getElementById("saveScore");
var input = document.getElementById("input")
var getUserInfo = { 
  HTML: {
      name: [],
      num: []
  },
}

// var cities = JSON.parse(localStorage.getItem("cities")) || [];

getTheScore();
function getTheScore (){
    console.log(localStorage.getItem("score"))
    var workingScore = localStorage.getItem("score")
    document.getElementById("number").innerHTML = workingScore

    saveScore.addEventListener("click", function(){

        var name = input.value
        var num = workingScore

        var newGetScore =  {
            name: name,
            num: num
        }  


        var allScores = JSON.parse(localStorage.getItem("allScores"))
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.textContent = newGetScore.name + " " + " " + newGetScore.num    
        tr.appendChild(td);
        document.getElementById("table1").appendChild(tr);  
        console.log("allScores", getUserInfo)

        
    
        console.log(allScores.name)
        localStorage.setItem("allScores", JSON.stringify(newGetScore));
        
    })

    
}






