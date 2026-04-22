export default function DevCases({ devCases }) {
  return (
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
  );
}
