function getComputerChoice(){
    let response;
    let random=Math.random();
    if(random<=0.33){
        response="rock";
    }
    else if(random>0.33 && random<0.66){
        response="paper";
    }
    else{
        response="scissors"
    }
    return response;
};


function getHumanChoice(){
     return prompt("Please enter rock, paper or scissors:").trim().toLowerCase();
};


let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
if((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="paper" && computerChoice=="rock") || (humanChoice=="scissors" && computerChoice=="paper")) {
    humanScore+=1;
    return `You won!!`;
}
else if(humanChoice==computerChoice){
    return `It's a tie!!`;
}
else{
    computerScore+=1;
    return `You lost`;
}
};

const Rock=document.querySelector("#rock");
const Scissors=document.querySelector("#scissors");
const Paper=document.querySelector("#paper");

const results=document.querySelector("#result");
const score=document.querySelector("#score");
const winner=document.querySelector("#winner");

function play(playerChoice){
    if(humanScore===5 || computerScore===5){
        return;
    }
    let computerchoice=getComputerChoice();
    let result=playRound(playerChoice, computerchoice);
    results.innerHTML=`<p>You chose ${playerChoice}</p>
    <p>computer chose ${computerchoice}</p>
    <p> ${result} </p>`;

    score.innerHTML=`The score is : ${humanScore} : ${computerScore}`;

    if(humanScore===5){
        winner.textContent="Yaay you won over the computer!!";
    }

    if(computerScore===5){
        winner.textContent="oohh you lost and the computer won!!";
    }
};


Rock.addEventListener("click", function(e){
    play("rock");
});

Scissors.addEventListener("click", function(e){
    play("scissors");
});

Paper.addEventListener("click", function(e){
    play("paper");
});

