function testVictory() {
  let cell2048 = $(`.cells`).filter((index, elt) => {
    return elt.textContent === '2048';
  });
  if (cell2048.length !== 0) {
    $('.grille>div').remove();
    $('.grille').append(`<div class='victoire'>VICTOIRE</div>`);
  }
}

function testDefeat() {
  let allCells = allCellsSelector();
  let emptyCells = allEmptyCellsSelector();
  if (emptyCells.length !== 0) {
    return;
  } else {
    let hope = false;
    for (i = 0; i < allCells.length; i++) {
      let hope = canCellMove(allCells[i]);
      if (hope === true) {
        return;
      }
    }
    if (hope === false) {
      console.log(hope);
      console.log('fait chier');
      $('.grille').css('background', 'red');
    }
  }
}
