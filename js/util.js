const main = document.querySelector(`section.main`);

export const renderScreen = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;

  return container;
};

export const showScreen = (screen) => {
  main.innerHTML = ``;
  main.insertAdjacentHTML(`beforeend`, screen.innerHTML);
};
