// renvoi vrai si deux cellules sont identiques ou faux si non
function compareCells(cell1, cell2) {
  valcell1 = valCell(cell1);
  valcell2 = valCell(cell2);
  return valcell1 != valcell2;
}

function compareColumns(col1, col2) {
  let length = Object(cellsNonEmpty).length;

  for (i = 0; i < length; i++) {
    let cell1 = col1[i];
    let cell2 = col2[i];
    let compareCell = compareCells(cell1, cell2);
    if (compareCell == false) {
      return compareCell;
    }
  }
}

function copyGridState() {
  let cells = $(`.column > .cells`);
  let mapString = [];
  for (let i = 0; i < cells.length; i++) mapString.push(cells[i].innerText);
  return mapString.join(',');
}

function compareGrid(grid1, grid2) {}
