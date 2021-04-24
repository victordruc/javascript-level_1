// Array of products:
let products = [{
        name: "The Witcher",
        img_url: "https://image.kinoprofi.vip/p/2020-01/400x600/1578055083_vedmak.jpg",
        rate: 5.0,
        price: {
            amount: 200.00,
            unit: "USD"
        }
    },
    {
        name: "Snake, The Beginnings",
        img_url: "https://boomerang-casino.imgsrcdata.com/img/game/poster_thumbnail_0026dad528170ef486823f7ec0bc419c5.jpg",
        rate: 3.5,
        price: {
            amount: 10.00,
            unit: "USD"
        }
    },
    {
        name: "Dark souls III",
        img_url: "https://cheapestgamecards.com/pi/dark-souls-iii-pc-38930.png",
        rate: 1.5,
        price: {
            amount: 15.00,
            unit: "USD"
        }
    },
    {
        name: "World of Tanks VIII",
        img_url: "https://store-images.s-microsoft.com/image/apps.31552.67082279703731056.ae674156-cfa6-4b84-8bc3-75a36fe31c81.cd4ce189-afd4-40b9-b9b1-e48fe4a739ea?w=400&h=600",
        rate: 0.5,
        price: {
            amount: 5.00,
            unit: "USD"
        }
    },
    {
        name: "Need for Speed: Payback",
        img_url: "https://lh3.googleusercontent.com/proxy/RZ_6qw0yVZ0WAxkZHTR77x50tXp2FmqvI_4orVNPLq46gttKpAgmGxb04hObuEhwfQ_IQiCX7u1X24bEhF-ZE47-B2aJynW24-EmBriPOU33gKLjKKyLKuc4SAXTxRdKgPkF7GBjDg",
        rate: 4.5,
        price: {
            amount: 100.00,
            unit: "USD"
        }
    },
]

// Array of products in cart:
let cart = []

function addToCart(i) {
    let message = `The product "${products[i].name}" was added to the cart`
    let qty = parseInt(prompt("Choose how many products you want: ")) 
    !qty ? (qty = 1) : qty
    for (let j = 0; j < cart.length; j++) {
        if (products[i].name == cart[j].name) {
            message = `The product "${products[i].name}" was update`
            products[i].qty += qty
            alert(message)
            showCartQty()
            return
        }
    }
    products[i].qty = qty
    cart.push(products[i])
    alert(message)
    showCartQty()
}

function showCart() {
    listBuyProduct.innerHTML = ``

    for (let i = 0; i < cart.length; i++) {
        listBuyProduct.innerHTML += `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${cart[i].name}</td>
            <td>${cart[i].price.amount} ${cart[i].price.unit}</td>
            <td>${cart[i].qty}</td>
            <td>${cart[i].qty * cart[i].price.amount} ${cart[i].price.unit}</td>
        </tr>
        `
    }
}

function showCartQty() {
    qtyCart.innerHTML = ``
    let totalQty = 0
    for (let i = 0; i < cart.length; i++) {
        totalQty += cart[i].qty
    }
    qtyCart.innerHTML += `<span class="qtyCart">${totalQty}</span>`
}

function showProducts(list) {
    catalog.innerHTML = ``

    for (let i = 0; i < list.length; i++) {
        catalog.innerHTML += `
        <div class="product col text-center py-3">
            <h2>${list[i].name}</h2>
            <img src="${list[i].img_url}" alt="${i}">
            <div>Rating: ${list[i].rate}</div>
            <div>${list[i].price.amount} ${list[i].price.unit}</div>
            <button class="btn btn-success" onclick="addToCart(${i})">ADD to CART</button>
        </div>
        `
    }
}

showProducts(products)

// HW1 - image for products - ok
// HW2 - function "showCart()" -> container name + price - ok
// HW3 - prompt -> qty - ok