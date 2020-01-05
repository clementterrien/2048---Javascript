function generateScore(score) {
  $('.container').append(`<h2>Score</h2><div class='score'>${score}</div>`);
}

function changeScore(addScore) {
  let actualScore = parseInt($('.score').text());
  let finalScore = actualScore + addScore;
  $('.score').text(finalScore);
}
function generateMap(grilleSize) {
  for (let index = 0; index < grilleSize; index++) {
    $('.grille').append(`<div class='column' id="${index}col" ></div>`);
  }
  for (let index = 0; index < grilleSize; index++) {
    $('.column').append(`<div class='cells' id="${index}row" ></div>`);
  }
  var cellSize = 100 / grilleSize;
  $('.column').css('width', cellSize + '%');
  $('.cells').css('height', cellSize + '%');
}

function generateCell() {
  let emptyCells = $('.cells:empty');
  let emptyCellsLength = emptyCells.length;
  let randomNumber = Math.floor(Math.random() * Math.floor(emptyCellsLength));
  let selectedCell = emptyCells[randomNumber];
  let random2or4 = generate2or4();
  $(selectedCell).text(`${random2or4}`);
}

function generate2or4() {
  let value = 2;
  var randomNumber = Math.floor(Math.random() * Math.floor(2));

  if (randomNumber === 1) {
    value = 4;
  }
  return value;
}
