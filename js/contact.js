/* ==================== ФОРМА СВЯЗИ (Web3Forms) ==================== */
(function () {
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  const contactBtn = document.getElementById('contactBtn');
  if (!contactForm || !contactStatus) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const message = (formData.get('message') || '').toString().trim();

    if (!message) {
      contactStatus.textContent = 'Пожалуйста, введите сообщение.';
      contactStatus.style.color = '#e74c3c';
      return;
    }

    const originalText = contactBtn ? contactBtn.textContent : '';
    if (contactBtn) {
      contactBtn.disabled = true;
      contactBtn.textContent = 'Отправка...';
    }
    contactStatus.textContent = '';
    contactStatus.style.color = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();

      if (result.success) {
        contactStatus.textContent = 'Спасибо! Ваше сообщение отправлено.';
        contactStatus.style.color = '#27ae60';
        contactForm.reset();
      } else {
        contactStatus.textContent = 'Ошибка: ' + (result.message || 'не удалось отправить.');
        contactStatus.style.color = '#e74c3c';
      }
    } catch (err) {
      console.error('Ошибка отправки:', err);
      contactStatus.textContent = 'Ошибка сети. Попробуйте позже.';
      contactStatus.style.color = '#e74c3c';
    } finally {
      if (contactBtn) {
        contactBtn.disabled = false;
        contactBtn.textContent = originalText;
      }
      setTimeout(() => { contactStatus.textContent = ''; }, 5000);
    }
  });
})();