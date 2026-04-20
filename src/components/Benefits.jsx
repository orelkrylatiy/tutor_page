'use client';

import { useEffect, useState } from 'react';
import { LaptopMinimal, CalendarDays, Clock3, BarChart3, ArrowRight, BookOpen, Code2 } from 'lucide-react';

const pills = ['ЕГЭ по информатике — 95', 'ITMO Computer Science', 'Т-Банк · 3 года', '30+ учеников'];
const steps = [
  {
    num: '01',
    title: 'Диагностика',
    text: 'Смотрю текущий уровень ученика, нахожу слабые темы и составляю индивидуальный маршрут подготовки.',
  },
  {
    num: '02',
    title: 'Работа по плану',
    text: 'Разбираем теорию, решаем задания, тренируемся в формате экзамена на время. Есть своя база заданий и записанные видеоразборы.',
  },
  {
    num: '03',
    title: 'Контроль и обратная связь',
    text: 'Веду статистику по результатам каждого ученика. Между занятиями остаюсь на связи. Все материалы остаются у ученика.',
  },
];
const devCases = [
  {
    tag: 'Т-Банк · продакшн',
    title: 'Реальный опыт в крупной компании',
    text: 'Работаю с React, TypeScript и Redux Toolkit в одном из крупнейших цифровых банков России. Знаю, как выглядит код в реальных командах, код-ревью и продакшн-деплой.',
  },
  {
    tag: 'Обучение с нуля',
    title: 'От основ до первых проектов',
    text: 'HTML/CSS, JavaScript, Git, React — объясняю структурно и по порядку. После обучения у ученика есть реальные проекты в портфолио, а не просто «прошёл курс».',
  },
  {
    tag: 'Карьера в IT',
    title: 'Помогу разобраться с направлением',
    text: 'Знаю, что спрашивают на собеседованиях и что реально нужно джуну. Могу помочь выстроить путь от нуля до первого оффера и понять, куда двигаться.',
  },
];
const formats = [
  [LaptopMinimal, 'Онлайн', 'Zoom или Телемост + интерактивная доска'],
  [CalendarDays, 'Расписание', '1–2 раза в неделю, подстраиваемся под ученика'],
  [Clock3, 'Длительность', '60 или 90 минут на занятие'],
  [BarChart3, 'Статистика и материалы', 'Прогресс, обратная связь, база заданий и видеоразборы'],
];

const tracks = {
  tutor: {
    key: 'tutor',
    label: 'Репетиторство',
    title: 'ЕГЭ, база и системная подготовка',
    subtitle: 'Для тех, кому нужен понятный маршрут, контроль и рост результата без лишнего шума.',
    icon: BookOpen,
    bullets: [
      'Диагностика уровня и индивидуальный план',
      'Разбор теории, практика и экзамен на время',
      'Домашки, видеоразборы и обратная связь',
    ],
    accent: 'Фокус на результате',
  },
  mentor: {
    key: 'mentor',
    label: 'Менторство',
    title: 'React, TypeScript и реальные проекты',
    subtitle: 'Для тех, кто хочет войти в веб-разработку и собрать первое сильное портфолио.',
    icon: Code2,
    bullets: [
      'HTML/CSS, JavaScript, React и TypeScript',
      'Разбор архитектуры и code review',
      'Путь от нуля до первого проекта и уверенности',
    ],
    accent: 'Фокус на практике',
  },
};

