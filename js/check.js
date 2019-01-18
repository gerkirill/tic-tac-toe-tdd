function check(board) {
  if (board.indexOf('-') !== -1) return ''; //for now
  if (board.indexOf('-') === -1) return 'draw';
}

typeof module !== 'undefined' && (module.exports = check);