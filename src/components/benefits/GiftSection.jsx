import { ArrowRight } from 'lucide-react';

export default function GiftSection() {
  return (
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
  );
}
