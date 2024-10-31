const container = document.querySelector(".container");
container.style.cssText = "display: flex; flex-wrap: wrap; margin-top: 90px; width: 100%; justify-content: center; margin-bottom: 90px;";
const randomColor = () => Math.floor(Math.random() * 256);


const resetGrid = function () {
    // Remove any old grid boxes
    let gridBoxes = container.querySelectorAll(".container div");
    gridBoxes.forEach(gridBox => gridBox.remove());
}

const hoverEffect = function (gridBoxes) {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener("mouseover", () => {
            const currentOpacity = parseFloat(gridBox.style.opacity);
            gridBox.style.opacity = currentOpacity + 0.1;
        });
    });
}

function createCustomGrid() {
    const gridSize = parseInt(prompt("Enter grid size (1 - 100): "));
    // Check that gridSize is a number, > 0 and < 100
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    resetGrid();
    const newGridWidth = Math.floor(container.getBoundingClientRect().width / parseFloat(gridSize + 0.5));
    const newGridHeight = newGridWidth;
    // Create new grid boxes
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add(`grid-${i + 1}-${j + 1}`);
            gridBox.textContent = `${i + 1}, ${j + 1}`;
            gridBox.style.cssText = `border: 1px solid black; width: ${newGridWidth}px; opacity: 0; height: ${newGridHeight}px;`;
            gridBox.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            console.log("gridBox Width: ", gridBox.getBoundingClientRect().width);
            container.appendChild(gridBox);
        }
    }
    hoverEffect(container.querySelectorAll(".container div"));
}

const defaultGridDisplay = function () {
    const defaultGridWidth = Math.floor(container.getBoundingClientRect().width / 16.5);
    const defaultGridHeight = defaultGridWidth;
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add(`grid-${i + 1}-${j + 1}`);
            gridBox.textContent = `${i + 1}, ${j + 1}`;
            gridBox.style.cssText = `border: 1px solid black; width: ${defaultGridWidth}px; opacity: 0; height: ${defaultGridHeight}px;`;
            gridBox.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            console.log("gridBox Width: ", gridBox.getBoundingClientRect().width);
            container.appendChild(gridBox);
        }
    }
    hoverEffect(container.querySelectorAll(".container div"));
}

console.log(container.getBoundingClientRect());

//Default Grid Display
defaultGridDisplay();

// Sketch Button
const sketchButton = document.querySelector("button");
sketchButton.addEventListener("click", createCustomGrid);