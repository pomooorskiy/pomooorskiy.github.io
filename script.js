/* ==================== ПЕРЕВОДЫ ==================== */
const TRANSLATIONS = {
  ru: {
    'site.title': 'Партия подотчётного парламента',
    'nav.program': 'Программа',
    'nav.games': 'Игры',
    'nav.quizzes': 'Викторины и тесты',
    'nav.generator': 'Генераторы',
    'nav.other': 'Прочее',
    'nav.contact': 'Связь',
    'back': 'На главную',
    'section.creativity': 'Наше творчество',
    'section.hymn': 'Наш гимн',
    'section.sections': 'Разделы сайта',
    'section.program': 'Программа партии',
    'section.games': 'Игры',
    'section.quizzes': 'Викторины и тесты',
    'section.generator': 'Генератор движухи',
    'section.promises': 'Генератор обещаний',
    'section.other': 'Прочее',
    'section.contact': 'Связь с партией',
    'game.snake': 'Змейка',
    'game.puzzle': 'Собери пазл',
    'game.minesweeper': 'Сапёр',
    'game.score': 'Счёт',
    'game.best': 'Рекорд',
    'game.moves': 'Ходов',
    'game.shuffle': 'Перемешать',
    'game.newGame': 'Новая игра',
    'quiz.abbr.title': 'Собери аббревиатуру',
    'quiz.abbr.subtitle': 'Перетащи блоки в правильном порядке, чтобы собрать полное название партии',
    'quiz.abbr.reset': 'Заново',
    'quiz.who.title': 'Кто ты из ППП',
    'quiz.who.subtitle': 'Пройдя этот тест, ты узнаешь, кто из членов ППП больше всего на тебя похож',
    'generator.btn': 'Давай!',
    'promise.btn': 'Обещать',
    'promise.empty': 'Нажмите кнопку, чтобы получить обещание',
    'mine.hint': 'ЛКМ — открыть, ПКМ (долгое нажатие) — флажок',
    'other.partyList': 'Партийный список',
    'other.antiList': 'Антипартийный антисписок',
    'contact.placeholder': 'Напишите ваше сообщение...',
    'contact.send': 'Отправить',
    'counter.label': 'ППП существует уже',
    'counter.unit': 'сек.'
  },
  be: {
    'site.title': 'Партыя падсправаздачнага парламента',
    'nav.program': 'Праграма',
    'nav.games': 'Гульні',
    'nav.quizzes': 'Віктарыны і тэсты',
    'nav.generator': 'Генератары',
    'nav.other': 'Іншае',
    'nav.contact': 'Сувязь',
    'back': 'На галоўную',
    'section.creativity': 'Наша творчасць',
    'section.hymn': 'Наш гімн',
    'section.sections': 'Раздзелы сайта',
    'section.program': 'Праграма партыі',
    'section.games': 'Гульні',
    'section.quizzes': 'Віктарыны і тэсты',
    'section.generator': 'Генератар руху',
    'section.promises': 'Генератар абяцанняў',
    'section.other': 'Іншае',
    'section.contact': 'Сувязь з партыяй',
    'game.snake': 'Змейка',
    'game.puzzle': 'Складзі пазл',
    'game.minesweeper': 'Сапёр',
    'game.score': 'Лік',
    'game.best': 'Рэкорд',
    'game.moves': 'Хадоў',
    'game.shuffle': 'Перамяшаць',
    'game.newGame': 'Новая гульня',
    'quiz.abbr.title': 'Складзі абрэвіятуру',
    'quiz.abbr.subtitle': 'Перацягніце блокі ў правільным парадку, каб сабраць поўную назву партыі',
    'quiz.abbr.reset': 'Занава',
    'quiz.who.title': 'Хто ты з ППП',
    'quiz.who.subtitle': 'Прайшоўшы гэты тэст, ты даведаешся, хто з членаў ППП больш за ўсё на цябе падобны',
    'generator.btn': 'Давай!',
    'promise.btn': 'Абяцаць',
    'promise.empty': 'Націсніце кнопку, каб атрымаць абяцанне',
    'mine.hint': 'ЛКМ — адкрыць, ПКМ (доўгі націск) — сцяжок',
    'other.partyList': 'Партыйны спіс',
    'other.antiList': 'Антыпартыйны антыспіс',
    'contact.placeholder': 'Напішыце ваша паведамленне...',
    'contact.send': 'Адправіць',
    'counter.label': 'ППП існуе ўжо',
    'counter.unit': 'сек.'
  },
  he: {
    'site.title': 'מפלגת הפרלמנט המדווח',
    'nav.program': 'תוכנית',
    'nav.games': 'משחקים',
    'nav.quizzes': 'חידונים ומבחנים',
    'nav.generator': 'מחוללים',
    'nav.other': 'שונות',
    'nav.contact': 'יצירת קשר',
    'back': 'לדף הבית',
    'section.creativity': 'היצירה שלנו',
    'section.hymn': 'ההמנון שלנו',
    'section.sections': 'מדורי האתר',
    'section.program': 'תוכנית המפלגה',
    'section.games': 'משחקים',
    'section.quizzes': 'חידונים ומבחנים',
    'section.generator': 'מחולל תנועה',
    'section.promises': 'מחולל הבטחות',
    'section.other': 'שונות',
    'section.contact': 'יצירת קשר עם המפלגה',
    'game.snake': 'נחש',
    'game.puzzle': 'הרכב פאזל',
    'game.minesweeper': 'שולה מוקשים',
    'game.score': 'ניקוד',
    'game.best': 'שיא',
    'game.moves': 'מהלכים',
    'game.shuffle': 'ערבב',
    'game.newGame': 'משחק חדש',
    'quiz.abbr.title': 'הרכב ראשי תיבות',
    'quiz.abbr.subtitle': 'גרור בלוקים בסדר הנכון כדי להרכיב את שם המפלגה המלא',
    'quiz.abbr.reset': 'מחדש',
    'quiz.who.title': 'מי אתה מהמפלגה',
    'quiz.who.subtitle': 'לאחר מעבר המבחן תגלה למי מחברי המפלגה אתה הכי דומה',
    'generator.btn': 'קדימה!',
    'promise.btn': 'להבטיח',
    'promise.empty': 'לחץ על הכפתור כדי לקבל הבטחה',
    'mine.hint': 'לחץ שמאלי — לחשוף, לחץ ימני (לחיצה ארוכה) — דגל',
    'other.partyList': 'רשימת המפלגה',
    'other.antiList': 'רשימה אנטי-מפלגתית',
    'contact.placeholder': 'כתוב את ההודעה שלך...',
    'contact.send': 'שלח',
    'counter.label': 'המפלגה קיימת כבר',
    'counter.unit': 'שנ׳'
  },
  ar: {
    'site.title': 'حزب البرلمان المسؤول',
    'nav.program': 'البرنامج',
    'nav.games': 'الألعاب',
    'nav.quizzes': 'اختبارات ومسابقات',
    'nav.generator': 'المولّدات',
    'nav.other': 'أخرى',
    'nav.contact': 'اتصال',
    'back': 'إلى الرئيسية',
    'section.creativity': 'إبداعنا',
    'section.hymn': 'نشيدنا',
    'section.sections': 'أقسام الموقع',
    'section.program': 'برنامج الحزب',
    'section.games': 'الألعاب',
    'section.quizzes': 'اختبارات ومسابقات',
    'section.generator': 'مولّد الحركة',
    'section.promises': 'مولّد الوعود',
    'section.other': 'أخرى',
    'section.contact': 'التواصل مع الحزب',
    'game.snake': 'الثعبان',
    'game.puzzle': 'ركّب الصورة',
    'game.minesweeper': 'كانسة الألغام',
    'game.score': 'النتيجة',
    'game.best': 'الأفضل',
    'game.moves': 'الحركات',
    'game.shuffle': 'خلط',
    'game.newGame': 'لعبة جديدة',
    'quiz.abbr.title': 'ركّب الاختصار',
    'quiz.abbr.subtitle': 'اسحب الكتل بالترتيب الصحيح لتجميع الاسم الكامل للحزب',
    'quiz.abbr.reset': 'إعادة',
    'quiz.who.title': 'من أنت من الحزب',
    'quiz.who.subtitle': 'بعد اجتياز هذا الاختبار ستعرف أي عضو من الحزب يشبهك أكثر',
    'generator.btn': 'هيا!',
    'promise.btn': 'نَعِد',
    'promise.empty': 'اضغط الزر للحصول على وعد',
    'mine.hint': 'زر أيسر — كشف، زر أيمن (ضغط مطوّل) — علم',
    'other.partyList': 'قائمة الحزب',
    'other.antiList': 'القائمة المناهضة للحزب',
    'contact.placeholder': 'اكتب رسالتك...',
    'contact.send': 'إرسال',
    'counter.label': 'الحزب موجود منذ',
    'counter.unit': 'ثانية'
  }
};

