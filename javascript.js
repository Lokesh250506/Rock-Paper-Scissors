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
            let a = document.createElement("p");
            a.textContent = "It's a TIE";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            userscore = userscore + 1;
            computerscore = computerscore + 1;
        }
        else if(computerchoice === "paper") {
            let a = document.createElement("p");
            a.textContent = "You Lose!! Paper beats rock";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            computerscore = computerscore + 1;
        }
        else {
            let a = document.createElement("p");
            a.textContent = "You Win!! Rock beats Scissors";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            userscore = userscore + 1;
        }
    }
    else if (userchoice === "paper") {
        if(computerchoice === "paper") {
            let a = document.createElement("p");
            a.textContent = "It's a TIE";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            userscore = userscore + 1;
            computerscore = computerscore + 1;
        }
        else if(computerchoice === "scissors") {
            let a = document.createElement("p");
            a.textContent = "You Lose!! Scissors beats paper";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            computerscore = computerscore + 1;
        }
        else {
            let a = document.createElement("p");
            a.textContent = "You Win!! Paper beats Rock";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            userscore = userscore + 1;
        }
    }
    else {
        if(computerchoice === "scissors") {
            let a = document.createElement("p");
            a.textContent = "It's a TIE";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            userscore = userscore + 1;
            computerscore = computerscore + 1;
        }
        else if(computerchoice == "rock") {
            let a = document.createElement("p");
            a.textContent = "You Lose!! Rock beats Scissors";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            computerscore = computerscore + 1;
        }
        else {
            let a = document.createElement("p");
            a.textContent = "You Win!! Scissors beats Paper";
            let b = document.querySelector ("div");
            b.textContent = "";
            b.appendChild(a);
            userscore = userscore + 1;
        }
    }

    if (userscore === 5 || computerscore === 5) {
        gameOver();
    }
}

function gameOver () {
    // Disable the buttons to stop play
    let button1 = document.querySelector (".button1");
    let button2 = document.querySelector (".button2");
    let button3 = document.querySelector (".button3");

    // Set the 'disabled' attribute to true
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    
    // Optionally change the button style to show they are inactive
    button1.style.backgroundColor = "lightgray";
    button2.style.backgroundColor = "lightgray";
    button3.style.backgroundColor = "lightgray";
}


function func1 (e) {
    let computerchoice = getComputerChoice();
    userchoice = "rock";
    playRound (userchoice, computerchoice);
    if (userscore !=5 && computerscore !=5) {
    let a = document.createElement ("p");
    a.textContent = "Your score is: " +userscore+ " Computer score is:"+computerscore;
    let b = document.querySelector(".div");
    b.appendChild(a);
    }
       else {
        let b = document.querySelector(".div");
        b.textContent = "";
        if (userscore===5){
            let a = document.createElement("p");
            a.textContent = "Damnn!! You won, Your score :"+userscore+ "Computer score: "+computerscore;
            b.appendChild(a);
        }
        else if (computerscore ===5) {
            let a = document.createElement("p");
            a.textContent = "Awww!! You lost, Your score:"+userscore+ ", Computer score:"+computerscore;
            b.appendChild(a);
        }
    }
}
function func2 (e) {
    let computerchoice = getComputerChoice();
    userchoice = "paper";
    playRound (userchoice, computerchoice);
    if (userscore !=5 && computerscore !=5) {
    let a = document.createElement ("p");
    a.textContent = "Your score is: " +userscore+ " Computer score is:"+computerscore;
    let b = document.querySelector(".div");
    b.appendChild(a);
    }
       else {
        let b = document.querySelector(".div");
        b.textContent = "";
        if (userscore===5){
            let a = document.createElement("p");
            a.textContent = "Damnn!! You won, Your score :"+userscore+ "Computer score: "+computerscore;
            b.appendChild(a);
        }
        else if (computerscore ===5) {
            let a = document.createElement("p");
            a.textContent = "Awww!! You lost, Your score:"+userscore+ ", Computer score: "+computerscore;
            b.appendChild(a);
        }
    }
}
function func3 (e) {
    let computerchoice = getComputerChoice();
    userchoice = "scissors";
    playRound (userchoice, computerchoice);
    if (userscore !=5 && computerscore !=5) {
    let a = document.createElement ("p");
    a.textContent = "Your score is: " +userscore+ " Computer score is:"+computerscore;
    let b = document.querySelector(".div");
    b.appendChild(a);
    }
       else {
        let b = document.querySelector(".div");
        b.textContent = "";
        if (userscore===5){
            let a = document.createElement("p");
            a.textContent = "Damnn!! You won, Your score :"+userscore+ ", Computer score: "+computerscore;
            b.appendChild(a);
        }
        else if (computerscore ===5) {
            let a = document.createElement("p");
            a.textContent = "Awww!! You lost, Your score:"+userscore+ ", Computer score: "+computerscore;
            b.appendChild(a);
        }
    }
}
let button1 = document.querySelector (".button1");
button1.addEventListener ("click", func1);

let button2 = document.querySelector (".button2");
button2.addEventListener ("click", func2);

let button3 = document.querySelector (".button3");
button3.addEventListener ("click", func3); 

