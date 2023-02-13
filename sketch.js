

const gridSize = 16;
const gridContainer = document.getElementById('grid-container');

function initializeGrid(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i =0; i < (size ** 2); i++){
        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item');
        gridItem.textContent = i
        gridItem.addEventListener('mouseenter', (e) =>{
            changeColor(e.target,'white');
        })
        gridItem.addEventListener('mouseleave', (e) =>{
            changeColor(e.target,'');
        })

        gridContainer.appendChild(gridItem)
    }
}

function changeColor(item, color){
    item.style.backgroundColor = color;
}

initializeGrid(gridSize);