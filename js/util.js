const app = document.querySelector(`.app`);

export const renderScreen = (template) => {
  const container = document.createElement(`template`);
  container.innerHTML = template.trim();

  return container.content.firstChild;
};

export const showScreen = (screen) => {
  app.innerHTML = ``;
  app.appendChild(screen);
};

export const getRandom = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
