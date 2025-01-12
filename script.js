let countH = 0
let countG = 0

function add1Home () { 
    countH += 1
    document.getElementById("homeScore").textContent = countH
}

function add2Home () { 
    countH += 2
    document.getElementById("homeScore").textContent = countH
}

function add3Home () { 
    countH+= 3
    document.getElementById("homeScore").textContent = countH
}


function add1Guest () { 
    countG += 1
    document.getElementById("guestScore").textContent = countG
}

function add2Guest () { 
    countG += 2
    document.getElementById("guestScore").textContent = countG
}

function add3Guest () { 
    countG += 3
    document.getElementById("guestScore").textContent = countG
}




