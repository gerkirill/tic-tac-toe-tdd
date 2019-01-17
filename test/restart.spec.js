const fs = require('fs');
const path = require('path');
const assert = require('assert');

const SUT = '../restart.js';
require(SUT);
eval(fs.readFileSync(path.join(__dirname, SUT), { encoding: 'utf8' }));

describe('#restart()', function() {
  it('should return empty board', function() {
    assert.deepEqual(restart(), {
      board: [
        '-', '-', '-', 
        '-', '-', '-', 
        '-', '-', '-', 
      ],
      current: 'x'
    });
  });
})