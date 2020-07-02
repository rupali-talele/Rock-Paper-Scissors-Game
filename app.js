let user_score = 0;
let computer_score = 0;

const user_span = document.getElementById("user-score");
const computer_span = document.getElementById("computer-score");
const result_div = document.querySelector(".result>p");
const comp_choice_div = document.querySelector(".comp_choice>p");
const score_board = document.getElementsByClassName("score-board");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");

function get_computer_choice() {
  const choices = ["r", "p", "s"];
  const comp_choice = Math.floor(Math.random() * 3);
  return choices[comp_choice];
}
function win() {
  user_score++;
  user_span.innerHTML = user_score;
  computer_span.innerHTML = computer_score;
}

function lose() {
  computer_score++;
  user_span.innerHTML = user_score;
  computer_span.innerHTML = computer_score;
}

function draw() {
  user_span.innerHTML = user_score;
  computer_span.innerHTML = computer_score;
}
function game(user_choice) {
  let map = {
    r: "Rock",
    p: "Paper",
    s: "Scissors",
  };
  const computer_choice = get_computer_choice();
  comp_choice_div.innerHTML = "Computer chose : " + map[computer_choice];

  switch (user_choice + computer_choice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      result_div.innerHTML = `${map[user_choice]} beats ${map[computer_choice]} <br> You Win!`;
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      result_div.innerHTML = `${map[user_choice]} beats ${map[computer_choice]} <br> Computer Wins!`;
      break;
    default:
      draw();
      result_div.innerHTML = "Same selections <br> Game Draw!";
      break;
  }
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