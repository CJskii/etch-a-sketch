const gridContainer = document.querySelector('.container')
let slider = document.querySelector('.form-range')
const colorSelection = document.querySelector('.color-selection')


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


const color = colorSelection.addEventListener('change', function(){ //color variable from user
    let userColor = colorSelection.value;
    console.log(userColor)
    return changeColor(userColor)
})

function logText(e){
    console.log(e)
}

function changeColor(color){
    let cell = document.querySelectorAll('.grid-item')
    cell.forEach(div => div.addEventListener('mousemove', function() {
        div.style.backgroundColor = color;
    }))
}


// Grid

function removeGrid(){
    const cells = document.querySelectorAll('.grid-item')
    cells.forEach((div) => div.remove())
}

function makeGrid(size){
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
}

//Selection

function printSelection(sliderValue){
    sliderValue = slider.value
    let label = document.querySelector('.form-label')
    label.textContent = `Grid: ${sliderValue} x ${sliderValue}`
    return;
}


let grid = document.querySelector('.container')

grid.addEventListener('click', logText, {
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