let currentLang = 'ru';

function applyTranslations(lang) {
  currentLang = lang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  const rtl = (lang === 'he' || lang === 'ar');
  document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang');
applyTranslations(savedLang && TRANSLATIONS[savedLang] ? savedLang : 'ru');

const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');

if (langBtn && langMenu) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('open');
  });
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(btn.dataset.lang);
      langMenu.classList.remove('open');
    });
  });
  document.addEventListener('click', () => {
    langMenu.classList.remove('open');
  });
}


/* ==================== ЛУЧИ ОТ ЛОГОТИПА ==================== */
(function () {
  const logo = document.getElementById('siteLogo');
  const overlay = document.getElementById('raysOverlay');
  if (!logo || !overlay) return;

  logo.addEventListener('click', () => {
    // Убираем старые лучи
    overlay.innerHTML = '';
    overlay.classList.add('active');

    // Создаём 16 лучей
    const count = 16;
    for (let i = 0; i < count; i++) {
      const ray = document.createElement('div');
      ray.className = 'ray';
      ray.style.setProperty('--angle', (i * (360 / count)) + 'deg');
      ray.style.animationDelay = (i * 0.015) + 's';
      overlay.appendChild(ray);
    }

    setTimeout(() => {
      overlay.classList.remove('active');
      overlay.innerHTML = '';
    }, 1600);
  });
})();


