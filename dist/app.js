const screen = document.querySelector('.screen')
const resetBtn = document.querySelector('.btn--reset')

function getAlpha(element) {
  let alpha = +window
    .getComputedStyle(element)
    .backgroundColor.match(/[.?\d]+/g)[3]

  if (alpha > 0) return alpha - 0.1
  return alpha
}

function paint(e) {
  e.target.style.backgroundColor = `rgba(255, 255, 255, ${getAlpha(e.target)})`
}

function reset() {
  const value = parseInt(prompt('Enter a number between 10 and 100:', '10'))

  if (isNaN(value)) {
    alert('ERROR! The value you entered is not a number!')
    return
  }

  if (value < 10 || value > 100) {
    alert('ERROR! The value should be in the range 10 - 100!')
    return
  }

  generateGrid(value)
}

function clearScreen() {
  while (screen.firstChild) {
    screen.removeChild(screen.firstChild)
  }
}

function generateGrid(size) {
  clearScreen()

  for (let i = 0; i < size ** 2; i++) {
    const item = document.createElement('div')

    item.className = 'screen__item'
    item.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
    item.addEventListener('mouseover', paint)

    screen.appendChild(item)
  }

  screen.className = `screen--s--${size}`
  screen.classList.add('screen')
}

resetBtn.addEventListener('click', reset)
generateGrid(16)
