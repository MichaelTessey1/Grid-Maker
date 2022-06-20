// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // get grid
    let grid = document.getElementById("grid")
    // create rows and columns, elements based off style sheet
    let col = document.createElement("td")
    let row = document.createElement("tr")

    // Adding First box with 0 rows and 0 columns
    if(numCols === 0) {
        row.appendChild(document.createElement("td"))
        grid.appendChild(row)

        // update columns only WHEN rows are 0
        if(numRows === 0) {
            numCols++
        }
    }
    // add corresponding rows for each existing columns
    else {
        for(let i = 0; i < numCols; i++) {
            row.appendChild(document.createElement("td"))
        }
        grid.appendChild(row)
    }

    //add row
    numRows++

}

// Add a column
function addC() {
    // get grid
    let grid = document.getElementById("grid")
    // create rows and columns, elements based off style sheet
    let col = document.createElement("td")
    let row = document.createElement("tr")

    // check for existing rows
    let existingRows = document.querySelectorAll('tr')

    // Adding first box with 0 rows and 0 columns (same as row)
    if(numRows === 0) {
        row.appendChild(document.createElement("td"))
        grid.appendChild(row)

        //update rows only WHEN cols are 0
        if(numCols === 0) {
            numRows++
        }
    }
    // add corresponding columnds for each existing rows
    else {
        for(let i = 0; i < numRows; i++) {
            existingRows[i].appendChild(document.createElement("td"))
        }
    }

    //add col
    numCols++
}

// Remove a row
function removeR() {
    let grid = document.getElementById('grid')
    //get last row
    let lastR = grid.lastElementChild
    //remove last row
    grid.removeChild(lastR)
    //update row
    numRows--;
    //when rows hit 0, reset everything
    if(numRows <= 0) {
        numRows = 0;
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    let grid = document.getElementById('grid')
    for(let i = numRows; i > 0; i--){
        grid.childNodes[i].removeChild(grid.childNodes[i].lastElementChild)
    }
    //update col
    numCols--;
    //when cols hit 0, reset everything
    if(numCols <= 0){
        numCols = 0;
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}