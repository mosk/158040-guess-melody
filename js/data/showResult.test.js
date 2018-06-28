import {assert} from 'chai';
import {showResult} from './../showResult';

const result1 = {
  points: 10
};

const results1 = [
  {
    points: 1
  },
  {
    points: 20
  },
  {
    points: 13
  }
];

const results2 = [
  {
    points: 1
  },
  {
    points: 20
  },
  {
    points: 13
  },
  {
    points: 123
  },
  {
    points: 54
  },
  {
    points: 0
  },
  {
    points: 19
  },
  {
    points: 6
  },
  {
    points: 8
  }
];

describe(`Show result`, () => {
  it(`Should return place and rate`, () => {
    assert.equal(showResult(results1, result1), `Вы заняли 3 место из 4 игроков. Это лучше, чем у 25% игроков`);
    assert.equal(showResult(results2, result1), `Вы заняли 6 место из 10 игроков. Это лучше, чем у 40% игроков`);
  });
});
