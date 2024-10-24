let currentSlide = 0;

function showSlides(slideIndex) {
  const slides = document.querySelectorAll(".slide");
  
  if (slideIndex >= slides.length) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  }

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function plusSlides(n) {
  currentSlide += n;
  showSlides(currentSlide);
}

// Initialize slider
showSlides(currentSlide);



