
let cardarray = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name : "Player",
    points : 200,
    
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $ " + player.points
// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)




function randomizer(){

    let rn = Math.floor(Math.random()*13)+1

    if( rn > 10){
        return 10
    } else if ( rn === 1){
        return 11
    } else {
        return rn
    }

}


function startGame(){
    let firstCard = randomizer()
    let secondCard = randomizer()
    cardarray = [firstCard,secondCard]
    sum = firstCard + secondCard


    rendergame()
}
function rendergame() {
    console.log("yup")
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 

    for ( let i =0; i< cardarray.length; i += 1){

        cardsEl.textContent += cardarray[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!" 
        hasBlackJack = true
        player.points += 50
        playerEl.textContent = player.name + ": $ " + player.points    
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.points -= 50
        playerEl.textContent = player.name + ": $ " + player.points 
        
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function newcard(){

    if(isAlive === true && hasBlackJack === false) {
    let card3 = randomizer()
    console.log("helooooooo")
    sum += card3
    cardarray.push(card3)
    }
    rendergame()

}