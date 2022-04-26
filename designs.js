// Select color input
const colorInput = document.querySelector('#colorPicker');

//Accessing the color input value
let colorInputValue = colorInput.value;

//Get the color input value when changed
colorInput.addEventListener('change', function() {
    colorInputValue = colorInput.value;
})

// Select size input - height, width
const heightInput = document.querySelector('#inputHeight');
const widthInput = document.querySelector('#inputWidth');

//Getting the table and creating the table body
const table = document.querySelector('#pixelCanvas');
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);

//function for making the rows and columns
function rowsAndColumns(height, width) {
    //loop for creating the number of rows
    for(let i = 0; i < height; i++){

        //Creating Rows
        const tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);

        //loop for creating the number of rows
        for(let j = 0; j < width; j++){
            //Creating Columns
            const tableColumn = document.createElement('td');
            tableRow.appendChild(tableColumn);
        }
    }
};


// Getting the form
const form = document.querySelector('#sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', makeGrid);

// function for making the grid
function makeGrid(e) {
    // Prevent reloading of the page
    e.preventDefault();

    //Changing gridWeight and gridHeight values to number
    let heightValue = Number(heightInput.value);
    let widthValue = Number(widthInput.value);

    //if statement to erase old grids and insert new grids
    if (tableBody.childElementCount === 0) {
        //calling rowsAndColumns function
        rowsAndColumns(heightValue, widthValue);

        //changes background color of grid when clicked
        table.addEventListener('click', e => {
            if(e.target.nodeName === 'TD') {
                e.target.style.backgroundColor = colorInputValue;
            }
        });
    } else {
        //erases previous grid content of the table body
        tableBody.textContent = '';
        //calling rowsAndColumns function
        rowsAndColumns(heightValue, widthValue);
    }
};
