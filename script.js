/* ==================== ПЕРЕВОДЫ ==================== */
const TRANSLATIONS = {
  ru: {
    'site.title': 'Партия подотчётного парламента',
    'nav.program': 'Программа',
    'nav.news': 'Новости',
    'nav.games': 'Игры',
    'nav.quizzes': 'Викторины и тесты',
    'nav.generator': 'Генераторы',
    'nav.contactOther': 'Связь и прочее',
    'back': 'На главную',
    'section.creativity': 'Наше творчество',
    'section.hymn': 'Наш гимн',
    'section.sections': 'Разделы сайта',
    'section.program': 'Программа партии',
    'section.news': 'Новости',
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
    'nav.news': 'Навіны',
    'nav.games': 'Гульні',
    'nav.quizzes': 'Віктарыны і тэсты',
    'nav.generator': 'Генератары',
    'nav.contactOther': 'Сувязь і іншае',
    'back': 'На галоўную',
    'section.creativity': 'Наша творчасць',
    'section.hymn': 'Наш гімн',
    'section.sections': 'Раздзелы сайта',
    'section.program': 'Праграма партыі',
    'section.news': 'Навіны',
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
    'nav.news': 'חדשות',
    'nav.games': 'משחקים',
    'nav.quizzes': 'חידונים ומבחנים',
    'nav.generator': 'מחוללים',
    'nav.contactOther': 'יצירת קשר ושונות',
    'back': 'לדף הבית',
    'section.creativity': 'היצירה שלנו',
    'section.hymn': 'ההמנון שלנו',
    'section.sections': 'מדורי האתר',
    'section.program': 'תוכנית המפלגה',
    'section.news': 'חדשות',
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
    'nav.news': 'الأخبار',
    'nav.games': 'الألعاب',
    'nav.quizzes': 'اختبارات ومسابقات',
    'nav.generator': 'المولّدات',
    'nav.contactOther': 'الاتصال وأخرى',
    'back': 'إلى الرئيسية',
    'section.creativity': 'إبداعنا',
    'section.hymn': 'نشيدنا',
    'section.sections': 'أقسام الموقع',
    'section.program': 'برنامج الحزب',
    'section.news': 'الأخبار',
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


/* ==================== ЛУЧИ ОТ ЛОГОТИПА (только главная) ==================== */
(function () {
  const logo = document.getElementById('siteLogo');
  const overlay = document.getElementById('raysOverlay');
  if (!logo || !overlay) return;

  logo.addEventListener('click', (e) => {
    e.preventDefault();

    overlay.innerHTML = '';
    overlay.classList.add('active');

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
      window.location.href = 'index.html';
    }, 1600);
  });
})();


/* ==================== ВСПЛЫВАЮЩЕЕ ОКНО (раз за сессию) ==================== */
(function () {
  const overlay = document.getElementById('popupOverlay');
  const closeBtn = document.getElementById('popupClose');
  if (!overlay || !closeBtn) return;

  // Проверяем, показывали ли уже в этой сессии
  if (sessionStorage.getItem('popupShown') === 'true') {
    overlay.classList.add('hidden');
  } else {
    overlay.classList.remove('hidden');
    sessionStorage.setItem('popupShown', 'true');
  }

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


/* ==================== КАРУСЕЛЬ ФОТО ==================== */
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


/* ==================== КАРУСЕЛЬ НОВОСТЕЙ ==================== */
(function () {
  const track = document.getElementById('newsTrack');
  if (!track) return;
  const prevBtn = document.getElementById('newsPrev');
  const nextBtn = document.getElementById('newsNext');
  const dotsContainer = document.getElementById('newsDots');
  const cards = Array.from(track.querySelectorAll('.news-card'));
  const total = cards.length;
  let current = 0;

  // Создаём точки
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'news-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Новость ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.news-dot');
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
  }

  function goTo(i) {
    current = (i + total) % total;
    update();
  }

  function goNext() { goTo(current + 1); }
  function goPrev() { goTo(current - 1); }

  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrev);

  // Свайпы
  let tX = 0, tY = 0;
  track.addEventListener('touchstart', (e) => {
    tX = e.touches[0].clientX;
    tY = e.touches[0].clientY;
  }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tX;
    const dy = e.changedTouches[0].clientY - tY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) goPrev();
    else goNext();
  }, { passive: true });

  // Клавиатура
  window.addEventListener('keydown', (e) => {
    const rect = track.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
  });

  update();
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

