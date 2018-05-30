'use strict';

const container = document.querySelector('.app section.main');
const templates = document.querySelector('#templates');

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

const showScreen = (number) => container.appendChild((screens[number]).cloneNode(true));

const Keycode = {
  left: 37,
  right: 39
};

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case Keycode.left:
      console.log('кнопка влево');
      showPrevScreen();
      break;
    case Keycode.right:
      console.log('кнопка вправо');
      showNextScreen();
      break;
  }
});

showScreen(0);
