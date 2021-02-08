var overlay = $("#overlay");
  overlay.on("click", function (e) {
        overlay
            .hide()
            .off();
            bgMusic();
            startGame();
            startTimer();

   });

document.addEventListener("DOMContentLoaded", () => {

//The Cards

const cardArray = [
    {
        name: "ace",
        img: " assets/images/ace.png"
    },
    {
        name: "luffy",
        img: " assets/images/luffy.png"
    },
    {
        name: "nami",
        img: " assets/images/nami.png"
    },
    {
        name: "chopper",
        img: " assets/images/chopper.png"
    },
    {
        name: "nico-robin",
        img: " assets/images/nico-robin.png"
    },
    {
        name: "franky",
        img: " assets/images/franky.png"
    },
    {
        name: "bellamy",
        img: " assets/images/bellamy.png"
    },
    {
        name: "crocodile",
        img: " assets/images/crocodile.png"
    },
    {
        name: "doruflamingo",
        img: " assets/images/doruflamingo.png"
    },
    {
        name: "foxy",
        img: " assets/images/foxy.png"
    },
    {
        name: "mihawk",
        img: " assets/images/mihawk.png"
    },
    {
        name: "kuro",
        img: " assets/images/kuro.png"
    },
    {
        name: "ace",
        img: " assets/images/ace.png"
    },
    {
        name: "luffy",
        img: " assets/images/luffy.png"
    },
    {
        name: "nami",
        img: " assets/images/nami.png"
    },
    {
        name: "chopper",
        img: " assets/images/chopper.png"
    },
    {
        name: "nico-robin",
        img: " assets/images/nico-robin.png"
    },
    {
        name: "franky",
        img: " assets/images/franky.png"
    },
    {
        name: "bellamy",
        img: " assets/images/bellamy.png"
    },
    {
        name: "crocodile",
        img: " assets/images/crocodile.png"
    },
    {
        name: "doruflamingo",
        img: " assets/images/doruflamingo.png"
    },
    {
        name: "foxy",
        img: " assets/images/foxy.png"
    },
    {
        name: "mihawk",
        img: " assets/images/mihawk.png"
    },
    {
        name: "kuro",
        img: " assets/images/kuro.png"
    },
];

//The Card Shuffle

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid-lv3");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

//Creating the Board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.classList.add("hvr-float-shadow");
      card.setAttribute("src", "assets/images/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("mousedown", flipCard);
      grid.appendChild(card);
    }
  }

//Card Match Check

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    cardsFlipped = 0;
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionOneId].setAttribute("alt", "anime card back");
      cards[optionTwoId].setAttribute("alt", "anime card back");
      cards[optionOneId].addEventListener("mousedown", flipCard);
      cards[optionTwoId].addEventListener("mousedown", flipCard);
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      laugh.play();
      cards[optionOneId].classList.remove("hvr-float-shadow");
      cards[optionTwoId].classList.remove("hvr-float-shadow");
      cards[optionOneId].classList.add("float-shadow");
      cards[optionTwoId].classList.add("float-shadow");
      cards[optionOneId].removeEventListener("mousedown", flipCard);
      cards[optionTwoId].removeEventListener("mousedown", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionOneId].setAttribute("alt", "anime card back");
      cards[optionTwoId].setAttribute("alt", "anime card back");
      cards[optionOneId].addEventListener("mousedown", flipCard);
      cards[optionTwoId].addEventListener("mousedown", flipCard);
    }
    cardsChosen = [];
    cardsChosenId = [];
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = "Yattaaaa!!! <br> You are the Pirate King!!";

      stopMusic();
      stopTimer();
      win.play();
      finalScore();
    }
  }

// Card Flip

var cardsFlipped = 0;

  function flipCard() {
    ++cardsFlipped;
    if (cardsFlipped < 3) {
    let cardId = this.getAttribute("data-id");
    this.removeEventListener("mousedown", flipCard);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    this.setAttribute("alt", cardArray[cardId].name);
    flipSound.play();
    moveCounter();
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500);
    }
  }
}

  createBoard();
});

//The Sound Board

var bgmusic = new Audio("assets/audio/bg-music.mp3");
var win = new Audio("assets/audio/fireworks-end.mp3");
var flipSound = new Audio("assets/audio/woosh.wav");
var laugh = new Audio("assets/audio/luffy-laugh.wav");
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
var counter = document.querySelector(".moves");
function moveCounter() {
  moves++;
  counter.innerHTML = moves;
}

//Final Score

const score = document.querySelector("score");

function finalScore(){
    document.getElementById("fireworks").classList.add("pyro");
    var scoreSum = moves/totalSeconds*1000;
    var scoreResult =  Math.round(scoreSum);
    document.getElementById("score").innerHTML = "Your Score: <br>" + scoreResult;

     var nodes = document.getElementById("spin").childNodes;
        for (var i=0; i<nodes.length; i++) {
        nodes[i].classList.add("spin1");
        if(i%2==0){
        nodes[i].classList.remove("spin1");
        nodes[i].classList.add("spin");
    }
    }
    document.getElementById("overlay-win").classList.add("overlay-win");
}

// Start & Reset Game

function startGame(){
    document.getElementById("gameboard").style["pointer-events"] = "all";
}

function restart() {
    window.location.reload();
}
