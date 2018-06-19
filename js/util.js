const app = document.querySelector(`.app`);
const main = app.querySelector(`section.main`);

export const renderScreen = (template) => {
  const container = document.createElement(`template`);
  container.innerHTML = template;

  return container.content;
};

export const showScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};