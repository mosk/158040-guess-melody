export const createTimer = (seconds) => {
  if (typeof seconds !== `number`) {
    throw new Error(`Время должно быть числом!`);
  }

  if (seconds < 0) {
    throw new Error(`Время не должно быть отрицательным числом!`);
  }

  return {
    timeLeft: seconds,
    isTimeout: false,
    tick() {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        return this.timeLeft;
      }
      this.isTimeout = true;

      return !this.isTimeout;
    },
  };
};
