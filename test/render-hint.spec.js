const fs = require('fs');
const path = require('path');
const assert = require('assert');

const SUT = '../render-hint.js';
require(SUT);
eval(fs.readFileSync(path.join(__dirname, SUT), { encoding: 'utf8' }));

describe('#renderHint()', function() {

  it('should render next move: x', function() {
    assert.deepEqual(renderHint('x', ''), 'Next move: x');
  });

  it('should render next move: o', function() {
    assert.deepEqual(renderHint('o', ''), 'Next move: o');
  });

  it('should render draw', function() {
    assert.deepEqual(renderHint('o', 'draw'), 'It is a draw');
  });

  it('should render x wins', function() {
    assert.deepEqual(renderHint('x', 'x_win'), 'x wins');
  });

  it('should render o wins', function() {
    assert.deepEqual(renderHint('o', 'o_win'), 'o wins');
  });

  
})