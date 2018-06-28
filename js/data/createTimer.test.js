import {assert} from 'chai';
import {createTimer} from './../createTimer';

describe(`Create timer`, () => {
  it(`Should return object`, () => {
    assert.isObject(createTimer(30));
  });

  it(`Should return 'false' if time out`, () => {
    assert.equal(createTimer(0).isTimeout, false);
    assert.equal(createTimer(1).tick(), false);
  });

  it(`Should return remaining time if not time out`, () => {
    assert.equal(createTimer(1).timeLeft, 1);
    assert.equal(createTimer(2222).timeLeft, 2222);
    assert.equal(createTimer(30).tick(), 29);
  });
});
