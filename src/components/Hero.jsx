import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { marqueeItems } from '../data/hero';

export default function Hero() {
  return (
    <>
      <div className="hero" id="top">
        <div className="hero-left">
          <div className="hero-bg-text" aria-hidden="true">95</div>
          <div className="hero-content">
            <div className="hero-tag">ЕГЭ Информатика &amp; Математика</div>
            <h1 className="hero-title">
              Системная
              <br />
              подготовка
              <br />
              к <em>ЕГЭ.</em>
            </h1>
            <p className="hero-sub">
              Не просто объясняю темы — выстраиваю понятный план. Что учить, в каком порядке, на чём теряются баллы и как это исправить.
            </p>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">
                  54<span className="hero-stat-arrow"><ArrowRight size={18} strokeWidth={2.25} /></span>
                  <span>90</span>
                </div>
                <div className="hero-stat-label">кейс ученика</div>
              </div>
              <div>
                <div className="hero-stat-num">
                  <span>30</span>+
                </div>
                <div className="hero-stat-label">учеников</div>
              </div>
              <div>
                <div className="hero-stat-num">
                  <span>3</span> года
                </div>
                <div className="hero-stat-label">преподаю</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          <Image
            src="/images/photo_2026-04-18_14-56-14.jpg"
            alt="Максим Сергеевич"
            className="hero-photo-img"
            fill
            sizes="(max-width: 860px) 100vw, 400px"
            priority
          />
          <div className="hero-photo-grad" />
          <div className="hero-badge">
            <div className="hero-badge-name">Максим Сергеевич</div>
            <div className="hero-badge-role">
              Разработчик <span>Т-Банк</span> · ITMO
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <span className="marquee-item" key={`${item}-${index}`}>
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
