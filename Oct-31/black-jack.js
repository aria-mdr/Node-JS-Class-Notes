const startBtn = document.querySelector('#start')
const startCtr = document.querySelector('#start-game')
const duringGame = document.querySelector('#during-game')
const endBtn = document.querySelector('#end')
const hitBtn = document.querySelector('#hit')
const resultContainer = document.querySelector('#results')
const playerHandDisplayTarget = document.querySelector('#player-hand')
const dealerHandDisplayTarget = document.querySelector('#dealer-hand')

const basicCards = [
    { 
        value: 11,
        display: 'Ace'
    },
        { 
        value: 2,
    },
        { 
        value: 3,
    },
        { 
        value: 4,
    },
        { 
        value: 5,
    },
        { 
        value: 6,
    },
        { 
        value: 7,
    },
        { 
        value: 8,
    },
        { 
        value: 9,
    },
        { 
        value: 10,
    },
            { 
        value: 10,
        display: 'jack'
    },        { 
        value: 10,
        display: 'queen'
    },        { 
        value: 10,
        display: 'king'
    }
]

const faces = ['hears', 'spades', 'diamonds', 'clubs']
const deck = []

const dealerHand = []
const playerHand = [] 

startBtn.addEventListener('click', () => {
    startCtr.setAttribute(
        'style', 'display: none'
    )

    duringGame.setAttribute(
        'style', 'display: block'
    )

    resultContainer.setAttribute(
        'style', 'display: block'
    )
})


endBtn.addEventListener('click', () => {
    startCtr.setAttribute(
        'style', 'display: block'
    )

    duringGame.setAttribute(
        'style', 'display: none'
    )

    resultContainer.setAttribute(
        'style', 'display: none'
    )
})

hitBtn.addEventListener('click', () => {
    const playerCard = drawCard()
    const dealerCard = drawCard()

    playerHand.push(playerCard)
    dealerHand.push(dealerCard)

    const playerHandDisplay = createResult(playerHand)
    const dealerHandDisplay = createResult(dealerHand)
    const playerScore = calculateScore(playerHand) 
    const dealerScore = calculateScore(dealerHand)

    playerHandDisplayTarget.innerHTML = playerHandDisplay + ' Score: ' + playerScore
    dealerHandDisplayTarget.innerHTML = dealerHandDisplay + ' Score: ' + dealerScore

    if(playerScore >= 21) {
        hitBtn.setAttribute(
            'style', 'display: none'
        )
    } 
})

const createDeck = () => {
    faces.map((face) => {
        basicCards.map((card) => {
            deck.push({
                value: card.value,
                display: card.display ? `${card.display} of ${face}` : `${card.value} of ${face}`
            })
        })
    })
}

const drawCard = () => {
    const cardsLeft = deck.length
    const randomPostion = Math.floor(Math.random() * cardsLeft);
    const card = deck[randomPostion]
    deck.splice(randomPostion, 1)
    return card
}

const createResult = (cards) => {
    let result = ''

    cards.map((card, index) => {
        console.log(card)
        result += `${card.display}`
        if(index != cards.length - 1) {
            result += ', '
        }
    })

    return result
}

const calculateScore = (cards) => {
    let result = 0
     cards.map((card) => {
            console.log(card)
            result += card.value
    })
    console.log(result)
    return result
}

createDeck();