let user_score = 0;
let computer_score = 0;
let round = 0;

const user_span = document.getElementById("user-score");
const computer_span = document.getElementById("computer-score");
const result_div = document.querySelector(".result>p");
const option_chosen_div = document.querySelector(".option_chosen>p");
const round_div = document.querySelector(".round>p");
const score_board = document.getElementsByClassName("score-board");
const end_game_btn = document.getElementById("end_game");
const choices_div = document.querySelector(".choices");
const move_div = document.querySelector(".move>p");
const play_again_btn = document.getElementById("play_again");

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

  round++;

  const computer_choice = get_computer_choice();
  round_div.innerHTML = "Round :" + round;
  option_chosen_div.innerHTML =
    "You chose : " +
    map[user_choice] +
    " | " +
    "Computer chose : " +
    map[computer_choice];

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
  game("r");
});

paper_div.addEventListener("click", function () {
  game("p");
});
scissor_div.addEventListener("click", function () {
  game("s");
});

end_game_btn.addEventListener("click", function () {
  move_div.style.display = "none";
  option_chosen_div.innerHTML = "";
  round_div.innerHTML = "";
  choices_div.style.display = "none";

  if (user_score > computer_score) result_div.innerHTML = "You Win!!!";
  else if (user_score < computer_score)
    result_div.innerHTML = "Computer Wins!!!";
  else result_div.innerHTML = "Game Draw!!!";

  end_game_btn.style = "display:none";
  play_again_btn.style = "display:block";
});

function restart() {
  user_span.innerHTML = 0;
  computer_span.innerHTML = 0;
  choices_div.style.display = "";
  end_game_btn.style = "";
  play_again_btn.style = "display:none";
  move_div.style.display = "";
  option_chosen_div.innerHTML = "";
  round_div.innerHTML = "";
  result_div.innerHTML = "";

  round = 0;
  user_score = 0;
  computer_score = 0;
}

play_again_btn.addEventListener("click", function () {
  restart();
});
