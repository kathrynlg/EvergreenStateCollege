const colors = ["#f4f4f4", "#d0ebff","#ffe8cc", "#e6fcf5"];

const constrolsDiv = document.getElementById("controls");
const card = document.getElementById("card");


//change color of the background
function changeColor(color) {
    card.style.backgroundColor = color;
}

//change text size 

function increaseText() {
    card.style.fontSize = "1.2rem";
}

function decreaseText() {
    card.style.fontSize = "0.8rem";
}

//reset styles
function resetStyles() {
        card.style.backgroundColor = "#f4f4f4";
        card.style.fontSize = "1rem";
}

for (let i = 0; i < colors.length ; i++){
    const btn = document.createElement("button");
    btn.textContent = "Theme " + (i+1);
    btn.onclick = function() {
        changeColor(colors[i]);
    };
    constrolsDiv.appendChild(btn);
}

//Font Control Btn

const increaseBtn = document.createElement("button");
increaseBtn.textContent = "A+";
increaseBtn.onclick = increaseText;

const decreaseTextBtn = document.createElement("button");
decreaseTextBtn.textContent = "A-";
decreaseTextBtn.onclick = decreaseText;

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.onclick = resetStyles;

constrolsDiv.appendChild(increaseBtn);
constrolsDiv.appendChild(decreaseTextBtn);
constrolsDiv.appendChild(resetBtn);