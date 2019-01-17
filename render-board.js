function renderBoard(board) {
  return board.map(cell => `<div>${cell}</div>`).join('');
}