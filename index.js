// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // The test expects an RGB format to match its regex pattern
  document.body.style.backgroundColor = 'rgb(173, 216, 230)'; 
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // The test expects an empty string "" to clear the style
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyLog = document.getElementById('keyPressDisplay');
  if (keyLog) {
    keyLog.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  const textDisplay = document.getElementById('textInputDisplay');
  const textInput = document.getElementById('textInput');
  
  if (textDisplay) {
    // 1. If an event was passed, use its value. 
    // 2. Otherwise, manually grab the value from the input field.
    const value = (event && event.target) ? event.target.value : textInput.value;
    
    // Ensure we include the "You typed: " prefix the test requires
    textDisplay.textContent = `You typed: ${value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  const changeBtn = document.getElementById('changeColorButton');
  if (changeBtn) {
    changeBtn.addEventListener('click', changeBackgroundColor);
  }

  const resetBtn = document.getElementById('resetColorButton');
  if (resetBtn) {
    resetBtn.addEventListener('dblclick', resetBackgroundColor);
  }

  document.addEventListener('keydown', displayKeyPress);

  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};