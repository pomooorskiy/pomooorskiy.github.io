/* ==================== КАРУСЕЛЬ ФОТО (3D, 11 фото) ==================== */
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

      // Зацикливание
      if (diff > Math.floor(total / 2)) diff -= total;
      else if (diff < -Math.floor(total / 2)) diff += total;

      if (diff === 0) card.classList.add('active');
      else if (diff === -1) card.classList.add('prev-1');
      else if (diff === -2) card.classList.add('prev-2');
      else if (diff === 1) card.classList.add('next-1');
      else if (diff === 2) card.classList.add('next-2');
    });
  }

  // Клик по карточке — сделать активной
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

  // Стрелки клавиатуры
  window.addEventListener('keydown', (e) => {
    // Только если карусель видна на экране
    const container = document.querySelector('.coverflow-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    }

    if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
  });

  // Свайпы для мобильных
  const container = document.querySelector('.coverflow-container');
  if (container) {
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
  }

  updateCoverflow();
})();