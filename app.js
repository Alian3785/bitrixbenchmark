const slangWords = [
  {
    term: "Кринж",
    accent: "кри́нж",
    speak: "кринж",
    category: "Русский сленг",
    tone: "Неловкость",
    level: 0,
    meaning: "Неловко, стыдно или так странно, что хочется закрыть вкладку жизни.",
    plain: "стыдная неловкость",
    example: "Он сказал «йоу, молодежь» на планерке. Это был чистый кринж.",
    source: "общий молодежный сленг"
  },
  {
    term: "Делулу",
    accent: "делулу́",
    speak: "делулу",
    category: "Мем-психология",
    tone: "Ирония",
    level: 0,
    meaning: "Милое самообманное состояние: веришь в невозможное и называешь это планом.",
    plain: "ироничный самообман",
    example: "Я делулу, если думаю, что выучу весь курс за один вечер.",
    source: "Gen Z / Gen Alpha slang"
  },
  {
    term: "Вайб",
    accent: "ва́йб",
    speak: "вайб",
    category: "Русский сленг",
    tone: "Атмосфера",
    level: 0,
    meaning: "Общее настроение, ощущение или атмосфера от человека, места или ситуации.",
    plain: "атмосфера и настроение",
    example: "У этой кофейни вайб «сдам дедлайн и стану другим человеком».",
    source: "Грамота.ру"
  },
  {
    term: "База",
    accent: "ба́за",
    speak: "база",
    category: "Русский сленг",
    tone: "Одобрение",
    level: 0,
    meaning: "Полное согласие: сказано правильно, спорить бессмысленно.",
    plain: "сильное согласие",
    example: "«Спать важнее пятого эпизода подряд». База.",
    source: "мемный сленг"
  },
  {
    term: "Имба",
    accent: "и́мба",
    speak: "имба",
    category: "Игры и мемы",
    tone: "Восторг",
    level: 0,
    meaning: "Что-то слишком сильное, крутое или явно лучше остальных вариантов.",
    plain: "очень крутая вещь",
    example: "Эта шпаргалка по ударениям — имба.",
    source: "Brand Analytics / vc.ru"
  },
  {
    term: "Окак",
    accent: "ока́к",
    speak: "окак",
    category: "Мемы",
    tone: "Удивление",
    level: 0,
    meaning: "Короткая реакция на внезапный абсурд, удивление или странный факт.",
    plain: "удивленное «ну надо же»",
    example: "Ты уже прошел три урока подряд? Окак.",
    source: "Brand Analytics / vc.ru"
  },
  {
    term: "Скуф",
    accent: "ску́ф",
    speak: "скуф",
    category: "Типажи",
    tone: "Колкость",
    level: 1,
    meaning: "Мемный образ несовременного взрослого с усталым бытом и консервативным вкусом.",
    plain: "несовременный взрослый типаж",
    example: "Сказал «в мои годы такого не было» — минус аура, плюс скуф-режим.",
    source: "Грамота.ру"
  },
  {
    term: "Пов",
    accent: "по́в",
    speak: "пов",
    category: "Видео-сленг",
    tone: "Формат",
    level: 1,
    meaning: "Point of view: подпись, которая предлагает представить ситуацию от чьего-то лица.",
    plain: "точка зрения в мемах",
    example: "Пов: ты открыл Zualinga и понял, что отстал на три тренда.",
    source: "Грамота.ру"
  },
  {
    term: "Нормис",
    accent: "но́рмис",
    speak: "нормис",
    category: "Типажи",
    tone: "Ирония",
    level: 1,
    meaning: "Человек с обычными вкусами, который не слишком глубоко сидит в мемной культуре.",
    plain: "обычный человек вне мемов",
    example: "Нормис спрашивает, почему «Огайо» вдруг прилагательное.",
    source: "Грамота.ру"
  },
  {
    term: "Чекнуть",
    accent: "че́кнуть",
    speak: "чекнуть",
    category: "Русский сленг",
    tone: "Действие",
    level: 1,
    meaning: "Проверить, посмотреть, быстро ознакомиться.",
    plain: "проверить",
    example: "Чекни произношение перед тем, как бросаться словом «делулу».",
    source: "Brand Analytics / vc.ru"
  },
  {
    term: "Тильт",
    accent: "ти́льт",
    speak: "тильт",
    category: "Игры и мемы",
    tone: "Срыв",
    level: 1,
    meaning: "Состояние раздражения и потери контроля после серии неудач.",
    plain: "эмоциональный срыв",
    example: "Три ошибки подряд в аудио-тесте — и ты уже почти в тильте.",
    source: "игровой сленг"
  },
  {
    term: "Краш",
    accent: "кра́ш",
    speak: "краш",
    category: "Отношения",
    tone: "Симпатия",
    level: 1,
    meaning: "Человек, который очень нравится, часто без взаимности и без плана.",
    plain: "объект симпатии",
    example: "Мой краш поставил лайк, я временно делулу.",
    source: "общий молодежный сленг"
  },
  {
    term: "Ризз",
    accent: "ри́зз",
    speak: "ризз",
    category: "Gen Alpha",
    tone: "Шарм",
    level: 2,
    meaning: "Харизма, способность обаять человека и не звучать как инструкция к роутеру.",
    plain: "харизма и обаяние",
    example: "У него такой ризз, что даже кассир пожелал хорошего дня первым.",
    source: "FOX 5 NY / PureWow"
  },
  {
    term: "Скибиди",
    accent: "скиби́ди",
    speak: "скибиди",
    category: "Gen Alpha",
    tone: "Абсурд",
    level: 2,
    meaning: "Мемное слово без жесткого значения: может звучать как странно, плохо или просто абсурдно.",
    plain: "абсурдный мем-сигнал",
    example: "Это не ошибка дизайна, это скибиди-режим интерфейса.",
    source: "FOX 5 NY / PureWow"
  },
  {
    term: "Огайо",
    accent: "ога́йо",
    speak: "Огайо",
    category: "Gen Alpha",
    tone: "Странность",
    level: 2,
    meaning: "Прилагательное для чего-то странного, сюрреалистичного или кринжового.",
    plain: "очень странно",
    example: "Этот диалог был настолько Огайо, что его надо сдавать в музей мемов.",
    source: "FOX 5 NY / PureWow"
  },
  {
    term: "Сигма",
    accent: "си́гма",
    speak: "сигма",
    category: "Gen Alpha",
    tone: "Статус",
    level: 2,
    meaning: "Ироничный образ независимого, уверенного и будто бы крутого человека.",
    plain: "ироничный крутой одиночка",
    example: "Сделал домашку до дедлайна и никому не сказал. Сигма-энергия.",
    source: "FOX 5 NY"
  },
  {
    term: "Аура",
    accent: "а́ура",
    speak: "аура",
    category: "Gen Alpha",
    tone: "Рейтинг",
    level: 2,
    meaning: "Воображаемые очки крутости: поступки дают плюс или минус ауре.",
    plain: "мемный рейтинг крутости",
    example: "Произнес «ризз» правильно — плюс десять к ауре.",
    source: "Gen Alpha slang"
  },
  {
    term: "Фанум-такс",
    accent: "фа́нум такс",
    speak: "фанум такс",
    category: "Gen Alpha",
    tone: "Еда",
    level: 2,
    meaning: "Мем про то, что кто-то без спроса забирает часть твоей еды.",
    plain: "налог едой у друга",
    example: "Я взял одну картошку. Это не кража, это фанум-такс.",
    source: "FOX 5 NY"
  },
  {
    term: "Мьюинг",
    accent: "мью́инг",
    speak: "мьюинг",
    category: "Тренды",
    tone: "Внешность",
    level: 2,
    meaning: "Мемная практика позы лица и языка, которую часто упоминают в контенте про внешность.",
    plain: "мем про позу лица",
    example: "Он молчит не потому, что задумался. Он в режиме мьюинга.",
    source: "FOX 5 NY"
  },
  {
    term: "Канон-ивент",
    accent: "кано́н иве́нт",
    speak: "канон ивент",
    category: "Мемы",
    tone: "Судьба",
    level: 3,
    meaning: "Событие, которое будто было неизбежно и стало частью личного лора.",
    plain: "неизбежный важный опыт",
    example: "Первый кринжовый ник в интернете — это канон-ивент.",
    source: "Skibidi Times"
  },
  {
    term: "Ноу кэп",
    accent: "ноу кэп",
    speak: "ноу кэп",
    category: "Англо-сленг",
    tone: "Правда",
    level: 3,
    meaning: "Без вранья, честно, серьезно.",
    plain: "честно, без обмана",
    example: "Этот курс реально полезен, ноу кэп.",
    source: "Skibidi Times"
  },
  {
    term: "Кэп",
    accent: "кэп",
    speak: "кэп",
    category: "Англо-сленг",
    tone: "Ложь",
    level: 3,
    meaning: "Ложь, преувеличение или сомнительное заявление.",
    plain: "это неправда",
    example: "«Я всегда понимаю подростковые мемы» — кэп.",
    source: "Skibidi Times"
  },
  {
    term: "Кот ин 4К",
    accent: "ко́т ин фо́р кей",
    speak: "caught in four K",
    category: "Англо-сленг",
    tone: "Палево",
    level: 3,
    meaning: "Поймали с доказательствами: скриншоты, видео, все видно.",
    plain: "пойман с доказательствами",
    example: "Сказал, что спишь, но лайкнул мем в 03:12. Кот ин 4К.",
    source: "Skibidi Times"
  },
  {
    term: "Сас",
    accent: "са́с",
    speak: "сас",
    category: "Игры и мемы",
    tone: "Подозрение",
    level: 3,
    meaning: "Подозрительно, странно, будто человек что-то скрывает.",
    plain: "подозрительно",
    example: "Ты слишком быстро ответил правильно. Сас, но уважаю.",
    source: "игровой сленг"
  },
  {
    term: "Слей",
    accent: "сле́й",
    speak: "слей",
    category: "Похвала",
    tone: "Восторг",
    level: 3,
    meaning: "Сделано ярко, уверенно и очень хорошо.",
    plain: "сделано отлично",
    example: "Ответил без подсказки и с правильным ударением. Слей.",
    source: "Gen Z slang"
  },
  {
    term: "Брэйнрот",
    accent: "брэ́йнрот",
    speak: "брейнрот",
    category: "Мемы",
    tone: "Самоирония",
    level: 3,
    meaning: "Абсурдный контент, который будто разжижает мозг, но почему-то продолжает смешить.",
    plain: "мемный абсурдный контент",
    example: "Пять минут скибиди-нарезок перед сном — учебный брэйнрот.",
    source: "Gen Alpha slang"
  },
  {
    term: "Сикс-севен",
    accent: "си́кс се́вен",
    speak: "сикс севен",
    category: "Gen Alpha",
    tone: "Бессмыслица",
    level: 3,
    meaning: "Мемная фраза-перформанс «6 7» без стабильного смысла: ее выкрикивают как реакцию, особенно когда рядом всплывают числа шесть и семь.",
    plain: "абсурдная мемная реакция",
    example: "Учитель сказал «страница 67», и класс уже хором: сикс-севен.",
    source: "Merriam-Webster / Axios"
  },
  {
    term: "Гятт",
    accent: "гя́тт",
    speak: "гятт",
    category: "Gen Alpha",
    tone: "Осторожно",
    level: 3,
    meaning: "Эмоциональный возглас из мемов; иногда связан с комментарием внешности, поэтому лучше использовать аккуратно.",
    plain: "мемный возглас, нужен контекст",
    example: "В учебном чате слово «гятт» без контекста лучше не тестировать.",
    source: "Gen Alpha slang"
  }
];

