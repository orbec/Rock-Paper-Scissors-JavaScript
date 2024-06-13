

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
        choiceS = prompt (`Round ${round}.
            Options: rock, paper, scissors.
            Please enter your choice:`)
            .toLowerCase();
    }
    return choiceS;
    
    
}

function isWinner (choice1, choice2){
    if ((choice1 === "rock" && choice2 === "scissors") 
        || (choice1 === "paper" && choice2 === "rock") 
        || (choice1 === "scissors" && choice2 === "paper")
    ){
        return true;
    }else {
        return false;
    }
}

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