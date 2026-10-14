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
    'section.diary': 'Дневник канцлера',
    'section.games': 'Игры',
    'section.quizzes': 'Викторины и тесты',
    'section.generator': 'Генератор движухи',
    'section.promises': 'Генератор обещаний',
    'section.horoscope': 'Генератор гороскопа',
    'section.partbilet': 'Генератор партбилетов',
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
    'horoscope.empty': 'Выберите знак зодиака и нажмите «Давай!»',
    'partbilet.namePlaceholder': 'Введите ФИО',
    'partbilet.uploadPhoto': 'Загрузить фото',
    'partbilet.title': 'Партийный билет',
    'partbilet.role': 'Участник партии',
    'partbilet.issued': 'Выдан',
    'partbilet.download': 'Скачать билет',
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
    'section.diary': 'Дзённік канцлера',
    'section.games': 'Гульні',
    'section.quizzes': 'Віктарыны і тэсты',
    'section.generator': 'Генератар руху',
    'section.promises': 'Генератар абяцанняў',
    'section.horoscope': 'Генератар гароскопа',
    'section.partbilet': 'Генератар партбілетаў',
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
    'horoscope.empty': 'Выберыце знак задыяку і націсніце «Давай!»',
    'partbilet.namePlaceholder': 'Увядзіце ПІБ',
    'partbilet.uploadPhoto': 'Загрузіць фота',
    'partbilet.title': 'Партыйны білет',
    'partbilet.role': 'Удзельнік партыі',
    'partbilet.issued': 'Выдадзены',
    'partbilet.download': 'Спампаваць білет',
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
    'section.diary': 'יומן הקנצלר',
    'section.games': 'משחקים',
    'section.quizzes': 'חידונים ומבחנים',
    'section.generator': 'מחולל תנועה',
    'section.promises': 'מחולל הבטחות',
    'section.horoscope': 'מחולל הורוסקופ',
    'section.partbilet': 'מחולל כרטיסי מפלגה',
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
    'horoscope.empty': 'בחר מזל ולחץ "קדימה!"',
    'partbilet.namePlaceholder': 'הזן שם מלא',
    'partbilet.uploadPhoto': 'העלה תמונה',
    'partbilet.title': 'כרטיס מפלגה',
    'partbilet.role': 'חבר מפלגה',
    'partbilet.issued': 'הונפק',
    'partbilet.download': 'הורד כרטיס',
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
    'section.diary': 'مذكرات المستشار',
    'section.games': 'الألعاب',
    'section.quizzes': 'اختبارات ومسابقات',
    'section.generator': 'مولّد الحركة',
    'section.promises': 'مولّد الوعود',
    'section.horoscope': 'مولّد الأبراج',
    'section.partbilet': 'مولّد بطاقات الحزب',
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
    'horoscope.empty': 'اختر برجك واضغط "هيا!"',
    'partbilet.namePlaceholder': 'أدخل الاسم الكامل',
    'partbilet.uploadPhoto': 'تحميل صورة',
    'partbilet.title': 'بطاقة الحزب',
    'partbilet.role': 'عضو الحزب',
    'partbilet.issued': 'صدر في',
    'partbilet.download': 'تحميل البطاقة',
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

/* Применяем сохранённый язык сразу */
const savedLang = localStorage.getItem('lang');
applyTranslations(savedLang && TRANSLATIONS[savedLang] ? savedLang : 'ru');

/* Переключатель языка */
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