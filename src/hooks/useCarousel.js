'use client';

import { useCallback, useEffect, useState } from 'react';

export default function useCarousel({ itemCount, gap = 16, containerRef }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    function update() {
      const nextVisible = window.innerWidth <= 860 ? 1 : 3;
      const container = containerRef?.current;

      setVisible(nextVisible);

      if (!container) return;

      const width = (container.offsetWidth - gap * (nextVisible - 1)) / nextVisible;
      setCardWidth(width);
      setCurrent(0);
    }

    update();
    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, [containerRef, gap]);

  const max = Math.max(0, itemCount - visible);

  useEffect(() => {
    setCurrent(prev => Math.min(prev, max));
  }, [max]);

  const prev = useCallback(() => {
    setCurrent(prevCurrent => (prevCurrent > 0 ? prevCurrent - 1 : max));
  }, [max]);

  const next = useCallback(() => {
    setCurrent(prevCurrent => (prevCurrent < max ? prevCurrent + 1 : 0));
  }, [max]);

  return { current, visible, cardWidth, prev, next };
}
