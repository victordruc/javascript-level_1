let currentIndex = 0

const IMAGES = [
    "images/66-800x600.jpg",
    "images/202-800x600.jpg",
    "images/436-800x600.jpg"
]

const EFFECTS = [
    "animate__bounceInRight",
    "animate__bounceInLeft",
    "animate__fadeInRight",
    "animate__fadeInLeft"
]

const TITLES = [
    "Field",
    "Road",
    "Bridge"
]

// HW1: const caps lock - ok

// se scrie cu litere majuscule deoarece a fost o intelege pina la existenta declaratiei const, prin care se spune ca toate constantele se scriu cu litere mari, astfel aduce la cunostinta celor care deservesc codul ca valoarea acesteia nu trebuie schimbata, P.S. codul fizic functioneaza chiar daca constanta se declara cu litere mici.

function showImage(n) {

    let i = Math.round(Math.random()*3)

    carouselSlides.innerHTML = 
    `
    <img src="${IMAGES[n]}" class="animate__animated ${EFFECTS[i]}"/>
    `
}

function showTitle(n) {
    
    let i = Math.round(Math.random()*3)

    carouselTitles.innerHTML = 
    `
    <h4 class="animate__animated ${EFFECTS[i]}">${TITLES[n]}</h4>
    `
}

function showIndicators(n) {
    carouselIndicators.innerHTML = ``
    for(let i = 0; i<IMAGES.length; i++) {
        if (i==n) {
            carouselIndicators.innerHTML += `<img src="${IMAGES[n]}" class="imageIndicator active"/>`
        } else {
            carouselIndicators.innerHTML += `<img src="${IMAGES[i]}" class="imageIndicator"/>`
        }
    }
}

function renderCarousel(n) {
    showImage(n)
    showTitle(n)
    showIndicators(n)
}

function next() {
    // HW2: limit - ok
    // HW3*: optimize - ok
    if (currentIndex==IMAGES.length-1) {
        renderCarousel(currentIndex=0)
    } else {
        renderCarousel(++currentIndex)
    }
}

// HW4: prev function - ok

function prev() {
    if (currentIndex==0) {
        renderCarousel(currentIndex=IMAGES.length-1)
    } else {
        renderCarousel(--currentIndex)
    }
}

function play() {
    playButton.innerHTML = `<i class="bi bi-play-btn activePlay"></i>`
    setInterval(next, 3000)
}

function actionKeybord() {
    // console.log(event)
    switch (event.key) {
        case "ArrowRight": next(); break
        case "ArrowLeft": prev(); break
        case " ": play(); break
    }
}

renderCarousel(currentIndex)