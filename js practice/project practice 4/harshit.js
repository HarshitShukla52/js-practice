let randomNumber = parseInt(Math.random() * 100 + 1)   //parse int use to avoid decimal value

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowAndHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultParas")


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
       if(isNaN(guess)){
        alert("Enter a valid number")
       }else if(guess < 1){
        alert("enter a number more than 1")
       }else if (guess > 100){
        alert("enter a number less than hundred")
       }else {
        prevGuess.push(guess)
        if (numGuess === 11) {
        displayGuess(guess)
        displayMsg(`Game Over. Random number was ${randomNumber}. Thankyou!`)  
        endGame()        
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg("Yahhoo! You guessed it right number. Congratulation! You win")
        endGame()
    }else if (guess < randomNumber){
        displayMsg("Number is too low")
    }else if (guess > randomNumber){
        displayMsg("Number is too high")
    }
    
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}; `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMsg(message){
    lowAndHigh.innerHTML = `<h3>${message}</h3>`

}


function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<input type="startNewGame" id="newGame" value="Start a new game" class="guessSubmit">'
    startOver.appendChild(p)
    playGame = false
   newGame();
}

function newGame(){
    
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame = true

    })
}
