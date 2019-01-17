const fs = require('fs');
const path = require('path');
const assert = require('assert');

const SUT = '../render-board.js';
require(SUT);
eval(fs.readFileSync(path.join(__dirname, SUT), { encoding: 'utf8' }));

describe('#renderBoard()', function() {

  it('should render empty board', function() {

    const board = [
      '-', '-', '-', 
      '-', '-', '-', 
      '-', '-', '-', 
    ]
    const rendered = 
    '<div>-</div><div>-</div><div>-</div>' +
    '<div>-</div><div>-</div><div>-</div>' +
    '<div>-</div><div>-</div><div>-</div>';

    assert.deepEqual(renderBoard(board), rendered);
  });

  it('should render board with single x', function() {

    const board = [
      '-', '-', '-', 
      '-', 'x', '-', 
      '-', '-', '-', 
    ]
    const rendered = 
    '<div>-</div><div>-</div><div>-</div>' +
    '<div>-</div><div>x</div><div>-</div>' +
    '<div>-</div><div>-</div><div>-</div>';

    assert.deepEqual(renderBoard(board), rendered);
  });
})