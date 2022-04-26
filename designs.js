// Select color input
const colorInput = document.querySelector('#colorPicker')

//Accessing the color input value
let colorValue = colorInput.value

//Get the color input value on change
colorInput.addEventListener('change', function() {
    colorValue = colorInput.value
})

// Select size input - height, width
const heightInput = document.querySelector('#inputHeight')
const widthInput = document.querySelector('#inputWidth')

//Getting the table and table body
const table = document.querySelector('#pixelCanvas')
const tableBody = document.createElement('tbody')
table.appendChild(tableBody);

// Getting the form
const form = document.querySelector('#sizePicker')
form.addEventListener('submit', makeGrid)

// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
// Prevent reloading
    e.preventDefault()

//Changing gridweight and gridheight values to number
    let heightValue = Number(heightInput.value)
    let widthValue = Number(widthInput.value)


// for creating the number of rows
    if (tableBody.childElementCount === 0) {
        for(var i = 0; i < heightValue; i++){
            //Creating Rows
            const tableRow = document.createElement('tr')
            tableBody.appendChild(tableRow)

            for(var j = 0; j < widthValue; j++){
                //Creating Columns
                const tableColumn = document.createElement('td')
                tableRow.appendChild(tableColumn)
            }
        }
        
        table.addEventListener('click', e => {
            if(e.target.nodeName === 'TD') {
                e.target.style.backgroundColor = colorValue;
            }
        })
    } else {
        tableBody.textContent = '';
        for(var i = 0; i < heightValue; i++){
            //Creating Rows
            const tableRow = document.createElement('tr')
            tableBody.appendChild(tableRow)

            for(var j = 0; j < widthValue; j++){
                //Creating Columns
                const tableColumn = document.createElement('td')
                tableRow.appendChild(tableColumn)
            }
        }
    }
}

