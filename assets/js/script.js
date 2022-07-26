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
    const gridContainer = document.querySelector('#container');
    gridContainer.setAttribute('style', '--grid-rows: rows')
    gridContainer.setAttribute('style', '--grid-cols: cols')
    //gridContainer.style.cssText = '--grid-rows: rows'
    //gridContainer.style.cssText = '--grid-cols: cols'
    for (let i = 0; i < (rows * cols); i++){
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        gridContainer.appendChild(cell).className = 'grid-item'
    };
};

console.log(document.querySelector("#container"));

