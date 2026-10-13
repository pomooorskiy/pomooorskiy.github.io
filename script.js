/* ==================== КАРУСЕЛЬ ==================== */
const cards = Array.from(document.querySelectorAll('.cover-card'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let activeIndex = 0;
const total = cards.length;

function updateCoverflow() {
  cards.forEach((card, index) => {
    card.className = 'cover-card';
    let diff = index - activeIndex;

    if (diff > Math.floor(total / 2)) diff -= total;
    else if (diff < -Math.floor(total / 2)) diff += total;

    if (diff === 0) card.classList.add('active');
    else if (diff === -1) card.classList.add('prev-1');
    else if (diff === -2) card.classList.add('prev-2');
    else if (diff === 1) card.classList.add('next-1');
    else if (diff === 2) card.classList.add('next-2');
  });
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    activeIndex = index;
    updateCoverflow();
  });
});

function goNext() {
  activeIndex = (activeIndex + 1) % total;
  updateCoverflow();
}

function goPrev() {
  activeIndex = (activeIndex - 1 + total) % total;
  updateCoverflow();
}

if (nextBtn) nextBtn.addEventListener('click', goNext);
if (prevBtn) prevBtn.addEventListener('click', goPrev);

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goNext();
  else if (e.key === 'ArrowLeft') goPrev();
});

updateCoverflow();


/* ==================== ФОРМА СВЯЗИ ==================== */
const contactBtn = document.getElementById('contactBtn');
const contactInput = document.getElementById('contactInput');
const contactStatus = document.getElementById('contactStatus');

if (contactBtn && contactInput && contactStatus) {
  contactBtn.addEventListener('click', () => {
    const text = contactInput.value.trim();

    if (!text) {
      contactStatus.textContent = 'Пожалуйста, введите сообщение.';
      return;
    }

    console.log('Сообщение для партии:', text);

    contactStatus.textContent = 'Спасибо! Ваше сообщение отправлено.';
    contactInput.value = '';

    setTimeout(() => {
      contactStatus.textContent = '';
    }, 4000);
  });
}


/* ==================== ТЁМНАЯ ТЕМА ==================== */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  if (themeIcon) themeIcon.textContent = '☀️';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
  });
}


/* ==================== ПАРАЛЛАКС ==================== */
const parallaxBg = document.getElementById('parallaxBg');
if (parallaxBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    parallaxBg.style.transform = `translateY(${y * 0.3}px)`;
  }, { passive: true });
}


/* ==================== АНИМАЦИЯ ПОЯВЛЕНИЯ ==================== */
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}


