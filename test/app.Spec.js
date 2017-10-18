const assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });

  describe('#indexOf() should fail', () => {
    it('should not return 0 when the value is not present', () => {
      assert.equal(0, [1, 2, 3].indexOf(4));
    });
  });
});
