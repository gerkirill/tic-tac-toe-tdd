const fs = require('fs');
const path = require('path');
const assert = require('assert');

const SUT = '../move.js';
require(SUT);
eval(fs.readFileSync(path.join(__dirname, SUT), { encoding: 'utf8' }));

describe('#move()', function() {
  const board = [
    '-', '-', 'o',
    '-', 'x', '-',
    '-', '-', '-',
  ];

  it('should make a valid x move', function() {
    assert.deepEqual(move({
      board: board.slice(),
      current: 'x'
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
      board: board.slice(),
      current: 'o'
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