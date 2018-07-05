import {renderScreen, showScreen, getRandom} from './util';
import welcome from './welcome';
import resultWin from './resultWin';
import resultLoseAttempt from './resultLoseAttempt';
import resultLoseTime from './resultLoseTime';
import header from './header';

const template = `
<section class="main main--level main--level-genre">
  ${header}
  <div class="main-wrap">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--play"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--play"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--play"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </div>
</section>
`;
const genre = renderScreen(template);
const linkPlayAgain = genre.querySelector(`.play-again`);
const buttonAnswerSend = genre.querySelector(`.genre-answer-send`);
const answers = Array.from(genre.querySelectorAll(`.genre-answer input`));
const checkAnswers = () => {
  const someAnswerChecked = answers.some((el) => el.checked === true);
  buttonAnswerSend.disabled = !someAnswerChecked;
};
const resultScreens = [resultWin, resultLoseAttempt, resultLoseTime];
const randomResultScreen = resultScreens[getRandom(resultScreens.length)];

linkPlayAgain.addEventListener(`click`, () => showScreen(welcome));

checkAnswers();
answers.forEach((item) => {
  item.addEventListener(`click`, () => checkAnswers());
});

buttonAnswerSend.addEventListener(`click`, () => showScreen(randomResultScreen));

export default genre;
