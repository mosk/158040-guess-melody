const app = document.querySelector(`.app`);
const container = app.querySelector(`section.main`);

export const showScreen = (screen) => {
  container.innerHTML = ``;
  container.insertAdjacentHTML(`beforeend`, screen);
};
