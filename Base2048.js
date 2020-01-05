window.onload = function() {
  generateMap(4);
  generateScore(0);
  generateCell();

  var score = 0;

  $('body').on('keydown', function(e) {
    if (e.which === 37) {
      // si fleche de gauche
      let grid1 = copyGridState();
      left();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        generateCell();
      }
    }

    if (e.which === 38) {
      // si fleche du haut
      let grid1 = copyGridState();
      up();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        generateCell();
      }
    }

    if (e.which === 39) {
      // si fleche de droite
      let grid1 = copyGridState();
      right();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        generateCell();
      }
    }

    if (e.which === 40) {
      // si fleche du bas
      let grid1 = copyGridState();
      down();
      let grid2 = copyGridState();

      if (grid1 != grid2) {
        generateCell();
      } // end if grille différentes
    } //end if touche du bas
  });

  //
  //
}; // end game
