
let  moves = document.getElementById('move');
let  Results = document.getElementById('result');
let  scores = document.getElementById('scores');
let resetMessage = document.getElementById('resetMessage');

let GameMove;
let NewScores;

let score = JSON.parse(localStorage.getItem('scores'));


if(!score){
    
    score ={
        losses: 0,
        wins: 0,
        ties: 0
    }
}




function playerMove(choice){

      let randomNumber = Math.random();
    let computerPick;

    if(randomNumber >0 && randomNumber <1/2){

        computerPick = "rock";
    }else if(randomNumber > 1/2 && randomNumber <2/3){

        computerPick = "paper";
    }else if(randomNumber > 2/3 && randomNumber < 1){

        computerPick = "scissors";
    }

    let result;


    if(choice === "rock"){

        if(computerPick === "rock"){

            result = "Tie";
        }else if(computerPick === "paper"){

            result = "You lose";
        }else if(computerPick === "scissors"){

            result = "You Win";
        }
    }else if(choice === "paper"){

        if(computerPick === "paper"){
            result = "Tie";
        }else if(computerPick === "rock"){

            result = "You lose";
        }else if(computerPick === "scissors"){
            result = "You Win";
        }
    }else if(choice === "scissors"){

        if(computerPick === "scissors"){

            result = "Tie";
        }else if(computerPick === "rock"){

            result = "You Win";
        }else if(computerPick === "paper"){

            result = "You lose"
        }
    }


    if (result === "Tie"){

        score.ties += 1;
    }else if(result === "You Win"){
        score.wins +=1;

    }else if(result === "You lose"){

        score.losses += 1;
    }

    



    localStorage.setItem('scores', JSON.stringify(score))
   
    GameMove = ` <p id="move" class="text-white flex justify-center items-center">
            You  picked
            <img src="src/img/${choice}-emoji.png" class="w-6 me-3">   
            
             Computer picked
            <img src="src/img/${computerPick}-emoji.png"  class="w-6">
          

        </p>`
    moves.innerHTML = GameMove

    Results.innerHTML =result;

        NewScores = `Wins: ${score.wins} Tie: ${score.ties} losess: ${score.losses}`

    scores.innerHTML = NewScores;

  
}





function resetsScore(){
  
   score.losses = 0;
   score.ties = 0;
   score.wins = 0;

   localStorage.removeItem('scores')

   NewScores = `Wins: ${score.wins} Tie: ${score.ties} losess: ${score.losses}`

    scores.innerHTML = NewScores;

    resetMessage.innerHTML = 'Scores Reset'

  setTimeout(() =>{

    resetMessage.innerHTML = ''
  } ,1000)
  
 
}