/* ==================== КНОПКА НАВЕРХ ==================== */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ==================== ИГРА ЗМЕЙКА ==================== */
(function () {
  const canvas = document.getElementById('snakeCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('snakeScore');

  const GRID = 20;
  const STEP_MS = 140;

  let snake, prevSnake, direction, nextDirection, food, score, gameOver;
  let lastFrameTime = 0;
  let accum = 0;
  let stepProgress = 0;

  function fitCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const box = canvas.parentElement;
    const size = box.clientWidth;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function resetGame() {
    snake = [
      { x: 9, y: 10 },
      { x: 8, y: 10 },
      { x: 7, y: 10 }
    ];
    prevSnake = snake.map(s => ({ ...s }));
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    gameOver = false;
    stepProgress = 0;
    accum = 0;
    if (scoreEl) scoreEl.textContent = '0';
    placeFood();
    lastFrameTime = performance.now();
  }

  function placeFood() {
    do {
      food = {
        x: Math.floor(Math.random() * GRID),
        y: Math.floor(Math.random() * GRID)
      };
    } while (snake.some(s => s.x === food.x && s.y === food.y));
  }

  function stepLogic() {
    if (gameOver) return;

    direction = nextDirection;

    const head = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y
    };

    if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) {
      endGame();
      return;
    }

    for (let i = 0; i < snake.length - 1; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        endGame();
        return;
      }
    }

    prevSnake = snake.map(s => ({ ...s }));
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score += 10;
      if (scoreEl) scoreEl.textContent = score;
      placeFood();
      prevSnake.push({ ...prevSnake[prevSnake.length - 1] });
    } else {
      snake.pop();
    }
  }

  function endGame() {
    gameOver = true;
  }

  function draw(alpha) {
    const size = canvas.width / (window.devicePixelRatio || 1);
    const cell = size / GRID;

    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--canvas-bg').trim() || '#ffffff';
    ctx.fillRect(0, 0, size, size);

    const pulse = 1 + Math.sin(performance.now() / 250) * 0.08;
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(
      food.x * cell + cell / 2,
      food.y * cell + cell / 2,
      (cell / 2 - 3) * pulse,
      0,
      Math.PI * 2
    );
    ctx.fill();

    snake.forEach((seg, i) => {
      const prev = prevSnake[i] || seg;
      const x = prev.x + (seg.x - prev.x) * alpha;
      const y = prev.y + (seg.y - prev.y) * alpha;

      const px = x * cell;
      const py = y * cell;

      const r = cell * 0.18;
      const isHead = i === 0;

      ctx.fillStyle = isHead ? '#3e4a7c' : '#576394';

      roundRect(ctx, px + 2, py + 2, cell - 4, cell - 4, r);
      ctx.fill();

      if (isHead) {
        ctx.fillStyle = '#ffffff';
        const eyeSize = cell * 0.15;
        const dx = direction.x;
        const dy = direction.y;
        const cx = px + cell / 2;
        const cy = py + cell / 2;

        const px1 = cx + dy * cell * 0.18 + dx * cell * 0.18;
        const py1 = cy - dx * cell * 0.18 + dy * cell * 0.18;
        const px2 = cx - dy * cell * 0.18 + dx * cell * 0.18;
        const py2 = cy + dx * cell * 0.18 + dy * cell * 0.18;

        ctx.beginPath();
        ctx.arc(px1, py1, eyeSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px2, py2, eyeSize, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (gameOver) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = `bold ${size * 0.07}px Montserrat, sans-serif`;
      ctx.fillText('Игра окончена', size / 2, size / 2 - 10);
      ctx.font = `bold ${size * 0.045}px Montserrat, sans-serif`;
      ctx.fillText('Нажмите ▼ для старта', size / 2, size / 2 + 40);
    }
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function loop(now) {
    const dt = now - lastFrameTime;
    lastFrameTime = now;

    if (!gameOver) {
      accum += dt;
      while (accum >= STEP_MS) {
        stepLogic();
        accum -= STEP_MS;
      }
      stepProgress = accum / STEP_MS;
    } else {
      stepProgress = 0;
    }

    draw(stepProgress);
    requestAnimationFrame(loop);
  }

  function changeDirection(dx, dy) {
    if (gameOver) {
      resetGame();
      return;
    }
    if (dx === -direction.x && dy === -direction.y) return;
    if (dx === nextDirection.x && dy === nextDirection.y) return;
    nextDirection = { x: dx, y: dy };
  }

  const upBtn = document.getElementById('snakeUp');
  const downBtn = document.getElementById('snakeDown');
  const leftBtn = document.getElementById('snakeLeft');
  const rightBtn = document.getElementById('snakeRight');

  if (upBtn) upBtn.addEventListener('click', () => changeDirection(0, -1));
  if (downBtn) downBtn.addEventListener('click', () => changeDirection(0, 1));
  if (leftBtn) leftBtn.addEventListener('click', () => changeDirection(-1, 0));
  if (rightBtn) rightBtn.addEventListener('click', () => changeDirection(1, 0));

  let touchStartX = 0, touchStartY = 0;
  canvas.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });

  canvas.addEventListener('touchend', (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) < 30) return;

    if (absDx > absDy) {
      changeDirection(dx > 0 ? 1 : -1, 0);
    } else {
      changeDirection(0, dy > 0 ? 1 : -1);
    }
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (k === 'w' || k === 'ц') { changeDirection(0, -1); e.preventDefault(); }
    else if (k === 's' || k === 'ы') { changeDirection(0, 1); e.preventDefault(); }
    else if (k === 'a' || k === 'ф') { changeDirection(-1, 0); e.preventDefault(); }
    else if (k === 'd' || k === 'в') { changeDirection(1, 0); e.preventDefault(); }
  });

  window.addEventListener('resize', fitCanvas);

  fitCanvas();
  resetGame();
  requestAnimationFrame(loop);
})();


