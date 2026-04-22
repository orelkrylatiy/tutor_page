'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '../data/reviews';
import useCarousel from '../hooks/useCarousel';

const GAP = 16;

export default function Reviews() {
  const outerRef = useRef(null);
  const { current, cardWidth, prev, next } = useCarousel({
    itemCount: reviews.length,
    gap: GAP,
    containerRef: outerRef,
  });

  return (
    <section>
      <h2 className="section-label">Отзывы</h2>
      <div className="fade-up">
        <div className="reviews-outer" ref={outerRef}>
          <div className="reviews-track" style={{ transform: `translateX(-${current * (cardWidth + GAP)}px)` }}>
            {reviews.map(review => (
              <div
                className="review-card"
                key={review.name}
                style={{ width: cardWidth || 'auto', minWidth: cardWidth || 'auto' }}
              >
                <div className="rav">
                  {review.imageSrc ? (
                    <Image src={review.imageSrc} alt={review.name} width={56} height={56} sizes="56px" />
                  ) : (
                    review.avatar
                  )}
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
          <button className="rev-btn" onClick={prev} type="button">
            <ChevronLeft size={17} />
          </button>
          <button className="rev-btn" onClick={next} type="button">
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
