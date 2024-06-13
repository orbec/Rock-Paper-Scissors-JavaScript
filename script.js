

function getComputerChoice(){
    const choiceN = Math.floor(Math.random()*3);
    let choiceS = "";
    switch(choiceN){
        case 0:
            choiceS = "rock";
            break;
        case 1:
            choiceS = "paper";
            break;
        case 2:
            choiceS = "scissors";
            break;
    }
    return choiceS;
} 

function getHumanChoice(round){
    let choiceS = "";
    while (choiceS != "rock" && choiceS != "paper" && choiceS != "scissors"){
        choiceS = prompt (`Round ${round}.\nOptions: rock, paper, scissors.\nPlease enter your choice:`).toLowerCase();
    }
    return choiceS;
    
    
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice){
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore++;
            return `You won! ${humanChoice} beats ${computerChoice}`;
        }else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")){
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