/* ==================== ВСПЛЫВАЮЩЕЕ ОКНО ==================== */
(function () {
  const overlay = document.getElementById('popupOverlay');
  const closeBtn = document.getElementById('popupClose');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.add('hidden');
  });
})();


/* ==================== БУРГЕР-МЕНЮ ==================== */
const burgerBtn = document.getElementById('burgerBtn');
const sideNav = document.getElementById('sideNav');
const sideNavOverlay = document.getElementById('sideNavOverlay');

if (burgerBtn && sideNav && sideNavOverlay) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    sideNav.classList.toggle('open');
    sideNavOverlay.classList.toggle('open');
  });
  const closeMenu = () => {
    burgerBtn.classList.remove('active');
    sideNav.classList.remove('open');
    sideNavOverlay.classList.remove('open');
  };
  sideNavOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}


/* ==================== КАРУСЕЛЬ ==================== */
(function () {
  const cards = Array.from(document.querySelectorAll('.cover-card'));
  if (!cards.length) return;
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

  function goNext() { activeIndex = (activeIndex + 1) % total; updateCoverflow(); }
  function goPrev() { activeIndex = (activeIndex - 1 + total) % total; updateCoverflow(); }

  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrev);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
  });

  updateCoverflow();
})();


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
    parallaxBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
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
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(el => observer.observe(el));
}


/* ==================== КНОПКА НАВЕРХ ==================== */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ==================== СЧЁТЧИК СЕКУНД ==================== */
(function () {
  const valueEl = document.getElementById('counterValue');
  if (!valueEl) return;
  const START_DATE = new Date('2026-09-15T12:00:00').getTime();
  function updateCounter() {
    const diff = Math.abs(Math.floor((Date.now() - START_DATE) / 1000));
    valueEl.textContent = diff.toLocaleString('ru-RU').replace(/,/g, ' ');
  }
  updateCounter();
  setInterval(updateCounter, 1000);
})();


