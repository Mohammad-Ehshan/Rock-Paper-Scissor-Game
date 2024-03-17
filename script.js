let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let userPoints = document.querySelector("#userScore");
let compPoints = document.querySelector("#compScore");
let msg = document.querySelector("#msg");

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userPoints.innerText = userScore;
    msg.innerText = `You Win,${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compPoints.innerText = compScore;
    msg.innerText =`You Lose,${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const draw = () => {
  console.log("The game was draw");
  msg.innerText ="The game was draw. Play Again";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let comp = Math.floor(Math.random() * 3);
  return options[comp];
};

const playGame = (userChoice) => {
  console.log("User clicked", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer clicked", compChoice);
  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
