// DOM Elements
const button = document.getElementById("animate-btn");
const animationSelect = document.getElementById("animation-select");

// Load saved animation preference from localStorage
const savedAnimation = localStorage.getItem("preferredAnimation");
if (savedAnimation) {
  animationSelect.value = savedAnimation;
}

// Trigger animation on button click
button.addEventListener("click", () => {
  const selectedAnimation = animationSelect.value;
  
  // Apply animation class
  button.classList.add(selectedAnimation);
  
  // Save preference to localStorage
  localStorage.setItem("preferredAnimation", selectedAnimation);
  
  // Remove animation class after it ends
  button.addEventListener("animationend", () => {
    button.classList.remove(selectedAnimation);
  }, { once: true });
});
