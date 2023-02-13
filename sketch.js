
const drawColor = 'white';
const gridSizeSlider = document.getElementById('gridSizeSlider');
const sliderText = document.getElementById('sliderText');

const gridContainer = document.getElementById('grid-container');
const clearBtn = document.getElementById('clearBtn');
let gridSize = gridSizeSlider.value;

//Input variable functionality

clearBtn.onclick = ()=> resetGrid();
sliderText.textContent = `${gridSize} x ${gridSize}`;
gridSizeSlider.onmousemove = (e) => updateSliderText(e.target.value)
gridSizeSlider.onchange = (e) => {
    gridSize = gridSizeSlider.value;
    resetGrid();
}

//Monitor mouse click status for whether user wants to draw or just hover
let mouseDown = false
document.body.onmousedown = () => (mouseDown) = true
document.body.onmouseup = () => (mouseDown) = false

function updateSliderText(value){
    sliderText.textContent = `${value} x ${value}`;
}

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