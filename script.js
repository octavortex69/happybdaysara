const emojiContainer = document.getElementById('emoji-container');


    // Function to create a new emoji element
    function createEmoji() {
        const emojiArray = ['💖', '💝', '💕', '💞', '💓', '💗', '❤️', '💘'];
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        document.getElementById('emoji-container').appendChild(emoji);
  
        // Remove the emoji from the container when animation ends
        emoji.addEventListener('animationend', () => {
          emoji.remove();
        });
      }
  
      // Generate emojis for the first 3 seconds
      let timer = setInterval(createEmoji, 500); // Adjust the interval (in milliseconds) as desired
  
      // Stop generating emojis after 3 seconds
      setTimeout(() => {
        clearInterval(timer); // Stop generating new emojis
      }, 5000);
  
      // Remove any emojis that are still animating after 3 seconds
      setTimeout(() => {
        const emojis = document.getElementsByClassName('emoji');
        while (emojis.length > 0) {
          emojis[0].remove();
        }
      }, 5000);

// Set the target date (April 1st, 2024)
const targetDate = new Date('2024-04-01T00:00:00Z').getTime();

// Update the counter every second
setInterval(updateCounter, 1000);

function updateCounter() {
  // Get the current time
  const currentTime = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - targetDate;

  // Calculate the days
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Calculate hours (with remainder from days calculation)
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Calculate minutes (with remainder from hours calculation)
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Calculate seconds (with remainder from minutes calculation)
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the counter on the webpage (assuming you have an element with ID 'counter')
  const counterElement = document.getElementById('counter');
  counterElement.innerHTML = `
    <h3>This is a counter for how many days we're together since our first proposal</h3>
    <p>Days: ${days}</p>
    <p>Hours: ${hours}</p>
    <p>Minutes: ${minutes}</p>
    <p>Seconds: ${seconds}</p>
  `;
}

function createConfetti(side) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    const shapes = ['noodle', 'leaf', 'square'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    confetti.classList.add(shape);

    if (side === 'left') {
        confetti.style.left = '0px';
        confetti.style.bottom = '0px';
        confetti.style.setProperty('--x-move', `${Math.random() * 50 + 25}vw`);
        confetti.style.setProperty('--y-move', `-${Math.random() * 50 + 50}vh`);
    } else {
        confetti.style.right = '0px';
        confetti.style.bottom = '0px';
        confetti.style.setProperty('--x-move', `-${Math.random() * 50 + 25}vw`);
        confetti.style.setProperty('--y-move', `-${Math.random() * 50 + 50}vh`);
    }

    confetti.style.setProperty('--confetti-color', `hsl(${Math.random() * 360}, 100%, 50%)`);
    document.getElementById('confetti-container').appendChild(confetti);

    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

let confettiTimer = setInterval(() => {
    createConfetti(Math.random() < 0.5 ? 'left' : 'right');
}, 200);

setTimeout(() => {
    clearInterval(confettiTimer);
}, 5000);
