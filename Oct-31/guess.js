console.log('game started')

const randomNumber = Math.trunc(Math.random() * 100);

console.log(randomNumber);

const prevGuesses = [];
// access the get button
const guessBtn = document.getElementById('guessbtn')
// add event handler for click
guessBtn.addEventListener('click', () => {
    // when clicked, get the input and its value
    const guessInput = document.querySelector('#guess')
    const guess = guessInput.value
    prevGuesses.push(guess)
    const resultContainer = document.querySelector('#results')

    if(guess === randomNumber) {
        console.log('you guessed it correctly')
        resultContainer.innerHTML = 'you guessed it correctly'
    } else if(guess > randomNumber) {
        console.log('you guessed it wrong, a bit too high')
        resultContainer.innerHTML = 'you guessed it wrong, a bit too high'
    } else if(guess < randomNumber) {
        console.log('you guessed it wrong, a bit too low')
        resultContainer.innerHTML = 'you guessed it wrong, a bit too low'

    }
})