

const scoreForUser = document.querySelector('#score-for-user');

let scoreForComp = document.querySelector('#score-for-comp');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
let userScore = 0;

let computerScore = 0;
let chosenComputer = Math.floor(Math.random()*3)
let chosenUser;

let msg = document.getElementById('msg');

let computerTranslate;


rock.addEventListener('click', ()=> {
chosenUser = "Rock";
 chosenComputer = Math.floor(Math.random()*3)
 if(chosenComputer === 0){
    computerTranslate = "Rock"
} else if(chosenComputer === 1){
    computerTranslate = "Paper"
} else{
    computerTranslate = "Scissor"
}

 if(computerTranslate === chosenUser){
    msg.textContent = "It's a tie!"
}
else if(chosenUser === "Rock" && computerTranslate === "Paper"){
    msg.textContent = "You lose!"

    computerScore++

    scoreForComp.innerText = computerScore;

    scoreForUser.innerText = userScore;
} else if (chosenUser === "Rock" && computerTranslate === "Scissor"){
    msg.innerText = "You Win!"
    userScore++;

    scoreForUser.innerText = userScore;

}





});


paper.addEventListener("click", () => {
    chosenUser = "Paper";
 chosenComputer = Math.floor(Math.random()*3)

if(chosenComputer === 0){
    computerTranslate = "Rock"
} else if(chosenComputer === 1){
    computerTranslate = "Paper"
} else{
    computerTranslate = "Scissor"
}

 if(computerTranslate === chosenUser){
    msg.textContent = "It's a tie!"
}
else if(computerTranslate === "Rock" && chosenUser === "Paper"){
    msg.textContent = "You win!"
    userScore++;
    scoreForUser.innerText = userScore;
}

else if(chosenUser === "Paper" && computerTranslate === "Scissor"){
    msg.textContent = "You lose!"
    computerScore++
    scoreForComp.innerText = computerScore;
}




});

scissor.addEventListener("click", () => {
    chosenUser = "Scissor";
     chosenComputer = Math.floor(Math.random()*3)

     if(chosenComputer === 0){
    computerTranslate = "Rock"
} else if(chosenComputer === 1){
    computerTranslate = "Paper"
} else{
    computerTranslate = "Scissor"
}

 if(computerTranslate === chosenUser){
    msg.textContent = "It's a tie!"
}
else if(computerTranslate === "Rock" && chosenUser === "Scissor"){
    msg.innerText = "You lose!";

    computerScore++;
   scoreForComp.innerText = computerScore
}

else if(chosenUser === "Scissor" && computerTranslate === "Paper"){
    msg.textContent = "You win!"
    userScore++
    scoreForUser.innerText = userScore;
}

});




