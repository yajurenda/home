let count = 0;
let best = 0;
let total = 0;
let startTime = null;
let clicks = 0;
let mute = false;

const countEl = document.getElementById("count");
const bestEl = document.getElementById("best");
const totalEl = document.getElementById("total");
const cpsEl = document.getElementById("cps");
const clicker = document.getElementById("clicker");
const muteEl = document.getElementById("mute");
const resetEl = document.getElementById("reset");

const audioFiles = ["game/click1.mp3", "game/click2.mp3"];

// 音を再生
function playSound() {
  if (mute) return;
  const file = audioFiles[Math.floor(Math.random() * audioFiles.length)];
  const audio = new Audio(file);
  audio.play();
}

// クリック時
clicker.addEventListener("click", () => {
  if (!startTime) startTime = Date.now();

  count++;
  total++;
  clicks++;

  countEl.textContent = count;
  totalEl.textContent = total;

  if (count > best) {
    best = count;
    bestEl.textContent = best;
  }

  playSound();
});

// CPS 計算
setInterval(() => {
  if (!startTime) return;
  const elapsed = (Date.now() - startTime) / 1000;
  cpsEl.textContent = (clicks / elapsed).toFixed(2);
}, 500);

// ミュート切り替え
muteEl.addEventListener("change", (e) => {
  mute = e.target.checked;
});

// リセット
resetEl.addEventListener("click", () => {
  count = 0;
  clicks = 0;
  startTime = null;
  countEl.textContent = 0;
  cpsEl.textContent = "0.00";
});
