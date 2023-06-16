var score = 0;
var step = 50;

var scoreElement = document.getElementById("score");
var clickButton = document.getElementById("clickButton");
var body = document.querySelector("body");

clickButton.addEventListener("click", function() {
  score++;
  scoreElement.textContent = score;

  if (score % step === 0) {
    var steps = score / step;
    alert("Вы прошли " + steps + " ступень!");
  }

  if (score >= 100) {
    body.style.backgroundColor = "#ff0000";
  }
});
