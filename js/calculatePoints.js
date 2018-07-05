import {GAME_SETTINGS} from './gameSettings';

export const calculatePoints = (answers, lives = GAME_SETTINGS.attempts) => {
  if (typeof lives !== `number`) {
    throw new Error(`Количество жизней должно быть числом`);
  }

  if (lives < 0) {
    throw new Error(`Количество жизней не должно быть отрицательным числом`);
  }

  if (answers.length < GAME_SETTINGS.totalQuestions || lives === 0) {
    return GAME_SETTINGS.loosePoints;
  }

  const points = answers.map((item) => {
    if (item.answer === true) {
      if (item.time <= GAME_SETTINGS.fastAnswerTime) {
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
