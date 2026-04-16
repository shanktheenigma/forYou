// Generate floating hearts
const bg = document.getElementById("heartsBg");
const colors = [
  "#f9b8ce",
  "#e8b8f9",
  "#f9c8b8",
  "#b8d0f9",
  "#c26b8a",
  "#b88ab8",
];
const hearts = ["♥", "❤", "💕", "💗", "💖", "💝"];
for (let i = 0; i < 28; i++) {
  const el = document.createElement("div");
  el.className = "heart-float";
  el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  el.style.left = Math.random() * 100 + "%";
  el.style.animationDuration = 8 + Math.random() * 14 + "s";
  el.style.animationDelay = Math.random() * 18 + "s";
  el.style.fontSize = 13 + Math.random() * 18 + "px";
  el.style.color = colors[Math.floor(Math.random() * colors.length)];
  bg.appendChild(el);
}

// Photo upload
function loadPhoto(event, frameId, label) {
  const file = event.target.files[0];
  if (!file) return;
  const frame = document.getElementById(frameId);
  const img = frame.querySelector("img");
  const reader = new FileReader();
  reader.onload = (e) => {
    img.src = e.target.result;
    frame.classList.add("has-photo");
  };
  reader.readAsDataURL(file);
  event.stopPropagation();
}

// Stagger reason cards on scroll (simple observer)
const cards = document.querySelectorAll(".reason-card");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = "running";
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
cards.forEach((c) => {
  c.style.animationPlayState = "paused";
  obs.observe(c);
});
