function left() {
  for (y = 1; y < 4; y++) {
    cellsNonEmpty = selectEmptyCellinColumn(y);
    let length = Object(cellsNonEmpty).length;
    if (length != 0) {
      moveAllCellsLeft(cellsNonEmpty);
    } // end if cellule non vide dans la colonne
  } // end if colonne vide
} // end function left

function right() {
  for (y = 2; y >= 0; y--) {
    cellsNonEmpty = selectEmptyCellinColumn(y);
    let length = Object(cellsNonEmpty).length;
    if (length != 0) {
      moveAllCellsRight(cellsNonEmpty);
    } // end if cellule non vide dans la colonne
  } // end for
} // end function right

function up() {
  for (y = 1; y <= 3; y++) {
    cellsNonEmpty = selectEmptyCellinLine(y);
    let length = Object(cellsNonEmpty).length;
    if (length != 0) {
      moveAllCellsUp(cellsNonEmpty);
    } // end if cellule non vide dans la colonne
  } // end for
} // end function down

function down() {
  for (y = 2; y >= 0; y--) {
    cellsNonEmpty = selectEmptyCellinLine(y);
    console.log(cellsNonEmpty);
    let length = Object(cellsNonEmpty).length;
    if (length != 0) {
      moveAllCellsDown(cellsNonEmpty);
    } // end if cellule non vide dans la colonne
  } // end for
} // end function down

function moveAllCellsLeft(cellsNonEmpty) {
  let length = Object(cellsNonEmpty).length;
  for (i = 0; i < length; i++) {
    originCell = cellsNonEmpty[i];
    activeCell = firstEmptyCellLeft(originCell);
    testAndReplaceLeft(originCell, activeCell);
  } // end for parcourir le tableau;
} // end function moveAllCellLeft

function testAndReplaceLeft(originCell, ActiveCell) {
  let originCellText = $(originCell).text();
  let originCellVal = parseInt($(originCell).text());
  let leftCell = leftCellSelector(ActiveCell);
  let leftCellText = $(leftCell).text();
  let leftCellVal = parseInt($(leftCell).text());
  let activeCellVal;

  // Si aucune case à gauche
  if (leftCellText == '') {
    $(leftCell).text(originCellText);
    $(originCell).text('');
  }
  // Si les cases peuvent fusionner
  else if (leftCellVal == originCellVal) {
    $(leftCell).text(leftCellVal * 2);
    $(originCell).text('');

    addScore = leftCellVal * 2;
    changeScore(addScore);
  } else {
    $(originCell).text('');
    $(activeCell).text(originCellText);
  }
}

function moveAllCellsRight(cellsNonEmpty) {
  let length = Object(cellsNonEmpty).length;
  for (i = 0; i < length; i++) {
    originCell = cellsNonEmpty[i];
    activeCell = firstEmptyCellRight(originCell);
    testAndReplaceRight(originCell, activeCell);
  } // end for parcourir le tableau;
} // end function moveAllCellLeft

function testAndReplaceRight(originCell, ActiveCell) {
  let originCellText = $(originCell).text();
  let originCellVal = parseInt($(originCell).text());
  let rightCell = rightCellSelector(ActiveCell);
  let rightCellText = $(rightCell).text();
  let rightCellVal = parseInt($(rightCell).text());
  let activeCellVal;

  // Si aucune case en dessous
  if (rightCellText == '') {
    $(rightCell).text(originCellText);
    $(originCell).text('');
  }
  // Si les cases peuvent fusionner
  else if (rightCellVal == originCellVal) {
    $(rightCell).text(rightCellVal * 2);
    $(originCell).text('');

    addScore = rightCellVal * 2;
    changeScore(addScore);
  } else {
    $(originCell).text('');
    $(activeCell).text(originCellText);
  }
}

function moveAllCellsUp(cellsNonEmpty) {
  let length = Object(cellsNonEmpty).length;
  for (i = 0; i < length; i++) {
    originCell = cellsNonEmpty[i];
    activeCell = firstEmptyCellUp(originCell);
    testAndReplaceUp(originCell, activeCell);
  } // end for parcourir le tableau;
} // end function moveAllCellLeft

function testAndReplaceUp(originCell, ActiveCell) {
  let originCellText = $(originCell).text();
  let originCellVal = parseInt($(originCell).text());
  let upCell = upCellSelector(ActiveCell);
  let upCellText = $(upCell).text();

  let upCellVal = parseInt($(upCell).text());
  let activeCellVal;

  // Si aucune case au dessus
  if (upCellText == '') {
    $(upCell).text(originCellText);
    $(originCell).text('');
  }
  // Si les cases peuvent fusionner
  else if (upCellVal == originCellVal) {
    $(upCell).text(upCellVal * 2);
    $(originCell).text('');

    addScore = upCellVal * 2;
    changeScore(addScore);
  } else {
    $(originCell).text('');
    $(activeCell).text(originCellText);
  }
}

function moveAllCellsDown(cellsNonEmpty) {
  let length = Object(cellsNonEmpty).length;
  for (i = 0; i < length; i++) {
    originCell = cellsNonEmpty[i];
    activeCell = firstEmptyCellDown(originCell);
    testAndReplaceDown(originCell, activeCell);
  } // end for parcourir le tableau;
} // end function moveAllCellLeft

function testAndReplaceDown(originCell, ActiveCell) {
  let originCellText = $(originCell).text();
  let originCellVal = parseInt($(originCell).text());
  let downCell = downCellSelector(ActiveCell);
  let downCellText = $(downCell).text();
  let downCellVal = parseInt($(downCell).text());
  let activeCellVal;

  // Si aucune case en dessous
  if (downCellText == '') {
    $(downCell).text(originCellText);
    $(originCell).text('');
  }
  // Si les cases peuvent fusionner
  else if (downCellVal == originCellVal) {
    $(downCell).text(downCellVal * 2);
    $(originCell).text('');

    addScore = downCellVal * 2;
    changeScore(addScore);
  } else {
    $(originCell).text('');
    $(activeCell).text(originCellText);
  }
}
