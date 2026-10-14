/* ==================== ВИКТОРИНА: СОБЕРИ АББРЕВИАТУРУ ==================== */
(function () {
  const target = document.getElementById('abbrTarget');
  const pool = document.getElementById('abbrPool');
  const resetBtn = document.getElementById('abbrReset');
  const statusEl = document.getElementById('abbrStatus');
  if (!target || !pool) return;

  const CORRECT_PARTS = [
    'Всегимназическая',
    'демократическая',
    'партия',
    'подотчётного',
    'парламента,',
    'всенародного',
    'обсуждения,',
    'многоуровневого',
    'согласования',
    'и',
    'окончательного',
    'утверждения',
    'в',
    'установленном',
    'порядке'
  ];

  let placedTiles = [];
  let poolTiles = [];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function createTile(text) {
    const el = document.createElement('div');
    el.className = 'abbr-tile';
    el.textContent = text;
    el.setAttribute('draggable', 'true');
    el.dataset.text = text;

    el.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', text);
      e.dataTransfer.effectAllowed = 'move';
      el.classList.add('dragging');
      setTimeout(() => { if (el.parentNode) el.style.opacity = '0.4'; }, 0);
    });
    el.addEventListener('dragend', () => {
      el.classList.remove('dragging');
      el.style.opacity = '';
    });

    el.addEventListener('touchstart', handleTouchStart, { passive: false });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd);

    return el;
  }

  let touchTile = null, touchClone = null, touchOffsetX = 0, touchOffsetY = 0;

  function handleTouchStart(e) {
    const el = e.currentTarget;
    if (el.classList.contains('placed')) return;
    touchTile = el;
    const touch = e.touches[0];
    const rect = el.getBoundingClientRect();
    touchOffsetX = touch.clientX - rect.left;
    touchOffsetY = touch.clientY - rect.top;

    touchClone = el.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.left = (touch.clientX - touchOffsetX) + 'px';
    touchClone.style.top = (touch.clientY - touchOffsetY) + 'px';
    touchClone.style.width = rect.width + 'px';
    touchClone.style.height = rect.height + 'px';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.zIndex = '99999';
    touchClone.style.opacity = '0.9';
    touchClone.style.transform = 'scale(1.08) rotate(-2deg)';
    touchClone.classList.add('dragging');
    document.body.appendChild(touchClone);

    el.style.opacity = '0.3';
    e.preventDefault();
  }

  function handleTouchMove(e) {
    if (!touchTile || !touchClone) return;
    const touch = e.touches[0];
    touchClone.style.left = (touch.clientX - touchOffsetX) + 'px';
    touchClone.style.top = (touch.clientY - touchOffsetY) + 'px';
    e.preventDefault();
  }

  function handleTouchEnd(e) {
    if (!touchTile || !touchClone) return;
    const touch = e.changedTouches[0];
    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);

    touchClone.remove();
    touchClone = null;
    touchTile.style.opacity = '';
    const tile = touchTile;
    touchTile = null;

    if (elemBelow && (elemBelow === target || target.contains(elemBelow))) {
      placeTileInto(tile);
    }
  }

  target.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    target.classList.add('drag-over');
  });
  target.addEventListener('dragleave', () => target.classList.remove('drag-over'));
  target.addEventListener('drop', (e) => {
    e.preventDefault();
    target.classList.remove('drag-over');
    const text = e.dataTransfer.getData('text/plain');
    const tile = document.querySelector('.abbr-tile[data-text="' + CSS.escape(text) + '"]:not(.placed)');
    if (tile) placeTileInto(tile);
  });

  target.addEventListener('click', (e) => {
    const tile = e.target.closest('.abbr-tile.placed');
    if (!tile) return;
    removeTileFromTarget(tile);
  });

  function placeTileInto(tile) {
    const nextIndex = placedTiles.length;
    const isCorrect = CORRECT_PARTS[nextIndex] === tile.dataset.text;

    if (!isCorrect) {
      tile.classList.add('wrong');
      setTimeout(() => tile.classList.remove('wrong'), 450);
      return;
    }

    tile.classList.remove('dragging');
    tile.classList.add('placed', 'snap');
    tile.setAttribute('draggable', 'false');
    tile.style.opacity = '';

    if (tile.parentNode) tile.parentNode.removeChild(tile);
    target.appendChild(tile);

    placedTiles.push(tile);
    poolTiles = poolTiles.filter(t => t !== tile);

    setTimeout(() => tile.classList.remove('snap'), 320);
    checkComplete();
  }

  function removeTileFromTarget(tile) {
    const idx = placedTiles.indexOf(tile);
    if (idx === -1) return;

    const toReturn = placedTiles.splice(idx);
    toReturn.forEach(t => {
      t.classList.remove('placed', 'snap');
      t.setAttribute('draggable', 'true');
      t.addEventListener('touchstart', handleTouchStart, { passive: false });
      t.addEventListener('touchmove', handleTouchMove, { passive: false });
      t.addEventListener('touchend', handleTouchEnd);
      if (t.parentNode) t.parentNode.removeChild(t);
      pool.appendChild(t);
      poolTiles.push(t);
    });

    const shuffled = shuffle(poolTiles);
    pool.innerHTML = '';
    shuffled.forEach(t => pool.appendChild(t));
    poolTiles = shuffled;

    if (statusEl) statusEl.textContent = '';
    target.classList.remove('complete');
  }

  function checkComplete() {
    if (placedTiles.length === CORRECT_PARTS.length) {
      target.classList.add('complete');
      if (statusEl) {
        statusEl.textContent = '🎉 Правильно! Ты знаешь полное название партии!';
        statusEl.style.color = '#27ae60';
      }
    }
  }

  function init() {
    target.innerHTML = '';
    pool.innerHTML = '';
    placedTiles = [];
    poolTiles = [];
    if (statusEl) {
      statusEl.textContent = '';
      statusEl.style.color = '';
    }
    target.classList.remove('complete', 'drag-over');

    const tiles = CORRECT_PARTS.map(text => createTile(text));
    const shuffled = shuffle(tiles);
    shuffled.forEach(t => {
      pool.appendChild(t);
      poolTiles.push(t);
    });
  }

  if (resetBtn) resetBtn.addEventListener('click', init);
  init();
})();


