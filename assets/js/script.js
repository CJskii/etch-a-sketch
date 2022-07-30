const gridContainer = document.querySelector('.container')
let slider = document.querySelector('.form-range')
const colorSelection = document.querySelector('.color-selection')
let selectedColor = '#000000'
const colorFill = document.querySelector('#color-fill')
console.log(colorFill.textContent)
const rainbowMode = document.querySelector('#rainbow-mode')


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

function logText(e){
    console.log(e.path)
}

// FUNCTIONS 


function changeColor(selectedColor){ // lisen to grid cells and change color
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach(div => div.addEventListener('mousemove', function() {
        div.style.backgroundColor = selectedColor;
    }))
}



function removeGrid(){ // remove current grid
    const cells = document.querySelectorAll('.grid-item')
    cells.forEach((div) => div.remove())
}

function makeGrid(size){ //called onload and when user select grid size
    removeGrid()
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    gridContainer.style.display = 'grid'
    let gridSize = size * size
    for (i = 0; i < gridSize; i++){
        let cell = document.createElement('div')
        cell.setAttribute('class', 'grid-item')
        gridContainer.appendChild(cell)
    }
    changeColor('#000000')
    printSelection(16);
}

function fill(){ // lisen to grid cells and change color
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach((div => div.style.backgroundColor = `${selectedColor}`))
}

function clean(){
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach((div) => div.removeAttribute('style'))
}

function randomRgb(){
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach(div => div.addEventListener('mousemove', function() {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let rgb = `${r}, ${g}, ${b}`
        div.style.backgroundColor = `rgb(${rgb})`;
    }))
}

let num = Math.floor(Math.random() * 255)


//Selection

function printSelection(sliderValue){ // capture selection from user
    sliderValue = slider.value
    let label = document.querySelector('.form-label')
    label.textContent = `Grid: ${sliderValue} x ${sliderValue}` // update grid size
    return;
}


let grid = document.querySelector('.container')

grid.addEventListener('click', logText, { //listener to print events from grid container
    capture:true
})


window.onload = () => {
    makeGrid(16)
    //changeColor(color)
  }

/* TABLET div.style.cssText = "border: 1px solid black; height: 45px; width: 45px";  */

/*
function colorSelection

function colorFill

function rainbowMode

function eraser

function clean
*/
//console.log(document.querySelector("#grid-container"));