const coinImage = document.getElementById('coin-image');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Function to get the score from the cookie
function getCookieScore() {
  const cookieValue = document.cookie.match('(^|;) ?score=([^;]*)(;|$)');
  return cookieValue ? parseInt(cookieValue[2]) : 0;
}

// Function to set the score in the cookie
function setCookieScore(newScore) {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // Expires in 7 days
  document.cookie = `score=${newScore}; expires=${expires.toUTCString()}; path=/`;
}

// Get the score from the cookie on page load
score = getCookieScore();
scoreDisplay.textContent = `Score: ${score}`;

coinImage.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  // Add animation using Anime.js here (refer to Anime.js documentation)
  // Play quack sound using audio element or libraries here
  setCookieScore(score); // Update the cookie with the new score
});

function animateDuck() {
  var element = document.querySelector('.coin-animate');
  element.style.display = 'block'; // Show the element when the image is clicked
  const audio = new Audio('quack.mp3');
}