let countH = 0;
let countG = 0;
let periodTime = 600; // one period in basketball is 600 seconds
let timerPaused = false;
const timeDisplay = document.getElementById("timer")
const pauseButton = document.getElementById("pauseBtn");

function updateDisplay() {
    const minutes = Math.floor(periodTime / 60);
    const seconds = periodTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}




function updateScores() {
    document.getElementById('homeScore').innerText = countH;
    document.getElementById('guestScore').innerText = countG;
    maxScorehighlight(); // automatic highlight after updating the score
}

function add1Home () { 
    countH += 1;
    document.getElementById("homeScore").textContent = countH;
    updateScores()
}

function add2Home () { 
    countH += 2;
    document.getElementById("homeScore").textContent = countH;
    updateScores()
}

function add3Home () { 
    countH+= 3;
    document.getElementById("homeScore").textContent = countH;
    updateScores()
}


function add1Guest () { 
    countG += 1;
    document.getElementById("guestScore").textContent = countG;
    updateScores()
}

function add2Guest () { 
    countG += 2;
    document.getElementById("guestScore").textContent = countG;
    updateScores()
}

function add3Guest () { 
    countG += 3;
    document.getElementById("guestScore").textContent = countG;
    updateScores()
}


function reset() { // new game button function reseting the scoreboard
    countG = 0;
    countH = 0;
    document.getElementById("homeScore").textContent = countH;
    document.getElementById("guestScore").textContent = countG;
    updateDisplay()
  }

function maxScorehighlight () {
    const homeScore = document.getElementById('homeScore');
    const guestScore = document.getElementById('guestScore');

    homeScore.classList.remove('highlight'); //removing highligh
    guestScore.classList.remove('highlight'); //removing highligh

    if (countH > countG) {
        homeScore.classList.add('highlight'); // highlight Home if bigger than Guest   
    } else if (countG > countH) {
        guestScore.classList.add('highlight'); // highlight Guest if bigger than Home
    }
}

