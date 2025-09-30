



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
  

const container = document.querySelector('.container');

function createGrid() {
  //create column first then add row to a child div to each column
  for (let i = 1; i < 17; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "column " + i;
    newDiv.id = "div-" + i;
    container.appendChild(newDiv);

    // now add 16 children to *this* div
    for (let x = 0; x < 16; x++) {
      const newDiv2 = document.createElement("div");
      newDiv2.textContent = "row " + x;
      newDiv2.addEventListener("mouseover", () => {
        newDiv2.style.background = "#03B037";
      });
      newDiv2.addEventListener("mouseout", ()=> {
        setTimeout(() =>{newDiv2.style.background = "#7CB003";},150);
        setTimeout(() =>{newDiv2.style.background = "";},250);
      })
      newDiv.appendChild(newDiv2);
    }
  }
};

createGrid();


const submit = document.querySelector(".submit-button");
submit.addEventListener()
