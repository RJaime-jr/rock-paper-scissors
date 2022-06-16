let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
const buttons = document.querySelectorAll("input");

function computerPlay(){
    let choices = ["fire","water","grass"];
    return choices[Math.floor(Math.random() * choices.length)]
}


function playRound(playerSelection){
    let computerSelection = computerPlay();
    let win = `You Win! ${playerSelection} is super effective against ${computerSelection}.`;
    let loss = `You were defeated! ${playerSelection} does almost nothing to ${computerSelection}.`;
    let draw = 'Draw! You two are evenly matched!';
    let result ="";

    if(playerSelection == computerSelection){
        result = draw;
       
    }
    else if(playerSelection == "fire" && computerSelection == "water" ||
    playerSelection == "water" && computerSelection == "grass" ||
    playerSelection == "scissors" && computerSelection == "fire"){
        result = loss; 
    }
    


    else if(playerSelection == "fire" && computerSelection == "grass"||
            playerSelection == "water" && computerSelection == "fire" ||
            playerSelection == "grass" && computerSelection == "water"){
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