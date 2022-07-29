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



let makeGrid = function(rows, cols){
    gridContainer.cssText = `grid-template-columns: repeat(${rows}, 1fr); 
    grid-template-rows: repeat(${cols}, 1fr); grid-column-gap: 0px;
    grid-row-gap: 0px; display: grid;`
    console.log(gridContainer.cssText)
    for (let i = 1; i <= (rows * cols); i++){
        let div = document.createElement('div')
        div.setAttribute('class', 'col-1 grid-item')
        div.style.cssText = "border: 1px solid black; height: 36px; width: 36px"; 
        gridContainer.appendChild(div);
    };
};


/* TABLET div.style.cssText = "border: 1px solid black; height: 45px; width: 45px";  */

/*
function colorSelection

function colorFill

function rainbowMode

function eraser

function clean
*/
//console.log(document.querySelector("#grid-container"));