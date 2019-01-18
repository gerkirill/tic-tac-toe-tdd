function restart() {
  return {
    board: (
      '---' +
      '---' +
      '---'
    ).split(''),
    current: 'x'
  }
}

typeof module !== 'undefined' && (module.exports = restart);