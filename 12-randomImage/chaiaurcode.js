const baseURL = 'https://source.unsplash.com/';  // Base URL for fetching random images

const container = document.querySelector('.content');  // The element to hold the images
const button = document.querySelector('button');  // The button element to refresh the images

const rows = 7;  // Number of rows of images to display

function generateRandomImages() {
  container.innerHTML = '';  // Clear the existing images before adding new ones

  // Generate the images
  for (let i = 0; i < rows * 3; i++) {  // 3 images per row, 7 rows
    const img = document.createElement('img');  // Create a new image element
    img.src = `${baseURL}${randomSize()}`;  // Set the source of the image to a random URL
    container.appendChild(img);  // Add the image to the container
  }
}

// Function to generate a random size for the images (e.g., 300x400)
function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;  // Random width and height for the image
}

// Function to generate a random number between 300 and 309 (for diversity)
function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

// Initially load the images when the page is loaded
generateRandomImages();

// Add an event listener to the button to refresh the images when clicked
button.addEventListener('click', generateRandomImages);