/* ==================== ИГРА 2048 ==================== */
(function () {
  const boardEl = document.getElementById('g2048Board');
  const bgEl = document.getElementById('g2048Bg');
  if (!boardEl || !bgEl) return;
  const scoreEl = document.getElementById('g2048Score');
  const bestEl = document.getElementById('g2048Best');
  const resetBtn = document.getElementById('g2048Reset');
  const SIZE = 4, GAP = 8, PAD = 8;
  let grid = [], tiles = [], nextId = 1, score = 0;
  let best = parseInt(localStorage.getItem('g2048best') || '0', 10);
  let gameOver = false, won = false, animating = false;
  if (bestEl) bestEl.textContent = best;

  function buildBg() {
    bgEl.innerHTML = '';
    for (let i = 0; i < SIZE * SIZE; i++) {
      const cell = document.createElement('div');
      cell.className = 'g2048-bg-cell';
      bgEl.appendChild(cell);
    }
  }

  function tileTransform(row, col) {
    const boardSize = boardEl.clientWidth;
    const cellSize = (boardSize - 2 * PAD - (SIZE - 1) * GAP) / SIZE;
    const step = cellSize + GAP;
    return `translate(${PAD + col * step}px, ${PAD + row * step}px)`;
  }

  function setTileSize(el) {
    const boardSize = boardEl.clientWidth;
    const cellSize = (boardSize - 2 * PAD - (SIZE - 1) * GAP) / SIZE;
    el.style.width = cellSize + 'px';
    el.style.height = cellSize + 'px';
  }

  function createTileElement(tile) {
    const el = document.createElement('div');
    el.className = 'g2048-tile';
    el.textContent = tile.value;
    el.setAttribute('data-v', tile.value);
    if (tile.isNew) el.classList.add('new');
    if (tile.merged) el.classList.add('merged');
    setTileSize(el);
    const tf = tileTransform(tile.row, tile.col);
    el.style.setProperty('--tf', tf);
    el.style.transform = tf;
    boardEl.appendChild(el);
    tile.el = el;
    if (tile.isNew || tile.merged) {
      setTimeout(() => {
        el.classList.remove('new');
        el.classList.remove('merged');
        tile.isNew = false;
        tile.merged = false;
      }, 220);
    }
  }

  function emptyGrid() {
    return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  }

  function addRandomTile() {
    const empty = [];
    for (let r = 0; r < SIZE; r++)
      for (let c = 0; c < SIZE; c++)
        if (grid[r][c] === 0) empty.push({ r, c });
    if (!empty.length) return null;
    const { r, c } = empty[Math.floor(Math.random() * empty.length)];
    const value = Math.random() < 0.9 ? 2 : 4;
    grid[r][c] = value;
    const tile = { id: nextId++, value, row: r, col: c, isNew: true, merged: false };
    tiles.push(tile);
    return tile;
  }

  function fullRender() {
    Array.from(boardEl.querySelectorAll('.g2048-tile')).forEach(el => el.remove());
    tiles.forEach(tile => createTileElement(tile));
  }

  function init() {
    grid = emptyGrid(); tiles = []; nextId = 1; score = 0;
    gameOver = false; won = false; animating = false;
    if (scoreEl) scoreEl.textContent = '0';
    Array.from(boardEl.querySelectorAll('.g2048-tile')).forEach(el => el.remove());
    addRandomTile(); addRandomTile();
    fullRender();
  }

  function slide(rowArr) {
    const filtered = rowArr.filter(v => v !== 0);
    const result = [];
    let gained = 0, i = 0;
    while (i < filtered.length) {
      if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
        const newVal = filtered[i] * 2;
        result.push(newVal); gained += newVal; i += 2;
      } else { result.push(filtered[i]); i++; }
    }
    while (result.length < SIZE) result.push(0);
    return { result, gained };
  }

  function move(dir) {
    if (gameOver || animating) return;
    const before = JSON.stringify(grid);
    let gained = 0;
    const newGrid = emptyGrid();
    const lines = (dir === 'left' || dir === 'right') ? 'row' : 'col';
    const reverse = (dir === 'right' || dir === 'down');

    for (let idx = 0; idx < SIZE; idx++) {
      let lineTiles;
      if (lines === 'row') {
        lineTiles = tiles.filter(t => t.row === idx);
        lineTiles.sort((a, b) => a.col - b.col);
      } else {
        lineTiles = tiles.filter(t => t.col === idx);
        lineTiles.sort((a, b) => a.row - b.row);
      }
      if (reverse) lineTiles.reverse();
      const values = lineTiles.map(t => t.value);
      const { result, gained: g } = slide(values);
      gained += g;
      for (let pos = 0; pos < SIZE; pos++) {
        if (lines === 'row') {
          const c = reverse ? (SIZE - 1 - pos) : pos;
          newGrid[idx][c] = result[pos];
        } else {
          const r = reverse ? (SIZE - 1 - pos) : pos;
          newGrid[r][idx] = result[pos];
        }
      }
      let srcIdx = 0, dstIdx = 0;
      while (srcIdx < lineTiles.length) {
        if (srcIdx + 1 < lineTiles.length && lineTiles[srcIdx].value === lineTiles[srcIdx + 1].value) {
          const t1 = lineTiles[srcIdx], t2 = lineTiles[srcIdx + 1];
          const newValue = t1.value * 2;
          t1.value = newValue; t1.merged = true;
          const targetPos = reverse ? (SIZE - 1 - dstIdx) : dstIdx;
          if (lines === 'row') { t1.row = idx; t1.col = targetPos; }
          else { t1.col = idx; t1.row = targetPos; }
          t2.removeAfterAnim = true;
          if (lines === 'row') { t2.row = idx; t2.col = targetPos; }
          else { t2.col = idx; t2.row = targetPos; }
          dstIdx++; srcIdx += 2;
        } else {
          const t = lineTiles[srcIdx];
          const targetPos = reverse ? (SIZE - 1 - dstIdx) : dstIdx;
          if (lines === 'row') { t.row = idx; t.col = targetPos; }
          else { t.col = idx; t.row = targetPos; }
          dstIdx++; srcIdx++;
        }
      }
    }

    if (JSON.stringify(newGrid) !== before) {
      grid = newGrid;
      score += gained;
      if (scoreEl) scoreEl.textContent = score;
      if (score > best) {
        best = score;
        localStorage.setItem('g2048best', String(best));
        if (bestEl) bestEl.textContent = best;
      }
      animating = true;
      tiles.forEach(t => {
        if (t.el) {
          const tf = tileTransform(t.row, t.col);
          t.el.style.setProperty('--tf', tf);
          t.el.style.transform = tf;
          if (t.merged) {
            t.el.textContent = t.value;
            t.el.setAttribute('data-v', t.value);
          }
        }
      });
      setTimeout(() => {
        tiles = tiles.filter(t => {
          if (t.removeAfterAnim) {
            if (t.el && t.el.parentNode) t.el.parentNode.removeChild(t.el);
            return false;
          }
          return true;
        });
        tiles.forEach(t => { t.merged = false; });
        addRandomTile();
        Array.from(boardEl.querySelectorAll('.g2048-tile')).forEach(el => el.remove());
        tiles.forEach(t => createTileElement(t));
        animating = false;
        if (!won && grid.some(row => row.some(v => v >= 2048))) {
          won = true;
          setTimeout(() => alert('Вы собрали 2048!'), 100);
        }
        if (!canMove()) {
          gameOver = true;
          setTimeout(() => alert(`Игра окончена! Счёт: ${score}`), 100);
        }
      }, 130);
    }
  }

  function canMove() {
    for (let r = 0; r < SIZE; r++)
      for (let c = 0; c < SIZE; c++) {
        if (grid[r][c] === 0) return true;
        if (c < SIZE - 1 && grid[r][c] === grid[r][c + 1]) return true;
        if (r < SIZE - 1 && grid[r][c] === grid[r + 1][c]) return true;
      }
    return false;
  }

  const upBtn = document.getElementById('g2048Up');
  const downBtn = document.getElementById('g2048Down');
  const leftBtn = document.getElementById('g2048Left');
  const rightBtn = document.getElementById('g2048Right');
  if (upBtn) upBtn.addEventListener('click', () => move('up'));
  if (downBtn) downBtn.addEventListener('click', () => move('down'));
  if (leftBtn) leftBtn.addEventListener('click', () => move('left'));
  if (rightBtn) rightBtn.addEventListener('click', () => move('right'));

  window.addEventListener('keydown', (e) => {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const rect = boardEl.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (e.key === 'ArrowLeft') move('left');
    else if (e.key === 'ArrowRight') move('right');
    else if (e.key === 'ArrowUp') move('up');
    else if (e.key === 'ArrowDown') move('down');
    e.preventDefault();
  });

  let tX = 0, tY = 0;
  boardEl.addEventListener('touchstart', (e) => {
    tX = e.touches[0].clientX;
    tY = e.touches[0].clientY;
  }, { passive: true });
  boardEl.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tX;
    const dy = e.changedTouches[0].clientY - tY;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 30) return;
    if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 'right' : 'left');
    else move(dy > 0 ? 'down' : 'up');
  }, { passive: true });

  window.addEventListener('resize', () => {
    Array.from(boardEl.querySelectorAll('.g2048-tile')).forEach((el, i) => {
      const tile = tiles[i];
      if (!tile) return;
      setTileSize(el);
      const tf = tileTransform(tile.row, tile.col);
      el.style.setProperty('--tf', tf);
      el.style.transform = tf;
    });
  });

  if (resetBtn) resetBtn.addEventListener('click', init);
  buildBg();
  init();
})();


