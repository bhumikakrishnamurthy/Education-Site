// Sample data for levels (can be replaced with actual data from backend)
const levels = [
    { name: "EXPLORE CONDITIONAL STATEMENTS",description: "" },
    { name: " DIVE INTO CONDITIONAL STATEMENTS",description: "" },
    { name: "LETS GIVE INTO ARRAYS",description:"" },
    { name: "WORKING WITH ARRAYS", description: " " }
  ];
  
  // Function to dynamically generate level sections
  function generateLevels() {
    const levelsSection = document.getElementById("levels");
    levels.forEach((level, index) => {
      const levelSection = document.createElement("section");
      levelSection.classList.add("level");
      levelSection.innerHTML = `
        <h2>${level.name}</h2>
        <p>${level.description}</p>
        <button class="start-button" data-level="${index}">Dive In</button>
      `;
      levelsSection.appendChild(levelSection);
    });
  }
  
  // Function to start level
  function startLevel(levelIndex) {
    // Perform actions to start the level
    //alert(`Starting level ${levelIndex + 1}: ${levels[levelIndex].name}`);
    window.location.href = `level${levelIndex + 1}.html`;
  }
  
  // Generate levels on page load
  document.addEventListener("DOMContentLoaded", () => {
    generateLevels();
  
    // Add event listener to start buttons
    const startButtons = document.querySelectorAll(".start-button");
    startButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        startLevel(index);
      });
    });
  });
  