const lessonNames = ["Базовый вайб", "Мемная грамматика", "Brainrot A1", "Разговорный тренд"];

const clozeTasks = [
  {
    before: "Он сказал «йоу, молодежь» на планерке. Это полный",
    after: ".",
    answer: "Кринж",
    options: ["Кринж", "База", "Слей", "Аура"]
  },
  {
    before: "Я верю, что выучу весь курс за вечер. Это уже",
    after: ", но красиво.",
    answer: "Делулу",
    options: ["Делулу", "Скуф", "Кэп", "Пов"]
  },
  {
    before: "Эта подсказка слишком сильная, просто",
    after: ".",
    answer: "Имба",
    options: ["Имба", "Окак", "Сас", "Тильт"]
  },
  {
    before: "Если место сразу дает настроение «сдам дедлайн и выживу», у него правильный",
    after: ".",
    answer: "Вайб",
    options: ["Вайб", "Фанум-такс", "Канон-ивент", "Гятт"]
  },
  {
    before: "Учитель сказал «страница 67», и класс хором выдал",
    after: ".",
    answer: "Сикс-севен",
    options: ["Сикс-севен", "Огайо", "Брэйнрот", "Ноу кэп"]
  },
  {
    before: "Он молчит не потому, что задумался. Он просто в режиме",
    after: ".",
    answer: "Мьюинг",
    options: ["Мьюинг", "Ризз", "Краш", "Нормис"]
  },
  {
    before: "Сказал, что спит, но лайкнул мем в 03:12. Его поймали:",
    after: ".",
    answer: "Кот ин 4К",
    options: ["Кот ин 4К", "Кэп", "Сас", "База"]
  },
  {
    before: "Без вранья, этот пример звучит как речь носителя:",
    after: ".",
    answer: "Ноу кэп",
    options: ["Ноу кэп", "Кэп", "Окак", "Скуф"]
  },
  {
    before: "Он ищет карту США, когда слышит «Огайо». Пока он",
    after: ".",
    answer: "Нормис",
    options: ["Нормис", "Сигма", "Ризз", "Слей"]
  },
  {
    before: "Произнес слово правильно — получил плюс к",
    after: ".",
    answer: "Аура",
    options: ["Аура", "Тильт", "Кринж", "Фанум-такс"]
  }
];

