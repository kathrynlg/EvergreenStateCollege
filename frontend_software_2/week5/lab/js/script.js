document.addEventListener("DOMContentLoaded", () => {

  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let lastTime = 0;
  let delay = 5000;
  let isPause = false;

  const pauseBtn = document.getElementById("pauseBtn");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  /* show slide */
  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    slides.forEach(slide => slide.style.display = "none");
    slides[currentSlide].style.display = "block";
  }

  /* next / prev */
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

  /* animation loop */
  function animate(timestamp) {
    if (!lastTime) lastTime = timestamp;

    let elapsed = timestamp - lastTime;

    if (!isPause && elapsed >= delay) {
      currentSlide++;
      showSlide(currentSlide);
      lastTime = timestamp;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  /* pause button */
  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      isPause = !isPause;
      pauseBtn.textContent = isPause ? "Play" : "Pause";
      lastTime = 0;
    });
  }

  /* controls */
  prevBtn?.addEventListener("click", prevSlide);
  nextBtn?.addEventListener("click", nextSlide);

  /* reset timer */
  function resetTimer() {
    lastTime = 0;
  }

  showSlide(currentSlide);

});
