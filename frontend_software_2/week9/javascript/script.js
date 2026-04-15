let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let lastTime = 0;
let delay = 5000;
let isPaused = false;

const pauseBtn = document.getElementById("pauseBtn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

/* Show slides */
 
function showSlide(index) {

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach(slide => slide.style.display = "none");
    slides[currentSlide].style.display = "block";

}

/* Prev/Next Btns */ 

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
    resetTimer();
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
    resetTimer();
}

/* Animation loop */

function animate(timestamp) {

    if (!lastTime) lastTime = timestamp;

    let elapsed = timestamp - lastTime;

    if (!isPaused && elapsed >= delay) {
        currentSlide++;
        showSlide(currentSlide);
        lastTime = timestamp;
    }

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

/* Pause Button */

pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;

    pauseBtn.textContent = isPaused ? "Play" : "Pause";
});

/* Controls */

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

/* Timer Reset */

function resetTimer() {
    lastTime = 0;
}

showSlide(currentSlide);