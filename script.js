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

// Загружаем сохранённую тему
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


/* ==================== ИГРА ЗМЕЙКА (плавная анимация) ==================== */
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

  // Картинка для пазла — логотип партии
  const IMAGE_URL = 'https://lh3.googleusercontent.com/d/1KRb9pi-oAD3qofva0diEfKu99MLGGNY4';

  let tiles = [];       // массив значений 0..8, где 0 — пустая клетка
  let moves = 0;

  function initPuzzle() {
    // Собираем решённое состояние: 0 (пусто) + 1..8
    tiles = [];
    for (let i = 0; i < TOTAL; i++) tiles.push(i);
    moves = 0;
    if (movesEl) movesEl.textContent = '0';
    render();
  }

  function shuffle() {
    // Перемешиваем случайными допустимыми ходами (гарантирует решаемость)
    tiles = [];
    for (let i = 0; i < TOTAL; i++) tiles.push(i);
    moves = 0;
    if (movesEl) movesEl.textContent = '0';

    const emptyIndex = tiles.indexOf(0);
    let lastMove = -1;

    for (let i = 0; i < 200; i++) {
      const neighbors = getNeighbors(emptyIndex);
      const options = neighbors.filter(n => n !== lastMove);
      const pick = options[Math.floor(Math.random() * options.length)];
      swap(emptyIndex, pick);
      lastMove = emptyIndex;
    }

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

  function swap(i, j) {
    const tmp = tiles[i];
    tiles[i] = tiles[j];
    tiles[j] = tmp;
  }

  function render() {
    board.innerHTML = '';

    tiles.forEach((value, index) => {
      const tile = document.createElement('div');
      tile.className = 'puzzle-tile';

      if (value === 0) {
        tile.classList.add('empty');
      } else {
        // Вычисляем позицию фрагмента в исходном изображении
        const origRow = Math.floor((value - 1) / SIZE);
        const origCol = (value - 1) % SIZE;
        const bgX = (origCol / (SIZE - 1)) * 100;
        const bgY = (origRow / (SIZE - 1)) * 100;

        tile.style.backgroundImage = `url(${IMAGE_URL})`;
        tile.style.backgroundPosition = `${bgX}% ${bgY}%`;
      }

      tile.addEventListener('click', () => handleTileClick(index));
      board.appendChild(tile);
    });
  }

  function handleTileClick(index) {
    const emptyIndex = tiles.indexOf(0);
    const neighbors = getNeighbors(emptyIndex);

    if (!neighbors.includes(index)) return;

    swap(index, emptyIndex);
    moves++;
    if (movesEl) movesEl.textContent = moves;
    render();

    if (isSolved()) {
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

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', shuffle);
  }

  initPuzzle();
  shuffle();
})();