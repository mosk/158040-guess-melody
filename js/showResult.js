export const showResult = (results, result) => {
  if (result.timeLeft === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (result.attemptsLeft === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const sortedResults = results.concat(result).sort((a, b) => b.points - a.points);
  const place = sortedResults.indexOf(result) + 1;
  const amountPlayers = sortedResults.length;
  const rate = (amountPlayers - place) / amountPlayers * 100;

  return `Вы заняли ${place} место из ${amountPlayers} игроков. Это лучше, чем у ${rate}% игроков`;
};
