// Load completion state from localStorage
document.addEventListener("DOMContentLoaded", () => {
  loadCompletionState();
});

let gridBlocks = document.querySelectorAll(".grid_block");
let percentage = document.querySelector(".percentage");
let progressCircle = document.querySelector(".progress_circle");

// Toggling blocks completion
gridBlocks.forEach((gridBlock, index) => {
  gridBlock.addEventListener("click", () => {
    gridBlock.classList.toggle("completed");
    updateProgress();
    saveCompletionState(index, gridBlock.classList.contains("completed"));
  });
});

// Calculate percentage
function updateProgress() {
  let completedBlocks = document.querySelectorAll(".completed");
  let percent = Math.floor((completedBlocks.length / gridBlocks.length) * 100);
  percentage.innerText = `${percent}%`;
  progressCircle.style.background = `conic-gradient(rgba(100, 239, 100, 0.7) ${
    percent * 3.6
  }deg, #4d4d4d 0deg)`;
}

// Save completion state to localStorage
function saveCompletionState(index, completed) {
  // Using localStorage with a key based on the index
  localStorage.setItem(`block_${index}`, completed ? "completed" : "");
}

// Load completion state from localStorage
function loadCompletionState() {
  gridBlocks.forEach((gridBlock, index) => {
    // Retrieve the completion state from localStorage
    const completed = localStorage.getItem(`block_${index}`);
    if (completed === "completed") {
      gridBlock.classList.add("completed");
    }
  });
  // Update the progress after loading the state
  updateProgress();
}