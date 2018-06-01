'use strict';

const Keycode = {
  LEFT: 37,
  RIGHT: 39
};

const app = document.querySelector(`.app`);
const container = app.querySelector(`section.main`);
const templates = document.querySelector(`#templates`);
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
</div>`;

app.insertAdjacentHTML(`beforeend`, templateArrows);

const buttonPrev = app.querySelector(`.arrows__btn--prev`);
const buttonNext = app.querySelector(`.arrows__btn--next`);

const Screen = {
  WELCOME: templates.content.querySelector(`.main--welcome`),
  GENRE: templates.content.querySelector(`.main--level-genre`),
  ARTIST: templates.content.querySelector(`.main--level-artist`),
  RESULT: templates.content.querySelector(`.main--result`),
  ERROR: templates.content.querySelector(`.modal-error`),
  CONFIRM: templates.content.querySelector(`.modal-confirm__wrap`)
};

const screens = Object.values(Screen);

let currentScreen = 0;

let Page = {
  PREV: --currentScreen,
  NEXT: ++currentScreen
};

const showScreen = (screen = 0) => {
  if (typeof screen === `number` && screen >= 0 && screen < screens.length) {
    container.innerHTML = ``;
    container.appendChild((screens[screen]).cloneNode(true));
  }
};

const switchScreen = (arg) => { // можно указать конкретный номер экрана либо следующий или предыдущий экран
  if (arg === Page.NEXT && currentScreen !== screens.length - 1) {
    showScreen(Page.NEXT);
  } else if (arg === Page.PREV && currentScreen !== 0) {
    showScreen(Page.PREV);
  }
};

document.addEventListener(`keydown`, (e) => {
  switch (e.keyCode) {
    case Keycode.LEFT:
      switchScreen(Page.PREV);
      break;
    case Keycode.RIGHT:
      switchScreen(Page.NEXT);
      break;
  }
});

buttonPrev.addEventListener(`click`, () => switchScreen(Page.PREV));
buttonNext.addEventListener(`click`, () => switchScreen(Page.NEXT));

showScreen();
