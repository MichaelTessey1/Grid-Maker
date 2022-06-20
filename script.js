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
        row.appendChild(col)
        grid.appendChild(row)

        // update columns
        numCols++
    }
    // add corresponding rows for each existing columns
    else {
        for(let i = 0; i < numCols; i++) {
            row.appendChild(col)
        }
        grid.appendChild(row)
    }

    //add row
    numRows++

}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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