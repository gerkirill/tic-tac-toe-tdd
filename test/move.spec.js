const assert = require('assert');
const move = require('../js/move.js');

describe('#move()', function() {
  const board = [
    '-', '-', 'o',
    '-', 'x', '-',
    '-', '-', '-',
  ];

  it('should make a valid x move', function() {
    assert.deepEqual(move({
      current: 'x',
      board: board.slice()
      
    }, 0), {
      current: 'o',
      board: [
        'x', '-', 'o',
        '-', 'x', '-',
        '-', '-', '-',
      ]
    });
  });

  it('should make a valid o move', function() {
    assert.deepEqual(move({
      current: 'o',
      board: board.slice()
    }, 1), {
      current: 'x',
      board: [
        '-', 'o', 'o',
        '-', 'x', '-',
        '-', '-', '-',
      ]
    });
  });

  it('should reject invalid move', function() {
    assert.deepEqual(move({
      current: 'x',
      board: board.slice()
    }, 2), {
      current: 'x',
      board: board
    });
  });

  // check move outside of the board?
})