import { ArrowRight } from 'lucide-react';

export default function ResultCard() {
  return (
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
  );
}
