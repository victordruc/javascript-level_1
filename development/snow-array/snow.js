const N_FLAKES = 20
let stopStatus = false

let flakes_x = []

let flakes_y = []

function generateCoords() {
    for(let i = 0; i<N_FLAKES; i++) {
        flakes_x[i] = parseInt(Math.random() * 490)
        flakes_y[i] = -parseInt(Math.random() * 500)
    }
}

function drawFlake(i) {
    snowContainer.innerHTML += `
        <div 
            class="flake"
            style="
            left: ${flakes_x[i]}px;
            top: ${flakes_y[i]}px;
            "
        >
        </div>
    `
}

function drawAllFlakes() {
    snowContainer.innerHTML = ``
    for(let i = 0; i<N_FLAKES; i++) {
        drawFlake(i)
    }
}

function fall() {
    for (let i = 0; i<N_FLAKES; i++) {
        flakes_y[i] +=5
        if (flakes_y[i]>500) {
            flakes_y[i] = -parseInt(Math.random() * 500)
        }
    }
    drawAllFlakes()
}

generateCoords()
drawAllFlakes()

function stop() {
    if (stopStatus) {
        fallTimer = setInterval(fall, 20)
        stopStatus = false
    } else {
        clearInterval(fallTimer)
        stopStatus = true
    }
}

let fallTimer = setInterval(fall, 20)