/* ==================== ИГРА САПЁР ==================== */
(function () {
  const boardEl = document.getElementById('mineBoard');
  if (!boardEl) return;
  const mineCountEl = document.getElementById('mineCount');
  const mineTimeEl = document.getElementById('mineTime');
  const mineStateEl = document.getElementById('mineState');
  const resetBtn = document.getElementById('mineReset');
  const SIZE = 16, MINES = 40;
  let board = [], gameOver = false, started = false;
  let timer = null, seconds = 0, flagsPlaced = 0;

  function init() {
    board = []; gameOver = false; started = false;
    seconds = 0; flagsPlaced = 0;
    if (timer) clearInterval(timer);
    timer = null;
    if (mineCountEl) mineCountEl.textContent = MINES;
    if (mineTimeEl) mineTimeEl.textContent = '0';
    if (mineStateEl) mineStateEl.textContent = '🙂';
    for (let i = 0; i < SIZE * SIZE; i++) {
      board.push({ mine: false, revealed: false, flagged: false, neighbors: 0 });
    }
    render();
  }

  function getNeighbors(index) {
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const res = [];
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const r = row + dr, c = col + dc;
        if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) res.push(r * SIZE + c);
      }
    return res;
  }

  function placeMines(firstIndex) {
    let placed = 0;
    const forbidden = getNeighbors(firstIndex).concat([firstIndex]);
    while (placed < MINES) {
      const idx = Math.floor(Math.random() * SIZE * SIZE);
      if (board[idx].mine || forbidden.includes(idx)) continue;
      board[idx].mine = true;
      placed++;
    }
    for (let i = 0; i < board.length; i++) {
      if (board[i].mine) continue;
      board[i].neighbors = getNeighbors(i).filter(n => board[n].mine).length;
    }
  }

  function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
      seconds++;
      if (mineTimeEl) mineTimeEl.textContent = seconds;
    }, 1000);
  }

  function stopTimer() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function render() {
    boardEl.innerHTML = '';
    boardEl.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
    boardEl.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`;
    board.forEach((cell, index) => {
      const el = document.createElement('div');
      el.className = 'mine-cell';
      if (cell.revealed) {
        el.classList.add('revealed');
        if (cell.mine) { el.classList.add('mine'); el.textContent = '💣'; }
        else if (cell.neighbors > 0) {
          el.textContent = cell.neighbors;
          el.setAttribute('data-n', cell.neighbors);
        }
      } else if (cell.flagged) {
        el.classList.add('flagged');
        el.textContent = '🚩';
      }
      el.addEventListener('click', () => handleReveal(index));
      el.addEventListener('contextmenu', (e) => { e.preventDefault(); handleFlag(index); });
      let touchTimer = null;
      el.addEventListener('touchstart', () => {
        touchTimer = setTimeout(() => { handleFlag(index); touchTimer = null; }, 500);
      }, { passive: true });
      el.addEventListener('touchend', () => {
        if (touchTimer) { clearTimeout(touchTimer); touchTimer = null; }
      });
      boardEl.appendChild(el);
    });
  }

  function handleReveal(index) {
    if (gameOver || board[index].flagged || board[index].revealed) return;
    if (!started) { started = true; placeMines(index); startTimer(); }
    if (board[index].mine) {
      board[index].revealed = true;
      gameOver = true;
      stopTimer();
      if (mineStateEl) mineStateEl.textContent = '😵';
      board.forEach(c => { if (c.mine) c.revealed = true; });
      render();
      return;
    }
    openCell(index);
    render();
    checkWin();
  }

  function openCell(index) {
    const cell = board[index];
    if (cell.revealed || cell.flagged) return;
    cell.revealed = true;
    if (cell.neighbors === 0 && !cell.mine) {
      getNeighbors(index).forEach(n => {
        if (!board[n].revealed && !board[n].flagged) openCell(n);
      });
    }
  }

  function handleFlag(index) {
    if (gameOver || board[index].revealed) return;
    if (board[index].flagged) { board[index].flagged = false; flagsPlaced--; }
    else { board[index].flagged = true; flagsPlaced++; }
    if (mineCountEl) mineCountEl.textContent = MINES - flagsPlaced;
    render();
    checkWin();
  }

  function checkWin() {
    if (board.every(c => c.revealed || c.mine) && !gameOver) {
      gameOver = true;
      stopTimer();
      if (mineStateEl) mineStateEl.textContent = '😎';
      board.forEach(c => { if (c.mine) c.flagged = true; });
      render();
      setTimeout(() => alert(`Победа! Время: ${seconds} сек.`), 200);
    }
  }

  if (resetBtn) resetBtn.addEventListener('click', init);
  init();
})();


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
