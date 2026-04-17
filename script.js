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
