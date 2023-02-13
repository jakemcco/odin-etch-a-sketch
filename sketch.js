

const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSizeValue = document.getElementById('gridSizeValue');
const drawColor = 'white';
const gridContainer = document.getElementById('grid-container');

//Button variables
const clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = ()=> resetGrid();

let gridSize = gridSizeSlider.value;
gridSizeValue.textContent = `${gridSize} x ${gridSize}`;

gridSizeSlider.onchange = () =>{
    gridSize = gridSizeSlider.value;
    gridSizeValue.textContent = `${gridSize} x ${gridSize}`;
    resetGrid();
}
//Monitor mouse click status for whether user wants to draw or just hover

let mouseDown = false
document.body.onmousedown = () => (mouseDown) = true
document.body.onmouseup = () => (mouseDown) = false

function initializeGrid(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i =0; i < (size ** 2); i++){
        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', changeColor)
        gridItem.addEventListener('mousedown', changeColor)
        gridContainer.appendChild(gridItem)
    }
}

function changeColor(e){
    console.log(e)
    if (e.type === 'mousedown' || (mouseDown && e.type === 'mouseover')){
        e.target.style.backgroundColor = drawColor
    }
    else return;
}

function resetGrid(){
    gridContainer.replaceChildren(); //https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    initializeGrid(gridSize);
}

initializeGrid(gridSize);