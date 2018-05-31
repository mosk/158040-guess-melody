'use strict';

const KEYCODE = {
  left: 37,
  right: 39
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
  welcome: templates.content.querySelector('.main--welcome'),
  genre: templates.content.querySelector('.main--level-genre'),
  artist: templates.content.querySelector('.main--level-artist'),
  result: templates.content.querySelector('.main--result'),
  error: templates.content.querySelector('.modal-error'),
  confirm: templates.content.querySelector('.modal-confirm__wrap')
};

const screens = [];

for (const key in Screen) {
  screens.push(Screen[key]);
};

let currentScreen = 0;

const showScreen = (arg) => { // можно указать конкретный номер экрана либо следующий или предыдущий экран
  container.innerHTML = ``;

  if (typeof arg === Number && arg >= 0 && arg < screens.length) {
    container.appendChild((screens[arg]).cloneNode(true));
    currentScreen = arg;
    console.log(`Номер экрана - ${currentScreen}`);

    return;
  }

  switch (arg) {
    case 'next':
      container.appendChild((screens[currentScreen + 1]).cloneNode(true));
      currentScreen++;
      console.log(`Номер экрана - ${currentScreen}`);
      break;
    case 'prev':
      container.appendChild((screens[currentScreen - 1]).cloneNode(true));
      currentScreen--;
      console.log(`Номер экрана - ${currentScreen}`);
      break;
  }
};

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case KEYCODE.left:
      console.log('кнопка влево');
      showScreen('prev');
      break;
    case KEYCODE.right:
      console.log('кнопка вправо');
      showScreen('next');
      break;
  }
});

showScreen(currentScreen);

buttonPrev.addEventListener('click', () => showScreen('prev'));
buttonNext.addEventListener('click', () => showScreen('next'));

console.log(`Номер экрана - ${currentScreen}`);