const judgeTasks = [
  { text: "«Пов: ты чекнул слово и сразу понял вайб»", ok: true },
  { text: "«У меня очень скибиди налоговая декларация, уважаемые коллеги»", ok: false },
  { text: "«Это база: сначала слушаем ударение, потом флексим словом»", ok: true },
  { text: "«Мой принтер сегодня канон-ивент и финансовый абьюз»", ok: false },
  { text: "«Ноу кэп, этот пример звучит как речь носителя мемов»", ok: true },
  { text: "«Кто-то сказал страницу 67, и аудитория выдала сикс-севен»", ok: true },
  { text: "«Я делулу, но зато с плюсом к ауре»", ok: true }
];

const mascotLines = {
  idle: [
    "Слово дня не выучит себя. Хотя при твоем уровне оно могло бы из жалости.",
    "Если слышишь «Огайо» и ищешь карту США, курс уже окупается.",
    "Тренд не ждет, пока ты обновишь внутренний словарь."
  ],
  good: [
    "Плюс к ауре. Не расслабляйся, современность скользкая.",
    "Вот это уже похоже на человека с доступом к интернету.",
    "Слей. Я почти не вижу нормиса в твоих ответах."
  ],
  bad: [
    "Минус вайб, но не тильтуй. Повтори и верни себе аутентичность.",
    "Ответ звучал как родительский чат. Еще попытка.",
    "Кринж случился, но это обучающий кринж."
  ],
  tap: [
    "Да, я живая. Нет, твой словарный запас пока не очень.",
    "Клик принят. Современность не скачалась, но процесс пошел.",
    "Если ищешь подсказку, то вот она: не отвечай как скуф.",
    "Я слежу за твоим курсором и за твоей аурой. Второе тревожнее."
  ]
};

