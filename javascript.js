// Store image options for each category
const hairStyles = [
  "images/hair0.png",
  "images/hair1.png",
  "images/hair2.png",
  "images/hair3.png",
  "images/hair4.png"
];

const topStyles = [
  "images/top0.png",
  "images/top10.png",
  "images/top2.png",
  "images/top3.png",
  "images/top4.png",
  "images/top5.png"
];

const pantsStyles = [
  "images/pants0.png",
  "images/pants1.png",
  "images/pants2.png",
  "images/pants3.png",
  "images/pants4.png",
  "images/pants5.png",
  "images/pants6.png",
  "images/pants7.png",
];

const shoeStyles = [
  "images/shoes0.png",
  "images/shoes1.png",
  "images/shoes2.png",
  "images/shoes3.png",
  "images/shoes4.png",
];

// Track current index for each category
let currentHair = 0;
let currentTop = 0;
let currentPants = 0;
let currentShoes = 0;

// Utility: Set background image
function setStyle(id, image) {
  const el = document.getElementById(id);
  el.style.backgroundImage = `url("${image}")`;
  el.style.backgroundSize = "contain";
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundPosition = "center";
}

// HAIR
function nextHair() {
  currentHair = (currentHair + 1) % hairStyles.length;
  setStyle("hair", hairStyles[currentHair]);
}
function prevHair() {
  currentHair = (currentHair - 1 + hairStyles.length) % hairStyles.length;
  setStyle("hair", hairStyles[currentHair]);
}

// TOP
function nextTop() {
  currentTop = (currentTop + 1) % topStyles.length;
  setStyle("top", topStyles[currentTop]);
}
function prevTop() {
  currentTop = (currentTop - 1 + topStyles.length) % topStyles.length;
  setStyle("top", topStyles[currentTop]);
}

// PANTS
function nextPants() {
  currentPants = (currentPants + 1) % pantsStyles.length;
  setStyle("pants", pantsStyles[currentPants]);
}
function prevPants() {
  currentPants = (currentPants - 1 + pantsStyles.length) % pantsStyles.length;
  setStyle("pants", pantsStyles[currentPants]);
}

// SHOES
function nextShoes() {
  currentShoes = (currentShoes + 1) % shoeStyles.length;
  setStyle("shoes", shoeStyles[currentShoes]);
}
function prevShoes() {
  currentShoes = (currentShoes - 1 + shoeStyles.length) % shoeStyles.length;
  setStyle("shoes", shoeStyles[currentShoes]);
}

// Initialize with default styles
window.addEventListener("DOMContentLoaded", () => {
  setStyle("hair", hairStyles[currentHair]);
  setStyle("top", topStyles[currentTop]);
  setStyle("pants", pantsStyles[currentPants]);
  setStyle("shoes", shoeStyles[currentShoes]);
});

