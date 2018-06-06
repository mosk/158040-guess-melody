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

let current = 0;

const showScreen = (index = 0) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  container.innerHTML = ``;
  container.appendChild((screens[index]).cloneNode(true));
};

document.addEventListener(`keydown`, (e) => {
  switch (e.keyCode) {
    case Keycode.LEFT:
      showScreen(current - 1);
      break;
    case Keycode.RIGHT:
      showScreen(current + 1);
      break;
  }
});

buttonPrev.addEventListener(`click`, () => showScreen(current - 1));
buttonNext.addEventListener(`click`, () => showScreen(current + 1));

showScreen();
