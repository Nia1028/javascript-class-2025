let selectedTiles = [];
let score = 0;
let formedWord = "";
let foundWords = []; 

const gameBoard = document.getElementById("game-board");
const currentWordSpan = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const submitBtn = document.getElementById("submit-word");
const resetBtn = document.getElementById("reset-selection");
const wordsList = document.getElementById("words-list");

// Load tilesData dynamically from dictionary.json
fetch("dictionary.json")
  .then((response) => response.json())
  .then((data) => {
    const selectedWords = data.sort(() => 0.5 - Math.random()).slice(0, 10); // Randomly select 10 words
    const tilesData = [];

   // Loop through the selected words and split them into segments
    selectedWords.forEach((word) => {
      const tilesNeeded = Math.ceil(word.length / 3); // Calculate the number of tiles needed
      if (tilesNeeded > 20 - tilesData.length) return; // Skip the word if it cannot fit


      // Spliting the word into segments of 3 letters
      const segments = [];
      for (let i = 0; i < word.length; i += 3) { // Increment by 3 to split into 3-letter segments
        const segment = word.substring(i, i + 3); // Split into 3-letter segments
        segments.push(segment);
      }

      // Handle leftover letters
      if (segments.length > 1) {
        const lastSegment = segments[segments.length - 1];
        if (lastSegment.length === 1) {
          // If only 1 letter is left, append it to the previous segment
          segments[segments.length - 2] += lastSegment;
          segments.pop(); // Remove the last segment
        } else if (lastSegment.length === 2) {
          // If 2 letters are left, keep it as a 2-letter segment
               }
      }
      // Add unique segments to tilesData to avoid duplicates
      segments.forEach((segment) => {
        if (segment.length >= 2 && !tilesData.includes(segment)) {
          tilesData.push(segment);
        }
      });
    });

    // To ensure exactly 20 tiles are there by filling with random unique segments if needed
    while (tilesData.length < 20) {
      const randomSegment = Array.from({ length: 3 }, () =>
        String.fromCharCode(97 + Math.floor(Math.random() * 26))
      ).join(""); // Generate a random 3-letter segment with only letters
      if (!tilesData.includes(randomSegment)) {
        tilesData.push(randomSegment);
      }
    }

    // Shuffle the tiles to jumble their order
    tilesData.sort(() => 0.5 - Math.random());

    // Create tiles on the board
    tilesData.forEach((letters, index) => {
      const tile = document.createElement("div"); // creates a new <div> elements for the tiles
      tile.classList.add("tile"); //  adding CSS class 'tile'
      tile.textContent = letters; // Sets texts to the tile
      tile.dataset.index = index; // Stores tiles indexes
      tile.addEventListener("click", () => {
        //  adding an event listner to the tiles, if something is clicked.
        if (!selectedTiles.includes(index)) {
          //This prevents the user from selecting the same tile twice.
          selectedTiles.push(index); //Adds the tile’s index to the list of selected tiles.
          formedWord += letters; // will add the fragments and save to the formedWord
          currentWordSpan.textContent = formedWord; // show the user what have build so far
        }
      });
      gameBoard.appendChild(tile); // adding the tiles to the game board
    });
  })
  .catch((error) => console.error("Error loading dictionary:", error));

// Reset selection
resetBtn.addEventListener("click", () => {
  selectedTiles = []; // Empties the array that was storing the indexes of selected tiles.
  formedWord = "";
  score = 0; // Reset the score to 0
  scoreDisplay.textContent = `Score: ${score}`; // Update the score display
  currentWordSpan.textContent = ""; // To show the user, word is cleared
  foundWords = []; // Clear the found words list
  wordsList.innerHTML = ""; // Clear the displayed list
});

// Submit word for validation
submitBtn.addEventListener("click", async () => {
  if (formedWord === "") {
    alert("Please form a word before submitting.");
    return;
  }

  if (foundWords.includes(formedWord)) {
    alert(`You already found the word "${formedWord}".`);
    return;
  }

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${formedWord}`
    );

    if (response.ok) {
      const result = await response.json();
      alert(`"${formedWord}" is a valid word!`);
      score += formedWord.length; // Award points based on word length
      scoreDisplay.textContent = `Score: ${score}`;
      foundWords.push(formedWord); // Add the word to the found words list
      const listItem = document.createElement("li");
      listItem.textContent = formedWord.toUpperCase(); 
      wordsList.appendChild(listItem); // Display the word in the list
    } else if (response.status === 404) {
      alert(`"${formedWord}" is not a valid word.`);
    } else {
      alert("An error occurred while validating the word. Please try again.");
    }
  } catch (error) {
    console.error("Error validating word:", error);
    alert("An error occurred while validating the word. Please try again.");
  }

  // Reset the selection after submission
  selectedTiles = [];
  formedWord = "";
  currentWordSpan.textContent = "";
});
