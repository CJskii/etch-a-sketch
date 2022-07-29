const gridContainer = document.querySelector("#grid-container");
let rows = 16;
let cols = 16;


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



function makeGrid(size){
    const gridContainer = document.querySelector('.container')
    console.log(gridContainer)
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    gridContainer.style.display = 'grid'
    console.log(gridContainer)
    let gridSize = size * size
    for (i = 0; i < gridSize; i++){
        let cell = document.createElement('div')
        cell.setAttribute('class', 'grid item')
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