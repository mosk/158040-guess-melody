import {assert} from 'chai';
import {calculatePoints} from './../calculatePoints';

const userAnswers1 = [
  {answer: true, time: 10},
  {answer: true, time: 5},
  {answer: false, time: 13},
  {answer: true, time: 32},
  {answer: true, time: 5},
  {answer: false, time: 13}
];

const userAnswers2 = [
  {answer: true, time: 1}
];

const userAnswers3 = [
  {answer: true, time: 31},
  {answer: true, time: 33},
  {answer: true, time: 47},
  {answer: true, time: 55},
  {answer: true, time: 31},
  {answer: true, time: 60},
  {answer: true, time: 60},
  {answer: true, time: 33},
  {answer: true, time: 42},
  {answer: true, time: 99}
];

const userAnswers4 = [
  {answer: true, time: 31},
  {answer: true, time: 233},
  {answer: true, time: 347},
  {answer: true, time: 155},
  {answer: true, time: 231},
  {answer: true, time: 460},
  {answer: true, time: 760},
  {answer: true, time: 633},
  {answer: true, time: 242},
  {answer: true, time: 899}
];

describe(`подсчёт баллов`, () => {
  it(`должно вернуться -1, если игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(calculatePoints(userAnswers1), -1);
    assert.equal(calculatePoints(userAnswers2), -1);
  });

  it(`должно вернуться 10, если игрок ответил на все вопросы правильно и не быстро, и ни разу не ошибся`, () => {
    assert.equal(calculatePoints(userAnswers3), 10);
    assert.equal(calculatePoints(userAnswers4), 10);
  });
});
