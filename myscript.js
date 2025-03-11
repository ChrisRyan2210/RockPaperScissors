//intialize variables to keep track of scoress
let playerScore = 0;
let cpuScore = 0;   

//Get computers choice
let computersChoice = () => {
    let number = Math.random(); //random num between 0 and 1
    let choice;
    if (number < .33) {
        choice = "Rock";
    }
    else if (number < .66) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    };
    
    return choice;
}

//Get human choice
let humansChoice = () => {
    let choice = prompt("Enter your choice:");
    return choice;
}

//Play the game
let playRound = (humanChoice, cpuChoice) => {

    if (humanChoice == cpuChoice) {
        console.log("Tie, play again");
    }
    else if ((humanChoice == "rock" && cpuChoice == "scissors") 
            || (humanChoice == "paper" && cpuChoice == "rock")
            || (humanChoice == "scissors" && cpuChoice == "paper")) {
        console.log("Congrats, you win!");
        playerScore++;
    }
    else if ((cpuChoice == "rock" && humanChoice == "scissors") 
        || (cpuChoice == "paper" && humanChoice == "rock")
        || (cpuChoice == "scissors" && humanChoice == "paper")) {
        console.log("You lose, try again");
        cpuScore++;
    }
    else {
        console.log("something has gone wrong in the game!");
    };
}

//Play game function - plays 5 rounds, keeps track of score and displays winner at end

let playGame = () => {
    for (let i = 0; i<5; i++) {
        console.log("Round" + (i + 1));
        let humanPick = humansChoice().toLowerCase();
        let cpuPick = computersChoice().toLowerCase();
        playRound(humanPick, cpuPick);
        console.log("Human picked " + humanPick);
        console.log("Computer picked " + cpuPick);
        console.log("The score after round " + (i + 1) + " is: Player " + playerScore + " - " + cpuScore + " Computer");
    }
};

console.log(playGame());
console.log("Final Score");
console.log("The final score was: Player " + playerScore + " - " + cpuScore + " Computer");
