const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');

const modal = document.getElementById('modal');
const closeBtn = document.getElementById("closeModal");
const modalText = document.getElementById('modal-text');

const ROCK = "ROCK";
const PAPER = "PAPER"
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;

const DRAW = 'DRAW';
const PLAYER_WINS = 'PLAYER WINS';
const COMPUTER_WINS = "COMPUTER WINS";

let PLAYER_CHOICE = '';
let COMPUTER_CHOICE = '';


const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const evaluateWinner = (PLAYER_CHOICE, COMPUTER_CHOICE) => {
    const winner = getWinner(PLAYER_CHOICE, COMPUTER_CHOICE);
    console.log(winner);
    const winMessage = (winner) => {
        if (winner === DRAW) {
            return `You chose ${PLAYER_CHOICE} and Computer chose ${COMPUTER_CHOICE}. It's a draw.`;
        } else if (winner === PLAYER_WINS) {
            return `You chose ${PLAYER_CHOICE} and Computer chose ${COMPUTER_CHOICE}. You won!.`;
        } else {
            return `You chose ${PLAYER_CHOICE} and Computer chose ${COMPUTER_CHOICE}. Computer won.`;
        }
    };
    modalText.textContent = winMessage(winner);
}


const getWinner = (playerChoice, compChoice = DEFAULT_CHOICE) => {
    return playerChoice === compChoice
        ? DRAW
        : (compChoice === ROCK && playerChoice === PAPER) ||
        (compChoice === PAPER && playerChoice === SCISSORS) ||
        (compChoice === SCISSORS && playerChoice === ROCK)
            ? PLAYER_WINS
            : COMPUTER_WINS;
}


rockButton.addEventListener('click', () => {
    PLAYER_CHOICE = ROCK;
    COMPUTER_CHOICE = getComputerChoice();

    evaluateWinner(PLAYER_CHOICE, COMPUTER_CHOICE);

    modal.classList.add('open');
});

paperButton.addEventListener('click', () => {
    PLAYER_CHOICE = PAPER;
    COMPUTER_CHOICE = getComputerChoice();

    evaluateWinner(PLAYER_CHOICE, COMPUTER_CHOICE);

    modal.classList.add('open');
});

scissorsButton.addEventListener('click', () => {
    PLAYER_CHOICE = SCISSORS;
    COMPUTER_CHOICE = getComputerChoice();

    evaluateWinner(PLAYER_CHOICE, COMPUTER_CHOICE);

    modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
})




/*
const getPlayerChoice = () => {

    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
        return DEFAULT_CHOICE;
    }
    return selection;
}
 */

/*
startGameBtn.addEventListener("click", function() {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);
    let message = `You chose ${playerChoice}, Computer chose ${computerChoice}. Result: `
    if (winner === DRAW) {
        alert(message + DRAW);
    } else if (winner === PLAYER_WINS) {
        alert(message + PLAYER_WINS);
    } else {
        alert(message + COMPUTER_WINS);
    }
    gameIsRunning = false;
})
 */