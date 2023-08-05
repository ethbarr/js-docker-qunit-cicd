import {math} from '../src/math.js';

  QUnit.module('add', function() {
    QUnit.test('two numbers', function(assert) {
      assert.equal(math.add(1, 2), 3);
    });

    // QUnit.module('subtract', function() {
    //     Qunit.test('two numbers', function(assert) {
    //         assert.equal(sut.subtract(2, 3), 1)
    //     })
    // })
  });