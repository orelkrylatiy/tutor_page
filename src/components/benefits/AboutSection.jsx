export default function AboutSection({ pills }) {
  return (
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
  );
}
