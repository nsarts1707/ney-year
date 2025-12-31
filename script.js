function enterSite() {
  document.getElementById("lockScreen").style.display = "none";
  typeText();
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  music.paused ? music.play() : music.pause();
}

function toggleNote(card) {
  const note = card.querySelector(".note");
  note.style.display = note.style.display === "block" ? "none" : "block";
}

function pandaComfort() {
  const messages = [
    "You’re allowed to rest 🐼",
    "You’re not behind 💗",
    "I’m here with you 🌸",
    "Take a breath ✨",
    "You matter."
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}

function openMessage(type) {
  const messages = {
    anxious: "Breathe slowly. You’re safe right now.",
    placements: "Your worth is bigger than any result.",
    sleep: "Close your eyes. Tomorrow can wait.",
    bad: "Bad days don’t erase good hearts."
  };
  document.getElementById("openText").innerText = messages[type];
}

// Typing animation
const text = "You don’t have to be strong all the time.";
let index = 0;
function typeText() {
  if (index < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}
