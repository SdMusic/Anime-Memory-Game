var overlay = $('#overlay');
  overlay.on('click', function (e) {
        overlay
            .hide()
            .off();
            bgMusic();
            startTimer();

   });


document.addEventListener('DOMContentLoaded', () => {

//The Cards

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
        img: 'images/chopper.png'
    },
    {
        name: 'nico-robin',
        img: 'images/nico-robin.png'
    },
    {
        name: 'franky',
        img: 'images/franky.png'
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
        img: 'images/chopper.png'
    },
    {
        name: 'nico-robin',
        img: 'images/nico-robin.png'
    },
    {
        name: 'franky',
        img: 'images/franky.png'
    }
];

//The Card Shuffle

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

//Creating the Board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.classList.add('hvr-float-shadow');
      card.setAttribute('src', '../assets/images/blank.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

//Card Match Check

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '../assets/images/blank.jpg');
      cards[optionTwoId].setAttribute('src', '../assets/images/blank.jpg');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      laugh.play();
      cards[optionOneId].classList.remove('hvr-float-shadow');
      cards[optionTwoId].classList.remove('hvr-float-shadow');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', '../assets/images/blank.jpg');
      cards[optionTwoId].setAttribute('src', '../assets/images/blank.jpg');
    }
    cardsChosen = [];
    cardsChosenId = [];
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Yattaaaa!!! You are the Pirate King!!';
      stopMusic();
      stopTimer();
      win.play();
      finalScore();
    }
  }

// Card Flip

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    flipSound.play();
    moveCounter();
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 700);
    }
  }

  createBoard();
});

//The Sound Board

var bgmusic = new Audio('assets/audio/bg-music.mp3');
var win = new Audio('assets/audio/win.wav');
var flipSound = new Audio('assets/audio/woosh.wav');
var laugh = new Audio('assets/audio/luffy-laugh.wav');
flipSound.volume = 0.1;
laugh.volume = 0.1;

function bgMusic() {
    bgmusic.play();
}

function stopMusic(){
    bgmusic.pause();
    bgmusic.currentTime = 0;
}


function restart() {
    window.location.reload();
}

