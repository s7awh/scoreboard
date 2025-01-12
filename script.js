let countH = 0;
let countG = 0;

function updateScores() {
    document.getElementById('homeScore').innerText = countH;
    document.getElementById('guestScore').innerText = countG;
    maxScorehighlight(); // Automatyczne podświetlenie po aktualizacji
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

function reset() {
    countG = 0;
    countH = 0;
    document.getElementById("homeScore").textContent = countH;
    document.getElementById("guestScore").textContent = countG;

}

function maxScorehighlight () {
    const homeScore = document.getElementById('homeScore');
    const guestScore = document.getElementById('guestScore');

    homeScore.classList.remove('highlight');
    guestScore.classList.remove('highlight');

    if (countH > countG) {
        homeScore.classList.add('highlight');        
    } else if (countG > countH) {
        guestScore.classList.add('highlight');
    }
}

/* 

    function highlightMaxScore(){
    const homeElement = document.getElementById('homeScore');
    const guestElement = document.getElementById('guestScore');

    // Usunięcie podświetlenia z obu elementów
    homeElement.classList.remove('highlight');
    guestElement.classList.remove('highlight');

    // Porównanie wyników
    if (countH > countG) {
        homeElement.classList.add('highlight'); // Podświetlenie HOME
    } else if (countG > countH) {
        guestElement.classList.add('highlight'); // Podświetlenie GUEST
    }
    } 

*/
