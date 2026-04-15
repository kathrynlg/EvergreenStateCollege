import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

const container = document.getElementById("container")
const successBtn = document.getElementById("successBtn")
const workingBtn = document.getElementById("workingBtn")
const errorBtn = document.getElementById("errorBtn")
const warningBtn = document.getElementById("warningBtn")

let notifications = []
let idCounter = 0

//Button Listeners
successBtn.addEventListener("click", () => addNotification("success"))
workingBtn.addEventListener("click", () => addNotification("working"))
errorBtn.addEventListener("click", () => addNotification("error"))
warningBtn.addEventListener("click", () => addNotification("warning"))

//Create Notifications
function addNotification(type) {
    const id = idCounter++
    const notification = document.createElement("div")
    notification.classList.add("notification", type)
    notification.dataset.id = id 

    notification.innerHTML = 
        `<span>${type.toUpperCase()} message</span>
        <span class="close">X</span> `

        container.appendChild(notification)
        notifications.push({id, element: notification })

        updatePositions()

        //Entry ANimation
        animate(notification,
        {x: [300, 0], opacity: [0, 1]},
        {type: "spring", stiffness: 300, damping: 25})

        //Auto disappear
        const timeout = setTimeout(() => {
            removerNotification(id)
        }, 3000)

        //Pause on hover
        notification.addEventListener("mouseenter", () => clearTimeout(timeout))

        //Close button
        notification.querySelector(".close").addEventListener("click", (e) => {
            e.stopPropagation()
            removerNotification(id)
        })
}

//Remove Notification
function removerNotification(id) {
    const index = notifications.findIndex(n => n.id === id)
    if (index === -1) return

    const notification = notifications[index].element 

    animate(notification,
        {x: 300, opacity: 0},
        {duration: 0.3}).finished.then(() => {
            notification.remove()
        })

    notifications.splice(index, 1)
    updatePositions()
}

//Reflow Stack

function updatePositions() {
    notifications.forEach((n, index) => {
        animate(n.element,
        {y: index * 80},
        {type: "spring", stiffness: 300, damping: 30 }
        )
    })
}