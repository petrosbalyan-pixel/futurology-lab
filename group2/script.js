document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // SLIDER
  // ==============================

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;
  let slideTimer;

  if (!slides.length) return;


  function showSlide(index) {

    if (index < 0) {
      index = slides.length - 1;
    }

    if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
  }


  function nextSlide() {
    showSlide(currentSlide + 1);
  }


  function previousSlide() {
    showSlide(currentSlide - 1);
  }


  // ==============================
  // AUTO SLIDER
  // ==============================

  function startSlider() {

    clearInterval(slideTimer);

    slideTimer = setInterval(() => {
      nextSlide();
    }, 5000);

  }


  // ==============================
  // DOT BUTTONS
  // ==============================

  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      showSlide(index);

      startSlider();

    });

  });


  // ==============================
  // KEYBOARD CONTROL
  // ==============================

  document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {

      nextSlide();
      startSlider();

    }

    if (event.key === "ArrowLeft") {

      previousSlide();
      startSlider();

    }

  });


  // ==============================
  // TOUCH / SWIPE
  // ==============================

  let touchStartX = 0;
  let touchEndX = 0;

  const hero = document.querySelector(".hero");

  if (hero) {

    hero.addEventListener("touchstart", (event) => {

      touchStartX = event.changedTouches[0].screenX;

    }, { passive: true });


    hero.addEventListener("touchend", (event) => {

      touchEndX = event.changedTouches[0].screenX;

      handleSwipe();

    }, { passive: true });

  }


  function handleSwipe() {

    const difference

