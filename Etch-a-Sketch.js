
const container = document.querySelector('.container');


function createGrid() {

    for (let i = 0; i < 16 ; i++) {
        const newDiv = document.createElement("div"); // create an element div
        newDiv.textContent = "this" + i; // set content of the div element
        newDiv.id = "div-"+ i;
        container.appendChild(newDiv); // append back div to container
    }


    let a = newDiv
    
}
  
createGrid();

