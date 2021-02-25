const roll = document.getElementById("roll")
const total = document.getElementById("total")
const image = document.getElementById("dice")
const message = document.getElementById("message")


const randomNum = () => {
    return Math.floor(Math.random() * 6 + 1)
}

const displayDice = (num) => {
    switch(num){
        case 1:
            image.src="./assets/dice1.png";
        break;
        case 2:
            image.src="./assets/dice2.png";;
        break;
        case 3:
            image.src="./assets/dice3.png";;
        break;
        case 4:
            image.src="./assets/dice4.png";;
        break;
        case 5:
            image.src="./assets/dice5.png";;
        break;
        case 6:
            image.src="./assets/dice6.png";
        break;

    }

}



let score = 0
roll.addEventListener("click", () => {
    roll.innerHTML = "roll"
    let dice = randomNum()
    displayDice(dice)
    score += dice
  
    // roll.innerHTML = "roll"
    if(dice == 1){
        displayDice(dice)
        message.innerHTML = "you lose!"
        roll.innerHTML = "play again"
        score = 0
        total.innerHTML = `Your score is: ${score}`
    } else if (score >= 20){
        message.innerHTML = "you win!"
        total.innerHTML = `Your score is: ${score}`
        roll.innerHTML = "play again"
        score = 0
    } else if (score < 20){
    message.innerHTML = "roll again!"
    total.innerHTML = `Your score is: ${score}`
    }
})

    
    