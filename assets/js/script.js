const gridContainer = document.querySelector('.container')
let slider = document.querySelector('.form-range')
const colorSelection = document.querySelector('.color-selection')
let selectedColor = '#000000'
let grid = document.querySelector('.container')

// Listeners

const sliderListener = slider.addEventListener("change", function() { // slider listener
    let user = slider.value
    makeGrid(user);
    return printSelection(user);
}, false);

const buttons = document.querySelectorAll('button') // button listener
buttons.forEach(button => button.addEventListener('click', logText, {
    capture:true
}));

let color = colorSelection.addEventListener('change', function(){ //color variable from user
    let userColor = colorSelection.value;
    console.log(userColor)
    selectedColor = userColor
    return changeColor(userColor) // calls changeColor function
})

// FUNCTIONS 

function logText(e){
    console.log(e.path)
}

function changeColor(selectedColor){ // lisen to grid cells and change color
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach(div => div.addEventListener('mousemove', function() {
        div.style.backgroundColor = selectedColor;
    }))
}

function resetGrid(){ // reset current grid
    const cells = document.querySelectorAll('.grid-item')
    cells.forEach((div) => div.remove())
}

function makeGrid(size){ //called onload and when user select grid size
    resetGrid()
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    gridContainer.style.display = 'grid'
    let gridSize = size * size
    for (i = 0; i < gridSize; i++){
        let cell = document.createElement('div')
        cell.setAttribute('class', 'grid-item')
        gridContainer.appendChild(cell)
    }
    changeColor(selectedColor)
    printSelection(16);
}

function fill(){ //  fill grid with selected color
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach((div => div.style.backgroundColor = `${selectedColor}`))
}

function clean(){ // clean grid from background color
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach((div) => div.removeAttribute('style'))
}

function randomRgb(){ // fill cells with rangom rgb colors on mousemove
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach(div => div.addEventListener('mousemove', function() {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let rgb = `${r}, ${g}, ${b}`
        div.style.backgroundColor = `rgb(${rgb})`;
    }))
}

//Selection

function printSelection(sliderValue){ // capture selection from user
    sliderValue = slider.value
    let label = document.querySelector('.form-label')
    label.textContent = `Grid: ${sliderValue} x ${sliderValue}` // update grid size
    return;
}

window.onload = () => {
    makeGrid(16)
  }