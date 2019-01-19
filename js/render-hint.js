function renderHint(current, state) {
  switch(state) {
    case 'x_win':
      return 'x wins';
    case 'o_win':
      return 'o wins';
    case 'draw':
      return 'It is a draw';
    default: // 'progress'
      return 'Next move: ' + current;
  }

}

typeof module !== 'undefined' && (module.exports = renderHint);