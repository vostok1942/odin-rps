// getComputerChoice functions generates random number from 0-2 and outputs either
// Rock, Paper, or Scissors
function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
          break;
        case 1:
            return "paper";
          break;
        default:
            return "scissors";
      }
  }

const computerSelection = getComputerChoice();
let playerSelection = prompt("Please enter RPS.").toLowerCase();

console.log(computerSelection)
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock")&&(computerSelection === "rock")) {
        return "It's a tie.";
    } else if ((playerSelection === "rock")&&(computerSelection === "paper")) {
        return "You lose. Paper beats rock.";
    } else if ((playerSelection === "rock")&&(computerSelection === "scissors")) {
        return "You win. Rock beats scissors.";

    } else if ((playerSelection === "scissors")&&(computerSelection === "scissors")) {
        return "It's a tie.";
    } else if ((playerSelection === "scissors")&&(computerSelection === "paper")) {
        return "You win. Scissors beat paper.";
    } else if ((playerSelection === "scissors")&&(computerSelection === "rock")) {
        return "You lose. Rock beats scissors.";

    } else if ((playerSelection === "paper")&&(computerSelection === "paper")) {
        return "It's a tie.";
    } else if ((playerSelection === "paper")&&(computerSelection === "scissors")) {
        return "You lose. Scissors beat paper.";
    } else if ((playerSelection === "paper")&&(computerSelection === "rock")) {
        return "You win. Paper beats rock.";

    } else {
        return "Please enter either rock, paper, or scissors.";
      }
  }


console.log(playRound(playerSelection, computerSelection))