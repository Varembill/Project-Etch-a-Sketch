



// function createGrid() {

//     for (let i = 0; i < 16 ; i++) {
//         const newDiv = document.createElement("div"); // create an element div
//         newDiv.textContent = "this" + i; // set content of the div element
//         newDiv.id = "div-"+ i;
//         container.appendChild(newDiv); // append back div to container



//     for (let x = 0; x < 16; x++){

//         const newDiv2 = document.createElement("div");
//         newDiv2.textContent = "that" + x;
//         newDiv2.appendChild(newDiv2);


//     }

// }
// }



const row = document.getElementById("input-row");
const col = document.getElementById("input-col");
const checkInput = document.querySelector(".check-input");
const submit = document.querySelector(".submit-button");
checkInputData ();

function checkInputData () {
  row.addEventListener('input',() => {}
   )

}


// submit.addEventListener("click", () => {
//   if( )
//   createGrid(, );

// })


const container = document.querySelector('.container');

function createGrid(col, row) {
  //create column first then add row to a child div to each column
  for (let i = 1; i <= col; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "column " + i;
    newDiv.id = "div-" + i;
    container.appendChild(newDiv);

    // now add 16 children to *this* div
    for (let x = 1; x <= row; x++) {
      const newDiv2 = document.createElement("div");
      newDiv2.textContent = "row " + x;
      newDiv2.addEventListener("mouseover", () => {
        newDiv2.style.background = "#03B037";
      });
      newDiv2.addEventListener("mouseout", () => {
        setTimeout(() => { newDiv2.style.background = "#7CB003"; }, 100);
        setTimeout(() => { newDiv2.style.background = ""; }, 150);
      })
      newDiv.appendChild(newDiv2);
    }
  }
};



