let playerChoice
let computerChoice 

start();

function start() {
    //some code here

    getPlayerChoice();
}

function getPlayerChoice() {
    document.querySelector(".rock").addEventListener("click", function() {
        playerChoice = "rock";
        getRandomComputerChoice();
    });
    document.querySelector(".paper").addEventListener("click", function() {
        playerChoice = "paper";
        getRandomComputerChoice();
    });
    document.querySelector(".scissors").addEventListener("click", function() {
        playerChoice = "scissors";
        getRandomComputerChoice();  
    });

}

function getRandomComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
        computerChoice = "rock"
    } 
    else if(randomNumber == 1) {
        computerChoice = "paper"
    }
    else if(randomNumber == 2) {
        computerChoice = "scissors"
    }
    console.log(computerChoice);

    showAnim();
}

function showAnim() {
    document.querySelector("#player1").classList.add("shake")
    document.querySelector("#player2").classList.add("shake")
    document.querySelector("#buttons .rock").style.pointerEvents = "none";
    document.querySelector("#buttons .paper").style.pointerEvents = "none";
    document.querySelector("#buttons .scissors").style.pointerEvents = "none";

    setTimeout(() => {
        showWinner();
    }, 2500);
}

function showWinner() {
    console.log(playerChoice, computerChoice);
    if (playerChoice == computerChoice) {
        document.querySelector("#draw").classList.remove("hidden")
    } else if (playerChoice == "rock" && computerChoice == "paper"){
        document.querySelector("#lose").classList.remove("hidden")
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        document.querySelector("#win").classList.remove("hidden")
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        document.querySelector("#lose").classList.remove("hidden")
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        document.querySelector("#win").classList.remove("hidden")
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        document.querySelector("#lose").classList.remove("hidden")
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        document.querySelector("#win").classList.remove("hidden")
    }

    document.querySelector("#player1").classList.remove("shake")
    document.querySelector("#player2").classList.remove("shake")
    document.querySelector("#player1").classList.add(playerChoice)
    document.querySelector("#player2").classList.add(computerChoice)

    setTimeout(() => {
        document.querySelector("#player1").classList.remove(playerChoice)
        document.querySelector("#player2").classList.remove(computerChoice)
        document.querySelector("#win").classList.add("hidden")
        document.querySelector("#draw").classList.add("hidden")
        document.querySelector("#lose").classList.add("hidden")
        document.querySelector("#buttons .rock").style.pointerEvents = "auto";
        document.querySelector("#buttons .paper").style.pointerEvents = "auto";
        document.querySelector("#buttons .scissors").style.pointerEvents = "auto";
        }, 3500);
}


