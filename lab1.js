init();

//function to initiate the game
function init() {
    makeChoice();
}

//function that makes the choice of the computer
function makeChoiceComputer () {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);
    return (computerChoice);
}

//function to check the user Choice.
function makeChoice () {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var pcChoice = makeChoiceComputer();
    if (userChoice === "paper" || userChoice === "rock" || userChoice === "scissors") {
        console.log("Your Choice: " + userChoice);
        console.log(compare(userChoice, pcChoice));
    } else {
        console.log("Your choice isn't valid! Chose again.");
        makeChoice();
    }
}

// function to compare the choices
function compare (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") return "Rock Wins!";
        else return "Paper Wins!";
    } else if (choice1 === "paper") {
        if (choice2 === "rock") return "Paper Wins!";
        else return "Scissors Wins!";
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") return "Scissors Wins!";
        else return "Rock Wins!";
    }
}