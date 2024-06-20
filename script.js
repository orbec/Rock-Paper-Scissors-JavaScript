

let humanScore = 0;
let computerScore = 0;


const body = document.querySelector("body");

body.style = "display:flex; flex-direction:column";

const divBtns = document.createElement("div");
const divRes = document.createElement("div");

body.appendChild(divBtns);
body.appendChild(divRes);

divBtns.style = "margin:auto; flex:1 1 0;";
divRes.style = "margin:auto; flex: 1 1 0";

//buttons
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const resetBtn = document.createElement("button");

divBtns.appendChild(rockBtn);
divBtns.appendChild(paperBtn);
divBtns.appendChild(scissorsBtn);

rockBtn.textContent = "ROCK";
paperBtn.textContent = "PAPER";
scissorsBtn.textContent = "SCISSORS";
resetBtn.textContent = "Reset de Game";

resetBtn.style = "margin:auto; flex 1 1 0";

//Results
const par = document.createElement("p");
const h1 = document.createElement("h1");

divRes.appendChild(par);

//Functions
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)]
};

const isWinner  = (choice1, choice2) => {
    return (
        (choice1 === "rock" && choice2 === "scissors") 
        || (choice1 === "paper" && choice2 === "rock") 
        || (choice1 === "scissors" && choice2 === "paper")
    )};

function playRound (humanChoice, computerChoice){
    //evaluates if the human won
    if (isWinner(humanChoice, computerChoice)){
        humanScore++;
        par.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    }
    //evaluates if the computer won
    else if (isWinner(computerChoice, humanChoice)){
        computerScore++;
        par.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }else {
        par.textContent =  `Tied! both chose ${humanChoice}`;
    }
    if (humanScore === 5 || computerScore === 5){
        divRes.removeChild(par);
        divRes.appendChild(h1);
        h1.textContent = `Game Finished\nHuman Score: ${humanScore}, Computer Score: ${computerScore}`;
        body.appendChild(resetBtn);
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

//eventListeners
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
resetBtn.addEventListener("click", () =>{
    humanScore = 0;
    computerScore = 0;
    par.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    divRes.removeChild(h1);
    divRes.appendChild(par);
    body.removeChild(resetBtn);
});







/*
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice){
        //evaluates if the human won
        if (isWinner(humanChoice, computerChoice)){
            humanScore++;
            return `You won! ${humanChoice} beats ${computerChoice}`;
        }
        //evaluates if the computer won
        else if (isWinner(computerChoice, humanChoice)){
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }else {
            return `Tied! both chose ${humanChoice}`;
        }
    }

    for (let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(i+1), getComputerChoice()));
    }
    alert (`Game Finished\nHuman Score: ${humanScore}, Computer Score: ${computerScore}`);
}
    

playGame();
*/