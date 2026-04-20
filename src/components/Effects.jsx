'use client';

import { useEffect } from 'react';

export default function Effects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
