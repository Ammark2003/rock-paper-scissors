
function computerPlay() {
    let actions=["rock","paper","scissors"];
    let randomno=Math.floor(Math.random()*3);
    return actions[randomno];
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();

    if(playerSelection==computerSelection){
        return {result:"draw",message:"Round Drawn"}
    }

    if (playerSelection=="rock") {

        if (computerSelection=="paper") {
            return {result:"defeat",message:"You Lose! Paper beats Rock"};
        }

        else if (computerSelection=="scissors") {
            return {result:"victory",message:"You Win! Rock beats Scissors"};
        }
    }

    else if (playerSelection=="paper") {
        if (computerSelection=="rock"){
            return {result:"victory",message:"You Win! Paper beats Rock"};
        }

        else if (computerSelection=="scissors") {
            return {result:"defeat",message:"You Lose! Scissors beats Paper"};
        }
    }

    else if (playerSelection=="scissors") {
        if (computerSelection=="rock"){
            return {result:"defeat",message: "You Lose! Rock beats Scissors!"};
        }

        else if (computerSelection=="paper") {
            return {result:"victory",message:"You Win! Scissors beats Paper"};
        }
    }
}

function game() { //creates basic UI for the game and then keeps on playing round untill player or the computer reaches 5 points.
    const scoreCount=document.createElement('div');
    scoreCount.id="scoreCount";
    
    const gameButtons=document.createElement('div');
    gameButtons.id="gameButtons";
    const options = ["ROCK","PAPER","SCISSORS"];
    options.forEach((option)=> {
        let gbutton=document.createElement('button')
        gbutton.textContent=option;
        gbutton.id=option;
        gbutton.classList.add("button","gamebutton");
        gameButtons.appendChild(gbutton);
    })

    const message=document.createElement('div');
    message.id="message";


    gameContainer.appendChild(scoreCount);
    gameContainer.appendChild(gameButtons);
    gameContainer.appendChild(message);

    let playerSelection='';
    let playerCount=0;
    let computerCount=0;
    let roundresult={playercount:0,computercount:0};

    let Result;
    let gameover=false;

    let buttons=gameContainer.querySelectorAll(".gamebutton");
    for(let i=0;i<buttons.length;i++){ //add event listeners to all the game buttons 
        const button=buttons[i];
        button.addEventListener('click',function roundplay() { //calls roundstarts once a button is clicked and then update all the variables after the round
            playerSelection= button.textContent;
            console.log(playerSelection);
            roundresult=roundstart(playerSelection,playerCount,computerCount);
            playerCount=roundresult.playercount;
            computerCount=roundresult.computercount;
            if (roundresult.playercount == 5){ 
                Result="YOU WON!!!";
                button.removeEventListener('click',roundplay);
                gameover=true;
                endgame(Result);
                return;
            }
            else if (roundresult.computercount == 5) {
                Result="YOU LOST, Better luck next time.";  
                button.removeEventListener('click',roundplay);
                gameover=true;
                endgame(Result);
                return;
            }
            scoreCount.textContent=`Player  ${playerCount} || ${computerCount}  CPU`;
            
        })
        if (gameover){
            break;
        }
        
    }
    return Result;
    
    
}

function roundstart(playerSelection,playerCount,computerCount){

    let round;

    let computerSelection=computerPlay();
    round=playRound(playerSelection,computerSelection);

    if (round.result=="defeat") {
        computerCount++;
    }

    else if (round.result=="victory") {
        playerCount++;
    }

    message.textContent=round.message;
    return {
        playercount:playerCount,
        computercount:computerCount
    }
}

function startGame(){ //starts the game
    gameContainer.removeChild(start);
    gameContainer.style.display="block";
    game();
    return;
}

function endgame(result) { //removes all elements from gamecontainer and then display final result on the screen
    while (gameContainer.firstChild){
        gameContainer.removeChild(gameContainer.firstChild);
    }
    gameContainer.style.display='flex';
    gameContainer.classList.add('centreflex');
    finalresult=document.createElement('h1');
    finalresult.textContent=result;
    gameContainer.appendChild(finalresult)

   
}
let gameContainer=document.querySelector('#gameContainer');
let start = document.querySelector("#startButton");
start.addEventListener('click',()=>{
    startGame();
    
});