const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const words = ["Awesome", "Powerful", "Dynamic", "Versatile", "Fast"];
let wordIndex = 0; 
let charIndex = 0; 
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex]; 
  const currentChars = currentWord.substring(0, charIndex); 

  typedTextSpan.textContent = currentChars; 

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentWord.length) {
      isDeleting = true; 
      setTimeout(typeEffect, 1000); 
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false; 
      wordIndex = (wordIndex + 1) % words.length; 
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 200)
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 1000);
});


