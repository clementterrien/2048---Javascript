function absCell(cell) {
  abs = parseInt(
    $(cell)
      .parent()
      .attr('id')
  );
  return abs;
}

function ordCell(cell) {
  return parseInt($(cell).attr('id'));
}

function valCell(cell) {
  return parseInt($(cell).text());
}

function upCellSelector(Cell) {
  let originCell = Cell;
  let ordOriginCell = ordCell(originCell);
  let absOriginCell = absCell(originCell);
  let ordUpCell = ordOriginCell - 1;
  let upCell = $(`#${absOriginCell}col #${ordUpCell}row`);
  return upCell;
}

function downCellSelector(Cell) {
  let originCell = Cell;
  let ordOriginCell = ordCell(originCell);
  let absOriginCell = absCell(originCell);
  let ordDownCell = ordOriginCell + 1;
  let downCell = $(`#${absOriginCell}col #${ordDownCell}row`);
  return downCell;
}

function rightCellSelector(Cell) {
  let originCell = Cell;
  let ordOriginCell = ordCell(originCell);
  let absOriginCell = absCell(originCell);
  let absRighCell = absOriginCell + 1;
  let rightCell = $(`#${absRighCell}col #${ordOriginCell}row`);
  return rightCell;
}

function leftCellSelector(Cell) {
  let originCell = Cell;
  let ordOriginCell = ordCell(originCell);
  let absOriginCell = absCell(originCell);
  let absLeftCell = absOriginCell - 1;
  let leftCell = $(`#${absLeftCell}col #${ordOriginCell}row`);
  return leftCell;
}

function selectEmptyCellinLineDown(ord) {
  let i = ord;
  let cellsNonEmpty = $(`.column > .cells:not(#3row)`).filter((index, elt) => {
    return elt.textContent !== '';
  });
  return cellsNonEmpty;
}

function selectEmptyCellinLineUp(ord) {
  let i = ord;
  let cellsNonEmpty = $(`.column > .cells:not(#0row)`).filter((index, elt) => {
    return elt.textContent !== '';
  });
  return cellsNonEmpty;
}

function selectEmptyCellinColumn(abscisse) {
  let i = abscisse;
  let cellsNonEmpty = $(`#${i}col > .cells`).filter((index, elt) => {
    return elt.textContent !== '';
  });
  return cellsNonEmpty;
}

function selectColumn(grid, abs) {
  let col = $(`#${abs}col`);
  return col;
}

function firstEmptyCellUp(cell) {
  let activeCell = cell;
  upCell = upCellSelector(activeCell);
  var textUpCell = upCell.text();
  let ordUpCell = ordCell(upCell);

  while (textUpCell === '' && ordUpCell > 0) {
    activeCell = upCellSelector(activeCell);
    upCell = upCellSelector(activeCell);
    ordUpCell = ordCell(upCell);
    textUpCell = upCell.text();
  } // end while
  return activeCell;
} // end of firstEmptyCell function

function firstEmptyCellDown(cell) {
  let activeCell = cell;
  downCell = downCellSelector(activeCell);
  var textDownCell = downCell.text();
  let ordDownCell = ordCell(downCell);

  while (textDownCell === '' && ordDownCell < 3) {
    activeCell = downCellSelector(activeCell);
    downCell = downCellSelector(activeCell);
    ordDownCell = ordCell(downCell);
    textDownCell = downCell.text();
  } // end while
  return activeCell;
} // end of firstEmptyCell function

function firstEmptyCellLeft(cell) {
  let activeCell = cell;
  leftCell = leftCellSelector(activeCell);
  var textLeftCell = leftCell.text();
  let absLeftCell = absCell(leftCell);

  while (textLeftCell === '' && absLeftCell > 0) {
    activeCell = leftCellSelector(activeCell);
    leftCell = leftCellSelector(activeCell);
    absLeftCell = absCell(leftCell);
    textLeftCell = leftCell.text();
  } // end while
  return activeCell;
} // end of firstEmptyCell function

function firstEmptyCellRight(cell) {
  let activeCell = cell;
  rightCell = rightCellSelector(activeCell);
  var textRightCell = rightCell.text();
  let absRightCell = absCell(rightCell);

  while (textRightCell === '' && absRightCell < 3) {
    activeCell = rightCellSelector(activeCell);
    rightCell = rightCellSelector(activeCell);
    absRightCell = absCell(rightCell);
    textRightCell = rightCell.text();
  } // end while
  return activeCell;
} // end of firstEmptyCellDown function

function selecteachEmptyCell() {
  for (y = 1; y < 4; y++) {
    cellsNonEmpty = selectEmptyCellinColumn(y);
    leftCellSelector(cellsNonEmpty);
  }
}
