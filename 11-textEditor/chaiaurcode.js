// Select the input field, output field, and all buttons
const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const uppercaseButton = document.querySelector('.uppercase');
const lowercaseButton = document.querySelector('.lowercase');
const capitalizeButton = document.querySelector('.capitalize');
const boldButton = document.querySelector('.bold');
const italicButton = document.querySelector('.italic');
const underlineButton = document.querySelector('.underline');

// Function to update the output field with the input text
function updateOutput() {
  outputField.textContent = inputField.value;
}

// Event listeners for each button to apply formatting
uppercaseButton.addEventListener('click', () => {
  inputField.value = inputField.value.toUpperCase();
  updateOutput();
});

lowercaseButton.addEventListener('click', () => {
  inputField.value = inputField.value.toLowerCase();
  updateOutput();
});

capitalizeButton.addEventListener('click', () => {
  inputField.value = inputField.value
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
  updateOutput();
});

boldButton.addEventListener('click', () => {
  outputField.style.fontWeight = outputField.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

italicButton.addEventListener('click', () => {
  outputField.style.fontStyle = outputField.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

underlineButton.addEventListener('click', () => {
  outputField.style.textDecoration = outputField.style.textDecoration === 'underline' ? 'none' : 'underline';
});

// Update output when user types in the input field
inputField.addEventListener('input', updateOutput);
