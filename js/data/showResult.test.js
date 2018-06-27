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

// const results2 = [
//   {
//     points: 10
//   },
//   {
//     points: 77
//   },
//   {
//     points: 16
//   },
//   {
//     points: 12
//   },
//   {
//     points: 20
//   }
// ];

describe(`Вывод результатов`, () => {
  it(`Должна вернуться победа с указанием места и рейтинга`, () => {
    assert.equal(showResult(results1, result1), `Вы заняли 2 место из 4 игроков. Это лучше, чем у 50% игроков`);
  });
});
