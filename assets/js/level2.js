var overlay = $('#overlay');
  overlay.on('click', function (e) {
        overlay
           .hide()
            .off();
           startTimer();
            bgMusic();

   });

document.addEventListener('DOMContentLoaded', () => {

//The Cards

const cardArray = [
    {
        name: 'ace',
        img: 'assets/images/ace.png'
    },
    {
        name: 'luffy',
        img: 'assets/images/luffy.png'
    },
    {
        name: 'nami',
        img: 'assets/images/nami.png'
    },
    {
        name: 'chopper',
        img: 'assets/images/chopper.png'
    },
    {
        name: 'nico-robin',
        img: 'assets/images/nico-robin.png'
    },
    {
        name: 'franky',
        img: 'assets/images/franky.png'
    },
    {
        name: 'bellamy',
        img: 'assets/images/bellamy.png'
    },
    {
        name: 'crocodile',
        img: 'assets/images/crocodile.png'
    },
    {
        name: 'doruflamingo',
        img: 'assets/images/doruflamingo.png'
    },
        {
        name: 'ace',
        img: 'assets/images/ace.png'
    },
    {
        name: 'luffy',
        img: 'assets/images/luffy.png'
    },
    {
        name: 'nami',
        img: 'assets/images/nami.png'
    },
    {
        name: 'chopper',
        img: 'assets/images/chopper.png'
    },
    {
        name: 'nico-robin',
        img: 'assets/images/nico-robin.png'
    },
    {
        name: 'franky',
        img: 'assets/images/franky.png'
    },
    {
        name: 'bellamy',
        img: 'assets/images/bellamy.png'
    },
    {
        name: 'crocodile',
        img: 'assets/images/crocodile.png'
    },
    {
        name: 'doruflamingo',
        img: 'assets/images/doruflamingo.png'
    },
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
      card.setAttribute('src', 'assets/images/blank.jpg');
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
      cards[optionOneId].setAttribute('src', 'assets/images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'assets/images/blank.jpg');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      laugh.play();
      cards[optionOneId].classList.remove('hvr-float-shadow');
      cards[optionTwoId].classList.remove('hvr-float-shadow');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'assets/images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'assets/images/blank.jpg');
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

//The Timer
function startTimer() {
    timer = setInterval(countTimer, 1000);
}

var timer = [];
var totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           var minute = Math.floor(totalSeconds /60);
           var seconds = totalSeconds - (minute*60);
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML =  minute + ":" + seconds;
        }

function stopTimer() {
      clearInterval(timer);
    }
    
//Move Counter

let moves = 0;
const counter = document.querySelector(".moves");
function moveCounter() {
  moves++;
  counter.innerHTML = moves;
}

//Final Score

const score = document.querySelector("score");

function finalScore(){
   var scoreSum = moves/totalSeconds*1000
   var scoreResult =  Math.round(scoreSum)
   document.getElementById("score").innerHTML = 'Your Score:  ' + scoreResult;
}

function restart() {
    window.location.reload();
}

