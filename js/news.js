/* ==================== КАРУСЕЛЬ НОВОСТЕЙ (плоская, 3D) ==================== */
(function () {
  const container = document.getElementById('newsStage');
  const prevBtn = document.getElementById('newsPrev');
  const nextBtn = document.getElementById('newsNext');
  const dotsContainer = document.getElementById('newsDots');
  if (!container) return;

  const cards = Array.from(container.querySelectorAll('.news-card'));
  const total = cards.length;
  let current = 0;

  function update() {
    cards.forEach((card, i) => {
      card.className = 'news-card';

      let diff = i - current;
      if (diff > total / 2) diff -= total;
      else if (diff < -total / 2) diff += total;

      if (diff === 0) card.classList.add('active');
      else if (diff === -1) card.classList.add('prev-1');
      else if (diff === 1) card.classList.add('next-1');
      else if (diff === -2) card.classList.add('prev-2');
      else if (diff === 2) card.classList.add('next-2');
      else card.classList.add('hidden-card');
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.news-dot');
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
  }

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

  function goTo(i) {
    current = (i + total) % total;
    update();
  }
  function goNext() { goTo(current + 1); }
  function goPrev() { goTo(current - 1); }

  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrev);

  let tX = 0, tY = 0;
  container.addEventListener('touchstart', (e) => {
    tX = e.touches[0].clientX;
    tY = e.touches[0].clientY;
  }, { passive: true });
  container.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tX;
    const dy = e.changedTouches[0].clientY - tY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) goPrev();
    else goNext();
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    const rect = container.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
  });

  update();
})();


/* ==================== ДНЕВНИК КАНЦЛЕРА (разворот) ==================== */
(function () {
  const book = document.getElementById('diaryBook');
  const cover = document.getElementById('diaryCover');
  const spread = document.getElementById('diarySpread');
  if (!book || !cover || !spread) return;

  const TOTAL_PAGES = 15;
  const PAGE_TEXT = ['ГИМНАЗИЯ', 'САВЕЛИЙ', 'ПОБЕДА'];

  let opened = false;
  let currentLeft = 0; // индекс левой страницы (0, 2, 4, ...)
  let flipping = false;

  // Создаём страницу
  function createPage(index) {
    const page = document.createElement('div');
    page.className = 'diary-page ' + (index % 2 === 0 ? 'diary-page-left' : 'diary-page-right');

    const content = document.createElement('div');
    content.className = 'diary-page-content';

    PAGE_TEXT.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word;
      content.appendChild(span);
    });

    page.appendChild(content);

    const num = document.createElement('span');
    num.className = 'diary-page-number';
    num.textContent = index + 1;
    page.appendChild(num);

    return page;
  }

  function renderSpread() {
    spread.innerHTML = '';

    // Левая страница
    const leftPage = createPage(currentLeft);
    leftPage.addEventListener('click', (e) => {
      e.stopPropagation();
      goPrev();
    });
    spread.appendChild(leftPage);

    // Правая страница (если есть)
    const rightIndex = currentLeft + 1;
    if (rightIndex < TOTAL_PAGES) {
      const rightPage = createPage(rightIndex);
      rightPage.addEventListener('click', (e) => {
        e.stopPropagation();
        goNext();
      });
      spread.appendChild(rightPage);
    } else {
      // Пустая правая страница (заглушка)
      const empty = document.createElement('div');
      empty.className = 'diary-page diary-page-right';
      const num = document.createElement('span');
      num.className = 'diary-page-number';
      num.textContent = rightIndex + 1;
      empty.appendChild(num);
      spread.appendChild(empty);
    }
  }

  // Вперёд (клик по правой)
  function goNext() {
    if (!opened || flipping) return;
    if (currentLeft + 2 >= TOTAL_PAGES) return;

    flipping = true;

    const leftPage = spread.querySelector('.diary-page-left');
    const rightPage = spread.querySelector('.diary-page-right');

    if (leftPage) leftPage.classList.add('flip-next-left');
    if (rightPage) rightPage.classList.add('flip-next-right');

    setTimeout(() => {
      currentLeft += 2;
      renderSpread();

      const newLeft = spread.querySelector('.diary-page-left');
      const newRight = spread.querySelector('.diary-page-right');
      if (newLeft) newLeft.classList.add('appear-left');
      if (newRight) newRight.classList.add('appear-right');

      setTimeout(() => {
        if (newLeft) newLeft.classList.remove('appear-left');
        if (newRight) newRight.classList.remove('appear-right');
        flipping = false;
      }, 500);
    }, 700);
  }

  // Назад (клик по левой)
  function goPrev() {
    if (!opened || flipping) return;

    // Если это первая страница — закрываем книгу
    if (currentLeft === 0) {
      closeBook();
      return;
    }

    flipping = true;

    const leftPage = spread.querySelector('.diary-page-left');
    const rightPage = spread.querySelector('.diary-page-right');

    if (leftPage) leftPage.classList.add('flip-prev-left');
    if (rightPage) rightPage.classList.add('flip-prev-right');

    setTimeout(() => {
      currentLeft -= 2;
      renderSpread();

      const newLeft = spread.querySelector('.diary-page-left');
      const newRight = spread.querySelector('.diary-page-right');
      if (newLeft) newLeft.classList.add('appear-left');
      if (newRight) newRight.classList.add('appear-right');

      setTimeout(() => {
        if (newLeft) newLeft.classList.remove('appear-left');
        if (newRight) newRight.classList.remove('appear-right');
        flipping = false;
      }, 500);
    }, 700);
  }

  // Открыть книгу
  function openBook() {
    opened = true;
    currentLeft = 0;
    book.classList.remove('closed');
    book.classList.add('opened');
    renderSpread();
  }

  // Закрыть книгу
  function closeBook() {
    opened = false;
    currentLeft = 0;
    book.classList.remove('opened');
    book.classList.add('closed');
    spread.innerHTML = '';
  }

  // Клик по обложке — открыть
  cover.addEventListener('click', () => {
    if (!opened) openBook();
  });

  // Инициализация — закрыто
  book.classList.add('closed');
})();