const storeKey = "zualinga-progress-v1";
const visitKey = "zualinga-visitor-count-v1";
const todayKey = new Date().toISOString().slice(0, 10);
const initialState = {
  xp: 0,
  streak: 0,
  hearts: 5,
  correctToday: 0,
  day: todayKey,
  goalAwardedDate: "",
  currentLevel: 0,
  sound: true
};

let state = loadState();
let currentLevel = state.currentLevel;
let currentWord = 0;
let activeQuizWord = null;
let currentCloze = null;
let matchPairs = [];
let selectedMatch = null;
let matchedCount = 0;
let judgeIndex = 0;
let judgeScore = 0;
let activeCategory = "Все";
let audioContext = null;
let mascotFlightActive = false;
let mascotFlightTimer = null;

const els = {
  brand: document.querySelector("[data-nav='lesson']"),
  navTabs: document.querySelectorAll(".nav-tab"),
  panels: document.querySelectorAll("[data-view-panel]"),
  pathNodes: document.querySelectorAll(".path-node"),
  menuButton: document.getElementById("menuButton"),
  soundToggle: document.getElementById("soundToggle"),
  streak: document.getElementById("streak"),
  xp: document.getElementById("xp"),
  hearts: document.getElementById("hearts"),
  lessonLevel: document.getElementById("lessonLevel"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonProgress: document.getElementById("lessonProgress"),
  wordCategory: document.getElementById("wordCategory"),
  wordTone: document.getElementById("wordTone"),
  wordTerm: document.getElementById("wordTerm"),
  wordAccent: document.getElementById("wordAccent"),
  wordMeaning: document.getElementById("wordMeaning"),
  wordExample: document.getElementById("wordExample"),
  mascot: document.getElementById("mascot"),
  mascotHint: document.getElementById("mascotHint"),
  speech: document.querySelector(".speech"),
  listenWord: document.getElementById("listenWord"),
  nextWord: document.getElementById("nextWord"),
  markKnown: document.getElementById("markKnown"),
  quizPrompt: document.getElementById("quizPrompt"),
  answerOptions: document.getElementById("answerOptions"),
  feedback: document.getElementById("feedback"),
  mascotLine: document.getElementById("mascotLine"),
  dailyCount: document.getElementById("dailyCount"),
  dailyBar: document.getElementById("dailyBar"),
  dictionarySearch: document.getElementById("dictionarySearch"),
  categoryFilters: document.getElementById("categoryFilters"),
  dictionaryGrid: document.getElementById("dictionaryGrid"),
  clozeSentence: document.getElementById("clozeSentence"),
  clozeOptions: document.getElementById("clozeOptions"),
  clozeFeedback: document.getElementById("clozeFeedback"),
  nextCloze: document.getElementById("nextCloze"),
  visitorCount: document.getElementById("visitorCount"),
  matchBoard: document.getElementById("matchBoard"),
  matchCounter: document.getElementById("matchCounter"),
  newMatchGame: document.getElementById("newMatchGame"),
  judgePrompt: document.getElementById("judgePrompt"),
  judgeGood: document.getElementById("judgeGood"),
  judgeBad: document.getElementById("judgeBad"),
  judgeFeedback: document.getElementById("judgeFeedback"),
  judgeScore: document.getElementById("judgeScore")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storeKey));
    const merged = { ...initialState, ...saved };
    if (merged.day !== todayKey) {
      merged.day = todayKey;
      merged.correctToday = 0;
      merged.hearts = Math.max(merged.hearts, 3);
    }
    return merged;
  } catch {
    return { ...initialState };
  }
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function wordsForLevel(level = currentLevel) {
  return slangWords.filter((word) => word.level === level);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function setFeedback(element, message, good) {
  element.textContent = message;
  element.classList.toggle("good", Boolean(good));
  element.classList.toggle("bad", !good);
}

function randomLine(kind) {
  const lines = mascotLines[kind] || mascotLines.idle;
  return lines[Math.floor(Math.random() * lines.length)];
}

function animateMascot(kind) {
  const moodMap = {
    good: "mood-good",
    bad: "mood-bad",
    tap: "mood-thinking",
    idle: "mood-thinking"
  };
  const burstMap = {
    good: "is-popping is-waving",
    bad: "is-shaking",
    tap: "is-talking is-waving",
    idle: "is-talking"
  };
  els.mascot.classList.remove("mood-good", "mood-bad", "mood-thinking", "is-popping", "is-shaking", "is-waving", "is-talking");
  els.mascot.classList.add(moodMap[kind] || "mood-thinking");
  void els.mascot.offsetWidth;
  (burstMap[kind] || burstMap.idle).split(" ").forEach((className) => els.mascot.classList.add(className));
  window.setTimeout(() => {
    els.mascot.classList.remove("is-popping", "is-shaking", "is-waving", "is-talking");
  }, 560);
}

function animateSpeech() {
  els.speech.classList.remove("is-speaking");
  void els.speech.offsetWidth;
  els.speech.classList.add("is-speaking");
  window.setTimeout(() => els.speech.classList.remove("is-speaking"), 620);
}

function setMascot(kind, shouldSpeak = false) {
  const line = randomLine(kind);
  els.mascotLine.textContent = line;
  animateMascot(kind);
  animateSpeech();
  if (shouldSpeak) speak(line);
  return line;
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(ctx, start, frequency, duration, type, volume) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playResultSound(good) {
  if (!state.sound) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  if (good) {
    [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
      playTone(ctx, now + index * 0.075, frequency, 0.18, "triangle", 0.12);
    });
    playTone(ctx, now + 0.27, 1318.51, 0.22, "sine", 0.08);
    return;
  }

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(196, now);
  oscillator.frequency.exponentialRampToValueAtTime(82.41, now + 0.28);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.11, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.36);
}

