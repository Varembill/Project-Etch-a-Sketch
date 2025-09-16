function createGrid() {
    const container = document.querySelector(".container");
   
    for (let i = 1; i < 17; i++) {
    const newDiv = document.createElement("div");
    
       newDiv.textContent = "Div "+ i;
  
       container.appendChild(newDiv);
       
    


    }

}


createGrid() 