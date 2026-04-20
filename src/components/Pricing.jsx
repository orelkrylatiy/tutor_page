'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Button from '../UI/Button';

const reviews = [
  {
    avatar: 'А',
    name: 'Анна, 11 класс',
    meta: 'Подготовка к ЕГЭ по информатике',
    imageSrc: '/images/almos-bechtold-3402kvtHhOo-unsplash.jpg',
    text: 'Пришла с 52 баллами за пробник, сдала реальный ЕГЭ на 84. Максим объясняет очень чётко — не просто показывает решение, а объясняет логику. После занятий начала сама разбираться в задачах, которые раньше казались нереальными.',
  },
  {
    avatar: 'Д',
    name: 'Дмитрий, родитель',
    meta: 'Подготовка к ЕГЭ по математике',
    imageSrc: '/images/ben-den-engelsen-eNyXK17so6A-unsplash.jpg',
    text: 'Сын занимался с Максимом полгода. Результат — с 61 до 88 баллов. Ценю, что есть чёткий план и статистика — видно, где прогресс, а где ещё нужно работать. Очень системный подход.',
  },
  {
    avatar: 'М',
    name: 'Мария, 10 класс',
    meta: 'Веб-разработка с нуля',
    imageSrc: '/images/pargat-dhillon-DmGzwwuLPG8-unsplash.jpg',
    text: 'Начинала вообще без опыта в программировании. Через 3 месяца сделала свой первый сайт на React. Максим объясняет так, что понимаешь не просто «как написать», а почему это работает именно так.',
  },
  {
    avatar: 'И',
    name: 'Илья, 11 класс',
    meta: 'Подготовка к ЕГЭ по информатике',
    imageSrc: '/images/noah-blaine-clark-woODqesB-Eo-unsplash.jpg',
    text: 'Готовились три месяца. Я думал, что 70 — это мой потолок, в итоге сдал на 87. Очень помогли видеоразборы — можно пересматривать в любое время. И то, что Максим всегда отвечает на вопросы между занятиями.',
  },
  {
    avatar: 'Е',
    name: 'Елена, родитель',
    meta: 'Подготовка к ЕГЭ по математике',
    imageSrc: '/images/meritt-thomas-aoQ4DYZLE_E-unsplash.jpg',
    text: 'Дочь боялась математики с 8 класса. После месяца занятий страх прошёл — она сама стала садиться за задачи. Итог — 79 баллов вместо ожидаемых 55. Очень рекомендую.',
  },
];

export default function Pricing() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    function update() {
      const nextVisible = window.innerWidth <= 860 ? 1 : 3;
      const track = trackRef.current;

      setVisible(nextVisible);

      if (!track) return;

      const gap = 16;
      const width = (track.parentElement.offsetWidth - gap * (nextVisible - 1)) / nextVisible;
      setCardWidth(width);
      setCurrent(0);
    }

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !cardWidth) return;
    const gap = 16;
    track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;
  }, [current, cardWidth]);

  const max = Math.max(0, reviews.length - visible);

  return (
    <>
      <section>
        <h2 className="section-label">Отзывы</h2>
        <div className="fade-up">
          <div className="reviews-outer">
            <div className="reviews-track" ref={trackRef}>
              {reviews.map(review => (
                <div
                  className="review-card"
                  key={review.name}
                  style={{ width: cardWidth || 'auto', minWidth: cardWidth || 'auto' }}
                  >
                    <div className="rav">
                      {review.imageSrc ? <img src={review.imageSrc} alt={review.name} /> : review.avatar}
                    </div>
                    <div className="rname">{review.name}</div>
                    <div className="rmeta">{review.meta}</div>
                    <div className="rstars" aria-label="5 out of 5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={13} fill="currentColor" strokeWidth={1.8} />
                      ))}
                    </div>
                    <p className="rtext">{review.text}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="rev-nav">
            <button className="rev-btn" onClick={() => setCurrent(prev => (prev > 0 ? prev - 1 : max))} type="button">
              <ChevronLeft size={17} />
            </button>
            <button className="rev-btn" onClick={() => setCurrent(prev => (prev < max ? prev + 1 : 0))} type="button">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <div className="cta-section" id="trial">
        <div className="cta-inner fade-up">
          <h2 className="cta-title">Первое занятие бесплатно.</h2>
          <div className="cta-right">
            <p className="cta-sub">Определим уровень, найдём проблемные темы, разберём реальное задание и выстроим стратегию.</p>
            <Button href="https://t.me/agafonwave" className="cta-btn" target="_blank" rel="noreferrer">
              Написать в Telegram <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