function playMascotTapSound() {
  if (!state.sound) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, now, 392, 0.1, "triangle", 0.06);
  playTone(ctx, now + 0.08, 587.33, 0.14, "triangle", 0.08);
}

function triggerMascotTap() {
  setMascot("tap", true);
  playMascotTapSound();
}

function flyMascotAcrossScreen() {
  if (mascotFlightActive || !els.mascot) return;
  const rect = els.mascot.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  mascotFlightActive = true;
  const clone = els.mascot.cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("aria-hidden", "true");
  clone.classList.remove("is-popping", "is-shaking", "is-waving", "is-talking", "is-on-flight");
  clone.classList.add("mascot-flight-clone", "mood-good", "is-waving");
  clone.style.left = `${rect.left}px`;
  clone.style.top = `${rect.top}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;
  clone.style.setProperty("--eye-x", "4px");
  clone.style.setProperty("--eye-y", "-2px");

  els.mascot.classList.add("is-on-flight");
  document.body.append(clone);

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxX = Math.max(12, vw - rect.width - 12);
  const maxY = Math.max(12, vh - rect.height - 12);
  const points = [
    { x: rect.left, y: rect.top, rotate: 0, scale: 1 },
    { x: Math.min(maxX, vw * 0.72), y: 18, rotate: 18, scale: 1.08 },
    { x: Math.min(maxX, vw * 0.88), y: Math.min(maxY, vh * 0.56), rotate: -16, scale: 0.96 },
    { x: Math.max(12, vw * 0.12), y: Math.min(maxY, vh * 0.72), rotate: 24, scale: 1.05 },
    { x: Math.max(12, vw * 0.08), y: 24, rotate: -12, scale: 0.98 },
    { x: rect.left, y: rect.top, rotate: 0, scale: 1 }
  ];

  const animation = clone.animate(
    points.map((point) => ({
      left: `${point.x}px`,
      top: `${point.y}px`,
      transform: `rotate(${point.rotate}deg) scale(${point.scale})`
    })),
    {
      duration: 7200,
      easing: "cubic-bezier(.2,.82,.18,1)",
      fill: "forwards"
    }
  );

  animation.onfinish = () => {
    clone.remove();
    els.mascot.classList.remove("is-on-flight");
    mascotFlightActive = false;
    setMascot("idle");
  };

  animation.oncancel = () => {
    clone.remove();
    els.mascot.classList.remove("is-on-flight");
    mascotFlightActive = false;
  };
}

function startMascotFlights() {
  window.clearInterval(mascotFlightTimer);
  mascotFlightTimer = window.setInterval(flyMascotAcrossScreen, 60000);
}

function speak(text, lang = "ru-RU") {
  if (!state.sound || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.88;
  utterance.pitch = 1.02;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((voice) => voice.lang === lang) || voices.find((voice) => voice.lang.startsWith(lang.slice(0, 2)));
  if (preferred) utterance.voice = preferred;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function award(good, xpValue = 10, withSound = true) {
  if (withSound) playResultSound(good);
  if (good) {
    state.xp += xpValue;
    state.correctToday = Math.min(8, state.correctToday + 1);
    if (state.correctToday >= 8 && state.goalAwardedDate !== todayKey) {
      state.streak += 1;
      state.goalAwardedDate = todayKey;
      state.hearts = Math.min(5, state.hearts + 1);
    }
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
  }
  saveState();
  renderStats();
}

function renderStats() {
  els.streak.textContent = state.streak;
  els.xp.textContent = state.xp;
  els.hearts.textContent = state.hearts;
  els.dailyCount.textContent = state.correctToday;
  els.dailyBar.style.width = `${Math.min(100, (state.correctToday / 8) * 100)}%`;
  els.soundToggle.textContent = state.sound ? "Звук вкл." : "Звук выкл.";
  els.soundToggle.setAttribute("aria-pressed", String(state.sound));
}

function incrementVisitorCounter() {
  const current = Number(localStorage.getItem(visitKey) || "0");
  const next = Number.isFinite(current) ? current + 1 : 1;
  localStorage.setItem(visitKey, String(next));
  els.visitorCount.textContent = next.toLocaleString("ru-RU");
}

function renderPath() {
  els.pathNodes.forEach((node) => {
    const level = Number(node.dataset.level);
    node.classList.toggle("is-current", level === currentLevel);
  });
}

function renderWord() {
  const levelWords = wordsForLevel();
  const word = levelWords[currentWord % levelWords.length];
  const progress = Math.round(((currentWord % levelWords.length) / levelWords.length) * 100);
  els.lessonLevel.textContent = `Урок ${currentLevel + 1} из ${lessonNames.length}`;
  els.lessonTitle.textContent = lessonNames[currentLevel];
  els.lessonProgress.textContent = `${progress}%`;
  els.wordCategory.textContent = word.category;
  els.wordTone.textContent = word.tone;
  els.wordTerm.textContent = word.term;
  els.wordAccent.textContent = word.accent;
  els.wordMeaning.textContent = word.meaning;
  els.wordExample.textContent = word.example;
  buildQuiz(word);
}

function buildQuiz(word) {
  activeQuizWord = word;
  els.quizPrompt.textContent = `Что значит «${word.term}»?`;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  const wrong = sample(slangWords.filter((item) => item.term !== word.term), 3).map((item) => item.plain);
  const options = shuffle([word.plain, ...wrong]);
  els.answerOptions.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkQuizAnswer(button, option === word.plain));
    els.answerOptions.append(button);
  });
}

function checkQuizAnswer(button, good) {
  els.answerOptions.querySelectorAll("button").forEach((item) => {
    item.disabled = true;
    if (item.textContent === activeQuizWord.plain) item.classList.add("is-correct");
  });
  if (!good) button.classList.add("is-wrong");
  award(good, 12);
  setFeedback(
    els.feedback,
    good ? `Верно: «${activeQuizWord.term}» — ${activeQuizWord.plain}.` : `Не совсем. Это «${activeQuizWord.plain}».`,
    good
  );
  setMascot(good ? "good" : "bad");
  if (good) setTimeout(nextWord, 700);
}

function nextWord() {
  const levelWords = wordsForLevel();
  currentWord = (currentWord + 1) % levelWords.length;
  renderWord();
}

function renderDictionary() {
  const categories = ["Все", ...new Set(slangWords.map((word) => word.category))];
  els.categoryFilters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-chip";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("is-active", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      renderDictionary();
    });
    els.categoryFilters.append(button);
  });

  const query = els.dictionarySearch.value.trim().toLowerCase();
  const filtered = slangWords.filter((word) => {
    const inCategory = activeCategory === "Все" || word.category === activeCategory;
    const searchable = `${word.term} ${word.meaning} ${word.plain} ${word.example}`.toLowerCase();
    return inCategory && searchable.includes(query);
  });

  els.dictionaryGrid.innerHTML = "";
  filtered.forEach((word) => {
    const card = document.createElement("article");
    card.className = "dictionary-card";
    card.innerHTML = `
      <div>
        <small>${word.category} · ${word.tone}</small>
        <h3>${word.term}</h3>
        <p class="accent">${word.accent}</p>
        <p>${word.meaning}</p>
      </div>
      <div>
        <p class="example">${word.example}</p>
      </div>
    `;
    const listen = document.createElement("button");
    listen.className = "secondary-action";
    listen.type = "button";
    listen.textContent = "▶ Слушать";
    listen.addEventListener("click", () => speak(word.speak));
    card.append(listen);
    els.dictionaryGrid.append(card);
  });
}

function buildClozeTask() {
  currentCloze = clozeTasks[Math.floor(Math.random() * clozeTasks.length)];
  els.clozeFeedback.textContent = "";
  els.clozeFeedback.className = "feedback";
  els.clozeSentence.innerHTML = `${currentCloze.before} <span class="blank-token">____</span>${currentCloze.after}`;
  els.clozeOptions.innerHTML = "";

  shuffle(currentCloze.options).forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkClozeAnswer(button, option));
    els.clozeOptions.append(button);
  });
}

function checkClozeAnswer(button, option) {
  const good = option === currentCloze.answer;
  els.clozeOptions.querySelectorAll("button").forEach((item) => {
    item.disabled = true;
    if (item.textContent === currentCloze.answer) item.classList.add("is-correct");
  });
  if (!good) button.classList.add("is-wrong");

  award(good, 15);
  els.clozeSentence.innerHTML = `${currentCloze.before} <span class="blank-token">${currentCloze.answer}</span>${currentCloze.after}`;
  setFeedback(
    els.clozeFeedback,
    good ? "Верно. Предложение звучит достаточно свежо." : `Не туда. Здесь нужно: ${currentCloze.answer}.`,
    good
  );
  setMascot(good ? "good" : "bad");
  if (good) setTimeout(buildClozeTask, 900);
}

function buildMatchGame() {
  matchPairs = sample(slangWords, 4);
  selectedMatch = null;
  matchedCount = 0;
  els.matchCounter.textContent = "0/4";
  els.matchBoard.innerHTML = "";
  const cards = shuffle([
    ...matchPairs.map((word) => ({ id: word.term, text: word.term, kind: "term" })),
    ...matchPairs.map((word) => ({ id: word.term, text: word.plain, kind: "meaning" }))
  ]);

  cards.forEach((card) => {
    const button = document.createElement("button");
    button.className = "match-card";
    button.type = "button";
    button.dataset.id = card.id;
    button.dataset.kind = card.kind;
    button.textContent = card.text;
    button.addEventListener("click", () => selectMatch(button));
    els.matchBoard.append(button);
  });
}

function selectMatch(button) {
  if (button.disabled || button === selectedMatch) return;
  button.classList.add("is-selected");
  if (!selectedMatch) {
    selectedMatch = button;
    return;
  }

  const good = selectedMatch.dataset.id === button.dataset.id && selectedMatch.dataset.kind !== button.dataset.kind;
  if (good) {
    selectedMatch.classList.remove("is-selected");
    button.classList.remove("is-selected");
    selectedMatch.classList.add("is-correct");
    button.classList.add("is-correct");
    selectedMatch.disabled = true;
    button.disabled = true;
    selectedMatch = null;
    matchedCount += 1;
    els.matchCounter.textContent = `${matchedCount}/4`;
    award(true, 8);
    setMascot("good");
  } else {
    selectedMatch.classList.add("is-wrong");
    button.classList.add("is-wrong");
    award(false, 0);
    setMascot("bad");
    setTimeout(() => {
      selectedMatch.classList.remove("is-selected", "is-wrong");
      button.classList.remove("is-selected", "is-wrong");
      selectedMatch = null;
    }, 450);
  }
}

function renderJudge() {
  const task = judgeTasks[judgeIndex % judgeTasks.length];
  els.judgePrompt.textContent = task.text;
  els.judgeFeedback.textContent = "";
  els.judgeFeedback.className = "feedback";
}

function judgeAnswer(answer) {
  const task = judgeTasks[judgeIndex % judgeTasks.length];
  const good = answer === task.ok;
  if (good) judgeScore += 1;
  award(good, 10);
  els.judgeScore.textContent = `${judgeScore} очков`;
  setFeedback(els.judgeFeedback, good ? "Суд принят. Вайб распознан." : "Апелляция отклонена. Тут пахнет нормисом.", good);
  setMascot(good ? "good" : "bad");
  judgeIndex += 1;
  setTimeout(renderJudge, 850);
}

function switchView(view) {
  els.navTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  els.panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.viewPanel === view));
  document.body.classList.remove("menu-open");
}

function bindEvents() {
  els.brand.addEventListener("click", (event) => {
    event.preventDefault();
    switchView("lesson");
  });
  els.navTabs.forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  els.pathNodes.forEach((node) => {
    node.addEventListener("click", () => {
      currentLevel = Number(node.dataset.level);
      state.currentLevel = currentLevel;
      currentWord = 0;
      saveState();
      renderPath();
      renderWord();
      switchView("lesson");
    });
  });
  els.menuButton.addEventListener("click", () => document.body.classList.toggle("menu-open"));
  els.mascot.addEventListener("click", triggerMascotTap);
  els.mascotHint.addEventListener("click", triggerMascotTap);
  els.mascot.addEventListener("pointermove", (event) => {
    const rect = els.mascot.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const eyeX = Math.max(-5, Math.min(5, ((event.clientX - centerX) / rect.width) * 14));
    const eyeY = Math.max(-4, Math.min(4, ((event.clientY - centerY) / rect.height) * 12));
    els.mascot.style.setProperty("--eye-x", `${eyeX}px`);
    els.mascot.style.setProperty("--eye-y", `${eyeY}px`);
  });
  els.mascot.addEventListener("pointerleave", () => {
    els.mascot.style.setProperty("--eye-x", "0px");
    els.mascot.style.setProperty("--eye-y", "0px");
  });
  els.soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    saveState();
    renderStats();
    if (state.sound) speak("Звук включен. Современность снова слышно.");
  });
  els.listenWord.addEventListener("click", () => speak(wordsForLevel()[currentWord % wordsForLevel().length].speak));
  els.nextWord.addEventListener("click", nextWord);
  els.markKnown.addEventListener("click", () => {
    award(true, 6, false);
    setMascot("good");
    nextWord();
  });
  els.dictionarySearch.addEventListener("input", renderDictionary);
  els.nextCloze.addEventListener("click", buildClozeTask);
  els.newMatchGame.addEventListener("click", buildMatchGame);
  els.judgeGood.addEventListener("click", () => judgeAnswer(true));
  els.judgeBad.addEventListener("click", () => judgeAnswer(false));
  window.speechSynthesis?.addEventListener?.("voiceschanged", () => {});
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(mascotFlightTimer);
      return;
    }
    startMascotFlights();
  });
}

function init() {
  incrementVisitorCounter();
  renderStats();
  els.mascot.classList.add("mood-thinking");
  renderPath();
  renderWord();
  renderDictionary();
  buildClozeTask();
  buildMatchGame();
  renderJudge();
  bindEvents();
  startMascotFlights();
}

init();
