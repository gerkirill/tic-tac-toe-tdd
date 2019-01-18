const assert = require('assert');
const renderBoard = require('../js/render-board');

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