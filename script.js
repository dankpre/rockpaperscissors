function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);


  switch (randomNum) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
    default:
      return 'Rock';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const validChoices = ['rock', 'paper', 'scissors'];

  if (!validChoices.includes(playerSelection)) {
    return 'Invalid choice. Please choose Rock, Paper, or Scissors';
  }

  if (playerSelection === computerSelection) {
    return 'Tie! Play again.';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(`Round ${round}: Choose Rock, Paper, or Scissors:`);
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(`Round ${round}: ${roundResult}`);

    if (roundResult.includes('win')) {
      playerScore++;
    } else if (roundResult.includes('lose')) {
      computerScore++;
    }
  }

  let gameResult;
  if (playerScore > computerScore) {
    gameResult = 'You win!';
  } else if (playerScore < computerScore) {
    gameResult = 'You lose.';
  } else {
    gameResult = 'Tie game.';
  }

  console.log(`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
  console.log(gameResult);
}