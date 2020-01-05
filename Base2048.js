window.onload = function() {
  generateMap(4);
  generateScore(0);
  displayBestScore();
  generateCell();

  var score = 0;

  $('body').on('keydown', function(e) {
    if (e.which === 37) {
      // si fleche de gauche
      let grid1 = copyGridState();
      left();
      testVictory();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        displayBestScore();
        generateCell();
      } else {
        testDefeat();
      }
    }

    if (e.which === 38) {
      // si fleche du haut
      let grid1 = copyGridState();
      up();
      testVictory();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        displayBestScore();
        generateCell();
      }
    }

    if (e.which === 39) {
      // si fleche de droite
      let grid1 = copyGridState();
      right();
      testVictory();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        displayBestScore();
        generateCell();
      } else {
        testDefeat();
      }
    }

    if (e.which === 40) {
      // si fleche du bas
      let grid1 = copyGridState();
      down();
      testVictory();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        displayBestScore();
        generateCell();
      } else {
        testDefeat();
      }
    } //end if touche du bas
  });

  //
  //
}; // end game
