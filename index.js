const container = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".new-grid-btn");

const getRandomInt = (max) => Math.floor(Math.random() * max);

const generateGrid = (size) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    const boxSize = `calc(100% / ${size})`;

    box.classList.add("box");
    box.style.width = boxSize;
    box.style.paddingBottom = boxSize;

    container.appendChild(box);
  }
};

container.addEventListener("mouseover", (e) => {
  const box = e.target;

  if (box && box.classList.contains("box")) {
    const r = getRandomInt(255);
    const g = getRandomInt(255);
    const b = getRandomInt(255);

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
});

newGridBtn.addEventListener("click", () => {
  let size;

  do {
    size = prompt("Specify the grid size (8-100):");

    if (!size) return;
    size = parseInt(size);
  } while (isNaN(size) || size < 8 || size > 100);

  generateGrid(size);
});

generateGrid(16);
