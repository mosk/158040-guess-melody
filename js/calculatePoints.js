const timeOfFastAnswer = 29;
const minNumberOfAnswers = 10;
const LOOSE = -1;

export const calculatePoints = (answers, numberOfNotes) => {
  if (numberOfNotes < 0) {
    return LOOSE;
  }

  if (answers.length < minNumberOfAnswers) {
    return LOOSE;
  }

  const points = answers.map((item) => {
    if (item.answer) {
      if (item.time <= timeOfFastAnswer) {
        item = 2;
      } else {
        item = 1;
      }
    }

    if (!item.answer) {
      item = -2;
    }

    return item;
  }).reduce((a, b) => a + b);

  return points;
};
