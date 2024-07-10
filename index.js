const container = document.querySelector(".grid-container");

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

generateGrid(16);
