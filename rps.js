let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");
const monster = document.querySelector("#monster");

function computerPlay(){ 
    let choices = [["fire","images/fire-monster.png"],["water","images/water-monster.png" ], 
             ["grass", "images/forest-monster.png"]];
    let random = Math.floor(Math.random()*choices.length);
    monster.setAttribute("src",choices[random][1]);
    return choices[random][0];
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
        computerScore += 1;
        result = loss; 

    }
    


    else if(playerSelection == "fire" && computerSelection == "grass"||
            playerSelection == "water" && computerSelection == "fire" ||
            playerSelection == "grass" && computerSelection == "water"){
                playerScore +=1;
        result = win;
        }
    
        let score = `Monsters Slain: ${playerScore}    Lives Lost: ${computerScore}`;
   
        document.getElementById('results').innerHTML = result;
        document.getElementById('score').innerText = score;
        return
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        console.log(playRound(button.value))
        console.log(playerScore,computerScore);
        
    })
})