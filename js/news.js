/* ==================== 3D-КАРУСЕЛЬ НОВОСТЕЙ ==================== */
(function () {
  const stage = document.getElementById('newsStage');
  const track = document.getElementById('newsTrack');
  if (!stage || !track) return;

  const prevBtn = document.getElementById('newsPrev');
  const nextBtn = document.getElementById('newsNext');
  const dotsContainer = document.getElementById('newsDots');
  const cards = Array.from(track.querySelectorAll('.news-card'));
  const total = cards.length;
  let current = 0;

  // Геометрия 3D-карусели
  const ANGLE_STEP = 30;          // градусов между карточками
  const RADIUS = 700;             // радиус круга в px
  const SIDE_ANGLE = ANGLE_STEP;  // угол для соседних

  function update() {
    // Поворачиваем трек так, чтобы активная карточка была впереди
    const trackAngle = -current * ANGLE_STEP;
    track.style.transform = `translateX(-50%) rotateY(${trackAngle}deg)`;

    cards.forEach((card, i) => {
      // Разница между i и current с учётом зацикливания
      let diff = i - current;
      if (diff > total / 2) diff -= total;
      else if (diff < -total / 2) diff += total;

      // Расставляем карточки по кругу
      const angle = diff * ANGLE_STEP;
      const rad = angle * Math.PI / 180;
      const x = Math.sin(rad) * RADIUS;
      const z = Math.cos(rad) * RADIUS - RADIUS; // сдвигаем так, чтобы активная была на переднем плане

      const absDiff = Math.abs(diff);
      let opacity = 1;
      let filter = 'blur(0) brightness(1)';

      if (absDiff === 0) {
        opacity = 1;
        filter = 'blur(0) brightness(1)';
        card.className = 'news-card active';
      } else if (absDiff === 1) {
        opacity = 0.55;
        filter = 'blur(3px) brightness(0.75)';
        card.className = 'news-card side-left';
      } else if (absDiff === 2) {
        opacity = 0.25;
        filter = 'blur(6px) brightness(0.5)';
        card.className = 'news-card side-far';
      } else {
        opacity = 0;
        filter = 'blur(8px) brightness(0.4)';
        card.className = 'news-card side-far';
      }

      card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg)`;
      card.style.opacity = opacity;
      card.style.filter = filter;
      card.style.zIndex = 100 - absDiff;
    });

    // Точки
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.news-dot');
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
  }

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
  stage.addEventListener('touchstart', (e) => {
    tX = e.touches[0].clientX;
    tY = e.touches[0].clientY;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tX;
    const dy = e.changedTouches[0].clientY - tY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) goPrev();
    else goNext();
  }, { passive: true });

  // Клавиатура — только если карусель видна
  window.addEventListener('keydown', (e) => {
    const rect = stage.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
  });

  // Пересчёт при ресайзе (на случай, если меняется ширина)
  window.addEventListener('resize', update);

  update();
})();


/* ==================== ДНЕВНИК КАНЦЛЕРА ==================== */
(function () {
  const book = document.getElementById('diaryBook');
  const cover = document.getElementById('diaryCover');
  const pagesContainer = document.getElementById('diaryPages');
  if (!book || !cover || !pagesContainer) return;

  const TOTAL_PAGES = 7;
  let currentPage = 0;
  let opened = false;

  // Создаём страницы
  function buildPages() {
    pagesContainer.innerHTML = '';
    for (let i = 0; i < TOTAL_PAGES; i++) {
      const page = document.createElement('div');
      page.className = 'diary-page';
      page.dataset.index = i;
      if (i === 0) page.classList.add('active');

      const content = document.createElement('div');
      content.className = 'diary-page-content';
      page.appendChild(content);

      const number = document.createElement('span');
      number.className = 'diary-page-number';
      number.textContent = (i + 1);
      page.appendChild(number);

      // Скрываем все страницы, кроме первой
      if (i > 0) {
        page.style.transform = 'rotateY(-180deg)';
        page.style.opacity = '0';
        page.style.pointerEvents = 'none';
      }

      page.addEventListener('click', () => nextPage());

      pagesContainer.appendChild(page);
    }
  }

  function nextPage() {
    if (!opened) return;
    if (currentPage >= TOTAL_PAGES - 1) return;

    const pages = pagesContainer.querySelectorAll('.diary-page');
    const current = pages[currentPage];
    const next = pages[currentPage + 1];

    // Текущая переворачивается
    current.classList.add('flipped');
    current.style.transform = 'rotateY(-180deg)';
    current.style.opacity = '0';
    current.style.pointerEvents = 'none';

    // Следующая появляется
    next.classList.add('active');
    next.style.transform = 'rotateY(0deg)';
    next.style.opacity = '1';
    next.style.pointerEvents = 'auto';

    currentPage++;
  }

  // Открытие дневника — клик по обложке
  cover.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    book.classList.remove('closed');
    // Показываем страницы
    pagesContainer.style.opacity = '1';
    pagesContainer.style.pointerEvents = 'auto';
    // Скрываем обложку
    cover.style.transform = 'rotateY(-160deg)';
    cover.style.opacity = '0';
    cover.style.pointerEvents = 'none';
  });

  buildPages();
})();