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
    gridContainer.cssText = `grid-template-columns: repeat(${rows}, 25px [col-start]); display: grid;`
    console.log(gridContainer.cssText)
    for (let i = 1; i <= (rows * cols); i++){
        let div = document.createElement('div')
        div.setAttribute('class', 'col-1 align-self-stretch')
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
        gridContainer.appendChild(div);
    };
};



/*
function colorSelection

function colorFill

function rainbowMode

function eraser

function clean
*/
//console.log(document.querySelector("#grid-container"));