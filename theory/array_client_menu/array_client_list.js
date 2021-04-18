// *******Initial date************
let clients = ["John", "Marry", "Kate"]

let clientsHighPriority = ["Tob", "Pete"]
let clientsLowPriority = ["Vicky", "Lessly"]
// *******Initial date************

while (true) {
    let clientName = prompt("Insert client name:")
    if (clientName) {
        let clientPriority = confirm("Priority client?")
        if (clientPriority) {
            clientsHighPriority.push(clientName)
        } else {
            clientsLowPriority.push(clientName)
        }
    } else {
        showClients()
        break
    }
}

function showClients() {
    for (let i = clientsHighPriority.length - 1; i >= 0; i--) {
        clients.unshift(clientsHighPriority[i])
    }

    for (let i = 0; i < clientsLowPriority.length; i++) {
        clients.push(clientsLowPriority[i])
    }

    for (let i = 0; i < clients.length; i++) {
        tableInformation.innerHTML += `
        <tr>
            <td>
                ${i+1}
            </td>
            <td>
                ${clients[i]}
            </td>
        </tr>
        `
        console.log(`${i+1}.`, clients[i])
    }
}