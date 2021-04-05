// ##### declaration variables #####
const COL_NUMBER = 10
const ROW_NUMBER = 10

let pac_x = parseInt(1+Math.random()*9)
let pac_y = parseInt(1+Math.random()*9)

let coin1_x = parseInt(1+Math.random()*9)
let coin1_y = parseInt(1+Math.random()*9)
let coin2_x = parseInt(1+Math.random()*9)
let coin2_y = parseInt(1+Math.random()*9)
let coin3_x = parseInt(1+Math.random()*9)
let coin3_y = parseInt(1+Math.random()*9)
let coin4_x = parseInt(1+Math.random()*9)
let coin4_y = parseInt(1+Math.random()*9)
let coin5_x = parseInt(1+Math.random()*9)
let coin5_y = parseInt(1+Math.random()*9)

let coin1_state = true
let coin2_state = true
let coin3_state = true
let coin4_state = true
let coin5_state = true

let bomb1_x = parseInt(1+Math.random()*9)
let bomb1_y = parseInt(1+Math.random()*9)
let bomb2_x = parseInt(1+Math.random()*9)
let bomb2_y = parseInt(1+Math.random()*9)
let bomb3_x = parseInt(1+Math.random()*9)
let bomb3_y = parseInt(1+Math.random()*9)
let bomb4_x = parseInt(1+Math.random()*9)
let bomb4_y = parseInt(1+Math.random()*9)
let bomb5_x = parseInt(1+Math.random()*9)
let bomb5_y = parseInt(1+Math.random()*9)

let bomb1_state = true
let bomb2_state = true
let bomb3_state = true
let bomb4_state = true
let bomb5_state = true

let score = 0
let scoreMax = 50

let health = 100
// ##### declaration variables #####

function action() {
    switch (event.key) {
        case "ArrowDown": pac_y++; break
        case "ArrowUp": pac_y--; break
        case "ArrowRight": pac_x++; break
        case "ArrowLeft": pac_x--; break
    }
// ######## LIMIT FOR PACMAN ###############
    if (pac_x < 1) {
        pac_x = COL_NUMBER
    } else if (pac_x > COL_NUMBER) {
        pac_x = 1
    } else if (pac_y < 1) {
        pac_y = ROW_NUMBER
    } else if (pac_y > ROW_NUMBER) {
        pac_y = 1
    }
// ######## LIMIT FOR PACMAN ###############

    // if (pac_x == coin1_x && pac_y == coin1_y || pac_x == coin2_x && pac_y == coin2_y || pac_x == coin3_x && pac_y == coin3_y || pac_x == coin4_x && pac_y == coin4_y || pac_x == coin5_x && pac_y == coin5_y) {
    //     score += 10
    // } else if (pac_x == bomb1_x && pac_y == bomb1_y || pac_x == bomb2_x && pac_y == bomb2_y || pac_x == bomb3_x && pac_y == bomb3_y || pac_x == bomb4_x && pac_y == bomb4_y || pac_x == bomb5_x && pac_y == bomb5_y) {
    //     health -= 20
    // }

// ######## SCORE ###############
    if (pac_x == coin1_x && pac_y == coin1_y && coin1_state) {
        score += 10
        coin1_state = false
    } else if (pac_x == coin2_x && pac_y == coin2_y && coin2_state) {
        score += 10
        coin2_state = false
    } else if (pac_x == coin3_x && pac_y == coin3_y && coin3_state) {
        score += 10
        coin3_state = false
    } else if (pac_x == coin4_x && pac_y == coin4_y && coin4_state) {
        score += 10
        coin4_state = false
    } else if (pac_x == coin5_x && pac_y == coin5_y && coin5_state) {
        score += 10
        coin5_state = false
    }
// ######## SCORE ##############

// ######## HEALTH #############
if (pac_x == bomb1_x && pac_y == bomb1_y && bomb1_state) {
    health -= 20
    bomb1_state = false
} else if (pac_x == bomb2_x && pac_y == bomb2_y && bomb2_state) {
    health -= 20
    bomb2_state = false
} else if (pac_x == bomb3_x && pac_y == bomb3_y && bomb3_state) {
    health -= 20
    bomb3_state = false
} else if (pac_x == bomb4_x && pac_y == bomb4_y && bomb4_state) {
    health -= 20
    bomb4_state = false
} else if (pac_x == bomb5_x && pac_y == bomb5_y && bomb5_state) {
    health -= 20
    bomb5_state = false
}
// ######## HEALTH #############
    renderMap()
// ######## FINAL #############
    if (score == scoreMax) {
       container.innerHTML = `<h1 class="win">YOU WIN!!!</h1>`
    } else if (health == 0) {
        container.innerHTML = `<h1 class="loose">YOU LOOSE!!!</h1>`
    }
// ######## FINAL #############
}

function renderMap() {
    gameMap.innerHTML = ``
    for (let y = 1; y<=ROW_NUMBER; y++) {
        for (let x = 1; x<=COL_NUMBER; x++) {
            if (x==pac_x && y==pac_y) {
                gameMap.innerHTML += `<div class="pac"></div>`
            } else if (x==coin1_x && y==coin1_y && coin1_state || x==coin2_x && y==coin2_y && coin2_state || x==coin3_x && y==coin3_y && coin3_state || x==coin4_x && y==coin4_y && coin4_state || x==coin5_x && y==coin5_y && coin5_state) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x==bomb1_x && y==bomb1_y && bomb1_state || x==bomb2_x && y==bomb2_y && bomb2_state || x==bomb3_x && y==bomb3_y && bomb3_state || x==bomb4_x && y==bomb4_y && bomb4_state || x==bomb5_x && y==bomb5_y && bomb5_state) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else {
                gameMap.innerHTML += `<div></div>`
            }
        }
    }
    gameScore.innerHTML = `Score: ${score}`
    gameHealth.innerHTML = `Health: ${health}`
}

renderMap()

// HW1: limita pentru deplasare - OK
// HW2: adaugare bomba(-20), viata(0...100) - OK
// HW3: coin_state, bomb_state - pentru afisare - OK
// HW4: adaugarea mai multor bombe si bani - OK
// HW5: coordonate aleatorii (parseInt(1+Math.random()*9)) - OK