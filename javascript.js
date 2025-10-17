function getComputerChoice() {
    let randomnumber = Math.random();
    if (randomnumber>=0 && randomnumber<=(1/3)) {
        return "rock";
    }
    else if (randomnumber>(1/3) && randomnumber<=(2/3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice () {
    let userchoice = prompt ("Enter Your choice (Rock, Paper or Scissors)","");
    return userchoice;
}
let userscore = 0;
let computerscore = 0;

function playRound (userchoice, computerchoice) {
    if (userchoice === "rock") {
        if(computerchoice === "rock") {
            alert ("Tie");
            userscore = userscore + 1;
            computerscore = computerscore + 1;
        }
        else if(computerchoice === "paper") {
            alert ("You Lose!! Paper beats rock");
            computerscore = computerscore + 1;
        }
        else {
            alert ("You Win!! Rock beats Scissors");
            userscore = userscore + 1;
        }
    }
    else if (userchoice === "paper") {
        if(computerchoice === "paper") {
            alert ("Tie");
            userscore = userscore + 1;
            computerscore = computerscore + 1;
        }
        else if(computerchoice === "scissors") {
            alert ("You Lose!! Scissors beats paper");
            computerscore = computerscore + 1;
        }
        else {
            alert ("You Win!! Paper beats Rock");
            userscore = userscore + 1;
        }
    }
    else {
        if(computerchoice === "scissors") {
            alert ("Tie");
            userscore = userscore + 1;
            computerscore = computerscore + 1;
        }
        else if(computerchoice == "rock") {
            alert ("You Lose!! Rock beats Scissors");
            computerscore = computerscore + 1;
        }
        else {
            alert ("You Win!! Scissors beats Paper");
            userscore = userscore + 1;
        }
    }
}

function playGame () {
    for (let i = 0; i<5 ; i++) {
        let computerchoice = getComputerChoice();
        let humanchoice = getHumanChoice().toLowerCase;
        playRound (humanchoice, computerchoice);
    }
    if (computerscore > userscore ) {
        alert("Computer wins the game, You are a big loser, Computer score :"+computerscore+" Your Score :"+userscore);
    }
    else if (userscore > computerscore) {
        alert ("Congratz bro, you won, Computer score "+computerscore+" Your Score :"+userscore);
    }
    else {
        alert ("Its a tie kiddo, Computer score :"+computerscore+" Your Score :"+userscore);
    }
}

playGame();