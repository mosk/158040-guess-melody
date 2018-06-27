const FAST_ANSWER_TIME = 29;
const TOTAL_QUESTIONS = 10;
const LOOSE_POINTS = -1;
const ATTEMPTS = 2;

export const calculatePoints = (answers, lives = ATTEMPTS) => {
  if (typeof lives !== `number`) {
    throw new Error(`Количество жизней должно быть числом`);
  }

  if (lives < 0) {
    throw new Error(`Количество жизней не должно быть отрицательным числом`);
  }

  if (answers.length < TOTAL_QUESTIONS || lives === 0) {
    return LOOSE_POINTS;
  }

  const points = answers.map((item) => {
    if (item.answer === true) {
      if (item.time <= FAST_ANSWER_TIME) {
        item = 2;
      } else {
        item = 1;
      }
    }

    if (item.answer === false) {
      item = -2;
    }

    return item;
  }).reduce((a, b) => a + b);

  return points;
};
