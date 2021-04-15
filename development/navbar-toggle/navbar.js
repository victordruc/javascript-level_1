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

const TOTAL = ITEMS.length
const BTN_WIDTH = 110
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
    // HW1: limit array - ok
    for (let i = 0; i < n && n <=ITEMS.length; i++) {
        navbar.innerHTML += `<li><a href="">${ITEMS[i]}</a></li>`
    }
    remaining = TOTAL - n
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
            navbarDrop.innerHTML += `<a href="">${ITEMS[i]}</a>`
        }
        dropOpen = true
    }
}

function showRemainingItemsResize(n) {
    navbarDrop.innerHTML = ``
    if (dropOpen) {
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbarDrop.innerHTML += `<a href="">${ITEMS[i]}</a>`
        }
    }
    if (n<1) {
        dropOpen = false
    }
}
// HW2*: add more styling - ok
// HW3: fix the BUG dropOpen + resize - ok (doua variante, prin functie pentru meniu variabil si mai sus in caz de resize se inchide meniul rind = 34-35)