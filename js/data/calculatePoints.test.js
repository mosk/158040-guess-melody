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

describe(`Calculate points`, () => {
  it(`Should return -1 if answered less then 10 questions`, () => {
    assert.equal(calculatePoints(userAnswers1), -1);
    assert.equal(calculatePoints(userAnswers2), -1);
  });

  it(`Should return 10 if asnswered all questions right and slow`, () => {
    assert.equal(calculatePoints(userAnswers3), 10);
  });

  it(`Should return 20 if asnswered all questions right and fast`, () => {
    assert.equal(calculatePoints(userAnswers4), 20);
  });

  it(`Should return -1 if make 2 or more mistakes`, () => {
    assert.equal(calculatePoints(userAnswers3, 0), -1);
  });

  it(`Should return 12 if asnswered 8 questions right and fast`, () => {
    assert.equal(calculatePoints(userAnswers5), 12);
  });

  it(`Should return 7 if asnswered 9 questions right and slow`, () => {
    assert.equal(calculatePoints(userAnswers6), 7);
  });
});