/* ==================== ИГРА ЗМЕЙКА ==================== */
(function () {
  const canvas = document.getElementById('snakeCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('snakeScore');
  const GRID = 20;
  const STEP_MS = 140;
  let snake, prevSnake, direction, nextDirection, food, score, gameOver;
  let lastFrameTime = 0, accum = 0, stepProgress = 0;

  function fitCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const size = canvas.parentElement.clientWidth;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function resetGame() {
    snake = [{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }];
    prevSnake = snake.map(s => ({ ...s }));
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0; gameOver = false; stepProgress = 0; accum = 0;
    if (scoreEl) scoreEl.textContent = '0';
    placeFood();
    lastFrameTime = performance.now();
  }

  function placeFood() {
    do {
      food = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    } while (snake.some(s => s.x === food.x && s.y === food.y));
  }

  function stepLogic() {
    if (gameOver) return;
    direction = nextDirection;
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) { gameOver = true; return; }
    for (let i = 0; i < snake.length - 1; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) { gameOver = true; return; }
    }
    prevSnake = snake.map(s => ({ ...s }));
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      if (scoreEl) scoreEl.textContent = score;
      placeFood();
      prevSnake.push({ ...prevSnake[prevSnake.length - 1] });
    } else snake.pop();
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

  function draw(alpha) {
    const size = canvas.width / (window.devicePixelRatio || 1);
    const cell = size / GRID;
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--canvas-bg').trim() || '#ffffff';
    ctx.fillRect(0, 0, size, size);
    const pulse = 1 + Math.sin(performance.now() / 250) * 0.08;
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(food.x * cell + cell / 2, food.y * cell + cell / 2, (cell / 2 - 3) * pulse, 0, Math.PI * 2);
    ctx.fill();
    snake.forEach((seg, i) => {
      const prev = prevSnake[i] || seg;
      const x = prev.x + (seg.x - prev.x) * alpha;
      const y = prev.y + (seg.y - prev.y) * alpha;
      const px = x * cell, py = y * cell;
      ctx.fillStyle = i === 0 ? '#3e4a7c' : '#576394';
      roundRect(ctx, px + 2, py + 2, cell - 4, cell - 4, cell * 0.18);
      ctx.fill();
      if (i === 0) {
        ctx.fillStyle = '#ffffff';
        const es = cell * 0.15;
        const cx = px + cell / 2, cy = py + cell / 2;
        const p1x = cx + direction.y * cell * 0.18 + direction.x * cell * 0.18;
        const p1y = cy - direction.x * cell * 0.18 + direction.y * cell * 0.18;
        const p2x = cx - direction.y * cell * 0.18 + direction.x * cell * 0.18;
        const p2y = cy + direction.x * cell * 0.18 + direction.y * cell * 0.18;
        ctx.beginPath(); ctx.arc(p1x, p1y, es, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(p2x, p2y, es, 0, Math.PI * 2); ctx.fill();
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

  function loop(now) {
    const dt = now - lastFrameTime;
    lastFrameTime = now;
    if (!gameOver) {
      accum += dt;
      while (accum >= STEP_MS) { stepLogic(); accum -= STEP_MS; }
      stepProgress = accum / STEP_MS;
    } else stepProgress = 0;
    draw(stepProgress);
    requestAnimationFrame(loop);
  }

  function changeDirection(dx, dy) {
    if (gameOver) { resetGame(); return; }
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

  let tX = 0, tY = 0;
  canvas.addEventListener('touchstart', (e) => {
    tX = e.touches[0].clientX;
    tY = e.touches[0].clientY;
  }, { passive: true });
  canvas.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tX;
    const dy = e.changedTouches[0].clientY - tY;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 30) return;
    if (Math.abs(dx) > Math.abs(dy)) changeDirection(dx > 0 ? 1 : -1, 0);
    else changeDirection(0, dy > 0 ? 1 : -1);
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
  const SIZE = 3, TOTAL = SIZE * SIZE;
  const IMAGE_URL = 'logo-puzzle.png';
  let tiles = [], moves = 0, solved = false;

  function makeSolved() {
    const arr = [];
    for (let i = 0; i < TOTAL; i++) arr.push(i);
    return arr;
  }

  function isSolvable(arr) {
    const flat = arr.filter(v => v !== 0);
    let inv = 0;
    for (let i = 0; i < flat.length; i++)
      for (let j = i + 1; j < flat.length; j++)
        if (flat[i] > flat[j]) inv++;
    return inv % 2 === 0;
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
    tiles = arr; moves = 0; solved = false;
    if (movesEl) movesEl.textContent = '0';
    render();
  }

  function getNeighbors(index) {
    const r = Math.floor(index / SIZE), c = index % SIZE;
    const res = [];
    if (r > 0) res.push(index - SIZE);
    if (r < SIZE - 1) res.push(index + SIZE);
    if (c > 0) res.push(index - 1);
    if (c < SIZE - 1) res.push(index + 1);
    return res;
  }

  function render() {
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`;
    tiles.forEach((value, index) => {
      const tile = document.createElement('div');
      tile.className = 'puzzle-tile';
      if (value === 0) tile.classList.add('empty');
      else {
        const r = Math.floor((value - 1) / SIZE);
        const c = (value - 1) % SIZE;
        tile.style.backgroundImage = `url(${IMAGE_URL})`;
        tile.style.backgroundSize = `${SIZE * 100}% ${SIZE * 100}%`;
        tile.style.backgroundPosition = `${(c / (SIZE - 1)) * 100}% ${(r / (SIZE - 1)) * 100}%`;
      }
      tile.addEventListener('click', () => handleClick(index));
      board.appendChild(tile);
    });
  }

  function handleClick(index) {
    if (solved) return;
    const empty = tiles.indexOf(0);
    if (!getNeighbors(empty).includes(index)) return;
    [tiles[index], tiles[empty]] = [tiles[empty], tiles[index]];
    moves++;
    if (movesEl) movesEl.textContent = moves;
    render();
    if (tiles.every((v, i) => v === i)) {
      solved = true;
      setTimeout(() => alert(`Пазл собран за ${moves} ходов!`), 200);
    }
  }

  if (shuffleBtn) shuffleBtn.addEventListener('click', shuffle);
  shuffle();
})();