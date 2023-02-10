

const gridSize = 4;
const gridContainer = document.getElementById('grid-container');

function initializeGrid(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i =0; i < (size ** 2); i++){
        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item');
        gridItem.textContent = i
        gridContainer.appendChild(gridItem)
    }
}

initializeGrid(gridSize);