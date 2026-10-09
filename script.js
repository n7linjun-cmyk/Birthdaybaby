/* =========================================================
   BIRTHDAY SURPRISE - JAVASCRIPT
   ========================================================= */

/* ---------- EASY CUSTOMIZATION ---------- */

const birthdayPerson = "அம்மா";

/* Change the text above to the person's name.
   Example:
   const birthdayPerson = "Ananya";
*/

/* ---------- ELEMENTS ---------- */

const screens = document.querySelectorAll(".screen");
const particles = document.getElementById("particles");
const confetti = document.getElementById("confetti");

const startBtn = document.getElementById("startBtn");
const videoNextBtn = document.getElementById("videoNextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalBtn = document.getElementById("finalBtn");
const noMessage = document.getElementById("noMessage");
const mainVideo = document.getElementById("mainVideo");

/* ---------- NAME ---------- */

document.querySelectorAll(".person-name").forEach(element => {
  element.textContent = birthdayPerson;
});

/* ---------- SCREEN NAVIGATION ---------- */

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ---------- INTRO PARTICLES ---------- */

function createParticles() {
  for (let i = 0; i < 75; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const size = Math.random() * 5 + 2;
    const isBlue = Math.random() > 0.5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 7 + 5}s`;
    particle.style.animationDelay = `${Math.random() * -10}s`;

    particle.style.background = isBlue
      ? "#20bfff"
      : "#39ff9b";

    particle.style.boxShadow = isBlue
      ? "0 0 12px #20bfff"
      : "0 0 12px #39ff9b";

    particles.appendChild(particle);
  }
}

createParticles();

/* ---------- INTRO -> VIDEO ---------- */

startBtn.addEventListener("click", () => {
  showScreen("birthdayVideo");

  setTimeout(() => {
    mainVideo.play().catch(() => {
      // Browser may require the user to press play.
    });
  }, 500);
});

/* ---------- VIDEO -> QUESTION ---------- */

videoNextBtn.addEventListener("click", () => {
  mainVideo.pause();
  showScreen("question");
});

/* Also continue automatically when video finishes. */
mainVideo.addEventListener("ended", () => {
  showScreen("question");
});

/* ---------- THE MOVING NO BUTTON ---------- */

let noAttempts = 0;

const noMessages = [
  "Oops... that button seems shy 😂",
  "Nope, try again 👀",
  "Are you REALLY trying to press NO? 😭",
  "The button said RUNNN 😂",
  "I think YES is the correct answer 💚",
  "Okay okay... one more try 😌"
];

function moveNoButton() {
  noAttempts++;

  const area = document.querySelector(".answer-area");
  const areaRect = area.getBoundingClientRect();

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = Math.max(0, areaRect.width - buttonWidth);
  const maxY = Math.max(0, areaRect.height - buttonHeight);

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.transform = "none";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  noMessage.textContent =
    noMessages[Math.min(noAttempts - 1, noMessages.length - 1)];
}

/* Desktop */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile / touch */
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});

/* If they somehow click it */
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

/* ---------- YES ---------- */

yesBtn.addEventListener("click", () => {
  launchConfetti(120);
  showScreen("videos");
});

/* ---------- CONFETTI ---------- */

function launchConfetti(amount = 100) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";

    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * -20}%`;

    const size = Math.random() * 8 + 5;

    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.7}px`;

    piece.style.background =
      Math.random() > 0.5 ? "#20bfff" : "#39ff9b";

    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    confetti.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5500);
  }
}

/* ---------- FINAL SCREEN ---------- */

finalBtn.addEventListener("click", () => {
  showScreen("final");

  setTimeout(() => {
    launchConfetti(180);
  }, 300);
});

/* ---------- EXTRA SPARKLE BURST ---------- */

document.addEventListener("click", (event) => {
  if (
    event.target.tagName === "BUTTON" &&
    !event.target.classList.contains("no-btn")
  ) {
    sparkleBurst(event.clientX, event.clientY);
  }
});

function sparkleBurst(x, y) {
  for (let i = 0; i < 12; i++) {
    const sparkle = document.createElement("span");

    sparkle.textContent = "✦";
    sparkle.style.position = "fixed";
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.color =
      i % 2 === 0 ? "#20bfff" : "#39ff9b";
    sparkle.style.fontSize = `${Math.random() * 12 + 8}px`;
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "999";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 30;

    sparkle.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 1
        },
        {
          transform:
            `translate(calc(-50% + ${Math.cos(angle) * distance}px),
             calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.2)`,
          opacity: 0
        }
      ],
      {
        duration: 700,
        easing: "ease-out"
      }
    );

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 750);
  }
}
