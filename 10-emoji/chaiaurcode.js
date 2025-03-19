// Array of emojis to choose from
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];


// Get the emoji element
const emojiElement = document.getElementById('emoji');

// Function to pick a random emoji from the array
function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Event listener for mouse hover
emojiElement.addEventListener('mouseover', function () {
  // Change the emoji when mouse hovers
  emojiElement.textContent = getRandomEmoji();
  emojiElement.style.filter = 'grayscale(0)'; // Remove grayscale on hover
});

// Event listener for mouse out
emojiElement.addEventListener('mouseout', function () {
  // Set the emoji back to grayscale
  emojiElement.style.filter = 'grayscale(1)';
});
