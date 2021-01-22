document.addEventListener('DOMContentLoaded', () =>{
//the cards
const cardArray = [
    {
        name: 'ace',
        img: 'images/ace.png'
    },
    {
        name: 'luffy',
        img: 'images/luffy.png'
    },
    {
        name: 'nami',
        img: 'images/nami.png'
    },
    {
        name: 'chopper',
        img: 'images/ace.png'
    },
    {
        name: 'nico-robin',
        img: 'images/nico-robin.png'
    },
    {
        name: 'franky',
        img: 'images/ace.png'
    },
        {
        name: 'ace',
        img: 'images/ace.png'
    },
    {
        name: 'luffy',
        img: 'images/luffy.png'
    },
    {
        name: 'nami',
        img: 'images/nami.png'
    },
    {
        name: 'chopper',
        img: 'images/ace.png'
    },
    {
        name: 'nico-robin',
        img: 'images/nico-robin.png'
    },
    {
        name: 'franky',
        img: 'images/ace.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
//check
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('Thats the same one!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Im going to be pirate king!')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('That isnt enough to stop me!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Yattaaaa!!! You are the Pirate King!!'
    }
  }
//flip the card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosen.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})