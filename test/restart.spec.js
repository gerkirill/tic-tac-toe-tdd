const assert = require('assert');
const restart = require('../js/restart');

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