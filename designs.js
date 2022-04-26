// Select color input
const colorInput = document.querySelector('#colorPicker')

// To get the color value of colorInput
colorInput.value

// Select size input - height, width
const heightInput = document.querySelector('#inputHeight')
const widthInput = document.querySelector('#inputWidth')

// Getting the form
const form = document.querySelector('#sizePicker')
form.addEventListener('submit', makeGrid)

//Getting the table
const table = document.querySelector('#pixelCanvas')
console.log(table)

//Creating thead, tbody and tr
const tableBody = document.createElement('tbody')
table.appendChild(tableBody);





// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
// Prevent reloading
    e.preventDefault()

//Changing gridweight and gridheight values to number
    let heightValue = Number(heightInput.value)
    let widthValue = Number(widthInput.value)

// for creating the number of rows
    for(var i = 0; i < heightValue; i++){
        const tableRow = document.createElement('tr')
        tableBody.appendChild(tableRow)

        for(var j = 0; j < widthValue; j++){
            const tableColumn = document.createElement('td')
            tableRow.appendChild(tableColumn)
        }
    }
}
