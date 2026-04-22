export default function StepsSection({ steps }) {
  return (
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
  );
}
