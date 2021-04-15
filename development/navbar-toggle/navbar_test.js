const ITEMS = [
    "BRAND",
    "Quae",
    "Ducimus",
    "Adipisci",
    "Temporibus",
    "Aspernatur",
    "Vero",
    "Aut",
    "Tenetur"
]

// HW4*: when hiding - use priorities

const PRIORITY = [
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1
]

let priorityCount = -1

for (let i = 0; i<PRIORITY.length; i++) {
    if (PRIORITY[i]===1) {
        priorityCount++
    }
}

let resultArray = []
let subArray =[]
let arr = []
let arrFraction =[]

function result() {
    let resultPriority = []
    let resultSecond = []
    for (let i = 0; i < ITEMS.length; i++) {
        if (PRIORITY[i] === 1) {
            resultPriority.push(ITEMS[i])
        } else {
            resultSecond.push(ITEMS[i])
        }
    }
    resultArray = resultPriority.concat(resultSecond)
}

function test(n) {
    for (let i = TOTAL - n; i < TOTAL; i++) {
        for(let j = 0; j < TOTAL; j++) {
            if (resultArray[i] === ITEMS[j]) {
               let arr1 = ITEMS.splice(j,1)
               arr = arr.concat(arr1)
            }
        } 
    }
}

const TOTAL = ITEMS.length
const BTN_WIDTH = 80
let eWidth = 0
let dropOpen = false
let remaining = 0

function adapt() {
    // navbarDrop.innerHTML = `` - HW3
    // dropOpen = false - HW3
    for (let n = TOTAL; n >= 1; n--) {
        estimateWidth(n)

        if (eWidth <= innerWidth) {
            showItems(n)
            break
        } 
    }
}

function estimateWidth(n) {
    let text = ``
    let pad = 0
    for (let i = 0; i < n; i++) {
        text += ITEMS[i]
        pad += 2 * 10
    }
    eWidth = 11 * text.length + pad + BTN_WIDTH
}

function showItems(n) {
    navbar.innerHTML = ``
    toggler.innerHTML =``
    remaining = TOTAL - n
    // HW1: limit array - ok
    for (let i = 0; i < n; i++) {
        navbar.innerHTML += `<li><a href="">${ITEMS[i]}</a></li>`
    }
    
    if (remaining > 0) {
        toggler.innerHTML += `<button class="toggler" onresize="showRemainingItems(${remaining})" onclick="showRemainingItems(${remaining})"><span>${remaining}</span><i class="bi bi-list"></i></button>`
    }
}

function showRemainingItems(n) {
    
    if (dropOpen) {
        navbarDrop.innerHTML = ``
        dropOpen = false
    } else {
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbarDrop.innerHTML += `<a href="">${resultArray[i]}</a>`
        }
        dropOpen = true
    }
}

function showRemainingItemsResize(n) {
    test(n)
    navbarDrop.innerHTML = ``
    if (dropOpen) {
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbarDrop.innerHTML += `<a href="">${resultArray[i]}</a>`
        }
    }
    if (n<1) {
        dropOpen = false
    }
}
// HW2*: add more styling - ok
// HW3: fix the BUG dropOpen + resize - ok (doua variante, prin functie pentru meniu variabil si mai sus in caz de resize se inchide meniul rind = 34-35)
result()