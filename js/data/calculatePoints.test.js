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

const userAnswers4 = [
  {answer: true, time: 29},
  {answer: true, time: 3},
  {answer: true, time: 7},
  {answer: true, time: 5},
  {answer: true, time: 1},
  {answer: true, time: 0},
  {answer: true, time: 0},
  {answer: true, time: 3},
  {answer: true, time: 2},
  {answer: true, time: 9}
];

const userAnswers5 = [
  {answer: true, time: 29},
  {answer: true, time: 3},
  {answer: true, time: 7},
  {answer: true, time: 5},
  {answer: true, time: 1},
  {answer: true, time: 0},
  {answer: true, time: 0},
  {answer: true, time: 3},
  {answer: false, time: 2},
  {answer: false, time: 9}
];

const userAnswers6 = [
  {answer: true, time: 329},
  {answer: true, time: 113},
  {answer: true, time: 47},
  {answer: true, time: 35},
  {answer: true, time: 221},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 213},
  {answer: false, time: 32},
  {answer: true, time: 89}
];

describe(`Подсчёт баллов`, () => {
  it(`Должно вернуться -1, если игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(calculatePoints(userAnswers1), -1);
    assert.equal(calculatePoints(userAnswers2), -1);
  });

  it(`Должно вернуться 10, если игрок ответил на все вопросы правильно и не быстро, и ни разу не ошибся`, () => {
    assert.equal(calculatePoints(userAnswers3), 10);
  });

  it(`Должно вернуться 20, если игрок ответил на все вопросы правильно и быстро, и ни разу не ошибся`, () => {
    assert.equal(calculatePoints(userAnswers4), 20);
  });

  it(`Должно вернуться -1, если количество жизней равно 0`, () => {
    assert.equal(calculatePoints(userAnswers3, 0), -1);
  });

  it(`Должно вернуться 12, если игрок ответил на 8 вопросов правильно и быстро`, () => {
    assert.equal(calculatePoints(userAnswers5), 12);
  });

  it(`Должно вернуться 7, если игрок ответил на 9 вопросов правильно и медленно`, () => {
    assert.equal(calculatePoints(userAnswers6), 7);
  });
});
