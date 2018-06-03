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

const Template = {
  WELCOME: templates.content.querySelector(`.main--welcome`),
  GENRE: templates.content.querySelector(`.main--level-genre`),
  ARTIST: templates.content.querySelector(`.main--level-artist`),
  RESULT: templates.content.querySelector(`.main--result`),
  ERROR: templates.content.querySelector(`.modal-error`),
  CONFIRM: templates.content.querySelector(`.modal-confirm__wrap`)
};

const screens = Object.values(Template);

let currentScreen = 0;

const Screen = {
  FIRST: 0,
  LAST: screens.length - 1,
  PREV: () => currentScreen > Screen.FIRST ? --currentScreen : currentScreen = Screen.LAST,
  NEXT: () => currentScreen < Screen.LAST ? ++currentScreen : currentScreen = Screen.FIRST
};

const showScreen = (screen = 0) => {
  if (screen > 0 || screen < screens.length) {
    container.innerHTML = ``;
    container.appendChild((screens[screen]).cloneNode(true));
    currentScreen = screen;
  }
};

document.addEventListener(`keydown`, (e) => {
  switch (e.keyCode) {
    case Keycode.LEFT:
      showScreen(Screen.PREV());
      break;
    case Keycode.RIGHT:
      showScreen(Screen.NEXT());
      break;
  }
});

buttonPrev.addEventListener(`click`, () => showScreen(Screen.PREV()));
buttonNext.addEventListener(`click`, () => showScreen(Screen.NEXT()));

showScreen();