/* ==================== ИГРА ПАЗЛ ==================== */
(function () {
  const board = document.getElementById('puzzleBoard');
  if (!board) return;

  const movesEl = document.getElementById('puzzleMoves');
  const shuffleBtn = document.getElementById('puzzleShuffle');

  const SIZE = 3;
  const TOTAL = SIZE * SIZE;

  // Отдельный файл для пазла (без прозрачности)
  const IMAGE_URL = 'logo-puzzle.png';

  let tiles = [];
  let moves = 0;
  let solved = false;

  function makeSolved() {
    const arr = [];
    for (let i = 0; i < TOTAL; i++) arr.push(i);
    return arr;
  }

  function isSolvable(arr) {
    const flat = arr.filter(v => v !== 0);
    let inversions = 0;
    for (let i = 0; i < flat.length; i++) {
      for (let j = i + 1; j < flat.length; j++) {
        if (flat[i] > flat[j]) inversions++;
      }
    }
    return inversions % 2 === 0;
  }

  function shuffle() {
    let arr;
    do {
      arr = makeSolved();
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    } while (!isSolvable(arr) || arr.every((v, i) => v === i));

    tiles = arr;
    moves = 0;
    solved = false;
    if (movesEl) movesEl.textContent = '0';
    render();
  }

  function getNeighbors(index) {
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const result = [];
    if (row > 0) result.push(index - SIZE);
    if (row < SIZE - 1) result.push(index + SIZE);
    if (col > 0) result.push(index - 1);
    if (col < SIZE - 1) result.push(index + 1);
    return result;
  }

  function render() {
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`;

    tiles.forEach((value, index) => {
      const tile = document.createElement('div');
      tile.className = 'puzzle-tile';

      if (value === 0) {
        tile.classList.add('empty');
      } else {
        const origRow = Math.floor((value - 1) / SIZE);
        const origCol = (value - 1) % SIZE;
        const bgX = (origCol / (SIZE - 1)) * 100;
        const bgY = (origRow / (SIZE - 1)) * 100;

        tile.style.backgroundImage = `url(${IMAGE_URL})`;
        tile.style.backgroundSize = `${SIZE * 100}% ${SIZE * 100}%`;
        tile.style.backgroundPosition = `${bgX}% ${bgY}%`;
      }

      tile.addEventListener('click', () => handleClick(index));
      board.appendChild(tile);
    });
  }

  function handleClick(index) {
    if (solved) return;

    const emptyIndex = tiles.indexOf(0);
    const neighbors = getNeighbors(emptyIndex);

    if (!neighbors.includes(index)) return;

    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];

    moves++;
    if (movesEl) movesEl.textContent = moves;
    render();

    if (isSolved()) {
      solved = true;
      setTimeout(() => {
        alert(`Пазл собран за ${moves} ходов!`);
      }, 200);
    }
  }

  function isSolved() {
    for (let i = 0; i < TOTAL; i++) {
      if (tiles[i] !== i) return false;
    }
    return true;
  }

  if (shuffleBtn) shuffleBtn.addEventListener('click', shuffle);

  shuffle();
})();


/* ==================== ГЕНЕРАТОР ДВИЖУХИ ==================== */
(function () {
  const cell1 = document.getElementById('genCell1');
  const cell2 = document.getElementById('genCell2');
  const cell3 = document.getElementById('genCell3');
  const btn = document.getElementById('generatorBtn');

  if (!cell1 || !cell2 || !cell3 || !btn) return;

  const NOUNS = [
    'Партия', 'Программа', 'Победа', 'Порядок', 'Прогресс',
    'Поддержка', 'Право', 'Правда', 'Политика', 'Парламент',
    'Президент', 'Правительство', 'Проект', 'План', 'Путь',
    'Пространство', 'Праздник', 'Память', 'Помощь', 'Польза',
    'Признание', 'Призвание', 'Преображение', 'Пробуждение', 'Подъём',
    'Потенциал', 'Приоритет', 'Перспектива', 'Платформа', 'Позиция',
    'Понимание', 'Принцип', 'Практика', 'Проверка', 'Подготовка',
    'Презентация', 'Публикация', 'Просвещение', 'Пропаганда', 'Патриотизм',
    'Поколение', 'Племя', 'Простор', 'Поле', 'Площадь',
    'Плоскость', 'Поверхность', 'Почва', 'Пустыня', 'Природа',
    'Погода', 'Пейзаж', 'Поток', 'Пламя', 'Пепел',
    'Пыль', 'Пар', 'Пена', 'Песня', 'Пляска',
    'Поэма', 'Повесть', 'Притча', 'Пословица', 'Поговорка',
    'Присказка', 'Прибаутка', 'Потешка', 'Приключение', 'Путешествие',
    'Поход', 'Паломничество', 'Подвиг', 'Прорыв', 'Прыжок',
    'Полет', 'Пуск', 'Призыв', 'Посыл', 'Порыв',
    'Прилив', 'Приток', 'Прирост', 'Прогноз', 'Проекция',
    'Проявление', 'Процесс', 'Пункт', 'Протокол', 'Постановление',
    'Предложение', 'Поправка', 'Прецедент', 'Преамбула', 'Параграф',
    'Парадигма', 'Параметр', 'Период', 'Периферия', 'Персона',
    'Персонаж', 'Письмо', 'Письменность', 'Питание', 'Пища',
    'Планета', 'Планирование', 'Пласт', 'Пластика', 'Пластмасса',
    'Плата', 'Платёж', 'Племянник', 'Плен', 'Пленум',
    'Плечо', 'Плод', 'Плот', 'Плотность', 'Плотник',
    'Плоть', 'Площадка', 'Плуг', 'Плюс', 'Пляж',
    'Побег', 'Победитель', 'Побуждение', 'Повар', 'Поведение',
    'Поверье', 'Повествование', 'Повод', 'Поворот', 'Повреждение',
    'Повторение', 'Повышение', 'Погибель', 'Погружение',
    'Подвал', 'Подданный', 'Поделка', 'Поджог',
    'Подкова', 'Подлость', 'Поднос', 'Подобие', 'Подозрение',
    'Подол', 'Подошва', 'Подпись', 'Подполковник', 'Подпорка',
    'Подразделение', 'Подробность', 'Подряд', 'Подсказка', 'Подсознание',
    'Подстава', 'Подсудимый', 'Подтверждение', 'Подушка', 'Подход',
    'Подъезд', 'Поединок', 'Поезд', 'Поездка', 'Пожар',
    'Пожелание', 'Пожертвование', 'Поза', 'Позапрошлое', 'Позвоночник',
    'Поздравление', 'Позирование', 'Познание', 'Позор', 'Поиск',
    'Пойма', 'Показ', 'Показание', 'Показатель', 'Покой',
    'Покровитель', 'Покупка', 'Полезность'
  ];

  const ADJECTIVES = [
    'Подотчётный', 'Правильный', 'Прямой', 'Первый', 'Передовой',
    'Прогрессивный', 'Патриотический', 'Политический', 'Правовой', 'Партийный',
    'Парламентский', 'Президентский', 'Правительственный', 'Публичный', 'Принципиальный',
    'Практичный', 'Проверенный', 'Прозрачный', 'Понятный', 'Последовательный',
    'Постоянный', 'Полезный', 'Признанный', 'Привлекательный', 'Прекрасный',
    'Преданный', 'Прямодушный', 'Правдивый', 'Приветливый', 'Позитивный',
    'Перспективный', 'Потенциальный', 'Приоритетный', 'Плановый', 'Продуманный',
    'Подготовленный', 'Просвещённый', 'Полноценный', 'Поэтапный', 'Поступательный',
    'Подлинный', 'Повсеместный', 'Повседневный', 'Популярный', 'Признательный',
    'Пронзительный', 'Пылкий', 'Пламенный', 'Певучий', 'Печальный',
    'Приятный', 'Просторный', 'Плотный', 'Пестрый', 'Пушистый',
    'Пологий', 'Пряный', 'Пышный', 'Праздничный', 'Патриотичный',
    'Пронзающий', 'Проникновенный', 'Простой', 'Понятливый', 'Проворный',
    'Предприимчивый', 'Практический', 'Продуктивный', 'Положительный', 'Прилежный',
    'Пунктуальный', 'Порядочный', 'Приличный', 'Почтенный', 'Почётный',
    'Прославленный', 'Превосходный', 'Первоклассный', 'Правозащитный', 'Просветительский',
    'Публично-правовой', 'Профсоюзный', 'Предвыборный', 'Послевыборный', 'Постоянно-действующий',
    'Перспективно-мыслящий', 'Проблемно-ориентированный', 'Программно-целевой', 'Проектно-ориентированный', 'Публично-отчётный',
    'Политически-активный', 'Патриотически-настроенный', 'Прогрессивно-мыслящий', 'Практически-значимый', 'Принципиально-важный',
    'Последовательно-действующий', 'Постоянно-развивающийся', 'Перспективно-растущий', 'Позитивно-настроенный', 'Плодотворно-работающий',
    'Панорамный', 'Парадный', 'Параллельный', 'Пассивный', 'Пасторальный',
    'Патриархальный', 'Певческий', 'Педагогический', 'Педантичный', 'Пейзажный',
    'Пенсионный', 'Передвижной', 'Передний', 'Переходный', 'Периодический',
    'Перламутровый', 'Персональный', 'Песенный', 'Песчаный', 'Печатный',
    'Пешеходный', 'Пикантный', 'Пилотный', 'Пиратский', 'Письменный',
    'Питательный', 'Пищевой', 'Плавный', 'Пламенеющий', 'Планово-экономический',
    'Пластичный', 'Платежеспособный', 'Плацкартный', 'Пленительный', 'Плодородный',
    'Плодотворный', 'Плоский', 'Плотницкий', 'Плохой', 'Плутовской',
    'Плюсовой', 'Пляжный', 'Победоносный', 'Победный', 'Побудительный',
    'Поведенческий', 'Поворотный', 'Повышенный', 'Погибельный', 'Погодный',
    'Поголовный', 'Пограничный', 'Подводный', 'Подготовительный', 'Подданный',
    'Поддельный', 'Подземный', 'Подневольный', 'Подобный', 'Подозрительный',
    'Подотчётно-выборный', 'Подпольный', 'Подробный', 'Подручный', 'Подсобный',
    'Подсознательный', 'Подтверждающий', 'Подушевой', 'Подходящий', 'Подъездной',
    'Пожарный', 'Пожилой', 'Пожизненный', 'Позавчерашний', 'Поздний',
    'Поздравительный', 'Познавательный', 'Позорный', 'Поисковый', 'Показательный',
    'Показной', 'Покладистый', 'Покойный', 'Поколенный', 'Покорный',
    'Покровительственный', 'Покупной', 'Полевой', 'Полезно-нужный', 'Полемический',
    'Полётный', 'Поливальный', 'Полиграфический', 'Поликлинический', 'Полимерный',
    'Полированный', 'Политико-правовой', 'Политико-экономический', 'Полновесный', 'Полновластный',
    'Полногласный', 'Полномочный', 'Полноправный', 'Полосатый', 'Полувековой',
    'Полугодовой', 'Полузабытый', 'Полуночный', 'Полуофициальный', 'Полупрозрачный',
    'Полупустой', 'Полуразрушенный', 'Полусонный', 'Полустандартный', 'Полутоновый',
    'Полуфинальный', 'Полушаровой', 'Пользительный', 'Полярный', 'Помещичий'
  ];

  const VERBS = [
    'Победить', 'Поддержать', 'Понять', 'Помочь', 'Построить',
    'Проверить', 'Провести', 'Показать', 'Предложить', 'Принять',
    'Признать', 'Продвинуть', 'Привлечь', 'Проявить', 'Поставить',
    'Планировать', 'Прогнозировать', 'Проектировать', 'Просчитывать', 'Проверять',
    'Публиковать', 'Просвещать', 'Пропагандировать', 'Призывать', 'Поддерживать',
    'Понимать', 'Принимать', 'Предлагать', 'Продвигать', 'Привлекать',
    'Проявлять', 'Побеждать', 'Помогать', 'Пробовать', 'Преодолеть',
    'Перестроить', 'Пересмотреть', 'Пересчитать', 'Перепроверить', 'Переизбрать',
    'Поднять', 'Повысить', 'Понизить', 'Поправить', 'Пополнить',
    'Продлить', 'Присоединить', 'Петь', 'Плясать', 'Писать',
    'Печатать', 'Посылать', 'Получать', 'Передавать', 'Провожать',
    'Праздновать', 'Приветствовать', 'Поздравлять', 'Прославлять', 'Пробуждать',
    'Поднимать', 'Пробивать', 'Прокладывать', 'Проторять', 'Пронзать',
    'Пробирать', 'Пробегать', 'Проплывать', 'Пролетать', 'Проходить',
    'Проезжать', 'Проползать', 'Прыгать', 'Подпрыгнуть', 'Перепрыгнуть',
    'Присесть', 'Привстать', 'Потянуться', 'Приобнять', 'Приласкать',
    'Пожалеть', 'Позаботиться', 'Помолчать', 'Поговорить', 'Пошутить',
    'Поиграть', 'Потанцевать', 'Попеть', 'Погулять', 'Подышать',
    'Помечтать', 'Подумать', 'Порассуждать', 'Пофилософствовать', 'Поразмышлять',
    'Парить', 'Пахать', 'Паясничать', 'Пеленать', 'Пенить',
    'Перебегать', 'Перебирать', 'Перевести', 'Перевернуть', 'Перевозить',
    'Перевоплотиться', 'Перевыполнить', 'Перевязать', 'Переговорить', 'Переделать',
    'Переехать', 'Переживать', 'Перезагрузить', 'Переиздать', 'Перейти',
    'Переключить', 'Перекричать', 'Перекусить', 'Перелистать', 'Переменить',
    'Перенести', 'Переодеть', 'Переосмыслить', 'Переоценить', 'Переписать',
    'Переплыть', 'Переработать', 'Перерыть', 'Пересесть', 'Пересказать',
    'Переспорить', 'Переставить', 'Перетерпеть', 'Переубедить', 'Переучить',
    'Перехватить', 'Перечитать', 'Перешагнуть', 'Печалиться', 'Печь',
    'Пикировать', 'Пировать', 'Питать', 'Питаться', 'Пить',
    'Плавать', 'Плакать', 'Платить', 'Плевать', 'Плескаться',
    'Плодить', 'Плодоносить', 'Плошать', 'Плутать', 'Плыть',
    'Поблагодарить', 'Побледнеть', 'Поболтать', 'Побороть', 'Побояться',
    'Побрататься', 'Побрить', 'Побродить', 'Побывать', 'Повалить',
    'Повалиться', 'Поварить', 'Поведать', 'Повернуть', 'Поверить',
    'Повесить', 'Повести', 'Повествовать', 'Повзрослеть', 'Повидать',
    'Повиниться', 'Повлиять', 'Поволноваться', 'Повредить', 'Повременить',
    'Повторить', 'Погадать', 'Погасить', 'Погладить', 'Поглотить',
    'Поглядеть', 'Погнуться', 'Погодить', 'Погонять', 'Погоревать',
    'Погрузить', 'Погрузиться', 'Погубить', 'Подавать', 'Подавить',
    'Подарить', 'Подать', 'Подбодрить', 'Подбросить', 'Подвести',
    'Подвинуть', 'Подготовить', 'Подействовать', 'Поделить', 'Поделиться',
    'Поделать', 'Поджать', 'Подзаработать', 'Подкинуть', 'Подключить',
    'Подкормить', 'Подкупить', 'Подладить', 'Подлечить', 'Подлить',
    'Подметить', 'Подменить', 'Подмигнуть', 'Подмолодить', 'Подновить',
    'Подняться', 'Подобрять', 'Подозвать', 'Подождать', 'Подойти',
    'Подорвать', 'Подослать', 'Подоить', 'Подпевать',
    'Подписать', 'Подрабатывать', 'Подражать', 'Подразнить',
    'Подрасти', 'Подрезать', 'Подружиться', 'Подсветить', 'Подсказать',
    'Подсмотреть', 'Подсобить', 'Подсчитать', 'Подтвердить',
    'Подчеркнуть', 'Подчинить', 'Подчиниться', 'Подшутить', 'Подыграть',
    'Подытожить', 'Поехать', 'Пожаловать', 'Пожелать',
    'Пожертвовать', 'Поживать', 'Поживиться', 'Пожинать', 'Позабавить',
    'Позавидовать', 'Позвать', 'Позволять', 'Поздороваться',
    'Поздравить', 'Познавать', 'Познакомить', 'Познакомиться', 'Позолотить',
    'Позорить', 'Позывать', 'Поинтересоваться', 'Поискать',
    'Поймать', 'Покатать', 'Покататься', 'Покачать',
    'Покивать', 'Покидать', 'Покинуть', 'Поклониться', 'Поколебать',
    'Поколотить', 'Покончить', 'Покорить', 'Покормить', 'Покрасить',
    'Покричать', 'Покрыть', 'Покупать', 'Покурить', 'Покушать',
    'Полагать', 'Поладить', 'Полакомиться', 'Поласкать', 'Полежать',
    'Полетать', 'Поливать', 'Полировать', 'Полистать', 'Положить',
    'Поломать', 'Полоскать', 'Получить', 'Полюбить', 'Помахать',
    'Помешать', 'Помирить', 'Помириться', 'Помнить',
    'Помрачнеть', 'Помыть', 'Помыслить', 'Понести', 'Понижать',
    'Понравиться', 'Понудить', 'Пообедать', 'Пообещать', 'Пообщаться',
    'Поощрить', 'Попасть', 'Попереживать', 'Поплавать',
    'Поплакать', 'Поплыть', 'Попрактиковаться', 'Попробовать',
    'Попросить', 'Попрощаться', 'Популяризировать', 'Поработать', 'Порадовать',
    'Поразмыслить', 'Порасти', 'Порвать',
    'Поругать', 'Поручить', 'Порыбачить', 'Посадить', 'Посвятить',
    'Посеять', 'Посетить', 'Посещать', 'Посинеть', 'Поскучать',
    'Послать', 'Послушать', 'Посмотреть', 'Посоветовать', 'Поспорить',
    'Постараться', 'Поступить', 'Посчитать',
    'Потерять', 'Потеснить', 'Потолкаться',
    'Потолковать', 'Потонуть', 'Потоптаться', 'Потратить', 'Потренироваться',
    'Потрогать', 'Потрудиться', 'Потянуть', 'Поужинать',
    'Поучаствовать', 'Поучить', 'Похвалить', 'Похлопать', 'Походить',
    'Похолодать', 'Поцеловать', 'Починить', 'Почистить', 'Почитать',
    'Почувствовать', 'Пошалить', 'Пошатнуть', 'Пошевелить', 'Пошептать',
    'Пошуметь', 'Пощупать', 'Поэкономить', 'Появляться',
    'Праветь', 'Превратить', 'Превратиться', 'Превысить',
    'Преградить', 'Презентовать', 'Прекратить', 'Прельстить', 'Преобразить',
    'Преобразовать', 'Преподнести', 'Преподать', 'Препятствовать',
    'Прервать', 'Пресечь', 'Прессовать', 'Претендовать', 'Прибавить',
    'Прибегнуть', 'Приберечь', 'Прибить', 'Приблизить', 'Приблизиться',
    'Прибыть', 'Привлекать', 'Привнести', 'Приводить',
    'Привозить', 'Привыкнуть', 'Привязать', 'Пригласить', 'Приговорить',
    'Пригодиться', 'Приготовить', 'Придержать', 'Придумать', 'Приехать',
    'Прижать', 'Прижиться', 'Признаться', 'Призвать',
    'Приземлиться', 'Приказать', 'Прикинуть', 'Приклеить', 'Прикончить',
    'Прикоснуться', 'Прикрепить', 'Прикрыть', 'Прикупить',
    'Прилечь', 'Прилипнуть', 'Приложить', 'Приманить', 'Применить',
    'Примирить', 'Примкнуть', 'Примчаться', 'Принадлежать', 'Принести',
    'Принудить', 'Приободрить', 'Приобрести',
    'Приобщить', 'Приодеть', 'Приостановить', 'Припарковать', 'Приписать',
    'Приподнять', 'Припомнить', 'Присвоить', 'Прислать',
    'Прислонить', 'Присматривать', 'Присмотреться', 'Присниться',
    'Присоединиться', 'Приспособить', 'Приставить', 'Пристегнуть', 'Пристроить',
    'Приступить', 'Присутствовать', 'Присчитать', 'Присягнуть', 'Притащить',
    'Притвориться', 'Притереть', 'Притихнуть', 'Притоптать', 'Приукрасить',
    'Приумножить', 'Приучить', 'Прихватить', 'Прицелиться'
  ];

  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function animateWord(cell, word) {
    const span = cell.querySelector('.generator-text');
    if (!span) return;

    span.classList.remove('show');

    setTimeout(() => {
      span.textContent = word;
      span.classList.add('show');
    }, 250);
  }

  function generate() {
    const w1 = randomFrom(NOUNS);
    const w2 = randomFrom(ADJECTIVES);
    const w3 = randomFrom(VERBS);

    animateWord(cell1, w1);
    setTimeout(() => animateWord(cell2, w2), 200);
    setTimeout(() => animateWord(cell3, w3), 400);
  }

  btn.addEventListener('click', generate);

  generate();
})();