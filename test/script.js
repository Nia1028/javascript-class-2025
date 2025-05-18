const gridContainer = document.getElementById("grid-container");
const foundWordsList = document.getElementById("found-words");
const shuffleButton = document.getElementById("shuffle-button");
const clearButton = document.getElementById("clear-button");
const submitButton = document.getElementById("submit-button");

let tiles = [];
let selectedTiles = [];
let foundWords = new Set();

// Sample tile segments
const tileSegments = [
  "ap",
  "pear",
  "ance",
  "dis",
  "appear",
  "re",
  "act",
  "ion",
  "un",
  "able",
  "pre",
  "dict",
  "ed",
  "mis",
  "under",
  "stand",
  "ing",
  "over",
  "come",
  "ment",
];

// Sample dictionary for validation
const dictionary = new Set([
  "appear",
  "disappear",
  "reaction",
  "unable",
  "predicted",
  "misunderstanding",
  "overcome",
  "ap",
  "pear",
  "ance",
  "dis",
  "re",
  "act",
  "ion",
  "un",
  "able",
  "pre",
  "dict",
  "ed",
  "mis",
  "under",
  "stand",
  "ing",
  "over",
  "come",
  "ment",
]);

function createGrid() {
  gridContainer.innerHTML = "";
  tiles = [...tileSegments];
  tiles.forEach((segment, index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = segment;
    tile.dataset.index = index;
    tile.addEventListener("click", () => toggleTileSelection(tile));
    gridContainer.appendChild(tile);
  });
}

function toggleTileSelection(tile) {
  const index = tile.dataset.index;
  if (selectedTiles.includes(index)) {
    selectedTiles = selectedTiles.filter((i) => i !== index);
    tile.classList.remove("selected");
  } else {
    selectedTiles.push(index);
    tile.classList.add("selected");
  }
}

function clearSelection() {
  selectedTiles = [];
  document
    .querySelectorAll(".tile")
    .forEach((tile) => tile.classList.remove("selected"));
}

function shuffleTiles() {
  for (let i = tileSegments.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tileSegments[i], tileSegments[j]] = [tileSegments[j], tileSegments[i]];
  }
  createGrid();
  clearSelection();
}

async function submitWord() {
    const word = selectedTiles.map(index => tileSegments[index]).join('').toLowerCase();
  
    if (foundWords.has(word)) {
      alert('You already found this word!');
      clearSelection();
      return;
    }
  
    // Validate word using dictionary API
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Word not found');
      }
      const data = await response.json();
  
      // Word is valid
      foundWords.add(word);
      const listItem = document.createElement('li');
      listItem.textContent = word;
      foundWordsList.appendChild(listItem);
    } catch (error) {
      alert(`Invalid word: ${word}`);
    }
  
    clearSelection();
  }
