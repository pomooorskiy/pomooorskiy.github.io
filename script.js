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