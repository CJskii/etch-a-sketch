
const body = document.querySelector('html')
body.addEventListener('click', e => {
    //console.log(e)
})

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', logText, {
    capture:true
}));

function logText(e){
    console.log(e)
    //return grid(10);
}

function removeGrid(){
    const divs = document.querySelectorAll('.grid-item')
    divs.forEach((div) => div.remove())
}

function makeGrid(size){
    removeGrid()
    const gridContainer = document.querySelector('.container')
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


/* TABLET div.style.cssText = "border: 1px solid black; height: 45px; width: 45px";  */

/*
function colorSelection

function colorFill

function rainbowMode

function eraser

function clean
*/
//console.log(document.querySelector("#grid-container"));