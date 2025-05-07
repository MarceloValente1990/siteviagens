
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
  }

  // Touch events for mobile swiping
  let touchstartX = 0;
  let touchendX = 0;
  
  function checkSwipeDirection() {
    if (touchendX < touchstartX) {
      // Swiped left - next slide
      currentIndex = (currentIndex + 1) % totalSlides;
    }
    if (touchendX > touchstartX) {
      // Swiped right - previous slide
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    updateCarousel();
  }
  
  carousel.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  });
  
  carousel.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    checkSwipeDirection();
  });

 
  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
  }, 3000);
