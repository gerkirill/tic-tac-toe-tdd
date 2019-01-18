function move(gameState, cellIdx) {
  if (gameState.board[cellIdx] === '-') {
    gameState.board[cellIdx] = gameState.current;
    gameState.current = gameState.current === 'x' ? 'o' : 'x';
  }
  return gameState;
}

typeof module !== 'undefined' && (module.exports = move);