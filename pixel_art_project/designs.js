//This function removes any existing grid and then makes a new grid based on the values stored in height and width
function makeGrid() {

    const table = document.querySelector("#pixelCanvas");
    //These get the value stored in the height and width.
    let height = document.querySelector("#inputHeight").value;
    let width = document.querySelector("#inputWidth").value;

    //This loop gets rid of any existing rows
    while (table.firstChild){
        table.removeChild(table.lastChild)
    }
    //This loop creates the grid
    for (height; height >= 1; height--) {
        //This loop creates a row based on the height selected
        const row = document.createElement("tr");
        table.appendChild(row);
        //This loop creates the boxes inside of each row equal to that width selected
        for (var numWidth = width; numWidth >= 1; numWidth--) {
            const pixel = document.createElement("td");
            row.appendChild(pixel);
            //This event listener changes the background color of the pixel when its clicked
            pixel.addEventListener("click", function(){
                let color = document.querySelector("#colorPicker").value;
                pixel.style.backgroundColor = color;
            })
        }
    }
}

const submitButton = document.querySelector("#submitButton");
//This runs the makeGrid Function when the submit button is clicked
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    makeGrid();
});

