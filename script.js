function getComputerChoice(randNum) {
    console.log(randNum);
    switch(randNum) {
        case 0:
            return "Rock";
          break;
        case 1:
            return "Paper";
          break;
        default:
            return "Scissors";
      }
  }


console.log(getComputerChoice(Math.floor(Math.random() * 3)))