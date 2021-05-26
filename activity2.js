 function getScore() {
     var getScore = localStorage.getItem("Score");
     document.getElementById("update").innerHTML = "Score : " + getScore;
 }

 function back() {
     window.location = "activity_1.html";
 }