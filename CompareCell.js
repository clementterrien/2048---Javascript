function copyGridState() {
  let cells = $(`.column > .cells`);
  let mapString = [];
  for (let i = 0; i < cells.length; i++) mapString.push(cells[i].innerText);
  return mapString.join(',');
}

function canCellMove(cell) {
  let canCellMove = false;
  let originCellVal = valCell(cell);
  let upCellVal = valCell(upCellSelector(cell));
  let downCellVal = valCell(downCellSelector(cell));
  let leftCellVal = valCell(leftCellSelector(cell));
  let rightCellVal = valCell(rightCellSelector(cell));

  if (
    originCellVal === upCellVal ||
    originCellVal === downCellVal ||
    originCellVal === leftCellVal ||
    originCellVal === rightCellVal
  ) {
    canCellMove = true;
  }
  console.log('cancellmovz', canCellMove);
  return canCellMove;
}
