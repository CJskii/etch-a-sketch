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


let grid = function(num){
    const container = document.querySelector('container')
    for (i = 0; i < num; i++){
        let div = document.createElement('div').setAttribute('class', 'grid')
        container.appendChild(div);
    }
}

