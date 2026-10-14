/* ==================== ГЛАВНЫЙ СКРИПТ (для всех страниц) ==================== */

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

  // Показываем только один раз за сессию
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
(function () {
  const burgerBtn = document.getElementById('burgerBtn');
  const sideNav = document.getElementById('sideNav');
  const sideNavOverlay = document.getElementById('sideNavOverlay');
  if (!burgerBtn || !sideNav || !sideNavOverlay) return;

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
})();


/* ==================== ТЁМНАЯ ТЕМА (авто при первом входе) ==================== */
(function () {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    // Пользователь уже выбирал — используем его выбор
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
  } else {
    // Первый вход — определяем по системе
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark');
      if (themeIcon) themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
    });
  }
})();


/* ==================== ПАРАЛЛАКС-ФОН (только главная) ==================== */
(function () {
  const parallaxBg = document.getElementById('parallaxBg');
  if (!parallaxBg) return;

  window.addEventListener('scroll', () => {
    parallaxBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
})();


/* ==================== АНИМАЦИЯ ПОЯВЛЕНИЯ ==================== */
(function () {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => observer.observe(el));
})();


/* ==================== КНОПКА НАВЕРХ ==================== */
(function () {
  const scrollTopBtn = document.getElementById('scrollTop');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ==================== СЧЁТЧИК СЕКУНД (только главная) ==================== */
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