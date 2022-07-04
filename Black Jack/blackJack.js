// let firstCard = 2
// let secondCard = 11
// console.log(firstCard)
// console.log(secondCard)

// let sum = firstCard + secondCard
// console.log(sum)


// let age = 22

// if(age < 21)
// {
//     console.log("You can not enter the club!")
// }
// else{
//     console.log("Welcome!")
// }

// let age1 = 101

// if (age1 < 100) {
//     console.log("Not elegible")
    
// } else if (age1 === 100){
//     console.log("Here is your birthday card from the King!")
    
// }
// else {
//     console.log("Not elegible, you have already gotten one")
// }



let cardsArr = []
let sum = 0
let result = document.getElementById("result-el") 
let hasBlackJack = false
let isAlive = false
let cards = document.getElementById("card-el")

let player = {
    name: "Haroon",
    chips: 150,
}

let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + " : $" + player.chips

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    }
    else{
        return  randomNumber
    }
}
function renderGame() {
    cards.textContent = "Cards: "
    for (let i = 0; i < cardsArr.length; i++)
    {
        cards.textContent += cardsArr[i] 
        if (i < cardsArr.length - 1) {
            cards.textContent +=  " - "
            } 
            else {
        }
        console.log(cards)
    }  
    document.getElementById("sum-el").textContent = "Sum: " + sum  
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true      
    }
    else{
        message = "You're out of the game! 😭"
        isAlive = false
    }

    result.textContent = message
}
function addCard() {
    
    if (sum < 21) {
        let newCard = getRandomNumber()
        sum += newCard
        cardsArr.push(newCard)
       renderGame()
       
    } else if (sum === 21) {
        document.getElementById("message-el").textContent = "You can't draw card you have already won the game"
    }
    else{
        document.getElementById("message-el").textContent = "You can't draw card you have already lost the game"
    }
}
function startGame() {
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cardsArr = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame();
}

// let skills = [
//     "Web Development",
//     "Graphic Designing",
//     "Powerpoint Slides" 
// ]

// let mySelf = [
//     "Haroon Shahid",
//     18,
//     true
// ]

// mySelf.push("No pinneapple pizza")

// for (let i = 0; i < mySelf.length; i++)
// {
//     console.log(mySelf[i]);
// }