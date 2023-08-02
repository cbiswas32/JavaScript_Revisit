console.log("JS Loaded!");


const imageSource = {
    rock: {
        text : 'rock',
        image : 'images/rock-emoji.png'
    },
    paper: {
        text : 'paper',
        image : 'images/paper-emoji.png'
    },
    scissors: {
        text : 'scissors',
        image : 'images/scissors-emoji.png'
    }


}


let score = JSON.parse(localStorage.getItem('score'));

if(!score){
    score = {
        Wins : 0,
        Losses : 0,
        Ties: 0
    }

}

let showTheScoreElement = document.querySelector('.status-info');
showTheScoreElement.innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;

const  storeScore = function(status){
    if(status==='You WON!'){
        score.Wins += 1;
    }
    else if(status==='You Lose :('){
        score.Losses += 1;
    }
    else if(status==='Draw'){
        score.Ties += 1;
    }
    showTheScoreElement.innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
    localStorage.setItem('score',JSON.stringify(score));

}


const  resetScore = function(){
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.setItem('score',JSON.stringify(score));
    showTheScoreElement.innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
    
}

const setResult = function(res, userMove, computerMove){
    let resultSection = document.querySelector('.result-section');
    resultSectionHTML =`<div class="result"></div>
        <div class="result-visualization">
            <p class="result-to-show"> You 
                <img src="" alt="" class="you-choosen-img">
                <img src="" alt="" class="computer-choosen-img">
                Computer 
            </p>
        </div>`;
    resultSection.innerHTML = resultSectionHTML;   
    let resultElemet = document.querySelector('.result');
    let youChooseImageElement = document.querySelector('.you-choosen-img');
    let computerChooseImageElement = document.querySelector('.computer-choosen-img');
    resultElemet.innerHTML = res;
    youChooseImageElement.src = imageSource[userMove].image;
    computerChooseImageElement.src = imageSource[computerMove].image;
    

}

const computerMoveGenerator = function(){
    let randValue = Math.random();
    let compMove;
    if(randValue>=0 && randValue<0.33){
        compMove = 'rock';
    }
    else if(randValue>=0.33 && randValue<0.66){
        compMove = 'paper';
    }
    else{
        compMove = 'scissors';
    }
    console.log("Computer's Move: " + compMove);
    return compMove;

}

const moveLogic = function(userMove){
    let computerMove = computerMoveGenerator();
   
    if( computerMove === userMove){
        let res = 'Draw';
        setResult(res, userMove, computerMove);
        storeScore(res);

    }
    else if((userMove === 'rock' && computerMove === 'scissors') || (userMove === 'scissors' && computerMove === 'paper') || (userMove === 'paper' && computerMove === 'rock')) {
        
        let res = 'You WON!';
        setResult(res, userMove, computerMove);
        storeScore(res);
    }

    else{
        
        let res = 'You Lose :(';
        setResult(res, userMove, computerMove);
        storeScore(res);
        
    }
    console.log('Move Logic');
}