/* ==================== ВИКТОРИНА: КТО ТЫ ИЗ ППП ==================== */
(function () {
  const container = document.getElementById('whoQuiz');
  if (!container) return;

  const QUESTIONS = [
    {
      q: 'Выбери, какой из вариантов названия партии правильный',
      answers: [
        { text: 'Всегимназическая демократическая партия подотчётного парламента, всенародного обсуждения, многоуровневого согласования и окончательного утверждения в установленном порядке' },
        { text: 'Все дружно посадили, полили, пропололи — вкусная с маслом, очень и очень удачная, варения, укропом посыпанная картошка' },
        { text: 'Не знаю' }
      ]
    },
    {
      q: 'Если бы ты был буквой, то гласной или согласной?',
      answers: [{ text: 'Гласной' }, { text: 'Согласной' }]
    },
    {
      q: 'Чем ты готов пожертвовать ради партии?',
      answers: [{ text: 'Всем' }, { text: 'Больше, чем всем' }]
    },
    {
      q: 'Кто для тебя Савелий Решин?',
      answers: [
        { text: 'Герой и лидер' },
        { text: 'Ужасный человек' },
        { text: 'Я не знаю, кто это' }
      ]
    },
    {
      q: 'Что для тебя значит партия?',
      answers: [{ text: 'Всё' }, { text: 'Больше, чем всё' }]
    },
    {
      q: 'Кто твоя любимая пони из My Little Pony?',
      answers: [
        { text: 'Рарити' },
        { text: 'Флаттершай ❤️❤️❤️❤️' },
        { text: 'Эпплджек' },
        { text: 'Сумеречная Искорка' },
        { text: 'Рейнбоу Дэш' },
        { text: 'Пинки Пай' },
        { text: 'Дискорд' }
      ]
    }
  ];

  const RESULT = {
    name: 'Александр Ровнер',
    text: 'Ты больше всего похож на Александра Ровнера, самого многостороннего участника партии.',
    image: 'https://lh3.googleusercontent.com/d/1G9VdTNanmSTE8efT7IRtffDrJGi6IsXT'
  };

  let currentQuestion = 0;
  let locked = false;

  function renderQuestion() {
    container.innerHTML = '';
    locked = false;

    if (currentQuestion >= QUESTIONS.length) {
      renderResult();
      return;
    }

    const q = QUESTIONS[currentQuestion];

    const block = document.createElement('div');
    block.className = 'who-question';

    const title = document.createElement('p');
    title.className = 'who-question-title';
    title.textContent = (currentQuestion + 1) + '. ' + q.q;
    block.appendChild(title);

    const answersWrap = document.createElement('div');
    answersWrap.className = 'who-answers';

    q.answers.forEach(a => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'who-answer';
      btn.textContent = a.text;
      btn.addEventListener('click', () => {
        if (locked) return;
        locked = true;
        btn.classList.add('selected');
        setTimeout(() => {
          currentQuestion++;
          renderQuestion();
        }, 350);
      });
      answersWrap.appendChild(btn);
    });

    block.appendChild(answersWrap);

    const progress = document.createElement('p');
    progress.className = 'who-progress';
    progress.textContent = 'Вопрос ' + (currentQuestion + 1) + ' из ' + QUESTIONS.length;
    block.appendChild(progress);

    container.appendChild(block);
  }

  function renderResult() {
    container.innerHTML = '';

    const result = document.createElement('div');
    result.className = 'who-result';

    const img = document.createElement('img');
    img.src = RESULT.image;
    img.alt = RESULT.name;
    img.className = 'who-result-image';
    result.appendChild(img);

    const title = document.createElement('h4');
    title.className = 'who-result-title';
    title.textContent = 'Ты — ' + RESULT.name;
    result.appendChild(title);

    const text = document.createElement('p');
    text.className = 'who-result-text';
    text.textContent = RESULT.text;
    result.appendChild(text);

    const restart = document.createElement('button');
    restart.type = 'button';
    restart.className = 'who-restart';
    restart.textContent = 'Пройти заново';
    restart.addEventListener('click', () => {
      currentQuestion = 0;
      renderQuestion();
    });
    result.appendChild(restart);

    container.appendChild(result);
  }

  renderQuestion();
})();