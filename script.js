const grid = document.querySelector("main")
let gridDimen = 500 // change if grid size shrinks

function createGrid(square){ // for a 16x16 grid, square = 16
    for (let x = 0; x < square; x++){
        const rowHtml = `<div class="flex row" id="${'row' + x}"></div>`
        grid.insertAdjacentHTML("afterbegin", rowHtml)
        let row = document.getElementById(`${"row" + x}`)
        for (let y = 0; y < square; y++){
            const widthHeight = gridDimen/square;
            const squareHtml = `<div class="square" style="width: ${widthHeight}px; height: ${widthHeight}px"></div>`
            row.insertAdjacentHTML("afterbegin", squareHtml)
        }
    }
    document.querySelectorAll(".square").forEach( (square) =>
        square.addEventListener("mouseenter", () => changeColor(square))
    )
}

function changeColor(square, color="black"){
    square.style.backgroundColor = color
}

createGrid(32)


function clearGrid(){
    document.querySelectorAll(".square").forEach( (square) =>
        changeColor(square, "transparent")
    )
}

function deleteGrid(){
    grid.innerHTML = ""
}

function deleteThenCreate(){
    deleteGrid()
    let gridSize = document.getElementById("gridSize").value
    document.getElementById("gridSizeLabel").innerText = gridSize
    createGrid(gridSize)
}

document.getElementById("clear").addEventListener("click", clearGrid)
document.getElementById("gridSize").addEventListener("change", deleteThenCreate)