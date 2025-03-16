//grabbing info from html page
let playerChoice = '';
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#cpu-score');   
const theChoice = document.querySelector('#cpu-choice');
const mainContainer = document.querySelector(".main-container");

//intialize variables to keep track of scoress
let playerScore = 0;
let cpuScore = 0; 
let roundCounter = 1;

//getting cpu choice
let computersChoice = () => {
    let number = Math.random(); //random num between 0 and 1
    let choice;
    if (number < .33) {
        choice = "rock";
    }
    else if (number < .66) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    };
    
    return choice;
}


//functions for if buttons are clicked
btnRock.addEventListener("click", () => {   
    playerChoice = 'rock';
    playRound(playerChoice, computersChoice());
    roundCounter++; 
});

btnPaper.addEventListener("click", () => {
    playerChoice = 'paper';
    playRound(playerChoice, computersChoice());
    roundCounter++;
});

btnScissors.addEventListener("click", () => {
    playerChoice = 'scissors';
    playRound(playerChoice, computersChoice());
    roundCounter++;
});

const updatePlayerTotalScore = (score) => {
    pScore.textContent = score;
};

const updateCPUTotalScore = (score) => {
    cScore.textContent = score;
};

const showCPUChoice = (choice) => {

    theChoice.textContent = 'Computer Choice: ' + choice;
};
  
const endGame = () => {
    const finalScore = document.createElement('h2');
    finalScore.textContent = `Final Score: Player ${playerScore} - ${cpuScore} Computer`;
    mainContainer.appendChild(finalScore);
    resetGame();
}

const resetGame = () => {
    
    playerScore = 0;
    cpuScore = 0;
    updateCPUTotalScore(cpuScore);
    updatePlayerTotalScore(playerScore);
    roundCounter = 1;
}

//Play the game
let playRound = (humanChoice, cpuChoice) => {

    if (humanChoice == cpuChoice) {
        alert("Tie, choose again");
        showCPUChoice(cpuChoice);
    }
    else if ((humanChoice == "rock" && cpuChoice == "scissors") 
            || (humanChoice == "paper" && cpuChoice == "rock")
            || (humanChoice == "scissors" && cpuChoice == "paper")) {
        alert('You win the round, choose again');
        playerScore++;
        updatePlayerTotalScore(playerScore);
        showCPUChoice(cpuChoice);
    }
    else if ((cpuChoice == "rock" && humanChoice == "scissors") 
        || (cpuChoice == "paper" && humanChoice == "rock")
        || (cpuChoice == "scissors" && humanChoice == "paper")) {
        alert('You lose, play again.');
        cpuScore++;
        updateCPUTotalScore(cpuScore);
        showCPUChoice(cpuChoice);
    }
    else {
        console.log("something has gone wrong in the game!");
        alert("something has gone wrong in the game!");
    };

    if (roundCounter === 5) {
        endGame();
    };
}

let playGame = () => {
    for (let i = 0; i<5; i++) {
        
    }
};

//Play game function - plays 5 rounds, keeps track of score and displays winner at end

// let playGame = () => {
//     for (let i = 0; i<5; i++) {
//         console.log("Round" + (i + 1));
//         let humanPick = humansChoice().toLowerCase();
//         let cpuPick = computersChoice().toLowerCase();
//         playRound(humanPick, cpuPick);
//         console.log("Human picked " + humanPick);
//         console.log("Computer picked " + cpuPick);
//         console.log("The score after round " + (i + 1) + " is: Player " + playerScore + " - " + cpuScore + " Computer");
//     }
// };

console.log(playGame());
console.log("Final Score");
console.log("The final score was: Player " + playerScore + " - " + cpuScore + " Computer");
