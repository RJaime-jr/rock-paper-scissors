let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
const buttons = document.querySelectorAll("input");

function computerPlay(){
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}


function playRound(playerSelection){
    let computerSelection = computerPlay();
    let win = `You Win! ${playerSelection} beats ${computerSelection}.`;
    let loss = `You lost! ${computerSelection} beats ${playerSelection}.`;
    let draw = 'Draw!';
    let result ="";

    if(playerSelection == computerSelection){
        result = draw;
       
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        result = loss;
        
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        result = win;
       
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        result = win;
        
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        result = loss;
        
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        result = loss;
       
    }
    else{
        result = win;
        
    }
    document.getElementById('results').innerHTML = result;
    return
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        console.log(playRound(button.value))
    })
})