// Function to update the airplane's position
function updateAirplanePosition() {
  const airplane = document.querySelector(".airplane");
  const scrollPosition = window.scrollY; // Current scroll position
  const windowHeight = window.innerHeight; // Height of the visible window
  const documentHeight = document.documentElement.scrollHeight; // Total height of the document

  // Calculate the scrollable height
  const scrollableHeight = documentHeight - windowHeight;

  // Calculate the airplane's vertical position as a percentage of the scroll
  const airplanePosition = (scrollPosition / scrollableHeight) * 100;

  // Constrain the airplane's position to ensure it doesn't get cropped
  const airplaneHeight = airplane.offsetHeight; // Height of the airplane element
  const padding = 10; // Padding to ensure visibility
  const marginTop = 120; // Add a margin from the top
  const marginBottom = 120; // Add a margin from the bottom
  const maxPosition =
    windowHeight - airplaneHeight - padding - marginTop - marginBottom;

  // Smoothly update the airplane's position
  const topPosition = Math.min(
    (airplanePosition / 100) * maxPosition,
    maxPosition
  );
  airplane.style.top = `${topPosition + marginTop}px`;

  // Rotate the airplane based on its position
  if (scrollPosition <= 1) {
    // At the top of the page, point downward
    airplane.style.transform = "rotate(180deg)";
  } else if (scrollPosition + windowHeight >= documentHeight - 1) {
    // At the bottom of the page, point upward
    airplane.style.transform = "rotate(0deg)";
  }
}

// Update airplane position on scroll
document.addEventListener("scroll", updateAirplanePosition);

// Set initial airplane position when the page loads
document.addEventListener("DOMContentLoaded", updateAirplanePosition);

// Add click event to scroll to the top or bottom
document.querySelector(".airplane").addEventListener("click", () => {
  const scrollPosition = window.scrollY; // Current scroll position
  const windowHeight = window.innerHeight; // Height of the visible window
  const documentHeight = document.documentElement.scrollHeight; // Total height of the document

  // Determine the direction to scroll
  if (scrollPosition < documentHeight / 2) {
    // If in the top half of the page, scroll to the bottom
    window.scrollTo({
      top: documentHeight - windowHeight,
      behavior: "smooth", // Smooth scrolling effect
    });
  } else {
    // If in the bottom half of the page, scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }
});

// Add click event to scroll up or down based on airplane's position
document.querySelector(".airplane").addEventListener("click", () => {
  const airplane = document.querySelector(".airplane");
  const airplaneTop = airplane.getBoundingClientRect().top; // Airplane's position relative to the viewport
  const windowHeight = window.innerHeight; // Height of the visible window
  const documentHeight = document.documentElement.scrollHeight; // Total height of the document

  if (airplaneTop > windowHeight / 2) {
    // If the airplane is below the middle of the viewport, scroll up
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  } else {
    // If the airplane is above the middle of the viewport, scroll down
    window.scrollTo({
      top: documentHeight - windowHeight,
      behavior: "smooth", // Smooth scrolling effect
    });
  }
});

// Add click event to scroll based on airplane's rotation
document.querySelector(".airplane").addEventListener("click", () => {
  const airplane = document.querySelector(".airplane");
  const windowHeight = window.innerHeight; // Height of the visible window
  const documentHeight = document.documentElement.scrollHeight; // Total height of the document

  // Get the airplane's current rotation
  const computedStyle = window.getComputedStyle(airplane);
  const transform = computedStyle.transform;

  // Check if the airplane is pointing down (rotate(180deg)) or up (rotate(0deg))
  if (transform.includes("matrix") && transform.includes("-1")) {
    // Airplane is pointing down (rotate(180deg)), scroll to the bottom
    window.scrollTo({
      top: documentHeight - windowHeight,
      behavior: "smooth", // Smooth scrolling effect
    });
  } else {
    // Airplane is pointing up (rotate(0deg)), scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }
});
