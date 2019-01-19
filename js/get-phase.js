function getPhase(board) {
  if (board.indexOf('-') !== -1) return 'progress'; //for now
  if (board.indexOf('-') === -1) return 'draw';
  // also 'x_win', 'o_win'
}

typeof module !== 'undefined' && (module.exports = check);