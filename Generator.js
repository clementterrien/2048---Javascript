function generateScore(score) {
  $('.scoreval').text(`${score}`);
}

function changeScore(addScore) {
  let actualScore = parseInt($('.scoreval').text());
  let finalScore = actualScore + addScore;
  $('.scoreval').text(finalScore);
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
  var randomNumber = Math.floor(Math.random() * Math.floor(10));

  if (randomNumber === 1) {
    value = 4;
  }
  return value;
}

function retry() {
  $('.grille').css('background', 'lightblue');
  let allCells = allCellsSelector();
  allCells.text('');
  generateCell();
}

function setBestScore(bestscore) {
  localStorage.setItem('bestscore', bestscore);
}

function getBestScore() {
  return localStorage.getItem('bestscore');
}

function displayBestScore() {
  let bestScore = calculateBestScore();
  $('.bestscoreval').text(`${bestScore}`);
}

function calculateBestScore() {
  let bestScore = getBestScore();
  let actualScore = parseInt($('.scoreval').text());

  if (bestScore >= actualScore) {
    return bestScore;
  } else {
    setBestScore(actualScore);
    bestScore = getBestScore();
    return bestScore;
  }
}
