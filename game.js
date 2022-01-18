
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

function game() {
    let playercount=0;
    let computercount=0;
    let playerSelection='';
    let computerSelection='';
    let round;
    
    for(let i=0;i<5;i++) {
        playerSelection=window.prompt();
        computerSelection=computerPlay();
        round=playRound(playerSelection,computerSelection);

        if (round.result=="defeat") {
            computercount++;
        }

        else if (round.result=="victory") {
            playercount++;
        }

        console.log(round.message);
    }
    
    if (playercount==computercount){
        console.log("Match Drawn");
    }
    else if (playercount>computercount){
        console.log("Congratulation! You Won");
    }
    else {
        console.log("You Lost, Better luck next time");
    }
    
}

game();