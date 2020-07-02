const user_score = 0;
const computer_Score = 0;

const user_span = document.getElementsByClassName("user");
const computer_span = document.getElementsByClassName("computer");
const result_div = document.getElementsByClassName("result");
const score_board = document.getElementsByClassName("score-board");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");

function computer_choice() {
  const choices = ["r", "p", "s"];
  const comp_choice = Math.floor(Math.random() * 3);
  return choices[comp_choice];
}

function game(user_choice) {
  console.log(computer_choice(user_choice));
}

rock_div.addEventListener("click", function () {
  //   console.log("rock");
  game("r");
});

paper_div.addEventListener("click", function () {
  //   console.log("paper");
  game("p");
});
scissor_div.addEventListener("click", function () {
  //   console.log("scissors");
  game("s");
});
