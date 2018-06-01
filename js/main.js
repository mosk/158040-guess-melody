'use strict';

const Keycode = {
  LEFT: 37,
  RIGHT: 39
};

const app = document.querySelector('.app');
const container = app.querySelector('section.main');
const templates = document.querySelector('#templates');
const templateArrows = `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 135px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn arrows__btn--prev"><-</button>
  <button class="arrows__btn arrows__btn--next">-></button>
</div>`

app.insertAdjacentHTML('beforeend', templateArrows);

const buttonPrev = app.querySelector('.arrows__btn--prev');
const buttonNext = app.querySelector('.arrows__btn--next');

const Screen = {
  WELCOME: templates.content.querySelector('.main--welcome'),
  GENRE: templates.content.querySelector('.main--level-genre'),
  ARTIST: templates.content.querySelector('.main--level-artist'),
  RESULT: templates.content.querySelector('.main--result'),
  ERROR: templates.content.querySelector('.modal-error'),
  CONFIRM: templates.content.querySelector('.modal-confirm__wrap')
};

const screens = [];

for (const key in Screen) {
  screens.push(Screen[key]);
};

let currentScreen = 0;

const showScreen = (arg) => { // можно указать конкретный номер экрана либо следующий или предыдущий экран
  container.innerHTML = ``;

  if (typeof arg === `number` && arg >= 0 && arg < screens.length) {
    container.appendChild((screens[arg]).cloneNode(true));
    currentScreen = arg;

    return;
  }

  switch (arg) {
    case 'next':
      if (currentScreen === screens.length - 1) return;

      container.appendChild((screens[currentScreen + 1]).cloneNode(true));
      currentScreen++;
      break;
    case 'prev':
      if (currentScreen === 0) return;

      container.appendChild((screens[currentScreen - 1]).cloneNode(true));
      currentScreen--;
      break;
  }
};

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case Keycode.LEFT:
      showScreen(`prev`);
      break;
    case Keycode.RIGHT:
      showScreen(`next`);
      break;
  }
});

showScreen(currentScreen);

buttonPrev.addEventListener('click', () => showScreen(`prev`));
buttonNext.addEventListener('click', () => showScreen(`next`));
