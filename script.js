const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');
const showPopUp = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const popUp = document.querySelector('.popUp');
const picks = document.querySelector('.picks');
const main = document.querySelector('.main');
const mainPopUp = document.querySelector('.main-popUp');
const rockPopUp = document.querySelector('.rock-pop-up');
const paperPopUp = document.querySelector('.paper-pop-up');
const scissorsPopUp = document.querySelector('.scissors-pop-up');
const options = document.querySelectorAll('.options');
const computerPopUp = document.querySelector('.computer-pop-up');
const humanTotal = document.querySelector('.h-score');
const computerTotal = document.querySelector('.c-score');
const resetGame = document.querySelector('.reset');
const restart = document.querySelector('.restart');
const winner = document.querySelector('.winner');
const winnerText = document.querySelector('.winner-text');
let humanWins = 0;
let computerWins = 0;

// humanTotal.textContent = humanWins;
// computerTotal.textContent = computerWins;


function hideMainForPopUps(){
    main.classList.add('hidden');
    mainPopUp.classList.remove('hidden');
    mainPopUp.classList.add('main');
}

function closeModal(){
    main.classList.remove('hidden');
    mainPopUp.classList.add('hidden');
    mainPopUp.classList.remove('main');
    rockPopUp.classList.remove('hidden');
    paperPopUp.classList.remove('hidden');
    scissorsPopUp.classList.remove('hidden');
    winner.classList.add('hidden')
    winner.classList.remove('main')
}


function gameComplete(){
    if(humanWins === 10){
        winnerText.textContent = "You Win!!!";
        console.log("You Win!!!");
        winnerPopUp()
        // resetScore()
    } else if(computerWins === 10){
        winnerText.textContent = "Computer Wins!!!";
        console.log("Computer Win!!!");
        winnerPopUp()
        // resetScore()
    }

}

function humanVsComputer(humanPlay, computerPlay){
    if(humanPlay === computerPlay){
        console.log("It's a Tie");
    } else if (humanPlay - computerPlay === -1 || humanPlay - computerPlay === 2) {
        console.log("Computer wins")
        computerWins += 1;
        computerTotal.textContent = computerWins;
        gameComplete();
        //  computerTotal.textContent = computerWins;
    } else{
        console.log("You win") 
        humanWins += 1
        humanTotal.textContent = humanWins;
        gameComplete();
    }
}

function winnerPopUp(){
    main.classList.add('hidden');
    mainPopUp.classList.add('hidden');
    mainPopUp.classList.remove('main');
    winner.classList.add('main'); 
    winner.classList.remove('hidden'); 
    // mainPopUp.classList.remove('main');
}



function resetScore(){
    closeModal();
    humanTotal.textContent = 0;
    computerTotal.textContent = 0;
    humanWins = 0;
    computerWins = 0;
}


let game = {
    playerChoice : '',
    option : ['rock', 'paper', 'scissor'],
    computerChoice : function(){
        return Math.trunc(Math.random() * this.option.length);

    }
}


for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", function(){
        let computerPick = game.computerChoice();
        console.log(computerPick);
        computerPopUp.src = `./media/${game.option[computerPick]}.png`;
        if(i === 0){
            hideMainForPopUps()
            humanVsComputer(i, computerPick);
            //hide other buttons
            paperPopUp.classList.add('hidden');
            scissorsPopUp.classList.add('hidden');
        } else if( i === 1){
            hideMainForPopUps()
            humanVsComputer(i, computerPick);
            //hide other buttons
            rockPopUp.classList.add('hidden');
            scissorsPopUp.classList.add('hidden');
        } else if (i === 2){
            hideMainForPopUps()
            humanVsComputer(i, computerPick);
            //hide other buttons
            rockPopUp.classList.add('hidden');
            paperPopUp.classList.add('hidden');
        }
        // if(computerWins === 10){
        //     console.log('Computer Wins')
        //     resetScore()
        // } else if(humanWins === 10){
        //     console.log('Computer Wins')
        //     resetScore()
        // }
    })
}

resetGame.addEventListener('click', function(){
    resetScore()
})

restart.addEventListener('click', function(){
    resetScore()
})

mainPopUp.addEventListener('click',closeModal);





