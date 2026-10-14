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

  const TOTAL_PAGES = 7;
  let opened = false;
  let currentSpread = 0;
  let flipping = false;

  const spreads = [];
  for (let i = 0; i < TOTAL_PAGES; i += 2) {
    spreads.push({
      left: i,
      right: i + 1 < TOTAL_PAGES ? i + 1 : null
    });
  }

  function renderSpread() {
    spread.innerHTML = '';

    const s = spreads[currentSpread];
    const leftNum = s.left + 1;
    const rightNum = s.right !== null ? s.right + 1 : null;

    const leftPage = document.createElement('div');
    leftPage.className = 'diary-page diary-page-left';
    const leftContent = document.createElement('div');
    leftContent.className = 'diary-page-content';
    leftPage.appendChild(leftContent);
    const leftNumber = document.createElement('span');
    leftNumber.className = 'diary-page-number';
    leftNumber.textContent = leftNum;
    leftPage.appendChild(leftNumber);
    leftPage.addEventListener('click', nextSpread);
    spread.appendChild(leftPage);

    const rightPage = document.createElement('div');
    rightPage.className = 'diary-page diary-page-right';
    const rightContent = document.createElement('div');
    rightContent.className = 'diary-page-content';
    rightPage.appendChild(rightContent);
    if (rightNum !== null) {
      const rightNumber = document.createElement('span');
      rightNumber.className = 'diary-page-number';
      rightNumber.textContent = rightNum;
      rightPage.appendChild(rightNumber);
    }
    rightPage.addEventListener('click', nextSpread);
    spread.appendChild(rightPage);
  }

  function nextSpread() {
    if (!opened) return;
    if (flipping) return;
    if (currentSpread >= spreads.length - 1) return;

    flipping = true;

    const leftPage = spread.querySelector('.diary-page-left');
    const rightPage = spread.querySelector('.diary-page-right');

    leftPage.classList.add('flipping-left');
    rightPage.classList.add('flipping-right');

    setTimeout(() => {
      currentSpread++;
      renderSpread();

      const newLeft = spread.querySelector('.diary-page-left');
      const newRight = spread.querySelector('.diary-page-right');
      newLeft.classList.add('appear-left');
      newRight.classList.add('appear-right');

      setTimeout(() => {
        newLeft.classList.remove('appear-left');
        newRight.classList.remove('appear-right');
        flipping = false;
      }, 600);
    }, 800);
  }

  cover.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    book.classList.remove('closed');
    book.classList.add('opened');
    renderSpread();
  });

  renderSpread();
})();