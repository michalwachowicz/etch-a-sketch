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
  if (!box || !box.classList.contains("box")) return;

  const backgroundColor = box.style.backgroundColor;
  let r, g, b, a;

  if (backgroundColor) {
    const rgbaRegex = /rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/;
    const match = backgroundColor.match(rgbaRegex);

    if (match) {
      [_, r, g, b, a] = match;

      r = parseInt(r);
      g = parseInt(g);
      b = parseInt(b);
      a = Math.min((parseFloat(a) || 0) + 0.1, 1);
    }
  } else {
    r = getRandomInt(255);
    g = getRandomInt(255);
    b = getRandomInt(255);
    a = 0.1;
  }

  box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
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
