const gridSize = 600;
var size = 16;
var currentColor = 'black';

const restart = document.createElement('button');
restart.innerHTML = "Restart";
restart.style.cssText = "display: block; padding: 10; " + 
    "margin-left: auto; margin-right: auto; margin-bottom: 20; width: 100; color: white: background-color: slateblue; border: none;"
restart.addEventListener("click", () => {
    size = prompt("Size: (1 - 100)");
    clear();
    makeGrid();
});
document.body.appendChild(restart);

const grid = document.createElement('div');
grid.style.cssText = "margin-left: auto; margin-right: auto; width: " + gridSize.toString() +'px' 
	+ "; height: " + gridSize.toString()+'px' + "; background-color: white; display: flex; flex-wrap: wrap;";
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
          square.style.cssText = "display: inline-block; margin: 0px; padding: 1em; font-size: 0;" +
	    "background-color: white; border-style: solid; border-color: gray; border-width: 1px;";
	  console.log('side length: ' + sideLength+'px'); 
	  square.style.width = sideLength + 'px';
	  square.style.height = sideLength + 'px';
	  square.addEventListener("mouseover", (e) => {
	      e.target.style.backgroundColor = currentColor;
  	  });

          grid.appendChild(square);
      }
  }
}

//red orange yellow green blue voilet indigo brown black white gray
function makePallete() {
    const holder = document.createElement('div');
    holder.style.cssText = 'display: flex; flex-direction: column; top: 0; left: 0; float: left; position: absolute; height: 53vw; width: auto;';
    
    var colors = ['crimson', 'orangered', 'coral', 'gold', 'lightgreen', 'seagreen', 
	    'skyblue', 'dodgerblue', 'violet', 'indigo', 'sienna', 'black', 'white', 'gray']

    for (var i = 0; i < colors.length; i++) {
	const index = i;
        var colorSquare = document.createElement('div');
	colorSquare.style.cssText = 'margin: 0px; padding: 1em; background-color: ' + colors[i] + '; height: 48px; width: 48px;';
	colorSquare.addEventListener('click', () => {
	    currentColor = colors[index];
	})
	holder.appendChild(colorSquare);
    }

    document.body.appendChild(holder);
}

makePallete();
makeGrid();
//makePallete();