export default function Benefits() {
  const [activeTrack, setActiveTrack] = useState('tutor');
  const active = tracks[activeTrack];
  const ActiveIcon = active.icon;

  useEffect(() => {
    function syncTrackFromHash() {
      const hash = window.location.hash;
      if (hash === '#mentor-track') setActiveTrack('mentor');
      if (hash === '#tutor-track') setActiveTrack('tutor');
    }

    syncTrackFromHash();
    window.addEventListener('hashchange', syncTrackFromHash);
    return () => window.removeEventListener('hashchange', syncTrackFromHash);
  }, []);

  return (
    <>
      <section>
        <h2 className="section-label">Результат</h2>
        <div className="case-grid fade-up">
          <div className="case-card">
              <div className="case-nums">
                <span className="case-num">54</span>
                <span className="case-arrow"><ArrowRight size={22} strokeWidth={2.25} /></span>
                <span className="case-num after">90</span>
              </div>
            <p className="case-desc">
              Один из учеников пришёл с 54 баллами и сдал на 90. Часто приходят ребята с уровнем 50–60 баллов, и при регулярной работе им
              удаётся заметно поднять результат.
            </p>
          </div>
          <div className="case-green">
            <div className="big">Работаю с учениками любого уровня</div>
            <div className="small">В том числе с теми, кто только начинает подготовку с нуля.</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-label">Кто я</h2>
        <div className="about-grid fade-up" id="about">
          <div>
            <h3 className="about-title">
              Максим Сергеевич —
              <br />
              разработчик
              <br />
              и <em>репетитор.</em>
            </h3>
            <div className="pills">
              {pills.map(pill => (
                <span className={`pill ${pill === 'ЕГЭ по информатике — 95' ? 'hi' : ''}`} key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="about-text">
              Учусь в магистратуре ITMO по Computer Science и работаю разработчиком в Т-Банке уже 3 года. Если ученик думает о карьере в IT —
              могу помочь сориентироваться и в этом направлении.
            </p>
            <p className="about-text">Сам сдал ЕГЭ по информатике на 95 баллов и несколько лет готовлю учеников к экзамену.</p>
            <p className="about-text">
              На занятиях мне важно, чтобы ученик не просто посмотрел решение, а понял логику и смог решить похожую задачу сам.
            </p>
          </div>
        </div>
      </section>

      <section id="tracks">
        <h2 className="section-label">Форматы работы</h2>
        <div className="tracks-shell fade-up">
          <div className="track-tabs" role="tablist" aria-label="Форматы работы">
            {Object.values(tracks).map(track => (
              <button
                key={track.key}
                id={track.key === 'tutor' ? 'tutor-track' : 'mentor-track'}
                type="button"
                role="tab"
                aria-selected={activeTrack === track.key}
                className={`track-tab ${activeTrack === track.key ? 'active' : ''}`}
                onClick={() => setActiveTrack(track.key)}
              >
                {track.label}
              </button>
            ))}
          </div>

          <div className="track-panel" role="tabpanel">
            <div className="track-panel-main">
              <div className="track-kicker">{active.accent}</div>
              <h3 className="track-title">{active.title}</h3>
              <p className="track-subtitle">{active.subtitle}</p>
            </div>

            <div className="track-points">
              {active.bullets.map(point => (
                <div className="track-point" key={point}>
                  <span className="track-point-dot" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="track-side">
              <ActiveIcon size={28} strokeWidth={1.9} />
              <p>
                Секция сразу разделяет два сценария: школьная подготовка и наставничество по React/веб-разработке.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-label">Как проходит подготовка</h2>
        <div className="steps fade-up">
          {steps.map(step => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label">Веб-разработка</h2>
        <div className="dev-top fade-up">
          <h3 className="dev-title">
            3+ года в <em>продакшне.</em>
            <br />
            Готов передать опыт.
          </h3>
          <p className="dev-intro">
            Работаю в Т-Банке фронтенд-разработчиком. Обучаю веб-разработке с нуля — от первой HTML-страницы до React-приложения с настоящим
            кодом в портфолио. Помогу понять не только синтаксис, но и то, как выглядит разработка изнутри.
          </p>
        </div>
        <div className="dev-cases fade-up">
          {devCases.map(card => (
            <div className="dev-case" key={card.title}>
              <div className="dev-tag">{card.tag}</div>
              <div className="dev-case-title">{card.title}</div>
              <p className="dev-case-text">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="stack fade-up">
          {['React', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'HTML / CSS', 'Git', 'Node.js'].map(skill => (
            <span className="stag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-label">Формат</h2>
        <div className="format-grid fade-up">
          {formats.map(([Icon, label, value]) => (
            <div className="format-item" key={label}>
              <div className="ficon"><Icon size={18} strokeWidth={2} /></div>
              <div>
                <div className="flabel">{label}</div>
                <div className="fval">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gift">
        <h2 className="section-label">Подарок</h2>
        <div className="gift-card fade-up">
          <div>
            <div className="gift-kicker">Готовый материал для подготовки</div>
            <h3 className="gift-title">Бесплатный набор заданий и теории по ЕГЭ</h3>
            <p className="gift-text">
              Можно посмотреть заранее и использовать как основу для первых занятий и самостоятельной подготовки.
            </p>
          </div>
          <a className="gift-btn" href="https://orelkrylatiy.github.io/EGE_Infa/" target="_blank" rel="noreferrer">
            Открыть материал <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
