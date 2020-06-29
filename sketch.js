const gridSize = 800;
var size = 16;

const restart = document.createElement('button');
restart.innerHTML = "Restart";
restart.style.cssText = "display: block; padding: 10; " + 
    "margin-left: auto; margin-right: auto; margin-bottom: 20; width: 100;"
restart.addEventListener("click", () => {
    size = prompt("Size: (1 - 100)");
    clear();
    makeGrid();
});
document.body.appendChild(restart);

const grid = document.createElement('div');
grid.style.cssText = "margin-left: auto; margin-right: auto; width: " + gridSize.toString() 
	+ "; height: " + gridSize.toString() + "; background-color: white;";
document.body.appendChild(grid);

function clear() {
    while (grid.firstChild)
        grid.removeChild(grid.firstChild);
}

function makeGrid() {
  for (i = 0; i < size; i++) {    
      for (j = 0; j < size; j++) {
          const square = document.createElement('div');
	  var sideLength = gridSize / size - 2;
          square.style.cssText = "display: inline-block; margin: 0; padding: 0; " +
	    "background-color: white; border-style: solid; border-color: gray; border-width: 1px;";
	  console.log('side length: ' + sideLength); 
	  square.style.width = sideLength;
	  square.style.height = sideLength;
	  square.addEventListener("mouseover", (e) => {
	      e.target.style.backgroundColor = "black";
  	      console.log("moused over");
  	  });

          grid.appendChild(square);
      }
  }
}

makeGrid();
